"use client";

import type { FormEvent, MouseEvent } from "react";
import Image from "next/image";

export type ActivityStatus = "running" | "completed";

export type ActivityItemData = {
  id: string;
  agent: string;
  action: string;
  insight: string;
  status: ActivityStatus;
  time: string;
  avatarUrl: string;
  steps: string[];
  reasoning: string;
};

type ActivityItemProps = {
  item: ActivityItemData;
  expanded: boolean;
  onToggleExpand: () => void;
  guideOpen: boolean;
  guideDraft: string;
  onGuideDraftChange: (v: string) => void;
  onGuideClick: (e: MouseEvent) => void;
  onGuideSubmit: (e: FormEvent) => void;
  onRerun: (e: MouseEvent) => void;
  onBoost: (e: MouseEvent) => void;
  toast: string | null;
};

function ArrowIcon() {
  return (
    <span className="font-space text-[#e5e2e1] text-[14px] font-bold leading-[20px]" aria-hidden>
      →
    </span>
  );
}

export function ActivityItem({
  item,
  expanded,
  onToggleExpand,
  guideOpen,
  guideDraft,
  onGuideDraftChange,
  onGuideClick,
  onGuideSubmit,
  onRerun,
  onBoost,
  toast,
}: ActivityItemProps) {
  const isRunning = item.status === "running";

  return (
    <div className="border-b border-[rgba(94,63,59,0.1)]">
      <div className="flex flex-col gap-0 px-4 pt-8 pb-[33px] sm:flex-row sm:gap-6 sm:px-4">
        <div className="relative mb-4 shrink-0 sm:mb-0">
          <div className="relative size-[48px] overflow-hidden border border-[rgba(94,63,59,0.2)]">
            <Image alt="" className="object-cover" fill sizes="48px" src={item.avatarUrl} unoptimized />
          </div>
          <div
            className={`absolute bottom-[-4px] right-[-4px] size-[12px] rounded-[12px] border-2 border-[#131313] ${
              isRunning ? "bg-[#40dfcc]" : "bg-[#ffb4ab]"
            } ${isRunning ? "shadow-[0_0_8px_#40dfcc] animate-pulse" : ""}`}
            aria-hidden
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <button
              className="w-full text-left"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onToggleExpand();
              }}
            >
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-space text-[14px] font-bold leading-[20px] tracking-[-0.35px] text-[#ffb4ab]">
                    {item.agent}
                  </span>
                  <ArrowIcon />
                  <span className="font-space text-[14px] font-bold leading-[20px] tracking-[-0.35px] text-[#e5e2e1]">
                    {item.action}
                  </span>
                </div>
                <p className="font-inter-display max-w-[min(100%,420px)] text-[14px] font-normal leading-[20px] text-[rgba(232,188,183,0.8)]">
                  {item.insight}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-3">
                  {isRunning ? (
                    <div className="flex items-center gap-1">
                      <span
                        className="size-[10px] shrink-0 rounded-full bg-[#40dfcc] shadow-[0_0_8px_#40dfcc] animate-pulse"
                        aria-hidden
                      />
                      <span className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[#40dfcc]">
                        Running
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="font-space text-[10px] font-bold text-[#ffb4ab]" aria-hidden>
                        ✓
                      </span>
                      <span className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[#ffb4ab]">
                        Completed
                      </span>
                    </div>
                  )}
                  <span className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[rgba(232,188,183,0.4)]">
                    • {item.time}
                  </span>
                </div>
              </div>
            </button>

            <div className="flex shrink-0 gap-4 pt-2 sm:pt-0">
              <button
                className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[rgba(232,188,183,0.6)] hover:text-[#e8bcb7]"
                type="button"
                onClick={onGuideClick}
              >
                Guide
              </button>
              <button
                className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[rgba(232,188,183,0.6)] hover:text-[#e8bcb7]"
                type="button"
                onClick={onRerun}
              >
                Re-run
              </button>
              <button
                className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[rgba(232,188,183,0.6)] hover:text-[#e8bcb7]"
                type="button"
                onClick={onBoost}
              >
                Boost
              </button>
            </div>
          </div>

          {toast ? (
            <p className="mt-3 font-space text-[10px] font-bold uppercase tracking-[0.08em] text-[#40dfcc]">{toast}</p>
          ) : null}

          {guideOpen ? (
            <form className="mt-4 max-w-lg" onSubmit={onGuideSubmit}>
              <input
                autoFocus
                className="w-full rounded-[8px] border border-[rgba(94,63,59,0.25)] bg-[#131313] px-3 py-2 font-inter-display text-[13px] text-[#e5e2e1] outline-none placeholder:text-[rgba(232,188,183,0.35)]"
                placeholder="Give instruction to improve this task…"
                value={guideDraft}
                onChange={(e) => onGuideDraftChange(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <button className="mt-2 font-space text-[10px] font-bold uppercase tracking-[1px] text-[#ffb4ab]" type="submit">
                Send
              </button>
            </form>
          ) : null}
        </div>
      </div>

      {expanded ? (
        <div className="border-t border-[rgba(94,63,59,0.08)] bg-[rgba(19,19,19,0.5)] px-4 py-4 sm:px-[calc(48px+1.5rem)]">
          <p className="font-space text-[11px] font-bold uppercase tracking-[0.12em] text-[#71717a]">Steps</p>
          <ol className="mt-2 list-decimal pl-5 font-inter-display text-[13px] leading-[1.5] text-[rgba(232,188,183,0.85)]">
            {item.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
          <p className="mt-4 font-space text-[11px] font-bold uppercase tracking-[0.12em] text-[#71717a]">Reasoning</p>
          <p className="mt-2 font-inter-display text-[13px] leading-[1.55] text-[#e5e2e1]">{item.reasoning}</p>
        </div>
      ) : null}
    </div>
  );
}
