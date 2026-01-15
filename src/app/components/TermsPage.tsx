export const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <p className="text-gray-600 mb-8">Last Updated: January 15, 2026</p>

      <div className="prose max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing and using the Everyday Attire website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Use of Website</h2>
          <p className="text-gray-700 mb-2">You agree to use our website only for lawful purposes and in a way that does not:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Infringe upon the rights of others</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Transmit harmful or malicious code</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with other users' access to the website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Product Information</h2>
          <p className="text-gray-700">
            We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions, colors, or other content on our website are accurate, complete, reliable, or error-free. We reserve the right to correct errors and update information at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Pricing and Payment</h2>
          <p className="text-gray-700 mb-2">
            All prices are listed in US Dollars (USD) and are subject to change without notice. We accept the following payment methods:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
            <li>Cash on Delivery (COD) - available for eligible orders</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Payment is due at the time of order placement (or upon delivery for COD orders). We reserve the right to cancel orders if payment cannot be processed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Order Acceptance</h2>
          <p className="text-gray-700">
            Your order is an offer to purchase products from us. We reserve the right to accept or reject your order for any reason, including but not limited to product availability, errors in pricing or product information, or fraud concerns. If your order is rejected after payment has been processed, we will issue a full refund.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Shipping and Delivery</h2>
          <p className="text-gray-700">
            We ship to addresses within the United States. Delivery times and shipping costs vary based on location and selected shipping method. We are not responsible for delays caused by shipping carriers, customs, or circumstances beyond our control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Returns and Refunds</h2>
          <p className="text-gray-700">
            Please refer to our Return and Refund Policy for detailed information about returns, exchanges, and refunds. You have the right to return most items within 30 days of delivery for a refund or exchange.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on this website, including text, graphics, logos, images, and software, is the property of Everyday Attire and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. User Accounts</h2>
          <p className="text-gray-700">
            If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Disclaimer of Warranties</h2>
          <p className="text-gray-700">
            Our website and products are provided "as is" without any warranties, express or implied. We do not guarantee that our website will be uninterrupted, secure, or error-free. We are not liable for any damages arising from your use of our website or products.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
          <p className="text-gray-700">
            To the maximum extent permitted by law, Everyday Attire shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
          <p className="text-gray-700">
            You agree to indemnify and hold harmless Everyday Attire from any claims, damages, losses, or expenses arising from your violation of these Terms and Conditions or your use of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
          <p className="text-gray-700">
            These Terms and Conditions are governed by the laws of the State of New York, United States. Any disputes shall be resolved in the courts of New York, NY.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use of our website after changes are posted constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms and Conditions, please contact us:
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
