import axios from 'axios'

const TASK_API_BASE_URL = 'http://localhost:8080/api/v1/task';

class TaskService {
    /**
     * Gets all Tasks
     * @returns List of Tasks
     */
    getTasks() {
        return axios.get(TASK_API_BASE_URL);
    }

    /**
     * Creates new Task
     * @param task Data from Task to create
     * @returns Created Task
     */
    createTask(task) {
        return axios.post(TASK_API_BASE_URL, task);
    }

    /**
     * Completes task if incomplete, incompletes it if completed
     * @param taskId Id of Task to change completion of
     * @returns Updated Task
     */
    changeCompletion(taskId) {
        return axios.patch(`${TASK_API_BASE_URL}/change-completion/${taskId}`);
    }

    /**
     * Updates description of a Task
     * @param task Task with updated description
     * @returns Updated Task
     */
    updateTaskDescription(task) {
        return axios.patch(`${TASK_API_BASE_URL}/${task.id}`, task)
    }

    /**
     * Sends a Task to a Folder
     * @param task Task with Folder to send to
     * @returns Updated Task
     */
    sendToFolder(task) {
        return axios.patch(`${TASK_API_BASE_URL}/set-folder/${task.id}`, task)
    }

    /**
     * Deletes a Task
     * @param taskId Id of Task to delete
     * @returns Deleted Task
     */
    deleteTask(taskId) {
        return axios.delete(`${TASK_API_BASE_URL}/${taskId}`);
    }

    /**
     * Gets all Tasks from Folder
     * @param folderId Id of Folder to get Tasks from
     * @returns List of Tasks in Folder
     */
    getTasksFromFolder(folderId) {
        return axios.get(`${TASK_API_BASE_URL}s-in-folder/${folderId}`);
    }
}

export default new TaskService();