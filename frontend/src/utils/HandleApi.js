import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({data}) => {
            console.log('Data: ', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {

    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log('Data: ', data);
        setText('')
        getAllToDo(setToDo)
    })
    .catch((err) => {
        console.log('Error: ', err);
    })

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .post(`${baseUrl}/update`, {_id: toDoId, text})
        .then((data) => {
            console.log('Data: ', data);
            setIsUpdating(false)
            setText('')
            getAllToDo(setToDo)
        })
        .catch((err) => {
            console.log('Error: ', err);
        })
}

const deleteToDo = (_id, setToDo) => {
    axios
        .post(`${baseUrl}/delete`, {_id})
        .then((data) => {
            getAllToDo(setToDo)
        })
        .catch((err) => {
            console.log('Error: ', err);
        })
}

export {getAllToDo, addToDo, updateToDo, deleteToDo}
