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
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-5">
      <ul>
        {featured.map((person) => (
          <li
            key={person.author}
            className="group block wrap-break-word py-6"
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
    </div>
  );
}