import { ReactNode } from "react";
import { styled, globalCss } from "@/styles/stitches.config";

import jute from "@/public/static/img/texture/jute.png";
import atkinson400 from "@/public/fonts/atkinson-latin-400.woff2";
import atkinson400Ext from "@/public/fonts/atkinson-latinext-400.woff2";
import atkinson400i from "@/public/fonts/atkinson-latin-400i.woff2";
import atkinson400iExt from "@/public/fonts/atkinson-latinext-400i.woff2";
import atkinson700 from "@/public/fonts/atkinson-latin-700.woff2";
import atkinson700Ext from "@/public/fonts/atkinson-latinext-700.woff2";
import shoulders from "@/public/fonts/big-shoulders-latin.woff2";
import shouldersExt from "@/public/fonts/big-shoulders-latinext.woff2";

interface GlobalStyleProps {
  children: ReactNode;
}

const sackGround = `url(${jute})`;

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1.5rem",

  "@tablet": {
    maxWidth: "$containerTablet",
  },

  "@mobile": {
    padding: "0 1.125rem",
  },
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
  alignItems: "center",
});

export const Box = styled("div", {
  maxWidth: "100%",
});

export const colors = {
  color: {
    brand1: { color: "$brand1" },
    brand2: { color: "$brand2" },
    grey1: { color: "$grey1" },
    grey2: { color: "$grey2" },
    grey4: { color: "$grey4" },
    grey5: { color: "$grey5" },
    ink: { color: "$ink" },
    muted: { color: "$muted" },
    accent: { color: "$accent" },
    jute: { color: "$jute" },
  },
};

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Atkinson Hyperlegible",
      fontStyle: "normal",
      fontWeight: "400",
      fontDisplay: "swap",
      src: `url(${atkinson400Ext}) format("woff2")`,
      unicodeRange:
        "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    {
      fontFamily: "Atkinson Hyperlegible",
      fontStyle: "normal",
      fontWeight: "400",
      fontDisplay: "swap",
      src: `url(${atkinson400}) format("woff2")`,
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    {
      fontFamily: "Atkinson Hyperlegible",
      fontStyle: "italic",
      fontWeight: "400",
      fontDisplay: "swap",
      src: `url(${atkinson400iExt}) format("woff2")`,
      unicodeRange:
        "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    {
      fontFamily: "Atkinson Hyperlegible",
      fontStyle: "italic",
      fontWeight: "400",
      fontDisplay: "swap",
      src: `url(${atkinson400i}) format("woff2")`,
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    {
      fontFamily: "Atkinson Hyperlegible",
      fontStyle: "normal",
      fontWeight: "700",
      fontDisplay: "swap",
      src: `url(${atkinson700Ext}) format("woff2")`,
      unicodeRange:
        "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    {
      fontFamily: "Atkinson Hyperlegible",
      fontStyle: "normal",
      fontWeight: "700",
      fontDisplay: "swap",
      src: `url(${atkinson700}) format("woff2")`,
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    {
      fontFamily: "Big Shoulders Display",
      fontStyle: "normal",
      fontWeight: "600 800",
      fontDisplay: "swap",
      src: `url(${shouldersExt}) format("woff2")`,
      unicodeRange:
        "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    {
      fontFamily: "Big Shoulders Display",
      fontStyle: "normal",
      fontWeight: "600 800",
      fontDisplay: "swap",
      src: `url(${shoulders}) format("woff2")`,
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
    caretColor: "$accent",
    "@reduce": {
      scrollBehavior: "auto",
    },
  },
  body: {
    backgroundColor: "$jute",
    color: "$ink",
    fontFamily: "$texts",
    lineHeight: 1.6,
    backgroundImage: sackGround,
    backgroundRepeat: "repeat",
    backgroundSize: "320px 320px",
  },
  "h1, h2, h3, h4": {
    fontFamily: "$titles",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    textWrap: "balance",
  },
  a: {
    color: "inherit",
    textUnderlineOffset: "0.22em",
  },
  "a:hover": {
    color: "$accent",
  },
  img: {
    maxWidth: "100%",
    display: "block",
  },
  "::selection": {
    backgroundColor: "$accent",
    color: "$jute",
  },
  ":focus-visible": {
    outline: "2px solid $accent",
    outlineOffset: "3px",
  },
  "::-webkit-scrollbar": {
    width: "10px",
    height: "10px",
  },
  "::-webkit-scrollbar-track": {
    background: "$jute",
  },
  "::-webkit-scrollbar-thumb": {
    background: "$ink",
  },
  ".sr-only": {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
});

export const SkipLink = styled("a", {
  position: "absolute",
  left: "1rem",
  top: "-4.5rem",
  zIndex: 80,
  background: "$accent",
  color: "$paper",
  padding: "0.65rem 1rem",
  fontWeight: 700,
  textDecoration: "none",
  "&:focus": {
    top: "1rem",
  },
});

const App = styled("div", {
  minHeight: "100vh",
  color: "$ink",
});

export const GlobalStyle = ({ children }: GlobalStyleProps): JSX.Element => {
  globalStyles();
  return <App>{children}</App>;
};

export { sackGround };
