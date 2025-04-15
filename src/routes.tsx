import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DivorceQuestionnaire from "./components/DivorceQuestionnaire";
import TrustQuestionnaire from "./components/TrustQuestionnaire";
import WillQuestionnaire from "./components/WillQuestionnaire";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsOfServicePage from "./components/TermsOfServicePage";
import EstatePlanningGuidePage from "./components/EstatePlanningGuidePage";
import DivorceProcessPage from "./components/DivorceProcessPage";
import DivorceLandingPage from "./components/DivorceLandingPage";
import TrustLandingPage from "./components/TrustLandingPage";
import WillLandingPage from "./components/WillLandingPage"; // Import the new landing page

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/divorce-questionnaire" element={<DivorceQuestionnaire />} />
      <Route path="/trust-questionnaire" element={<TrustQuestionnaire />} />
      <Route path="/will-questionnaire" element={<WillQuestionnaire />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/estate-planning-guide" element={<EstatePlanningGuidePage />} />
      <Route path="/divorce-process" element={<DivorceProcessPage />} />
      <Route path="/service/divorce" element={<DivorceLandingPage />} />
      <Route path="/service/trust" element={<TrustLandingPage />} />
      <Route path="/service/will" element={<WillLandingPage />} /> {/* Add route for the landing page */}
    </Routes>
  );
};

export default AppRoutes;
