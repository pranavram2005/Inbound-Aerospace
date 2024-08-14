import React, { useState, useEffect } from "react";
import "./styles/forms.css";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
  });

  const [submitClicked, setSubmitClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Log form data before submission
    console.log("Submitting form data:", formData);

    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.resume === "" ||
      formData.message === ""
    ) {
      alert("All fields are required");
    } else {
      setSubmitClicked(true);
    }
  };

  useEffect(() => {
    const submitForm = async () => {
      try {
        const response = await fetch("https://ccx34t.csb.app/api/v1/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Server response:", data);
        alert("Data saved");

        // Clear form after submission
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          resume: "",
          message: "",
        });
      } catch (error) {
        console.error("There was an error making the request:", error);
      }
    };

    if (submitClicked) {
      submitForm();
      setSubmitClicked(false);
    }
  }, [submitClicked, formData]);

  return (
    <div className="career-form-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            id="input"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            id="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            id="input"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Resume/CV Link:
          <input
            id="input"
            type="text"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            id="input"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
