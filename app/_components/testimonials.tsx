import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    author: "Hadid Khan",
    role: "UIUX Designer",
    avatar: "/user-1.png",
  },
  {
    id: 2,
    quote:
      "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking.",
    author: "Jenny Wilson",
    role: "Trust Administrator",
    avatar: "/user-2.png",
  },
  {
    id: 3,
    quote:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    author: "Jenny Wilson",
    role: "Trust Administrator",
    avatar: "/user-3.png",
  },
];

function QuoteIcon() {
  return (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-4.5"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8.24625 0.736328C1.37472 2.06966 0.750031 8.73633 0.750031 8.73633M0.750031 8.73633V12.9882C0.750031 13.6834 0.750031 14.0311 0.807387 14.3201C1.04373 15.5114 1.97497 16.4426 3.16621 16.679C3.4553 16.7363 3.80292 16.7363 4.49815 16.7363C5.19338 16.7363 5.541 16.7363 5.83009 16.679C7.02133 16.4426 7.95257 15.5114 8.18891 14.3201C8.24627 14.0311 8.24627 13.6834 8.24627 12.9882V12.7363C8.24627 11.8064 8.24627 11.3414 8.14405 10.9599C7.86664 9.92459 7.058 9.11595 6.02273 8.83855C5.64123 8.73633 5.17624 8.73633 4.24627 8.73633H0.750031Z"
        strokeWidth="1.5"
        stroke="white"
      />
      <path
        d="M18.75 0.736328C11.8785 2.06966 11.2538 8.73633 11.2538 8.73633M11.2538 8.73633V12.9882C11.2538 13.6834 11.2538 14.0311 11.3112 14.3201C11.5475 15.5114 12.4787 16.4426 13.67 16.679C13.9591 16.7363 14.3067 16.7363 15.0019 16.7363C15.6971 16.7363 16.0448 16.7363 16.3339 16.679C17.5251 16.4426 18.4563 15.5114 18.6927 14.3201C18.75 14.0311 18.75 13.6834 18.75 12.9882V12.7363C18.75 11.8064 18.75 11.3414 18.6478 10.9599C18.3704 9.92459 17.5618 9.11595 16.5265 8.83855C16.145 8.73633 15.68 8.73633 14.75 8.73633H11.2538Z"
        strokeWidth="1.5"
        stroke="white"
      />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="max-w-310 mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-16 sm:mb-24 lg:mb-32">
      {testimonialsData.map(({ id, quote, author, role, avatar }, index) => (
        <article
          key={id}
          className={`bg-[#27322F]/24 backdrop-blur-lg p-6 sm:p-7 lg:px-6 lg:py-8 rounded-3xl sm:rounded-4xl flex flex-col justify-between ${
            index === 2 ? "md:col-span-2 lg:col-span-1" : ""
          }`}
        >
          <div>
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#3D544D] flex justify-center items-center mb-5 sm:mb-8">
              <QuoteIcon />
            </div>

            <blockquote className="text-sm sm:text-base leading-relaxed font-poppins font-normal text-white mb-6 sm:mb-8">
              &ldquo;{quote}&rdquo;
            </blockquote>
          </div>

          <footer className="flex items-center gap-3">
            <Image
              src={avatar}
              alt={author}
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
            />
            <div className="min-w-0">
              <h4 className="text-sm sm:text-base leading-6 font-medium tracking-[-0.32px] text-white truncate">
                {author}
              </h4>
              <p className="text-xs leading-5 text-[#ADB2B1] truncate">
                {role}
              </p>
            </div>
          </footer>
        </article>
      ))}
    </section>
  );
}
