import { Feature } from "@/types"

type Props = {
  person: Feature
}

export default function ListItem({ person }: Props) {
  const { author, title, description } = person

  return (
    <li className="text-xl text-black/90 dark:text-white/90">
      <main className="p-5 m-5 text-black dark:text-white flex items-center justify-center">
        <section className="w-full flex-none">
          <h2 className="text-xl">
            {author} - {title}
          </h2>
          <p className="text-base mt-1">
            {description}
          </p>
        </section>
      </main>
    </li>
  )
}