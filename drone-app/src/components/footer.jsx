import logo from '../assets/logo/kooma.png';
import facebook from '../assets/media/facebook.svg';
import instagram from '../assets/media/instagram.svg';
import youtube from '../assets/media/youtube.svg';
import email from '../assets/media/email.png';
import whatsapp from '../assets/media/whatsapp.svg';
import threads from '../assets/media/threads.svg';
import tiktok from '../assets/media/tiktok.svg';

export default function Footer() {
    return (
        <footer className="w-full bg-[#002a57] text-white">
            {/* Mobile View (below 768px) */}
            <div className="flex flex-col items-center justify-center px-4 py-6 text-center text-white md:hidden">
                <p className="mb-4 font-semibold text-[16px]">
                    Join us on social media and stay tuned:
                </p>
                <div className="flex flex-wrap justify-center gap-[16px] p-2 sm:gap-[20px] md:gap-[24px]">
                    <a href="https://www.facebook.com/profile.php?id=61569971140339" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" className="h-[24px] w-[24px]" />
                    </a>
                    <a href="https://www.instagram.com/koomadrone" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className="h-[24px] w-[24px]" />
                    </a>
                    <a href="https://www.youtube.com/@Koomadrone" target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="YouTube" className="h-[24px] w-[24px]" />
                    </a>
                    <a href="mailto:koomadrone@gmail.com">
                        <img src={email} alt="Email" className="h-[24px] w-[24px]" />
                    </a>
                    <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="WhatsApp" className="h-[24px] w-[24px]" />
                    </a>
                    <a href="https://www.threads.net/@koomadrone" target="_blank" rel="noopener noreferrer">
                        <img src={threads} alt="Threads" className="h-[24px] w-[24px]" />
                    </a>
                    <a href="https://www.tiktok.com/@koomadrone.ca" target="_blank" rel="noopener noreferrer">
                        <img src={tiktok} alt="TikTok" className="h-[24px] w-[24px]" />
                    </a>cd
                </div>
            </div>

            {/* Desktop & Tablet View (768px and up) */}
            <div className="hidden flex-col items-start justify-between gap-y-6 px-6 py-[40px] md:flex md:flex-row md:items-center md:px-[80px] md:gap-y-0 lg:px-[200px]">
                {/* Left Side - Text + Icons */}
                <div className="flex w-full flex-col items-start text-left md:w-2/3">
                    <p className="mb-3 text-[14px] md:text-[16px] lg:text-[18px]">
                        Join us on social media and stay tuned:
                    </p>
                    <div className="flex max-w-[500px] flex-wrap gap-[24px]">
                        <a href="https://www.facebook.com/profile.php?id=61569971140339" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" className="h-[24px] w-[24px]" />
                        </a>
                        <a href="https://www.instagram.com/koomadrone" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" className="h-[24px] w-[24px]" />
                        </a>
                        <a href="https://www.youtube.com/@Koomadrone" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="YouTube" className="h-[24px] w-[24px]" />
                        </a>
                        <a href="mailto:koomadrone@gmail.com">
                            <img src={email} alt="Email" className="h-[24px] w-[24px]" />
                        </a>
                        <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="WhatsApp" className="h-[24px] w-[24px]" />
                        </a>
                        <a href="https://www.threads.net/@koomadrone" target="_blank" rel="noopener noreferrer">
                            <img src={threads} alt="Threads" className="h-[24px] w-[24px]" />
                        </a>
                        <a href="https://www.tiktok.com/@koomadrone.ca" target="_blank" rel="noopener noreferrer">
                            <img src={tiktok} alt="TikTok" className="h-[24px] w-[24px]" />
                        </a>
                    </div>
                </div>

                {/* Right Side - Logo and Copyright */}
                <div className="flex w-full flex-col items-start md:w-auto md:items-end">
                    <img src={logo} alt="KOOMA logo" className="mb-2 h-[60px] w-auto" />
                    <p className="text-[12px]">© 2025 KOOMA</p>
                </div>
            </div>
        </footer>
    );
}