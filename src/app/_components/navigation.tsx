"use client";

import React from "react";
import Fuse from "fuse.js";
import { Command } from "cmdk";
import { type Post } from "contentlayer/generated";

import "~/styles/navigation.scss";
import { useRouter } from "next/navigation";
import { monthNames } from "~/lib/utils";
import { useHotkeys } from "react-hotkeys-hook";
import { CommandIcon } from "lucide-react";

const fuseOptions = {
  isCaseSensitive: false,
  includeScore: true,
  shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.5,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["title", "tags"],
};

type Props = {
  posts: Post[];
};

export default function Navigation({ posts }: Props) {
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState<Post[]>(posts);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useHotkeys("meta+/", () => inputRef.current?.focus());

  const router = useRouter();

  const fuse = new Fuse(posts, fuseOptions);

  React.useEffect(() => {
    const results = fuse.search(searchValue);
    const formattedResults = results.map((r) => r.item);

    if (!!!formattedResults.length && !searchValue) {
      setFilteredItems(posts);
    } else {
      setFilteredItems(formattedResults);
    }
  }, [searchValue]);

  return (
    <div>
      <Command
        label="Command Menu"
        // filter={(value, search) => {
        //   if (value.includes(search)) return 1;
        //   return 0;
        // }}
        shouldFilter={false}
      >
        <div className="relative">
          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-0.5">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-secondary text-xs text-neutral-700 dark:text-neutral-400">
              <CommandIcon size={10} />
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded bg-secondary text-xs text-neutral-700 dark:text-neutral-400">
              /
            </span>
          </div>
          <Command.Input
            ref={inputRef}
            placeholder="Search..."
            className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 pr-16 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-50"
            value={searchValue}
            onValueChange={setSearchValue}
            onBlur={(e) => {
              e.target.focus();
            }}
            autoFocus
          />
        </div>
        <div className="mt-6 flex justify-between border-b pb-2 text-sm text-secondary-foreground/60">
          <p>Title</p>
          <p>Created at</p>
        </div>
        <Command.List className="mt-4">
          {/* <Command.Empty>No results found.</Command.Empty> */}
          {/* {!!!filteredItems.length && <div>no items in the list</div>} */}
          {filteredItems.map((post, i) => {
            return (
              <Command.Item
                className="rounded-md text-[15px]"
                key={`post-item-${post._id}-${i}`}
                onSelect={() => router.push(`/p/${post.slugAsParams}`)}
              >
                <div className="flex px-3.5 py-2.5 text-secondary-foreground">
                  <div>{post.title}</div>
                  <div className="ml-auto text-secondary-foreground/60">
                    {new Date(post.date).getDate()}{" "}
                    {monthNames[new Date(post.date).getMonth()]}
                  </div>
                </div>
              </Command.Item>
            );
          })}
        </Command.List>
      </Command>
    </div>
  );
}
