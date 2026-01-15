import { Skeleton } from "../ui/skeleton";

export function BookCardSkeleton() {
  return (
    <div className="shrink-0 space-y-2 bg-amber-800/20 p-4 rounded-2xl">
      <Skeleton className="w-20 h-25 md:w-40 md:h-45  rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}
