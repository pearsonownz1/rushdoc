import React from "react";
import { Helmet } from "react-helmet-async";

const TermsOfServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - RushDoc.com</title>
        <meta name="description" content="Review the terms of service for using RushDoc.com's online legal document services." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p>The terms of service details will go here.</p>
      {/* TODO: Add actual terms of service content */}
      </div>
    </>
  );
};

export default TermsOfServicePage;
