import React, {useState} from "react"
import "../pages/App.css"

const Registrar=(props)=>{
  const [patient, setPatient] = useState("")
  const [ticket, setTicket] = useState("")
  const [ registrationDate, setRegistrationDate]= useState("")
  const [address, setAddress] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [guardian, setGuardian] = useState("")
  const [relation, setRelation] = useState("")
  const [gender, setGender] = useState("")
  const [status, setStatus] = useState("")


  function handleTicket(event) {
    setTicket(event.target.value);

  }
  function handleRegistration(event) {
    setRegistrationDate(event.target.value);

  }
  function handleAddress(event) {
    setAddress(event.target.value);

  }
  function handleBirthdate(event) {
    setBirthdate(event.target.value);

  }
  function handleContact(event) {
    setContact(event.target.value);

  }
  function handleEmail(event) {
    setEmail(event.target.value);

  }
  function handleGuardian(event) {
    setGuardian(event.target.value);

  }
  function handleRelation(event) {
    setRelation(event.target.value);

  }
  function handleGender(event) {
    setGender(event.target.value);

  }
  function handleStatus(event) {
    setStatus(event.target.value);

  }
  function handleSubmit(e){
    

  }



  return(
//



  <div id="registrar" className="form-wrapper">
    <form action="#non" method="post" className="fcorn-register container">
      <p className="register-info">Note: All fields are required.</p>
      <div className="row">
        <p className="col-md-6"><input type="text" placeholder="Ticket Number" required/></p>
        <p className="col-md-6"><input type="text" placeholder="Patient Name" required/></p>
      </div>
      <p><input type="email" placeholder="Email Address" required/>
         <span className="extern-type">We'll keep this private.</span>
      </p>
      {/* <p><input type="password" placeholder="Password" required/>
        <span className="extern-type">Atleast 8 characters long.</span>
      </p>
      <p><input type="password" placeholder="Verify Password" required/></p> */}
      <div className="row">
        <p className="col-md-4"><input type="text" placeholder="Registration Date" required/></p>
        <p className="col-md-4"><input type="date" id="birthday" name="birthday" placeholder="calendar" required/></p>
        <p className="col-md-4"><input type="text" placeholder="Contact" required/></p>
        <p className="col-md-12"><input type="text" placeholder="Parent/Guardian contact"/><span className="extern-type">For emergencies</span></p>
      </div>
      <div className="row"/>

          <div>
           <label> Gender
          <select>
          <option value="0" selected disabled>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non binary">Non binary</option>
          </select>
          </label>
        </div>




        <div>

          <p className="col-xs-12"><form action="upload.php" method="post" enctype="multipart/form-data"/>
          Upload your personal photo:
            <input type="file" name="fileToUpload" id="fileToUpload"/>
            <input type="submit" value="Upload Image" name="submit" required/>
         </p>
      </div>
        <br/>
      <p className="register-toggle">
        <label for="register-agree" className="toggle-label" data-on="YES" data-off="NO">
          <input type="checkbox" id="register-agree" className="toggle-input"/>
          <span className="toggle-handle"></span>
        </label>
        <span class="info">Do you agree to the <a href="/#">terms and conditions?</a></span>
				</p>
				<p class="register-submit"><input type="submit" value="Register Now"/></p>
			</form>
    </div>
  )
}

export default Registrar
