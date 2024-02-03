import "./App.css";
import About from "./component/main/About";
import EmailSection from "./component/main/Email";
import Hero from "./component/main/Hero";
import Navbar from "./component/main/Navbar";
import Projects from "./component/main/Projects";

function App() {
  return (
    <main className=" bg-[#242424]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <EmailSection />
    </main>
  );
}

export default App;
