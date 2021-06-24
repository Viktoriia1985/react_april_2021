// const getUsers = () => {
//     return  fetch('https://jsonplaceholder.typicode.com/users')
//                          .then(value => value.json());
// };
//
//
// const getUser = () => {
//     return  fetch('https://jsonplaceholder.typicode.com/users/' + id)
//         .then(value => value.json());
// };
//
// export {getUser, getUsers};



import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

