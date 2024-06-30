import React, { useState, useEffect } from "react";
import Progress from "./shared/progress";
import Navbar from "./navbar";
import MainProgress from "./shared/mainprogress";
import axios from "axios";

const CompatibilityResult = () => {
  const data = JSON.parse(localStorage.getItem('formdata')) || {};
  const [formdata, setFormData] = useState({})
  const [percent, setPercent] = useState(0)
  const [scorePercentage, setScorePercentage] = useState(0);

  useEffect(() => {
    if(data?._id){
      axios.get(`${process.env.REACT_APP_URL}/form?id=${data?._id}`).then((response) => {
        setFormData(response.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  },[data?._id])

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
    const interval = setInterval(() => {
      setScorePercentage((prev) => {
        const newScore = prev + 1;
        const targetScore = parseFloat(averageValue());
        return newScore <= targetScore ? newScore : targetScore; 
      });
    }, 40);
    return () => clearInterval(interval);
    // eslint-disable-next-line 
  }, [formdata]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + 1;
        return newPercent <= averageValue() ? newPercent : prevPercent;
      });
    }, 20);
    return () => clearInterval(timer);
    // eslint-disable-next-line 
  }, [formdata]);

  return (
    <div className="compatibility">
      <MainProgress percent={percent} background={'#FF572E'} />
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
