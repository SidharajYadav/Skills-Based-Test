import axios from 'axios';

const API_BASE_URL = 'https://opentdb.com/api.php'; // Open Trivia Database API URL

export const fetchExternalQuestions = async (category) => {
    try {
        const response = await axios.get(API_BASE_URL, {
            params: {
                amount: 10, // Number of questions to fetch
                category: getCategoryCode(category), // Convert category to API code
                type: 'multiple' // Multiple-choice questions
            }
        });

        // Extract and format questions and answers from response
        const formattedQuestions = response.data.results.map((question, index) => {
            return {
                question: question.question,
                options: shuffleArray([...question.incorrect_answers, question.correct_answer]),
                correctAnswer: question.correct_answer,
                questionNumber: index + 1
            };
        });

        return formattedQuestions;
    } catch (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }
};

// Helper function to convert category label to API category code
const getCategoryCode = (category) => {
    switch (category.toLowerCase()) {
        case 'frontend':
            return 18; // Add the correct category code from OTDB
        case 'backend':
            return 19; // Add the correct category code from OTDB
        case 'database':
            return 11; // Example category code
        case 'cloud':
            return 12; // Example category code
        case 'aws':
            return 13; // Example category code
        default:
            return 9; // Default to General Knowledge if category not recognized
    }
};

// Helper function to shuffle array (Fisher-Yates shuffle algorithm)
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
