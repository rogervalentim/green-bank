import Image from "next/image";

const brands = [
  { src: "/brands/upwork.png", alt: "Upwork", width: 105.61, height: 32 },
  { src: "/brands/petal.png", alt: "Petal", width: 90.48, height: 32 },
  { src: "/brands/rakuten.png", alt: "Rakuten", width: 107.53, height: 32 },
  {
    src: "/brands/the-new-york-times.png",
    alt: "The New York Times",
    width: 236.8,
    height: 32,
  },
  { src: "/brands/vice.png", alt: "Vice", width: 101.71, height: 32 },
  { src: "/brands/dell.png", alt: "Dell", width: 100.57, height: 32 },
];

export function Brands() {
  return (
    <section className="max-w-310 mx-auto w-full mb-32 overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
      <div className="flex w-max animate-marquee gap-16 hover:[animation-play-state:paused]">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center justify-center"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={brand.width}
              height={brand.height}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
