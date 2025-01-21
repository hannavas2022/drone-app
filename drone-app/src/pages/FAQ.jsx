import {useState} from 'react'
import SQ from '../components/FAQ_SQ.jsx'
import {data} from '../components/FAQ_data.jsx'
export default function FAQ() {
    const [questions, setQuestions] = useState(data);
    
    return (
        <div><h1>FAQ</h1>
            {questions.map((question) => (<SQ question={question.question} answer={question.answer} />))}
        </div>);
}
