import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaP, FaPhone, FaW, FaWhatsapp } from "react-icons/fa6";

export default function Navbar() {

  const phone = "254703397128"; // no +, no spaces
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
 
  <div className="flex gap-2">
  <button
    className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700"
    onClick={() => window.location.href = `tel:${phone}`}
  >
  <FaPhone />
  </button>

  <button
    onClick={() => {
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
    className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700"
  >
    <FaWhatsapp />
  </button>
</div>
    </nav>
  );
}