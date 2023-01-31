import React from 'react';
import { Link } from 'react-router-dom';

function AboutCars() {
    return (
        <div className="page-container">
            <h2 className="display-3">
                About Cars.
            </h2>
            <div className="text-container p-100 m-100">
                <h6>Since the birth of the first automobile in 1885, cars have been an essential part of the industry and day-to-day life for most people, <br/> </h6>
                <h6>so it comes as no surprise that the choice of your first car is an important one. Purchasing a vehicle is not a decision you should <br/> </h6>
                <h6>take lightly so here are a few things to keep in mind when looking for the best car to suit your day to day needs.<br/> </h6>
                <h6>1. Before buying a car, you should consider your finances. You can choose to pay the entire cost of the car right away or opt for a car loan. <br/> </h6>
                <h6>As it is your first car, we recommend keeping your sights on an affordable and reliable vehicle.<br/> </h6>
                <h6>2.  As you probably already know, owning and maintaining a car may be expensive. <br/> </h6>
                <h6>One of the first costs is fuel or electricity, depending on what type of car you may buy. <br/> </h6>
                <h6>Fuel prices have been on the rise as of late so you have to keep in mind how much will your car consume and if you can afford it. <br/> </h6>
                <h6>Electric cars do not break the bank as much as regular cars since electricity is cheaper than fuel. <br/> </h6>
                <h6>3. We highly recommend looking into the documentation we will provide for you on the car the questionnaire suggests. <br/> </h6>
                <h6>Knowing more about the car you are about to buy will surely come in handy. <br/> </h6>
                <h6>4. Test-driving the car you want to buy should be an important step in the decision-making process you are going through. <br/> </h6>
                <h6>This can get you comfortable with the power, amenities, and overall feel that the car provides. <br/> </h6>
                <h6>Also, this may assure you that the car is in top-shelf condition. <br/> </h6>
                <h6>5. At last, you should watch out for untrustworthy dealerships. Some dealerships dabble in the marketing of broken-down cars as top-of-the-line automobiles <br/> </h6>
                <h6>and it can be hard to know if your car has been fiddled with. You should always ask around and look up on the internet the seller you are interested in. <br/> </h6>
                <h6>If you are by any means unsure of the quality of the car, you can always call upon a mechanic for a quick inspection before your final decision. </h6>
            </div>
            <Link to="../documentation" target=""><button>GO BACK</button></Link>
        </div>
    );
}

export default AboutCars;