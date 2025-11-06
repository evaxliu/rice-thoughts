import { Feature } from "@/types"

type Props = {
  person: Feature
}

export default function ListItem({ person }: Props) {
  const { author, title, description } = person

  return (
    <li className="text-xl dark:text-white/90 light:text-black/90">
      <main className="p-5 m-5 dark:text-white light:text-black flex items-center justify-center">
        <section className="w-full flex-none">
          <h2 className="text-2xl">
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