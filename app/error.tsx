"use client";

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 py-16 text-center text-[#e5e2e1]">
      <p className="text-base font-medium">Something went wrong</p>
      <button
        className="rounded-md border border-[rgba(255,180,171,0.35)] bg-[#1c1b1b] px-4 py-2 text-sm font-medium text-[#ffb4ab] transition-colors hover:bg-[#2a2a2a]"
        type="button"
        onClick={() => reset()}
      >
        Retry
      </button>
    </div>
  );
}
