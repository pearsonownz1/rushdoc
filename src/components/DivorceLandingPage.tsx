import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"; // Import Input component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Star, AlertCircle } from "lucide-react";
import SiteHeader from "./SiteHeader"; // Import shared header
import SiteFooter from "./SiteFooter"; // Import shared footer
// Removed duplicated/incorrect import block remnants


const DivorceLandingPage = () => {
  const navigate = useNavigate();

  const handleQualificationCheck = () => {
    // Navigate to the questionnaire or a specific qualification step
    navigate("/divorce-questionnaire");
  };

  return (
    <>
      <Helmet>
        <title>Online Divorce Service - Fast & Affordable | RushDoc.com</title>
        <meta name="description" content="Start your uncontested divorce online without expensive lawyer fees. Fast, affordable, and simple process with RushDoc.com." />
      </Helmet>
      {/* Removed duplicate Helmet tag */}
      <SiteHeader />
      <main> {/* Remove container from main, apply to sections */}
        {/* Hero Section (Two Columns) */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Hero Text (Left) */}
            <div className="md:w-1/2 text-left"> {/* Adjusted width */}
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
                Start Your Divorce Online Without Lawyer Fees.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8"> {/* Removed max-w and mx-auto */}
                Fast, affordable, and simple uncontested divorce process. Use our fully-guided questionnaire and filing service to complete your paperwork in minutes.
              </p>
              {/* Updated layout for email, state select, and button */}
              <div className="flex flex-col gap-2 mb-8">
                {/* Top line: Email input */}
                <div className="flex flex-row gap-2 w-full">
                  <div className="w-full sm:w-[280px]">
                    <label htmlFor="hero-email" className="sr-only">Email address</label>
                    <Input
                      id="hero-email"
                      type="email"
                      placeholder="Enter your email to get started"
                      className="w-full"
                    />
                  </div>
                </div>
                {/* Second line: State select and button */}
                <div className="flex flex-row gap-2 w-full">
                  <div className="w-full sm:w-[280px]">
                    <Select onValueChange={handleQualificationCheck}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your state to begin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AL">Alabama</SelectItem>
                        <SelectItem value="AK">Alaska</SelectItem>
                        <SelectItem value="AZ">Arizona</SelectItem>
                        <SelectItem value="AR">Arkansas</SelectItem>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="CO">Colorado</SelectItem>
                        <SelectItem value="CT">Connecticut</SelectItem>
                        <SelectItem value="DE">Delaware</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
                        <SelectItem value="GA">Georgia</SelectItem>
                        <SelectItem value="HI">Hawaii</SelectItem>
                        <SelectItem value="ID">Idaho</SelectItem>
                        <SelectItem value="IL">Illinois</SelectItem>
                        <SelectItem value="IN">Indiana</SelectItem>
                        <SelectItem value="IA">Iowa</SelectItem>
                        <SelectItem value="KS">Kansas</SelectItem>
                        <SelectItem value="KY">Kentucky</SelectItem>
                        <SelectItem value="LA">Louisiana</SelectItem>
                        <SelectItem value="ME">Maine</SelectItem>
                        <SelectItem value="MD">Maryland</SelectItem>
                        <SelectItem value="MA">Massachusetts</SelectItem>
                        <SelectItem value="MI">Michigan</SelectItem>
                        <SelectItem value="MN">Minnesota</SelectItem>
                        <SelectItem value="MS">Mississippi</SelectItem>
                        <SelectItem value="MO">Missouri</SelectItem>
                        <SelectItem value="MT">Montana</SelectItem>
                        <SelectItem value="NE">Nebraska</SelectItem>
                        <SelectItem value="NV">Nevada</SelectItem>
                        <SelectItem value="NH">New Hampshire</SelectItem>
                        <SelectItem value="NJ">New Jersey</SelectItem>
                        <SelectItem value="NM">New Mexico</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="NC">North Carolina</SelectItem>
                        <SelectItem value="ND">North Dakota</SelectItem>
                        <SelectItem value="OH">Ohio</SelectItem>
                        <SelectItem value="OK">Oklahoma</SelectItem>
                        <SelectItem value="OR">Oregon</SelectItem>
                        <SelectItem value="PA">Pennsylvania</SelectItem>
                        <SelectItem value="RI">Rhode Island</SelectItem>
                        <SelectItem value="SC">South Carolina</SelectItem>
                        <SelectItem value="SD">South Dakota</SelectItem>
                        <SelectItem value="TN">Tennessee</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        <SelectItem value="UT">Utah</SelectItem>
                        <SelectItem value="VT">Vermont</SelectItem>
                        <SelectItem value="VA">Virginia</SelectItem>
                        <SelectItem value="WA">Washington</SelectItem>
                        <SelectItem value="WV">West Virginia</SelectItem>
                        <SelectItem value="WI">Wisconsin</SelectItem>
                        <SelectItem value="WY">Wyoming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-shrink-0 w-full sm:w-auto">
                    <Button size="lg" onClick={handleQualificationCheck} className="w-full whitespace-nowrap">
                      See if you qualify <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-8">Get started now and see if you qualify for our online service.</p>

              {/* --- Social Proof Elements START (Moved directly below paragraph) --- */}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md mx-auto md:mx-0 items-center"> {/* Added items-center for vertical alignment */}
                  {/* BBB and Trustpilot logos aligned horizontally */}
                  <div className="flex flex-row items-center gap-2">
                    <img src="https://www.opentranslate.co/logos/bbb-accredited2.png" alt="BBB Accredited Business A+ Rating" className="h-10" />
                    <div>
                      <p className="text-xs text-muted-foreground">Accredited with an A+ rating from the BBB</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <img src="https://www.opentranslate.co/logos/trustpilot-logo.png" alt="Trustpilot Logo" className="h-6" />
                    <div>
                      <p className="text-xs text-muted-foreground">Rated 4.8 Stars With 2.7k Reviews</p>
                    </div>
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
                width="500" // Adjust as needed
                height="500" // Adjust as needed
              />
            </div>
          </div>
        </section>

        {/* Process Overview Section (Full Width Below Hero) - This section remains below the hero */}
        <section id="process" className="py-16 bg-white"> {/* This section is now outside the two-column hero */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Our Simple 4-Step Process
            </h2>
            {/* Original 4-column grid for horizontal layout */}
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Check if you qualify</h3>
                <p className="text-sm text-muted-foreground">Answer a few simple questions to ensure our service fits your needs.</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                   {/* Placeholder Icon */} <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Complete the questionnaire</h3>
                <p className="text-sm text-muted-foreground">Fill out our guided online form with your details and agreements.</p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                   {/* Placeholder Icon */} <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Review your forms</h3>
                <p className="text-sm text-muted-foreground">We generate your official documents for you to review and approve.</p>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                   {/* Placeholder Icon */} <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">4. File for divorce</h3>
                <p className="text-sm text-muted-foreground">Print, sign, and file your completed documents with the court.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Testimonials Section - Placeholder Structure (Full Width) */}
         <section id="testimonials" className="py-16 bg-muted/30"> {/* This section remains full width */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            {/* Using 3 columns again for testimonials */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Example Testimonial Card */}
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"Saved me thousands and the process was so straightforward. Highly recommend RushDoc for anyone needing an uncontested divorce."</p>
                  <p className="font-semibold">- Jennifer T., Texas</p>
                </CardContent>
              </Card>
               <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"The questionnaire was easy to follow, and customer support was helpful when I had a question. Much less stressful than hiring a lawyer."</p>
                  <p className="font-semibold">- Michael R., California</p>
                </CardContent>
              </Card>
               <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"Fast, affordable, and exactly what we needed for our simple divorce. The documents were ready quickly."</p>
                  <p className="font-semibold">- Sarah L., Florida</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Comparison Section (Full Width) */}
        <section id="pricing" className="py-16 bg-white"> {/* This section remains full width */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Affordable Online Divorce vs. Traditional Lawyers
            </h2>
             {/* Using 2 columns again for pricing comparison */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="text-primary">Online Divorce with RushDoc</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-4xl font-bold">$199 <span className="text-lg font-normal text-muted-foreground">Limited Time Offer</span></p>
                  <p className="text-muted-foreground">Ideal for uncontested divorces where both parties agree.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Fast & Guided Process</span></li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Court-Ready Documents</span></li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Avoid Lawyer Fees</span></li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Complete Online</span></li>
                  </ul>
                   <Button className="w-full mt-4" onClick={handleQualificationCheck}>Get Started Now</Button>
                </CardContent>
              </Card>
              <Card>
                 <CardHeader>
                  <CardTitle>Traditional Divorce Lawyer</CardTitle>
                </CardHeader>
                 <CardContent className="space-y-4">
                   <p className="text-4xl font-bold">$11,000+ <span className="text-lg font-normal text-muted-foreground">Average Cost</span></p>
                   <p className="text-muted-foreground">Typically required for contested divorces with disagreements.</p>
                   <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><AlertCircle className="h-4 w-4 text-red-500" /><span>Lengthy Process (Months/Years)</span></li>
                    <li className="flex items-center gap-2"><AlertCircle className="h-4 w-4 text-red-500" /><span>High Hourly Lawyer Fees</span></li>
                    <li className="flex items-center gap-2"><AlertCircle className="h-4 w-4 text-red-500" /><span>Multiple Court Appearances</span></li>
                    <li className="flex items-center gap-2"><AlertCircle className="h-4 w-4 text-red-500" /><span>Often Stressful & Complex</span></li>
                  </ul>
                   <Button variant="outline" className="w-full mt-4" disabled>Not Offered Here</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default DivorceLandingPage;
