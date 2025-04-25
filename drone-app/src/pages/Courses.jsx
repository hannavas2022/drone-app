import logo from '../assets/logo/kooma.png';

export default function Courses() {
    return (
        <div className="courses-container">
            <div className="courses-header">
                <h2 className="mb-2 text-center text-3xl font-bold">Our Courses</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Course 1 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={logo} alt="logo" className="card-logo" />
                            <h3 className="p-2 text-center text-xl font-semibold">FPV Drone Pilot Level 1 (Youth)</h3>
                            <p><strong>LEVEL:</strong> Beginner</p>
                            <p><strong>Duration:</strong> 5 lessons (10 hours)</p>
                            <p><strong>Dates:</strong> May 20 – June 24, 2025</p>
                            <a href="https://retlife.ca/product/introduction-to-fpv-first-person-view-drone-technology-for-youth-level-1-youth-ages-12-16-tuesdays-may-20-june-24-2025-lord-wolseley-school/" target="_blank" rel="noopener noreferrer">
                                <button className="register-button">Register</button>
                            </a>
                        </div>
                        <div className="flip-card-back">
                            <img src={logo} alt="logo" className="card-logo mb-2" />
                            <p>This exciting FPV Drone course is perfect for youth who are eager to experience the thrill of flight and explore the world from above!</p>
                            <ul className="mt-2 list-disc pl-6">
                                <li>Theoretical part</li>
                                <li>Basic skills in drone flight simulator</li>
                                <li>Basic practical skills on drones indoor</li>
                                <li>Safety protocols</li>
                                <li>All equipment is provided</li>
                            </ul>
                            <a href="https://retlife.ca/product/introduction-to-fpv-first-person-view-drone-technology-for-youth-level-1-youth-ages-12-16-tuesdays-may-20-june-24-2025-lord-wolseley-school/" target="_blank" rel="noopener noreferrer">
                                <button className="register-button">Register</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Course 2 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={logo} alt="logo" className="card-logo" />
                            <h3 className="p-2 text-center text-xl font-semibold">FPV Drone Pilot Level 1 (Adults)</h3>
                            <p><strong>LEVEL:</strong> Beginner</p>
                            <p><strong>Duration:</strong> 5 lessons (10 hours)</p>
                            <p><strong>Dates:</strong> May 22 – June 26, 2025</p>
                            <a href="https://retlife.ca/product/introduction-to-fpv-first-person-view-drone-technology-for-youth-level-1-adults-thursdays-may-22-june-26-2025-lord-wolseley-school/" target="_blank" rel="noopener noreferrer">
                                <button className="register-button">Register</button>
                            </a>
                        </div>
                        <div className="flip-card-back">
                            <img src={logo} alt="logo" className="card-logo mb-2" />
                            <p>This exciting FPV Drone course is perfect for adults who are eager to experience the thrill of flight and explore the world from above!</p>
                            <ul className="mt-2 list-disc pl-6">
                                <li>Theoretical part</li>
                                <li>Basic skills in drone flight simulator</li>
                                <li>Basic practical skills on drones indoor</li>
                                <li>Safety protocols</li>
                                <li>All equipment is provided</li>
                            </ul>
                            <a href="https://retlife.ca/product/introduction-to-fpv-first-person-view-drone-technology-for-youth-level-1-adults-thursdays-may-22-june-26-2025-lord-wolseley-school/" target="_blank" rel="noopener noreferrer">
                                <button className="register-button">Register</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Course 3 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={logo} alt="logo" className="card-logo" />
                            <h3 className="p-2 text-center text-xl font-semibold">FPV Drone Pilot Summer Camp</h3>
                            <p><strong>LEVEL:</strong> Beginner</p>
                            <p><strong>Duration:</strong> 6 lessons (9 hours)</p>
                            <p><strong>Dates:</strong> will be announced</p>
                            <button className="register-button" disabled>Summer 2025</button>
                        </div>
                        <div className="flip-card-back">
                            <img src={logo} alt="logo" className="card-logo mb-2" />
                            <p>This exciting FPV Drone course is perfect for adults who are eager to experience the thrill of flight and explore the world from above!</p>
                            <ul className="mt-2 list-disc pl-6">
                                <li>Theoretical part</li>
                                <li>Basic skills in drone flight simulator</li>
                                <li>Basic practical skills on drones indoor</li>
                                <li>Safety protocols</li>
                                <li>All equipment is provided</li>
                            </ul>
                            <button className="register-button" disabled>Summer 2025</button>
                        </div>
                    </div>
                </div>

                {/* Course 4 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={logo} alt="logo" className="card-logo" />
                            <h3 className="p-2 text-center text-xl font-semibold">Advanced FPV Drone Skills (combined)</h3>
                            <p><strong>LEVEL:</strong> Beginner with basic experience</p>
                            <p><strong>Duration:</strong> 6 lessons</p>
                            <p><strong>Dates:</strong> will be announced</p>
                            <button className="register-button" disabled>Autumn 2025</button>
                        </div>
                        <div className="flip-card-back">
                            <img src={logo} alt="logo" className="card-logo mb-2" />
                            <p>This course builds on the basics to help you master advanced flight techniques and explore more exciting drone maneuvers.</p>
                            <ul className="mt-2 list-disc pl-6">
                                <li>Advanced flight techniques</li>
                                <li>Flight path planning</li>
                                <li>Complex maneuvers</li>
                                <li>Advanced safety protocols</li>
                                <li>All equipment is provided</li>
                            </ul>
                            <button className="register-button" disabled>Autumn 2025</button>
                        </div>
                    </div>
                </div>

                {/* Добавь оставшиеся 4 курса по аналогии сюда, если нужно */}
            </div>
        </div>
    );
}

{/*
                  Course 5
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={logo} alt="logo" className="card-logo" />
                                <h3 className="p-2 text-center text-xl font-semibold">FPV Drone Mastery (combined)</h3>
                                <p><strong>LEVEL:</strong> Intermediate with advanced skills</p>
                                <p><strong>Duration:</strong> 6 lessons</p>
                                <p><strong>Dates:</strong> will be announced</p>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className="register-button" disabled>Autumn 2025</button>
                                </a>
                            </div>
                            <div className="flip-card-back">
                                <img src={logo} alt="logo" className="card-logo mb-2" />
                                <p>This course is designed for those ready to master complex maneuvers and refine their flying skills with precision and confidence.</p>
                                <ul className="mt-2 list-disc pl-6">
                                    <li>Mastering high-speed flights</li>
                                    <li>Exploring acrobatic drone maneuvers</li>
                                    <li>Flight under challenging conditions</li>
                                    <li>Drone racing basics</li>
                                    <li>All equipment is provided: goggles, controller, drone, laptop, simulator</li>
                                </ul>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className="register-button" disabled>Autumn 2025</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    Course 6
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={logo} alt="logo" className="card-logo" />
                                <h3 className="p-2 text-center text-xl font-semibold">FPV Drone Pilot Level 1 (Youth)</h3>
                                <p><strong>LEVEL:</strong> Beginner</p>
                                <p><strong>Duration:</strong> 5 lessons (10 hours)</p>
                                <p><strong>Dates:</strong> May 20 – June 24, 2025</p>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className="register-button" disabled>Autumn 2025</button>
                                </a>
                            </div>
                            <div className="flip-card-back">
                                <img src={logo} alt="logo" className="card-logo mb-2" />
                                <p>This exciting FPV Drone course is perfect for youth who are eager to experience the thrill of flight and explore the world from above!</p>
                                <ul className="mt-2 list-disc pl-6">
                                    <li>Theoretical part</li>
                                    <li>Basic skills in drone flight simulator</li>
                                    <li>Basic practical skills on drones indoor</li>
                                    <li>Safety protocols</li>
                                    <li>All equipment is provided: goggles, controller, drone, laptop, simulator</li>
                                </ul>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className="register-button" disabled>Autumn 2025</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    Course 7 
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={logo} alt="logo" className="card-logo" />
                                <h3 className="p-2 text-center text-xl font-semibold">FPV Drone Pilot Level 1 (Adults)</h3>
                                <p><strong>LEVEL:</strong> Beginner</p>
                                <p><strong>Duration:</strong> 5 lessons (10 hours)</p>
                                <p><strong>Dates:</strong> May 22 – June 26, 2025</p>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className="register-button" disabled>Autumn 2025</button>
                                </a>
                            </div>
                            <div className="flip-card-back">
                                <img src={logo} alt="logo" className="card-logo mb-2" />
                                <p>This exciting FPV Drone course is perfect for adults who are eager to experience the thrill of flight and explore the world from above!</p>
                                <ul className="mt-2 list-disc pl-6">
                                    <li>Theoretical part</li>
                                    <li>Basic skills in drone flight simulator</li>
                                    <li>Basic practical skills on drones indoor</li>
                                    <li>Safety protocols</li>
                                    <li>All equipment is provided: goggles, controller, drone, laptop, simulator</li>
                                </ul>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className="register-button" disabled>Autumn 2025</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    Course 8 
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={logo} alt="logo" className="card-logo" />
                                <h3 className="p-2 text-center text-xl font-semibold">FPV Drone Pilot Level 1 (Youth)</h3>
                                <p><strong>LEVEL:</strong> Beginner</p>
                                <p><strong>Duration:</strong> 5 lessons (10 hours)</p>
                                <p><strong>Dates:</strong> May 20 – June 24, 2025</p>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className="register-button" disabled>Autumn 2025</button>
                                </a>
                            </div>
                            <div className="flip-card-back">
                                <img src={logo} alt="logo" className="card-logo mb-2" />
                                <p>This exciting FPV Drone course is perfect for youth who are eager to experience the thrill of flight and explore the world from above!</p>
                                <ul className="mt-2 list-disc pl-6">
                                    <li>Theoretical part</li>
                                    <li>Basic skills in drone flight simulator</li>
                                    <li>Basic practical skills on drones indoor</li>
                                    <li>Safety protocols</li>
                                    <li>All equipment is provided: goggles, controller, drone, laptop, simulator</li>
                                </ul>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className="register-button" disabled>Autumn 2025</button>
                                </a>
               
*/}