import React from "react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - RushDoc.com</title>
        <meta name="description" content="Get in touch with RushDoc.com for support or inquiries about our online legal document services." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>Contact information or a contact form will go here.</p>
      {/* TODO: Add actual contact details or form */}
      </div>
    </>
  );
};

export default ContactPage;
