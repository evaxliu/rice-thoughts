import "./ui/globals.css";
import NavBar from "./components/navbar"
import Footer from "./components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>
          <title>Rice Thoughts</title>
        </div>
        <div className="flex flex-col h-screen w-screen">
          <NavBar/>
          <div className="flex items-center justify-center h-screen">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
