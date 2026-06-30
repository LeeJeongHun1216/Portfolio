import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/sections/Home";
import Profile from "./components/sections/Profile";
import Certifications from "./components/sections/Certifications";
import MilitaryExperience from "./components/sections/MilitaryExperience";
import Awards from "./components/sections/Awards";
import Projects from "./components/sections/Projects";
import CareerGoal from "./components/sections/CareerGoal";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Home />
        <Profile />
        <Certifications />
        <MilitaryExperience />
        <Awards />
        <Projects />
        <CareerGoal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
