"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
    const [showModal, setShowModal] = useState(false);

      const [form, setForm] = useState({
          name: "",
          phone: "",
          location: "",
          vehicle: "",
          urgency: "",
          issue: "",
        });

      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState(false);

      const businessPhone = "254703397128";
      // const businessPhone = "254713805349";

      function updateField(key, value) {
        setForm((prev) => ({
          ...prev,
          [key]: value,
        }));
      }

    async function handleSubmit(e) {
      e.preventDefault();

      setSuccess("");

      if(
        !form.name || 
        !form.phone || 
        !form.location ||
        !form.vehicle ||
        !form.urgency
      ){
        alert("Please fill in all required fields.");
        return;
      }
      setLoading(true);

      try{
        const res = await fetch("/api/leads", {
          method: "POST",
          headers: {
             "Content-Type": "application/json"
             },
          body: JSON.stringify({ 
          name: form.name,
          location: form.location,
          email: form.email,
          phone: form.phone,
          service: form.service,
          urgency: form.urgency, 
          type: "form" 
        })
        });

        const data = await res.json();

         if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }
      
      setSuccess("Request submitted successfully.");

      const message = `Hello SoftShackle, my name is ${form.name}. I need towing assistance.
          Phone: ${form.phone}
          Location: ${form.location}
          Vehicle: ${form.vehicle || "Not specified"}
          Urgency: ${form.urgency}
          Issue: ${form.issue || "Not specified"}`;

             const waUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(
        message
      )}`;

        setTimeout(() => {
        window.open(waUrl, "_blank");
        setShowModal(false);

           setForm({
          name: "",
          phone: "",
          location: "",
          vehicle: "",
          urgency: "",
          issue: "",
        });

        setSuccess("");
      }, 1000);

      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setLoading(false);

      }
    }


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
             <p className="text-sm text-zinc-500 mb-6">
              Fill the form and we’ll contact you immediately.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

         <input
              type="text"
              placeholder="Full Name*"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full p-3 rounded bg-white text-black"
            />

             <input
                type="tel"
                placeholder="Phone*"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full p-3 rounded bg-white text-black"
              />

                <input
                type="location"
                placeholder="Current Location*"
                value={form.location}
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
                className="w-full p-3 rounded bg-white text-black"
              />

              <input
                type="text"
                placeholder="Vehicle Type (Optional)"
                value={form.vehicle}
                onChange={(e) =>
                  updateField("vehicle", e.target.value)
                }
                  className="w-full p-3 rounded bg-white text-black"              />
              
              <input
                type="email"
                placeholder="Email*"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full p-3 rounded bg-white text-black"
              />

            

              <select
                value={form.service}
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value })
                }
                className="w-full p-3 rounded bg-white text-black"
              >
                <option>select a service</option>
                <option>Light Duty Towing</option>
                <option>Medium Duty Towing</option>
                  <option>Junk Car Towing & removal</option>
                <option>FlatBed Service</option>

              </select>

           
            <select
                value={form.urgency}
                onChange={(e) =>
                  updateField("urgency", e.target.value)
                }
              className="w-full p-3 rounded bg-white text-black"              >
                <option value="">Is this an emergency? *</option>
                <option value="Emergency">Yes</option>
                <option value="Scheduled">No</option>
              </select>

      <textarea
                rows="3"
                placeholder="Describe the issue (Optional)"
                value={form.issue}
                onChange={(e) =>
                  updateField("issue", e.target.value)
                }
                 className="w-full p-3 rounded bg-white text-black"              />

              <button
              disabled={loading}
                type="submit"
                className="w-full bg-blue-600 py-3 rounded font-semibold"
              >
                {loading ? "Submitting..." : "SUBMIT"}
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