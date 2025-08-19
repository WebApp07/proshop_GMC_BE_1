import React from "react";

export default function ShoppingPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Shopping Policy</h1>
        <p className="text-gray-700">
          At Navanri, we aim to provide a seamless and safe shopping experience
          for all our customers. Please review our shopping policies to ensure a
          smooth transaction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Placing Orders</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>All products are available while supplies last.</li>
          <li>
            You can place orders via our website using a valid email and payment
            method.
          </li>
          <li>
            Please double-check your shipping address and contact details before
            submitting your order.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Pricing & Payments</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>All prices are listed in EUR and include applicable taxes.</li>
          <li>Payment can be made using our supported methods at checkout.</li>
          <li>
            Orders are not confirmed until payment has been successfully
            processed.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Shipping</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>We process and ship orders within 1–3 business days.</li>
          <li>
            Tracking information will be provided so you can monitor your
            shipment.
          </li>
          <li>
            Shipping times may vary depending on your location and delivery
            partner.
          </li>
        </ul>
      </section>
    </main>
  );
}
