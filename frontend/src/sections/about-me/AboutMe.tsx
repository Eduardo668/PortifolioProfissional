import React, { useEffect } from "react";
import { Section, Title } from "../../global/GlobalStyle";
import { AboutMeContainer, BoxAboutMe } from "./style";
import ImageAboutMe from "../../assets/about-me-img.svg";

export default function AboutMe() {


  return (
    <Section id="about-me">
      <AboutMeContainer>
        <BoxAboutMe
          theme={{
            width: "75%",
            height: "90%",
            align: "center",
            direction: "column",
          }}
        >
          <div className="div-titles">
            <Title theme={{ color: "white", font_size: "3em" }}>Sobre</Title>
            <Title
              theme={{
                color: "#00ADB5",
                font_size: "3em",
                margin_left: "20px",
              }}
            >
              mim
            </Title>
          </div>
          <div className="div-paragraph">
            <p className="paragraph">
              Olá meu nome é Eduardo Paixão e sou um desenvolvedor fullstack,
              tenho conhecimento no desenvolvimento de Rest Apis e web pages,
              cursei técnico em desenvolvimento de sistemas enquanto estava no
              ensino médio e hoje procuro oportunidades de adentrar ao mercado
              de desenvolvimento de software.
            </p>
          </div>
        </BoxAboutMe>
        <BoxAboutMe
          theme={{
            width: "100%",
            height: "100%",
            direction: "row",
          }}
        >
          <img className="img-about-me" src={ImageAboutMe} alt="about-me-img" />
        </BoxAboutMe>
      </AboutMeContainer>
    </Section>
  );
}
