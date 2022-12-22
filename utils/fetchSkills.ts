import { Skill } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchSkills = async () => {
  const query = groq`
*[_type == "skill"] | order(_createdAt asc)
`;

  const skills: Skill[] = await sanityClient.fetch(query);

  return skills;
};
