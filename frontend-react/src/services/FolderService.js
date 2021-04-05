import axios from 'axios'

const FOLDER_API_BASE_URL = 'http://localhost:8080/api/v1/folder';

class FolderService {

    /**
     * Gets all Folders
     * @returns List of Folders
     */
    getFolders() {
        return axios.get(FOLDER_API_BASE_URL);
    }

    /**
     * Creates a new Folder
     * @param folder Data to add to Folder
     * @returns New Folder created
     */
    createFolder(folder) {
        return axios.post(FOLDER_API_BASE_URL, folder);
    }

    /**
     * Deletes a Folder, and all Tasks inside it
     * @param folderId Id of Folder to delete
     * @returns Folder deleted
     */
    deleteFolder(folderId) {
        return axios.delete(`${FOLDER_API_BASE_URL}/${folderId}`);
    }
}

export default new FolderService();