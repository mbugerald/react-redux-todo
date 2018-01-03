/* Actions here are more like the executors to fetch data and transfer to the user. */
import axios from 'axios';

// Fetch a single task.
export function fetchCompletedTasks() {
    return function (dispatch) {
        axios.get('http://127.0.0.1:5000/api/complete_tasks')
            .then((response) =>{
                dispatch({type: "FETCH_TASKS_COMPLETE", payload:response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_TASKS_REJECTED", payload:err})
            })
    }
}

// Method to add task to the database and render response.
export function addATask(data) {
    return function (dispatch) {
        axios.post('http://127.0.0.1:5000/api/add_task', data)
            .then((response) =>{
                if (response.data.response === true) {
                    axios.get('http://127.0.0.1:5000/api/tasks')
                    .then((response) => {
                        dispatch({type: "FETCH_TASKS_COMPLETE", payload:response.data})
                    })
                    .catch((err) => {
                        dispatch({type: "FETCH_TASKS_REJECTED", payload:err})
                    })
                }
            }).catch((err) =>{
                dispatch({type: "FETCH_TASKS_REJECTED", payload:err})
        })
    }
}

// fetch All the existing task in the database.
export function fetchAllTasks() {
    return function(dispatch) {
        axios.get('http://127.0.0.1:5000/api/tasks')
            .then((response) => {
                dispatch({type: "FETCH_TASKS_COMPLETE", payload:response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_TASKS_REJECTED", payload:err})
        })
    }
}

//Update selected task.
export function updateTask(task) {
    return function (dispatch) {
        axios.put('http://127.0.0.1:5000/api/update_task', task)
            .then((response) => {
                dispatch({type: "FETCH_TASKS_COMPLETE", payload:response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_TASKS_REJECTED", payload:err})
            })
    }
}

//Delete selected task
export function deleteTask(task) {
    return function (dispatch) {
        axios.delete('http://127.0.0.1:5000/api/del_task/' + task)
            .then((response) => {
                dispatch({type: "FETCH_TASKS_COMPLETE", payload:response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_TASKS_REJECTED", payload:err})
            })
    }
}

//Complete a task
export function completeTask(task) {
    return function (dispatch) {
        axios.put('http://127.0.0.1:5000/api/complete_task', task)
            .then((response) => {
                if (response.data.response === true) {
                    axios.get('http://127.0.0.1:5000/api/complete_tasks')
                    .then((response) => {
                        dispatch({type: "FETCH_TASKS_COMPLETE", payload:response.data})
                    })
                    .catch((err) => {
                        dispatch({type: "FETCH_TASKS_REJECTED", payload:err})
                    })
                }
            })
            .catch((err) => {
                dispatch({type: "FETCH_TASKS_REJECTED", payload:err})
            })
    }
}