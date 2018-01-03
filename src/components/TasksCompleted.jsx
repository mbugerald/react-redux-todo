import React from 'react';
import _ from 'lodash';
import ListCompleteTask from "./ListCompleteTask";

export default class TasksCompleted extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTask() {

        if(Object.getOwnPropertyNames(this.props.tasks).length === 0) {
            return(<div></div>)
        }
        return _.map(this.props.tasks, (task, index) => <ListCompleteTask key={index}{...task} />);
    }


    render() {
        console.log(this.props.tasks);
        return(
            <div>
                <div id="containerAllTasks">
                    <div id="allCompletedTasks">
                        {this.renderTask()}
                    </div>
                </div>
            </div>
        )
    }
}