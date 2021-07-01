import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getUsers = () => axiosInstance('/users');
const getPostsByUser = (id) => axiosInstance('/users/' + id + '/posts');

const getPosts = () => axiosInstance('/posts');
const getCommentsFromPost = (id) => axiosInstance('/posts/' + id + '/comments');

const getComments = () => axiosInstance('/comments');

export {getPostsByUser, getUsers, getCommentsFromPost, getPosts, getComments};
