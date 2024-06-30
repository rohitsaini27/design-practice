import React, { useState, useEffect } from "react";
import Progress from "./shared/progress";
import Navbar from "./navbar";

const CompatibilityResult = () => {
  const formdata = JSON.parse(localStorage.getItem('formdata')) || {};

  const [scorePercentage, setScorePercentage] = useState(0);

  // Calculate average value
  function averageValue() {
    if (formdata.number && formdata.city && formdata.area) {
      let average = (parseInt(formdata.number) + parseInt(formdata.city) + parseInt(formdata.area)) / 3;
      return average.toFixed(2);
    }
  }

  // Determine result category based on average value
  function result() {
    const avg = parseFloat(averageValue());
    return avg <= 33 ? 'Bad' : avg <= 66 ? 'Average' : 'Good';
  }

  // Animate score percentage
  useEffect(() => {
    const targetPercentage = parseFloat(averageValue());
    if (!isNaN(targetPercentage)) {
      let currentPercentage = 0;
      const increment = targetPercentage / 100; // Adjust increment speed
      const animationDuration = 1000; // Animation duration in milliseconds

      const timer = setInterval(() => {
        currentPercentage += increment;
        if (currentPercentage >= targetPercentage) {
          clearInterval(timer);
          setScorePercentage(targetPercentage);
        } else {
          setScorePercentage(currentPercentage);
        }
      }, animationDuration / 100); // Divide duration by 100 for smoother animation
    }
    // eslint-disable-next-line 
  }, []);

  return (
    <div className="compatibility">
      <span>{result()}</span>
      <div className="score">
        <p>{scorePercentage.toFixed(2)}%</p>
        <p>SCORE</p>
      </div>
      <div className="compatibility-progress">
        <Progress
          heading={"Number Capability"}
          percent={formdata.number}
          background="linear-gradient( #FF572E, #FF8132, #FEC139)"
        />
        <Progress
          heading={"Area Capability"}
          percent={formdata.area}
          background="linear-gradient(#8AEB6C, #7FE76A, #03C057)"
        />
        <Progress
          heading={"City Capability"}
          percent={formdata.city}
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
      <Navbar />
    </div>
  );
};

export default CompatibilityResult;
