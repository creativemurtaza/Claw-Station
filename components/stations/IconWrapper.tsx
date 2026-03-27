import Image from "next/image";

type IconWrapperProps = {
  src: string;
  alt: string;
  /** Absolute positioning + size inside the 132×108 shell (Figma per-station). */
  innerClassName?: string;
};

/** Figma: 132×108 rounded card shell for station artwork. */
export function IconWrapper({ src, alt, innerClassName }: IconWrapperProps) {
  return (
    <div
      className="relative h-[108px] w-[132px] shrink-0 overflow-hidden rounded-[15px] border border-solid border-[rgba(94,63,59,0.1)] bg-[#201f1f]"
      data-name="Station icon shell"
    >
      <div
        className={`absolute overflow-hidden ${innerClassName ?? "inset-0"}`}
      >
        <Image alt={alt} className="object-cover" fill sizes="132px" src={src} unoptimized />
      </div>
    </div>
  );
}
