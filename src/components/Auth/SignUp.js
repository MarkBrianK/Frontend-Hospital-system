import React, { useState } from "react";

const SignUp = ({ setLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // send user creds to signup route

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch("/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      
      .then(setLogin);
    alert("signup success");
    console.log(formData);
  };
  const onFormInputChanged = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container text-center">
      <div className="row gx-4">
        <div className="col border">hello</div>
        <form className="col border">
          <h1>SignUp</h1>
          <input
            name="username"
            type="type"
            className="form-control my-2"
            placeholder="enter your user name"
            onChange={onFormInputChanged}
          ></input>
          <input
            name="email"
            type="email"
            className="form-control my-2"
            placeholder="type in your email address"
            onChange={onFormInputChanged}
          ></input>
          <input
            name="password"
            type="password"
            className="form-control my-2"
            placeholder="Please enter your password"
            onChange={onFormInputChanged}
          ></input>
          <input
            name="password_confirmation"
            type="password"
            className="form-control my-2"
            placeholder="Please reenter your password to confirm"
            onChange={onFormInputChanged}
          ></input>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={onFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
