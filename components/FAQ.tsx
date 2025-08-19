"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How will I receive my product?",
    answer:
      "Your product will be shipped to the address you provide at checkout. Delivery times are: USA - 20 days, UK - 10 days. You’ll receive a tracking number once your order ships.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes! Once your product is shipped, we’ll provide a tracking number so you can follow your package every step of the way.",
  },
  {
    question: "What happens if my product is damaged during shipping?",
    answer:
      "We carefully package all products to prevent damage. If your item arrives damaged, contact us immediately and we’ll arrange a replacement or refund.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, we offer a 30-day return or exchange policy. Make sure the product is in its original condition and contact our support team to initiate the process.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship to the USA and UK. Delivery times vary: USA - 20 days, UK - 10 days. For other countries, please contact us before placing an order.",
  },
  {
    question: "Can I send a product as a gift?",
    answer:
      "Absolutely! You can enter the recipient’s shipping address at checkout and include a gift note. Contact us if you want assistance with special packaging.",
  },
  {
    question: "Do you offer support if I have issues with my order?",
    answer:
      "Yes, our customer support team is available 24/7 to help with shipping, returns, and product questions. Just reach out via email or live chat.",
  },
  {
    question: "Can I order multiple products at once?",
    answer:
      "Yes! You can add as many items as you like to your cart. Shipping costs are calculated at checkout based on your total order and destination.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">
        Frequently Asked Questions (FAQs)
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        Find helpful information about shipping, returns, and product details
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left flex justify-between items-center p-4 font-medium transition-colors ${
                openIndex === index
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-800 dark:text-gray-200"
              } focus:outline-none`}
            >
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700 dark:text-gray-300 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
