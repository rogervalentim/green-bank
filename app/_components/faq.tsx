"use client"; // Remova esta linha se não estiver usando Next.js App Router

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What credit score do I need to apply for a credit card?",
    answer:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    question: "How can I apply for a credit card online?",
    answer:
      "You can apply directly through our website by filling out the online application form with your personal and financial details. Most decisions are made within minutes.",
  },
  {
    question: "Are there any annual fees associated with the credit card?",
    answer:
      "Some of our cards have no annual fee, while premium rewards cards carry an annual fee that unlocks exclusive travel and cashback benefits.",
  },
  {
    question: "How long does it take to receive the credit card once approved?",
    answer:
      "Once approved, your physical card will typically arrive by mail within 7 to 10 business days. You can also access your virtual card immediately in the app.",
  },
  {
    question: "How can I check my credit card balance and transactions?",
    answer:
      "You can monitor your balance, recent transactions, and statements 24/7 through our mobile app or online banking portal.",
  },
  {
    question: "What should I do if my credit card is lost or stolen?",
    answer:
      "Freeze your card immediately using the mobile app and contact our 24/7 customer support team so we can cancel the card and issue a replacement.",
  },
  {
    question: "Is my credit card information secure?",
    answer:
      "Yes, we use bank-grade encryption, fraud monitoring, and tokenization to keep your personal and financial data protected at all times.",
  },
];

export function Faq() {
  // Inicia com o índice 0 aberto (igual ao print), ou use `null` para iniciar tudo fechado
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="max-w-255 mx-auto w-full mb-32 px-4" id="faqs">
      <h3 className="text-[40px] font-bold text-white text-center mb-16">
        FAQs
      </h3>

      <div className="divide-y divide-white/20 border-b border-white/20">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-4">
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="flex items-center justify-between w-full text-left gap-4 cursor-pointer group"
              >
                <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-white/80 transition-colors">
                  {item.question}
                </h4>

                {/* Ícone de + ou - */}
                <span className="shrink-0 flex items-center justify-center w-4 h-4">
                  {isOpen ? (
                    // Ícone de Menos (-)
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 0V3.08772H0V0H16Z" fill="white" />
                    </svg>
                  ) : (
                    // Ícone de Mais (+)
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 9.22353H9.31765V16H6.65098V9.22353H0V6.80784H6.65098V0H9.31765V6.80784H16V9.22353Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {/* Resposta expansível */}
              {isOpen && (
                <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed pr-8">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
