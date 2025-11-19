import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="w-full bg-black text-white py-6 px-6 rounded-3xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-300">
            We'd love to hear from you. Reach out for business inquiries,
            partnerships, or support.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <a href="mailto:contact@yourcompany.com" className="hover:underline">
              contact@yourcompany.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <a href="tel:+6400000000" className="hover:underline">
              +64 000 0000
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <p className="text-gray-300">Wellington, New Zealand</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-white"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-white/20 text-center text-gray-400">
        © {new Date().getFullYear()} Robotics & Artificial Intelligence LLP. All rights reserved.
      </div>
    </footer>
  );
}
