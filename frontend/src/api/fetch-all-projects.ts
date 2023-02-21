import ProjectModel from "../types/ProjectModel";
import { Api } from "./api";

export default async function FetchAllProjects(){

    const response = await Api.get("/api/project/findAllProjects");

    const data:ProjectModel[] | [] = response.data;

    return data.reverse();

}