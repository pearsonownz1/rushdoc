import React from "react";
import { motion } from "framer-motion";

interface Step {
  id: string;
  label: string;
  completed: boolean;
  current: boolean;
}

interface ProgressTrackerProps {
  steps: Step[];
  currentStepIndex: number;
  onStepClick?: (stepIndex: number) => void;
}

const ProgressTracker = ({
  steps = [
    { id: "1", label: "Personal Info", completed: true, current: false },
    { id: "2", label: "Marriage Details", completed: false, current: true },
    { id: "3", label: "Spouse Info", completed: false, current: false },
    { id: "4", label: "Children", completed: false, current: false },
    { id: "5", label: "Property", completed: false, current: false },
    { id: "6", label: "Review", completed: false, current: false },
  ],
  currentStepIndex = 1,
  onStepClick = () => {},
}: ProgressTrackerProps) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="relative">
        {/* Progress Bar Background */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />

        {/* Progress Bar Fill */}
        <motion.div
          className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-10"
          initial={{ width: "0%" }}
          animate={{
            width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Steps */}
        <div className="flex justify-between relative z-20">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center"
              onClick={() => (step.completed ? onStepClick(index) : null)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${step.completed ? "bg-primary text-white" : step.current ? "bg-primary-foreground border-2 border-primary text-primary" : "bg-gray-100 text-gray-400"} ${step.completed ? "cursor-pointer" : ""}`}
              >
                {step.completed ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <span className="text-xs font-medium">{index + 1}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${step.current ? "text-primary" : step.completed ? "text-gray-700" : "text-gray-400"}`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
