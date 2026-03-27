export type Station = {
  id: string;
  name: string;
  status: "active" | "idle";
  nodeId: string;
  icon?: string;
  /** Inner wrapper classes for Figma-accurate logo placement inside the 132×108 card. */
  iconContainerClassName?: string;
};
