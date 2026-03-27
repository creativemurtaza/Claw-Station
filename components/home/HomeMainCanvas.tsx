import Image from "next/image";
import { homeAssets } from "@/lib/figma/homeAssets";
import { ChatInputBar } from "@/components/home/ChatInputBar";

export function HomeMainCanvas() {
  return (
    <div
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:px-[32px] md:py-[356.5px]"
      data-name="Main Content Canvas"
      data-node-id="35:1374"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        data-name="Claw-33 1"
        data-node-id="35:1375"
      >
        <Image
          alt=""
          className="pointer-events-none object-cover object-center opacity-32"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 960px"
          src={homeAssets.clawBg}
          unoptimized
        />
      </div>

      <div
        className="relative flex w-full max-w-[896px] shrink-0 flex-col items-center pb-8 sm:pb-12 md:items-start md:pb-[64px]"
        data-name="Large Hero Typography:margin"
        data-node-id="35:1376"
      >
        <div
          className="relative flex min-h-[auto] w-full shrink-0 flex-col items-center md:h-[161px]"
          data-name="Large Hero Typography → Heading 2"
          data-node-id="35:1377"
        >
          <div
            className="relative flex w-full max-w-[706px] shrink-0 flex-col justify-center px-1 text-center leading-[0] tracking-[0.76px] text-[rgba(255,255,255,0.9)] md:h-[192px] md:px-0"
            data-node-id="35:1378"
          >
            <p className="font-inter-display text-[clamp(1.5rem,5vw,2.375rem)] font-bold not-italic leading-[1.15] sm:leading-[1.2] md:leading-[96px]">
              <span className="md:leading-[96px]">{`What are you `}</span>
              <span className="text-white md:leading-[96px]">working on?</span>
            </p>
          </div>
        </div>
      </div>

      <ChatInputBar />
    </div>
  );
}
