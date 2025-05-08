import { useState, useEffect} from 'react';
import SQ from '../components/FAQ_SQ.jsx';
import { data } from '../components/FAQ_data.jsx';

export default function FAQ() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getHorizontalPadding = () => {
        if (windowWidth >= 1024) return '200px'; // Desktop
        if (windowWidth >= 768) return '80px';   // Tablet
        return '20px';                           // Mobile
    };

    return (
        <div
            style={{
                backgroundColor: '3c8cc7',
                padding: `40px ${getHorizontalPadding()}`,
                
            }}
        >
            <h2
                style={{
                    fontSize: '56px',
                    color: 'white',
                    fontFamily: 'Oswald',
                    textAlign: 'center',
                    marginBottom: '32px',
                    fontWeight: '600'
                }}
            >
                FAQ
            </h2>
            {data.map((question) => (
                <SQ key={question.id} {...question} />
            ))}
        </div>
    );
}
