import { styled } from "@/styles/stitches.config";
import { Container } from "@/styles/Global";

export const Footer = styled("footer", {
  backgroundColor: "transparent",
  padding: "1.75rem 0 3rem",
  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: "1.5rem",
    "@mobile": {
      flexDirection: "column",
      gap: "0.75rem",
    },
  },
  "& a": {
    color: "$ink",
    fontWeight: 700,
    textDecoration: "underline",
    "&:hover": {
      color: "$accent",
    },
  },
});
