import { Suspense } from "react";
import { WorkspaceClient } from "@/components/workspace/WorkspaceClient";

export default function WorkspacePage() {
  return (
    <Suspense fallback={<div className="min-h-[calc(100vh-56px)] bg-[#0b0b0b] md:min-h-screen" />}>
      <WorkspaceClient />
    </Suspense>
  );
}
