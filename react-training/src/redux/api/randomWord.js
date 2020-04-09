import axios from 'axios';

export const getRandomWord = () => {
    return axios.get('https://random-word-api.herokuapp.com/word');
};