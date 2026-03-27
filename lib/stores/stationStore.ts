import { create } from "zustand";
import type { Station } from "@/lib/types/station";

type StationStore = {
  selectedStation: Station | null;
  setSelectedStation: (station: Station | null) => void;
};

export const useStationStore = create<StationStore>((set) => ({
  selectedStation: null,
  setSelectedStation: (station) => set({ selectedStation: station }),
}));
