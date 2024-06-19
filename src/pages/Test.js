import React, { useState, useEffect } from 'react';
import { fetchExternalQuestions } from '../services/api';
import { decodeHtml } from '../utils/decodeHtml';
import CategorySelector from '../components/CategorySelector';

const Test = () => {
    const [category, setCategory] = useState('');
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCategorySelect = (selectedCategory) => {
        setCategory(selectedCategory);
        setQuestions([]);
        setAnswers({});
        setScore(null);
    };

    const fetchQuestions = async () => {
        setLoading(true);
        try {
            const fetchedQuestions = await fetchExternalQuestions(category);
            setQuestions(fetchedQuestions);
        }
         finally {
            setLoading(false);
        }
    };

    const handleAnswerChange = (questionIndex, answer) => {
        setAnswers({ ...answers, [questionIndex]: answer });
    };

    const handleSubmit = () => {
        let newScore = 0;
        questions.forEach((q, index) => {
            if (answers[index] === q.correctAnswer) {
                newScore += 1;
            }
        });
        setScore(newScore);
    };

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    if (score !== null) {
        return (
            <div className="text-center mt-8">
                <h2 className="text-2xl font-bold mb-4">Your Score: {score} / {questions.length}</h2>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.location.reload()}
                >
                    Retake Test
                </button>
            </div>
        );
    }

    return (
        <div className="p-4">
            <CategorySelector selectedCategory={category} onSelectCategory={handleCategorySelect} />
            {category && !questions.length && (
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={fetchQuestions}
                >
                    Start Test
                </button>
            )}
            {questions.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4">Take the Test</h2>
                    {questions.map((q, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-xl mb-2">{decodeHtml(q.question)}</h3>
                            {q.incorrectAnswers.concat(q.correctAnswer).sort().map(option => (
                                <label key={option} className="block mb-1">
                                    <input 
                                        type="radio" 
                                        name={`question-${index}`} 
                                        value={option} 
                                        onChange={() => handleAnswerChange(index, option)} 
                                        className="mr-2"
                                    />
                                    {decodeHtml(option)}
                                </label>
                            ))}
                        </div>
                    ))}
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </>
            )}
        </div>
    );
};

export default Test;
