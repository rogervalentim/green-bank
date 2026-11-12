import Image from "next/image";

export function AppCtaSection() {
  return (
    <section className="max-w-310 mx-auto w-full px-6 md:px-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
      {/* Bloco de Texto e Botões */}
      <div
        data-scroll-reveal="left"
        className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl"
      >
        <h3 className="text-white font-bold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-14 tracking-[-0.48px] mb-4 lg:mb-5">
          Easy Way to manage
          <br className="hidden sm:inline" /> your finances
        </h3>
        <p className="font-normal text-base sm:text-[18px] leading-6 tracking-[-0.03em] mb-8 text-[#ADB2B1]">
          Easy to use mobile app that support on android and ios.
        </p>

        {/* Botões das Lojas */}
        <div className="flex flex-wrap justify-center lg:justify-start items-stretch gap-4 sm:gap-6">
          <button
            type="button"
            className="p-4 h-14 sm:h-16 w-fit bg-[#3D544D] hover:bg-[#49635b] transition-colors rounded-2xl flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/app-store.png"
              alt="App Store"
              width={122.94}
              height={32}
              className="w-auto h-7 sm:h-8"
            />
          </button>
          <button
            type="button"
            className="p-4 h-14 sm:h-16 w-fit bg-[#3D544D] hover:bg-[#49635b] transition-colors rounded-2xl flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/google-play.png"
              alt="Google Play"
              width={138.13}
              height={32}
              className="w-auto h-7 sm:h-8"
            />
          </button>
        </div>
      </div>

      {/* Imagem do Celular */}
      <div
        data-scroll-reveal="right"
        className="w-full max-w-105 sm:max-w-125 lg:max-w-151 flex justify-center"
      >
        <Image
          src="/cellphone.png"
          alt="Cell Phone"
          width={604}
          height={472}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
