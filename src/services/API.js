import axios from 'axios';

let newAxiosInstance1 = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
});

const getUsers = () => newAxiosInstance1();
const getUser = (id) => newAxiosInstance1('/'+id);
export {getUser, getUsers};


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

const getPosts = () => axiosInstance();
const getPost = (id) => axiosInstance('/'+id);
export {getPost, getPosts};



let newAxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
});

const getComments = () => newAxiosInstance();
const getComment = (id) => newAxiosInstance('/'+id);
export {getComment, getComments};


