import { agentsAssets } from "@/lib/figma/agentsAssets";

/** Activity page — claw bg local; avatars match Agents swarm (Vector → Nova; no Vector asset on Agents). */
export const activityAssets = {
  clawBg: "/figma/activity-claw-bg.png",
  avatarCody: agentsAssets.cody,
  avatarPuffy: agentsAssets.puffy,
  avatarVector: agentsAssets.nova,
} as const;
