import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setUser }) => {
  // const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('')
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const navigate = useNavigate();
  const onFormInputChanged = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // alert("login success");
    // console.log(formData);

    // post user credentialas to login route

    fetch("/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);

          // console.log(user);
          navigate("/home");
          alert(errors);
        });
      } else {
        res.json().then((error) => setErrors(error.errors));
      }
    });
  };

  return (
    <div className="container text-center">
      <div className="row gx-4">
        <div className="col border">hello</div>
        <form className="col border">
          <h1>SignIn</h1>
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
            placeholder="PLease enter your password"
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

export default SignIn;
