import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import AddTasks from '../components/AddTasks';
import Modal from './Modals';
import Loading from './Loading';

import {addATask, fetchAllTasks} from "../actions/TaskActions";

{/*
    Establishing a connection to the store in index
    In order to use add stored elements.
 */}

@connect((store) => {
    return {
        tasks: store.tasks.tasks,
        fetching: store.tasks.fetching
    }
})

export default class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.dispatch(fetchAllTasks());
    }

    render() {
        return(
            <div>
                <Modal />
                <div>
                    <Header/>
                    <AddTasks
                        tasks={this.props.tasks}
                        createTask={this.createNewTask.bind(this)}
                    />
                </div>
            </div>
        )
    }

    createNewTask(data) {
        this.props.dispatch(addATask(data));
    }


}