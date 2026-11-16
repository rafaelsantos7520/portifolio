import { styled, keyframes } from "@/styles/stitches.config";

const soak = keyframes({
  "0%": { opacity: 0.45, filter: "blur(4px)" },
  "100%": { opacity: 1, filter: "blur(0)" },
});

export const Page = styled("main", {
  scrollMarginTop: "5rem",
});

export const Header = styled("header", {
  padding: "6.25rem 0 0",
  display: "flex",
  flexDirection: "column",
  "@mobile": {
    padding: "5.5rem 0 0",
  },
});

export const HeaderContent = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  animation: `${soak} 600ms cubic-bezier(0.16, 1, 0.3, 1) both`,
  "@reduce": {
    animation: "none",
  },
});

export const HeroTop = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "1.5rem",
  marginTop: "1.25rem",
  "@mobile": {
    alignItems: "center",
    gap: "1rem",
    marginTop: "0.85rem",
  },
});

export const HeaderButtonsArea = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  marginTop: "1.25rem",
});

export const UserImage = styled("img", {
  width: "8.5rem",
  height: "8.5rem",
  objectFit: "cover",
  background: "transparent",
  flexShrink: 0,
  "@mobile": {
    width: "4.75rem",
    height: "4.75rem",
  },
});

export const RoleMark = styled("p", {
  fontFamily: "$texts",
  fontSize: "1.0625rem",
  color: "$ink",
  maxWidth: "22rem",
  lineHeight: 1.45,
  "@mobile": {
    fontSize: "0.95rem",
  },
});

export const Bio = styled("div", {
  maxWidth: "68ch",
  display: "grid",
  gap: "0.85rem",
  marginTop: "1.1rem",
  "@mobile": {
    marginTop: "0.75rem",
  },
});

export const StackSection = styled("section", {
  padding: "$4 0 $section",
  borderTop: "2px dashed $ink",
  scrollMarginTop: "5rem",
  "@mobile": {
    padding: "$3 0 $sectionMobile",
  },
});

export const StackCards = styled("div", {
  marginTop: "1.25rem",
});

export const ProjectsArea = styled("section", {
  padding: "1.75rem 0 2.5rem",
  scrollMarginTop: "5rem",
  "@mobile": {
    padding: "1.1rem 0 1.5rem",
  },
});

export const ProjectsAreaSocialMediaMessage = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  marginBottom: "1.25rem",
  maxWidth: "42rem",
});

export const ProjectsAreaContent = styled("div", {
  width: "100%",
});

export const ProjectAreaWrapperColumns = styled("div", {
  position: "relative",
});

export const Stitch = styled("hr", {
  border: "none",
  borderTop: "2px dashed $ink",
  margin: "2.5rem 0 0",
  background: "none",
});
