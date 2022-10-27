import React, {useState, useEffect} from "react";
import TablePatient from '../components/TablePatient'

const Doctor = () => {
const [patients, setPatients] = useState([])

const getPatients = async()=>{
  const res = await fetch('http://localhost:3000/patients');
  const data = await res.json()
  setPatients(data)
  // console.log(patients)
}

useEffect(() => {
  getPatients()
}, [])

  return (
    <>
      <TablePatient/>

      <div className="mx-auto mt-4">
        <TablePatient patients={patients}/>

        {/* <TablePatient /> */}
      </div>
    </>
  );
};

export default Doctor;



