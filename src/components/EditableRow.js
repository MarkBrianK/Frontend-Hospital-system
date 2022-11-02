import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { DeleteIcon } from './assets/icons/DeleteIcon';
import { EditIcon } from './assets/icons/EditIcon';
import { useParams } from 'react-router-dom';



const EditableRow = ({editFormData, handleEditFormChange, patient}) => {


    const {id} = useParams()
    const handleDeletePatient = (e) => {
              e.preventDefault()
              console.log("delete");
              fetch(`/patients/${patient.id}`, {
                method: "DELETE",
              }).then(() => {
                console.log(id);
              });
            }
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3">
            {/* <p className="fw-bold mb-1">patient.ticket_no</p> */}
            <input
              className="form-control"
              name="patient_no"
              type="text"
              placeholder="patient number..."
              onChange={handleEditFormChange}
              value={editFormData.ticket_no}
            ></input>
            {/* <p className="text-muted mb-0"></p> */}
          </div>
        </div>
      </td>
      <td>
        {/* <p className="fw-normal mb-1">patient.patient_no</p> */}
        <input
          className="form-control"
          name="patient_no"
          type="text"
          placeholder="patient number..."
          onChange={handleEditFormChange}
          value={editFormData.patient_no}
        ></input>

        {/* <p className="text-muted mb-0">IT department</p> */}
      </td>
      <td>
        {/* <p className="fw-normal mb-1">reg_date</p> */}
        <input
          className="form-control"
          name="reg_date"
          type="text"
          placeholder="registration date..."
          onChange={handleEditFormChange}
          value={editFormData.reg_date}
        ></input>

        {/* <p className="text-muted mb-0">IT department</p> */}
      </td>
      <td>
        {/* <p className="fw-normal mb-1">patient.address</p> */}
        <input
          className="form-control"
          name="address"
          type="text"
          placeholder="patient address..."
          onChange={handleEditFormChange}
          value={editFormData.address}
        ></input>

        {/* <p className="text-muted mb-0">IT department</p> */}
      </td>
      <td>
        {/* <p className="fw-normal mb-1">patient.dob</p> */}
        <input
          className="form-control"
          name="dob"
          type="text"
          placeholder="date of birth..."
          onChange={handleEditFormChange}
          value={editFormData.dob}
        ></input>

        {/* <p className="text-muted mb-0">IT department</p> */}
      </td>
      <td>
        {/* <p className="fw-normal mb-1">patient.contact_no</p> */}
        {/* <p className="text-muted mb-0">IT department</p> */}
        <input
          className="form-control"
          name="contact_no"
          type="text"
          placeholder="contact number..."
          onChange={handleEditFormChange}
          value={editFormData.contact_no}
        ></input>
      </td>
      <td>
        {/* <p className="fw-normal mb-1">patient.email</p> */}
        <input
          className="form-control"
          name="email"
          type="text"
          placeholder="email"
          onChange={handleEditFormChange}
          value={editFormData.email}
        ></input>

        {/* <p className="text-muted mb-0">IT department</p> */}
      </td>
      <td>
        {/* <p className="fw-normal mb-1">patient.guardian</p> */}
        {/* <p className="text-muted mb-0">IT department</p> */}
        <input
          className="form-control"
          name="guardian"
          type="text"
          placeholder="guardian"
          onChange={handleEditFormChange}
          value={editFormData.guardian}
        ></input>
      </td>
      <td>
        {/* <p className="fw-normal mb-1">patient.relation</p> */}
        {/* <p className="text-muted mb-0">IT department</p> */}
        <input
          className="form-control"
          name="relation"
          type="text"
          placeholder="relation..."
          onChange={handleEditFormChange}
          value={editFormData.relation}
        ></input>
      </td>
      <td>
        {/* <p className="fw-normal mb-1">patient.gender</p> */}
        {/* <p className="text-muted mb-0">IT department</p> */}
        <input
          className="form-control"
          name="gender"
          type="text"
          placeholder="gender..."
          onChange={handleEditFormChange}
          value={editFormData.gender}
        ></input>
      </td>
      <td>
        {/* <p className="fw-normal mb-1">patient.patient_status</p> */}
        {/* <p className="text-muted mb-0">IT department</p> */}
        <input
          className="form-control"
          name="patient_status"
          type="text" 
          placeholder="status"
          onChange={handleEditFormChange}
          value={editFormData.patient_status}
        ></input>
      </td>
      <td>
        <MDBBtn color="link" rounded size="sm">
          {/* <CiEdit /> */}
          <EditIcon size={20} fill="#FF0080" />
        </MDBBtn>
      </td>
      <td>
        {/* <MDBBtn
          color="link"
          rounded
          size="sm"
        >
          <DeleteIcon size={20} fill="#FF0080" />{" "}
        </MDBBtn> */}
        {/* <MDBBtn color="link" rounded size="sm">
          <DeleteIcon
            size={20}
            fill="#FF0080"
            onClick={()=>handleDeletePatient(id)}
          />
        </MDBBtn> */}
      </td>
    </tr>
  );
}

export default EditableRow