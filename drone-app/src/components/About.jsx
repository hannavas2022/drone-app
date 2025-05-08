import dron from '../assets/images/Dron.jpg'
import pilots from '../assets/images/DronPilots.jpg'
import icon1 from '../assets/images/Happy father with daughter playing with quadcopter.jpg'
import icon2 from '../assets/images/20945877.jpg'
import icon3 from '../assets/images/4986250.jpg'
import icon4 from '../assets/images/33757.jpg'
import icon5 from '../assets/images/6088952.jpg'
import drons from '../assets/images/drons.jpg'
import { useNavigate } from 'react-router-dom';
export default function About() {
    const navigate = useNavigate();
    return (
        <section className="about-section rounded-2xl bg-[#fefbf5] px-6 shadow-lg sm:py-2 md:py-10">
            <div className="relative z-20 mx-auto w-full max-w-6xl space-y-16">

                {/* Our Mission */}
                
                <div
                    
                    className="about-section p-6 text-center"
                >
                    <h2>Our Mission:</h2>
                    <h3>Empowering the Sky</h3>

                    <div className="mt-6 flex flex-col items-center justify-between md:flex-col lg:flex-row">
                        {/* Text block */}
                        <p className="pl-[10px] text-center text-[18px] text-black md:text-center md:w-full lg:text-left lg:w-1/2">
                            At KOOMA Drone Academy, we believe everyone has the potential to take flight—literally and figuratively. Whether you are a curious beginner, a thrill-seeking FPV racer, or someone dreaming of mastering drone technology, our mission is to make the sky your playground.
                        </p>

                        {/* Image visible from md+, stacked under text on md */}
                        <img
                            src={dron}
                            alt="Dron image"
                            className="mb-[48px] mr-[48px] mt-[32px] hidden h-[252px] w-[456px] rounded-[32px] object-cover md:block"
                        />
                    </div>
                </div>



                {/* Our Story */}
                <div
                    
                    className="p-6 text-center"
                >
                    <h3>Our Story</h3>

                    {/* Wrapper for text and image layout */}
                    <div className="mt-6 flex flex-col items-center justify-between lg:flex-row">
                        {/* Text on the left */}
                        <p className="pl-[10px] text-center text-[18px] text-black lg:text-left lg:w-1/2">
                            Our journey started with a simple love for drones and the endless possibilities they offer. Founded in Winnipeg, KOOMA Drone Academy was born from the shared passion of our instructors and a vision to create a space where anyone, regardless of age or skill level, can explore the exciting world of FPV flying. Paul, one of our lead instructors, graduated from the Aviation University in Ukraine and has been obsessed with flights for more than 15 years. His expertise and love for the skies bring unparalleled insight to every class. Joining him is Jack, a skilled enthusiast whose hobby is drones and who is passionate about sharing knowledge and fun with our community of students. Together, they form a team dedicated to making drone flying accessible and enjoyable for everyone.
                        </p>

                        {/* Image on the right (visible from md+, stacked on sm, side-by-side on lg+) */}
                        <img
                            src={pilots}
                            alt="Dron pilots image"
                            className="mt-[32px] hidden h-[252px] w-[456px] rounded-[32px] object-cover md:block lg:mt-0 lg:mb-[48px] lg:mr-[48px] lg:ml-[48px]"
                        />
                    </div>

                    {/* Image for small screens */}
                    <img
                        src={pilots}
                        alt="Dron pilots image"
                        className="mx-auto mt-8 h-[252px] w-[456px] rounded-[32px] object-cover md:hidden"
                    />
                </div>


                {/* Why Choose Us */}
                <div className="p-6 text-center">
                    <h3>Why Choose Us?</h3>

                    {/* Layout for Large Screens */}
                    <div className="mx-auto ml-12 mr-12 mt-8 hidden gap-[48px] lg:grid lg:grid-cols-3 lg:place-items-center">
                        {/* Item 1 */}
                        <div className="flex w-[366px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon1}
                                alt="Icon with father and daughter. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                Expert Guidance: Learn from skilled instructors with years of FPV flying and teaching experience
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex w-[366px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon2}
                                alt="Icon with man piloting drone. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                Hands-On Training: Dive into interactive sessions with simulators, real drones, and practical flights.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex w-[366px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon3}
                                alt="Icon construction worker piloting drone. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                Safety First: Master safety protocols and best practices for responsible drone operation.
                            </p>
                        </div>
                        {/* Row for Items 4 and 5 */}
                        <div className="lg:col-span-3 lg:flex lg:justify-center lg:gap-[48px]">
                        {/* Item 4 */}
                        <div className="flex w-[386px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon4}
                                alt="Equipment icon. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                All Equipment Provided: No gear? No problem! We supply everything you need to succeed.
                            </p>
                        </div>

                        {/* Item 5 */}
                        <div className="flex w-[386px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon5}
                                alt="For all ages icon. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                For All Ages: Our courses are tailored for learners starting from 12 years old and up.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Layout for Medium Screens */}
                    <div className="mx-auto mt-8 hidden gap-[38px] md:place-items-center md:grid md:grid-cols-2 lg:hidden">
                        {/* Item 1 */}
                        <div className="flex w-[284px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon1}
                                alt="Icon with father and daughter. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                Expert Guidance: Learn from skilled instructors with years of FPV flying and teaching experience
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex w-[284px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon2}
                                alt="Icon with man piloting drone. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                Hands-On Training: Dive into interactive sessions with simulators, real drones, and practical flights.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex w-[284px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon3}
                                alt="Icon construction worker piloting drone. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                Safety First: Master safety protocols and best practices for responsible drone operation.
                            </p>
                        </div>

                        {/* Item 4 */}
                        <div className="flex w-[284px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon4}
                                alt="Equipment icon. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                All Equipment Provided: No gear? No problem! We supply everything you need to succeed.
                            </p>
                        </div>

                        {/* Item 5 */}
                        <div className="col-span-2 mx-auto flex w-[284px] flex-col items-center justify-center gap-[8px] text-center">
                            <img
                                src={icon5}
                                alt="For all ages icon. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                For All Ages: Our courses are tailored for learners starting from 12 years old and up.
                            </p>
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className="mt-6 text-center sm:hidden">
                        <ul className="list-disc space-y-4 pl-6 text-[18px] text-black">
                            <li>Expert Guidance: Learn from skilled instructors with years of FPV flying and teaching experience</li>
                            <li>Hands-On Training: Dive into interactive sessions with simulators, real drones, and practical flights.</li>
                            <li>Safety First: Master safety protocols and best practices for responsible drone operation.</li>
                            <li>All Equipment Provided: No gear? No problem! We supply everything you need to succeed.</li>
                            <li>For All Ages: Our courses are tailored for learners starting from 12 years old and up.</li>
                        </ul>
                    </div>
                </div>

                {/* Join Our Community */}
                <div  className="p-6 text-center">
                    <h3>Join Our Community</h3>

                    <div className="mt-6 flex flex-col items-center justify-between lg:flex-row">

                        {/* Text and Button Block */}
                        <div className="pl-[10px] text-center lg:text-left lg:w-1/2">
                            <p className="text-[18px] text-black">
                                At KOOMA Drone Academy, it&apos;s not just about learning to fly - it&apos;s about joining a community of explorers who share a passion for drones and the limitless adventures they bring.
                                Ready to Take Off? Join us today and start your journey into the exciting world of FPV drone flying. Let&apos;s make the sky yours!
                            </p>
                            <div className="mt-6 flex justify-center lg:justify-center">
                                <button
                                    onClick={() => navigate('/courses#courses-header')}
                                    className="h-[56px] w-full max-w-[277px] rounded-[32px] bg-[#005BBB] px-6 py-3 text-[20px] font-semibold text-[#FFD500] transition-opacity duration-300 ease-out hover:opacity-80"
                                >
                                    Join us
                                </button>
                            </div>
                        </div>

                        {/* Image Block */}
                        <img
                            src={drons}
                            alt="Drons image"
                            className="mb-[48px] mr-[48px] mt-[32px] hidden h-[252px] w-[456px] rounded-[32px] object-cover md:block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
