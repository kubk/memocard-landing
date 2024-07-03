"use client";
import React from "react";

export const YoutubeTutorial = () => {
  return (
    <div
      className={
        "w-full h-full md:w-[480px] md:h-[292px] rounded-2xl border-4 border-blue-500"
      }
      style={{
        position: "relative",
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/nU1QG5KCh44"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullScreen
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "16 / 9",
          borderRadius: 12,
        }}
      ></iframe>
    </div>
  );
};
