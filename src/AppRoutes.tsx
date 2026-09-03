import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WeddingsPage from "./pages/weddings";
import CorporatePage from "./pages/corporate";
import AboutPage from "./pages/about";
import PrivacyPolicyPage from "./pages/privacy-policy";
import UnsubscribePage from "./pages/unsubscribe";
import BlogIndex from "./pages/blog-index";
import BlogArticleLayout from "./BlogArticleLayout";
import FiveQuestionsPage from "./pages/5-questions";
import IGRedirect from "./pages/IGRedirect";
import { useAnalytics } from "@/hooks/use-analytics";

const AnalyticsTracker = () => {
  useAnalytics();
  return null;
};

export const AppRoutes = () => {
  return (
    <>
      <AnalyticsTracker />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/weddings" element={<WeddingsPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/unsubscribe" element={<UnsubscribePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogArticleLayout />} />
        <Route path="/5-questions" element={<FiveQuestionsPage />} />
        <Route path="/ig" element={<IGRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
