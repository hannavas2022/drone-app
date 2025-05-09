import { useRef, useState } from 'react';
import { ArrowBigLeft, ArrowBigRight, Play } from 'lucide-react';
import PropTypes from 'prop-types';
import BookForm from '../components/BookForm';

const videoData = {
    Sport: [
        'https://www.youtube.com/embed/Zt1rygi5zgM?si=BP-nxy7eIz0AS-Co',
    ],
    RealEstate: [
        'https://www.youtube.com/embed/aRe-gkMIQjY?si=W-3cI9PfXkI1egKy',
    ],
};

// Extract video ID from YouTube embed URL
const extractYouTubeId = (url) => {
    const match = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
};

const VideoCarousel = ({ title, videos }) => {
    const containerRef = useRef(null);
    const [visibleVideoIndex, setVisibleVideoIndex] = useState(null);

    const scroll = (direction) => {
        if (containerRef.current) {
            const { scrollLeft, clientWidth } = containerRef.current;
            const scrollAmount = clientWidth;
            containerRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="mb-12">
            <h2 className="font-oswald mb-6 mt-6 text-center text-4xl font-semibold text-white md:text-4xl lg:text-[56px]">
                {title}
            </h2>

            <div className="relative">
                <div className="flex flex-col items-center md:flex-row md:gap-x-6 md:px-4">
                    {/* Scroll Left */}
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:inline-block bg-[#005BBB] p-2 rounded-lg shadow hover:bg-[#FFD500] text-white hover:text-[#005BBB]"
                    >
                        <ArrowBigLeft className="h-6 w-6" />
                    </button>

                    {/* Video List */}
                    <div
                        ref={containerRef}
                        className="no-scrollbar flex w-full flex-col gap-4 overflow-x-auto scroll-smooth px-4 md:flex-row md:space-x-4 md:gap-0"
                    >
                        {videos.map((url, index) => {
                            const videoId = extractYouTubeId(url);
                            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                            return (
                                <div
                                    key={index}
                                    className="relative w-full overflow-hidden rounded-xl bg-[#005BBB] shadow-md md:min-w-[280px] md:max-w-[300px]"
                                >
                                    <div className="relative aspect-video bg-black">
                                        {visibleVideoIndex === index ? (
                                            <iframe
                                                className="h-full w-full"
                                                src={`${url}&autoplay=1`}
                                                title={`YouTube video ${index}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        ) : (
                                            <>
                                                <img
                                                    src={thumbnailUrl}
                                                    alt={`Thumbnail ${index}`}
                                                    className="h-full w-full object-cover"
                                                />
                                                <button
                                                    className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#005BBB] bg-opacity-50 text-white hover:bg-[#FFD500] hover:text-[#005BBB]"
                                                    onClick={() => setVisibleVideoIndex(index)}
                                                >
                                                    <Play className="h-8 w-8" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Scroll Right */}
                    <button
                        onClick={() => scroll('right')}
                        className="hidden md:inline-block bg-[#005BBB] p-2 rounded-lg shadow hover:bg-[#FFD500] text-white hover:text-[#005BBB]"
                    >
                        <ArrowBigRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

VideoCarousel.propTypes = {
    title: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function YouTubeSlider() {
    return (
        <>
            <div className="mx-4 mb-12 sm:mx-10 md:mx-20 lg:mx-[200px]">
                {Object.entries(videoData).map(([title, videos]) => (
                    <VideoCarousel key={title} title={title} videos={videos} />
                ))}
            </div>
            <div className="book-form">
                <BookForm />
            </div>
        </>
    );
}
