#!/bin/bash

# PowerFix Website - Push to GitHub Script
# Repository: https://github.com/selimoner/PowerfixWebsite

echo "🚀 Pushing PowerFix Website to GitHub..."

# Remove existing git if any
rm -rf .git

# Initialize new git repository
git init

# Add remote repository
git remote add origin https://github.com/selimoner/PowerfixWebsite.git

# Add all files
git add .

# Commit with message
git commit -m "Initial commit: PowerFix corporate website

- Professional React/TypeScript website
- Real product images and branding
- Responsive design with Tailwind CSS
- Contact form with validation
- WhatsApp integration
- Multi-page navigation (Home, About, Products, Contact)
- PowerFix brand colors and styling
- Ready for deployment"

# Push to GitHub
git branch -M main
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo "🌐 Repository: https://github.com/selimoner/PowerfixWebsite"