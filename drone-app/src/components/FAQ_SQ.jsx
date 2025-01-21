import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import {FaMinus } from 'react-icons/fa'
export default function SQ({ question, answer }) {
    const [showAnswer,setShowAnswer] = useState(false)
    return <>
        <div>
            <div className="justify-betwwen flex items-center">
                <h2>{question}</h2>
                <button>
                    <BsPlus />
                </button>
            </div>
            
            {showAnswer && <p>{answer}</p>}
        </div>
    </>
}
