import axios from 'axios';

export const axiosWithAuth = () => {
    let id = window.localStorage.getItem('id');
    let token = window.localStorage.getItem('token');
    console.log('got to axiosWithAuth');
    return axios.create({
        baseURL: `https://cors-anywhere.herokuapp.com/https://lsbw-liberated-skills.herokuapp.com/api/centers/${id}`,
        headers: {
            Authorization: token,
        },
    });
};
