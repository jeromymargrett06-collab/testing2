export const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Everyday Attire</h1>

      <div className="prose max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Everyday Attire, your premier destination for contemporary fashion and everyday wear. Founded in 2020, we've built our reputation on delivering high-quality clothing that combines style, comfort, and affordability.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a small boutique has grown into a trusted online fashion destination, serving customers across the United States. Our mission is simple: to provide fashionable, versatile clothing that makes you feel confident and comfortable in your everyday life.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Quality First</h3>
              <p className="text-gray-700">
                We carefully select each piece in our collection, ensuring premium materials and craftsmanship that stands the test of time.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Customer Satisfaction</h3>
              <p className="text-gray-700">
                Your happiness is our priority. We're committed to providing exceptional customer service and a seamless shopping experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Sustainable Fashion</h3>
              <p className="text-gray-700">
                We believe in responsible fashion. Our products are sourced from ethical suppliers who share our commitment to sustainability.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Style for Everyone</h3>
              <p className="text-gray-700">
                Fashion should be accessible to all. We offer diverse collections that cater to different styles, sizes, and preferences.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Curated collections featuring the latest trends</li>
            <li>Premium quality fabrics and materials</li>
            <li>Affordable pricing without compromising on quality</li>
            <li>Fast and reliable shipping across the USA</li>
            <li>Easy returns and exchanges</li>
            <li>Dedicated customer support team</li>
            <li>Secure payment options including Cash on Delivery</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="mb-4">
            Become part of the Everyday Attire family and stay updated with the latest fashion trends, exclusive offers, and style tips. Follow us on social media and subscribe to our newsletter for special promotions!
          </p>
          <p className="font-semibold">
            Thank you for choosing Everyday Attire – where everyday style meets exceptional quality.
          </p>
        </div>
      </div>
    </div>
  );
};
