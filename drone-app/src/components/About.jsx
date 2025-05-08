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
                    <h3>Unlock the Sky for Everyone</h3>

                    <div className="mt-6 flex flex-col items-center justify-between md:flex-col lg:flex-row">
                        {/* Text block */}
                        <p className="pl-[10px] text-center text-[18px] text-black md:text-center md:w-full lg:text-left lg:w-1/2">
                            At KOOMA Drone, we believe everyone has the potential to take flight—literally and figuratively. Whether you’re a curious beginner, an FPV thrill-seeker, or someone dreaming of mastering drone technology, our mission is to make the sky your playground.
                            <br />
                            <br />And now, through <strong>KOOMA Drone Videography</strong>, we’re turning that passion into cinematic storytelling—capturing <strong>sports events, real estate, roof inspections</strong>, and more from stunning aerial perspectives.
                            <br />
                            <br />We&apos;re also proud to introduce the launch of the <strong>NEW DRONE SPORTS - Drone Base Battle</strong>, a thrilling new way to engage with drone technology through competitive play. It&apos;s an exciting mix of strategy, skill, and drone control that makes learning to fly both fun and action-packed—ideal for schools, camps, and community programs.
                            
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
                            Our journey started with a simple love for drones and the endless possibilities they offer. Founded in Winnipeg, KOOMA Drone Academy was born from the shared passion of our instructors and a vision to create a space where anyone—regardless of age or skill level—can explore the world of FPV flying and professional drone services.
                            <br />
                            <br />Paul, one of our lead instructors, graduated from the Aviation University in Ukraine and has been obsessed with flight for over 15 years. His deep knowledge and passion shape every class and every flight mission. Jack, a skilled drone enthusiast, brings a fresh creative eye to both teaching and aerial videography, helping transform drone footage into stunning visual content.
                            <br />
                            <br />Together, they now lead not just the academy but also our <strong>videography division</strong>, providing <strong>high-quality drone footage for events, businesses, inspections, and marketing.</strong>
                            
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
                    <div className="mx-auto ml-12 mr-12 mt-8 hidden gap-[48px] lg:grid lg:grid-cols-3 lg:items-start lg:justify-items-center">
                        {/* Item 1 */}
                        <div className="flex w-[346px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon1}
                                alt="Icon with father and daughter. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                <strong>Expert Guidance:</strong> Learn from skilled instructors with years of FPV and aerial shooting experience
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex w-[346px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon2}
                                alt="Icon with man piloting drone. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                <strong>Hands-On Training:</strong> Dive into interactive sessions with simulators, drones, and real-world scenarios
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex w-[346px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon3}
                                alt="Icon construction worker piloting drone. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                <strong>Safety First:</strong> We follow Transport Canada guidelines to ensure responsible flying

                            </p>
                        </div>
                        {/* Row for Items 4 and 5 */}
                        <div className="lg:col-span-3 lg:flex lg:justify-center lg:gap-[48px]">
                        {/* Item 4 */}
                        <div className="flex w-[346px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon4}
                                alt="Equipment icon. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                    <strong>All Equipment Provided:</strong> No gear? No problem! We supply everything you need to succeed.
                            </p>
                        </div>

                        {/* Item 5 */}
                        <div className="flex w-[346px] flex-col items-center gap-[8px] text-center">
                            <img
                                src={icon5}
                                alt="For all ages icon. Designed by Freepik"
                                className="h-[224px] w-auto rounded-xl object-cover md:h-[180px]"
                            />
                            <p className="text-left text-[18px] text-black">
                                    <strong>For All Ages:</strong> Our courses are tailored for learners starting from 10 years old and up
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
                                <strong>Expert Guidance:</strong> Learn from skilled instructors with years of FPV and aerial shooting experience
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
                                <strong>Hands-On Training:</strong> Dive into interactive sessions with simulators, drones, and real-world scenarios
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
                                <strong>Safety First:</strong> We follow Transport Canada guidelines to ensure responsible flying
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
                                <strong>All Equipment Provided:</strong> No gear? No problem! We supply everything you need to succeed.
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
                                <strong>For All Ages:</strong> Our courses are tailored for learners starting from 10 years old and up
                            </p>
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className="mt-6 text-center sm:hidden">
                        <ul className="list-disc space-y-4 pl-6 text-[18px] text-black">
                            <li><strong>Expert Guidance:</strong> Learn from skilled instructors with years of FPV and aerial shooting experience</li>
                            <li><strong>Hands-On Training:</strong> Dive into interactive sessions with simulators, drones, and real-world scenarios</li>
                            <li><strong>Safety First:</strong> We follow Transport Canada guidelines to ensure responsible flying</li>
                            <li><strong>All Equipment Provided:</strong> No gear? No problem! We supply everything you need to succeed.</li>
                            <li> <strong>For All Ages:</strong> Our courses are tailored for learners starting from 10 years old and up</li>
                        </ul>
                    </div>
                </div>

                {/* Join Our Community */}
                <div  className="p-6 text-center">
                    <h3>Join Our Pilot Courses</h3>

                    <div className="mt-6 flex flex-col items-center justify-between lg:flex-row">

                        {/* Text and Button Block */}
                        <div className="pl-[10px] text-center lg:text-left lg:w-1/2">
                            <p className="text-[18px] text-black">
                                KOOMA Drone, it&apos;s not just about learning to fly - it&apos;s about joining a community of explorers who share a passion for drones and the limitless adventures they bring. <strong>Ready to Take Off? </strong>Join us today and start your journey into the exciting world of Drone flying. Let&apos;s make the sky yours!
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
