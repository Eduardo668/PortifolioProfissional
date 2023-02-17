import React, { useEffect, useRef, useState } from "react";
import { Title } from "../../global/GlobalStyle";
import { BackgroundModal } from "../../global/GlobalStyle";
import Tag from "../tag/tag";
import AOS from "aos";
import { ButtonModal, ModalFooter } from "../../global/GlobalStyle";
import { InputText, ModalContainer } from "./style";
// import { tag_array } from "./tag-array";

type Props = {
  closeModal: () => void;
};

export default function FormModal({ closeModal }: Props) {
  const [tag, setTag] = useState<string>("");

  const [tags, setTags] = useState<string[]>([]);

  const handleTag = (tag: string) => {
    setTag(tag);
  };

  const addTagInTagsList = () => {
    setTags((value) => [...value, tag]);
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <BackgroundModal>
      <ModalContainer data-aos="fade-up">
        <div className="div-title">
          <Title theme={{ color: "white", font_size: "2em" }}>Adicionar</Title>
        </div>
        <div className="div-form">
          <div className="input-div">
            <label className="input-text-label">Nome do projeto</label>
            <InputText placeholder="Ex: Rede social..." type={"text"} />
          </div>
          <div className="input-div">
            <label className="input-text-label">
              Link Site (Caso for fullstack)
            </label>
            <InputText placeholder="Ex: redesocial.com..." type={"text"} />
          </div>
          <div className="input-div">
            <label className="input-text-label">Link codigo fonte</label>
            <InputText placeholder="Ex: github.com..." type={"text"} />
          </div>
          <div className="input-div">
            <label className="input-text-label">Tipo do projeto</label>
            <select className="input-type">
              <option value="">Selecione uma das opções</option>
              <option value="fullstack">Fullstack</option>
              <option value="backend">Backend</option>
            </select>
          </div>
          <div className="input-div">
            <label className="input-text-label">Adicionar Tags</label>
            <InputText
              // ref={}
              value={tag}
              onChange={(e) => handleTag(e.target.value)}
              placeholder="React, Java, Docker..."
              type={"text"}
            />
            <button onClick={addTagInTagsList} className="btn-add-tags">
              Adicionar
            </button>
            <div className="added-tags-div">
              {tags.map((tag: string) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </div>
          <div className="input-div">
            <label className="input-text-label">Adicionar Imagem</label>
            <input type="file" className="input-image" />
            <div className="image-div"></div>
          </div>
        </div>
        <ModalFooter theme={{ height: "15%" }}>
          <ButtonModal theme={{ bgColor: "#00ADB5" }}>Adicionar</ButtonModal>
          <ButtonModal onClick={closeModal} theme={{ bgColor: "#222222" }}>
            Cancelar
          </ButtonModal>
        </ModalFooter>
      </ModalContainer>
    </BackgroundModal>
  );
}
