import axios from 'axios';

export const axiosWithAuth = () => {
    let user = JSON.parse(window.localStorage.getItem('user'));
    let id = user.id;
    let token = user.token;

    console.log('got to axiosWithAuth');
    return axios.create({
        baseURL: `https://lsbw-liberated-skills.herokuapp.com/api/centers/${id}`,
        headers: {
            Authorization: token,
        },
    });
};
