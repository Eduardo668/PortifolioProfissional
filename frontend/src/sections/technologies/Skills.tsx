import React from "react";
import SkillItem from "../../components/skill-item/SkillItem";
import { Section, Title } from "../../global/GlobalStyle";
import { BoxSkills,SkillsContainer } from "./style";
import JavaIcon from "../../assets/java.svg";
import SpringIcon from "../../assets/spring.svg";
import PgIcon from "../../assets/pg.svg";
import DockerIcon from "../../assets/docker.svg";
import LinuxIcon from "../../assets/linux.png";
import TypescriptIcon from "../../assets/typescript.svg";
import JsIcon from "../../assets/javascript.svg";
import HtmlIcon from "../../assets/html-1.svg";
import CssIcon from "../../assets/css-3.svg";
import ReactIcon from "../../assets/react.svg";
import ButtonScroll from "../../components/btn-scroll/btn-scroll";
import { scrollToProjects } from "../../functions/ScrollFuntions";

export default function Skills(){

    return (
        <Section id="skills" >
            <SkillsContainer>
                <div className="div-title" >
                    <Title theme={{color:"white",font_size:"3em"}} >Principais</Title>
                    <Title theme={{color:"#00ADB5",font_size:"3em", margin_left:"10px"}} >Skills</Title>
                </div>
              <BoxSkills>
                    <SkillItem title="Java" image={JavaIcon} />
                    <SkillItem title="Spring" image={SpringIcon} />
                    <SkillItem title="Postgres" image={PgIcon} />
                    <SkillItem title="Docker" image={DockerIcon} />
                    <SkillItem title="Linux" image={LinuxIcon} />
                    <SkillItem title="Typescript" image={TypescriptIcon} />
                    <SkillItem title="Html 5" image={HtmlIcon} />
                    <SkillItem title="Javascript" image={JsIcon} />
                    <SkillItem title="CSS 3" image={CssIcon} />
                    <SkillItem title="React" image={ReactIcon} />
                    
              </BoxSkills>
              <div className="div-scroll-projects" >
                    <ButtonScroll scrollFunction={scrollToProjects} />
              </div>
            </SkillsContainer> 
        </Section>
    )


}