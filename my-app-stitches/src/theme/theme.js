import { createStitches } from "@stitches/react";
import { opinionated } from "stitches-normalize-css";

import { utils } from "./utils";

const defaultTheme = {
    colors: {
        //Slate
        slate50: "#F8FAFC",
        slate100: "#F1F5F9",
        slate200: "#E2E8F0",
        slate300: "#CBD5E1",
        slate400: "#94A3B8",
        slate500: "#64748B",
        slate600: "#475569",
        slate700: "#334155",
        slate800: "#1E293B",
        slate900: "#0F172A",

        //Red
        red50: "#FEF2F2",
        red100: "#FEE2E2",
        red200: "#FECACA",
        red300: "#FCA5A5",
        red400: "#F87171",
        red500: "#EF4444",
        red600: "#DC2626",
        red700: "#B91C1C",
        red800: "#991B1B",
        red900: "#7F1D1D",

        //Yellow
        yellow50: "#FEFCE8",
        yellow100: "#FEF9C3",
        yellow200: "#FEF08A",
        yellow300: "#FDE047",
        yellow400: "#FACC15",
        yellow500: "#EAB308",
        yellow600: "#CA8A04",
        yellow700: "#A16207",
        yellow800: "#854D0E",
        yellow900: "#713F12",

        //Lime
        lime50: "#F7FEE7",
        lime100: "#ECFCCB",
        lime200: "#D9F99D",
        lime300: "#BEF264",
        lime400: "#A3E635",
        lime500: "#84CC16",
        lime600: "#65A30D",
        lime700: "#4D7C0F",
        lime800: "#3F6212",
        lime900: "#365314",

        //Sky
        sky50: "#F0F9FF",
        sky100: "#E0F2FE",
        sky200: "#BAE6FD",
        sky300: "#7DD3FC",
        sky400: "#38BDF8",
        sky500: "#0EA5E9",
        sky600: "#0284C7",
        sky700: "#0369A1",
        sky800: "#075985",
        sky900: "#0C4A6E",

        //Purple
        purple50: "#FAF5FF",
        purple100: "#F3E8FF",
        purple200: "#E9D5FF",
        purple300: "#D8B4FE",
        purple400: "#C084FC",
        purple500: "#A855F7",
        purple600: "#9333EA",
        purple700: "#7E22CE",
        purple800: "#6B21A8",
        purple900: "#581C87",

        //Base
        black: "#000000",
        white: "#ffffff",
        accent: "$black",
        primary: "$black",
    },
    fonts: {
        inter: "Inter, sans-serif",
        IBMPlexMono: "'IBM Plex Mono', monospace",
        base: "$inter",
        mono: "$IBMPlexMono",
    },
    fontSizes: {
        1: "1.2rem",
        2: "1.4rem",
        3: "1.6rem",
        4: "1.8rem",
        5: "2.4rem",
        6: "3.2rem",
        7: "4.8rem",
        8: "5.6rem",
        html: "62.5%",
        base: "$3",
    },
    space: {
        1: ".4rem",
        2: ".8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
    },
    fontWeights: {
        bold: 500,
        bolder: 600,
        extraBold: 700,
    },
    lineHeights: {
        base: "2.4rem",
    },
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
        sm: "0.4rem",
        md: "0.8rem",
        xl: "1.6rem",
    },
    shadows: {
        sm: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
        md:
            "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg:
            "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl:
            "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
        xxl: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inset: "inset 0px 2px 4px rgba(0, 0, 0, 0.06)",
    },
    zIndices: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,

        // App Layers
        app1: "$1",
        app2: "$2",
        app3: "$3",
        appOnTop: "$4",

        // Dialog
        100: 100,
        101: 101,
        dialogOnTop: "$100",
        dialogOnTop1: "$101",
    },
    transitions: {},
};

const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    utils,
    theme: defaultTheme,
    prefix: "boopos-styles",
    media: {
        bp1: "(min-width: 43rem)",
        bp2: "(min-width: 62rem)",
        bp3: "(min-width: 82rem)",
    },
});

const globalStyles = globalCss(...opinionated, {
    html: {
        fontSize: "$fontSizes$html",
    },
    "html *": {
        fontFamily: "$fonts$base",
        fontSize: "$fontSizes$base",
        lineHeight: "$lineHeights$base",
    },
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },
    h1: {
        fontSize: "$fontSizes$8",
    },
    h2: {
        fontSize: "$fontSizes$7",
    },
    h3: {
        fontSize: "$fontSizes$6",
    },
    h4: {
        fontSize: "$fontSizes$5",
    },
    h5: {
        fontSize: "$fontSizes$4",
    },
    h6: {
        fontSize: "$fontSizes$3",
    },
});

// Export utils
export {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
    globalStyles,
};