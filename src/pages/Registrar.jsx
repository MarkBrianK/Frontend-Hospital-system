import React from "react"
import "../pages/App.css"

const Registrar=(props)=>{
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
