import React, { useState } from "react";

function ShowButton() {
    const [goodMood, changeMood] = useState(true);

    function clickButtonEvent() {
        changeMood(!goodMood)
    }
    return(
        <div>
            <button onClick={clickButtonEvent}>Click me!</button>
            <span> 
                <p>
                {
                    goodMood ? 'Hello!' : 'Bye!'
                }
                </p>
            </span>
        </div>
    );
};

export default ShowButton;