import { useState } from "react";

const FaveColor = () => {
    const [faveColor, setfaveColor] = useState("");

    const chooseColor = (color) => {
        setfaveColor(color);
    };

    return (
        <div>
            <section id="colorbuttons">
                <h2>Choose Your Favorite Color</h2>
                <div class="allButtons">
                    <button
                        class="redButton"
                        onClick={() => chooseColor("Red")}
                    >Red</button>
                    <button
                        class="blueButton"
                        onClick={() => chooseColor("Blue")}
                    >Blue</button>
                    <button
                        class="greenButton"
                        onClick={() => chooseColor("Green")}
                    >Green</button>
                </div>
                {faveColor && (
                    //Color displayed based on the input from the user 
                    <p class="colormsg">
                        Your favorite color is {faveColor}!
                    </p>
                )}
            </section>
        </div>

    );
};

export default FaveColor;
