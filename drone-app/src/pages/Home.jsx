import HeroPromo from '../components/HeroPromo'
import About from '../components/About'

export default function Home() {
    return (
        <div className="hero-section">
            <HeroPromo />
            <div className="my-12"></div>
            <About />
        </div>
    );
}
