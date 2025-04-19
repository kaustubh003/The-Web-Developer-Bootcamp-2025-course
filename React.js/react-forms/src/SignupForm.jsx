import { useState } from "react";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder="firstname"
        value={firstName}
        onChange={updateFirstName}
        id="firstName"
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder="lastname"
        value={lastName}
        onChange={updateLastName}
        id="lastName"
      />
      <button>Submit</button>
    </div>
  );
}

export default SignupForm;
