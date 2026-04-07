import { Car, Wrench, Truck } from "lucide-react";

const services = [
  {
    title: "Light Duty Towing",
    desc: "Swift towing for cars and small vehicles, ensuring safe transport.",
    icon: <Car size={28} />,
  },
  {
    title: "Medium Duty Towing",
    desc: "Reliable towing for trucks and larger vehicles, with expertise.",
    icon: <Truck size={28} />,
  },
  {
    title: "Junk Car Towing & Removal",
    desc: "Efficient removal of unwanted vehicles.",
    icon: <Car size={28} />,
  },
  {
    title: "Lockout Service",
    desc: "Quick assistance in unlocking vehicles.",
    icon: <Wrench size={28} />,
  },
  {
    title: "Tire Changes",
    desc: "Rapid tire change services.",
    icon: <Wrench size={28} />,
  },
  {
    title: "Roadside Assistance",
    desc: "Comprehensive support for vehicle issues.",
    icon: <Truck size={28} />,
  },
];

export default function Services() {
  return (
     <section className="relative px-20 py-10">

    <div className="gap-10 px-20 py-16 items-center shadow-sm bg-white rounded-lg">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm text-gray-500 mb-2">SERVICES</p>
        <h2 className="text-3xl font-bold mb-10">
          We Are Qualified & Professional
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex gap-4">
              <div className="text-blue-600">{service.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}