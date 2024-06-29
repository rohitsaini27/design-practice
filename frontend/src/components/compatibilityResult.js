import React from "react";
import Progress from "./shared/progress";
import Navbar from "./navbar";

const CompatibilityResult = () => {
  return (
    <div className="compatibility">
      <span>Bad</span>
      <div className="score">
        <p>28%</p>
        <pp>SCORE</pp>
      </div>
      <div className="compatibility-progress">
        <Progress
          heading={"Number Capability"}
          percent={50}
          background="linear-gradient( #FF572E, #FF8132, #FEC139)"
        />
        <Progress
          heading={"Area Capability"}
          percent={33}
          background="linear-gradient(#8AEB6C, #7FE76A, #03C057)"
        />
        <Progress
          heading={"City Capability"}
          percent={10}
          background="linear-gradient(#3699EF, #4185E3, #6C35B1)"
        />
      </div>
      <div className="compatibility-test">
        <h4>Compatibility Check Residentials</h4>
        <p>
          Personal finances and career play an essential role in your
          activities. it's time to be noticed for the excellent work you're
          doing. Don't be afraid to come forward with ideas.
        </p>
      </div>
      <Navbar/>
    </div>
  );
};

export default CompatibilityResult; 