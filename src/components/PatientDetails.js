import React from 'react';
import {useParams} from 'react-router-dom'

const PatientDetails = () => {
    const {id} = useParams()
 return(
<div>Patient Details - {id}</div>

);
}
export default PatientDetails