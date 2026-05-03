"use client";
import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function Navbar() {

  const router = useRouter();

  const [showLogin, setShowLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
          onClick={ async () => {
           await fetch("/api/leads", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ phone, type: "call" })
            });

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
          onClick={async() => {
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            await fetch("/api/leads", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ phone, type: "whatsapp" })
            });

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
        <button
          onClick={() => setShowLogin(true)}
          className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
        >
          Login
        </button>
      </div>

{/* login form modal popup */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          <div className="bg-white p-6 rounded-xl w-[350px] shadow-lg relative">

            {/* Close Button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">{isRegister ? "Register" : "Login"}</h2>

            <form
            onSubmit={async (e) => {
                e.preventDefault();
                setError("");

                if (isRegister && password !== confirmPassword) {
                  return setError("Passwords do not match");
                }

                try {
                  setLoading(true);

                  const endpoint = isRegister ? "/api/register" : "/api/login";

                  const res = await fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      username,
                      email,
                      password,
                    }),
                  });

                  const data = await res.json();

                  if (!res.ok) {
                    setError(data.error || "Something went wrong");
                    return;
                  }

                  // ✅ SUCCESS
                  setShowLogin(false);

                  // clear form
                  setEmail("");
                  setPassword("");
                  setUsername("");
                  setConfirmPassword("");

                  router.push("/dashboard");

                } catch (err) {
                  setError("Network error");
                } finally {
                  setLoading(false);
                }
              }}
              className="flex flex-col gap-3"
            >
              {isRegister && (
                  <input
                    type="text"
                    placeholder="Username"
                    className="border p-2 rounded-lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                )}

                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="border p-2 rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {isRegister && (
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border p-2 rounded-lg"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                )}

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Processing..." : isRegister ? "Register" : "Login"}
              </button>
            </form>

            {/* Register Link */}
            <p className="text-sm text-center mt-3">
              {isRegister ? "Already have an account?" : "No account?"}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-blue-600 ml-1"
              >
                {isRegister ? "Login" : "Register"}
              </button>
            </p>
          </div>
        </div>
      )}
    </nav>

    
  ); 
}