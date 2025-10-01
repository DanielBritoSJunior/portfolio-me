
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import AboutSection from './components/AboutSection';
import TechCarousel from './components/TechCarousel';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TechCarousel />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App