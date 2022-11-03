import React, { useContext } from "react";
import { OurContext } from "../App";

const Card = () => {
    const ourContext = useContext(OurContext);
    console.log({ourContext});
    return <div></div>
};

export default Card;