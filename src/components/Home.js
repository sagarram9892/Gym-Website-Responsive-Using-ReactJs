import React from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faLocationDot,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import gym_02 from "../assets/gym-02.png";
import dumble from "../assets/dumble.png";

function Home() {
  return (
    <div className="content container">
      <div className="left">
        <h1>
          Exercise is the key to a <br /> <span>Healthy</span> Lifestyle
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing <br /> Doloribus
          iusto amet expedita illum corporis nam!
        </p>
        <div className="btns">
          <button className="btn get">Get Started</button>
          <button className="watch">
            <span>
              <FontAwesomeIcon icon={faCirclePlay} />
            </span>{" "}
            Watch Video
          </button>
        </div>
      </div>
      <div className="right">
        <div className="dumble">
          <img src={dumble} alt="" />
        </div>
        <div className="location">
          <div className="circle">
            <FontAwesomeIcon icon={faLocationDot} className="map" />
          </div>
          <p>
            Find a new <br />
            Gym near you
          </p>
        </div>

        <div className="image">
          <div className="div_1">
            <div className="div_2">
              <div className="div_3">
                <div className="img">
                  <img src={gym_02} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heart">
          <p>Heart Rate</p>
          <div className="broken">
            <FontAwesomeIcon icon={faHeartPulse} className="pulse" />
          </div>
          <p>2567 BPM</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
