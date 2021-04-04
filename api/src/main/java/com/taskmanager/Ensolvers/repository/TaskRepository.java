package com.taskmanager.Ensolvers.repository;

import com.taskmanager.Ensolvers.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    @Transactional
    @Modifying
    @Query("DELETE FROM tasks t WHERE t.folder_id=?1")
    void deleteTasksInFolder(long folder_id);

    @Query("SELECT t FROM tasks t WHERE t.id=?1;")
    List<Task> getTasksInFolder(long id);
}
