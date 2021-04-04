import React, { Component } from 'react';
import TaskService from '../services/TaskService';
import Modal from 'react-modal'
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

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value})
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
                                        <button onClick={() => this.toggleModal()} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteTask(task.id)} className="btn btn-danger">Delete</button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <Modal isOpen={false} shouldCloseOnOverlayClick={false}>
                <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Update Task</h3>
                    <div className="card-body">
                        <form action="">
                            <label>Task description: </label>
                            <input type="text" placeholder="Task description" value={this.state.description} className="form-control" onChange={this.changeDescriptionHandler}/>
                            <br/>
                            <button className="btn btn-success">Update</button>
                        </form>
                    </div>
                </div>
            </div>
                </Modal>
            </div>
        );
    }
}

export default ListTasksComponent;