import type { StaticImageData } from "next/image";

type BlogPost = {
  slug: string,
  id: string,
  title: string,
  author: string,
  date: string,
  description: description,
}

type Feature = {
  image: StaticImageData,
  author: string,
  title: string,
  description: description,
}