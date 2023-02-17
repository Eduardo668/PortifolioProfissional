package br.com.eduardoportifolio.services.project_service.edit_project_strategy;

import br.com.eduardoportifolio.models.ProjectModel;

import java.util.Optional;

public interface EditProjectStrategy {

    void editUser(Optional<ProjectModel> project_data,ProjectModel edited_project);

}
