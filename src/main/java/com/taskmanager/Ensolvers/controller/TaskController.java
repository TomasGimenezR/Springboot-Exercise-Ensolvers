package com.taskmanager.Ensolvers.controller;

import com.taskmanager.Ensolvers.model.Task;
import com.taskmanager.Ensolvers.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/task")
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}
