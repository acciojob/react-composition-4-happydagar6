import React, { useState } from 'react';

const Form = ({ onSubmit, fields }) => {
  // Dynamically initialize the state based on the 'fields' array
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    onSubmit(formData); // Call the provided callback with the complete data object
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '250px', gap: '5px' }}>
      {fields.map((field) => (
        <div key={field.name} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit" style={{ width: 'fit-content', marginTop: '5px' }}>
        Submit
      </button>
    </form>
  );
};

export default Form;