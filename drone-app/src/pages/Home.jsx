import { ImageSlider } from './ImageSlider'
import About from './About'
import slider1 from './photo/slider1.png'
import slider2 from './photo/slider2.png'
import slider3 from './photo/slider3.png'
import slider4 from './photo/slider4.png'


const IMAGES = [{ url: slider1, alt: "Photo One" }, { url: slider2, alt: "Photo Two" }, { url: slider3, alt: "Photo Three" }, { url: slider4, alt: "Photo Four" }]
export default function Home() {
    return (
        <div>
            <div className="title">
                <h1 className="title-text">Kooma Pilot Drone Academy</h1>
            </div>
            <div style={{ maxWidth: "1200px", width: "100%", aspectRatio: "14/6", margin: "0 auto" }}>
                <ImageSlider images={IMAGES} />
                
                <a href="#about" className="hidden-link"  style={{ fontSize: "4rem" }}>About us</a>
            </div>

            {/* Now include About component directly here */}
            <About /> {/* This renders the About section directly on the Home page */}
        </div>
    );
}
