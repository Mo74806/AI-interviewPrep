import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <section className="section-feedback  w-[100%]  ">
      {/* Heading */}
      <div className="flex flex-row ">
        <h1 className="text-4xl font-semibold">
          Feedback on the Interview - Interview
        </h1>
      </div>

      {/* Impression + Date */}
      <div className="flex flex-row  mt-6">
        <div className="flex flex-row gap-5">
          {/* Overall Impression */}
          <div className="flex flex-row gap-2 items-center">
            <Skeleton className="w-[22px] h-[22px] rounded-full" />
            <p>
              Overall Impression:{" "}
              <Skeleton className="inline-block w-[40px] h-[20px]" /> /100
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row gap-2 items-center">
            <Skeleton className="w-[22px] h-[22px] rounded-full" />
            <Skeleton className="w-[120px] h-[20px]" />
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* Final Assessment */}
      <div className="flex justify-center">
        <Skeleton className="w-2/3 h-[60px]" />
      </div>

      {/* Interview Breakdown */}
      <div className="flex flex-col gap-4 mt-8">
        <h2>Breakdown of the Interview:</h2>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="w-1/2 h-[20px]" />
            <Skeleton className="w-full h-[40px]" />
          </div>
        ))}
      </div>

      {/* Strengths */}
      <div className="flex flex-col gap-3 mt-8">
        <h3>Strengths</h3>
        <ul className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i}>
              <Skeleton className="w-1/3 h-[20px]" />
            </li>
          ))}
        </ul>
      </div>

      {/* Areas for Improvement */}
      <div className="flex flex-col gap-3 mt-8">
        <h3>Areas for Improvement</h3>
        <ul className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i}>
              <Skeleton className="w-1/3 h-[20px]" />
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-4 mt-10">
        <Skeleton className="flex-1 h-[50px] rounded-lg" />
        <Skeleton className="flex-1 h-[50px] rounded-lg" />
      </div>
    </section>
  );
};

export default Loading;
