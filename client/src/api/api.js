import axios from 'axios';

//создаем настройки для запросов для переиспользования
const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api/',
});

export const chatAPI = {
    login(nickname, password) {
        return instance.post('auth/login', { nickname, password }).then(response => {
            return response;
        })
    },
    logout() {
        return instance.post('auth/logout').then(response => {
            return response;
        })
    },
    register(nickname, password, age) {
        return instance.post('auth/register', { nickname, password, age }).then(response => {
            return response;
        })
    },
    getMessages() {
        return instance.get('public/messages').then(response => {
            return response;
        })
    },
    addMessage(message, img, publication_date, user_id) {
        return instance.post('public/messages', { message, img, publication_date, user_id })
    },

}
