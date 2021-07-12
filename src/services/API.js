import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => instance('/users')

const getPosts = () => instance('/posts')

const getComments = () => instance('/comments')

export {getUsers, getPosts, getComments}