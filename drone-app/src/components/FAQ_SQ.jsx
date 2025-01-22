import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function SQ({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div
            className={`p-3 my-2 flex flex-col items-start justify-between bg-gray-100 rounded-lg border-2 transition-all ${showAnswer ? 'border-blue-500' : 'border-gray-300'}`}
        >
            <div className="flex w-full items-center justify-between">
                <h2
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="text-lg font-semibold tracking-wider cursor-pointer"
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
            {showAnswer && <p className="px-5 mt-2">{answer}</p>}
        </div>
    );
}

SQ.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};
