import React from "react";

export default function RefundPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
        <p className="text-gray-700">
          At Navanri, we are committed to your satisfaction. If you receive a
          product that is damaged, defective, or not as described, we offer a
          refund or replacement within 30 days of delivery.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Eligibility for Refunds</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>The product must be unused or defective upon arrival.</li>
          <li>
            Refund requests must be made within 30 days of receiving the
            product.
          </li>
          <li>
            Proof of purchase (order number or invoice) is required for all
            refund requests.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">How to Request a Refund</h2>
        <p className="text-gray-700">
          To request a refund, please contact our customer service team with
          your order details:
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
        <h2 className="text-2xl font-semibold mb-2">Refund Processing</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>
            Once your refund request is approved, we will process it within 5–7
            business days.
          </li>
          <li>
            Refunds are issued using the same payment method used for the
            original purchase.
          </li>
          <li>
            If a replacement is requested, we will ship the new item promptly at
            no additional cost.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Exceptions</h2>
        <p className="text-gray-700">
          Certain products may not be eligible for a refund due to hygiene or
          safety reasons. Any exceptions will be clearly noted on the product
          page.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Additional Support</h2>
        <p className="text-gray-700">
          If you have questions about our refund policy or need assistance with
          your order, contact us via email or phone. We are here to help!
        </p>
      </section>
    </main>
  );
}
