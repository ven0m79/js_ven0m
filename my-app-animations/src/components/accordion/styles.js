import {styled} from "../../theme"
import {motion} from "framer-motion";

export const AccordionContainer = styled("div",{
    bc: "$slate100",
    color: "black",
    p: "$4",
    m: "$4",
    overflow: "hidden"
});

export const AccordionHeader = styled("p", {
    fontWeight: "700",
    cursor: "pointer",
    userSelect: "none",
})

export  const  AccordionContent = styled(motion.div, {})