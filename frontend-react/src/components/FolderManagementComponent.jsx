import React, { Component } from 'react';
import FolderService from '../services/FolderService';

class FolderManagementComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            folders: [],
            name: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.saveFolder = this.saveFolder.bind(this);
    }

    saveFolder = (e) => {
        e.preventDefault();
        let folder = {name: this.state.name};
        // console.log('Folder => ' + JSON.stringify(folder));

        FolderService.createFolder(folder)
            .then(res => window.location.reload())
    }

    deletefolder(folderId) {
        FolderService.deleteFolder(folderId)
            .then(res => window.location.reload())
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value})
    }

    componentDidMount() {
        FolderService.getFolders()
            .then((res) => {
                this.setState({ folders: res.data })
            })
    }
    
    render() {
        return (
            <div style={{marginTop: "30px", marginBottom: "30px"}} className="row">
                <div className="card col-md-8 offset-md-2 offset-md-2">
                    <h3 className="text-center">Folder Management</h3>
                    <div className="card-body">
                        <div>
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
                                                    <button onClick={() => this.viewItems(folder.id)} className="btn btn-info">View Items</button>
                                                    <button style={{marginLeft: "10px"}} onClick={() => this.deletefolder(folder.id)} className="btn btn-danger">Delete</button>
                                                </td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <form>
                            <label>Folder name: </label>
                            <input type="text" placeholder="New Folder" value={this.state.description} className="form-control" onChange={this.changeNameHandler}/>
                            <br/>
                            <button className="btn btn-success" onClick={this.saveFolder}>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FolderManagementComponent;