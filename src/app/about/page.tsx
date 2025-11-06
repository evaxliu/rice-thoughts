import Image from "next/image";
import keng from "../../../public/Kengdoru.png";
import lilac from "../../../public/LilacPlanet.png";
import ListItem from "../components/author-info";

export default function About() {
  const featured = [
    { image: keng, author: "Kengli Fu", title: "Writer", description: "A guy who likes rice and thinks. A prose on food, society and politics." },
    { image: lilac, author: "LilacPlanet", title: "Developer", description: "Coding" },
  ];

  return (
    <main className="">
      <section>
        <ul>
          {featured.map(person => (
            <section key={person.author} className="flex items-center justify-items-center pt-5 pb-5">
              <Image className="rounded-full object-scale-down" width={200} height={200} src={person.image} alt={person.author}/>
              <ListItem person={person} />
            </section>
          ))}
        </ul>
      </section>
    </main>
  );
}