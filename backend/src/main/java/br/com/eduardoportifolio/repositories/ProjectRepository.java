package br.com.eduardoportifolio.repositories;

import br.com.eduardoportifolio.models.ProjectModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectModel, Long> {

    List<ProjectModel> findByType(String type);

}
