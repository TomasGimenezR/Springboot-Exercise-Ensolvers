import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class CreateTasksComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks: [],
            description: '',
            addUpdateTitle: 'Add Task',
        }
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    /**
     * Creates new Task by using description in state
     * @param e Event occurred
     */
    saveTask = (e) => {
        e.preventDefault();
        let task = {description: this.state.description};
        // console.log('Task => ' + JSON.stringify(task));

        TaskService.createTask(task)
            .then(res => window.location.reload())
    }

    /**
     * Sets description state to use it when description input is modified
     * @param event Event occurred
     */
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }

    render() {
        return (
            <div className="row">
                <div className="card col-md-12">
                    <h3 id="AddUpdateTask" className="text-center">{this.state.addUpdateTitle}</h3>
                    <div className="card-body">
                        <form action="">
                            <input type="text" placeholder="Task Description" value={this.state.description} className="form-control" onChange={this.changeDescriptionHandler}/>
                            <br/>
                            <button className="btn btn-success" onClick={this.saveTask}>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTasksComponent;
