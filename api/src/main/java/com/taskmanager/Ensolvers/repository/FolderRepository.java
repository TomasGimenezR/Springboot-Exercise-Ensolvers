package com.taskmanager.Ensolvers.repository;

import com.taskmanager.Ensolvers.model.Folder;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FolderRepository extends JpaRepository<Folder, Long> {
}
