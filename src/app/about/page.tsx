import Image from "next/image";
import keng from "../../../public/Kengdoru.png";
import lilac from "../../../public/LilacPlanet.png";
import ListItem from "../components/author-item";

export default function About() {
  const featured = [
    { image: keng, author: "Kengli Fu", title: "Writer", description: "A guy who likes rice and thinks. A prose on food, society and politics." },
    { image: lilac, author: "LilacPlanet", title: "Developer", description: "Coding" },
  ];

  return (
    <main className="flex items-center justify-items-center p-10">
      <section>
        <ul>
          {featured.map(person => (
            <section key={person.author} className="flex items-center justify-items-center border p-10">
              <Image className="w-50 h-50 rounded-full object-scale-down" src={person.image} alt={person.author}/>
              <ListItem person={person} />
            </section>
          ))}
        </ul>
      </section>
    </main>
  );
}