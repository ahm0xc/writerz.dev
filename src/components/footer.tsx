import { ArrowBigDown } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="flex items-center gap-1 text-sm text-primary/80">
            Navigate with{" "}
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-secondary">
              <ArrowBigDown
                className="inline-block fill-secondary-foreground"
                size={14}
              />
            </span>{" "}
            &{" "}
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-secondary">
              <ArrowBigDown
                className="inline-block fill-secondary-foreground"
                size={14}
              />
            </span>{" "}
            arrows
          </p>
        </div>
        <div>
          <p className="text-sm">
            <span className="text-primary/70">crafted by</span>
            <Link href="https://twitter.com/ahm0xc" target="_blank" className="ml-1">
              @ahm0xc
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
