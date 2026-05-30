import React from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {

  const formFields = [
    { name: "name", type: "text", label: "Name" },
    { name: "email", type: "email", label: "Email" },
    { name: "password", type: "password", label: "Password" },
  ];

  // The callback function that recieves the final object
  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <Form onSubmit={handleFormSubmit} fields={formFields} />
    </div>
  )
}

export default App
