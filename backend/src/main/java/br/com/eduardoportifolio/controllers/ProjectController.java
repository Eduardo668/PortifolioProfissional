package br.com.eduardoportifolio.controllers;

import br.com.eduardoportifolio.models.ProjectModel;
import br.com.eduardoportifolio.services.project_service.ProjectServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/project")
@CrossOrigin("https://eduardoportifolio.netlify.app/")
public class ProjectController {

    private final ProjectServiceImpl projectService;

    @GetMapping("/findAllProjects")
    public ResponseEntity<List<ProjectModel>> findAllProjects(){
        return ResponseEntity.ok(projectService.findAllProjects());
    }

    @PostMapping("/createProject")
    public ResponseEntity<String> createProject(@RequestBody ProjectModel newProject){
        projectService.createProject(newProject);
        return ResponseEntity.ok().body("OK");
    }

    // @GetMapping("/filterProjects/type={type}")
    // public ResponseEntity<List<ProjectModel>> filterProjects(@PathVariable("type") String type){
    //     return ResponseEntity.ok().body(projectService.findProjectsByType(type));
    // }

    @DeleteMapping("/deleteProject/id={project_id}")
    public void deleteProject(@PathVariable("project_id") Long project_id){
        projectService.deleteProject(project_id);
    }

    @PutMapping("/editProject/id={project_id}")
    public void editProject(@PathVariable("project_id") Long project_id, @RequestBody ProjectModel edited_project){
        projectService.editProject(project_id, edited_project);
    }

}
