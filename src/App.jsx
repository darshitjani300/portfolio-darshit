import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="">
        <NavigationBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

