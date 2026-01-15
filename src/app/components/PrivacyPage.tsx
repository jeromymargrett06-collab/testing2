export const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last Updated: January 15, 2026</p>

      <div className="prose max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to Everyday Attire. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-2">We collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address, and billing information</li>
            <li><strong>Transaction Information:</strong> Purchase history, payment details, and order information</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies</li>
            <li><strong>Usage Data:</strong> How you interact with our website, pages visited, and time spent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">We use your information to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and account</li>
            <li>Send promotional emails (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and ensure security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All payment transactions are encrypted using SSL technology.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Sharing Your Information</h2>
          <p className="text-gray-700 mb-2">
            We do not sell your personal information. We may share your data with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Service providers who help us operate our business (shipping companies, payment processors)</li>
            <li>Law enforcement or regulatory authorities when required by law</li>
            <li>Third parties with your explicit consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
          <p className="text-gray-700">
            Our website uses cookies to enhance your browsing experience. Cookies help us remember your preferences and understand how you use our site. You can control cookie settings through your browser, but some features may not work properly if cookies are disabled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
          <p className="text-gray-700 mb-2">You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Withdraw consent at any time</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
          <p className="text-gray-700">
            Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this privacy policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-gray-700">
              <strong>Email:</strong> Care@attire.store<br />
              <strong>Phone:</strong> +1-672-365-8854<br />
              <strong>Address:</strong> 123 Fashion Street, New York, NY 10001, USA
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
