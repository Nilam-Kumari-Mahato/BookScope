// src/components/ui/skeleton.jsx

import React from "react";
import clsx from "clsx";

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={clsx(
        "animate-pulse rounded-md bg-gray-100 dark:bg-gray-500",
        className
      )}
      {...props}
    />
  );
}
