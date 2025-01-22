import {useState} from 'react'
import SQ from '../components/FAQ_SQ.jsx'
import { data } from '../components/FAQ_data.jsx'

export default function FAQ() {

    const [questions] = useState(data);

    return (
        <div className="p-4" ><h2 className="mb-6 text-center text-3xl font-bold">FAQ</h2>
            {questions.map((question) => (<SQ key={question.id} {...question} />))}
     </div>);
}
