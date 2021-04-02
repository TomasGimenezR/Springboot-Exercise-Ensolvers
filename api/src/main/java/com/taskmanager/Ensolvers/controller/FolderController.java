package com.taskmanager.Ensolvers.controller;

import com.taskmanager.Ensolvers.exception.ResourceNotFoundException;
import com.taskmanager.Ensolvers.model.Folder;
import com.taskmanager.Ensolvers.repository.FolderRepository;
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

    @GetMapping("/folder")
    public List<Folder> getAllFolders() {
        return folderRepository.findAll();
    }

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

    @DeleteMapping("/folder/{id}")
    public ResponseEntity<Folder> deleteFolder(@PathVariable Long id) {
        Folder folder = folderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't find Folder with Id " + id));
        folderRepository.delete(folder);
        return ResponseEntity.ok(folder);
    }

}
