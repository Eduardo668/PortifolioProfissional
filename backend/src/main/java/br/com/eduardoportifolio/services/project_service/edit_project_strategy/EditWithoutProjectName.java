package br.com.eduardoportifolio.services.project_service.edit_project_strategy;

import br.com.eduardoportifolio.models.ProjectModel;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EditWithoutProjectName implements EditProjectStrategy{

    @Override
    public void editUser(Optional<ProjectModel> project_data, ProjectModel edited_project) {
        if (edited_project.getProject_name() == null  || edited_project.getProject_name() == ""){
            project_data.map(project ->{
                project.setProject_name(project_data.get().getProject_name());
                return project_data.get();
            });
        }else {
            project_data.map(project ->{
                project.setProject_name(edited_project.getProject_name());
                return project_data.get();
            });
        }
    }
}
