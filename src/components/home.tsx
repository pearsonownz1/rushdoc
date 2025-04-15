import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  ArrowRight,
  HelpCircle,
  FileText,
  Shield,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Texas Online Divorce</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary">
              How It Works
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              FAQ
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Contact
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Fast & Affordable Texas Divorce Online
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Complete your uncontested divorce without a lawyer. Save time and
            money with our simple, guided process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="gap-2">
              Start Your Divorce <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <HelpCircle className="h-4 w-4" /> See If You Qualify
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>No Court Appearance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>100% Court Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Complete in as little as 30 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Checker */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              See If You Qualify for Online Divorce
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Qualification Checker</CardTitle>
                <CardDescription>
                  Answer a few simple questions to see if you can use our online
                  divorce service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="spouse" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="spouse">Spouse</TabsTrigger>
                    <TabsTrigger value="agreement">Agreement</TabsTrigger>
                    <TabsTrigger value="signing">Signing</TabsTrigger>
                  </TabsList>
                  <TabsContent value="spouse" className="py-4">
                    <h3 className="text-lg font-medium mb-4">
                      Do you know the whereabouts of your spouse?
                    </h3>
                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1">
                        Yes
                      </Button>
                      <Button variant="outline" className="flex-1">
                        No
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      If you are unable to locate your spouse, you must file an
                      Affidavit for Citation by Posting or Affidavit for
                      Citation by Publication in order to complete your divorce.
                    </p>
                  </TabsContent>
                  <TabsContent value="agreement" className="py-4">
                    <h3 className="text-lg font-medium mb-4">
                      Have you and your spouse reached an agreement on the terms
                      of your divorce?
                    </h3>
                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1">
                        Yes
                      </Button>
                      <Button variant="outline" className="flex-1">
                        No
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      This means you've agreed on how to divide property and
                      debts, and if applicable, agreed on all issues regarding
                      any minor children.
                    </p>
                  </TabsContent>
                  <TabsContent value="signing" className="py-4">
                    <h3 className="text-lg font-medium mb-4">
                      Is your spouse willing to sign the divorce paperwork?
                    </h3>
                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1">
                        Yes
                      </Button>
                      <Button variant="outline" className="flex-1">
                        No
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      If your spouse is unwilling to sign a Waiver of Service,
                      you will have to have the divorce papers officially served
                      on your spouse, typically by a sheriff or process server.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost">Reset</Button>
                <Button>Continue</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
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
                Answer simple questions about your marriage, children, and
                property.
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
              <h3 className="text-xl font-semibold mb-3">File with Court</h3>
              <p className="text-muted-foreground">
                Print, sign, and file your documents with the court to finalize
                your divorce.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="gap-2">
              Start Your Divorce <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose Texas Online Divorce
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Court-Approved Forms
              </h3>
              <p className="text-muted-foreground">
                All documents are compliant with Texas court requirements.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Secure & Confidential
              </h3>
              <p className="text-muted-foreground">
                Your information is protected with bank-level security.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Get help from our customer support team whenever you need it.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Satisfaction Guarantee
              </h3>
              <p className="text-muted-foreground">
                We stand behind our service with a 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Divorce?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Complete your divorce paperwork in as little as 30 minutes. No
            lawyer required.
          </p>
          <Button size="lg" className="gap-2">
            Begin Questionnaire <ArrowRight className="h-4 w-4" />
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
                <span className="text-lg font-bold">Texas Online Divorce</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Affordable online divorce solutions for Texas residents.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Uncontested Divorce
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Divorce with Children
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Property Division
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Name Change
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Divorce Process
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Texas Divorce Laws
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Child Support Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
              © {new Date().getFullYear()} Texas Online Divorce. All rights
              reserved.
            </p>
            <p className="mt-2">
              This website provides information about divorce in Texas and
              access to divorce forms. We are not a law firm and do not provide
              legal advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
