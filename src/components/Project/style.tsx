import { styled } from "@/styles/stitches.config";
import { Text } from "@/styles/Text";

export const ProjectTitle = styled(Text, {
  display: "block",
});

export const ProjectStack = styled("div", {
  display: "flex",
  alignItems: "baseline",
  gap: "0.5rem",
  margin: "0.5rem 0 0.65rem",
  "@mobileLittle": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export const ProjectStackTech = styled("span", {
  color: "$accent",
  fontFamily: "$titles",
  fontWeight: 700,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  fontSize: "0.95rem",
});

export const ProjectLinks = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "1.25rem",
  marginTop: "0.9rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$ink",
  fontWeight: "700",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  textDecoration: "underline",
  textUnderlineOffset: "0.22em",
  "&:hover": {
    color: "$accent",
  },
});

export const Project = styled("article", {
  padding: "1.1rem 0",
  borderTop: "2px solid $ink",
  color: "$ink",
  transition: "none",
  "& h3": {
    color: "currentColor",
  },
  "& p": {
    color: "currentColor",
  },
  "& a": {
    color: "currentColor",
  },
  [`& ${ProjectStackTech}`]: {
    color: "currentColor",
  },
  "&:hover, &:focus-within": {
    color: "$ink",
    [`& ${ProjectStackTech}`]: {
      color: "$accent",
    },
  },
  variants: {
    featured: {
      true: {
        padding: "0 0 1.35rem",
        borderTop: "none",
        color: "$ink",
        gridColumn: "1 / -1",
        [`& ${ProjectTitle}`]: {
          fontSize: "clamp(2.4rem, 8vw, 6.5rem)",
          lineHeight: 0.86,
        },
        [`& ${ProjectStackTech}`]: {
          color: "$accent",
        },
      },
    },
  },
});

export const LotList = styled("div", {
  display: "grid",
  gridTemplateColumns: "1.4fr 1fr",
  columnGap: "3rem",
  rowGap: 0,
  "&:hover article, &:focus-within article": {
    color: "$ghost",
    [`& ${ProjectStackTech}`]: {
      color: "$ghost",
    },
  },
  "&:hover article:hover, &:focus-within article:focus-within": {
    color: "$ink",
    [`& ${ProjectStackTech}`]: {
      color: "$accent",
    },
  },
  "@mobile": {
    gridTemplateColumns: "1fr",
  },
});
