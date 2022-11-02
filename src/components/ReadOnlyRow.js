import React from 'react'
import { EditIcon } from "./assets/icons/EditIcon";
import {useParams} from 'react-router-dom'

import { DeleteIcon } from "./assets/icons/DeleteIcon";
import { MDBBtn} from "mdb-react-ui-kit";

const ReadOnlyRow = ({patient, handleEditClick, handleDelete}) => {

    const {id} = useParams()
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
          <p className="fw-bold mb-1">{patient.ticket_no}</p>
          <p className="text-muted mb-0"></p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">{patient.patient_no}</p>
      {/* <p className="text-muted mb-0">IT department</p> */}
    </td>
    <td>
      <p className="fw-normal mb-1">{patient.reg_date}</p>
      {/* <p className="text-muted mb-0">IT department</p> */}
    </td>
    <td>
      <p className="fw-normal mb-1">{patient.address}</p>
      {/* <p className="text-muted mb-0">IT department</p> */}
    </td>
    <td>
      <p className="fw-normal mb-1">{patient.dob}</p>
      {/* <p className="text-muted mb-0">IT department</p> */}
    </td>
    <td>
      <p className="fw-normal mb-1">{patient.contact_no}</p>
      {/* <p className="text-muted mb-0">IT department</p> */}
    </td>
    <td>
      <p className="fw-normal mb-1">{patient.email}</p>
      {/* <p className="text-muted mb-0">IT department</p> */}
    </td>
    <td>
      <p className="fw-normal mb-1">{patient.guardian}</p>
      {/* <p className="text-muted mb-0">IT department</p> */}
    </td>
    <td>
      <p className="fw-normal mb-1">{patient.relation}</p>
      {/* <p className="text-muted mb-0">IT department</p> */}
    </td>
    <td>
      <p className="fw-normal mb-1">{patient.gender}</p>
      {/* <p className="text-muted mb-0">IT department</p> */}
    </td>
    <td>
      <p className="fw-normal mb-1">{patient.patient_status}</p>
      {/* <p className="text-muted mb-0">IT department</p> */}
    </td>
    <td>
      <MDBBtn color="link" rounded size="sm">
        {/* <CiEdit /> */}
        <EditIcon size={20} fill="#FF0080" onClick={(e)=> handleEditClick(e, patient)}/>
      </MDBBtn>
    </td>
    <td>
      <MDBBtn
        color="link"
        rounded
        size="sm"
        onClick={() => {
          console.log("delete");
          fetch("/patients/" + id, {
            // mode: 'no-cors',
            method: "DELETE",
          }).then(() => {
            console.log(id);
          });
          //  console.log(patient.id);
        }}
      >
        <DeleteIcon size={20} fill="#FF0080" onClick={handleDelete}/>{" "}
      </MDBBtn>
    </td>
  </tr>
);
}

export default ReadOnlyRow