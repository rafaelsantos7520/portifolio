import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

import { Stack } from "@/components/Stack";
import { StackList } from "@/components/Stack/style";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";
import stamp from "@/public/static/img/stamp/rafael-stamp.png";

import {
  Header,
  HeaderContent,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  HeroTop,
  RoleMark,
  Bio,
  StackSection,
  Stitch,
  Page,
} from "./style";

export const Home = (): JSX.Element => {
  return (
    <Page id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" aria-label={userData.nameUser}>
              {userData.nameUser.split(" ").map((part) => (
                <span key={part}>
                  {part.split("").map((letter, letterIndex) => (
                    <b key={`${part}-${letterIndex}`}>{letter}</b>
                  ))}
                </span>
              ))}
            </Text>
            <HeroTop>
              <RoleMark>
                {userData.role}. React, TypeScript e Node — café sempre por
                perto.
              </RoleMark>
              <UserImage
                src={stamp}
                alt={`Retrato de ${userData.nameUser}`}
                width={160}
                height={160}
              />
            </HeroTop>
            <Bio>
              <Text type="body1">
                Crio aplicações web. Entusiasta de tecnologia, games e animes.
                Se quiser falar de um projeto, me chama.
              </Text>
            </Bio>
          </HeaderContent>
        </Container>
        <ProjectsArea id="projects">
          <Container>
            <ProjectAreaWrapperColumns>
              <Text as="h2" type="heading2" className="sr-only">
                Projetos
              </Text>
              <ProjectsAreaContent>
                <Project />
              </ProjectsAreaContent>
            </ProjectAreaWrapperColumns>
          </Container>
        </ProjectsArea>
      </Header>
      <StackSection id="stack">
        <Container>
          <Text as="h2" type="heading2">
            Composição
          </Text>
          <Text
            type="body1"
            color="muted"
            css={{ marginTop: "0.75rem", maxWidth: "48ch" }}
          >
            A mistura com a qual monto as aplicações.
          </Text>
          <StackCards>
            <StackList>
              {stackData.map((stack) => (
                <Stack key={stack.title} title={stack.title} icon={stack.img} />
              ))}
            </StackList>
          </StackCards>
        </Container>
      </StackSection>
      <Contacts />
      <Container>
        <Stitch />
      </Container>
    </Page>
  );
};
