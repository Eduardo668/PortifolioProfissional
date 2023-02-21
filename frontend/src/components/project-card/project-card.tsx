import React from "react";
import { BtnCard, Card } from "./style";
import SiteImg from "../../assets/site-img.svg";
import Tag from "../tag/tag";
import { AiOutlineEye } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import ProjectModel from "../../types/ProjectModel";

type Props = {
  project_data: ProjectModel;
};

export default function ProjectCard({ project_data }: Props) {
  const sendToSite = () => {
    window.open(project_data.site_link, "__blank");
  };

  const sendToCode = () => {
    window.open(project_data.code_link, "__blank");
  };

  return (
    <Card>
      <div className="div-image">
        <img className="project-img" src={project_data.image_url} alt="" />
      </div>
      <div className="div-card-title">
        <h2 className="title">{project_data.project_name}</h2>
      </div>
      <div className="div-tags">
        {project_data.tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <div className="div-buttons">
        {project_data.type == "fullstack" ? (
          <>
            <BtnCard
              onClick={sendToSite}
              theme={{ bgColor: " #222831", bgHover: "#122831" }}
            >
              <AiOutlineEye size={"20px"} /> <h4>Ver</h4>
            </BtnCard>
            <BtnCard
              onClick={sendToCode}
              theme={{ bgColor: "black", bgHover: "#151515" }}
            >
              <BsCodeSlash size={"20px"} /> <h4>Code</h4>
            </BtnCard>
          </>
        ) : null}
        {project_data.type == "backend" ? (
          <BtnCard
            onClick={sendToCode}
            theme={{ bgColor: "black", bgHover: "#151515" }}
          >
            <BsCodeSlash size={"20px"} /> <h4>Code</h4>
          </BtnCard>
        ) : null}
      </div>
    </Card>
  );
}
