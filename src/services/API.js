import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8888/',
    headers: {
        'Content-Type': 'application/json'
    }
});

const getTodos = async () => {
    const {data} = await instance.get('get-todos') || {};
    return data;
};

const createTodo = () => instance.post('create-todo');

const changeTodo = (id, options) => instance.patch(`update-todo/${id}`, JSON.stringify(options));

const deleteTodo = (id) => instance.delete(`delete-todo/${id}`);

export {createTodo, changeTodo, deleteTodo, getTodos}