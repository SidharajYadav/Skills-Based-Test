import axios from 'axios';

// Map our custom categories to the trivia API categories
const categoryMapping = {
    frontend: '18', // Example category ID for Computers from OTDB
    backend: '18', // Example category ID for Computers from OTDB
    database: '18', // Example category ID for Computers from OTDB
    cloud: '18', // Example category ID for Computers from OTDB
    aws: '18' // Example category ID for Computers from OTDB
};

const API_BASE_URL = 'https://opentdb.com/api.php';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchExternalQuestions = async (category, retries = 3) => {
    const url = `${API_BASE_URL}?amount=10&category=${categoryMapping[category]}&type=multiple`;

    try {
        const response = await axios.get(url);
        return response.data.results.map(question => ({
            question: question.question,
            correctAnswer: question.correct_answer,
            incorrectAnswers: question.incorrect_answers
        }));
    } catch (error) {
        if (retries > 0) {
            console.error('Error fetching questions. Retrying...', retries);
            await delay(2000); // Wait for 2 seconds before retrying
            return fetchExternalQuestions(category, retries - 1);
        } else {
            console.error('Error fetching questions:', error);
            alert('An error occurred while fetching questions. Please try again later.');
            return [];
        }
    }
};

export { fetchExternalQuestions };
