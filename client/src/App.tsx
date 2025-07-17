import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import Home from "@/pages/home";
import About from "@/pages/about";
import Products from "@/pages/products";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
// @ts-ignore
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Scroll } from "lucide-react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <WhatsAppFloat />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
