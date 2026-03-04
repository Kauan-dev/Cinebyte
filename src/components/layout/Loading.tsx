import { Spinner } from "@/components/ui/spinner";

export function Loading() {
  return (
    <div className="flex h-[calc(100vh-84px-60px)] items-center justify-center md:h-[calc(100vh-84px)]">
      <div className="flex items-center gap-6">
        <Spinner className="size-14" />
      </div>
    </div>
  );
}
