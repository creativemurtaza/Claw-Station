import { stationsPageAssets } from "@/lib/figma/stationsPageAssets";
import type { Station } from "@/lib/types/station";

/** Seed stations — replace with API fetch in production. */
export const STATIONS_SEED: Station[] = [
  {
    id: "btcy",
    name: "BTCY Station",
    status: "active",
    nodeId: "0x882...F2E",
    icon: stationsPageAssets.btcyLogo,
    iconContainerClassName: "absolute left-[31px] top-[22px] h-[62px] w-[67px]",
  },
  {
    id: "wallstreet",
    name: "WallStreet Station",
    status: "active",
    nodeId: "0x882...F2E",
    icon: stationsPageAssets.wallStreet,
    iconContainerClassName: "absolute left-[20.5px] top-[30px] h-[45px] w-[89px]",
  },
  {
    id: "emmm",
    name: "Emmm Station",
    status: "active",
    nodeId: "0x882...F2E",
    icon: stationsPageAssets.emmmLogo,
    iconContainerClassName: "absolute left-[5.5px] top-[37px] h-[31px] w-[120px]",
  },
];
