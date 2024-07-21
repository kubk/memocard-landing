import { Check, X } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  purchaseText: string;
  features: Array<{ included: boolean; text: string }>;
  isProPlan?: boolean;
};

export const PlanCard = ({ title, purchaseText, features, isProPlan }: Props) => {
  const payLink =
    "https://memocard.lemonsqueezy.com/buy/c6563ccb-8aa0-4a6e-931d-a0cc3740dbbe";

  return (
    <div
      className={`bg-white p-6 rounded-2xl shadow-md ${isProPlan ? "border-2 border-blue-500" : ""}`}
    >
      <h3
        className={`text-2xl font-bold mb-4 ${isProPlan ? "text-blue-600" : "text-gray-800"}`}
      >
        {title}
      </h3>
      <ul className="space-y-2">
        {features.map((feature: any, index: any) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <Check className="text-green-500 mr-2 flex-shrink-0" />
            ) : (
              <X className="text-red-500 mr-2 flex-shrink-0" />
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      {isProPlan ? (
        <a className={"block mt-4"} href={payLink}>
          <Button>{purchaseText}</Button>
        </a>
      ) : null}
    </div>
  );
};
