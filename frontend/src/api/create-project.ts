import ProjectModel from "../types/ProjectModel";
import { Api } from "./api";
import { accessToken } from "./login";

export default async function createProject({
  project_name,
  code_link,
  site_link,
  image_url,
  type,
  tags,
}: ProjectModel) {
  const newProject = {
    project_name,
    code_link,
    site_link,
    image_url,
    type,
    tags,
  }; 

  const response = await Api.post(
    "/api/project/createProject",
    newProject,
    {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
    }
  );

  if (response.status === 200) {
    alert("Project Created with Success!!");
  }
}
