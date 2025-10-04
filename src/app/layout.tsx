import "./ui/globals.css";
import NavBar from "./components/navbar"
import Footer from "./components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>
          <title>Kengli Blog</title>
        </div>
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
