"use client";

import type { Report } from "@/components/reports/ReportCard";

type ReportDetailProps = {
  report: Report;
  onClose: () => void;
};

export function ReportDetail({ report, onClose }: ReportDetailProps) {
  return (
    <section className="relative w-full rounded-[12px] bg-[#131313] overflow-hidden">
      <button
        aria-label="Close report"
        className="absolute right-[24px] top-[24px] p-[8px] text-[#e8bcb7]/70 hover:text-[#e8bcb7] transition-colors"
        type="button"
        onClick={onClose}
      >
        <span className="text-[18px] leading-[18px]">×</span>
      </button>

      <div className="px-[32px] pt-[40px]">
        <div className="flex items-center gap-[16px]">
          <div className="border border-[rgba(255,180,171,0.3)] border-solid px-[9px] py-[3px]">
            <div className="font-space text-[#ffb4ab] text-[9px] tracking-[4.8px] uppercase">
              <p className="leading-[13.5px]">SYSTEM_RESPONSE</p>
            </div>
          </div>
          <div className="opacity-50">
            <div className="font-space text-[#e8bcb7] text-[9px] tracking-[4.8px] uppercase">
              <p className="leading-[13.5px]">ID: {report.id}</p>
            </div>
          </div>
        </div>

        <div className="mt-[8px]">
          <div className="font-space text-[#e5e2e1] text-[28px] md:text-[36px] font-bold tracking-[-1.8px]">
            <p className="leading-[1.15] md:leading-[40px]">{report.title}</p>
          </div>
        </div>
      </div>

      <div className="px-[32px] pt-[28px] flex flex-col gap-[24px] md:flex-row">
        <div className="bg-[#ff544a] size-[40px] shrink-0 flex items-center justify-center">
          <div className="size-[18px] rounded-[4px] bg-[#5c0004]" aria-hidden />
        </div>

        <div className="flex-1 flex flex-col gap-[18px]">
          <div className="text-[#e5e2e1] text-[16px] md:text-[18px]">
            <p className="leading-[31px]">{report.content}</p>
          </div>
        </div>
      </div>

      <div className="mx-[32px] mt-[32px] rounded-[12px] bg-[#1c1b1b] border-l-4 border-solid border-[#c8c6c5] px-[32px] py-[28px]">
        <div className="font-space text-[#c8c6c5] text-[12px] tracking-[3.2px] uppercase">
          <p className="leading-[16px]">Key Intelligence Points</p>
        </div>
        <ol className="mt-[16px] flex flex-col gap-[16px]">
          {report.keyPoints.map((point, idx) => (
            <li key={`${report.id}-${idx}`} className="flex gap-[16px]">
              <div className="font-space text-[#c8c6c5] text-[16px] font-bold w-[28px] shrink-0">
                <p className="leading-[24px]">{String(idx + 1).padStart(2, "0")}</p>
              </div>
              <div className="text-[#e5e2e1] text-[14px]">
                <p className="leading-[22.75px]">{point}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {report.recommendation ? (
        <div className="px-[32px] pt-[28px] pb-[96px]">
          <div className="font-space text-[#e5e2e1] text-[14px] tracking-[1.4px] uppercase font-bold">
            <p className="leading-[20px]">Strategic Recommendation</p>
          </div>
          <div className="mt-[12px] text-[#e8bcb7] text-[16px]">
            <p className="leading-[26px]">{report.recommendation}</p>
          </div>
        </div>
      ) : (
        <div className="pb-[96px]" />
      )}

      <div className="absolute bottom-[24px] right-[24px] flex flex-col sm:flex-row gap-[12px]">
        <button
          className="bg-[#ff544a] px-[24px] py-[11px] flex items-center justify-center"
          type="button"
        >
          <span className="font-space text-[#5c0004] text-[10px] tracking-[3.2px] font-bold uppercase">
            EXPORT_RAW_DATA
          </span>
        </button>
        <button
          className="border border-[#ae8783] border-solid px-[24px] py-[11px] flex items-center justify-center"
          type="button"
        >
          <span className="font-space text-[#e5e2e1] text-[10px] tracking-[3.2px] font-bold uppercase">
            RELAY_TO_FLEET
          </span>
        </button>
      </div>
    </section>
  );
}

