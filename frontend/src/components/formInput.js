import React, { useState } from "react";
import Label from "./shared/label";
import { useNavigate } from "react-router-dom";
import TextInput from "./shared/textinput";

const FormInput = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    name: "",
    number: "",
    area: "",
    city: "",
    description: "",
  });

  const [error, setError] = useState("");

  function handleSubmit() {
    if (
      !formdata.name ||
      !formdata.number ||
      !formdata.area ||
      !formdata.city ||
      !formdata.description
    ) {
      setError("Feild must not be empty");
    }else if(formdata.number > 100 || formdata.city > 100 || formdata.area > 100){
      setError("Feild must not be greater than 100");
    }else{
      localStorage.setItem("formdata",JSON.stringify(formdata))
      navigate("/compatibility");
      setFormData({
        name: "",
        number: "",
        area: "",
        city: "",
        description: "",
      });
    }
  }

  function nameHandler(e) {
    const { name, value } = e.target;
    const cleanValue = value.replace(/[^A-Za-z\s]/g, "");
    setFormData((prev) => ({
      ...prev,
      [name]: cleanValue,
    }));
    setError("")
  }

  function numberHanlder(e) {
    const { name, value } = e.target;
    const cleanValue = value.replace(/\D/g, "");
    setFormData((prev) => ({
      ...prev,
      [name]: cleanValue,
    }));
    setError("")
  }

  return (
    <>
      <div className="form">
        <div className="subtitle-tab">Subtitle</div>
        {error && <p>{error}</p>}
        <div className="form-group">
          <Label title="Name" />
          <TextInput
            placeholder="John Doe"
            name="name"
            value={formdata.name}
            onChange={nameHandler}
          />
        </div>
        <div className="form-group">
          <Label title="Number" />
          <TextInput
            placeholder="12"
            name="number"
            value={formdata.number}
            onChange={numberHanlder}
          />
        </div>
        <div className="form-group">
          <Label title="Area" />
          <TextInput
            placeholder="12"
            name="area"
            value={formdata.area}
            onChange={numberHanlder}
          />
        </div>
        <div className="form-group">
          <Label title="City" />
          <TextInput
            placeholder="12"
            name="city"
            value={formdata.city}
            onChange={numberHanlder}
          />
        </div>
        <div className="form-group">
          <Label title="Description" />
          <TextInput
            placeholder="This is where..."
            name="description"
            value={formdata.description}
            onChange={nameHandler}
          />
        </div>
      </div>
      <div>
        <button className="button" onClick={handleSubmit}>
          GET COMPATIBILITY
        </button>
      </div>
    </>
  );
};

export default FormInput;
