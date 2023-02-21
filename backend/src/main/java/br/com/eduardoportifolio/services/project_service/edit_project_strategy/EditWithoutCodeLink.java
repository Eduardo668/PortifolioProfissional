package br.com.eduardoportifolio.services.project_service.edit_project_strategy;

import br.com.eduardoportifolio.models.ProjectModel;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EditWithoutCodeLink implements EditProjectStrategy {

    @Override
    public void editUser(Optional<ProjectModel> project_data, ProjectModel edited_project) {
        if (edited_project.getCode_link() == null || edited_project.getCode_link() == ""){

            project_data.map(project ->{
                project.setCode_link(project_data.get().getCode_link());
                return project_data.get();
            });
        } else {
            project_data.map(project ->{
                project.setCode_link(edited_project.getCode_link());
                return project_data.get();
            });
        }
    }
}
