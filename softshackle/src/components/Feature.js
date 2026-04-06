export default function Features() {
  const items = [
    {
      title: "Top-Quality Towing Solutions",
      desc: "SwiftHook delivers safe, superior towing using premium equipment.",
    },
    {
      title: "Affordable Rates",
      desc: "Our competitive pricing fits any budget.",
    },
    {
      title: "Customer Satisfaction",
      desc: "Over 99% of clients recommend SwiftHook.",
    },
  ];

  return (
    <section className="px-20 py-10">
      <div className="grid md:grid-cols-3 p-6 rounded-lg shadow-md">
        {items.map((item, i) => (
          <div key={i}>
            <h3 className="font-semibold text-lg mb-2">
              ⭐ {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}