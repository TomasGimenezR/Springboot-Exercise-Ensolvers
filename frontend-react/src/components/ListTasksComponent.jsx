import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class ListTasksComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks: [],
            description: ''
        }

        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);

    }

    editTask() {
        
    }

    deleteTask(taskId) {
        TaskService.deleteTask(taskId)
            .then(res => window.location.reload())
    }

    changeCompletion(taskId){
        TaskService.changeCompletion(taskId);
    }

    componentDidMount() {
        TaskService.getTasks()
            .then((res) => {
                this.setState({ tasks: res.data })
            })
    }

    render() {
        return (
            <div>
                <h2>Tasks List</h2>
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map(
                                task =>
                                <tr key = {task.id}>
                                    <td><input type="checkbox" defaultChecked={task.completed} onChange={() => this.changeCompletion(task.id)}></input></td>
                                    <td>{task.description}</td>
                                    <td>
                                        <button onClick={() => this.editTask(task.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteTask(task.id)} className="btn btn-danger">Delete</button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListTasksComponent;