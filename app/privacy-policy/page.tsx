import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700">
          At Navanri, your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you visit our website or make a purchase.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>
            Personal information you provide when placing an order (name,
            address, email, phone number).
          </li>
          <li>
            Payment information (processed securely via our payment providers).
          </li>
          <li>
            Information collected automatically, such as IP address, browser
            type, and website usage data.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="text-gray-700 space-y-1 list-disc list-inside">
          <li>To process and fulfill your orders.</li>
          <li>
            To communicate with you regarding your orders, inquiries, or
            customer support requests.
          </li>
          <li>To improve our website, services, and product offerings.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          3. Sharing Your Information
        </h2>
        <p className="text-gray-700">
          We do not sell or rent your personal information. We may share your
          information with trusted third-party service providers to process
          orders, ship products, or manage payments. These providers are only
          authorized to use your information as necessary to perform their
          services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Cookies & Tracking</h2>
        <p className="text-gray-700">
          We use cookies and similar tracking technologies to enhance your
          browsing experience, analyze website traffic, and improve our
          services. You can disable cookies in your browser settings, but some
          features of our website may not function properly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p className="text-gray-700">
          We implement appropriate technical and organizational measures to
          protect your personal information from unauthorized access,
          alteration, disclosure, or destruction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <p className="text-gray-700">
          You have the right to access, correct, or delete your personal
          information. You may also unsubscribe from marketing communications at
          any time by following the instructions in our emails or contacting us
          directly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy or how your data
          is used, please contact us:
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
        <h2 className="text-2xl font-semibold mb-2">
          8. Changes to This Policy
        </h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date. Continued use of our
          website constitutes acceptance of the updated policy.
        </p>
      </section>
    </main>
  );
}
