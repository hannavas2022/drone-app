import dron from '../assets/images/Dron.jpg'
export default function About() {
    return (
        <section className="about-section rounded-2xl bg-[#fefbf5] px-6 py-10 shadow-lg md:py-20">
            <div className="relative z-20 mx-auto w-full max-w-6xl space-y-16">

                {/* Our Mission */}
                <div
                    style={{ border: "1px solid #005BBB", borderRadius: "48px" }}
                    className="p-6 text-center"
                >
                    <h2>Our Mission:</h2>
                    <h3>Empowering the Sky</h3>

                    <div className="mt-6 flex items-center justify-between">
                        {/* Left side: Paragraph with 10px indent */}
                        <p className="w-1/2 pl-[48px] text-left text-[18px] text-black">
                            At KOOMA Drone Academy, we believe everyone has the potential to take flight—literally and figuratively. Whether you are a curious beginner, a thrill-seeking FPV racer, or someone dreaming of mastering drone technology, our mission is to make the sky your playground.
                        </p>

                        {/* Right side: Image */}
                        <img
                            src={dron}
                            alt="Dron image"
                            className="mb-[48px] mr-[48px] mt-[32px] h-[252px] w-[456px] rounded-[32px] object-cover"
                        />
                    </div>
                </div>

                {/* Our Story */}
                <div style={{ border: "1px solid #005BBB", borderRadius: "48px" }} className="p-6 text-center">
                    <h3>Our Story</h3>
                    <p className="text-black-700 mt-4 text-lg">
                        Our journey started with a simple love for drones and the endless possibilities they offer. Founded in Winnipeg, KOOMA Drone Academy was born from the shared passion of our instructors and a vision to create a space where anyone, regardless of age or skill level, can explore the exciting world of FPV flying. Paul, one of our lead instructors, graduated from the Aviation University in Ukraine and has been obsessed with flights for more than 15 years. His expertise and love for the skies bring unparalleled insight to every class. Joining him is Jack, a skilled enthusiast whose hobby is drones and who is passionate about sharing knowledge and fun with our community of students. Together, they form a team dedicated to making drone flying accessible and enjoyable for everyone.
                    </p>
                </div>

                {/* Why Choose Us */}
                <div style={{ border: "1px solid #005BBB", borderRadius: "48px" }} className="p-6 text-center">
                    <h3>Why Choose Us?</h3>
                    <ul className="text-black-700 mx-auto mt-4 max-w-2xl list-inside list-disc text-left text-lg">
                        <li>Expert Guidance: Learn from skilled instructors with years of FPV flying and teaching experience</li>
                        <li>Hands-On Training: Dive into interactive sessions with simulators, real drones, and practical flights.</li>
                        <li>Safety First: Master safety protocols and best practices for responsible drone operation.</li>
                        <li>All Equipment Provided: No gear? No problem! We supply everything you need to succeed.</li>
                        <li>For All Ages: Our courses are tailored for learners starting from 12 years old and up.</li>
                    </ul>
                </div>

                {/* Join Our Community */}
                <div style={{ border: "1px solid #005BBB", borderRadius: "48px" }} className="p-6 text-center">
                    <h3>Join Our Community</h3>
                    <p className="text-black-700 mt-4 text-lg">
                        At KOOMA Drone Academy, it&apos;s not just about learning to fly - it&apos;s about joining a community of explorers who share a passion for drones and the limitless adventures they bring.
                        Ready to Take Off? Join us today and start your journey into the exciting world of FPV drone flying. Let&apos;s make the sky yours!
                    </p>
                </div>

            </div>
        </section>
    );
}
