import React from "react";
import Filter from "../../components/filter/filter";
import ProjectCard from "../../components/project-card/project-card";
import { Section, Title } from "../../global/GlobalStyle";
import { ProjectsBox, ProjectsContainer } from "./style";

export default function Projects() {
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
          <Filter name="All" />
          <Filter name="Fullstack" />
          <Filter name="Backend" />
        </div>
        <ProjectsBox>
          <div className="div-cards">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
           
             
          </div>
        </ProjectsBox>
      </ProjectsContainer>
    </Section>
  );
}
