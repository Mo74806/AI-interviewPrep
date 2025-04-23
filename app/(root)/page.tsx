import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const dummyInterviewData = {
  id: "12345", // unique identifier for the interview
  userId: "67890", // user ID (it can be a number or string depending on your data type)
  role: "Software Engineer",
  type: "Technical",
  techstack: ["React", "Node.js", "MongoDB"], // a string of technologies used in the role
  createdAt: new Date().toISOString(), // creation date in ISO string format
};
const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          <InterviewCard
            key={dummyInterviewData.id}
            userId={dummyInterviewData.userId}
            interviewId={dummyInterviewData.id}
            role={dummyInterviewData.role}
            type={dummyInterviewData.type}
            techstack={dummyInterviewData.techstack}
            createdAt={dummyInterviewData.createdAt}
          />
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>
      </section>
    </>
  );
};

export default page;
