import { useRef, useState } from 'react';
import { ArrowBigLeft, ArrowBigRight, Play } from 'lucide-react';
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
            <h2 className="font-oswald mb-8 mt-6 text-center text-4xl font-bold text-[#005BBB] md:text-4xl lg:text-[56px]">{title}</h2>
            <div className="relative">
                <div className="flex items-center gap-x-6 px-4">
                    <button
                        onClick={() => scroll('left')}
                        className="bg-[#005BBB] p-2 rounded-lg shadow hover:bg-[#FFD500] text-white hover:text-[#005BBB]"
                    >
                        <ArrowBigLeft className="h-6 w-6" />
                    </button>

                    <div
                        ref={containerRef}
                        className="no-scrollbar flex space-x-4 overflow-x-auto scroll-smooth px-4"
                    >
                        {videos.map((url, index) => (
                            <div key={index} className="relative min-w-[250px] max-w-[300px] overflow-hidden rounded-xl bg-[#005BBB] shadow-md sm:min-w-[280px] md:min-w-[300px]">
                                <div className="relative aspect-video bg-black/70">
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
                                                className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#005BBB] bg-opacity-50 text-white hover:bg-[#FFD500] hover:text-[#005BBB]"
                                            onClick={() => setVisibleVideo(index)}
                                        >
                                            <Play className="h-8 w-8 hover:bg-[#FFD500]" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="bg-[#005BBB] p-2 rounded-lg shadow hover:bg-[#FFD500] text-white hover:text-[#005BBB]"
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
    videos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default function YouTubeSlider() {
    return (
        <div className="mx-4 min-h-screen sm:mx-10 md:mx-20 lg:mx-[200px]">
            {Object.entries(videoData).map(([title, videos]) => (
                <VideoCarousel key={title} title={title} videos={videos} />
            ))}
        </div>
    );
}