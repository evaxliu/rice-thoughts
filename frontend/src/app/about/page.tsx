import Image from "next/image";
import keng from "../../../public/Kengdoru.png";
import lilac from "../../../public/LilacPlanet.png";
import ListItem from "../components/AuthorBlock";

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
              className="rounded-xl border border-[#2a2d38] bg-[#14171e] p-6"
            >
              <div className="flex items-center gap-6">
                <Image
                  className="h-[120px] w-[120px] shrink-0 rounded-full object-contain"
                  width={120}
                  height={120}
                  src={person.image}
                  alt={person.author}
                  priority
                />

                <ListItem person={person} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}