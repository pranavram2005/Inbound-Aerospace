import React, { useState } from "react";
import axios from "axios";
import "./styles/contacts.css";

function Contacts() {
  const [Values, setValues] = useState({
    name: "",
    number: "",
    email: "", // Add initial state for email
    address: "",
    city: "",
    message: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async () => {
    if (
      Values.name === "" ||
      Values.number === "" ||
      Values.address === "" ||
      Values.city === "" ||
      Values.email === "" ||
      Values.message === ""
    ) {
      alert("All fields are required");
    } else {
      await axios
        .post("https:localhost:3000/api/v1/post", Values)
        .then((res) => {
          console.log(res);
          alert("data saved");
        })
        .catch((error) => {
          console.error("There was an error making the request:", error);
        });
      setValues({
        name: "",
        number: "",
        email: "", // Reset email here
        address: "",
        city: "",
        message: "",
      });
    }
  };
  return (
    <>
      <div className="main d-flex justify-content-center align-items-center">
        <div className="card-contact px-3 py-2">
          <h1>Contact Form</h1>
          <hr />
          <div className="contact-form d-flex flex-column justify-content-around">
            <div>
              <h5>Enter your name</h5>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={Values.name}
                onChange={change}
              />
            </div>
            <div>
              <h5>Enter your phone number</h5>
              <input
                type="text"
                placeholder="Enter your phone number"
                name="number"
                value={Values.number}
                onChange={change}
              />
            </div>

            <div>
              <h5>Enter your email </h5>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={Values.email}
                onChange={change}
              />
            </div>

            <div>
              <h5>Enter your Address</h5>
              <input
                placeholder="Enter your address"
                name="address"
                value={Values.address}
                onChange={change}
              />
            </div>
            <div className="imp-data ">
              <div>
                <h5>City</h5>
                <input
                  placeholder="Enter your city"
                  name="city"
                  value={Values.city}
                  onChange={change}
                />
              </div>
              <div>
                <h5>Message</h5>
                <textarea
                  placeholder="Enter your message"
                  name="message"
                  value={Values.message}
                  onChange={change}
                />
              </div>
            </div>
            <div>
              <button className="btn btn-primary" onClick={submit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contacts;
