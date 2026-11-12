import Image from "next/image";
import Link from "next/link";

const footerSections = [
  {
    title: "About us",
    links: [
      { label: "Investors", href: "#" },
      { label: "Features", href: "#" },
      { label: "Book a demo", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Credit Cards", href: "#" },
      { label: "Gift Cards", href: "#" },
      { label: "Savings accounts", href: "#" },
      { label: "NFT", href: "#" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { label: "Free rewards", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Affiliate program", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Changelog", href: "#" },
      { label: "License", href: "#" },
      { label: "Site Maps", href: "#" },
      { label: "News", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#283430]/24 backdrop-blur-lg pt-12 pb-8 px-6 md:pt-15 md:pb-9 md:px-8">
      <div className="max-w-310 mx-auto w-full">
        {/* Seção Superior: Logo + Colunas de Links */}
        <div
          data-scroll-stagger
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8 mb-14 md:mb-20"
        >
          {/* Coluna da Marca (ocupa 2 colunas no desktop para dar respiro) */}
          <div
            data-scroll-reveal="up"
            className="sm:col-span-2 lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="DoraDesign Logo"
                width={140}
                height={24}
              />
            </Link>
            <p className="text-base font-normal leading-6 tracking-[-0.03em] max-w-72 text-[#ADB2B1]">
              Discover the power of our secure and rewarding credit cards
            </p>
          </div>

          {/* Colunas de Navegação */}
          {footerSections.map((section) => (
            <nav
              key={section.title}
              data-scroll-reveal="up"
              aria-label={section.title}
            >
              <h4 className="text-base font-bold text-white leading-6 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-[#ADB2B1] text-base font-normal leading-6 hover:text-white hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Barra Inferior: Copyright e Cookies */}
        <div
          data-scroll-reveal="up"
          className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10"
        >
          <p className="text-xs font-normal text-[#ADB2B1] leading-5">
            Copyright © 2026 DoraDesign. All Rights Reserved.
          </p>

          <p className="text-xs font-normal text-[#ADB2B1] leading-5 font-poppins">
            This page uses cookies. See cookies details{" "}
            <Link
              href="#"
              className="text-[#ADB2B1] underline hover:text-white transition-colors"
            >
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
