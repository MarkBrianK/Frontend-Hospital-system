import React, {useState} from "react";
// import useFetch from '../customHooks/UseFetch'
import useFetch from "../customHooks/UseFetch";
import ReadOnly from "./ReadOnlyRow";
import { useParams } from "react-router-dom";
import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import EditableRow from "./EditableRow";
const TablePatients = ({ patients, handleDelete }) => {   

const [editPatientId, setEditPatientId] = useState(null)

const [editFormData, setEditFormData] = useState({
  ticket_no:'',
  patient_no:'',
  reg_date:'',
  address:'',
  dob:'',
  contact_no:'',
  email:'',
  guardian:'',
  relation:'',
  gender:'',
  patient_status:'',
  name:'',

})

const handleEditFormSUbmit = (e) => {
  e.preventDefault()
  const editedPatient = {
    ticket_no: editFormData.ticket_no,
    patient_no: editFormData.patient_no,
    reg_date: editFormData.reg_date,
    address: editFormData.address,
    dob: editFormData.dob,
    contact_no: editFormData.contact_no,
    email: editFormData.email,
    guardian: editFormData.guardian,
    relation: editFormData.relation,
    gender: editFormData.guardian,
    patient_status: editFormData.patient_status,
    name: editFormData.name,
  };
}

// ============function to edit the form=======================

const handleEditFormChange = (event) => {
  event.preventDefault()
  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;
  const newFormData = { ...editFormData };
  newFormData[fieldName] = fieldValue
  setEditFormData(newFormData)
}

  const handleEditClick = (e, patient) => {
    e.preventDefault()
    setEditPatientId(patient.id)

    const formValues = {
      ticket_no: patient.ticket_no,
      patient_no: patient.patient_no,
      reg_date: patient.reg_date,
      address: patient.address,
      dob: patient.dob,
      contact_no: patient.contact_no,
      email: patient.email,
      guardian: patient.guardian,
      relation: patient.relation,
      gender: patient.gender,
      patient_status: patient.status,
      name: patient.name
    };
      setEditFormData(formValues);

  }
  const { id } = useParams();
  //  const { data: patient, error, loading } = useFetch("/patients/" + id);
  // const handleDelete = () => {
  //   console.log('delete')
  //   fetch(`/patients/${id}`, {
  //     // mode: 'no-cors',
  //     method: "DELETE",
  //   }).then(() => {
  //     console.log(id);
  //   });
  //   console.log(patient.id)
  // };


  return (
    <form>
    <MDBTable align="middle">
      <MDBTableHead className="sticky-top">
        <tr className="table-dark">
          <th scope="col">Ticket Number</th>
          <th scope="col">Patient Number</th>
          <th scope="col">Registration Date</th>
          <th scope="col">Address</th>
          <th scope="col">DoB</th>
          <th scope="col">Contact Number</th>
          <th scope="col">Email</th>
          <th scope="col">Guardian</th>
          <th scope="col">Relation</th>
          <th scope="col">Gender</th>
          <th scope="col">Status</th>
          <th scope="col" colSpan={2}>
            Action
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {patients && patients.map((patient) => {
          return (
            <>
              {editPatientId === patient.id ? (
                <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} patient={patient}/>
              ) : (
                <ReadOnly patient={patient} handleEditClick={handleEditClick} handleDelete={handleDelete}/>
              )}

             
            </>
          );
        })}
        {/* <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Alex Ray</p>
                <p className="text-muted mb-0">alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Consultant</p>
            <p className="text-muted mb-0">Finance</p>
          </td>
          <td>
            <MDBBadge color="primary" pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              Edit
            </MDBBtn>
          </td>
        </tr> */}
        {/* <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Kate Hunington</p>
                <p className="text-muted mb-0">kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Designer</p>
            <p className="text-muted mb-0">UI/UX</p>
          </td>
          <td>
            <MDBBadge color="warning" pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              Edit
            </MDBBtn>
          </td>
        </tr> */}
      </MDBTableBody>
    </MDBTable>

    </form>
  );
};
export default TablePatients;
