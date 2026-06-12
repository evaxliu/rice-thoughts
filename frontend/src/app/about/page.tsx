import Image from "next/image";
import keng from "../../../public/Kengdoru.png";
import lilac from "../../../public/LilacPlanet.png";

export default function About() {
  const featured = [
    {
      image: keng,
      author: "Kengli Fu",
      title: "Writer",
      description:
        "A guy who likes rice and thinks. An essay on food, society and politics.",
    },
    {
      image: lilac,
      author: "Eva L",
      title: "Developer",
      description: "",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      <section>
        <ul className="space-y-4">
          {featured.map((person) => (
            <li
              key={person.author}
              className="border-b p-6"
            >
              <div className="flex items-center gap-6">
                <Image
                  className="h-30 w-30 shrink-0 rounded-full object-contain"
                  width={120}
                  height={120}
                  src={person.image}
                  alt={person.author}
                  priority
                />

                <div>
                  <h2 className="font-sans text-2xl font-semibold tracking-tight text-[#f8fafc] md:text-3xl">
                    {person.author} - {person.title}
                  </h2>

                  {person.description && (
                    <p className="mt-3 leading-relaxed text-[#d4d4d8] md:text-lg">
                      {person.description}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}