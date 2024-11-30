import React from "react";
import "../styles/Pricing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
  return (
    <div id="pricing">
      <div className="pricing_plan">
        <h1>
          Gym <span>Pricing</span> Plan
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
          Reprehenderit recusandae alias eius voluptatem neque ut?
        </p>
      </div>
      <div className="membership container">
        <div className="regular">
          <div className="left">
            <h3>Regular Member</h3> <br />
            <span> $50</span>/month
          </div>
          <div className="right">
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Unlimited
              access to the gym{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Customer
              Support{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Personal
              Trainer{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Standard
              options{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> 5 classess
              per week{" "}
            </p>
          </div>
          <button className="btn">Join Now</button>
        </div>
        <div className="regular premium">
          <div className="left">
            <h3>Regular Member</h3> <br />
            <span> $50</span>/month
          </div>
          <div className="right">
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Unlimited
              access to the gym{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Customer
              Support{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Personal
              Trainer{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Standard
              options{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> 5 classess
              per week{" "}
            </p>
          </div>
          <button className="btn">Join Now</button>
        </div>
        <div className="regular">
          <div className="left">
            <h3>Regular Member</h3> <br />
            <span> $50</span>/month
          </div>
          <div className="right">
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Unlimited
              access to the gym{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Customer
              Support{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Personal
              Trainer{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> Standard
              options{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCircle} className="list" /> 5 classess
              per week{" "}
            </p>
          </div>
          <button className="btn">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
