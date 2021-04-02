import React, { Component } from 'react';

class FolderManagementComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            folders: [],
        }
    }
    
    render() {
        return (
            <div style={{marginTop: "30px"}} className="row">
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
                                                <td><input type="checkbox" defaultChecked={folder.completed} onChange={() => this.changeCompletion(folder.id)}></input></td>
                                                <td>{folder.description}</td>
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