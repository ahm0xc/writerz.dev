"use client";

import React from "react";
import Link from "next/link";
import { useHotkeys } from "react-hotkeys-hook";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function BackButton() {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  useHotkeys("escape", () => linkRef.current?.click());

  return (
    <div>
      <Link
        href="/"
        ref={linkRef}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "flex w-fit items-center gap-1 text-secondary-foreground/80",
        )}
      >
        Back
        <span className="rounded bg-neutral-300 px-0.5 py-px font-mono text-xs text-neutral-900 dark:bg-neutral-700 dark:text-neutral-300">
          esc
        </span>
      </Link>
    </div>
  );
}
