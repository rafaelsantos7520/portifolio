import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";

export const Button = styled("button", {
  appearance: "none",
  background: "$ink",
  color: "$paper",
  fontWeight: "700",
  padding: "0.85rem 1.35rem",
  border: "2px solid $ink",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "0.9375rem",
  fontFamily: "$texts",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  width: "max-content",
  whiteSpace: "nowrap",
  textDecoration: "none",
  letterSpacing: "0.01em",
  transition: "background-color 120ms ease-out, color 120ms ease-out, border-color 120ms ease-out",

  "&:hover": {
    backgroundColor: "$accent",
    borderColor: "$accent",
    color: "$paper",
  },

  variants: {
    type: {
      btLink: {
        background: "transparent",
        borderColor: "transparent",
        color: "$ink",
        fontWeight: "700",
        padding: "0.35rem 0",
        "&:hover": {
          background: "transparent",
          color: "$accent",
        },
      },
      primary: {
        background: "transparent",
        border: "2px dashed $accent",
        color: "$accent",
        fontFamily: "$titles",
        fontSize: "1.15rem",
        fontWeight: 800,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "0.4rem 0.85rem",
        "&:hover": {
          backgroundColor: "transparent",
          color: "$accentDeep",
          borderColor: "$accentDeep",
        },
      },
      outline: {
        borderColor: "$ink",
        color: "$ink",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$ink",
          color: "$paper",
        },
      },
      icon: {
        borderColor: "$ink",
        backgroundColor: "transparent",
        color: "$ink",
        padding: "0.55rem 0.7rem",
        "&:hover": {
          backgroundColor: "$ink",
          color: "$paper",
        },
      },
      circle: {
        borderColor: "$ink",
        backgroundColor: "transparent",
        color: "$ink",
        borderRadius: "$1",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        minWidth: "2.75rem",
        minHeight: "2.75rem",
        "&:hover": {
          backgroundColor: "$accent",
          borderColor: "$accent",
          color: "$paper",
        },
      },
    },
    ...colors,
  },
});
