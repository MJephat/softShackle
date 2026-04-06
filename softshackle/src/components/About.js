import Image from "next/image";

export default function About() {
  return (
    <section className="relative px-8 py-16">

    <div className="grid md:grid-cols-2 gap-10 px-20 py-16 items-center shadow-sm bg-white rounded-lg">
      {/* Image */}
      <Image
        src="/images/tow1.jpeg"
        alt="Tow service"
        width={600}
        height={400}
        className="rounded-lg"
      />

      {/* Content */}
      <div>
        <h4 className="text-sm text-gray-500 mb-2">About Us</h4>

        <h2 className="text-3xl font-bold mb-4">
          Your Trusted Partner on the Road
        </h2>

        <p className="text-gray-600 mb-6">
          When you're in need of towing assistance, SoftShackle is your reliable partner on the road.
          Our professional towing services are designed to provide youu with peace of mind, knowing that your vehicle is in capable hands.
          With our commitment to excellence, you can trust us to handle your towing needs with care and efficiency.
          we ensure prompt response times and safe transport to your desired destination. Whether it's a breakdown, accident, or any roadside emergency,
           SoftShackle is here to assist you every step of the way.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">🔧 Professionalism</h3>
            <p className="text-gray-600 text-sm">
              Benefit from our extensive industry know-how, ensure your vehicle recieve top-tier towing services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">📅 Convenience</h3>
            <p className="text-gray-600 text-sm">
              Hassle-free scheduling tailored to your needs.
            </p>
          </div>
        </div>
      </div>
        </div>
    </section>
  );
}