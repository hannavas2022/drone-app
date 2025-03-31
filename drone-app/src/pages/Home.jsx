import { Link } from "react-router-dom";
import heroImage from "./photo/slider1.jpg"; // Replace with correct path

import chooseImage1 from "./photo/slider2.jpg"; // Replace with correct path
import chooseImage2 from "./photo/slider3.jpg"; // Replace with correct path


export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section
                className="relative flex h-[500px] items-center justify-center bg-cover bg-center text-center text-white"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 max-w-2xl px-6">
                    <h1 className="text-4xl font-bold">Ready to go from a novice to a professional Drone Pilot?</h1>
                    <p className="mt-4 text-lg">Join our expert-led courses and take your skills to new heights.</p>
                    <Link to="/courses" className="mt-6 inline-block rounded-lg bg-yellow-500 px-6 py-3 font-bold text-black">
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="bg-white px-6 py-16">
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-2xl border-4 border-blue-300 bg-white shadow-lg md:flex-row">
                    <div className="text-center md:w-1/2 md:text-left">
                        <h2 className="text-3xl font-bold text-blue-700">Our Mission</h2>
                        <p className="mt-4 text-gray-600">
                            At KOOMA Drone Academy, we are dedicated to providing world-class training for aspiring drone pilots. Our
                            goal is to empower individuals with the knowledge and skills to master drone technology.
                        </p>
                    </div>
                    <img src={chooseImage1} alt="Mission" className="rounded-lg shadow-lg md:w-1/2" />
                </div>
            </section>

            {/* Our Story Section */}
            <section className="bg-gray-100 px-6 py-16">
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row-reverse">
                    <div className="text-center md:w-1/2 md:text-left">
                        <h2 className="text-3xl font-bold text-blue-700">Our Story</h2>
                        <p className="mt-4 text-gray-600">
                            Founded by a team of drone enthusiasts and professionals, KOOMA Drone Academy started with the mission of
                            bridging the gap between theory and hands-on flying experience.
                        </p>
                    </div>
                    <img src={chooseImage1} alt="Our Story" className="rounded-lg shadow-lg md:w-1/2" />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white px-6 py-16">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl font-bold text-blue-700">Why Choose Us?</h2>
                    <div className="mt-8 flex flex-col gap-8 md:flex-row">
                        <div className="md:w-1/2">
                            <img src={chooseImage1} alt="Expert Training" className="rounded-lg shadow-lg" />
                            <p className="mt-4 text-gray-600">Professional training with experienced instructors.</p>
                        </div>
                        <div className="md:w-1/2">
                            <img src={chooseImage2} alt="Hands-on Experience" className="rounded-lg shadow-lg" />
                            <p className="mt-4 text-gray-600">Get hands-on flying experience with real-world applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Our Community Section */}
            <section className="bg-gray-100 px-6 py-16">
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row">
                    <div className="text-center md:w-1/2 md:text-left">
                        <h2 className="text-3xl font-bold text-blue-700">Join Our Community</h2>
                        <p className="mt-4 text-gray-600">
                            Become a part of a thriving community of drone pilots, network with professionals, and stay updated on the
                            latest in drone technology.
                        </p>
                        <Link to="/community" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-bold text-white">
                            Join Now
                        </Link>
                    </div>
                    <img src={chooseImage1} alt="Community" className="rounded-lg shadow-lg md:w-1/2" />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-700 py-8 text-white">
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-between md:flex-row">
                    <div>
                        <h2 className="text-xl font-bold">KOOMA Drone Academy</h2>
                        <p className="mt-2 text-sm">© 2024 KOOMA. All Rights Reserved.</p>
                    </div>
                    <div className="mt-4 flex gap-4 md:mt-0">
                        <Link to="/courses" className="hover:underline">Courses</Link>
                        <Link to="/faq" className="hover:underline">FAQ</Link>
                        <Link to="/techsupport" className="hover:underline">Tech Support</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}