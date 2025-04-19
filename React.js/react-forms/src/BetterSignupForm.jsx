import { useState } from "react";

function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    const changedField = e.target.name;
    const newValue = e.target.value;
    setFormData((currData) => {
      return { ...currData, [changedField]: newValue };
    });
  };
  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder="firstname"
        value={formData.firstName}
        onChange={handleChange}
        id="firstName"
        name="firstName"
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder="lastname"
        value={formData.lastName}
        onChange={handleChange}
        id="lastName"
        name="lastName"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        id="password"
        name="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignupForm;
