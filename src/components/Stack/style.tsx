import { styled } from "@/styles/stitches.config";

export const StackCard = styled("li", {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.55rem",
  fontFamily: "$titles",
  fontWeight: 700,
  fontSize: "clamp(1.35rem, 2.6vw, 2rem)",
  letterSpacing: "-0.03em",
  textTransform: "uppercase",
  lineHeight: 1,
  color: "$ink",
  "& svg": {
    flexShrink: 0,
  },
  whiteSpace: "nowrap",
  "&:hover": {
    color: "$accent",
  },
});

export const StackList = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.85rem 1.75rem",
  alignItems: "center",
});
