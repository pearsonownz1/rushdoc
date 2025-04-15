import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface LegalServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  ctaText: string;
  icon: React.ReactNode;
  onGetStarted: () => void;
}

const LegalServiceCard = ({
  title,
  description,
  price,
  features,
  ctaText,
  icon,
  onGetStarted = () => {},
}: LegalServiceCardProps) => {
  return (
    <Card className="w-full bg-white h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-3xl font-bold mb-4">{price}</div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button onClick={onGetStarted} className="w-full gap-2">
          {ctaText} <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LegalServiceCard;
