"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { workspaceAssets } from "@/lib/figma/workspaceAssets";
import { useStationStore } from "@/lib/stores/stationStore";

type SwarmStatus = "running" | "waiting";
type SwarmTab = "all" | "running" | "waiting";

type Swarm = {
  id: string;
  name: string;
  status: SwarmStatus;
  subtext: string;
  avatar: string;
};

const SWARMS: Swarm[] = [
  {
    id: "puffy",
    name: "Puffy Swarm",
    status: "running",
    subtext: "crawling social feeds...",
    avatar: workspaceAssets.puffy,
  },
  {
    id: "cody",
    name: "Cody Swarm",
    status: "running",
    subtext: "crawling social feeds...",
    avatar: workspaceAssets.cody,
  },
  {
    id: "blaze",
    name: "Blaze Swarm",
    status: "running",
    subtext: "crawling social feeds...",
    avatar: workspaceAssets.blaze,
  },
];

export function WorkspaceClient() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.trim();
  const selectedStation = useStationStore((s) => s.selectedStation);
  const [activeTab, setActiveTab] = useState<SwarmTab>("all");
  const [selectedSwarmId, setSelectedSwarmId] = useState<string>("puffy");
  const [input, setInput] = useState("");

  const swarms = useMemo(() => {
    if (activeTab === "all") return SWARMS;
    return SWARMS.filter((swarm) => swarm.status === activeTab);
  }, [activeTab]);

  const selectedSwarm = useMemo(
    () => SWARMS.find((swarm) => swarm.id === selectedSwarmId) ?? SWARMS[0],
    [selectedSwarmId],
  );

  const prompt = q || "Run a full sentiment analysis on BTCY for the last 24 hours.";

  return (
    <div className="font-inter-display relative min-h-[calc(100vh-56px)] text-white md:min-h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          alt=""
          className="object-cover object-center opacity-[0.08]"
          fill
          priority
          sizes="100vw"
          src={workspaceAssets.panelBg}
          unoptimized
        />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-56px)] flex-col md:min-h-screen">
        <div className="border-b border-[rgba(94,63,59,0.12)] px-4 pb-4 pt-6 md:px-8 md:pt-8">
          <p className="font-space text-[16px] font-bold tracking-[1px] text-[rgba(229,226,225,0.9)] uppercase md:text-[20px]">
            WORKSPACE - BTCY MARKET ANALYSIS
          </p>
          {selectedStation ? (
            <p className="font-space mt-1 text-[10px] tracking-[2px] text-[#71717a] uppercase">
              Station: {selectedStation.name}
            </p>
          ) : null}
        </div>

        <div className="flex min-h-0 flex-1 flex-col md:flex-row">
          <aside className="w-full border-b border-[rgba(94,63,59,0.15)] px-4 py-4 md:w-[288px] md:border-b-0 md:border-r md:px-4">
            <div className="flex items-center gap-6 pb-4">
              {(["all", "running", "waiting"] as const).map((tab) => (
                <button
                  key={tab}
                  className={`font-space relative text-[9px] font-bold tracking-[2.4px] uppercase transition-colors ${
                    activeTab === tab ? "text-[#ff2d2d]" : "text-[#71717a]"
                  }`}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {activeTab === tab ? (
                    <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#ff2d2d]" />
                  ) : null}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {swarms.map((swarm) => {
                const active = swarm.id === selectedSwarmId;
                const running = swarm.status === "running";
                return (
                  <button
                    key={swarm.id}
                    className={`w-full border-l-2 px-3 py-3 text-left transition-colors ${
                      active ? "border-[#ff2d2d] bg-[#0e0e0e]" : "border-transparent bg-[#0e0e0e]/70 hover:bg-[#0e0e0e]"
                    }`}
                    type="button"
                    onClick={() => setSelectedSwarmId(swarm.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative size-[40px] shrink-0 overflow-hidden rounded-full border border-[rgba(94,63,59,0.2)]">
                        <Image alt="" className="object-cover" fill sizes="40px" src={swarm.avatar} unoptimized />
                      </div>
                      <div className="min-w-0">
                        <p className="font-inter-display truncate text-[14px] font-bold tracking-[1px] text-[#e5e2e1] uppercase">
                          {swarm.name}
                        </p>
                        <p className="mt-1 text-[8px] leading-[12px] text-[rgba(232,188,183,0.5)]">{swarm.subtext}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <span className="font-space border border-[rgba(102,102,102,0.2)] bg-[rgba(218,218,218,0.1)] px-[5px] py-[3px] text-[6px] tracking-[2.4px] text-white uppercase">
                        {running ? "RUNNING" : "WAITING"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="flex min-h-0 flex-1 flex-col">
            <div className="border-b border-[rgba(94,63,59,0.12)] px-4 py-5 md:px-8">
              <div className="flex items-center gap-3">
                <div className="relative size-[50px] shrink-0 overflow-hidden rounded-full border border-[rgba(94,63,59,0.2)]">
                  <Image alt="" className="object-cover" fill sizes="50px" src={selectedSwarm.avatar} unoptimized />
                </div>
                <div>
                  <p className="font-inter-display text-[14px] font-bold tracking-[1px] text-[#e5e2e1] uppercase">
                    {selectedSwarm.name.toUpperCase()}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="size-[8px] bg-[#ff2d2d]" />
                    <p className="font-space text-[10px] tracking-[2px] text-[#ff2d2d] uppercase">LIVE EXECUTION LAYER</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col justify-end gap-8 overflow-y-auto px-4 py-6 md:px-8">
              <div className="self-end max-w-[720px] text-right text-[15px] leading-[24px] text-[rgba(229,226,225,0.9)]">
                {prompt}
              </div>

              <div className="max-w-[720px] text-[15px] leading-[24px] text-[#ffb4ab]">
                Analyzing BTCY market sentiment... I am assigning the task to the Market Swarm and the Research Swarm.
              </div>

              <div className="max-w-[720px] space-y-4">
                <p className="text-[15px] leading-[24px] text-[#ffb4ab]">
                  Market Swarm is currently crawling social feeds and news outlets. Research Swarm is cross-referencing with historical volatility data.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="font-space flex items-center gap-2 border border-[rgba(94,63,59,0.1)] bg-[#0e0e0e] px-[13px] py-[6px] text-[9px] tracking-[0.9px] text-[#e5e2e1] uppercase">
                    <span className="size-[6px] rounded-full bg-[#e8bcb7]" />
                    Fetching API Weights...
                  </span>
                  <span className="font-space flex items-center gap-2 border border-[rgba(94,63,59,0.1)] bg-[#0e0e0e] px-[13px] py-[6px] text-[9px] tracking-[0.9px] text-[#e5e2e1] uppercase">
                    <span className="size-[6px] rounded-full bg-[#e8bcb7]" />
                    X_FEED_STREAM: CONNECTED
                  </span>
                </div>
              </div>
            </div>

            <div className="px-4 pb-6 md:px-8 md:pb-8">
              <div className="relative">
                <div className="flex items-center rounded-[8px] border border-[rgba(94,63,59,0.2)] bg-[#131313] px-4 py-4 shadow-[0px_0px_15px_0px_rgba(255,45,45,0.15)]">
                  <span className="font-space mr-3 text-[16px] font-bold text-[#ffb4ab]">{">"}</span>
                  <input
                    className="w-full bg-transparent text-[14px] tracking-[0.7px] text-[#e5e2e1] outline-none placeholder:text-[#6b7280]"
                    placeholder="Ask your manager to do anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button
                    className="ml-3 font-space text-[12px] text-[#ffb4ab]"
                    type="button"
                    aria-label="Send"
                  >
                    →
                  </button>
                </div>
                <p className="font-inter-display mt-3 text-center text-[8px] tracking-[2.4px] text-[rgba(232,188,183,0.2)] uppercase">
                  Direct link to hive mind cluster-7
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
