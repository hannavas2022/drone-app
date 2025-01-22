import { ImageSlider } from './ImageSlider'
import About from './About'
import slider1 from './photo/slider1.png'
import slider2 from './photo/slider2.png'
import slider3 from './photo/slider3.png'
import slider4 from './photo/slider4.png'

const IMAGES = [{ url: slider1, alt: "Photo One" }, { url: slider2, alt: "Photo Two" }, { url: slider3, alt: "Photo Three" }, { url: slider4, alt: "Photo Four" }]

export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="py-8 text-center">
                <h1 className="text-black text-6xl font-bold">Kooma Pilot Drone Academy</h1>
            </div>
            <div className="aspect-w-14 aspect-h-6 mx-auto max-w-screen-xl">
                <ImageSlider images={IMAGES} />
                <a href="#about" className="hidden text-4xl opacity-0 transition-opacity duration-300 focus-visible:opacity-100 focus-visible:pointer-events-auto">About us</a>
            </div>
            <div className="my-12"></div>
                <About />
            
        </div>
    );
}