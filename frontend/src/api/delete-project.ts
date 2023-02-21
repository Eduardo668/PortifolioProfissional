import { Api } from "./api";
import { accessToken } from "./login";

export default async function deleteProject(project_id: number) {

  const response = await Api.delete(
    `/api/project/deleteProject/id=${project_id}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response;
}
