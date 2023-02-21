import React from "react";
import { Section } from "../../global/GlobalStyle";
import { BoxWelcome, WelcomeContainer} from "./style";
import { Title } from "../../global/GlobalStyle";
import ImageWelcome from "../../assets/ImageWelcome.svg";
import DownloadIcon from "../../assets/download.svg"
import { scrollToAboutMe } from "../../functions/ScrollFuntions";
import ButtonScroll from "../../components/btn-scroll/btn-scroll";
import { IoMdPaper } from "react-icons/io";
import {useQuery} from "react-query"
import findCurriculum from "../../api/find-curriculum";
export default function Welcome() {

  const {data:curriculumData} = useQuery("curriculum", ()=>findCurriculum());

  const openCurriculum = ()=>{
    window.open(curriculumData.curriculumLink, "_blank")
  }

  return (
    <Section id="home">
      <WelcomeContainer>
        <BoxWelcome theme={{align:"center", direction:"column"}} >
          <div className="title-div">
            <Title theme={{
              color:"white",
              font_size:"4.5em"
          }}>Bem vindo <br /> ao meu</Title>
            <Title theme={{
              color:"#00ADB5",
              font_size:"4.5em"
              }}>Portifolio</Title>
          </div>
          <div className="btn-div">
              <button onClick={openCurriculum} type={"button"} className="btn-currriculum" ><h4>Ver meu curriculo </h4><IoMdPaper size={"2em"} /> </button>
          </div>
          <div className="scroll-btn-div">
             <ButtonScroll scrollFunction={scrollToAboutMe}  />
          </div>
        </BoxWelcome>
        <BoxWelcome>
          <img className="img-welcome" src={ImageWelcome} alt="image-welcome" />
        </BoxWelcome>
      </WelcomeContainer>
    </Section>
  );
}
