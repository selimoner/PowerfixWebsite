<?php
/**
 * Powerfix website contact form handler.
 *
 * powerfix.rw is hosted on cPanel, which serves static files and PHP but does
 * not run the Node/Express server in /server. This script replaces the
 * Express /api/contact route in production: it validates the form and emails
 * it to the address below using the host's mail system.
 *
 * Compatible with PHP 7.0+.
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Where messages are delivered, and the sender address shown on them.
// The sender should be a mailbox on the powerfix.rw domain.
$TO   = 'info@powerfix.rw';
$FROM = 'info@powerfix.rw';

function respond($status, $success, $message)
{
    http_response_code($status);
    echo json_encode(array('success' => $success, 'message' => $message));
    exit;
}

function field($data, $key)
{
    return isset($data[$key]) && is_scalar($data[$key]) ? trim((string) $data[$key]) : '';
}

function str_len($s)
{
    return function_exists('mb_strlen') ? mb_strlen($s, 'UTF-8') : strlen($s);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Method not allowed.');
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    $data = $_POST;
}

$name    = field($data, 'name');
$email   = field($data, 'email');
$phone   = field($data, 'phone');
$message = field($data, 'message');
$company = field($data, 'company'); // hidden honeypot field; humans leave it empty

// Bots fill the hidden field: pretend success so they don't retry.
if ($company !== '') {
    respond(200, true, 'Thank you for contacting us!');
}

if (str_len($name) < 2) {
    respond(400, false, 'Please enter your name.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, false, 'Please enter a valid email address.');
}
if (str_len($message) < 10) {
    respond(400, false, 'Message must be at least 10 characters.');
}
if (str_len($name) > 100 || str_len($phone) > 40 || str_len($message) > 5000) {
    respond(400, false, 'Your message is too long.');
}
// Block email header injection through single-line fields.
foreach (array($name, $email, $phone) as $value) {
    if (preg_match('/[\r\n]/', $value)) {
        respond(400, false, 'Invalid input.');
    }
}

// Simple rate limit: at most 5 messages per visitor IP every 10 minutes.
$ip    = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown';
$store = rtrim(sys_get_temp_dir(), '/') . '/powerfix_contact_' . md5($ip);
$now   = time();
$hits  = array();
if (is_file($store)) {
    foreach (explode(',', (string) @file_get_contents($store)) as $t) {
        if ((int) $t > $now - 600) {
            $hits[] = (int) $t;
        }
    }
}
if (count($hits) >= 5) {
    respond(429, false, 'Too many messages. Please try again in a few minutes.');
}
$hits[] = $now;
@file_put_contents($store, implode(',', $hits), LOCK_EX);

$e = function ($s) {
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
};

$subject = '=?UTF-8?B?' . base64_encode('New website message from ' . $name) . '?=';
$body = '<h2>New contact form message (powerfix.rw)</h2>'
    . '<p><strong>Name:</strong> ' . $e($name) . '</p>'
    . '<p><strong>Email:</strong> ' . $e($email) . '</p>'
    . '<p><strong>Phone:</strong> ' . ($phone !== '' ? $e($phone) : 'Not provided') . '</p>'
    . '<p><strong>Message:</strong><br>' . nl2br($e($message)) . '</p>';

$headers = implode("\r\n", array(
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Powerfix Website <' . $FROM . '>',
    'Reply-To: ' . $email,
));

$sent = @mail($TO, $subject, $body, $headers, '-f' . $FROM);
if (!$sent) {
    // Some hosts reject the -f envelope option; try once without it.
    $sent = @mail($TO, $subject, $body, $headers);
}

if (!$sent) {
    respond(500, false, 'We could not send your message. Please call or WhatsApp us on +250 788 309 854.');
}

respond(200, true, 'Thank you! We will get back to you shortly.');
