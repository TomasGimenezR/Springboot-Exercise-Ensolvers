import axios from 'axios'

const FOLDER_API_BASE_URL = 'http://localhost:8080/api/v1/folder';

class FolderService {
    getFolders() {
        return axios.get(FOLDER_API_BASE_URL);
    }

    createFolder(folder) {
        return axios.post(FOLDER_API_BASE_URL, folder);
    }

    deleteFolder(folderId) {
        return axios.delete(`${FOLDER_API_BASE_URL}/${folderId}`);
    }
}

export default new FolderService();