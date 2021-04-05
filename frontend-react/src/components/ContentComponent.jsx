import React, { Component } from 'react';
import TaskService from '../services/TaskService';
import FolderService from '../services/FolderService';

class ContentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks: [],
            description: '',
            taskId: '',
            folders: [],
            folderName: '',
            addUpdateTitle: 'Add Task',
            buttonState: 'Add'
        }

        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.changeCompletion = this.changeCompletion.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.changeFolderNameHandler = this.changeFolderNameHandler.bind(this);
        this.saveFolder = this.saveFolder.bind(this);
        this.viewFolderItems = this.viewFolderItems.bind(this);
    }

    /**
     * 
     * @param {*} taskId 
     * @param {*} taskDescription 
     */
    editTask(taskId, taskDescription) {
        this.setState({ 
            addUpdateTitle: 'Update Task', 
            buttonState: 'Update', 
            description: taskDescription,
            taskId
        });
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
    changeDescriptionHandler(event) {
        this.setState({description: event.target.value})
    }

    /**
     * Creates new Task by using description in state
     * @param e Event occurred
     */
    saveTask(e) { 
        e.preventDefault();
        if(this.state.buttonState === 'Add'){
            let task = {description: this.state.description};
            // console.log('Task => ' + JSON.stringify(task));
    
            TaskService.createTask(task)
                .then(res => window.location.reload())    
        } else {
            let task = { 
                id: this.state.taskId,
                description: this.state.description
            };
            TaskService.updateTaskDescription(task)
                .then(res => window.location.reload())
        }
    }

    /**
     * Creates new Folder using name saved in state
     * @param e Event occurred
     */
     saveFolder(e) {
        e.preventDefault();
        let folder = {name: this.state.folderName};
        // console.log('Folder => ' + JSON.stringify(folder));

        FolderService.createFolder(folder)
            .then(res => window.location.reload())
    }

    /**
     * 
     * @param {*} folderId 
     */
    viewFolderItems(folderId) {
        TaskService.getTasksFromFolder(folderId)
            .then((res) => {
                this.setState({ tasks: res.data })
            })
    }

    /**
     * Deletes Folder
     * @param folderId Id of Folder to delete
     */
    deletefolder(folderId) {
        FolderService.deleteFolder(folderId)
            .then(res => window.location.reload())
    }

    /**
     * Assigns Folder name in state the value of the folderName input modified
     * @param event Event occurred
     */
     changeFolderNameHandler(event) {
        this.setState({folderName: event.target.value})
    }
    
    componentDidMount() {
        TaskService.getTasks()
            .then((res) => {
                this.setState({ tasks: res.data })
            })
        FolderService.getFolders()
            .then((res) => {
                this.setState({ folders: res.data })
            })
    }

    render() {
        return (
            <div className="container">
                <div class="contDashboard">
                    {/* Task Creation */}
                    <div className="row">
                        <div className="card col-md-12">
                            <h3 id="AddUpdateTask" className="text-center">{this.state.addUpdateTitle}</h3>
                            <div className="card-body">
                                <form action="">
                                    <input type="text" placeholder="Task Description" value={this.state.description} className="form-control" onChange={this.changeDescriptionHandler}/>
                                    <br/>
                                    <button className="btn btn-success" onClick={this.saveTask}>{this.state.buttonState}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Folder Management */}
                    <div className="row rowFolder">
                        <div className="card col-md-12">
                            <h3 className="text-center">Folder Management</h3>
                            <div className="card-body">
                                <form className="newFolderForm">
                                    <input type="text" placeholder="New Folder Name" value={this.state.folderName} className="form-control" onChange={this.changeFolderNameHandler}/>
                                    <button className="btn btn-success" onClick={this.saveFolder}>Add</button>
                                </form>
                                <div className="contFolderList">
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Folder Name</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.folders.map(
                                                    folder =>
                                                    <tr key = {folder.id}>
                                                        <td>{folder.name}</td>
                                                        <td>
                                                            <button onClick={() => this.viewFolderItems(folder.id)} className="btn btn-info">View Items</button>
                                                            <button style={{marginLeft: "10px"}} onClick={() => this.deletefolder(folder.id)} className="btn btn-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tasks List */}
                <div class="contList">
                    <button onClick={() => window.location.reload()} className="btn btn-info fullTaskList">Full Task List</button>
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
                                            <button onClick={() => {this.editTask(task.id, task.description)}} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.deleteTask(task.id)} className="btn btn-danger">Delete</button>
                                            <select style={{marginLeft: "10px"}} onChange={() => this.sendToFolder(task.id)} value={this.state.value} name="" id="">
                                                <option value="">Send to Folder...</option>
                                                {this.state.folders.map(
                                                    folder =>
                                                    <option value={folder.id}>{folder.name}</option>
                                                )}
                                            </select>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ContentComponent;