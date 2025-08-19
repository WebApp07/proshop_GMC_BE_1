import React from "react";

export default function RefundPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Return & Refund Policy</h1>
        <p className="text-gray-700">
          At Navanri, your satisfaction is our priority. If you are not
          completely satisfied with your purchase, you may request a return or
          refund under the conditions outlined below.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Eligibility for Returns</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>Items must be returned within 30 days of delivery.</li>
          <li>
            Products must be unused, in original packaging, and in the same
            condition as received.
          </li>
          <li>
            Some items may be non-returnable; please check the product
            description before purchasing.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">How to Return</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>Contact our support team via email to initiate a return.</li>
          <li>Include your order number and reason for the return.</li>
          <li>
            Follow the instructions provided for shipping your item back to us.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Refund Process</h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>
            Once we receive and inspect the returned item, we will notify you of
            the approval or rejection of your refund.
          </li>
          <li>
            Approved refunds will be processed to your original payment method
            within 5–7 business days.
          </li>
          <li>
            Shipping fees are non-refundable unless the return is due to a
            defective or incorrect item.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Damaged or Defective Items
        </h2>
        <p className="text-gray-700">
          If your item arrives damaged or defective, please contact us
          immediately. We will arrange for a replacement or full refund at no
          additional cost.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          For any questions regarding returns or refunds, email us at{" "}
          <a
            href="mailto:navanri@hotmail.com"
            className="text-blue-600 underline"
          >
            navanri@hotmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
