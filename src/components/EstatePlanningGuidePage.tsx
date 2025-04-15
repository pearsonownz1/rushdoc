import React from "react";
import { Helmet } from "react-helmet-async";

const EstatePlanningGuidePage = () => {
  return (
    <>
      <Helmet>
        <title>Estate Planning Guide - RushDoc.com</title>
        <meta name="description" content="Learn about estate planning basics with RushDoc.com's helpful guide." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Estate Planning Guide</h1>
      <p>The estate planning guide content will go here.</p>
      {/* TODO: Add actual guide content */}
      </div>
    </>
  );
};

export default EstatePlanningGuidePage;
