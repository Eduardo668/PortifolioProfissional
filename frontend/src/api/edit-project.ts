import ProjectModel from "../types/ProjectModel";
import { Api } from "./api";
import { accessToken } from "./login";

export default async function editProject(
  project_id: number | undefined,
  edited_project: ProjectModel
) {
  const response = await Api.put(
    `/api/project/editProject/id=${project_id}`,
    {
      project_name: edited_project.project_name,
      code_link: edited_project.code_link,
      site_link: edited_project.site_link,
      image_url: edited_project.image_url,
      type: edited_project.type,
      tags: edited_project.tags,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.status === 200) {
    alert("Project Edited with success!");
  }

  return response;
}
