import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Use combined import
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
// Removed Tabs imports as they are not used in HomePage.tsx
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Shield,
  FileText,
  Scroll,
  Scale,
  CheckCircle,
  ArrowRight,
  ChevronDown, // Keep ChevronDown
} from "lucide-react";
import LegalServiceCard from "./LegalServiceCard"; // Keep single import

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>RushDoc.com - Fast & Easy Legal Document Services</title>
        <meta name="description" content="Get affordable online legal documents for trusts, wills, and uncontested divorces quickly and easily with RushDoc.com." />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">RushDoc.com</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
             <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-primary focus:outline-none">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/service/divorce">Uncontested Divorce</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/service/trust">Estate Planning (Trusts)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/service/will">Estate Planning (Wills)</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
                Fast & Affordable Legal Documents Online
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Trusted legal documents for Trusts, Wills, and Uncontested
                Divorces—ready in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90"
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Learn More
                </Button>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Attorney-Reviewed Documents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>State-Specific & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Quick & Easy Questionnaire</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="Diverse team of legal professionals"
                className="rounded-lg shadow-lg max-w-full h-auto"
                width="500"
                height="375"
              />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-gray-500 text-sm font-medium">
                Trusted by thousands
              </div>
              <div className="flex gap-8 flex-wrap justify-center">
                <div className="text-gray-700 font-semibold">
                  BBB Accredited
                </div>
                <div className="text-gray-700 font-semibold">
                  Trustpilot ★★★★★
                </div>
                <div className="text-gray-700 font-semibold">
                  Secure & Encrypted
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Legal Document Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <LegalServiceCard
              title="Estate Planning (Trusts)"
              description="Create a comprehensive trust to protect your assets and avoid probate."
              price="Starting at $349"
              features={[
                "Revocable Living Trust",
                "Pour-Over Will",
                "Power of Attorney",
                "Healthcare Directives",
                "Schedule of Assets",
                "Avoid Probate Court",
              ]}
              ctaText="Create Your Trust"
              icon={<Scroll className="h-6 w-6 text-primary" />}
              onGetStarted={() => navigate("/trust-questionnaire")}
            />
            <LegalServiceCard
              title="Estate Planning (Wills)"
              description="Create a legally binding will to ensure your wishes are carried out."
              price="Starting at $149"
              features={[
                "Last Will & Testament",
                "Healthcare Directives",
                "Medical Consent",
                "Power of Attorney",
                "Guardian Designation",
                "Asset Distribution",
              ]}
              ctaText="Create Your Will"
              icon={<FileText className="h-6 w-6 text-primary" />}
              onGetStarted={() => navigate("/will-questionnaire")}
            />
            <LegalServiceCard
              title="Uncontested Divorce"
              description="Complete your divorce paperwork without expensive legal fees."
              price="Starting at $199"
              features={[
                "Complete Divorce Petition",
                "Property Division",
                "Child Custody & Support",
                "Spousal Support",
                "Name Change Options",
                "Court Filing Instructions",
              ]}
              ctaText="Start Your Divorce"
              icon={<Scale className="h-6 w-6 text-primary" />}
              onGetStarted={() => navigate("/divorce-questionnaire")}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Complete Questionnaire
              </h3>
              <p className="text-muted-foreground">
                Answer simple questions about your specific situation and needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Review Documents</h3>
              <p className="text-muted-foreground">
                We'll generate all required legal documents for your review.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Finalize & File</h3>
              <p className="text-muted-foreground">
                Print, sign, and file your documents according to your state's
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The trust creation process was so simple. I was able to
                complete everything in under an hour, and the documents were
                exactly what I needed."
              </p>
              <div className="font-medium">- Michael S., California</div>
            </div>
            <div className="bg-muted/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I saved thousands in legal fees by using RushDoc for my
                divorce. The questionnaire was straightforward and the customer
                support was excellent."
              </p>
              <div className="font-medium">- Jennifer T., Texas</div>
            </div>
            <div className="bg-muted/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Creating a will had been on my to-do list for years. RushDoc
                made it so easy that I finished it in one evening. Highly
                recommend!"
              </p>
              <div className="font-medium">- Robert L., Florida</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Complete your legal documents in as little as 30 minutes. No lawyer
            required.
          </p>
          <Button
            size="lg"
            className="gap-2"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Choose a Service <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">RushDoc.com</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Affordable online legal document solutions for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/trust-questionnaire"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Estate Planning (Trusts)
                  </a>
                </li>
                <li>
                  <a
                    href="/will-questionnaire"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Estate Planning (Wills)
                  </a>
                </li>
                <li>
                  <a
                    href="/divorce-questionnaire"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Uncontested Divorce
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/estate-planning-guide"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Estate Planning Guide
                  </a>
                </li>
                <li>
                  <a
                    href="/divorce-process"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Divorce Process
                  </a>
                </li>
                {/* TODO: Create FAQ page and link */}
                <li>
                  <a
                    href="#faq" // Keeping as anchor link for now
                    className="text-muted-foreground hover:text-primary"
                  >
                    Legal Document FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} RushDoc.com. All rights reserved.
            </p>
            <p className="mt-2">
              This website provides information about legal documents and access
              to document preparation services. We are not a law firm and do not
              provide legal advice.
            </p>
          </div>
        </div>
      </footer>
      </main>
      </div>
    </>
  );
};

export default HomePage;
