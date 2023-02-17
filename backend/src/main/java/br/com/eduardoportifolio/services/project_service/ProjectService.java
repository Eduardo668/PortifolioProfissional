package br.com.eduardoportifolio.services.project_service;

import br.com.eduardoportifolio.models.ProjectModel;

import java.util.List;

public interface ProjectService {

    void createProject(ProjectModel newProject);

    List<ProjectModel> findAllProjects();

    void deleteProject(Long project_id);

    void editProject(Long project_id, ProjectModel edited_project);

    List<ProjectModel> findProjectsByType(String type);


}
