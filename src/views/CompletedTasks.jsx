import React from 'react';
import Header from './Header'
import {connect} from 'react-redux';
import TasksCompleted from "../components/TasksCompleted";

import {fetchCompletedTasks} from "../actions/TaskActions";

@connect((store)=> {
    return {
        tasks: store.tasks.tasks
    }
})


export default class CompletedTasks extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCompletedTasks())
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <Header />
                <TasksCompleted tasks={this.props.tasks}/>
            </div>
        )
    }
}