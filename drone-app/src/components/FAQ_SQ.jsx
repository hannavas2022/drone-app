import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function SQ({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div
            style={{
                background: '#DCE4ED80 50%',  // Semi-transparent background
                boxShadow: '0px 1px 3px 0px #CADDFF4D',  // Light shadow effect
                backdropFilter: 'blur(16px)',  // Apply blur effect behind the container
                borderRadius: '32px',  // Rounded corners
                padding: '20px',
                marginBottom: '32px',  // Space between containers
                border: '2px solid #DCE4ED80 50%',  // Border color matching the background
            }}
        >
            <div className="flex w-full items-center justify-between">
                <h2
                    onClick={() => setShowAnswer(!showAnswer)}
                    style={{
                        fontSize: '24px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        marginBottom: '10px',
                    }}
                >
                    {question}
                </h2>
                {showAnswer ? (
                    <button onClick={() => setShowAnswer(!showAnswer)}>
                        <FaMinus />
                    </button>
                ) : (
                    <button onClick={() => setShowAnswer(!showAnswer)}>
                        <BsPlus className="text-xl" />
                    </button>
                )}
            </div>
            {/* Display answer inside the same container */}
            {showAnswer && (
                <p
                    style={{
                        fontSize: '18px',
                        lineHeight: '1.5',
                        
                    }}
                >
                    {answer}
                </p>
            )}
        </div>
    );
}

SQ.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};
