import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <h3>Interview generation</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <Skeleton className="card-border w-full  min-h-96" />
        <Skeleton className="card-border  hidden md:block  w-full  min-h-96" />
      </div>
      <div className="flex justify-center">
        <Skeleton className="w-[100px] rounded-full  h-[40px] " />
      </div>
    </>
  );
};

export default loading;
