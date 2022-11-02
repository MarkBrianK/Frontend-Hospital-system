import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useEffect,useState } from 'react'
import { Container } from '@mui/system';


const Technicians = ({ handlePosting}) => {
 


  // const [tech, setTech] = useFetchData()
  // const deleteTech = ()=>{
  //   fetch(`http://localhost:9292/technicians/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type":"application/json"
  //     }
  //   })
  //   .then(res=>res.json())
  //   .then(data => console.log(data))
  //   .catch(err=>console.log(err))

  //   fetch("http://localhost:9292/technicians")
  //     .then(res => res.json())
  //     .then(data => {
  //       setTech(data)
  //       console.log(data)
  //     })
  //     .catch(err => console.log(err))
  // }



    const [formData, setFormData] = useState({
      patient_id: '',
      reg_form_id: '',
      Reg_number: '',
      Lab_number: '',
      Bill: '',
      Bill_status: '',
     

    })


      
    const [registrars, setRegistrars] = useState([])
    useEffect( () => {
      fetch("")
      .then(res => res.json())
      .then(data => setRegistrars(data))
    },[])

    function handleSubmit(e){
        e.preventDefault();
        fetch(``,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            handlePosting(data)
        })

        setFormData({
          patient_id: '',
          reg_form_id: '',
          Reg_number: '',
          Lab_number: '',
          Bill: '',
          Bill_status: '',
         
        })
    }

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }  

  return (
    <div>
      <div>
        <Container className='formContainer'>
    <div 
    style={{ fontSize: "20px", fontWeight: "bold" }}
    >
        Pharmacy Form 
    </div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Patient Id</InputLabel>
            <Input name="patient_id" value={formData.patient_id} onChange={handleChange}/>
            <FormHelperText>Please Enter Patient id</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 2, width: '35ch' }}>
            <InputLabel>Reg Form Id</InputLabel>
            <Input name="reg_form_id" value={formData.reg_form_id} onChange={handleChange}/>
            <FormHelperText>Please Enter Reg Form Id</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Reg Number</InputLabel>
            <Input name="Reg_number" value={formData.Reg_number} onChange={handleChange}/>
            <FormHelperText>Please Enter Reg No</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Lab Number</InputLabel>
            <Input name="lab_number" value={formData.lab_number} onChange={handleChange}/>
            <FormHelperText>Please Enter Lab Number</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Bill</InputLabel>
            <Input name="bill" value={formData.bill} onChange={handleChange}/>
            <FormHelperText>Please Enter BIll</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Bill status</InputLabel>
            <Input name="bill_status" value={formData.bill_status} onChange={handleChange}/>
            <FormHelperText>Please Enter Bill Status</FormHelperText>
        </FormControl>
      </div>

      <div>
      </div>
      <div>
      </div>
      
      
      <div>
      </div>
      
      <div>
        
      </div>
    </Box>
    <div>
        <FormControl sx={{ display: "flex", flexWrap: "wrap", m: 1, width: '10ch' }}>
            <Button variant='outlined' type='submit' onClick={handleSubmit}>
                Submit
            </Button>
        </FormControl>
      </div>
    </Container>
    </div>
    </div>
  );
}

export default Technicians;