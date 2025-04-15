import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Star, Scroll, ShieldCheck, Users, Clock } from "lucide-react";
import SiteHeader from "./SiteHeader"; // Import shared header
import SiteFooter from "./SiteFooter"; // Import shared footer
// Removed duplicated/incorrect import block remnants and component definitions


const TrustLandingPage = () => {
  const navigate = useNavigate();

  const handleStartTrust = () => {
    navigate("/trust-questionnaire");
  };

  const trustFeatures = [
    "Revocable Living Trust",
    "Pour-Over Will",
    "Power of Attorney",
    "Healthcare Directives",
    "Schedule of Assets",
    "Avoid Probate Court",
  ];

  return (
    <>
      <Helmet>
        <title>Online Trust Creation - Protect Your Assets | RushDoc.com</title>
        <meta name="description" content="Create a comprehensive Revocable Living Trust online to protect your assets and avoid probate. Simple, guided process with RushDoc.com." />
      </Helmet>
      {/* Removed duplicate Helmet tag */}
      <SiteHeader />
      <main> {/* Remove container from main, apply to sections */}
        {/* Hero Section (Two Columns) */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             {/* Hero Text (Left) */}
            <div className="md:w-1/2 text-left"> {/* Adjusted width */}
             {/* Removed extra container div */}
             <Scroll className="h-16 w-16 text-primary mb-4" /> {/* Removed mx-auto */}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
              Create Your Revocable Living Trust Online
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8"> {/* Removed max-w and mx-auto */}
              Protect your assets, avoid probate court, and ensure your wishes are followed with our easy-to-use online trust creation service.
            </p>
            <Button size="lg" onClick={handleStartTrust}>
              Create Your Trust Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
             <p className="text-sm text-muted-foreground mt-4 mb-8">Get started in minutes. Attorney-reviewed documents.</p> {/* Added margin-bottom */}

             {/* --- Social Proof Elements START (Moved Here) --- */}
             <div className="mt-6"> {/* Removed border-t, pt-8 and adjusted margin */}
                <div className="flex justify-center md:justify-start items-center space-x-2 mb-4">
                  {/* Actual Headshots */}
                  <div className="flex -space-x-4">
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client 1" />
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client 2" />
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/76.jpg" alt="Client 3" />
                  </div>
                  {/* Stars */}
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-800 mb-6 text-center md:text-left">Trusted by over 50K Clients</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md mx-auto md:mx-0 items-center"> {/* Added items-center */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    {/* Actual BBB Badge */}
                    <img src="https://www.opentranslate.co/logos/bbb-accredited2.png" alt="BBB Accredited Business A+ Rating" className="h-10 mb-2" /> {/* Adjust height as needed */}
                    <p className="text-xs text-muted-foreground">Accredited with an A+ rating from the BBB</p>
                  </div>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    {/* Actual Trustpilot Badge */}
                     <img src="https://www.opentranslate.co/logos/trustpilot-logo.png" alt="Trustpilot Logo" className="h-6 mb-2" /> {/* Adjust height as needed */}
                    <p className="text-xs text-muted-foreground">Rated 4.8 Stars With 2.7k Reviews</p>
                  </div>
                </div>
             </div>
             {/* --- Social Proof Elements END --- */}
            </div>
             {/* Hero Image (Right) */}
            <div className="md:w-1/2"> {/* Adjusted width */}
               <img
                src="/happy-person-computer.jpg" // Use uploaded image from public dir
                alt="Happy person using RushDoc.com online services" // General alt text
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>

        {/* Features/Benefits Section (Full Width Below Hero) */}
        <section id="features" className="py-16 bg-white"> {/* Ensure this is outside the hero's closing div */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Create a Trust with RushDoc?
            </h2>
            {/* Adjusted grid for potentially smaller left column */}
            <div className="grid sm:grid-cols-2 gap-8 text-left">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Avoid Probate</h3>
                <p className="text-sm text-muted-foreground">Save your loved ones time, money, and stress by bypassing the lengthy probate process.</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                   <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Control Distribution</h3>
                <p className="text-sm text-muted-foreground">Specify exactly how and when your assets are distributed to beneficiaries.</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                   <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast & Simple</h3>
                <p className="text-sm text-muted-foreground">Our guided questionnaire makes the process quick and easy to understand.</p>
              </div>
            </div>
          </div>
        </section>

         {/* Included Documents Section (Full Width Below Hero) */}
        <section id="included" className="py-16 bg-muted/30"> {/* Ensure this is outside the hero's closing div */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What's Included in Your Trust Package?
            </h2>
            <Card className="bg-white"> {/* Removed max-w and mx-auto */}
                <CardHeader>
                    <CardTitle className="text-center">Comprehensive Trust-Based Estate Plan</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {trustFeatures.map((feature) => (
                             <li key={feature} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section - Placeholder Structure (Full Width) */}
         <section id="testimonials" className="py-16 bg-white"> {/* Ensure this is outside the hero's closing div */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Trusted by Families Like Yours
            </h2>
             {/* Adjusted grid for potentially smaller left column */}
            <div className="grid sm:grid-cols-2 gap-8">
              <Card className="bg-muted/20">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"Creating our trust was much easier than I expected. RushDoc guided us through every step. Peace of mind achieved!"</p>
                  <p className="font-semibold">- Michael S., California</p>
                </CardContent>
              </Card>
               <Card className="bg-muted/20">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"The process was simple and the documents were thorough. Feel much better knowing our assets are protected."</p>
                  <p className="font-semibold">- David & Lisa R., Florida</p>
                </CardContent>
              </Card>
               <Card className="bg-muted/20">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"Affordable and comprehensive trust package. Answered all my questions clearly. Highly recommend."</p>
                  <p className="font-semibold">- Emily P., New York</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section (Full Width) */}
        <section id="pricing" className="py-16 bg-primary/10"> {/* Ensure this is outside the hero's closing div */}
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Your Complete Trust Package Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8"> {/* Removed max-w and mx-auto */}
              One-time payment for a comprehensive, attorney-reviewed trust and supporting documents.
            </p>
             <p className="text-4xl font-bold mb-6">$349</p>
            <Button size="lg" onClick={handleStartTrust}>
              Start Your Trust Questionnaire <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default TrustLandingPage;
