import AboutMe from "./components/aboutMe/AboutMe";
import Container from "./components/container/Container";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
      </Container>
    </>
  );
}

export default App;
