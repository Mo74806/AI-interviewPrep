import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";
import Link from "next/link";
import UserInterviews from "@/components/UserInterview";
import TakeInterviews from "@/components/TakeInterview";

const Page = () => {
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

      {/* Suspense for UserInterviews */}
      <Suspense
        fallback={
          <section className=" flex flex-col gap-6 mt-8">
            <h2>Your Interviews</h2>
            <div className="interviews-section ">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="card-border w-[360px] max-sm:w-full min-h-96"
                />
              ))}
            </div>
          </section>
        }
      >
        <UserInterviews />
      </Suspense>

      {/* Suspense for TakeInterviews */}
      <Suspense
        fallback={
          <section className=" flex flex-col gap-6 mt-8">
            <h2>Take Interviews</h2>
            <div className="interviews-section ">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="card-border w-[360px] max-sm:w-full min-h-96"
                />
              ))}
            </div>
          </section>
        }
      >
        <TakeInterviews />
      </Suspense>
    </>
  );
};

export default Page;
