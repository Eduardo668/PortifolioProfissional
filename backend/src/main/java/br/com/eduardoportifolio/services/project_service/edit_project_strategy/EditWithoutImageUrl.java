package br.com.eduardoportifolio.services.project_service.edit_project_strategy;

import br.com.eduardoportifolio.models.ProjectModel;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EditWithoutImageUrl implements EditProjectStrategy{
    @Override
    public void editUser(Optional<ProjectModel> project_data, ProjectModel edited_project) {
        if (edited_project.getImage_url() == null || edited_project.getImage_url() == ""){
            project_data.map(project ->{
                project.setImage_url(project_data.get().getImage_url());
                return project_data.get();
            });
        }
        else {
            project_data.map(project ->{
                project.setImage_url(edited_project.getImage_url());
                return project_data.get();
            });
        }
    }
}
