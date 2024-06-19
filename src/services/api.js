import axios from 'axios';

export const fetchExternalQuestions = async (category) => {
    try {
        const response = await axios.post('http://localhost:3001/api/questions', { category });
        return response.data.questions;
    } catch (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }
};
