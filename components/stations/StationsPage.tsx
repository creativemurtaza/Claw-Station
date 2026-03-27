import Image from "next/image";
import { StationGrid } from "@/components/stations/StationGrid";
import { STATIONS_SEED } from "@/lib/data/stations";
import { stationsPageAssets } from "@/lib/figma/stationsPageAssets";

// Stations are independent AI environments.
// Each station runs its own Manager Agent and worker agents.
// Selecting a station changes the entire AI context.

export function StationsPage() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center gap-[86px] px-4 pb-[120px] pt-[86px] md:px-[32px] md:pb-[236px]"
      data-name="Main Content Canvas"
      data-node-id="57:1474"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]"
        data-name="Claw-27 1"
        data-node-id="57:1475"
      >
        <Image
          alt=""
          className="object-cover object-center"
          fill
          priority
          sizes="960px"
          src={stationsPageAssets.clawBg}
          unoptimized
        />
      </div>

      <div className="relative flex h-[99px] shrink-0 items-center justify-center px-[10px] pt-[74px]">
        <div className="flex h-[42px] w-[min(100%,299px)] shrink-0 flex-col justify-center text-center text-[42px] font-bold leading-[0] tracking-[0.84px] text-[rgba(255,255,255,0.9)] font-inter-display">
          <p className="leading-[96px]">Select Station</p>
        </div>
      </div>

      <StationGrid stations={STATIONS_SEED} />
    </div>
  );
}
