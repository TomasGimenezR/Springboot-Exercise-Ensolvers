package com.taskmanager.Ensolvers.controller;

import com.taskmanager.Ensolvers.exception.ResourceNotFoundException;
import com.taskmanager.Ensolvers.model.Folder;
import com.taskmanager.Ensolvers.repository.FolderRepository;
import com.taskmanager.Ensolvers.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/")
public class FolderController {
    @Autowired
    private FolderRepository folderRepository;
    @Autowired
    private TaskRepository taskRepository;

    /**
     * Lists all Folders
     * @return List of Folders
     */
    @GetMapping("/folder")
    public List<Folder> getAllFolders() {
        return folderRepository.findAll();
    }

    /**
     * Gets Folder by Id
     * @param id Id of Folder to get
     * @return Folder found
     */
    @GetMapping("/folder/{id}")
    public ResponseEntity<Folder> getFolderById(@PathVariable Long id) {
        Folder folder = folderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't find Folder with Id " + id));
        return ResponseEntity.ok(folder);
    }

    @PostMapping("/folder")
    public Folder createFolder(@RequestBody Folder folder) {
        return folderRepository.save(folder);
    }

    /**
     * Deletes Folder indicated by Id, as well as all Tasks inside Folder
     * @param id Id of Folder to delete
     * @return Deleted folder
     */
    @DeleteMapping("/folder/{id}")
    public ResponseEntity<Folder> deleteFolder(@PathVariable Long id) {
        Folder folder = folderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't find Folder with Id " + id));

        taskRepository.deleteTasksInFolder(id);

        folderRepository.delete(folder);
        return ResponseEntity.ok(folder);
    }

}
