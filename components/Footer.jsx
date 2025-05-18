import { Mail, Phone, Facebook, Instagram, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-indigo-100 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-2">Peaceful Mind Therapy</h3>
          <p className="text-sm text-indigo-200">
            Empowering individuals, couples, and families toward healing and growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-indigo-200">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <div className="flex items-center gap-2 mb-2 text-sm text-indigo-200">
            <Mail className="w-4 h-4" />
            <span>therapy@example.com</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-sm text-indigo-200">
            <Phone className="w-4 h-4" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-sm text-indigo-200">
            <MessageCircle className="w-4 h-4" />
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-indigo-200">
            <MapPin className="w-4 h-4" />
            <a
              href="https://goo.gl/maps/your-google-maps-link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Visit our Location
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-indigo-300 mt-10 border-t border-indigo-700 pt-6">
        © {new Date().getFullYear()} Peaceful Mind Therapy. All rights reserved.
      </div>
    </footer>
  );
}
