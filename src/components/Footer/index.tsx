import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper } from "./style";
import { userData } from "@/utils/userData";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="social-media">
      <Container>
        <Text as="p" type="heading4">
          Obrigado pela visita
        </Text>
        <Flex
          css={{
            flexWrap: "wrap",
            gap: "1.25rem",
          }}
        >
          <Text
            as="a"
            type="body2"
            target="_blank"
            rel="noreferrer"
            href={`https://instagram.com/${userData.instagramUser}`}
          >
            Instagram
          </Text>
          <Text
            as="a"
            type="body2"
            target="_blank"
            rel="noreferrer"
            href={`https://linkedin.com/in/${userData.linkedinUser}`}
          >
            LinkedIn
          </Text>
          <Text
            as="a"
            type="body2"
            target="_blank"
            rel="noreferrer"
            href={`https://github.com/${userData.githubUser}`}
          >
            GitHub
          </Text>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
