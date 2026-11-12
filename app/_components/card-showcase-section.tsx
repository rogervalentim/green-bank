import Image from "next/image";
import Link from "next/link";

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  showArrow?: boolean;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  reverse?: boolean;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "personalize",
    title: "Design your personalized credit card.",
    description:
      "You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary.",
    ctaText: "Create New Card",
    ctaHref: "#",
    showArrow: true,
    imageSrc: "/cards-1.png",
    imageAlt: "Personalized Credit Card",
    imageWidth: 695,
    imageHeight: 519,
  },
  {
    id: "discover",
    title: "Find the Perfect Credit Card for You",
    description:
      "Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations.",
    ctaText: "Learn More",
    ctaHref: "#",
    showArrow: false,
    imageSrc: "/cards-2.png",
    imageAlt: "Credit Card Selection",
    imageWidth: 604,
    imageHeight: 491,
    reverse: true,
  },
];

function ArrowRightIcon() {
  return (
    <svg
      width="25"
      height="19"
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-5 h-4 sm:w-6 sm:h-4.75"
    >
      <path
        d="M1 9H23.5M16.5 1L23.5 9L16.5 17.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#EFF8F0"
      />
    </svg>
  );
}

export function CardShowcaseSection() {
  return (
    <section
      className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
      id="payments"
    >
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
        {SHOWCASE_ITEMS.map((item) => (
          <div
            key={item.id}
            data-scroll-stagger
            className={`flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 ${
              item.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Coluna de Texto */}
            <div
              data-scroll-reveal={item.reverse ? "right" : "left"}
              className="w-full lg:w-1/2 max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <h3 className="text-white text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight mb-4 md:mb-6">
                {item.title}
              </h3>

              <p className="font-poppins text-[#ADB2B1] font-normal text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
                {item.description}
              </p>

              <Link
                href={item.ctaHref}
                className="bg-[#2BB32A] hover:bg-[#2BB32A]/80 transition-colors px-6 py-3.5 sm:px-8 sm:py-4 rounded-full w-full sm:w-auto justify-center text-white font-medium text-sm sm:text-base leading-6 inline-flex items-center gap-3 sm:gap-4"
              >
                {item.ctaText}
                {item.showArrow && <ArrowRightIcon />}
              </Link>
            </div>

            {/* Coluna de Imagem */}
            <div
              data-scroll-reveal={item.reverse ? "left" : "right"}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={item.imageWidth}
                height={item.imageHeight}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 695px"
                className="w-full max-w-md sm:max-w-lg lg:max-w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
