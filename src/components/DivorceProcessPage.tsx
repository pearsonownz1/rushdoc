import React from "react";
import { Helmet } from "react-helmet-async";

const DivorceProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Divorce Process Guide - RushDoc.com</title>
        <meta name="description" content="Understand the uncontested divorce process with this guide from RushDoc.com." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Divorce Process</h1>
      <p>Information about the divorce process will go here.</p>
      {/* TODO: Add actual content about the divorce process */}
      </div>
    </>
  );
};

export default DivorceProcessPage;
