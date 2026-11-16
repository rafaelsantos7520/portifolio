import { styled } from "@/styles/stitches.config";

export const ContactSection = styled("section", {
  padding: "$section 0 $4",
  borderTop: "2px dashed $ink",
  scrollMarginTop: "5rem",
  "@mobile": {
    padding: "$sectionMobile 0 $3",
  },
});

export const ContactSectionContent = styled("div", {
  display: "grid",
  gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1fr)",
  gap: "3.5rem",
  alignItems: "start",
  "@mobile": {
    gridTemplateColumns: "1fr",
    gap: "1.75rem",
  },
});

export const ContactSectionText = styled("div", {
  maxWidth: "28rem",
});

export const Tag = styled("div", {
  position: "relative",
  border: "2px solid $ink",
  background: "$paper",
  padding: "2.25rem 1.5rem 1.25rem",
  maxWidth: "28rem",
  "&::before": {
    content: "",
    position: "absolute",
    top: "-1.35rem",
    left: "50%",
    width: "2px",
    height: "1.35rem",
    background: "$ink",
    transform: "translateX(-50%)",
  },
  "&::after": {
    content: "",
    position: "absolute",
    top: "-1.85rem",
    left: "50%",
    width: "0.85rem",
    height: "0.85rem",
    border: "2px solid $ink",
    borderRadius: "50%",
    background: "$jute",
    transform: "translateX(-50%)",
  },
});

export const ContactsCards = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  margin: 0,
  padding: 0,
});

export const ContactCard = styled("li", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: "1rem",
  padding: "0.85rem 0",
  borderBottom: "1px solid $ink",
  "&:first-child": {
    borderTop: "2px solid $ink",
  },
});

export const ContactCardImage = styled("div", {
  display: "none",
});

export const ContactCardContent = styled("div", {
  display: "contents",
  "& h3": {
    fontFamily: "$titles",
    fontSize: "1.15rem",
    textTransform: "uppercase",
    letterSpacing: "-0.02em",
  },
  "& p": {
    display: "none",
  },
  "& a": {
    color: "$accent",
    fontWeight: 700,
    whiteSpace: "nowrap",
    "&:hover": {
      color: "$accentDeep",
    },
  },
});
