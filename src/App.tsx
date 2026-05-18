import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import MotofixCaseStudy from "./pages/MotofixCaseStudy";
import MotofixDemo from "./pages/MotofixDemo";
import AquaSonicCaseStudy from "./pages/AquaSonicCaseStudy";
import CreatorMatchCaseStudy from "./pages/CreatorMatchCaseStudy";
import useSmoothScroll from "./hooks/useSmoothScroll";

const queryClient = new QueryClient();

const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  useSmoothScroll();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SmoothScrollWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/motofix-case-study" element={<MotofixCaseStudy />} />
            <Route path="/motofix-demo" element={<MotofixDemo />} />
            <Route path="/aquasonic-case-study" element={<AquaSonicCaseStudy />} />
            <Route path="/creatormatch-case-study" element={<CreatorMatchCaseStudy />} />
            
            {/* Placeholder routes for new sections */}
            <Route path="/case-studies" element={<NotFound />} />
            <Route path="/product-teardowns" element={<NotFound />} />
            <Route path="/learning" element={<NotFound />} />
            <Route path="/photography" element={<NotFound />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SmoothScrollWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
