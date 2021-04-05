import React, { Component } from 'react';
import TaskService from '../services/TaskService';
class ListTasksComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks: [],
            description: '',
        }

        this.deleteTask = this.deleteTask.bind(this);
        this.changeCompletion = this.changeCompletion.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    /**
     * Deletes Task
     * @param taskId Id of Task to delete
     */
    deleteTask(taskId) {
        TaskService.deleteTask(taskId)
            .then(res => window.location.reload())
    }

    /**
     * Completes Task if incomplete, or incompletes it if completed
     * @param taskId Id of Task to change completion of 
     */
    changeCompletion(taskId){
        TaskService.changeCompletion(taskId);
    }

    /**
     * Sets description state to use it when description input is modified
     * @param event Event occurred
     */
         changeDescriptionHandler = (event) => {
            this.setState({description: event.target.value})
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
                                        <button className="btn btn-info">Update</button>
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