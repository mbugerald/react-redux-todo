export default function reducer(
    state = {
        tasks: [],
        fetching: false,
        fetched: false,
        error: null
    }, action) {
    switch (action.type) {
        /* */
        case "FETCH_TASKS": {
            return {...state, fetching: true};
        }
        case "FETCH_TASKS_COMPLETE":{
            return {...state, fetching:false, fetched:true, tasks:action.payload}
        }
        case "FETCH_COMPLETED_TASK": {
            return {...state, fetching:false, fetched:true, completedTasks:action.payload}
        }
        case "FETCH_TASKS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_TASK_COMPLETE": {
            return {...state, fetching:false, fetched:true, task:action.payload}
        }
    }
    return state;
}