import Nav from './components/Nav'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';


import './App.css';
import "@fontsource/geist-sans"; 





function App() {
  return (
      <div>
        <Nav />
        <ThemeToggle />
        <Hero />
        <Experience />
        <Projects />
        <Contact />
        <Footer />

        <ScrollToTopButton />

       
    </div>
  )
}

export default App
