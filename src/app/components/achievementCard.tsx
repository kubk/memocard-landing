import React from "react";

export const AchievementCard = ({ icon: Icon, title, description }: any) => (
  <div className="bg-white p-6 rounded-lg flex items-center w-[400px]">
    <Icon className="text-blue-500 w-12 h-12 mr-4 flex-shrink-0" />
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);
