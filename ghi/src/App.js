import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experience from './components/Experiences/Experiences';
import ProjectOverview from './components/ProjectOverview/ProjectOverview';
import Contact from './components/Contacts/Contacts';
import Header from './components/Nav/Header';
import ProjectPage from './pages/Projects/Projects';
import Banner from './components/Banner/Banner';
import AboutMe from './pages/About/About';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectPage />} />

      </Routes>

    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <Banner />
      <Experience />
      <ProjectOverview />
      <Contact />
    </>
  );
}



export default App;
