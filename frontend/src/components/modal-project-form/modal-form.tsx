import React, { useEffect, useRef, useState } from "react";
import { Title } from "../../global/GlobalStyle";
import { BackgroundModal } from "../../global/GlobalStyle";
import Tag from "../tag/tag";
import AOS from "aos";
import { ButtonModal, ModalFooter } from "../../global/GlobalStyle";
import { InputText, ModalContainer } from "./style";
import { useMutation, QueryClient, useQueryClient } from "react-query";
import createProject from "../../api/create-project";
import ProjectModel from "../../types/ProjectModel";
import editProject from "../../api/edit-project";
import uploadFile from "../../api/upload-to-firebase";
// import { tag_array } from "./tag-array";
import SiteImg from "../../assets/site-img.svg";

type Props = {
  closeModal: () => void;
  project_model?: ProjectModel;
};

export default function FormModal({ closeModal, project_model }: Props) {
  const [project_name, setProjectName] = useState<string>("");
  const [code_link, setCodeLink] = useState<string>("");
  const [site_link, setSiteLink] = useState<string>("");
  const [image_url, setImageUrl] = useState<string>("");
  const [type, setType] = useState<string>("");
  const id: number = 0;
  const [file, setFile] = useState<File | any>(new File([], ""));
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const queryClient = useQueryClient();

  const { mutate: create, isSuccess } = useMutation(
    () =>
      createProject({
        id,
        project_name,
        code_link,
        site_link,
        image_url,
        type,
        tags,
      }),
    {
      onSuccess: () => {
        closeModal();
        queryClient.invalidateQueries("project_data");
      },
    }
  );

  const { mutate: edit, isSuccess: isEdited } = useMutation(
    () =>
      editProject(project_model?.id, {
        id: 0,
        project_name: project_name,
        code_link: code_link,
        site_link: site_link,
        image_url: image_url,
        type: type,
        tags: tags,
      }),
    {
      onSuccess: () => {
        closeModal();
        queryClient.invalidateQueries("project_data");
      },
    }
  );

  const { mutate: fileUpload } = useMutation(() => uploadFile(file), {
    onSuccess: (url) => setImageUrl(url),
  });

  const handleProjectName = (value: string) => {
    setProjectName(value);
  };
  const handleCodeLink = (value: string) => {
    setCodeLink(value);
  };
  const handleSiteLink = (value: string) => {
    setSiteLink(value);
  };
  const handleImageUrl = (value: string) => {
    setImageUrl(value);
  };
  const handleType = (value: string) => {
    setType(value);
  };
  const handleTag = (tag: string) => {
    setTag(tag);
  };
  const handleFile = (file: any) => {
    setFile(file.files[0]);
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
          <Title theme={{ color: "white", font_size: "2em" }}>
            {project_model == null ? (
              <>Adicionar</>
            ) : (
              <>Editar - ID : {project_model.id}</>
            )}
          </Title>
        </div>
        <div className="div-form">
          <div className="input-div">
            <label className="input-text-label">Nome do projeto</label>
            <InputText
              onChange={(e) => handleProjectName(e.target.value)}
              placeholder={
                project_model == null
                  ? "Ex: Rede social..."
                  : project_model.project_name
              }
              type={"text"}
            />
          </div>
          <div className="input-div">
            <label className="input-text-label">
              Link Site (Caso for fullstack)
            </label>
            <InputText
              onChange={(e) => handleSiteLink(e.target.value)}
              placeholder={
                project_model == null
                  ? "Ex: redesocial.com..."
                  : project_model.site_link
              }
              type={"text"}
            />
          </div>
          <div className="input-div">
            <label className="input-text-label">Link codigo fonte</label>
            <InputText
              onChange={(e) => handleCodeLink(e.target.value)}
              placeholder={
                project_model == null
                  ? "Ex: github.com..."
                  : project_model.code_link
              }
              type={"text"}
            />
          </div>
          <div className="input-div">
            <label className="input-text-label">
              {" "}
              {project_model == null ? (
                <> Tipo do projeto</>
              ) : (
                <>Tipo do projeto : {project_model.type}</>
              )}{" "}
            </label>
            <select
              onChange={(e) => handleType(e.target.value)}
              className="input-type"
            >
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
            <button onClick={addTagInTagsList} className="btn-add">
              Adicionar
            </button>
            <div className="added-tags-div">
              {project_model == null
                ? tags.map((tag: string) => <Tag key={tag} name={tag} />)
                : null}
              {project_model != null && tags.length == 0
                ? project_model.tags.map((tag) => <Tag key={tag} name={tag} />)
                : tags.map((tag: string) => <Tag key={tag} name={tag} />)}
            </div>
          </div>
          <div className="input-div">
            <label className="input-text-label">Adicionar Imagem</label>
            <input
              type="file"
              onChange={(e) => handleFile(e.target)}
              className="input-image"
            />
            <div className="image-div">
              <img src={URL.createObjectURL(file)} alt="" />
            </div>
            <button onClick={() => fileUpload()} className="btn-add">
              Adicionar imagem
            </button>
          </div>
        </div>
        <ModalFooter theme={{ height: "15%" }}>
          <ButtonModal
            onClick={() => {
              project_model == null ? create() : edit();
            }}
            theme={{ bgColor: "#00ADB5" }}
          >
            {project_model == null ? <>Adicionar</> : <>Editar</>}
          </ButtonModal>
          <ButtonModal onClick={closeModal} theme={{ bgColor: "#222222" }}>
            Cancelar
          </ButtonModal>
        </ModalFooter>
      </ModalContainer>
    </BackgroundModal>
  );
}
