type StatusBadgeProps = {
  status: "active" | "idle";
};

export function StatusBadge({ status }: StatusBadgeProps) {
  if (status !== "active") {
    return (
      <div className="font-manrope flex items-center justify-center p-[10px]">
        <span className="text-[9px] font-normal uppercase leading-[15px] tracking-[1px] text-[#71717a]">Idle</span>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center p-[10px]">
        <div className="font-manrope flex flex-col justify-center leading-[0] text-[9px] font-normal uppercase tracking-[1px] text-[#ffb4ab]">
          <p className="leading-[15px]">Active</p>
        </div>
      </div>
      <div className="flex items-center p-[10px]">
        <div
          aria-hidden
          className="status-dot-pulse size-[8px] shrink-0 rounded-[12px] bg-[#ff544a] shadow-[0px_0px_10px_0px_#ff544a]"
        />
      </div>
    </div>
  );
}
