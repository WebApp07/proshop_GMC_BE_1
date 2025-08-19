import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">About Navanri</h1>
        <p className="text-gray-700">
          Navanri is an Belgium-based online store specializing in high-quality
          physical products for everyday life. We offer a wide range of items
          including clothing, accessories, and lifestyle products, all sourced
          from trusted suppliers.
        </p>
        <p className="text-gray-700 mt-4">
          Our mission is to provide authentic, durable products with excellent
          customer service. We ensure that every order is carefully packed and
          shipped on time, so our customers receive their products safely and
          promptly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Business Information</h2>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>Business Name:</strong> Navanri
          </li>
          <li>
            <strong>Address:</strong> Bondgenotenstraat 160, Brussel, 1190,
            Belgium
          </li>
          <li>
            <strong>Business Type:</strong> Retail / E-commerce (Physical
            Products)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Customer Service Contact
        </h2>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:navanri@hotmail.com"
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

      <section>
        <h2 className="text-2xl font-semibold mb-2">Shipping & Returns</h2>
        <ul className="text-gray-700 space-y-1">
          <li>
            ✅ All orders are carefully packed and shipped within 1–3 business
            days.
          </li>
          <li>
            ✅ We provide tracking for all shipments so you can monitor your
            order.
          </li>
          <li>
            ✅ If your product arrives damaged or defective, we will replace it
            or refund you within 30 days of delivery.
          </li>
          <li>
            ✅ Please see our{" "}
            <a href="/refund-policy" className="text-blue-600 underline">
              Refund Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            for full details.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
        <div className="flex space-x-4 text-blue-600">
          <a
            href="https://www.facebook.com/people/navanri/61574765687905/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/navanrikey/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.trustpilot.com/review/navanri.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trustpilot
          </a>
        </div>
      </section>
    </main>
  );
}
