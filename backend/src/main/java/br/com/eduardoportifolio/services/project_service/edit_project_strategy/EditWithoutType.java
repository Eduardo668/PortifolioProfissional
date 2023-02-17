package br.com.eduardoportifolio.services.project_service.edit_project_strategy;

import br.com.eduardoportifolio.models.ProjectModel;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EditWithoutType implements EditProjectStrategy{
    @Override
    public void editUser(Optional<ProjectModel> project_data, ProjectModel edited_project) {
        if (edited_project.getType() == null){
            project_data.map(project ->{
                project.setType(project_data.get().getType());
                return project_data.get();
            });
        } else {
            project_data.map(project ->{
                project.setType(edited_project.getType());
                return project_data.get();
            });
        }
    }
}
