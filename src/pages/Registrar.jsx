import React from "react"
import "../pages/Registrar"

const Registrar=(props)=>{
  return(
//       <div className='container'>
//       <h3><strong className='blue'>{props.formName}</strong></h3>
//       <div className='col-md-12'>
//       <form>
//           <div className="form-group">
//           <label >Name</label>
//           <input type="text"   className="form-control " defaultValue={props.pObject? props.pObject.PatientName : ""} name='PatientName' onChange={props.handlerInput} placeholder="Name of the Patient"/>
//           </div>
//           <div className="form-group">
//               <label >Age</label>
//               <input type="number" className="form-control" defaultValue={props.pObject? props.pObject.PatientAge : ""} name='PatientAge' onChange={props.handlerInput} placeholder="Age of the Patient"/>
//           </div>
//           <div className="form-group">
//               <label >Problem</label> 
//               <input type="text" className="form-control" defaultValue={props.pObject? props.pObject.PatientProblem : ""} name='PatientProblem' onChange={props.handlerInput} placeholder="State the Problem"/>
//           </div>
//           <div className="form-group">
//               <label >Prescription</label>
//               <textarea type="text" className="form-control" defaultValue={props.pObject? props.pObject.PatientPrescription : ""} name='PatientPrescription' onChange={props.handlerInput} placeholder="Prescription of the Doctor"/>
//           </div>
//           <button type='button'  className="btn btn-primary" onClick={props.addDetails}>Submit</button>
//       </form>
//       </div>
//       </div>
      
//   )
// }



  <div className="form-wrapper"> 
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
        <p className="col-md-4"><input type="text" placeholder="Address" required/></p>
        <p className="col-md-4"><input type="text" placeholder="Contact" required/></p>
        <p className="col-md-12"><input type="text" placeholder="Parent/Guardian contact"/><span className="extern-type">For emergencies</span></p>
      </div>
      <div className="row"/>
        <p className="col-md-6 city-wrap">
          <select>
            <option value="0" selected disabled>Gender</option>
            <option value="1">Male </option>
            <option value="1">Female </option>
            <option value="1">Non binary </option>
          </select>
        </p>
        {/* <p className="col-md-6 country-wrap">
          <select>
            <option value="0" selected disabled>Country</option>
            <option value="1">U.S. Only</option>
            <option value="2">Outside U.S.</option>
          </select>
        </p> */}

        {/* <div className="form-group">
                <label htmlFor="appointmentDate">Appointment Date</label>
                <Input
                  type="datetime-local"
                  className="form-control"
                  name="appointmentDate"
                  value={appointmentDate}
                  onChange={onChangAppointmentDate}
                  validations={[required]}
                />
              </div> */}
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
