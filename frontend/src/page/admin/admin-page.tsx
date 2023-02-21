import React, { useState } from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import deleteProject from "../../api/delete-project";
import editProject from "../../api/edit-project";
import FetchAllProjects from "../../api/fetch-all-projects";
import findCurriculum from "../../api/find-curriculum";
import ModalCurriculum from "../../components/modal-add-curriculum/modal-curriculum";
import ModalDelete from "../../components/modal-delete/modal-delete";
import FormModal from "../../components/modal-project-form/modal-form";
import ProjectCard from "../../components/project-card/project-card";
import ProjectItem from "../../components/project-item/project-item";
import { Title } from "../../global/GlobalStyle";
import ProjectModel from "../../types/ProjectModel";

import { Box, Container, PageContainer, ProjectList } from "./style";

export default function AdminPage() {
  const [isModalProject, setIsModalProject] = useState<boolean>(false);
  const [isModalCurriculum, setIsModalCurriculum] = useState<boolean>(false);
  const [isModalDelete, setIsModalDelete] = useState<boolean>(false);
  const [isModalEdit, setIsModalEdit] = useState<boolean>(false);
  const [project_id, setProjectId] = useState<number>(0);
  const [project_model, setProjectModel] = useState<ProjectModel>({
    id: 0,
    project_name: "",
    code_link: "",
    site_link: "",
    image_url: "test.com.br",
    type: "",
    tags: [],
  });

  const queryClient = useQueryClient();

  const { data: projects_data, isSuccess: isDeleted } = useQuery(
    "project_data",
    () => FetchAllProjects()
  );

  const { data: curriculumData } = useQuery("curriculum", () =>
    findCurriculum()
  );

  const { mutate: deleteMutatition } = useMutation(
    () => deleteProject(project_id),
    {
      onSuccess: () => {
        closeModalDelete();
        queryClient.invalidateQueries("project_data");
      },
    }
  );

  const openModalProject = () => {
    setIsModalProject(true);
  };

  const openModalEditProject = (project_data: ProjectModel) => {
    setProjectModel(project_data);
    setIsModalEdit(true);
  };

  const closeModalProject = () => {
    setIsModalProject(false);
    setIsModalEdit(false);
  };
  const openModalCurriculum = () => {
    setIsModalCurriculum(true);
  };
  const closeModalCurriculum = () => {
    setIsModalCurriculum(false);
  };
  const openModalDelete = (project_id: number) => {
    setProjectId(project_id);
    setIsModalDelete(true);
  };
  const closeModalDelete = () => {
    setIsModalDelete(false);
  };
  const openCurriculum = () => {
    window.open(curriculumData.curriculumLink, "_blank");
  };

  return (
    <>
      {isModalProject ? <FormModal closeModal={closeModalProject} /> : null}

      {isModalCurriculum ? (
        <ModalCurriculum closeModal={closeModalCurriculum} />
      ) : null}
      {isModalDelete ? (
        <ModalDelete
          deleteProject={deleteMutatition}
          closeModal={closeModalDelete}
        />
      ) : null}
      {isModalEdit ? (
        <FormModal
          project_model={project_model}
          closeModal={closeModalProject}
        />
      ) : null}

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
              <button onClick={() => openModalProject()} className="btn-add">
                Add project
              </button>
              <button onClick={openModalCurriculum} className="btn-add">
                Add curriculum
              </button>
              <button className="btn-add" onClick={openCurriculum}>
                View actual curriculum
              </button>
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
              {projects_data?.map((project) => (
                <ProjectItem
                  key={project.id}
                  project_data={project}
                  openModalDelete={openModalDelete}
                  openModalEdit={openModalEditProject}
                />
              ))}
            </ProjectList>
          </Box>
        </Container>
      </PageContainer>
    </>
  );
}
