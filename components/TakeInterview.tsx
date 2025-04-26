// app/TakeInterviews.tsx
import { getCurrentUser } from "@/lib/actions/auth.actions";
import { getLatestInterviews } from "@/lib/actions/interview.actions";
import InterviewCard from "@/components/InterviewCard";

export default async function TakeInterviews() {
  const user = await getCurrentUser();
  const allInterview = await getLatestInterviews({ userId: user?.id! });
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <section className="flex flex-col gap-6 mt-8">
      <h2>Take Interviews</h2>

      <div className="interviews-section">
        {hasUpcomingInterviews ? (
          allInterview?.map((interview) => (
            <InterviewCard
              key={interview.id}
              userId={user?.id}
              interviewId={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
              createdAt={interview.createdAt}
            />
          ))
        ) : (
          <p>There are no interviews available</p>
        )}
      </div>
    </section>
  );
}
