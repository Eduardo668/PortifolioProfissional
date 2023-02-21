import React, { useState } from "react";
import Filter from "../../components/filter/filter";
import ProjectCard from "../../components/project-card/project-card";
import { Section, Title } from "../../global/GlobalStyle";
import { ProjectsBox, ProjectsContainer } from "./style";
import { useQuery } from "react-query";
import FetchAllProjects from "../../api/fetch-all-projects";

export default function Projects() {
  const [type, setType] = useState<string>("all");
  const normal_color  = "rgba(57, 62, 70)"
  const active_color = "#00ADB5"



  const { data: all_project_data } = useQuery("all_data", () =>
    FetchAllProjects()
  );

  const setTypeAll = () => {
    setType("all");
  };

  const setTypeBackend = () => {
    setType("backend");
  };

  const setTypeFullstack = () => {
    setType("fullstack");
  };

  return (
    <Section id="projects">
      <ProjectsContainer>
        <div className="div-title">
          <Title theme={{ color: "white", font_size: "2.5em" }}>Meus</Title>
          <Title
            theme={{
              color: "#00ADB5",
              margin_left: "10px",
              font_size: "2.5em",
            }}
          >
            Projetos
          </Title>
        </div>
        <div className="div-filter">
          <Filter bg_color={type == "all" ? active_color:normal_color} setType={setTypeAll} name="All" />
          <Filter bg_color={type == "fullstack" ? active_color:normal_color} setType={setTypeFullstack} name="Fullstack" />
          <Filter bg_color={type == "backend" ? active_color:normal_color}  setType={setTypeBackend} name="Backend" />
        </div>
        <ProjectsBox>
          <div className="div-cards">
            {type == "all"
              ? all_project_data?.map((project) => (
                  <ProjectCard key={project.id} project_data={project} />
                ))
              : null}

            {type == "fullstack"
              ? all_project_data?.map((project) =>
                  project.type == "fullstack" ? (
                    <ProjectCard key={project.id} project_data={project} />
                  ) : null
                )
              : null}
               {type == "backend"
              ? all_project_data?.map((project) =>
                  project.type == "backend" ? (
                    <ProjectCard key={project.id} project_data={project} />
                  ) : null
                )
              : null}
          </div>
        </ProjectsBox>
      </ProjectsContainer>
    </Section>
  );
}
