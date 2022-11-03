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
<>
{/* <body id="signup"> */}
  <main className="container">
    <div className="back"></div>
    <div className="brand">
      <div className="logo">
        <img height="64" src="https://thumbs.dreamstime.com/b/caduceus-medical-symbol-isolated-white-background-d-render-caduceus-medical-symbol-isolated-145721309.jpg" alt="Panda Logo" />
        <h1>
          <span className="name"><span>Touching</span><span>Lives</span></span>Foundation
        </h1>
      </div>
      <span className="copyright">Photo by
        <a href="https://unsplash.com/@filipz" target="_blank" rel="noreferrer" title="Photographer">Filip Zrnzević</a>
        on
        <a href="https://unsplash.com/photos/QsWG0kjPQRY" target="_blank" rel="noreferrer"title="Background Photo">Unsplash</a></span>
    </div>
    <div className="formWrapper">
      <div className="form">
        <h2>Silver Crest Hospital</h2>
        <form id="form" method="get" action="#">
          <div className="inputWrapper">
            <input type="text" name="first" id="first" required />
            <label for="first">Ticket Number</label>
          </div>
          <div className="inputWrapper">
            <input type="text" name="last" id="last" required />
            <label for="last">Patient Name</label>
          </div>
          <div className="inputWrapper">
            <input type="reg_date" name="reg_date" id="reg_date" required />
            <label for="reg_date">Registration Date</label>
          </div>
          <div className="inputWrapper">
            <input type="Address" name="Address" id="Address" required />
            <label for="Address">Address</label>
          </div>
          <div className="inputWrapper">
            <input type="dob" name="dob" id="dob" required />
            <label for="dob">Date of Birth</label>
          </div>
          <div className="inputWrapper">
            <input type="contact_no" name="contact_no" id="contact_no" required />
            <label for="contact_no">Phone Number</label>
          </div>
          <div className="inputWrapper">
            <input type="email" name="email" id="email" required />
            <label for="email">Email</label>
          </div>
          <div className="inputWrapper">
            <input type="tel" name="guardian" id="guardian" required />
            <label for="guardian">Guardian Contact</label>
          </div>
          <div className="inputWrapper">
            <input type="relation" name="relation" id="relation" required />
            <label for="relation">Guardian Relation</label>
          </div>
          <div className="inputWrapper">
            <input type="gender" name="gender" id="gender" required />
            <label for="gender"> gender</label>
          </div>
          <div className="inputWrapper">
            <input type="patient_status" name="patient_status" id="patient_status" required />
            <label for="patient_status"> patient_status</label>
          </div>
        </form>
        <input form="form" type="submit" name="register" id="register" value="REGISTER" />
        
      </div>
    </div>
  </main>
{/* </body> */}
</>
  )
}

export default Registrar
