"use client";

import type { FormEvent, MouseEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ActivityItem, type ActivityItemData } from "@/components/activity/ActivityItem";
import { activityAssets } from "@/lib/figma/activityAssets";

const INITIAL_ITEMS: ActivityItemData[] = [
  {
    id: "act-1",
    agent: "Agent Cody",
    action: "Analyzing BTCY Market Trends",
    insight: "BTCY volume increased by 12% in last 2 hours",
    status: "running",
    time: "Just now",
    avatarUrl: activityAssets.avatarCody,
    steps: ["Scan order books across venues", "Correlate volume with institutional tags", "Draft summary for operator review"],
    reasoning: "Volume uptick aligns with institutional flow from sector relays; watch for sustained depth above prior range.",
  },
  {
    id: "act-2",
    agent: "Agent Puffy",
    action: "Drafting Community Growth Plan",
    insight: "Identified 15 high-potential target segments",
    status: "completed",
    time: "2 min ago",
    avatarUrl: activityAssets.avatarPuffy,
    steps: ["Segment cohorts", "Score engagement potential", "Outline growth loops"],
    reasoning: "High-potential segments cluster around repeatable rituals and contributor-led onboarding paths.",
  },
  {
    id: "act-3",
    agent: "Agent Vector",
    action: "Optimizing Liquidity Pools",
    insight: "Rebalancing assets across 4 active chains",
    status: "running",
    time: "5 min ago",
    avatarUrl: activityAssets.avatarVector,
    steps: ["Measure pool depth", "Simulate rebalance paths", "Apply safe slippage bounds"],
    reasoning: "Cross-chain liquidity is skewed; staged rebalancing reduces tail risk while preserving throughput.",
  },
];

type Tab = "all" | "running" | "completed";

function newId() {
  return `act-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function ActivityList() {
  const [items, setItems] = useState<ActivityItemData[]>(INITIAL_ITEMS);
  const [tab, setTab] = useState<Tab>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [guideForId, setGuideForId] = useState<string | null>(null);
  const [guideDraft, setGuideDraft] = useState("");
  const [flash, setFlash] = useState<{ id: string; text: string } | null>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearFlashSoon = useCallback(() => {
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(null), 2600);
  }, []);

  useEffect(() => {
    return () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
    };
  }, []);

  const filtered = useMemo(() => {
    if (tab === "all") return items;
    return items.filter((i) => i.status === tab);
  }, [items, tab]);

  const onGuideClick = useCallback((id: string) => (e: MouseEvent) => {
    e.stopPropagation();
    setGuideForId((prev) => (prev === id ? null : id));
    setGuideDraft("");
  }, []);

  const onGuideSubmit = useCallback(
    (id: string) => (e: FormEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setGuideForId(null);
      setGuideDraft("");
      setItems((prev) =>
        prev.map((x) =>
          x.id === id
            ? {
                ...x,
                insight:
                  "Acknowledged. Refining analysis based on your instruction and prioritizing next data pulls.",
              }
            : x
        )
      );
      setFlash({ id, text: "Instruction sent" });
      clearFlashSoon();
    },
    [clearFlashSoon]
  );

  const onRerun = useCallback((id: string) => (e: MouseEvent) => {
    e.stopPropagation();
    const source = items.find((x) => x.id === id);
    if (!source) return;
    const copy: ActivityItemData = {
      ...source,
      id: newId(),
      status: "running",
      time: "Just now",
    };
    setItems((prev) => [copy, ...prev]);
    setExpandedId(copy.id);
  }, [items]);

  const onBoost = useCallback(
    (id: string) => (e: MouseEvent) => {
      e.stopPropagation();
      setItems((prev) =>
        prev.map((x) =>
          x.id === id ? { ...x, insight: "Analyzing deeper signals…" } : x
        )
      );
      setFlash({ id, text: "Boost applied" });
      clearFlashSoon();
    },
    [clearFlashSoon]
  );

  const toggleExpand = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-56px)] w-full md:min-h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          alt=""
          className="object-cover object-center opacity-[0.18]"
          fill
          priority
          sizes="100vw"
          src={activityAssets.clawBg}
          unoptimized
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[866px] px-4 pb-24 pt-[60px] md:px-8">
        <h1 className="font-inter-display text-center text-[32px] font-bold leading-[1.2] tracking-[1px] text-[#e5e2e1] sm:text-[42px] sm:leading-[60px]">
          Activity
        </h1>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center">
          <span
            className="size-2 shrink-0 rounded-[12px] bg-[#40dfcc] shadow-[0_0_8px_#40dfcc] animate-pulse"
            aria-hidden
          />
          <span className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[#e8bcb7]">
            AI Team Active
          </span>
          <span className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[#e8bcb7] opacity-30">
            •
          </span>
          <span className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[#e8bcb7]">
            3 Agents Running
          </span>
          <span className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[#e8bcb7] opacity-30">
            •
          </span>
          <span className="font-space text-[10px] font-bold uppercase tracking-[1px] text-[#e8bcb7]">
            2 Tasks Completed
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-8 border-b border-[rgba(94,63,59,0.1)] pb-[17px]">
          {(["all", "running", "completed"] as const).map((t) => {
            const active = tab === t;
            const label = t === "all" ? "All" : t === "running" ? "Running" : "Completed";
            return (
              <button
                key={t}
                className={`relative pb-1 font-space text-[14px] font-bold tracking-[1.4px] ${
                  active ? "text-[#ffb4ab]" : "text-[#e8bcb7] opacity-40"
                }`}
                type="button"
                onClick={() => setTab(t)}
              >
                {label}
                {active ? (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[#ffb4ab]" aria-hidden />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col">
          {filtered.map((item) => (
            <ActivityItem
              key={item.id}
              expanded={expandedId === item.id}
              guideDraft={guideForId === item.id ? guideDraft : ""}
              guideOpen={guideForId === item.id}
              item={item}
              toast={flash?.id === item.id ? flash.text : null}
              onBoost={onBoost(item.id)}
              onGuideClick={onGuideClick(item.id)}
              onGuideDraftChange={setGuideDraft}
              onGuideSubmit={onGuideSubmit(item.id)}
              onRerun={onRerun(item.id)}
              onToggleExpand={() => toggleExpand(item.id)}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            className="border border-[rgba(94,63,59,0.2)] bg-[#ff544a] px-[33px] py-[13px] font-space text-[10px] font-bold uppercase tracking-[3.2px] text-[#5c0004] transition-opacity hover:opacity-90"
            type="button"
          >
            Load Historical Logs
          </button>
        </div>
      </div>
    </div>
  );
}
