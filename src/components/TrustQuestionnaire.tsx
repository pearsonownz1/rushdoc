import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, AlertCircle, CheckCircle2 } from "lucide-react";
import ProgressTracker from "./ProgressTracker";
import QuestionnaireStep from "./QuestionnaireStep";

interface TrustQuestionnaireProps {
  onComplete?: (data: any) => void;
}

const TrustQuestionnaire = ({
  onComplete = () => {},
}: TrustQuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    contactInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    personalInfo: {
      age: "",
      planningJourney: "",
      state: "",
      maritalStatus: "",
    },
    familyInfo: {
      minorChildren: "",
      ownHome: "",
      nominateGuardian: "",
    },
    estateInfo: {
      avoidProbate: "",
      controlAssets: "",
    },
    packageSelection: {
      selectedPackage: "",
    },
  });

  const steps = [
    { id: "contact-info", title: "Contact Information" },
    { id: "personal-info", title: "Personal Information" },
    { id: "family-info", title: "Family Information" },
    { id: "estate-info", title: "Estate Information" },
    { id: "package-selection", title: "Package Selection" },
    { id: "review", title: "Review" },
  ];

  const handleInputChange = (
    section: string,
    field: string,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderContactInfoStep = () => (
    <QuestionnaireStep
      title="Contact Information"
      onNext={handleNext}
      onPrevious={handleBack}
      isFirstStep={currentStep === 0}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="flex items-center">
              First Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="firstName"
              value={formData.contactInfo.firstName}
              onChange={(e) =>
                handleInputChange("contactInfo", "firstName", e.target.value)
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="flex items-center">
              Last Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="lastName"
              value={formData.contactInfo.lastName}
              onChange={(e) =>
                handleInputChange("contactInfo", "lastName", e.target.value)
              }
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center">
              Email Address <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.contactInfo.email}
              onChange={(e) =>
                handleInputChange("contactInfo", "email", e.target.value)
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center">
              Phone Number <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.contactInfo.phone}
              onChange={(e) =>
                handleInputChange("contactInfo", "phone", e.target.value)
              }
              required
            />
          </div>
        </div>
      </div>
    </QuestionnaireStep>
  );

  const renderPersonalInfoStep = () => (
    <QuestionnaireStep
      title="Personal Information"
      onNext={handleNext}
      onPrevious={handleBack}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="age" className="flex items-center">
            Age <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="age"
            type="number"
            value={formData.personalInfo.age}
            onChange={(e) =>
              handleInputChange("personalInfo", "age", e.target.value)
            }
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="planningJourney" className="flex items-center">
            Where are you in your Estate Planning journey?{" "}
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Select
            value={formData.personalInfo.planningJourney}
            onValueChange={(value) =>
              handleInputChange("personalInfo", "planningJourney", value)
            }
          >
            <SelectTrigger id="planningJourney">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ready">I'm ready to get it done</SelectItem>
              <SelectItem value="evaluatingOptions">
                I'm evaluating options
              </SelectItem>
              <SelectItem value="startingToLearn">
                I'm just starting to learn
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="state" className="flex items-center">
            What State do you live in?{" "}
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Select
            value={formData.personalInfo.state}
            onValueChange={(value) =>
              handleInputChange("personalInfo", "state", value)
            }
          >
            <SelectTrigger id="state">
              <SelectValue placeholder="Select state" />
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

        <div className="space-y-2">
          <Label htmlFor="maritalStatus" className="flex items-center">
            What's your marital status?{" "}
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Select
            value={formData.personalInfo.maritalStatus}
            onValueChange={(value) =>
              handleInputChange("personalInfo", "maritalStatus", value)
            }
          >
            <SelectTrigger id="maritalStatus">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widow">Widowed</SelectItem>
              <SelectItem value="civilUnion">In a Civil union</SelectItem>
              <SelectItem value="domesticPartner">
                Registered domestic partnership
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </QuestionnaireStep>
  );

  const renderFamilyInfoStep = () => (
    <QuestionnaireStep
      title="Family Information"
      onNext={handleNext}
      onPrevious={handleBack}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Do you have any minor children?
          </h3>
          <RadioGroup
            value={formData.familyInfo.minorChildren}
            onValueChange={(value) =>
              handleInputChange("familyInfo", "minorChildren", value)
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="children-yes" />
              <Label htmlFor="children-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="children-no" />
              <Label htmlFor="children-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Do you own a home?</h3>
          <RadioGroup
            value={formData.familyInfo.ownHome}
            onValueChange={(value) =>
              handleInputChange("familyInfo", "ownHome", value)
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="home-yes" />
              <Label htmlFor="home-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="home-no" />
              <Label htmlFor="home-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.familyInfo.minorChildren === "true" && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Would you like to nominate a Legal Guardian for your minor
              children?
            </h3>
            <RadioGroup
              value={formData.familyInfo.nominateGuardian}
              onValueChange={(value) =>
                handleInputChange("familyInfo", "nominateGuardian", value)
              }
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="guardian-yes" />
                <Label htmlFor="guardian-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="guardian-no" />
                <Label htmlFor="guardian-no">No</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Not sure" id="guardian-not-sure" />
                <Label htmlFor="guardian-not-sure">Not sure</Label>
              </div>
            </RadioGroup>
          </div>
        )}
      </div>
    </QuestionnaireStep>
  );

  const renderEstateInfoStep = () => (
    <QuestionnaireStep
      title="Estate Information"
      onNext={handleNext}
      onPrevious={handleBack}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Would you want your heirs to avoid probate court?
          </h3>
          <RadioGroup
            value={formData.estateInfo.avoidProbate}
            onValueChange={(value) =>
              handleInputChange("estateInfo", "avoidProbate", value)
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="probate-yes" />
              <Label htmlFor="probate-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="doesntMatter" id="probate-doesnt-matter" />
              <Label htmlFor="probate-doesnt-matter">
                Doesn't matter to me
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dontKnow" id="probate-dont-know" />
              <Label htmlFor="probate-dont-know">I don't know</Label>
            </div>
          </RadioGroup>

          <Alert className="bg-blue-50 border-blue-200">
            <InfoIcon className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              Probate is the legal process through which a Will is validated by
              a court. The average cost of probate can range from about $2,000
              to $15,000. For larger estates costs can easily exceed $20,000. It
              usually takes 9-24 months to settle.
            </AlertDescription>
          </Alert>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            How important is it for you to control when your heirs receive your
            assets?
          </h3>
          <p className="text-sm text-gray-600">
            e.g. 50% upon death. 50% when they turn 25.
          </p>
          <RadioGroup
            value={formData.estateInfo.controlAssets}
            onValueChange={(value) =>
              handleInputChange("estateInfo", "controlAssets", value)
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="veryImportant" id="control-very" />
              <Label htmlFor="control-very">Very important</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="somewhatImportant" id="control-somewhat" />
              <Label htmlFor="control-somewhat">Somewhat important</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notImportant" id="control-not" />
              <Label htmlFor="control-not">Not important</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </QuestionnaireStep>
  );

  const renderPackageSelectionStep = () => (
    <QuestionnaireStep
      title="Select Your Package"
      onNext={handleNext}
      onPrevious={handleBack}
    >
      <div className="space-y-6">
        <Alert className="bg-green-50 border-green-200 mb-6">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Based on your responses, a "Trust-Based Estate Plan" may be a good
            fit for you. This includes a Revocable Living Trust and an
            accompanying Will, to ensure your heirs avoid probate court and
            receive your assets based on the schedules you determine. It also
            includes Power of Attorney, Guardianship, Health Care directive and
            more.
          </AlertDescription>
        </Alert>

        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">
            Start Now, Pay 30 Days Later
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              • Step 1: Choose your package and answer simple questions about
              your wishes.
            </li>
            <li>• Step 2: We'll prepare your documents for you to review.</li>
            <li>
              • Step 3: Like the results? Your payment will process
              automatically. Not sure? Cancel anytime during the 30 days to
              avoid charges.
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            className={`border-2 ${formData.packageSelection.selectedPackage === "will" ? "border-primary" : "border-gray-200"}`}
          >
            <CardHeader>
              <CardTitle>Will-Based Estate Plan</CardTitle>
              <CardDescription>
                Free for 30 days, then one time payment
              </CardDescription>
              <div className="text-3xl font-bold mt-2">$149</div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                A plan to distribute your assets, choose guardians for your
                children, and appoint healthcare & financial agents.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Last Will & Testament</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Healthcare directives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Medical consent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Power of Attorney</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={
                  formData.packageSelection.selectedPackage === "will"
                    ? "default"
                    : "outline"
                }
                className="w-full"
                onClick={() =>
                  handleInputChange(
                    "packageSelection",
                    "selectedPackage",
                    "will",
                  )
                }
              >
                Select
              </Button>
            </CardFooter>
          </Card>

          <Card
            className={`border-2 ${formData.packageSelection.selectedPackage === "trust" ? "border-primary" : "border-gray-200"}`}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Trust-Based Estate Plan</CardTitle>
                  <CardDescription>
                    Free for 30 days, then one time payment
                  </CardDescription>
                  <div className="text-3xl font-bold mt-2">$349</div>
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold py-1 px-2 rounded">
                  RECOMMENDED
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Get everything included in our Will plan, plus create a Trust
                that will help transfer your assets and avoid probate.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Revocable Living Trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Schedule of Assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Last Will & Testament</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Healthcare directives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Medical consent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Power of Attorney</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={
                  formData.packageSelection.selectedPackage === "trust"
                    ? "default"
                    : "outline"
                }
                className="w-full"
                onClick={() =>
                  handleInputChange(
                    "packageSelection",
                    "selectedPackage",
                    "trust",
                  )
                }
              >
                Select
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-3">
            What are the benefits of a Trust?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            With a trust, your estate is likely to avoid probate and spare your
            beneficiaries fees and expenses incurred in court, as well as delays
            associated with the probate process. For a nominal additional
            expense — compared to a will — you'll be saving your family time and
            costs.
          </p>
          <p className="text-sm text-gray-600">
            You can set specific conditions for inheritance, like when and how
            your beneficiaries receive assets, and adjust terms as life changes.
          </p>
        </div>
      </div>
    </QuestionnaireStep>
  );

  const renderReviewStep = () => (
    <QuestionnaireStep
      title="Review Your Information"
      onNext={handleNext}
      onPrevious={handleBack}
      isLastStep={true}
    >
      <div className="space-y-6">
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Your information has been submitted successfully. We'll begin
            preparing your documents right away.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Next Steps</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              You'll receive an email with a link to access your account where
              you can review your documents.
            </li>
            <li>
              You have 30 days to review your documents before your payment
              method will be charged.
            </li>
            <li>
              If you need to make any changes or have questions, our support
              team is available to assist you.
            </li>
            <li>
              Once you're satisfied with your documents, you'll need to print,
              sign, and notarize them according to your state's requirements.
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-md">
            Continue to Payment
          </Button>
        </div>
      </div>
    </QuestionnaireStep>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderContactInfoStep();
      case 1:
        return renderPersonalInfoStep();
      case 2:
        return renderFamilyInfoStep();
      case 3:
        return renderEstateInfoStep();
      case 4:
        return renderPackageSelectionStep();
      case 5:
        return renderReviewStep();
      default:
        return renderContactInfoStep();
    }
  };

  return (
    <>
      <Helmet>
        <title>Estate Planning (Trusts) Questionnaire - RushDoc.com</title>
        <meta name="description" content="Create your comprehensive trust online with RushDoc.com's guided questionnaire." />
      </Helmet>
      <Card className="w-full max-w-4xl mx-auto bg-white">
        <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-bold text-center text-gray-800">
          Estate Planning Trust Questionnaire
        </CardTitle>
        <CardDescription className="text-center text-gray-600">
          Complete the questionnaire below to create your personalized trust
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ProgressTracker
          steps={steps.map((step, index) => ({
            id: step.id,
            label: step.title,
            completed: index < currentStep,
            current: index === currentStep,
          }))}
          currentStepIndex={currentStep}
          onStepClick={(index) => {
            if (index < currentStep) {
              setCurrentStep(index);
            }
          }}
        />
        <div className="mt-6">{renderCurrentStep()}</div>
      </CardContent>
      </Card>
    </>
  );
};

export default TrustQuestionnaire;
