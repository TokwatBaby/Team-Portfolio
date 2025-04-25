import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import Team from './components/Team';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
