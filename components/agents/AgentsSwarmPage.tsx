"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { agentsAssets } from "@/lib/figma/agentsAssets";
import { homeAssets } from "@/lib/figma/homeAssets";

const agents = [
  { name: "Cody", role: "coding", avatar: agentsAssets.cody },
  { name: "Puffy", role: "content", avatar: agentsAssets.puffy },
  { name: "Nova", role: "research", avatar: agentsAssets.nova },
  { name: "Blaze", role: "marketing", avatar: agentsAssets.blaze },
] as const;

function detectAgents(text: string): string[] {
  const lower = text.toLowerCase();
  if (!lower.trim()) return [];

  const active: string[] = [];

  if (lower.includes("code") || lower.includes("build")) {
    active.push("Cody");
  }
  if (lower.includes("write") || lower.includes("content")) {
    active.push("Puffy");
  }
  if (lower.includes("research")) {
    active.push("Nova");
  }
  if (lower.includes("market")) {
    active.push("Blaze");
  }

  if (
    (lower.includes("build") && lower.includes("website")) ||
    (lower.includes("create") && lower.includes("landing")) ||
    (lower.includes("landing") && lower.includes("page"))
  ) {
    if (!active.includes("Cody")) active.push("Cody");
    if (!active.includes("Puffy")) active.push("Puffy");
  }

  return [...new Set(active)];
}

export function AgentsSwarmPage() {
  const [input, setInput] = useState("");
  const [activeAgents, setActiveAgents] = useState<string[]>([]);

  const runDetection = useCallback((text: string) => {
    setActiveAgents(detectAgents(text));
  }, []);

  const handleChange = (value: string) => {
    setInput(value);
    runDetection(value);
  };

  return (
    <div className="font-inter-display relative min-h-[calc(100vh-56px)] w-full text-white md:min-h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          alt=""
          className="object-cover object-center opacity-[0.06]"
          fill
          priority
          sizes="100vw"
          src={agentsAssets.clawBg}
          unoptimized
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[960px] flex-col items-center px-4 pb-28 pt-10 md:px-8 md:pt-14">
        {/* Manager card — Figma 140:902–914 */}
        <div className="mb-6 border border-[rgba(94,63,59,0.05)] p-px">
          <div className="flex flex-col items-center gap-4">
            <div className="relative inline-grid place-items-start leading-none">
              <div className="col-start-1 row-start-1 size-[92px]">
                <Image alt="" className="block size-full max-w-none" height={92} src={agentsAssets.managerRing} unoptimized width={92} />
              </div>
              <div className="col-start-1 row-start-1 ml-[13px] mt-[5.5px] h-[82px] w-[65px] overflow-hidden">
                <Image alt="" className="pointer-events-none object-cover" height={82} src={agentsAssets.managerAvatar} unoptimized width={65} />
              </div>
            </div>
            <p className="font-space w-[134px] text-center text-[30px] font-bold leading-[36px] tracking-[-0.75px] text-[#e5e2e1]">Manager</p>
          </div>
        </div>

        {/* Section — badge, title, subtitle */}
        <div className="flex w-full flex-col items-center py-6">
          <div className="pb-4">
            <div className="flex items-center gap-2 rounded-[12px] border border-[rgba(255,180,171,0.2)] bg-[rgba(255,84,74,0.1)] px-[13px] py-[5px]">
              <span className="size-2 shrink-0 rounded-[12px] bg-[#ffb4ab]" />
              <span className="font-space text-[10px] font-normal uppercase leading-[15px] tracking-[1px] text-[#ffb4ab]">
                System Online: AI Core V2
              </span>
            </div>
          </div>
          <div className="pb-4">
            <h1 className="font-inter-display text-center text-[32px] font-bold leading-[1.2] tracking-[1px] text-[#e5e2e1] md:text-[42px] md:leading-[60px]">
              Swarm Manager
            </h1>
          </div>
          <div className="max-w-[576px] px-[11px] text-center opacity-80">
            <p className="text-[16px] leading-[28px] text-[#e8bcb7] md:text-[18px]">
              Orchestrate your workflow by assigning specialized tasks to your tactical intelligence unit.{" "}
              <span className="text-[#ffb4ab]">_</span>
            </p>
          </div>
        </div>

        {/* Your Swarms */}
        <div className="flex w-full flex-col gap-8">
          <div className="flex h-[82px] items-end justify-between border-b border-[rgba(94,63,59,0.1)] pb-[17px]">
            <div>
              <h2 className="font-inter-display text-[24px] font-bold leading-[36px] tracking-[-0.75px] text-[#e5e2e1] md:text-[30px]">
                Your Swarms
              </h2>
              <p className="font-space mt-1 text-[12px] font-normal uppercase leading-4 tracking-[2.4px] text-[#ae8783]">
                4 Active Deployments
              </p>
            </div>
            <button
              className="flex items-center gap-2 text-[#ffb4ab] transition-opacity hover:opacity-90"
              type="button"
              onClick={() => console.log("Add agent clicked")}
            >
              <span className="relative size-[11.667px]">
                <Image alt="" className="object-contain" fill src={agentsAssets.deployPlus} unoptimized />
              </span>
              <span className="font-space text-[12px] font-normal uppercase tracking-[1.2px]">Deploy New Agent</span>
            </button>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-6 md:gap-8">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="flex flex-col items-center gap-4 border border-[rgba(94,63,59,0.05)] p-[25px]"
              >
                <div
                  className={`agent relative size-[80px] rounded-full transition-all duration-300 ease-in-out ${
                    activeAgents.includes(agent.name) ? "active" : ""
                  }`}
                >
                  <Image alt="" className="absolute inset-0 size-full max-w-none" height={80} src={agentsAssets.agentRing} unoptimized width={80} />
                  <div className="absolute inset-[3px] overflow-hidden rounded-full">
                    <Image alt="" className="object-cover" fill sizes="74px" src={agent.avatar} unoptimized />
                  </div>
                </div>
                <p className="font-space text-center text-[20px] font-bold leading-[28px] text-[#e5e2e1]">{agent.name}</p>
              </div>
            ))}

            <button
              className="flex flex-col items-center gap-4 border border-[rgba(94,63,59,0.05)] p-[25px]"
              type="button"
              onClick={() => console.log("Add agent clicked")}
            >
              <div className="agent relative size-[80px] rounded-full transition-all duration-300 ease-in-out">
                <Image alt="" className="absolute inset-0 size-full" height={80} src={agentsAssets.addRing} unoptimized width={80} />
                <span className="absolute left-1/2 top-[35px] -translate-x-1/2 -translate-y-1/2 text-[51px] leading-none text-[#ff2d2d]">+</span>
              </div>
              <p className="font-space text-center text-[20px] font-bold leading-[28px] text-[#e5e2e1]">Add</p>
            </button>
          </div>
        </div>

        {/* Floating command bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center px-4 pb-6 pt-4 md:left-[256px]">
          <div className="flex w-full max-w-[896px] flex-col gap-4">
            <div className="flex flex-wrap justify-center gap-2">
              {["Build a website", "Write a report", "Audit security"].map((label) => (
                <button
                  key={label}
                  className="rounded-[12px] border border-[rgba(94,63,59,0.2)] bg-[#2a2a2a] px-[17px] py-[7px] transition-opacity hover:opacity-90"
                  type="button"
                  onClick={() => handleChange(label)}
                >
                  <span className="font-space text-[10px] font-normal uppercase leading-[15px] tracking-[1px] text-[#e8bcb7]">{label}</span>
                </button>
              ))}
            </div>

            <form
              className="backdrop-blur-[12px] relative flex h-16 items-center rounded-[12px] border border-[rgba(94,63,59,0.1)] bg-[rgba(42,42,42,0.9)] px-2 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Task:", input);
                console.log("Assigned Agents:", activeAgents);
              }}
            >
              <button className="relative flex size-12 shrink-0 items-center justify-center rounded-[12px]" type="button">
                <span className="relative h-5 w-[12.5px]">
                  <Image alt="" className="object-contain" fill src={agentsAssets.attach} unoptimized />
                </span>
              </button>
              <input
                className="min-w-0 flex-1 bg-transparent px-4 py-2 font-inter-display text-[14px] text-[#e5e2e1] outline-none placeholder:text-[rgba(174,135,131,0.5)]"
                placeholder="Assign task to your swarm..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
              <div className="flex items-center gap-2 pr-1">
                <button className="flex size-10 items-center justify-center rounded-[12px]" type="button">
                  <span className="relative h-[19px] w-[14px]">
                    <Image alt="" className="object-contain" fill src={homeAssets.mic} unoptimized />
                  </span>
                </button>
                <button className="flex size-12 items-center justify-center rounded-[12px] bg-[#ff544a]" type="submit">
                  <span className="relative h-[18px] w-[21px]">
                    <Image alt="" className="object-contain" fill src={homeAssets.send} unoptimized />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
