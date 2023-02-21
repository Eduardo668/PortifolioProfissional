import { Api } from "./api";
import { accessToken } from "./login";

export default async function addCurriculum(curriculumLink: string) {
  const response = await Api.put("/api/admin/addCurriculum", {"curriculumLink":curriculumLink}, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 200) {
    alert("Curriculum added with success!!!");
  }

  return response;
}
