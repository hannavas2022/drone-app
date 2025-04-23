import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import PropTypes from 'prop-types';

const videoData = {
    Sport: [
        'https://www.youtube.com/embed/qvXS7fwcnI0?si=w7VJZ_fIU0UaDiUC',
        'https://www.youtube.com/embed/qvXS7fwcnI0?si=w7VJZ_fIU0UaDiUC',
        'https://www.youtube.com/embed/qvXS7fwcnI0?si=w7VJZ_fIU0UaDiUC',
        'https://www.youtube.com/embed/qvXS7fwcnI0?si=w7VJZ_fIU0UaDiUC',
        'https://www.youtube.com/embed/qvXS7fwcnI0?si=w7VJZ_fIU0UaDiUC',
        'https://www.youtube.com/embed/qvXS7fwcnI0?si=w7VJZ_fIU0UaDiUC'
    ],
    
};

const VideoCarousel = ({ title, videos }) => {
    const containerRef = useRef(null);
    const [visibleVideo, setVisibleVideo] = useState(null); // Track which video is being played

    const scroll = (direction) => {
        if (containerRef.current) {
            const { scrollLeft, clientWidth } = containerRef.current;
            const scrollAmount = clientWidth;
            containerRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">{title}</h2>
            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <div
                    ref={containerRef}
                    className="no-scrollbar flex space-x-4 overflow-x-auto scroll-smooth px-10" // ✅ updated class to hide scrollbar
                >
                    {videos.map((url, index) => (
                        <div key={index} className="relative min-w-[300px] max-w-[300px] overflow-hidden rounded-xl bg-white shadow-md">
                            <div className="relative aspect-video bg-black">
                                {/* If this video is the one being played, show the iframe */}
                                {visibleVideo === index ? (
                                    <iframe
                                        className="h-full w-full"
                                        src={url}
                                        title={`YouTube video ${index}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <button
                                        className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-black bg-opacity-50 text-white"
                                        onClick={() => setVisibleVideo(index)}
                                    >
                                        <Play className="h-8 w-8" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

VideoCarousel.propTypes = {
    title: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default function YouTubeSlider() {
    return (
        <div className="min-h-screen p-8">
            {Object.entries(videoData).map(([title, videos]) => (
                <VideoCarousel key={title} title={title} videos={videos} />
            ))}
        </div>
    );
}