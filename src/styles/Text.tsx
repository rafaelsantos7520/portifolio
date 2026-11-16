import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";

const headingsDefaultConfig = {
  fontFamily: "$titles",
};

const bodyDefaultConfig = {
  fontFamily: "$texts",
};

export const Text = styled("p", {
  color: "$ink",
  fontSize: "$text1",
  fontWeight: 400,
  lineHeight: "$text1",
  variants: {
    type: {
            heading1: {
                fontSize: "$title1",
                lineHeight: "$title1",
                fontWeight: 800,
                letterSpacing: "0",
                textTransform: "uppercase",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                ...headingsDefaultConfig,
                "& span": {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                },
                "& b": {
                    fontWeight: 800,
                    fontFamily: "inherit",
                },
                "@mobile": {
                    fontSize: "$title1Mobile",
                    lineHeight: "$title1Mobile",
                },
            },
      heading2: {
        fontSize: "$title2",
        lineHeight: "$title2",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        textTransform: "uppercase",
        ...headingsDefaultConfig,
      },
      heading3: {
        fontSize: "$title3",
        lineHeight: "$title3",
        fontWeight: 700,
        letterSpacing: "-0.025em",
        textTransform: "uppercase",
        ...headingsDefaultConfig,
      },
      heading4: {
        fontSize: "$title4",
        lineHeight: "$title4",
        fontWeight: 700,
        ...headingsDefaultConfig,
      },
      body1: {
        fontSize: "$text1",
        lineHeight: "$text1",
        ...bodyDefaultConfig,
      },
      body2: {
        fontSize: "$text2",
        lineHeight: "$text2",
        ...bodyDefaultConfig,
      },
    },
    ...colors,
  },
});
