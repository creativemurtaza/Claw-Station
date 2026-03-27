"use client";

export type ReportStatus = "running" | "completed";

export type Report = {
  id: string;
  title: string;
  summary: string;
  status: ReportStatus;
  time: string;
  content: string;
  keyPoints: string[];
  recommendation?: string;
};

type ReportCardProps = {
  report: Report;
  active?: boolean;
  onView?: () => void;
};

function StatusBadge({ status }: { status: ReportStatus }) {
  if (status === "running") {
    return (
      <div className="bg-[rgba(255,84,74,0.2)] border border-[rgba(255,180,171,0.2)] border-solid flex flex-col items-start px-[9px] py-[3px]">
        <div className="font-space flex h-[14px] flex-col justify-center leading-[0] text-[#ffb4ab] text-[9px] tracking-[3.2px] uppercase">
          <p className="leading-[13.5px]">RUNNING</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[rgba(71,71,70,0.1)] border border-[rgba(200,198,197,0.2)] border-solid flex flex-col items-start px-[9px] py-[3px]">
      <div className="font-space flex h-[14px] flex-col justify-center leading-[0] text-[#c8c6c5] text-[9px] tracking-[3.2px] uppercase">
        <p className="leading-[13.5px]">COMPLETED</p>
      </div>
    </div>
  );
}

export function ReportCard({ report, active = false, onView }: ReportCardProps) {
  return (
    <div
      className={`bg-[#1c1b1b] rounded-[12px] ${
        active ? "border-l-2 border-solid border-[#ffb4ab] pl-[26px] pr-[24px]" : "p-[24px]"
      } py-[24px] flex flex-col gap-[6.8px] w-full`}
      data-report-id={report.id}
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center gap-[12px] min-w-0">
          <div
            className={`shrink-0 size-[8px] rounded-[9999px] ${
              report.status === "running"
                ? "bg-[#ffb4ab] shadow-[0px_0px_8px_0px_rgba(255,180,171,0.6)]"
                : "bg-[#c8c6c5] opacity-40"
            }`}
            aria-hidden
          />
          <div className="min-w-0">
            <div className="font-space text-[#e5e2e1] text-[18px] font-bold tracking-[-0.45px]">
              <p className="leading-[28px] truncate">{report.title}</p>
            </div>
          </div>
        </div>
        <div className="font-space text-[#e8bcb7] text-[10px] tracking-[1px] opacity-60 shrink-0">
          <p className="leading-[15px] uppercase">{report.time}</p>
        </div>
      </div>

      <div className="text-[#e8bcb7] text-[14px] font-normal max-w-[672px]">
        <p className="leading-[22.75px] line-clamp-2">{report.summary}</p>
      </div>

      <div className="flex items-center justify-between w-full pt-[9.2px]">
        <div className="flex items-center gap-[8px]">
          <StatusBadge status={report.status} />
          <div className="opacity-40">
            <div className="font-space text-[#e8bcb7] text-[9px] tracking-[3.2px] uppercase">
              <p className="leading-[13.5px]">PRIORITY_A</p>
            </div>
          </div>
        </div>
        <button
          className={`font-space text-[12px] font-bold leading-[16px] ${
            report.status === "running" ? "text-[#ffb4ab]" : "text-[#e8bcb7]"
          }`}
          type="button"
          onClick={onView}
        >
          VIEW →
        </button>
      </div>
    </div>
  );
}

