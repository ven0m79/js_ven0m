import React, { useState } from "react";

function ShowButton() {
    const [goodMood, changeMood] = useState(true);

    function iventClickButton() {
        changeMood(!goodMood);
    }
    return (
        <div>
            <button onClick = { iventClickButton }>
                Click me!
            </button>
            <span><p>
                {
                    goodMood ? "Hello" : "Buy"
                }
            </p></span>
        </div>
    );
};
export default ShowButton;