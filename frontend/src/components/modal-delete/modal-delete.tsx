import React, { useEffect } from "react";
import {
  BackgroundModal,
  ButtonModal,
  ModalFooter,
} from "../../global/GlobalStyle";
import { ModalContainer } from "./style";
import AOS from "aos";

type Props = {
  closeModal: () => void,
  deleteProject:()=>void
};

export default function ModalDelete({ closeModal, deleteProject }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <BackgroundModal>
      <ModalContainer data-aos="fade-up">
        <div className="div-paragraph">
          <h2 className="title">Voce deseja deletar este projeto?</h2>
        </div>
        <ModalFooter>
          <ButtonModal onClick={()=>deleteProject()} theme={{ bgColor: "#00ADB5" }}>Sim</ButtonModal>
          <ButtonModal onClick={closeModal} theme={{ bgColor: "#222222" }}>
            Não
          </ButtonModal>
        </ModalFooter>
      </ModalContainer>
    </BackgroundModal>
  );
}
