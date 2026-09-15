export default function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-serif text-2xl text-ink md:text-3xl">
            {item}
          </span>
          <span
            aria-hidden
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
          />
        </span>
      ))}
      <span className="px-3" aria-hidden />
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-line py-6">
      <div
        className="flex w-max animate-marquee"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
