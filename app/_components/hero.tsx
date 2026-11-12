import Image from "next/image";

export function Hero() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-20 md:pt-28 lg:pt-32 mb-16 lg:mb-26 px-6 md:px-12 lg:px-0 overflow-hidden"
      id="why-us"
    >
      {/* Coluna de Texto */}
      <div className="w-full lg:w-auto lg:pl-25 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-[56px] leading-tight lg:leading-16 mb-6 lg:mb-8">
          Discover the Perfect
          <span className="relative inline-block z-10 px-1">
            Credit Card
            <svg
              className="absolute left-0 top-0 sm:top-1 w-full h-full z-10 text-[#2BB32A] pointer-events-none"
              viewBox="0 0 362 103"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M168.73 88.4545C212.375 83.5416 256.673 76.6038 286.744 70.1763C515.332 21.3168 98.4368 -37.5639 7.3428 34.9736C-23.6894 59.6843 63.7911 80.3409 168.73 88.4545ZM168.73 88.4545C95.8769 96.6551 24.8452 101 24.8452 101M168.73 88.4545C233.806 93.486 305.596 93.0784 360 87.6841"
                strokeWidth="2"
                strokeLinecap="square"
                stroke="#2BB32A"
              />
            </svg>
          </span>{" "}
          for You
        </h1>

        <p className="text-base sm:text-[18px] leading-6 text-[#ADB2B1] font-normal max-w-lg lg:max-w-124.5 mb-8">
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </p>

        <a
          href="#"
          className="flex gap-4 items-center bg-[#2BB32A] rounded-[64px] px-7 py-3 sm:px-8 mb-8 w-fit hover:bg-[#259E24] transition-colors text-white font-medium leading-6"
        >
          Get Started
          <svg
            width="25"
            height="19"
            viewBox="0 0 25 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9H23.5M16.5 1L23.5 9L16.5 17.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#EFF8F0"
            />
          </svg>
        </a>

        <div className="flex items-center gap-4 text-left">
          <Image src="/users.png" alt="users" width={120} height={48} />
          <div>
            <h3 className="text-white font-bold text-base leading-6">10.2k+</h3>
            <p className="text-[#ADB2B1] font-normal text-xs leading-4">
              Active users around the world
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-auto flex justify-center lg:justify-end">
        <Image
          src="/card-hero.png"
          alt="Credit Card"
          width={750}
          height={539}
          priority
          className="w-full max-w-md sm:max-w-lg lg:max-w-150 xl:max-w-187.5 h-auto object-contain"
        />
      </div>
    </section>
  );
}
