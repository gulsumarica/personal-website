import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
