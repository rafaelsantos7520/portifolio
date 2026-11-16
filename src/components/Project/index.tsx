import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
  LotList,
} from "./style";

import { Text } from "@/styles/Text";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/utils/userData";

export const Project = (): JSX.Element => {
  return (
    <LotList>
      {projects.map((repository) => (
        <ProjectWrapper key={repository.id} featured={repository.featured}>
          <ProjectTitle as="h3" type="heading3">
            {repository.name}
          </ProjectTitle>

          <ProjectStack>
            <Text type="body2" color="muted">
              Peças
            </Text>
            <ProjectStackTech>{repository.language}</ProjectStackTech>
          </ProjectStack>

          <Text type="body1" color="ink">
            {repository.description}
          </Text>
          <ProjectLinks>
            <ProjectLink
              target="_blank"
              rel="noreferrer"
              href={repository.repoUrl}
              aria-label={`GitHub de ${repository.name}`}
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </ProjectLink>
            {repository.liveUrl && (
              <ProjectLink
                target="_blank"
                rel="noreferrer"
                href={repository.liveUrl}
                aria-label={`Ver site de ${repository.name}`}
              >
                <FaExternalLinkAlt aria-hidden="true" />
                Ver site
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </LotList>
  );
};
