import React from "react";

export const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="text-blue-500 w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
