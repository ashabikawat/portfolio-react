import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
