package br.com.eduardoportifolio.services.project_service;

import br.com.eduardoportifolio.models.ProjectModel;
import br.com.eduardoportifolio.repositories.ProjectRepository;
import br.com.eduardoportifolio.services.project_service.edit_project_strategy.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final EditWithoutProjectName editWithoutProjectName;
    private final EditWithoutCodeLink editWithoutCodeLink;
    private final EditWithoutImageUrl editWithoutImageUrl;
    private final EditWithoutTags editWithoutTags;
    private final EditWithoutSiteLink editWithoutSiteLink;
    private final EditWithoutType editWithoutType;

    @Override
    public void createProject(ProjectModel newProject) {
        try{
            projectRepository.save(newProject);
        } catch (Exception error){
            throw new RuntimeException("An error occurred while trying to create a project: ", error);
        }
    }

    @Override
    public List<ProjectModel> findAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public void deleteProject(Long project_id) {
        try{
            Optional<ProjectModel> project_data = projectRepository.findById(project_id);
            if (project_data.isEmpty()){
                throw new RuntimeException("This project doesn't exist");
            }

            projectRepository.delete(project_data.get());
        } catch (Exception error){
            throw new RuntimeException("An error occurred while trying to delete a project: ", error);
        }
    }

    @Override
    public void editProject(Long project_id, ProjectModel edited_project) {
        try{
            Optional<ProjectModel> project_data = projectRepository.findById(project_id);
            if (project_data.isEmpty()){
                throw new RuntimeException("This project doesn't exist");
            }
            editWithoutProjectName.editUser(project_data, edited_project);
            editWithoutCodeLink.editUser(project_data, edited_project);
            editWithoutSiteLink.editUser(project_data, edited_project);
            editWithoutType.editUser(project_data, edited_project);
            editWithoutTags.editUser(project_data, edited_project);
            editWithoutImageUrl.editUser(project_data, edited_project);

            projectRepository.save(project_data.get());


        } catch (Exception error){
            throw new RuntimeException("An error occurred while trying to edit a project: ", error);
        }
    }

    @Override
    public List<ProjectModel> findProjectsByType(String type) {
        try{
            return projectRepository.findByType(type);
        }catch (Exception error){
            throw new RuntimeException("An error occurred while trying to find projects by type: ", error);
        }
    }
}
