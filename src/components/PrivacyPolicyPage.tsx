import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - RushDoc.com</title>
        <meta name="description" content="Read the RushDoc.com privacy policy to understand how we handle your data." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>The privacy policy details will go here.</p>
      {/* TODO: Add actual privacy policy content */}
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
