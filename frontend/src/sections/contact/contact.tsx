import React from "react";
import ExtraCard from "../../components/extra-card/extra-card";
import { Section, Title } from "../../global/GlobalStyle";
import { ContactContainer } from "./style";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";

export default function Contact() {
  return (
    <Section id="contact">
      <ContactContainer>
        <div className="div-title">
          <Title theme={{ color: "white", font_size: "3em" }}>Extra</Title>
        </div>
        <div className="div-card">
          <div className="cards">
            <ExtraCard
              title="Email"
              buttonTitle="Enviar email"
              btnIcon={<HiOutlineMail size={"1.5em"} />}
              isEmailCard={true}
              paragraph={
                "Caso esteja interassado em me contatar você pode me enviar um mensagem no seguinte email : eduardosehn20@gmail.com"
              }
            />
            <ExtraCard
              title="Conversar"
              link={"https://wa.me/48991589297"}
              buttonTitle="Enviar mensagem"
              btnIcon={<AiOutlineWhatsApp size={"1.5em"} />}
              paragraph={
                "Caso queira falar comigo envia um mensagem em meu WhatsApp clicando no botão baixo."
              }
            />
            <ExtraCard
              title="Código Fonte"
              link={"https://github.com/Eduardo668/PortifolioProfissional"}
              buttonTitle="Ver código fonte"
              btnIcon={<AiFillGithub size={"1.5em"} />}
              paragraph={ 
                "Este portfólio é um projeto fullstack, clique no botão abaixo para acessar o código fonte."
              }
            />
          </div>
        </div>
      </ContactContainer>
    </Section>
  );
}
