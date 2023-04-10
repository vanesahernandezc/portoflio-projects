import AboutMe from "./components/aboutMe/AboutMe";
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
      </Container>
    </>
  );
}

export default App;
