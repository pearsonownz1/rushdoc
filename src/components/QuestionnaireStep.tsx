import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuestionnaireStepProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  onNext?: () => void;
  onPrevious?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
}

const QuestionnaireStep: React.FC<QuestionnaireStepProps> = ({
  title,
  description,
  children,
  onNext,
  onPrevious,
  isFirstStep = false,
  isLastStep = false,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNext) onNext();
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <p className="text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {children}
        </form>
      </CardContent>
      {(onNext || onPrevious) && (
        <CardFooter className="flex justify-between">
          {onPrevious && (
            <Button
              type="button"
              variant="outline"
              onClick={onPrevious}
              disabled={isFirstStep}
            >
              Previous
            </Button>
          )}
          {!onPrevious && <div />}
          {onNext && (
            <Button type="button" onClick={onNext}>
              {isLastStep ? "Submit" : "Next"}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default QuestionnaireStep;
