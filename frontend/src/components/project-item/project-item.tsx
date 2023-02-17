import React from "react";
import { ItemContainer } from "./style";
import SiteImg from "../../assets/site-img.svg";
import { Title } from "../../global/GlobalStyle";
import SiteImg2 from "../../assets/site2.jpg";
import Tag from "../tag/tag";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

type Props = {
  openModalDelete: () => void;
};

export default function ProjectItem({ openModalDelete }: Props) {
  return (
    <ItemContainer>
      <div className="div-image">
        <img className="img-project" src={SiteImg} alt="" />
      </div>
      <div className="div-item-title">
        <h2 className="project-title">Rede social - ID : 1</h2>
      </div>
      <div className="div-tags">
        <Tag name="react" />
        <Tag name="react" />
        <Tag name="react" />
        <Tag name="react" />
        <Tag name="react" />
      </div>
      <div className="btns-div">
        <button className="btn-edit">
          {" "}
          <AiOutlineEdit size={"1.5em"} className="btn-icon" /> <h4>Edit</h4>
        </button>
        <button onClick={openModalDelete} className="btn-delete">
          <AiOutlineDelete size={"1.5em"} className="btn-icon" />{" "}
          <h4>Delete</h4>
        </button>
      </div>
    </ItemContainer>
  );
}
