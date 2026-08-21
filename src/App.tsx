import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WeddingsPage from "./pages/weddings";
import CorporatePage from "./pages/corporate";
import AboutPage from "./pages/about";
import BlogIndex from './pages/blog-index';
import BlogArticleLayout from './BlogArticleLayout';
import FiveQuestionsPage from "./pages/5-questions";
import IGRedirect from "./pages/IGRedirect";
import { useAnalytics } from "@/hooks/use-analytics";

// 🔧 This ensures the hook only runs once Router is mounted
const AnalyticsTracker = () => {
  useAnalytics();
  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/weddings" element={<WeddingsPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogArticleLayout />} />
          <Route path="/5-questions" element={<FiveQuestionsPage />} />
          <Route path="/ig" element={<IGRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
