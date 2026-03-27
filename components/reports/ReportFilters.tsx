"use client";

type ReportFiltersProps = {
  query: string;
  onQueryChange: (value: string) => void;
  tab: "all" | "running" | "completed";
  onTabChange: (tab: "all" | "running" | "completed") => void;
};

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className={`${active ? "bg-[#2a2a2a]" : ""} px-[16px] py-[6px]`}
      type="button"
      onClick={onClick}
    >
      <span className={`font-space text-[10px] tracking-[1px] font-bold ${active ? "text-[#ffb4ab]" : "text-[#e8bcb7]"}`}>
        {children}
      </span>
    </button>
  );
}

export function ReportFilters({ query, onQueryChange, tab, onTabChange }: ReportFiltersProps) {
  return (
    <div className="w-full flex flex-col gap-[12px]">
      <div className="flex items-center justify-between gap-[16px] w-full">
        <div className="font-inter-display font-bold text-[#e5e2e1] text-[20px] md:text-[24px] tracking-[1px]">
          <p className="leading-[32px]">INTELLIGENCE_REPORTS</p>
        </div>

        <div className="relative w-full max-w-[448px]">
          <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[rgba(232,188,183,0.55)]">
            <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <input
            className="w-full rounded-[12px] bg-[#1c1b1b] pl-[40px] pr-[16px] py-[11px] text-[14px] text-[#e5e2e1] placeholder:text-[rgba(232,188,183,0.4)] outline-none"
            placeholder="Search reports..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-start justify-start">
        <div className="p-[4px] flex gap-[4px]">
          <TabButton active={tab === "all"} onClick={() => onTabChange("all")}>
            ALL
          </TabButton>
          <TabButton active={tab === "running"} onClick={() => onTabChange("running")}>
            RUNNING
          </TabButton>
          <TabButton active={tab === "completed"} onClick={() => onTabChange("completed")}>
            COMPLETED
          </TabButton>
        </div>
      </div>
    </div>
  );
}

