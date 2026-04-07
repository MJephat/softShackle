import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        {/* Logo & Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">SoftShackle</h2>
          <p className="text-gray-400 text-sm">
            Enhance your journey with SoftShackle towing. Precision, dedication, excellence.
          </p>
          <p className="mt-4 text-blue-400">
            📞 +254703397128
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-blue-400">
            <li>Light Duty Towing</li>
            <li>Medium Duty Towing</li>
            <li>Junk Car Towing & Removal</li>
            <li>FlatBed Service</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="font-semibold mb-4">Working Hours</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Weekdays: 8AM - 6PM</li>
            <li>Saturday: 9AM - 5PM</li>
            <li>Sunday: Closed</li>
          </ul>

          <div className="flex gap-4 mt-4 text-blue-400">
            <FaTwitter />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>

      </div>
    </footer>
  );
}