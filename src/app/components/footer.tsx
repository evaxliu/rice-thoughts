import Image from "next/image";

export default function Footer() {
  return(
    <div className="font-sans items-center justify-items-center">
      <footer>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 pb-5"
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
      </footer>
    </div>
  );
}