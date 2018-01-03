import React from 'react';
import {connect} from 'react-redux';
import {deleteTask, fetchCompletedTasks} from "../actions/TaskActions";

@connect((store) => {
    return{
        tasks: store.tasks.completedTasks,
        fetching: store.tasks.fetching
    }
})

export default class ListCompleteTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: this.props.fetching
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchCompletedTasks())
    }

    handleRenderComponent() {

        if (this.state.fetching === true) {
            return(
                <div>
                    <h3>Loading...</h3>
                </div>
            )
        }
        return(
            <div>
                <div className="allCompletedEach">
                <h3>{this.props.title} | {this.props.username}&nbsp;&nbsp;
                    <small>
                        <button className="button stat-completed">Completed</button>&nbsp;&nbsp;
                        <button className="delBtn" onClick={this.handleDeleteTask.bind(this)}>Delete</button>
                    </small><br/>
                    {this.props.date_added}
                </h3>
                <input type="hidden" ref="tid" defaultValue={this.props.id}/>
                <p>{this.props.note}</p>
                </div>
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.handleRenderComponent()}
            </div>
        )
    }

    handleDeleteTask(event) {
        event.preventDefault();
        this.props.dispatch(deleteTask(this.refs.tid.value))
    }
}