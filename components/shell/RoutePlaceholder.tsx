export function RoutePlaceholder({ title }: { title: string }) {
  return (
    <div className="font-inter-display min-h-[calc(100vh-56px)] px-4 pb-16 pt-10 text-white md:min-h-screen md:px-8 md:pt-16">
      <h1 className="font-space text-[18px] font-medium tracking-[0.2em] text-[#71717a] uppercase">{title}</h1>
    </div>
  );
}
