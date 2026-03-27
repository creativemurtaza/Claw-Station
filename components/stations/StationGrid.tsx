import { AddStationCard } from "@/components/stations/AddStationCard";
import { StationCard } from "@/components/stations/StationCard";
import type { Station } from "@/lib/types/station";

type StationGridProps = {
  stations: Station[];
};

export function StationGrid({ stations }: StationGridProps) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-[19px]"
      data-node-id="57:1478"
    >
      {stations.map((station) => (
        <StationCard key={station.id} station={station} />
      ))}
      <AddStationCard />
    </div>
  );
}
