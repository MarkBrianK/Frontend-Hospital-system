import React, {useState} from "react"
import "../pages/App.css"

const Registrar=(props)=>{
const[formData, setFormData] = useState({
  username: "",
  ticket_no: "",
  patient_no: "",
  reg_date: "",
  address: "",
  dob: "",
  contact_no: "",
  email: "",
  guardian: "",
  relation: "",
  gender: "",
  patient_status: ""



})
const handlePostSubmit = (event) =>{
  event.preventDefault();

  fetch("/patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then(setFormData)
  console.log(formData);
}
const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
};
  return(
//



  <div id="registrar" className="form-wrapper">
    <form onSubmit={handlePostSubmit} className="fcorn-register container">
      <p className="register-info">Note: All fields are required.</p>
      <div className="row">
        <p className="col-md-6"><input type="text" placeholder="Ticket Number"  name="ticket_no" onChange={handleChange}  required/></p>
        <p className="col-md-6"><input type="text" placeholder="Patient Name" name="username" onChange={handleChange}  required/></p>
      </div>
      <p><input type="email" placeholder="Email Address" name="email" onChange={handleChange} required/>
         <span className="extern-type">We'll keep this private.</span>
      </p>
      {/* <p><input type="password" placeholder="Password" required/>
        <span className="extern-type">Atleast 8 characters long.</span>
      </p>
      <p><input type="password" placeholder="Verify Password" required/></p> */}
      <div className="row">
        <p className="col-md-4"><input type="text" placeholder="Registration Date" name="reg_date"  onChange={handleChange} required/></p>
        <p className="col-md-4"><input type="date" id="birthday" name="dob" placeholder="calendar" onChange={handleChange} required/></p>
        <p className="col-md-4"><input type="text" placeholder="Contact" name="contact_no" onChange={handleChange} required/></p>
        <p className="col-md-12"><input type="text" name="guardian" placeholder="Parent/Guardian contact" onChange={handleChange}/><span className="extern-type">For emergencies</span></p>
      </div>
      <div className="row">
          <div>
           <label> Gender
          <select onChange={handleChange} name="gender">
          <option value="0" selected disabled>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non binary">Non binary</option>
          </select>
          </label>

        </div>
        </div>
        <div>
      </div>
        <br/>
        <p class="register-submit"><input type="submit" value="Register Now"/></p>
			</form>
    </div>
  )
}

export default Registrar
