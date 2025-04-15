import React, { useState } from "react";
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

interface DivorceQuestionnaireProps {
  onComplete?: (data: any) => void;
}

const DivorceQuestionnaire = ({
  onComplete = () => {},
}: DivorceQuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    spouseWhereabouts: "",
    agreementReached: "",
    spouseWillSign: "",
    personalInfo: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    spouseInfo: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    marriageInfo: {
      city: "",
      state: "",
      notInUSA: false,
    },
    childrenInfo: {
      minorChildren: "",
      wifePregnant: "",
      childrenState: "",
    },
    propertyInfo: {
      maritalProperty: "",
      separateProperty: "",
    },
    filingInfo: {
      petitioner: "",
      email: "",
      confirmEmail: "",
      phone: "",
    },
  });

  const steps = [
    { id: "qualification", title: "Qualification" },
    { id: "personal-info", title: "Personal Information" },
    { id: "marriage-info", title: "Marriage Information" },
    { id: "children-info", title: "Children Information" },
    { id: "property-info", title: "Property Information" },
    { id: "filing-info", title: "Filing Information" },
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

  const handleRadioChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
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

  const isQualified = () => {
    return (
      formData.spouseWhereabouts === "yes" &&
      formData.agreementReached === "yes" &&
      formData.spouseWillSign === "yes"
    );
  };

  const renderQualificationStep = () => (
    <QuestionnaireStep title="Qualification Check">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Do you know the whereabouts of your spouse?
          </h3>
          <RadioGroup
            value={formData.spouseWhereabouts}
            onValueChange={(value) =>
              handleRadioChange("spouseWhereabouts", value)
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="whereabouts-yes" />
              <Label htmlFor="whereabouts-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="whereabouts-no" />
              <Label htmlFor="whereabouts-no">No</Label>
            </div>
          </RadioGroup>

          {formData.spouseWhereabouts === "no" && (
            <Alert className="bg-amber-50 border-amber-200">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                If you are unable to locate your spouse you must file an
                Affidavit for Citation by Posting or Affidavit for Citation by
                Publication in order to complete your divorce. Texas Divorce
                Online can assist you.
              </AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Have you and your spouse reached an agreement on the terms of your
            divorce?
          </h3>
          <RadioGroup
            value={formData.agreementReached}
            onValueChange={(value) =>
              handleRadioChange("agreementReached", value)
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="agreement-yes" />
              <Label htmlFor="agreement-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="agreement-no" />
              <Label htmlFor="agreement-no">No</Label>
            </div>
          </RadioGroup>

          <p className="text-sm text-gray-600">
            In other words, have you and your spouse reached an agreement on how
            to divide your property and any debts, and if applicable, agreed on
            all issues regarding any minor children?
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Is your spouse willing to sign the divorce paperwork?
          </h3>
          <RadioGroup
            value={formData.spouseWillSign}
            onValueChange={(value) =>
              handleRadioChange("spouseWillSign", value)
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="willing-yes" />
              <Label htmlFor="willing-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="willing-no" />
              <Label htmlFor="willing-no">No</Label>
            </div>
          </RadioGroup>

          {formData.spouseWillSign === "no" && (
            <Alert className="bg-amber-50 border-amber-200">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                If your spouse is unwilling to sign a Waiver of Service you will
                have to have the divorce papers officially served on your
                spouse. This is often done by sending the sheriff or other
                process server to deliver the papers to your spouse.
              </AlertDescription>
            </Alert>
          )}
        </div>

        {formData.spouseWhereabouts &&
          formData.agreementReached &&
          formData.spouseWillSign && (
            <div className="mt-6 p-4 border rounded-md bg-gray-50">
              {isQualified() ? (
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-800">
                      You Qualify to Use Texas Divorce Online
                    </h3>
                    <p className="text-sm text-gray-700">
                      Based on your answers, you can use this website.
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      Texas Divorce Online allows you to complete your official
                      Texas Petition for Dissolution of Marriage, commonly known
                      as divorce, online.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-red-800">
                      You May Not Qualify for an Online Divorce
                    </h3>
                    <p className="text-sm text-gray-700">
                      Based on your answers, you may need additional legal
                      assistance. Please contact a lawyer or legal aid service
                      for guidance on your specific situation.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
      </div>
    </QuestionnaireStep>
  );

  const renderPersonalInfoStep = () => (
    <QuestionnaireStep title="Personal Information">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">
            Please provide information about yourself:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center">
                First Name <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="firstName"
                value={formData.personalInfo.firstName}
                onChange={(e) =>
                  handleInputChange("personalInfo", "firstName", e.target.value)
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="middleName">Middle Name</Label>
              <Input
                id="middleName"
                value={formData.personalInfo.middleName}
                onChange={(e) =>
                  handleInputChange(
                    "personalInfo",
                    "middleName",
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="flex items-center">
                Last Name <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="lastName"
                value={formData.personalInfo.lastName}
                onChange={(e) =>
                  handleInputChange("personalInfo", "lastName", e.target.value)
                }
                required
              />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Please provide your name. This is the name listed on your Social
            Security Card or Passport. For example, if your legal name is Robert
            do not list Bob as your name. Please use your legal name.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium mb-4">
            Please provide information about your spouse:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="spouseFirstName" className="flex items-center">
                Spouse's First Name <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="spouseFirstName"
                value={formData.spouseInfo.firstName}
                onChange={(e) =>
                  handleInputChange("spouseInfo", "firstName", e.target.value)
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="spouseMiddleName">Spouse's Middle Name</Label>
              <Input
                id="spouseMiddleName"
                value={formData.spouseInfo.middleName}
                onChange={(e) =>
                  handleInputChange("spouseInfo", "middleName", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="spouseLastName" className="flex items-center">
                Spouse's Last Name <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="spouseLastName"
                value={formData.spouseInfo.lastName}
                onChange={(e) =>
                  handleInputChange("spouseInfo", "lastName", e.target.value)
                }
                required
              />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Please provide your spouse's name. This is the name listed on their
            Social Security Card or Passport. For example, if their legal name
            is Robert do not list Bob as their name. Please use their legal
            name.
          </p>
        </div>
      </div>
    </QuestionnaireStep>
  );

  const renderMarriageInfoStep = () => (
    <QuestionnaireStep title="Marriage Information">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">
            To begin your divorce, please provide the following information
            about your marriage.
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Where were you and your spouse married? Please know that you can
            divorce in Texas even if you and your spouse were not married in
            Texas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="marriageCity" className="flex items-center">
                City where you and your spouse were married{" "}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="marriageCity"
                value={formData.marriageInfo.city}
                onChange={(e) =>
                  handleInputChange("marriageInfo", "city", e.target.value)
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="marriageState" className="flex items-center">
                State where you and your spouse were married{" "}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Select
                value={formData.marriageInfo.state}
                onValueChange={(value) =>
                  handleInputChange("marriageInfo", "state", value)
                }
              >
                <SelectTrigger id="marriageState">
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
          </div>
        </div>
      </div>
    </QuestionnaireStep>
  );

  const renderChildrenInfoStep = () => (
    <QuestionnaireStep title="Children Information">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Children Information</h3>
          <p className="text-sm text-gray-600 mb-4">
            You may still seek an online divorce if you have children as long as
            no dispute exists between you and your spouse regarding the custody,
            care, and financial support of the children.
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="minorChildren" className="flex items-center">
                How many minor children were born or adopted during your
                marriage? <span className="text-red-500 ml-1">*</span>
              </Label>
              <Select
                value={formData.childrenInfo.minorChildren}
                onValueChange={(value) =>
                  handleInputChange("childrenInfo", "minorChildren", value)
                }
              >
                <SelectTrigger id="minorChildren">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">None</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-600 mt-1">
                You should count any children born or adopted during your
                marriage that are under the age of 18 and dependent on you and
                your spouse for support. Also count any children you and your
                spouse had together before your marriage, or children your wife
                gave birth to during your marriage.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="wifePregnant" className="flex items-center">
                Is the wife currently pregnant?{" "}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Select
                value={formData.childrenInfo.wifePregnant}
                onValueChange={(value) =>
                  handleInputChange("childrenInfo", "wifePregnant", value)
                }
              >
                <SelectTrigger id="wifePregnant">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>

              {formData.childrenInfo.wifePregnant === "yes" && (
                <Alert className="bg-amber-50 border-amber-200 mt-2">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800">
                    If the wife is currently pregnant, you must wait until that
                    child is born before your divorce will be granted.
                  </AlertDescription>
                </Alert>
              )}
            </div>

            {formData.childrenInfo.minorChildren &&
              formData.childrenInfo.minorChildren !== "0" && (
                <div className="space-y-2">
                  <Label htmlFor="childrenState" className="flex items-center">
                    What State do the child (or Children) live in now?{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Select
                    value={formData.childrenInfo.childrenState}
                    onValueChange={(value) =>
                      handleInputChange("childrenInfo", "childrenState", value)
                    }
                  >
                    <SelectTrigger id="childrenState">
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
              )}
          </div>
        </div>
      </div>
    </QuestionnaireStep>
  );

  const renderPropertyInfoStep = () => (
    <QuestionnaireStep title="Property Information">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Property Information</h3>
          <Alert className="bg-blue-50 border-blue-200 mb-4">
            <InfoIcon className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              Texas is a "Community Property" state. This means that the
              property you have accumulated together during your marriage is
              presumed to be the property of both the husband and the wife.
              Similarly, all debts incurred during marriage are presumably debts
              shared by both the husband and the wife. Both community property
              and community debt must be divided in the Final Decree of Divorce,
              the final order that grants your divorce and sets out the terms.
              <br />
              <br />
              Property acquired by the husband or the wife before marriage is
              considered separate property. Additionally, inheritances and gifts
              given to a spouse during marriage are generally considered
              separate property.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">
                Do you and your spouse have any marital property that you
                acquired during your marriage?
              </h4>
              <RadioGroup
                value={formData.propertyInfo.maritalProperty}
                onValueChange={(value) =>
                  handleInputChange("propertyInfo", "maritalProperty", value)
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="marital-property-yes" />
                  <Label htmlFor="marital-property-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="marital-property-no" />
                  <Label htmlFor="marital-property-no">No</Label>
                </div>
              </RadioGroup>

              <p className="text-sm text-gray-600 mt-1">
                Community property would include home or other residence you own
                or are purchasing, or raw (or undeveloped) land; this also
                includes any and all checking, savings, or investment accounts,
                etc.; any retirement accounts such as IRAs, 401(K) accounts,
                pensions, etc. Community property could also include clothing,
                furnishings, art, jewelry, vehicles, pets, family businesses,
                antiques, guns, stamp collections or other collectibles,
                household contents, cemetery plots, country club memberships,
                etc.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">
                Do you or your spouse have any separate property?
              </h4>
              <RadioGroup
                value={formData.propertyInfo.separateProperty}
                onValueChange={(value) =>
                  handleInputChange("propertyInfo", "separateProperty", value)
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="separate-property-yes" />
                  <Label htmlFor="separate-property-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="separate-property-no" />
                  <Label htmlFor="separate-property-no">No</Label>
                </div>
              </RadioGroup>

              <p className="text-sm text-gray-600 mt-1">
                Separate property is property that was owned by a spouse prior
                to the marriage, acquired by a spouse after separation, or
                obtained by the spouse as an inheritance or gift at any time –
                even during the marriage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </QuestionnaireStep>
  );

  const renderFilingInfoStep = () => (
    <QuestionnaireStep title="Filing Information">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Which spouse will be listed as the one filing for the divorce?
          </h3>
          <RadioGroup
            value={formData.filingInfo.petitioner}
            onValueChange={(value) =>
              handleInputChange("filingInfo", "petitioner", value)
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="me" id="petitioner-me" />
              <Label htmlFor="petitioner-me">Me</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="spouse" id="petitioner-spouse" />
              <Label htmlFor="petitioner-spouse">My Spouse</Label>
            </div>
          </RadioGroup>

          <p className="text-sm text-gray-600">
            In the question above, identify the spouse who will be the
            Petitioner. Even though the divorce is agreed, one spouse must be
            designated as the Petitioner. The other spouse will be listed as the
            Respondent. The Petitioner is the spouse who must attend the simple
            court hearing to finalize the divorce decree. In most circumstances,
            the Respondent has the option to waive this appearance. Therefore,
            if one spouse lives out of state or if it will be more difficult for
            one spouse to visit the local district court, you will want to
            designate the other spouse as the Petitioner.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium mb-4">Contact Information</h3>
          <p className="text-sm text-gray-600 mb-4">
            After you complete the online interview your case will be processed
            and your divorce petition will be available by email or online.
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center">
                Please enter your e-mail address{" "}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.filingInfo.email}
                onChange={(e) =>
                  handleInputChange("filingInfo", "email", e.target.value)
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmEmail" className="flex items-center">
                Please confirm your e-mail address{" "}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="confirmEmail"
                type="email"
                value={formData.filingInfo.confirmEmail}
                onChange={(e) =>
                  handleInputChange(
                    "filingInfo",
                    "confirmEmail",
                    e.target.value,
                  )
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center">
                Please provide your best contact number{" "}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.filingInfo.phone}
                onChange={(e) =>
                  handleInputChange("filingInfo", "phone", e.target.value)
                }
                required
              />
              <p className="text-sm text-gray-600">
                In the event that we are unable to reach you via email, we will
                attempt to call you and notify that your divorce petition is
                complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </QuestionnaireStep>
  );

  const renderReviewStep = () => (
    <QuestionnaireStep title="Review Your Information">
      <div className="space-y-6">
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Your case registration has been submitted successfully. The next
            step in completing your divorce petition is to pay the case
            processing fee.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Next Steps</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              After your payment is processed, you will be provided with a login
              to your Texas Divorce Online case area where you will be prompted
              to answer additional questions required to complete your divorce.
            </li>
            <li>
              When completing the online questionnaire, explanations and helpful
              text are provided for each question.
            </li>
            <li>
              Your Texas divorce petition will be processed within 24 hours of
              receiving your answers to the additional questions.
            </li>
            <li>
              You will be provided with a copy of all your Texas documents via
              e-mail. The set of documents will depend on your particular
              circumstances. For example, if you indicated in your case
              registration that you have children you will be provided with a
              copy of your order of child support and parenting plan.
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
        return renderQualificationStep();
      case 1:
        return renderPersonalInfoStep();
      case 2:
        return renderMarriageInfoStep();
      case 3:
        return renderChildrenInfoStep();
      case 4:
        return renderPropertyInfoStep();
      case 5:
        return renderFilingInfoStep();
      case 6:
        return renderReviewStep();
      default:
        return renderQualificationStep();
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white">
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-bold text-center text-gray-800">
          Texas Online Divorce Application
        </CardTitle>
        <CardDescription className="text-center text-gray-600">
          Complete the questionnaire below to begin your divorce process
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ProgressTracker steps={steps} currentStep={currentStep} />
        <div className="mt-6">{renderCurrentStep()}</div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentStep === 0 && !isQualified()}
        >
          {currentStep < steps.length - 1 ? "Continue" : "Submit"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DivorceQuestionnaire;
