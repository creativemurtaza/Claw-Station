import Image from "next/image";
import { homeAssets } from "@/lib/figma/homeAssets";

type TopbarProps = {
  onMenuClick?: () => void;
  isAuthenticated?: boolean;
  onLoginClick?: () => void;
};

export function Topbar({ onMenuClick, isAuthenticated = false, onLoginClick }: TopbarProps) {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 flex h-[56px] items-center justify-between border-b border-[rgba(24,24,27,0.35)] bg-[#0b0b0b] px-4 md:left-[256px] md:px-[32px]"
      data-name="Header - TopAppBar Integration (Minimal)"
      data-node-id="35:1403"
    >
      <div className="flex min-w-0 shrink items-center gap-2 md:gap-[8px]" data-name="Container" data-node-id="35:1404">
        <button
          aria-label="Open navigation"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[#e8bcb7] md:hidden"
          type="button"
          onClick={onMenuClick}
        >
          <span className="sr-only">Menu</span>
          <svg aria-hidden className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </button>
        <div className="size-[8px] shrink-0 bg-[#ffb4ab]" data-name="Background" data-node-id="35:1405" />
        <div className="relative min-w-0" data-name="Container" data-node-id="35:1406">
          <div
            className="font-space flex min-h-[16px] flex-col justify-center leading-[0] text-[11px] font-medium tracking-[2px] text-[#71717a] sm:text-[12px] sm:tracking-[3.2px] whitespace-nowrap"
            data-node-id="35:1407"
          >
            <p className="leading-[16px]">SYSTEM STATUS: OPTIMAL</p>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3 sm:gap-[24px]" data-name="Container" data-node-id="35:1408">
        {isAuthenticated ? (
          <>
            <button
              className="relative h-[19.192px] w-[15px] shrink-0"
              data-name="Button"
              data-node-id="35:1409"
              type="button"
            >
              <Image alt="" className="object-contain" fill src={homeAssets.bell} unoptimized />
            </button>
            <div className="flex shrink-0 items-center gap-[11.99px]" data-name="Container" data-node-id="35:1411">
              <div className="relative hidden min-w-0 sm:block" data-name="Container" data-node-id="35:1412">
                <div
                  className="font-space flex h-[17px] flex-col justify-center leading-[0] text-[11.2px] font-normal tracking-[1.12px] text-[#e8bcb7] whitespace-nowrap"
                  data-node-id="35:1413"
                >
                  <p className="leading-[16.8px]">OPERATOR_01</p>
                </div>
              </div>
              <div className="relative size-[20px] shrink-0" data-name="Container" data-node-id="35:1414">
                <Image alt="" className="object-contain" fill src={homeAssets.avatar} unoptimized />
              </div>
            </div>
          </>
        ) : (
          <button
            className="font-space rounded-md border border-[rgba(255,45,45,0.35)] bg-[rgba(28,27,27,0.6)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[1.6px] text-[#ffb4ab] transition-colors hover:bg-[rgba(42,42,42,0.9)]"
            type="button"
            onClick={() => onLoginClick?.()}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}
