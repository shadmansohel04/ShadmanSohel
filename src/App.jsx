import './App.css';
import LandingPage from './pages/landingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ResumePage from './pages/resumePage';
import ProjectPage from './pages/projectsPage';
import ContactPage from './pages/contactPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/resume' element={<ResumePage />}/>
        <Route path='/projects' element={<ProjectPage />}/>
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
