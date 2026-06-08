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
    <main className="mx-auto w-full max-w-3xl px-6">
      <section className="pt-10">
        <ul className="space-y-8">
          {featured.map((person) => (
            <li key={person.author}>
              <div className="flex items-center gap-6">
                <Image
                  className="h-20 w-20 shrink-0 rounded-full object-cover"
                  width={80}
                  height={80}
                  src={person.image}
                  alt={person.author}
                  priority
                />

                <div>
                  <h2 className="text-lg font-medium text-[#111827] dark:text-[#f8fafc]">
                    {person.author}
                  </h2>

                  {person.title && (
                    <p className="mt-1 text-base text-[#64748b] dark:text-[#94a3b8]">
                      {person.title}
                    </p>
                  )}

                  {person.description && (
                    <p className="mt-1 max-w-2xl text-base leading-7 text-[#4b5563] dark:text-[#94a3b8]">
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