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
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [popupOpen, setPopupOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);

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
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
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
        setPopupOpen(false);
    };

    const handleStartTest = () => {
        setCurrentQuestionIndex(0);
        setPopupOpen(true);
        setTimeLeft(10);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(10);
        } else {
            handleSubmit();
        }
    };

    useEffect(() => {
        if (category) {
            fetchQuestions();
        }
    }, [category]);

    useEffect(() => {
        let timer;
        if (popupOpen && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleNextQuestion();
        }
        return () => clearTimeout(timer);
    }, [timeLeft, popupOpen]);

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

    const currentQuestion = questions[currentQuestionIndex];

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
                    {popupOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
                            <div className="text-right mt-2 text-gray-600">
                                    Time left: {timeLeft} seconds
                                </div>
                            <div className="bg-white p-4 rounded shadow-lg">
                                <h2 className="text-2xl font-bold mb-4">Question {currentQuestionIndex + 1}\{currentQuestion.length}</h2>
                                <h3 className="text-xl mb-2">{decodeHtml(currentQuestion.question)}</h3>
                                {currentQuestion.options.map((option) => (
                                    <label key={option} className="block mb-1">
                                        <input
                                            type="radio"
                                            name={`question-${currentQuestionIndex}`}
                                            value={option}
                                            onChange={() => handleAnswerChange(currentQuestionIndex, option)}
                                            className="mr-2"
                                        />
                                        {decodeHtml(option)}
                                    </label>
                                ))}
                                <div className="mt-4 flex justify-between">
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handleNextQuestion}
                                    >
                                        Next
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    )}
                    {!popupOpen && (
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleStartTest}
                        >
                            Start Test
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default Test;
