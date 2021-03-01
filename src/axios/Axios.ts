import axios from 'axios'

export const Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

Axios.defaults.timeout = 2500;
//instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Override timeout for this request as it's known to take a long time
// instance.get('/longRequest', {
//   timeout: 5000
// });