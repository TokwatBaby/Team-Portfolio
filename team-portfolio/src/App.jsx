import {Routes,Route} from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './components/Contact';


function App() {

  return (
    <>
    <Header/>
    <Routes>
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
