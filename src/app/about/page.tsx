import Image from "next/image";
import icon from "../../../public/Kengdoru.png";

export default function About() {
  return (
    <main className="flex items-center justify-items-center border p-10">
      <section className="flex items-center justify-items-center p-10">
        <Image className="w-50 h-50 rounded-full object-scale-down" src={icon} alt="Rounded avatar of Rice Thoughts"/>
      </section>
      <p>
        Rice Thoughts Blog - A guy who likes rice and thinks. Essay on politics and culture.
      </p>
    </main>
  );
}