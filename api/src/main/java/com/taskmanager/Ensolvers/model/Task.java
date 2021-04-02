package com.taskmanager.Ensolvers.model;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private long id;
    @Column(name = "description")
    private String description;
    @Column(name = "completed")
    private boolean completed;
    @Column(name = "folderId")
    private long folderId;

    public Task() {
    }

    public Task(String description, boolean completed) {
        this.description = description;
        this.completed = completed;
        this.folderId = -1;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public long getFolderId() {
        return folderId;
    }

    public void setFolderId(long folderId) {
        this.folderId = folderId;
    }
}
