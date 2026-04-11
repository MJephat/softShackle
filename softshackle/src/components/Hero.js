"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
    const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative px-20 py-10">

    <div className="grid md:grid-cols-2 items-center  shadow-sm bg-white rounded-lg">

      {/* Left */}
     <div className="relative z-10 md:translate-x-20">
        <div className="bg-gray-100 p-10 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-4">
            The Best Towing Service In Nairobi
            </h1>

            <p className="text-gray-600 mb-6">
            Experience top-tier tow services that prioritize quality and professionalism,
            ensuring the safety and security of your vehicle.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
            >
              Request Towing Estimate »
            </button>
        </div>
      </div>


      {/* Right */}
      <div>
        <Image
          src="/images/tow2.jpeg"
          alt="Tow truck"
          width={800}
          height={600}
          className="rounded-sm-lg shadow-md"
        />
        </div>
      </div>


      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          
          <div className="bg-black text-white p-8 rounded-lg w-full max-w-md relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              Get Towing Help Now
            </h2>

            {/* FORM */}
            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name*"
                className="w-full p-3 rounded bg-white text-black"
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 rounded bg-white text-black"
              />

              <input
                type="tel"
                placeholder="Phone*"
                className="w-full p-3 rounded bg-white text-black"
              />

              <select className="w-full p-3 rounded bg-white text-black">
                <option>Is this an Emergency*</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <button
                type="submit"
                className="w-full bg-blue-600 py-3 rounded font-semibold"
              >
                SUBMIT
              </button>
            </form>

            <p className="text-xs text-center mt-4 text-gray-300">
              Your information will be kept private.
            </p>

          </div>
        </div>
      )}
    </section>
  );
}