import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class CreateTasksComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks: [],
            description: ''
        }
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    saveTask = (e) => {
        e.preventDefault();
        let task = {description: this.state.description};
        // console.log('Task => ' + JSON.stringify(task));

        TaskService.createTask(task)
            .then(res => window.location.reload())
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }

    render() {
        return (
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Add Task</h3>
                    <div className="card-body">
                        <form action="">
                            <label>Task description: </label>
                            <input type="text" placeholder="New Task" value={this.state.description} className="form-control" onChange={this.changeDescriptionHandler}/>
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
