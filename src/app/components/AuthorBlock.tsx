import { Feature } from "@/types";

type Props = {
  person: Feature;
};

export default function ListItem({ person }: Props) {
  const { author, title, description } = person;

  return (
    <div>
      <h2 className="font-sans text-2xl font-semibold tracking-tight text-[#f8fafc] md:text-3xl">
        {author} - {title}
      </h2>

      {description && (
        <p className="mt-3 leading-relaxed text-[#d4d4d8] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}