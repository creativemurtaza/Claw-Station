"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { homeAssets } from "@/lib/figma/homeAssets";

const navClassInactive =
  "font-space flex h-[17px] min-h-[17px] flex-col justify-center leading-[0] whitespace-nowrap text-[11.2px] font-normal tracking-[1.6px] text-[#71717a] text-left uppercase";

/** Tints monochrome nav PNGs to match active label color #ff2d2d */
const navIconActive =
  "[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(51%)_saturate(2878%)_hue-rotate(346deg)_brightness(104%)_contrast(97%)]";

type SidebarProps = {
  mobileOpen?: boolean;
  onNavigate?: () => void;
};

function isRouteActive(path: string, pathname: string | null) {
  if (!pathname) return false;
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Sidebar({ mobileOpen = false, onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const linkProps = { onClick: () => onNavigate?.() };

  const activeWrap =
    "border-l-2 border-solid border-[#ff2d2d] bg-[#2a2a2a] py-[12px] pl-[16px] pr-[16px] shadow-[0px_0px_15px_0px_rgba(255,45,45,0.2)]";

  const isHome = isRouteActive("/", pathname);
  const isStations = isRouteActive("/stations", pathname);
  const isAgents = isRouteActive("/agents", pathname);
  const isReports = isRouteActive("/reports", pathname);
  const isActivity = isRouteActive("/activity", pathname);

  return (
    <aside
      className={`fixed left-0 top-0 z-[45] flex h-full min-h-screen w-[256px] flex-col justify-between bg-[#0e0e0e] px-[16px] py-[32px] transition-transform duration-200 ease-out ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
      data-name="Aside - SideNavBar Integration"
      data-node-id="35:1422"
    >
      <div className="w-full shrink-0 px-[8px] pb-[48px]" data-name="Margin" data-node-id="35:1423">
        <div className="flex w-full min-w-0 items-center gap-[12px]" data-name="Container" data-node-id="35:1424">
          <div className="relative h-[41px] w-[40px] shrink-0" data-name="Claw-13 1" data-node-id="35:1425">
            <Image
              alt=""
              className="pointer-events-none object-cover"
              fill
              sizes="40px"
              src={homeAssets.clawLogo}
              unoptimized
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start overflow-hidden" data-name="Container" data-node-id="35:1426">
            <div className="w-full min-w-0 shrink-0" data-name="Heading 1" data-node-id="35:1427">
              <div
                className="font-space flex min-h-[28px] flex-col justify-center leading-[0] text-[20px] font-bold tracking-[-1px] text-[#ff2d2d]"
                data-node-id="35:1428"
              >
                <p className="whitespace-nowrap leading-[28px]">CLAW STATION</p>
              </div>
            </div>
            <div className="w-full min-w-0 shrink-0" data-name="Container" data-node-id="35:1429">
              <div
                className="font-space flex min-h-[15px] flex-col justify-center leading-[0] text-[9.6px] font-normal tracking-[1.6px] text-[#71717a] uppercase"
                data-node-id="35:1430"
              >
                <p className="whitespace-nowrap leading-[14.4px]">TACTICAL OS V1.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="relative flex min-h-0 w-full flex-1 flex-col gap-[8px] items-start overflow-y-auto overflow-x-hidden"
        data-name="Nav"
        data-node-id="35:1431"
      >
        <Link
          className={`flex w-full shrink-0 flex-nowrap items-center gap-[16px] ${isHome ? activeWrap : "px-[16px] py-[12px]"}`}
          data-name="Button - New Chat"
          href="/"
          {...linkProps}
        >
          <div className="relative size-[14.25px] shrink-0" data-name="Container" data-node-id="35:1433">
            <Image
              alt=""
              className={`object-contain ${isHome ? navIconActive : ""}`}
              fill
              src={homeAssets.navNewChat}
              unoptimized
            />
          </div>
          <div className="relative min-w-0 flex-1" data-name="Container" data-node-id="35:1435">
            <div className="flex flex-col items-start">
              <div
                className={`font-space flex min-h-[17px] flex-col justify-center leading-[0] text-left text-[11.2px] font-bold tracking-[1.6px] uppercase whitespace-nowrap ${
                  isHome ? "text-[#ff2d2d]" : "text-[#71717a]"
                }`}
                data-node-id="35:1436"
              >
                <p className="leading-[16.8px]">New Chat</p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          className={`flex w-full shrink-0 flex-nowrap items-center gap-[16px] ${isStations ? activeWrap : "px-[16px] py-[12px]"}`}
          data-name="Button"
          href="/stations"
          {...linkProps}
        >
          <div className="relative size-[12.75px] shrink-0" data-name="Container" data-node-id="35:1438">
            <Image
              alt=""
              className={`object-contain ${isStations ? navIconActive : ""}`}
              fill
              src={homeAssets.navStations}
              unoptimized
            />
          </div>
          <div className="relative min-w-0 flex-1" data-name="Container" data-node-id="35:1440">
            <div
              className={`${navClassInactive} ${isStations ? "text-[#ff2d2d]" : ""}`}
              data-node-id="35:1441"
            >
              <p className="leading-[16.8px]">Stations</p>
            </div>
          </div>
        </Link>

        <Link
          className={`flex w-full shrink-0 flex-nowrap items-center gap-[16px] ${isAgents ? activeWrap : "py-[12px] pl-[16px] pr-[24px]"}`}
          data-name="Link - Agents"
          href="/agents"
          {...linkProps}
        >
          <div className="relative h-[7px] w-[14px] shrink-0" data-name="Container" data-node-id="35:1443">
            <Image
              alt=""
              className={`object-contain ${isAgents ? navIconActive : ""}`}
              fill
              src={homeAssets.navAgents}
              unoptimized
            />
          </div>
          <div
            className={`font-space flex min-h-[15px] min-w-0 flex-1 flex-col justify-center leading-[0] text-[11.2px] font-normal tracking-[1.6px] uppercase whitespace-nowrap ${
              isAgents ? "text-[#ff2d2d]" : "text-[#71717a]"
            }`}
            data-node-id="35:1445"
          >
            <p className="leading-[15px]">Agents</p>
          </div>
        </Link>

        <Link
          className={`flex w-full shrink-0 flex-nowrap items-center gap-[16px] ${isReports ? activeWrap : "px-[16px] py-[12px]"}`}
          data-name="Button"
          href="/reports"
          {...linkProps}
        >
          <div className="relative size-[12.75px] shrink-0" data-name="Container" data-node-id="35:1447">
            <Image
              alt=""
              className={`object-contain ${isReports ? navIconActive : ""}`}
              fill
              src={homeAssets.navReports}
              unoptimized
            />
          </div>
          <div className="relative min-w-0 flex-1" data-name="Container" data-node-id="35:1449">
            <div className={`${navClassInactive} ${isReports ? "text-[#ff2d2d]" : ""}`} data-node-id="35:1450">
              <p className="leading-[16.8px]">Reports</p>
            </div>
          </div>
        </Link>

        <Link
          className={`flex w-full shrink-0 flex-nowrap items-center gap-[16px] ${isActivity ? activeWrap : "px-[16px] py-[12px]"}`}
          data-name="Button"
          href="/activity"
          {...linkProps}
        >
          <div className="relative size-[12.75px] shrink-0" data-name="Container" data-node-id="35:1452">
            <Image
              alt=""
              className={`object-contain ${isActivity ? navIconActive : ""}`}
              fill
              src={homeAssets.navActivity}
              unoptimized
            />
          </div>
          <div className="relative min-w-0 flex-1" data-name="Container" data-node-id="35:1454">
            <div className={`${navClassInactive} ${isActivity ? "text-[#ff2d2d]" : ""}`} data-node-id="35:1455">
              <p className="leading-[16.8px]">Activity</p>
            </div>
          </div>
        </Link>
      </nav>

      <div
        className="w-full shrink-0 border-t border-solid border-[rgba(24,24,27,0.5)] pt-[33px]"
        data-name="HorizontalBorder"
        data-node-id="35:1456"
      >
        <div className="relative w-full shrink-0" data-name="Button" data-node-id="35:1457">
          <Link className="flex w-full flex-nowrap items-center gap-[16px] px-[16px] py-[8px]" href="/settings" {...linkProps}>
            <div className="relative h-[14.25px] w-[14.094px] shrink-0" data-name="Container" data-node-id="35:1458">
              <Image alt="" className="object-contain" fill src={homeAssets.navSettings} unoptimized />
            </div>
            <div className="relative min-w-0 flex-1" data-name="Container" data-node-id="35:1460">
              <div className={navClassInactive} data-node-id="35:1461">
                <p className="leading-[16.8px]">Settings</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative w-full shrink-0" data-name="Button" data-node-id="35:1462">
          <Link className="flex w-full flex-nowrap items-center gap-[16px] px-[16px] py-[8px]" href="/support" {...linkProps}>
            <div className="relative size-[14.25px] shrink-0" data-name="Container" data-node-id="35:1463">
              <Image alt="" className="object-contain" fill src={homeAssets.navSupport} unoptimized />
            </div>
            <div className="relative min-w-0 flex-1" data-name="Container" data-node-id="35:1465">
              <div className={navClassInactive} data-node-id="35:1466">
                <p className="leading-[16.8px]">Support</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
}
