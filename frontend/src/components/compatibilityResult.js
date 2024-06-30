import React from "react";
import Progress from "./shared/progress";
import Navbar from "./navbar";

const CompatibilityResult = () => {
  const formdata = JSON.parse(localStorage.getItem('formdata')) || {}

  function averageValue(){
    if(formdata.number && formdata.city && formdata.area){
      let average = (parseInt(formdata.number) + parseInt(formdata.city) + parseInt(formdata.area)) / 3
      return average.toFixed(2)
    }
  }

  function result(){
    const avg = parseFloat(averageValue())
    return avg <= 33 ? 'Bad' : avg <= 66 ? 'Average' : 'Good'
  }

  return (
    <div className="compatibility">
      <span>{result()}</span>
      <div className="score">
        <p>{averageValue()}%</p>
        <pp>SCORE</pp>
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
      <Navbar/>
    </div>
  );
};

export default CompatibilityResult; 