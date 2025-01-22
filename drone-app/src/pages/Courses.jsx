import logo from '../pages/logo/kooma.png';
export default function Courses() {
    return (
        <div className="courses-container">
            <div className="courses-header">
                <h2 className="mb-2 text-center text-3xl font-bold">Our Courses</h2>
            </div>

            {/* Row 1 - Course 1 & Course 2 */}
            <div className="course-row">
                {/* Course 1 */}
                <div className="course-column">
                    <img src={logo} alt="logo" className="course-logo" />
                    <h2 className="text-xl font-bold tracking-wider">Introduction to FPV Drone</h2>
                    <div className="mt-4 text-md">
                        <p>This exciting FPV Drone course is perfect for kids who are eager to experience the thrill of flight and explore the world from above!</p>
                        <p className="mt-4"><strong>Included in this package:</strong></p>
                        <ul className="pl-6 list-disc">
                            <li>Theoretical part</li>
                            <li>Basic skill by flight simulator technology</li>
                            <li>Basic practical flights</li>
                            <li>Safety protocols</li>
                            <li>All equipment is provided!</li>
                        </ul>
                        <p></p>
                        <p className="mt-4"><strong>LEVEL: </strong>Absolutly begginer</p>
                        <p className="mt-4"><strong>Duration: </strong>6 lessons</p>
                        <div className="register-button">
                            <a href="https://retlife.ca/product/new-introduction-to-fpv-first-person-view-drone-technology-level-1-youth-ages-12-16-mondays-and-thursdays-february-10-march-3-2025-no-class-on-february-17-ecole-sun-valley-school/" target="_blank" rel="noopener noreferrer">
                                <button>Register Now</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Course 2 */}
                <div className="course-column">
                    <img src={logo} alt="logo" className="course-logo" />
                    <h2 className="text-2xl font-bold tracking-wider">Introduction to FPV Drone</h2>
                    <div className="mt-4 text-md">
                        <p>This exciting FPV Drone course is perfect for adults who are eager to experience the thrill of flight and explore the world from above!</p>
                        <p className="mt-4"><strong>Included in this package:</strong></p>
                        <ul className="pl-6 list-disc">
                            <li>Theoretical part</li>
                            <li>Basic skill by flight simulator technology</li>
                            <li>Basic practical flights</li>
                            <li>Safety protocols</li>
                            <li>All equipment is provided!</li>
                        </ul>
                        <p></p>
                        <p className="mt-4"><strong>LEVEL: </strong>Absolutly begginer</p>
                        <p className="mt-4"><strong>Duration: </strong>6 lessons</p>
                        <div className="coming-button">
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <button disabled>Coming soon</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Course 3 */}
                <div className="course-column">
                    <img src={logo} alt="logo" className="course-logo" />
                    <h2 className="text-2xl font-bold tracking-wider">Advanced FPV Drone Skills</h2>
                    <div className="mt-4 text-md">
                        <p>This course builds on the basics to help you master advanced flight techniques and explore more exciting drone maneuvers</p>
                        <p className="mt-4"><strong>Included in this package:</strong></p>
                        <ul className="pl-6 list-disc">
                            <li>Advanced flight techniques</li>
                            <li>Flight path planning and execution</li>
                            <li>Handling complex drone maneuvers</li>
                            <li>Advanced safety protocols</li>
                            <li>All equipment is provided!</li>
                        </ul>
                        <p></p>
                        <p className="mt-4"><strong>LEVEL: </strong>Beginner with basic experience</p>
                        <p className="mt-4"><strong>Duration: </strong>6 lessons</p>
                        <div className="coming-button">
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <button disabled>Coming soon</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Course 4 */}
                <div className="course-column">
                    <img src={logo} alt="logo" className="course-logo" />
                    <h2 className="text-2xl font-bold tracking-wider">Drone Mastery</h2>
                    <div className="mt-4 text-md">
                        <p>This course is designed for those ready to master complex maneuvers and refine their flying skills with precision and confidence.</p>
                        <p className="mt-4"><strong>Included in this package:</strong></p>
                        <ul className="pl-6 list-disc">
                            <li>Mastering high-speed flights</li>
                            <li>Exploring acrobatic drone maneuvers</li>
                            <li>Flight under challenging conditions</li>
                            <li>Drone racing basics</li>
                            <li>All equipment is provided!</li>
                        </ul>
                        <p></p>
                        <p className="mt-4"><strong>LEVEL: </strong>Intermediate with advanced skills</p>
                        <p className="mt-4"><strong>Duration: </strong>6 lessons</p>
                        <div className="coming-button">
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <button disabled>Coming soon</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
}