package com.taskmanager.Ensolvers.controller;

import com.taskmanager.Ensolvers.exception.ResourceNotFoundException;
import com.taskmanager.Ensolvers.model.Task;
import com.taskmanager.Ensolvers.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    /**
     * Lists all Tasks
     * @return List of Tasks
     */
    @GetMapping("/task")
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    /**
     * Gets Task by Id
     * @param id Id of Task to get
     * @return Task found
     */
    @GetMapping("/task/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't found Task with Id " + id));
        return ResponseEntity.ok(task);
    }

    /**
     * Creates a new Task
     * @param task Task to create
     * @return Task created
     */
    @PostMapping("/task")
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    /**
     * Updates Task description
     * @param id Id of Task to update
     * @param taskDetails Task with details to update
     * @return Updated Task
     */
    @PatchMapping("/task/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't found Task with Id " + id));
        task.setDescription(taskDetails.getDescription());

        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);
    }

    /**
     * Marks Task as completed if incomplete, or as incomplete is completed
     * @param id Id of Task to change completion
     * @return Updated Task
     */
    @PatchMapping("/task/change-completion/{id}")
    public ResponseEntity<Task> changeCompletionTask(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't found Task with Id " + id));
        task.setCompleted(!task.isCompleted());

        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);
    }

    /**
     * Moves Task to a Folder
     * @param id Id of Task to move
     * @param taskDetails Folder to send Task to
     * @return Updated Task
     */
    @PatchMapping("/task/set-folder/{id}")
    public ResponseEntity<Task> setFolder(@PathVariable Long id, @RequestBody Task taskDetails) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't found Task with Id " + id));
        task.setFolder_id(taskDetails.getFolder_id());

        //CHECK IF FOLDER EXISTS

        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);
    }

    /**
     * Deletes Task
     * @param id Id of Task to delete
     * @return Deleted Task
     */
    @DeleteMapping("/task/{id}")
    public ResponseEntity<Task> deleteTask(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't found Task with Id " + id));

        taskRepository.delete(task);
        return ResponseEntity.ok(task);
    }

    /**
     * Get all Tasks in selected Folder
     * @param folder_id Folder to get all Tasks from
     * @return List of Tasks inside of Folder
     */
    @GetMapping("/tasks-in-folder/{folder_id}")
    public List<Task> listTasksInFolder(@PathVariable Long folder_id) {
        return taskRepository.getTasksInFolder(folder_id);
    }
}
