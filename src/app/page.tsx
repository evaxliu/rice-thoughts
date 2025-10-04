import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
        <title>Kengli Blog</title>
      </div>
        <header className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/evaxliu/kengli-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Github Repo
        </a>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
    </div>
  );
}