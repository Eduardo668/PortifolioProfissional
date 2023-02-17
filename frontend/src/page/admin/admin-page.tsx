import React, { useState } from "react";
import Header from "../../components/header/header";
import ModalCurriculum from "../../components/modal-add-curriculum/modal-curriculum";
import ModalDelete from "../../components/modal-delete/modal-delete";
import FormModal from "../../components/modal-project-form/modal-form";
import ProjectCard from "../../components/project-card/project-card";
import ProjectItem from "../../components/project-item/project-item";
import { Title } from "../../global/GlobalStyle";

import { Box, Container, PageContainer, ProjectList } from "./style";

export default function AdminPage() {
  const [isModalProject, setIsModalProject] = useState<boolean>(false);
  const [isModalCurriculum, setIsModalCurriculum] = useState<boolean>(false);
  const [isModalDelete, setIsModalDelete] = useState<boolean>(false);

  const openModalProject = () => {
    setIsModalProject(true);
  };
  const closeModalProject = () => {
    setIsModalProject(false);
  };
  const openModalCurriculum = () => {
    setIsModalCurriculum(true);
  };
  const closeModalCurriculum = () => {
    setIsModalCurriculum(false);
  };
  const openModalDelete = () => {
    setIsModalDelete(true);
  };
  const closeModalDelete = () => {
    setIsModalDelete(false);
  };

  return (
    <>
      {isModalProject ? <FormModal closeModal={closeModalProject} /> : null}
      {isModalCurriculum ? (
        <ModalCurriculum closeModal={closeModalCurriculum} />
      ) : null}
      {isModalDelete ? <ModalDelete closeModal={closeModalDelete} /> : null}

      <PageContainer>
        <div className="div-admin-title">
          <Title theme={{ color: "white", font_size: "3em" }}>Admin</Title>
          <Title
            theme={{ color: "#00ADB5", margin_left: "10px", font_size: "3em" }}
          >
            page
          </Title>
        </div>
        <Container>
          <Box theme={{ height: "30%", direction: "column" }}>
            <div className="div-btns">
              <button onClick={openModalProject} className="btn-add">
                Add project
              </button>
              <button onClick={openModalCurriculum} className="btn-add">
                Add curriculum
              </button>
              <button className="btn-add">Download actual curriculum</button>
            </div>
            <div className="div-title">
              <Title theme={{ color: "white", font_size: "2.5em" }}>
                Projects
              </Title>
              <Title
                theme={{
                  color: "#00ADB5",
                  margin_left: "10px",
                  font_size: "2.5em",
                }}
              >
                List
              </Title>
            </div>
          </Box>
          <Box theme={{ height: "75%", direction: "column", scroll_y: "auto" }}>
            <ProjectList>
              <ProjectItem openModalDelete={openModalDelete} />
            </ProjectList>
          </Box>
        </Container>
      </PageContainer>
    </>
  );
}
