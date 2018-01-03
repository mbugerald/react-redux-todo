import React from 'react';
import Tasks from './Tasks';
import _ from 'lodash';

export default class AddTasks extends React.Component {

    renderTask() {

        if(Object.getOwnPropertyNames(this.props.tasks).length === 0) {
            return(<div></div>)
        }
        return _.map(this.props.tasks, (task, index) => <Tasks key={index}{...task} />);
    }

    handleCreateTask(event) {
        event.preventDefault();

        let data = {
            title: this.refs.title.value,
            username: this.refs.username.value,
            start_date: this.refs.start_date.value,
            end_date: this.refs.end_date.value,
            note: this.refs.note.value
        };
        //Calling the create task property.
        this.props.createTask(data);
    }

    handleOutDatedTask() {
        alert(this.props.added_date)
    }

    render() {
        return(
            <div>
            <div id="addTaskContainer">
                <div className="addTasksPart">
                    <h4 id="titleCreateTodo" onClick={this.handleOutDatedTask.bind(this)}>
                        <i className="fa fa-pencil">
                        </i>&nbsp;&nbsp;CreateTodo
                    </h4>
                    <form method="POST" id="addTask" onSubmit={this.handleCreateTask.bind(this)}>
                        <fieldset>
                            <label>Your Name:</label>
                            <input type="text" name="username" ref="username" maxLength={20} />
                            <label>Your Task Name:</label>
                            <input type="text" name="task_name" ref="title" maxLength={20} />
                            <label>Start Date:</label>
                            <input type="date" name="start_date" ref="start_date"/>
                            <label>End Date:</label>
                            <input type="date" name="end_date" ref="end_date" />
                            <label>Short Note</label>
                            <textarea name="short_notes" ref="note">
                            </textarea>
                            <p><input type="submit" value="Add Task" /></p>
                        </fieldset>
                    </form>
                </div>
                <div className="addTasksPart">
                    <ul className="classContainer">
                        {this.renderTask()}
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}