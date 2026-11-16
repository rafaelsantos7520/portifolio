import { useEffect, useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";

export const NavBar = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = `${userData.nameUser} — ${userData.role}`;
  }, []);

  useEffect(() => {
    if (!isWide) {
      setOpen(false);
    }
  }, [isWide]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo href="#home">
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="site-nav"
            >
              {open ? <IoClose size={22} /> : <FaBars size={18} />}
            </Button>
          )}
        </NavbarMobileArea>
        {isWide ? open && <NavLinks onNavigate={() => setOpen(false)} /> : <NavLinks />}
      </Container>
    </NavbarWrapper>
  );
};

const NavLinks = ({ onNavigate }: { onNavigate?: () => void }): JSX.Element => {
  return (
    <NavbarLinks id="site-nav">
      <Button type="btLink" as="a" href="#home" onClick={onNavigate}>
        Início
      </Button>
      <Button type="btLink" as="a" href="#projects" onClick={onNavigate}>
        Projetos
      </Button>
      <Button type="btLink" as="a" href="#stack" onClick={onNavigate}>
        Origem
      </Button>
      <Button type="btLink" as="a" href="#contact" onClick={onNavigate}>
        Contato
      </Button>
      <Button type="primary" as="a" href="#contact" onClick={onNavigate}>
        Fale comigo
      </Button>
    </NavbarLinks>
  );
};
