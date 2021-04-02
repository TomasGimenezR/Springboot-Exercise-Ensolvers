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
}

export default new TaskService();