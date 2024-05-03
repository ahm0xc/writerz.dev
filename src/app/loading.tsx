import { LoaderIcon } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center min-h-screen">
      <div>
        <LoaderIcon size={30} className="animate-spin" />
      </div>
    </div>
  );
}
