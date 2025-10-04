import "./ui/globals.css";
import Link from "next/link";
import NavBar from "./components/navbar"
import Footer from "./components/footer";
import Articles from "./components/articles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col justify-between">
          <NavBar/>
          <div className="flex-grow">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
