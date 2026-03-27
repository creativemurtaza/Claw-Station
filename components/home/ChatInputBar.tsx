"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { homeAssets } from "@/lib/figma/homeAssets";
import { HOME_QUICK_ACTIONS } from "@/lib/homeQuickActions";

export function ChatInputBar() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const goWorkspace = useCallback(
    (query: string) => {
      const q = query.trim();
      if (!q) return;
      router.push(`/workspace?q=${encodeURIComponent(q)}`);
    },
    [router],
  );

  return (
    <div
      className="relative flex w-full max-w-[768px] shrink-0 flex-col items-stretch gap-6 sm:gap-[32px]"
      data-name="Floating Chat Input Bar"
      data-node-id="35:1379"
    >
      <form
        className="relative w-full shrink-0 rounded-[12px] border border-solid border-[rgba(94,63,59,0.2)] bg-[rgba(28,27,27,0.4)] px-4 py-4 backdrop-blur-[12px] sm:px-[25px] sm:py-[17px]"
        data-name="Overlay+Border+OverlayBlur"
        data-node-id="35:1380"
        onSubmit={(e) => {
          e.preventDefault();
          goWorkspace(value);
        }}
      >
        <div
          className="pointer-events-none absolute inset-[-1px] rounded-[12px] bg-[rgba(255,255,255,0)] shadow-[0px_0px_30px_2px_rgba(255,84,74,0.15)]"
          data-name="Overlay+Shadow"
          data-node-id="35:1381"
        />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[16px]">
          <div className="relative mx-auto h-[18.836px] w-[13.981px] shrink-0 sm:mx-0" data-name="Container" data-node-id="35:1382">
            <Image alt="" className="object-contain" fill src={homeAssets.inputBolt} unoptimized />
          </div>

          <div className="relative min-h-px min-w-0 flex-1" data-name="Input" data-node-id="35:1384">
            <input
              aria-label="Describe your task or ask a question"
              className="font-inter-display w-full border-0 bg-transparent px-3 pb-3 pt-3 text-base font-normal leading-[normal] text-white outline-none placeholder:text-[#52525b] sm:px-[12px] sm:pb-[12px] sm:pt-[11px] sm:text-[18px]"
              data-node-id="35:1386"
              name="task"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Describe your task or ask a question..."
              value={value}
            />
          </div>

          <div className="relative flex shrink-0 justify-center sm:justify-end" data-name="Container" data-node-id="35:1387">
            <div className="relative flex items-center gap-3 sm:gap-[12px]">
              <button
                className="relative flex size-[40px] shrink-0 items-center justify-center rounded-[12px]"
                data-name="Button"
                data-node-id="35:1388"
                type="button"
              >
                <div className="relative h-[18.25px] w-[13px] shrink-0" data-name="Container" data-node-id="35:1389">
                  <Image alt="" className="object-contain" fill src={homeAssets.mic} unoptimized />
                </div>
              </button>
              <button
                className="relative flex size-[48px] shrink-0 items-center justify-center rounded-[12px] bg-[#ff544a]"
                data-name="Button"
                data-node-id="35:1391"
                type="submit"
              >
                <div
                  className="pointer-events-none absolute left-0 top-1/2 size-[48px] -translate-y-1/2 rounded-[12px] bg-[rgba(255,255,255,0)] shadow-[0px_10px_15px_-3px_rgba(255,84,74,0.2),0px_4px_6px_-4px_rgba(255,84,74,0.2)]"
                  data-name="Button:shadow"
                  data-node-id="35:1392"
                />
                <div className="relative size-[15px] shrink-0" data-name="Container" data-node-id="35:1393">
                  <Image alt="" className="object-contain" fill src={homeAssets.send} unoptimized />
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>

      <div
        className="relative flex w-full shrink-0 flex-wrap items-center justify-center gap-3 sm:gap-[16px]"
        data-name="Context Suggestions"
        data-node-id="35:1395"
      >
        {HOME_QUICK_ACTIONS.map((action) => (
          <button
            key={action.id}
            className="flex min-w-0 shrink-0 flex-col items-center justify-center rounded-[12px] border border-solid border-[rgba(94,63,59,0.1)] bg-[rgba(28,27,27,0.5)] px-[17px] py-[9px]"
            data-name="Button"
            data-node-id={
              action.id === "build-station"
                ? "35:1396"
                : action.id === "analyze-report"
                  ? "35:1398"
                  : "35:1400"
            }
            type="button"
            onClick={() => goWorkspace(action.preset)}
          >
            <div
              className="font-space flex min-h-[16px] flex-col justify-center leading-[0] text-center text-[11px] font-normal tracking-[0.6px] text-[#a1a1aa] uppercase whitespace-nowrap sm:text-[12px]"
              data-node-id={
                action.id === "build-station"
                  ? "35:1397"
                  : action.id === "analyze-report"
                    ? "35:1399"
                    : "35:1401"
              }
            >
              <p className="leading-[16px]">{action.label}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
