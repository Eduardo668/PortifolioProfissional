import React, { useEffect } from "react";
import { BackgroundModal, Title } from "../../global/GlobalStyle";
import { ButtonModal, ModalFooter } from "../../global/GlobalStyle";
import { ModalContainer } from "./style";
import AOS from "aos";

type Props = {
  closeModal: () => void;
};

export default function ModalCurriculum({ closeModal }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <BackgroundModal>
      <ModalContainer data-aos="fade-up">
        <div className="div-title">
          <h2 className="modal-title">Adicionar Curriculo</h2>
        </div>
        <div className="div-input-file">
          <input className="input-file" type="file" />
        </div>
        <ModalFooter>
          <ButtonModal theme={{ bgColor: "#00ADB5" }}>Adicionar</ButtonModal>
          <ButtonModal onClick={closeModal} theme={{ bgColor: "#222222" }}>
            Cancelar
          </ButtonModal>
        </ModalFooter>
      </ModalContainer>
    </BackgroundModal>
  );
}
