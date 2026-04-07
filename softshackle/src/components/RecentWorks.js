import Image from "next/image";

const works = [
  "/images/tow1.jpeg",
  "/images/tow2.jpeg",
  "/images/tow3.png",
];

export default function RecentWorks() {
  return (
     <section className="relative px-20 py-10">

    <div className="gap-10 px-20 py-16 items-center shadow-sm bg-white rounded-lg">
      <h2 className="text-center text-3xl font-bold mb-10">
        Recent Works
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {works.map((src, i) => (
          <div key={i} className="overflow-hidden rounded shadow">
            <Image
              src={src}
              alt="work"
              width={400}
              height={300}
              className="hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}