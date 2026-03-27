import Link from "next/link";

export function AddStationCard() {
  return (
    <div className="flex h-[195px] w-[132px] shrink-0 flex-col items-start gap-[16px]" data-node-id="57:1524">
      <Link
        className="flex h-[108px] w-[132px] shrink-0 items-center justify-center overflow-hidden rounded-[15px] border border-solid border-[rgba(94,63,59,0.1)] bg-[#201f1f] transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0px_0px_24px_0px_rgba(255,45,45,0.18)] active:scale-[0.98]"
        href="/create-station"
      >
        <span className="font-space select-none text-[64px] font-normal uppercase leading-[16px] tracking-[0.6px] text-[#ff2d2d]">
          +
        </span>
      </Link>
      <div className="h-[48px] w-[121px] shrink-0" aria-hidden />
    </div>
  );
}
