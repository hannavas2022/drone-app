import { useNavigate } from 'react-router-dom';
import hero from '../assets/images/Hero.jpg';

export default function HeroPromo() {
    const navigate = useNavigate();

    return (
        <div
            className="relative h-auto w-full bg-cover bg-center md:h-[650px]"
            style={{ backgroundImage: `url(${hero})` }}
        >
            {/* Block Container */}
            <div className="hero-gap-medium flex flex-col items-center justify-start gap-6 px-4 py-6 md:absolute md:inset-x-0 md:bottom-[48px] md:flex-row md:justify-center md:gap-40 xl:px-20">

                {/* Left Block */}
                <div className="flex w-full max-w-[485px] flex-col items-center justify-center gap-6 rounded-2xl bg-black bg-opacity-20 p-4 md:h-[244px]">
                    <h2 className="font-oswald hero-text-small text-center text-2xl font-semibold leading-snug text-[#FFFDF2] md:text-[38px] md:leading-[150%]">
                        Ready to become <br className="hidden md:block" /> a FPV Drone Pilot?
                    </h2>
                    <button
                        onClick={() => navigate('/courses')}
                        className="w-full max-w-[277px] h-[56px] rounded-[32px] bg-[#005BBB] px-6 py-3 text-[20px] font-semibold text-white transition-opacity duration-300 ease-out hover:opacity-80"
                    >
                        Explore Courses
                    </button>
                </div>

                {/* Right Block */}
                <div className="flex w-full max-w-[485px] flex-col items-center justify-center gap-6 rounded-2xl bg-black bg-opacity-20 p-4 md:h-[244px]">
                    <h2 className="font-oswald hero-text-small text-center text-2xl font-semibold leading-snug text-[#FFFDF2] md:text-[38px] md:leading-[150%]">
                        Drone Videography: <br className="hidden md:block" /> Sport and Real Estate
                    </h2>
                    <button
                        onClick={() => navigate('/videography')}
                        className="w-full max-w-[277px] h-[56px] rounded-[32px] bg-[#005BBB] px-6 py-3 text-[20px] font-semibold text-white transition-opacity duration-300 ease-out hover:opacity-80"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}
