import React from "react";

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-700">
          Welcome to Navanri! By accessing or using our website and services,
          you agree to comply with and be bound by the following terms and
          conditions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">1. General Information</h2>
        <p className="text-gray-700">
          Navanri is a Belgium-based online store offering high-quality physical
          products. All orders are subject to these Terms of Service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. Product Information</h2>
        <p className="text-gray-700">
          We strive to provide accurate descriptions and images of our products.
          However, colors, sizes, or other details may vary slightly due to
          display settings or manufacturer updates.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. Orders & Payment</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>All orders must be placed through our website.</li>
          <li>
            We accept payment via the methods specified on our checkout page.
          </li>
          <li>
            Prices are listed in EUR and are subject to change without prior
            notice.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Shipping</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>
            Orders are shipped within 1–3 business days after payment
            confirmation.
          </li>
          <li>Tracking is provided for all shipments.</li>
          <li>
            Shipping times may vary depending on your location and courier
            service.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Returns & Refunds</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>
            If your product arrives damaged or defective, you may request a
            replacement or refund within 30 days of delivery.
          </li>
          <li>
            Refunds are processed after we receive and inspect the returned
            item.
          </li>
          <li>
            Please see our{" "}
            <a href="/refund-policy" className="text-blue-600 underline">
              Refund Policy
            </a>{" "}
            for full details.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. Customer Responsibilities
        </h2>
        <p className="text-gray-700">
          By using our services, you agree to provide accurate information,
          maintain confidentiality of your account, and comply with all
          applicable laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          7. Limitation of Liability
        </h2>
        <p className="text-gray-700">
          Navanri is not responsible for any indirect, incidental, or
          consequential damages arising from the use of our products or website.
          Our liability is limited to the purchase price of the product.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p className="text-gray-700">
          If you have questions about these Terms of Service, please contact us:
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

      <section>
        <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
        <p className="text-gray-700">
          We may update these Terms of Service at any time. Any changes will be
          posted on this page with the updated date. Continued use of our
          website constitutes acceptance of the updated terms.
        </p>
      </section>
    </main>
  );
}
