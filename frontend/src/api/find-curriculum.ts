import { Api } from "./api";

export default async function findCurriculum() {
  const response = await Api.get("/api/admin/findCurriculum");

  return response.data;
}
