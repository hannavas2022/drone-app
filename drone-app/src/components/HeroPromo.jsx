import { useNavigate } from 'react-router-dom';
import hero from '../assets/images/Hero.jpg';

export default function HeroPromo() {
    const navigate = useNavigate();

    return (
        <div
            className="relative h-[650px] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${hero})` }} // Background image applied directly to the container
        >
            <div className="absolute inset-0 flex items-end justify-between px-12 pb-12">
                {/* Left Block */}
                <div className="flex h-[244px] w-[485px] flex-col items-center justify-center gap-[36px] rounded-2xl bg-black bg-opacity-40">
                    <h2 className="font-oswald leading-[150%] text-center font-semibold text-[38px] text-[#FFFDF2]">
                        Ready to become <br />a FPV Drone Pilot?
                    </h2>
                    <button
                        onClick={() => navigate('/courses')}
                        className="w-[277px] h-[62px] rounded-[32px] bg-[#005BBB] px-6 py-4 text-lg font-semibold text-white transition-opacity duration-300 ease-out hover:opacity-80"
                    >
                        Explore Courses
                    </button>
                </div>

                {/* Right Block */}
                <div className="flex h-[244px] w-[485px] flex-col items-center justify-center gap-[36px] rounded-2xl bg-black bg-opacity-40">
                    <h2 className="font-oswald leading-[150%] text-center font-semibold text-[38px] text-[#FFFDF2]">
                        Drone Videography:<br /> Sport and Real Estate
                    </h2>
                    <button
                        onClick={() => navigate('/videography')}
                        className="w-[277px] h-[62px] rounded-[32px] bg-[#005BBB] px-6 py-4 text-lg font-semibold text-white transition-opacity duration-300 ease-out hover:opacity-80"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}