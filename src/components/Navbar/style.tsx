import { styled } from "@/styles/stitches.config";
import { Container, sackGround } from "@/styles/Global";

export const Navbar = styled("nav", {
  backgroundColor: "$jute",
  backgroundImage: sackGround,
  backgroundRepeat: "repeat",
  backgroundSize: "320px 320px",
  borderBottom: "2px dashed $ink",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "0.85rem 0 1rem",
  width: "100%",
  zIndex: 40,

  [`& ${Container}`]: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    "@mobile": {
      flexDirection: "column",
      alignItems: "stretch",
    },
  },
});

export const LogoTipo = styled("a", {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  textDecoration: "none",
  color: "$ink",
  "&:hover": {
    color: "$accent",
  },
});

export const LogoTipoText = styled("span", {
  fontSize: "1.35rem",
  fontWeight: 800,
  color: "inherit",
  fontFamily: "$titles",
  letterSpacing: "-0.03em",
  textTransform: "uppercase",
  lineHeight: 1,
  "@mobile": {
    fontSize: "1.15rem",
  },
});

export const NavbarLinks = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  "@mobile": {
    marginTop: "1rem",
    paddingBottom: "1.75rem",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "0.5rem",
    "& a": {
      width: "100%",
      justifyContent: "flex-start",
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});
