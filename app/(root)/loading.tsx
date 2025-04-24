import Navbar from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <section className="flex justify-between items-center gap-6">
        <Skeleton className="h-[250px] w-[100%] rounded-lg" />
      </section>

      <section className="flex flex-col gap-4 mt-8">
        <h2>Your Interviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-100 w-full rounded-lg" />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 mt-8">
        <h2>Take Interviews</h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-lg" />
          ))}
        </div>
      </section>
    </div>
  );
}
