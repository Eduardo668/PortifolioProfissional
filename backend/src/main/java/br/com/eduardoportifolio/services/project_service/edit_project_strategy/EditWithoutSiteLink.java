package br.com.eduardoportifolio.services.project_service.edit_project_strategy;

import br.com.eduardoportifolio.models.ProjectModel;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EditWithoutSiteLink implements EditProjectStrategy{
    @Override
    public void editUser(Optional<ProjectModel> project_data, ProjectModel edited_project) {
        if (edited_project.getSite_link() == null){
            project_data.map(project ->{
                project.setSite_link(project_data.get().getSite_link() );
                return project_data.get();
            });
        } else {
            project_data.map(project ->{
                project.setSite_link(edited_project.getSite_link());
                return project_data.get();
            });
        }
    }
}
