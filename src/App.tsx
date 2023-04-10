import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact";
import Container from "./components/container/Container";
import { Navbar } from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;
