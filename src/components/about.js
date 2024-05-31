import React from "react";
import './about.css';  // Make sure to adjust the path to your CSS file

const About = () => {
    return (
        <div id="card-area">
            <h1 className="greet" id="greetings">Contributors!!!</h1>
            <div className="wrapper">
                <div className="box-area">
                    <div className="box hidden">
                        <img src="/images/Calvin.jpg" alt="Calvin" />
                        <div className="overlay">
                            <h3>Calvin</h3>
                            <a href="https://www.instagram.com/imanuel.vin">Instagram</a>
                        </div>
                    </div>
                    <div className="box hidden">
                        <img src="/images/andre.jpg" alt="Andre" />
                        <div className="overlay">
                            <h3>Andre</h3>
                            <a href="https://www.instagram.com/_andrean0/">Instagram</a>
                        </div>
                    </div>
                    <div className="box hidden">
                        <img src="/images/ahmed.jpg" alt="Ahmed" />
                        <div className="overlay">
                            <h3>Ahmed</h3>
                            <a href="https://www.instagram.com/bobby_ahmedzuhri/">Instagram</a>
                        </div>
                    </div>
                    <div className="box hidden">
                        <img src="/images/haw.jpg" alt="Hawari" />
                        <div className="overlay">
                            <h3>Hawari</h3>
                            <a href="https://www.instagram.com/riohawarii">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
