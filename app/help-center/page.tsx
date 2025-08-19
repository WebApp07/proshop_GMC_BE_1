import React from "react";

export default function HelpCenter() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <p className="text-gray-700">
          Welcome to Navanri’s Help Center! Here you’ll find answers to the most
          common questions about our products, orders, shipping, and returns. If
          you don’t find what you’re looking for, feel free to contact our
          support team.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ordering</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>
            <strong>How do I place an order?</strong> Simply browse our
            products, add them to your cart, and proceed to checkout. You’ll
            receive an email confirmation after your order is complete.
          </li>
          <li>
            <strong>Can I modify my order after placing it?</strong> We process
            orders quickly, but contact us immediately if you need to make a
            change.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Shipping & Delivery</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>
            <strong>How long does shipping take?</strong> Orders are shipped
            within 1–3 business days. Delivery times vary by location.
          </li>
          <li>
            <strong>Can I track my order?</strong> Yes! We provide tracking for
            all shipments. You’ll receive the tracking number via email once
            your order is shipped.
          </li>
          <li>
            <strong>Do you ship internationally?</strong> Currently, we ship to
            select countries. Please check at checkout for available
            destinations.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Returns & Refunds</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>
            <strong>What is your return policy?</strong> Products that arrive
            damaged or defective can be returned for a replacement or refund
            within 30 days of delivery.
          </li>
          <li>
            <strong>How do I request a return?</strong> Contact us via email at{" "}
            <a
              href="mailto:navanri01@hotmail.com"
              className="text-blue-600 underline"
            >
              navanri@hotmail.com
            </a>{" "}
            or phone at +32 495459409 with your order details.
          </li>
          <li>
            <strong>When will I receive my refund?</strong> Refunds are
            processed within 5–7 business days after we receive the returned
            item.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Product Information</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>
            <strong>Are your products authentic?</strong> Yes! All items are
            sourced from trusted suppliers to ensure authenticity and quality.
          </li>
          <li>
            <strong>Can I get more details about a product?</strong> Product
            descriptions, specifications, and images are provided on each
            product page. Contact us if you need additional information.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Support</h2>
        <p className="text-gray-700">
          If you have questions not covered here, our customer support team is
          ready to help:
        </p>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:navanri01@hotmail.com"
              className="text-blue-600 underline"
            >
              navanri@hotmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +32 495459409
          </li>
          <li>
            <strong>Business Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM CET
          </li>
        </ul>
      </section>
    </main>
  );
}
