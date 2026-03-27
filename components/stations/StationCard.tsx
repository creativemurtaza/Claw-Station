"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconWrapper } from "@/components/stations/IconWrapper";
import { StatusBadge } from "@/components/stations/StatusBadge";
import { useStationStore } from "@/lib/stores/stationStore";
import type { Station } from "@/lib/types/station";

type StationCardProps = {
  station: Station;
};

export function StationCard({ station }: StationCardProps) {
  const router = useRouter();
  const setSelectedStation = useStationStore((s) => s.setSelectedStation);

  const onActivate = useCallback(() => {
    setSelectedStation(station);
    router.push("/workspace");
  }, [router, setSelectedStation, station]);

  if (!station.icon) return null;

  return (
    <div className="flex w-[194px] shrink-0 flex-col items-start gap-[16px]" data-station-id={station.id}>
      <button
        className="group w-full text-left transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-[0px_0px_24px_0px_rgba(255,45,45,0.18)] active:scale-[0.98]"
        type="button"
        onClick={onActivate}
      >
        <IconWrapper alt="" innerClassName={station.iconContainerClassName} src={station.icon} />
      </button>

      <div className="flex w-full flex-col items-start pb-[13px]">
        <div className="mb-[-13px] flex w-full flex-col items-start">
          <div className="flex w-full items-center pr-[5px]">
            <div className="mr-[-5px] flex min-w-0 flex-1 items-center justify-center py-[10px] pr-[10px]">
              <div className="font-inter-display min-w-0 text-[18px] font-semibold leading-[0] not-italic tracking-[-0.5px] text-[#e5e2e1]">
                <p className="leading-[28px]">{station.name}</p>
              </div>
            </div>
            <div className="mr-[-5px] flex shrink-0 items-center pr-[11px]">
              <StatusBadge status={station.status} />
            </div>
          </div>
        </div>
        <div className="mb-[-13px] flex items-center py-[10px] pl-px pr-[10px]">
          <div className="font-manrope flex flex-col justify-center leading-[0] text-[11px] font-normal uppercase tracking-[0.6px] text-[rgba(200,198,197,0.5)]">
            <p className="leading-[16px]">Node: {station.nodeId}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
