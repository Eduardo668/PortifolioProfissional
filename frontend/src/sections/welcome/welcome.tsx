import React from "react";
import { Section } from "../../global/GlobalStyle";
import { BoxWelcome, WelcomeContainer} from "./style";
import { Title } from "../../global/GlobalStyle";
import ImageWelcome from "../../assets/ImageWelcome.svg";
import DownloadIcon from "../../assets/download.svg"
import Arrow from "../../assets/Seta.svg"
import { scrollToAboutMe } from "../../functions/ScrollFuntions";
export default function Welcome() {


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
              <button type={"button"} className="btn-download" >Baixar meu curriculo <img src={DownloadIcon} alt="" /></button>
          </div>
          <div className="scroll-btn-div">
              <button onClick={scrollToAboutMe} className="scroll-btn" >
                  <img src={Arrow} alt="" />
              </button>
          </div>
        </BoxWelcome>
        <BoxWelcome>
          <img className="img-welcome" src={ImageWelcome} alt="image-welcome" />
        </BoxWelcome>
      </WelcomeContainer>
    </Section>
  );
}
