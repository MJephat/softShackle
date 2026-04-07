import Image from "next/image";

export default function Hero() {
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

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            Request Towing Estimate »
            </button>
        </div>
      </div>

      {/* Right */}
      <Image
        src="/images/tow2.jpeg"
        alt="Tow truck"
        width={800}
        height={600}
        className="rounded-sm-lg shadow-md"
      />
      </div>
    </section>
  );
}