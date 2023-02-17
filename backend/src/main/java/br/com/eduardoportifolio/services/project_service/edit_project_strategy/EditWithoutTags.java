package br.com.eduardoportifolio.services.project_service.edit_project_strategy;

import br.com.eduardoportifolio.models.ProjectModel;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EditWithoutTags implements EditProjectStrategy{
    @Override
    public void editUser(Optional<ProjectModel> project_data, ProjectModel edited_project) {
        if (edited_project.getTags() == null){
            project_data.map(project ->{
                project.setTags(project_data.get().getTags());
                return project_data.get();
            });
        } else {
            project_data.map(project ->{
                project.setTags(edited_project.getTags());
                return project_data.get();
            });
        }
    }
}
