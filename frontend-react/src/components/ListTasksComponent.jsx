import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class ListTasksComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks: []
        }
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
                                    <td><input type="checkbox" defaultChecked={task.completed}></input></td>
                                    <td>{task.description}</td>
                                    <td></td>

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