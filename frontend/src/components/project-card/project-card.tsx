import React from "react"
import { BtnCard, Card } from "./style"
import SiteImg from "../../assets/site-img.svg"
import Tag from "../tag/tag"

export default function ProjectCard(){
    return (
        <Card>
            <div className="div-image" >
                <img className="project-img" src={SiteImg} alt="" />
            </div>
            <div className="div-card-title" >
                <h2 className="title" >Rede Social</h2>
            </div>
            <div className="div-tags" >
                <Tag name="React" />
                <Tag name="Typescript" />
                <Tag name="Java" />
                <Tag name="Spring" />
                <Tag name="Postgres" />
            </div>
            <div className="div-buttons">
                <BtnCard theme={{bgColor:" #222831", bgHover:"#122831"}} >Ver</BtnCard>
                <BtnCard theme={{bgColor:"black", bgHover:"#151515"}} >Code</BtnCard>
            </div>
        </Card>
    )
}