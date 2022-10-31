import React, { useState, useEffect } from "react";
import TableManager from "../components/Nav/TableManager";

const Manager = () => {
  const [manager, setManager] = useState([]);

  const getManager = async () => {
    const res = await fetch("/manager");
    const data = await res.json();
    setManager(data);
    console.log(manager);
  };

  useEffect(() => {
    getManager();
  }, []);

  return (
    <>
      <TableManager manager={manager}/>

      <div className="mx-auto mt-4">
        {/* <TablePatient patients={patients} /> */}

        {/* <TablePatient /> */}
      </div>
    </>
  );
};

export default Manager;
