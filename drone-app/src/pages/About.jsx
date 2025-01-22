export default function About() {
    return (
        <div className="p-6 mx-auto max-w-screen-xl rounded-xl" style={{ backgroundColor: '#93DEFF' }}>
            <div className="text-center">
                <h2 className="text-3xl font-semibold">Our Mission: Empowering the Sky</h2>
                <p className="mt-4 text-black-700 text-lg">At KOOMA Drone Academy, we believe everyone has the potential to take flight-literally and figuratively. Whether you are a curious beginner, a thrill-seeking FPV racer, or someone dreaming of mastering drone technology, our mission is to make the sky your playground.</p>
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-3xl font-semibold">Our Story</h2>
               <div className="gap-8 mt-4 text-black-700 flex hidden justify-center">
                    <div><img src="./photo/aboutYevhen.png" alt="Yevhen" className="w-48 h-48 rounded-full object-cover" /></div>
                    <div><img src="./photo/aboutPavlo.png" alt="Pavlo" className="w-48 h-48 rounded-full object-cover" /></div>
               </div>
                <p className="mt-4 text-black-700 text-lg">Our journey started with a simple love for drones and the endless possibilities they offer. Founded in Winnipeg, KOOMA Drone Academy was born from the shared passion of our instructors and a vision to create a space where anyone, regardless of age or skill level, can explore the exciting world of FPV flying. Paul, one of our lead instructors, graduated from the Aviation University in Ukraine and has been obsessed with flights for more than 15 years. His expertise and love for the skies bring unparalleled insight to every class. Joining him is Jack, a skilled enthusiast whose hobby is drones and who is passionate about sharing knowledge and fun with our community of students. Together, they form a team dedicated to making drone flying accessible and enjoyable for everyone.</p>
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
                <ul className="mt-4 text-black-700 list-inside list-disc text-lg">
                    <li>Expert Guidance: Learn from skilled instructors with years of FPV flying and teaching experience</li>
                    <li>Hands-On Training: Dive into interactive sessions with simulators, real drones, and practical flights.</li>
                    <li>Safety First: Master safety protocols and best practices for responsible drone operation.</li>
                    <li>All Equipment Provided: No gear? No problem! We supply everything you need to succeed.</li>
                    <li>For All Ages: Our courses are tailored for learners starting from 12 years old and up.</li>
                </ul>
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-3xl font-semibold">Join Our Community</h2>
                <p className="mt-4 text-black-700 text-lg">At KOOMA Drone Academy, it's not just about learning to fly - it's about joining a community of explorers who share a passion for drones and the limitless adventures they bring.            Ready to Take Off? Join us today and start your journey into the exciting world of FPV drone flying. Let's make the sky yours!</p>
            </div>
        </div>
    );
}