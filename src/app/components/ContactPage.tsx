import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Have questions or need assistance? We're here to help! Reach out to us through any of the following methods.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-600">
                  123 Fashion Street<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+16723658854" className="hover:text-gray-900">
                    +1-672-365-8854
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:Care@attire.store" className="hover:text-gray-900">
                    Care@attire.store
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Saturday: 10:00 AM - 4:00 PM EST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600 text-sm">
              Our dedicated customer support team is always ready to assist you with any questions about our products, orders, shipping, or returns. We typically respond to all inquiries within 24 hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
