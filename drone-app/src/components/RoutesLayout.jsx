
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteLayout({ children }) {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        if (path === '/home' || path === '/courses') {
            document.body.style.backgroundColor = '#fffdf2'; // Your desired FAQ background
        } else {
            document.body.style.backgroundColor = '#3c8cc7'; // Default background
        }
    }, [location.pathname]);

    return children;
}
