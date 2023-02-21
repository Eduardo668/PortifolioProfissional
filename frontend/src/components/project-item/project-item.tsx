import React from "react";
import { ItemContainer } from "./style";
import SiteImg from "../../assets/site-img.svg";
import { Title } from "../../global/GlobalStyle";
import SiteImg2 from "../../assets/site2.jpg";
import Tag from "../tag/tag";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import ProjectModel from "../../types/ProjectModel";
import DeleteProject from "../../api/delete-project";

type Props = {
  openModalDelete: (project_id:number) => void;
  project_data: ProjectModel;
  openModalEdit:(project_data:ProjectModel)=>void;
};

export default function ProjectItem({ openModalDelete, project_data, openModalEdit }: Props) {

  

  return (
    <ItemContainer>
      <div className="div-image">
        <img className="img-project" src={project_data.image_url} alt="" />
      </div>
      <div className="div-item-title">
        <h2 className="project-title">
          {project_data.project_name} - ID : {project_data.id}
        </h2>
      </div>
      <div className="div-tags">
        {project_data.tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <div className="btns-div">
        <button onClick={()=>openModalEdit(project_data)} className="btn-edit">
          {" "}
          <AiOutlineEdit size={"1.5em"} className="btn-icon" /> <h4>Edit</h4>
        </button>
        <button onClick={()=>openModalDelete(project_data.id)} className="btn-delete">
          <AiOutlineDelete size={"1.5em"} className="btn-icon" />{" "}
          <h4>Delete</h4>
        </button>
      </div>
    </ItemContainer>
  );
}
