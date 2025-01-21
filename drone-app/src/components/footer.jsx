import logo from '../pages/logo/kooma.png';
import facebook from '../pages/media/facebook.png';
import instagram from '../pages/media/instagram.png';
import youtube from '../pages/media/youtube.png';
import email from '../pages/media/email.png';
import whatsapp from '../pages/media/whatsapp.png';
import threads from '../pages/media/threads.png';
import tiktok from '../pages/media/tiktok.png';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="logo" className="footer-logo-img" />
                <div className="footer-copyright">
                    <p className="academy-name">KOOMA Pilot Drone Academy</p>
                    <p className="copyright">© 2025 KOOMA</p>
                </div>
            </div>
            <div className="footer-content">
                <p>Join us on social media and stay tuned:</p>
                <div className="social-links">
                    <a href="https://www.facebook.com/profile.php?id=61569971140339" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" style={{ maxHeight: "30px", width: "100%"}} />
                    </a>
                    <a href="https://www.instagram.com/koomadrone/?utm_source=qr&igsh=MWMzb2dkYnE5MGtwMQ%3D%3D#" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" style={{ maxHeight: "30px", width: "100%" }} />
                    </a>
                    <a href="https://www.youtube.com/@Koomadrone" target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="YouTube" style={{ maxHeight: "30px", width: "100%" }} />
                    </a>
                    <a href="mailto:your-email@example.com">
                        <img src={email} alt="Email" style={{ maxHeight: "30px", width: "100%" }} />
                    </a>
                    <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="WhatsApp" style={{ maxHeight: "30px", width: "100%" }} />
                    </a>
                    <a href="https://www.threads.net/@koomadrone" target="_blank" rel="noopener noreferrer">
                        <img src={threads} alt="Threads" style={{ maxHeight: "30px", width: "100%" }} />
                    </a>
                    <a href="https://www.tiktok.com/@koomadrone.ca" target="_blank" rel="noopener noreferrer">
                        <img src={tiktok} alt="TikTok" style={{ maxHeight: "30px", width: "100%" }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
