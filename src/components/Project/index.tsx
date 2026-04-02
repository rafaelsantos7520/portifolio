import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url?: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories] = useState<ReposType[]>([
    {
      id: 1,
      name: "MotorsShop",
      language: "TypeScript",
      description: "Loja de carros online",
      html_url: "https://motorshoponline.netlify.app/",
      homepage: "https://github.com/E-Commerce-M6/front_end"
    },
    {
      id: 2,
      name: "Hamburgeria",
      language: "JavaScript",
      description: "Site de compras de lanches",
      html_url: "https://hamburgeria-livid.vercel.app/",
      homepage: "https://github.com/rafaelsantos7520/hamburgeria"
    },
    {
    id: 3,
    name: "Kenzie hub",
    language: "TypeScript",
    description: "Site De cadastro de tecnologias",
    html_url: "https://vercel.com/rafaelsantos7520/kenzie-hub",
    homepage: "https://github.com/rafaelsantos7520/Kenzie-Hub"
    }

  ]);

  return (
    <>
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.name}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" rel="noreferrer" href={repository.homepage}>
                <FaGithub />Github 
              </ProjectLink>
              {repository.html_url && (
                <ProjectLink
                  target="_blank"
                  rel="noreferrer"
                  href={repository.html_url}
                >
                  <FaShare /> Ver site
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
