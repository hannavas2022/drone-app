import { useNavigate } from 'react-router-dom';
import hero from '../assets/images/Hero.jpg';

export default function HeroPromo() {
    const navigate = useNavigate();

    return (
        <div className="hero">
            <img src={hero} alt="Hero Image" />
            <div className="relative mx-auto mt-[455px] flex h-[344px] w-[685px] flex-col items-center justify-center gap-[36px] bg-[#FFFDF2]">
                <h2 className="font-oswald leading-[150%] h-[144px] w-[685px] text-center font-semibold text-[48px] text-black">
                    Ready to go from a novice to a professional Drone Pilot?
                </h2>
                <button
                    onClick={() => navigate('/courses')}
                    className="w-[277px] h-[62px] bg-[#005BBB] rounded-[32px] px-6 py-4 text-white font-semibold text-lg transition-opacity duration-300 ease-out hover:opacity-80"
                >
                    Explore Courses
                </button>
            </div>
        </div>
    );
}
