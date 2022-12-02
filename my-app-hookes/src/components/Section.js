import React, { useContext } from "react";
import { OurContext } from "../App";

const Section = () => {
    const { counter, setCounter } = useContext(OurContext);

    return <div>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>
            <div>Click from Section</div>
        </button>
    </div>
};

export default Section;