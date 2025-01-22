
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import FAQ from './pages/FAQ';
import TechSupport from './pages/TechSupport';
import Footer from './components/Footer';  
import './index.css';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <div className="main-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/techsupport" element={<TechSupport />} />
                </Routes>
            </div>
            <div className="my-12"></div>
            <Footer /> 
        </>
    );
}

export default App;

