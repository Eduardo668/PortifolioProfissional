import React, { useEffect, useState } from "react";
import { BackgroundModal, Title } from "../../global/GlobalStyle";
import { ButtonModal, ModalFooter } from "../../global/GlobalStyle";
import { ModalContainer } from "./style";
import AOS from "aos";
import { useMutation } from "react-query";
import uploadFile from "../../api/upload-to-firebase";
import addCurriculum from "../../api/add-curriculum";

type Props = {
  closeModal: () => void;
};

export default function ModalCurriculum({ closeModal }: Props) {

  const [file, setFile] = useState<File>(new File([], ""));
  const [curriculumLink, setCurriculumLink] = useState<string>("");

  const {mutate:fileUpload} = useMutation(()=>uploadFile(file), {
    onSuccess: (url)=>{
      setCurriculumLink(url);
      
    }
  });
  const {mutate:saveCurriculum} = useMutation(()=>addCurriculum(curriculumLink), {
    onSuccess:()=>closeModal()
  });

  const handleFile = (file:any)=>{
    setFile(file.files[0]);
  }


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
          <input onChange={(e)=>handleFile(e.target)} className="input-file" type="file" />
           <button onClick={()=>fileUpload()} >Adicionar Arquivo</button>
        </div>
       
        <ModalFooter>
          <ButtonModal onClick={()=>saveCurriculum()} theme={{ bgColor: "#00ADB5" }}>Salvar</ButtonModal>
          <ButtonModal onClick={closeModal} theme={{ bgColor: "#222222" }}>
            Cancelar
          </ButtonModal>
        </ModalFooter>
      </ModalContainer>
    </BackgroundModal>
  );
}
