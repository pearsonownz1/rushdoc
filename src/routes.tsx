import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DivorceQuestionnaire from "./components/DivorceQuestionnaire";
import TrustQuestionnaire from "./components/TrustQuestionnaire";
import WillQuestionnaire from "./components/WillQuestionnaire";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/divorce-questionnaire" element={<DivorceQuestionnaire />} />
      <Route path="/trust-questionnaire" element={<TrustQuestionnaire />} />
      <Route path="/will-questionnaire" element={<WillQuestionnaire />} />
    </Routes>
  );
};

export default AppRoutes;
