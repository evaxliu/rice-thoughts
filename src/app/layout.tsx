import "./ui/globals.css";
import NavBar from "./components/navbar"
import Footer from "./components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>
          <title>RiceThoughts Blog</title>
        </div>
        <div className="flex flex-col h-screen w-screen">
          <NavBar/>
          <div className="flex flex-grow flex-row max-w-full max-h-full overflow-auto">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
