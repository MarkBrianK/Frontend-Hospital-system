import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/App.css"
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card'



const Home = () => {
  // const publicUrl = "https://calendar.google.com/calendar/embed?src=kariukimarkbrian%40gmail.com&ctz=UTC"
  return (
    //     <div >
    //      <div class="container">
    //   <div class="row">
    //     <div class="col">
    //     <Card style={{ width: '20rem', backgroundColor:'#0A9396', color: 'white' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>DOCTORS</Card.Title>
    //     <Card.Text>

    //     </Card.Text>

    //   </Card.Body>
    // </Card>
    //     </div>
    //     <div class="col">
    //     <Card style={{ width: '20rem',backgroundColor:'#F3529C', color: 'white' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>PATIENTS</Card.Title>
    //     <Card.Text>

    //     </Card.Text>

    //   </Card.Body>
    // </Card>
    //     </div>
    //     <div class="col">
    //     <Card style={{ width: '20rem' ,backgroundColor:'#0096C7', color: 'white' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>STAFF</Card.Title>
    //     <Card.Text>

    //     </Card.Text>

    //   </Card.Body>
    // </Card>
    //     </div>
    //     <div class="col">
    //     <Card style={{ width: '20rem' ,backgroundColor:'#F48C06', color: 'white'}}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>APPOINTMENTS</Card.Title>
    //     <Card.Text>

    //     </Card.Text>

    //   </Card.Body>
    // </Card>
    //     </div>
    //   </div>
    // </div>
    //          <iframe className="calendar" src={publicUrl} >
    //         </iframe>
    //     </div>
    <>
   <button type="button" class="btn btn-primary"> <Link to="/adminsignin">Admin</Link></button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
    </>
  );
};

export default Home;
