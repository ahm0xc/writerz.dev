import React from 'react'

import { cn } from '~/lib/utils';

type Props = {
    children: React.ReactNode;
    className?: string;
}

export default function DemoBlockWrapper({children, className}: Props) {
  return (
    <div className={cn("border bg-secondary dark:bg-neutral-900 rounded-xl", className)}>{children}</div>
  )
}