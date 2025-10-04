import "./ui/globals.css";
import Link from "next/link";
import NavBar from "./components/navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
