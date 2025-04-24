import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";

import { cn, getRandomInterviewCover } from "@/lib/utils";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = {
    totalScore: 85,
    categoryScores: [
      {
        name: "Communication Skills",
        score: 8,
        comment: "Excellent communication and clarity in expressing ideas.",
      },
      {
        name: "Technical Knowledge",
        score: 7,
        comment:
          "Good understanding of the technical aspects, but can improve in advanced topics.",
      },
      {
        name: "Problem Solving",
        score: 9,
        comment:
          "Strong analytical skills and ability to solve complex problems efficiently.",
      },
      {
        name: "Cultural Fit",
        score: 8,
        comment:
          "Adapts well to the team environment and aligns with company values.",
      },
      {
        name: "Confidence and Clarity",
        score: 8,
        comment:
          "Confident in delivering presentations, though could work on simplifying complex ideas.",
      },
    ],
    strengths: [
      "Strong communication skills",
      "Excellent problem-solving ability",
      "Good team player",
    ],
    areasForImprovement: [
      "Improve deep technical knowledge in certain areas",
      "Simplify explanations in presentations",
    ],
    finalAssessment:
      "Overall, a great candidate with minor areas for improvement.",
    createdAt: new Date().toISOString(), // Added createdAt field (ISO string format)
  };

  // userId && interviewId
  //   ? await getFeedbackByInterviewId({
  //       interviewId,
  //       userId,
  //     })
  //   : null;

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  const badgeColor =
    {
      Behavioral: "bg-light-400",
      Mixed: "bg-light-600",
      Technical: "bg-light-800",
    }[normalizedType] || "bg-light-600";

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          {/* Type Badge */}
          <div
            className={cn(
              "absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg",
              badgeColor
            )}
          >
            <p className="badge-text ">{normalizedType}</p>
          </div>

          {/* Cover Image */}
          <Image
            // src="/interview-cover.png"
            src={getRandomInterviewCover()}
            alt="cover-image"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />

          {/* Interview Role */}
          <h3 className="mt-5 capitalize">{role} Interview</h3>

          {/* Date & Score */}
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                width={22}
                height={22}
                alt="calendar"
              />
              <p>{formattedDate}</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" width={22} height={22} alt="star" />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>

          {/* Feedback or Placeholder Text */}
          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment ||
              "You haven't taken this interview yet. Take it now to improve your skills."}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={techstack} />

          <Button className="btn-primary">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
