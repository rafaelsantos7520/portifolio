// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const githubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/rafaelsantos7520/portifolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá Mundo!</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Eu{" "}
              <Text as="span" type="heading1" color="brand1">
                Amo
              </Text>{" "}
              criar e {" "}
              <Text as="span" type="heading1" color="brand1">
                Desenvolver
              </Text>{" "}
              projetos
            </Text>
            <Text type="body1" color="grey2">
              desenvolvedor web e adoro programar e desenvolver aplicações. Sou
              um entusiasta da tecnologia e acredito que ela tem o poder de
              transformar o mundo em um lugar melhor. Amo games, animes e sou um
              grande apreciador de café. Como desenvolvedor web, tenho me
              dedicado a criar soluções inovadoras e eficientes para os desafios
              tecnológicos que surgem. Tenho experiência em diversas linguagens
              de programação, como HTML, CSS, JavaScript e Python além de
              trabalhar com frameworks populares como React. Além do meu amor
              pela programação, sou apaixonado por games e animes. Acredito que
              essas formas de entretenimento são verdadeiras obras de arte
              interativas, capazes de inspirar e conectar pessoas de diferentes
              origens e culturas. E para me manter inspirado e produtivo, o café
              é o meu combustível. Se você quiser saber mais sobre mim ou
              discutir algum projeto interessante, fique à vontade para me
              chamar para um bate papo. Estou sempre em busca de novos desafios
              e animado com as possibilidades que a tecnologia oferece. Vamos
              trabalhar juntos para tornar o mundo um lugar melhor através da
              inovação e do poder transformador da tecnologia.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver projetos
              </Button>
              <Button as="a" type="outline" target="_blank" rel="noreferrer" href={portfolioUrl}>
                Codigo do meu Portifólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                rel="noreferrer"
                href={githubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Aqui estão alguns dos meus projetos{" "}
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
