import React from "react";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - RushDoc.com</title>
        <meta name="description" content="Learn more about RushDoc.com and our mission to provide affordable online legal document services." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>Information about RushDoc.com will go here.</p>
      {/* TODO: Add actual content about the company */}
      </div>
    </>
  );
};

export default AboutPage;
