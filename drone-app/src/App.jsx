
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import FAQ from './pages/FAQ';
import Videography from './pages/Videography';
import Footer from './components/Footer';
import RoutesLayout from './components/RoutesLayout'
import './index.css';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <RoutesLayout> {/* Wrap all routes with the layout */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/videography" element={<Videography />} />
                </Routes>
            </RoutesLayout>
            <Footer />
        </>
    );
}


export default App;

