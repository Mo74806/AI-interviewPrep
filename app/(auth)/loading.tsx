import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex  justify-center items-center ">
      <Skeleton className="card-border lg:min-w-[566px] min-h-96" />
    </div>
  );
};

export default loading;
