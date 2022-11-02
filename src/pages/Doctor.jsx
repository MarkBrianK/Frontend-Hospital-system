import React, { useState, useEffect } from "react";
import TablePatient from "../components/TablePatient";

const Doctor = () => {
  const [patients, setPatients] = useState([]);

  // const getPatients = async () => {
  //   const res = await fetch("/patients");
  //   const data = await res.json();
  //   setPatients(data);
  //   console.log(patients);
  // };
  useEffect(() => {
    const getPatients = async () => {
      const res = await fetch("/patients");
      const data = await res.json();
      console.log(data);
      setPatients(data);
    };
    getPatients();
  }, []);

  // useEffect(() => {
  //   getPatients();
  // }, []);

  return (

      <TablePatient patients={patients}/>
  );
};

export default Doctor;
