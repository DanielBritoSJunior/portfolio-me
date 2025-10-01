
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import AboutSection from './components/AboutSection';
import TechCarousel from './components/TechCarousel';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen verflow-x-hidden scroll-smooth">
      <CustomCursor />
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