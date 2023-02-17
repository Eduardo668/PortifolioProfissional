package br.com.eduardoportifolio.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@ToString
public class ProjectModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 100)
    private String project_name;

    @Size(max = 300)
    private String site_link;

    @NotNull
    @Size(max = 300)
    private String code_link;

    @NotNull
    @Size(max = 150)
    private String type;

    @NotNull
    @Size(max = 350)
    private String image_url;

    @NotNull
    @ElementCollection
    private List<String> tags;



}
