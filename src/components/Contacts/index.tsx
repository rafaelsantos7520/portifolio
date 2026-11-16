import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardContent,
  Tag,
} from "./style";

import { userData } from "@/utils/userData";

export const Contacts = () => {
  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;
  const whatsappPhone = userData.whatsappNumber.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    "Olá, venho por meio do seu portfólio e gostaria de conhecer melhor seus serviços."
  );

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent>
          <ContactSectionText>
            <Text as="h2" type="heading2">
              Vamos conversar
            </Text>
            <Text
              type="body1"
              color="muted"
              css={{ marginTop: "1.25rem", maxWidth: "42ch" }}
            >
              Um projeto, uma vaga ou só um café. A etiqueta vai com você.
            </Text>
          </ContactSectionText>
          <Tag>
            <ContactsCards>
              <ContactCard>
                <ContactCardContent>
                  <Text as="h3" type="heading4">
                    WhatsApp
                  </Text>
                  <Text
                    as="a"
                    type="body2"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${whatsappMessage}`}
                  >
                    Enviar mensagem
                  </Text>
                </ContactCardContent>
              </ContactCard>
              <ContactCard>
                <ContactCardContent>
                  <Text as="h3" type="heading4">
                    E-mail
                  </Text>
                  <Text
                    as="a"
                    type="body2"
                    target="_blank"
                    rel="noreferrer"
                    href={`mailto:${userData.emailUser}`}
                  >
                    {userData.emailUser}
                  </Text>
                </ContactCardContent>
              </ContactCard>
              <ContactCard>
                <ContactCardContent>
                  <Text as="h3" type="heading4">
                    LinkedIn
                  </Text>
                  <Text
                    as="a"
                    type="body2"
                    target="_blank"
                    rel="noreferrer"
                    href={linkedInUrl}
                  >
                    Ver perfil
                  </Text>
                </ContactCardContent>
              </ContactCard>
            </ContactsCards>
          </Tag>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
