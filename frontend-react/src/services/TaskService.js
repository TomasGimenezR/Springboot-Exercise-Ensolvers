import axios from 'axios'

const TASK_API_BASE_URL = 'http://localhost:8080/api/v1/task';

class TaskService {
    getTasks() {
        return axios.get(TASK_API_BASE_URL);
    }

    createTask(task) {
        return axios.post(TASK_API_BASE_URL, task);
    }

    changeCompletion(taskId) {
        return axios.patch(`${TASK_API_BASE_URL}/change-completion/${taskId}`);
    }

    updateTaskDescription(task) {
        return axios.patch(`${TASK_API_BASE_URL}/${task.id}`, task)
    }

    deleteTask(taskId) {
        return axios.delete(`${TASK_API_BASE_URL}/${taskId}`);
    }

    getTasksFromFolder(folderId) {
        return axios.get(`${TASK_API_BASE_URL}s-in-folder/${folderId}`);
    }
}

export default new TaskService();