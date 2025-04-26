// app/UserInterviews.tsx
import { getCurrentUser } from "@/lib/actions/auth.actions";
import { getInterviewsByUserId } from "@/lib/actions/interview.actions";
import InterviewCard from "@/components/InterviewCard";

export default async function UserInterviews() {
  const user = await getCurrentUser();
  const userInterviews = await getInterviewsByUserId(user?.id!);
  const hasPastInterviews = userInterviews?.length! > 0;

  return (
    <section className="flex flex-col gap-6 mt-8">
      <h2>Your Interviews</h2>

      <div className="interviews-section">
        {hasPastInterviews ? (
          userInterviews?.map((interview) => (
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
          <p>You haven&apos;t taken any interviews yet</p>
        )}
      </div>
    </section>
  );
}
