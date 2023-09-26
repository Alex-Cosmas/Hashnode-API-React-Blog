import React from "react";
import { Routes, Route } from "react-router-dom";

import ArticlePage from "./pages/ArticlePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex sm:px-8 lg:text-lg text-gray-900">
      <div className="flex flex-col mx-auto">
        <div className="flex-grow prose lg:prose-lg">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path={`/article/:id`} element={<ArticlePage />} />
              <Route path="/page-not-found" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ScrollToTop>
          <Footer />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
