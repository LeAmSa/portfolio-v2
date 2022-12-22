import { Project } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchProjects = async () => {
  const query = groq`
*[_type == "project"] | order(_createdAt desc) {
  ...,
  technologies[]->
}
`;

  const projects: Project[] = await sanityClient.fetch(query);

  return projects;
};
