import React from "react";
import "../styles/Change.css";
import trainer from "../assets/trainer.png";

function Change() {
  return (
    <div className="train container" id="classes">
      <div className="trainer">
        <img src={trainer} alt="" />
      </div>
      <div className="change">
        <h1>Ready to make a <span>change ?</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum laudantium illo sit similique doloremque, saepe accusantium porro quia ex non ab aperiam exercitationem praesentium et officia pariatur quam assumenda!
        </p>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
}

export default Change;
