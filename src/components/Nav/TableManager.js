import React from "react";
import { useParams } from "react-router-dom";
import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import {CiEdit} from 'react-icons/ci'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import Manager from "../../pages/Manager";

const TableManager = ({ manager }) => {
  const { id } = useParams();
  const handleDelete = () => {
    console.log(id)
    fetch(`/manager/${id}`, {
      // mode: 'no-cors',
      method: "DELETE",
    }).then(() => {
      console.log(id);
    });
  };


  return (
    <MDBTable align="middle">
      <MDBTableHead className="sticky-top">
        <tr className="table-dark">
          <th scope="col">Ticcket Number</th>
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
        {manager.map((manager) => {
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
                    <p className="fw-bold mb-1">{manager.ticket_no}</p>
                    <p className="text-muted mb-0"></p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{manager.patient_no}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{manager.reg_date}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{manager.address}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{manager.dob}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{manager.contact_no}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{manager.email}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{manager.guardian}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{manager.relation}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{manager.gender}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{manager.manager_status}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm" onClick={handleDelete}>
                  <CiEdit />
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  <RiDeleteBin6Fill />
                </MDBBtn>
              </td>
            </tr>
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
  );
};
export default Manager;
