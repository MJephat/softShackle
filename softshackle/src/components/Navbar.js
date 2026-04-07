import Link from "next/link";

export default function Navbar() {
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
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700">
        📞 Call Now For A Quote
      </button>
    </nav>
  );
}