import { ScrollView } from "react-native";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function HomeScreen() {
  return (
    <ScrollView>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </ScrollView>
  );
}
