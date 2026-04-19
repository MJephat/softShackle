import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

export default function Navbar() {

  const phone = "254703397128";
  const message = "Hello, I need towing assistance";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-20 py-4 shadow-sm bg-white">
      
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-lg">
        🚛 SoftShackle
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="#about">About Us</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact Us</Link>
      </div>

      {/* CTA */}
      <div className="flex gap-3 items-center">

     

        {/* CALL BUTTON */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
          onClick={() => {
            if (window.gtag) {
              window.gtag("event", "call_click", {
                event_category: "engagement",
                event_label: "Call Button",
              });
            }
            window.location.href = `tel:${phone}`;
          }}
        >
          <FaPhone />
        </button>

        {/* WHATSAPP BUTTON */}
        <button
          onClick={() => {
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "whatsapp_click", {
                event_category: "engagement",
                event_label: "Hero WhatsApp Button",
              });
            }

            window.open(url, "_blank");
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700"
        >
          <FaWhatsapp />
        </button>

             {/* ✅ LOGIN BUTTON */}
        <Link
          href="/dashboard"
          className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  ); 
}