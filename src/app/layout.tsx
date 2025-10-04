import "./ui/globals.css";
import Link from "next/link";
import NavBar from "./components/navbar"
import Footer from "./components/footer";
import Articles from "./components/articles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex flex-col">
          <NavBar/>
          <div className="flex-grow overflow-auto">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
