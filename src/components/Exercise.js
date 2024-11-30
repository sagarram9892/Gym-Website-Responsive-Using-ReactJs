import React from "react";
import "../styles/Exercise.css";
import lungs from "../assets/lunges.png";
import yoga_pose from "../assets/yoga-pose.png";
import extended from "../assets/extended.png";

function Exercise() {
  return (
    <div className="container" id="schedule">
      <div className="caption">
        <h1>
          Benefits of <span>Exercise</span>
        </h1>
        <p className="mini">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsum
          dolorem nobis ullam iusto repellendus doloribus.
        </p>
      </div>
      <div className="yoga">
        <div className="healthy">
          <div className="logo">
            <img src={lungs} alt="" />
          </div>
          <div className="para">
            <h4>Healthy Life</h4>
            <p className="para2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="flexibility">
          <div className="logo">
            <img src={yoga_pose} alt="" />
          </div>
          <div className="para">
            <h4>Increased Flexibility</h4>
            <p className="para2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="reducing">
          <div className="logo">
            <img src={extended} alt="" />
          </div>
          <div className="para">
            <h4>Reducing Blood Pressure</h4>
            <p className="para2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
