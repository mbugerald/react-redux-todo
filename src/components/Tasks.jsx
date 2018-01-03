import React from 'react';
import {fetchAllTasks, updateTask, deleteTask, completeTask} from "../actions/TaskActions";
import {connect} from "react-redux";

{/*
    Establishing a connection to the store in index
    In order to use add stored elements.
 */}

@connect((store) => {
    return {
        tasks: store.tasks.tasks,
        vefDate: false
    }
})

export default class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        }
    }
    render() {
        return(
            <div>
                <li>{this.renderTaskResults()}</li>
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchAllTasks())
    }

    renderTaskResults() {
        if(this.state.isEditing === true)
            return(
                <div>
                    <div className="updateExistingTaskContainer">
                        <h4 className="titleUpdateTodo">
                            <i className="fa fa-pencil">
                            </i>&nbsp;&nbsp;EditTodo:&nbsp;{this.props.title}
                        </h4>
                    </div>
                    <form method="post" className="updateForm" onSubmit={this.handleUpdateTask.bind(this)}>
                        <label>Task name</label>
                        <input type="text" ref="title" defaultValue={this.props.title} />
                        <label>Task start date</label>
                        <input type="date" ref="start_date" defaultValue={this.props.start_date} />
                        <label>Task end date</label>
                        <input type="date" ref="end_date" defaultValue={this.props.end_date} />
                        <input type="hidden" ref="id" defaultValue={this.props.id} />
                        <input type="text" ref="username" defaultValue={this.props.username} />
                        <textarea ref="note" defaultValue={this.props.note}>
                        </textarea>
                        <div className="updateTaskBtns">
                            <button className="button" type="submit">Update</button>
                            <button className="button delBtn" onClick={this.handleCancelEdit.bind(this)}>Cancel</button>
                        </div>
                    </form>
                </div>
            );

        return(
            <div>
                <h3>
                    {this.verifyDates(this.props.id, this.props.date_added,
                        this.props.end_date, this.props.title, this.props.username)}
                </h3>
                <p>{this.props.note}</p>
            </div>
        );

    }


    handleEditTask() {
        this.setState({isEditing: true});
    }

    handleCancelEdit(event) {
        event.preventDefault();
        this.setState({isEditing: false})
    }

    handleUpdateTask(event) {
        event.preventDefault();
        const dateToday = new Date();
        let data = {
            id: this.refs.id.value,
            title: this.refs.title.value,
            start_date: this.refs.start_date.value,
            end_date: this.refs.end_date.value,
            note: this.refs.note.value,
            last_update: dateToday.toString(),
            username: this.refs.username.value
        };
        this.props.dispatch(updateTask(data));
    }

    handleDeleteTask(event) {
        event.preventDefault();
        this.props.dispatch(deleteTask(this.refs.tid.value))
    }

    localDay(time) {
      const minutesOffset = time.getTimezoneOffset();
      const millisecondsOffset = minutesOffset*60*1000;
      const local = new Date(time - millisecondsOffset);
      return local.toISOString().substr(0, 10)
    }

    verifyDates(id, addedDate, enDate, title, username) {
        const presentDate = this.localDay(new Date());
        if (presentDate >= enDate) {
            return(
                <div>
                    <del>{title} | {username}</del>&nbsp;&nbsp;
                    <small><button className="button stat-offline">Offline</button></small><br/>
                    <input type="hidden" ref="tid" value={id} />
                    <small>
                        {addedDate}&nbsp;&nbsp;<br/>
                        <button className="delBtn" onClick={this.handleDeleteTask.bind(this)}>Delete</button>
                    </small>
                </div>
            )
        }else {
            return(
                <div>
                    {title} | {username}&nbsp;&nbsp;
                    <small><button className="button stat-online">Online</button></small><br/>
                    <input type="hidden" ref="tid" value={id} />
                    <small>{addedDate}&nbsp;&nbsp;
                        <button className="editBtn" onClick={this.handleEditTask.bind(this)}>Edit</button> |&nbsp;
                        <button className="delBtn" onClick={this.handleDeleteTask.bind(this)}>Delete</button> |&nbsp;
                        <dfn title="Click to Update task as completed.">
                            <i className="fa fa-thumbs-up complete_task" onClick={this.handleCompleteTask.bind(this)}>
                            </i>
                        </dfn>
                    </small>
                </div>
            )
        }
    }

    handleCompleteTask() {
        const data = {id: this.props.id};
        this.props.dispatch(completeTask(data));
        this.setState({isEditing: false})
    }

}