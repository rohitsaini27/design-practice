import React, { useState } from "react";
import Label from "./shared/label";
import { useNavigate } from "react-router-dom";
import TextInput from "./shared/textinput";
import axios from 'axios';

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
    if (!formdata.name || !formdata.number || !formdata.area || !formdata.city || !formdata.description) {
      setError("Fields must not be empty");
    } else if (parseInt(formdata.number) > 100 || parseInt(formdata.city) > 100 || parseInt(formdata.area) > 100) {
      setError("Fields must not be greater than 100");
    } else {
      axios.post(`${process.env.REACT_APP_URL}/form`, formdata)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("formdata", JSON.stringify(response.data));
          navigate("/compatibility");
          setFormData({
            name: "",
            number: "",
            area: "",
            city: "",
            description: "",
          });
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setError("Failed to submit form. Please try again later.");
        });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    let cleanValue = value;

    // Validate and sanitize input based on field
    if (name === "name" || name === "description") {
      cleanValue = value.replace(/[^A-Za-z\s]/g, "");
    } else if (name === "number" || name === "area" || name === "city") {
      cleanValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanValue,
    }));

    setError(""); // Clear error on input change
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Label title="Number" />
          <TextInput
            placeholder="12"
            name="number"
            value={formdata.number}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Label title="Area" />
          <TextInput
            placeholder="12"
            name="area"
            value={formdata.area}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Label title="City" />
          <TextInput
            placeholder="12"
            name="city"
            value={formdata.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Label title="Description" />
          <TextInput
            placeholder="This is where..."
            name="description"
            value={formdata.description}
            onChange={handleChange}
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
