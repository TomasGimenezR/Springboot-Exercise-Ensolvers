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

    @GetMapping("/task")
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/task/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't found Task with Id " + id));
        return ResponseEntity.ok(task);
    }

    @PostMapping("/task")
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    @PatchMapping("/task/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't found Task with Id " + id));
        task.setDescription(taskDetails.getDescription());

        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);
    }

    @PatchMapping("/task/change-completion/{id}")
    public ResponseEntity<Task> changeCompletionTask(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't found Task with Id " + id));
        task.setCompleted(!task.isCompleted());

        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);
    }


}
