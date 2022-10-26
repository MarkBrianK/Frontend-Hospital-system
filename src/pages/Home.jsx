import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/App.css"

const Home = () => {
  const publicUrl = "https://calendar.google.com/calendar/embed?src=kariukimarkbrian%40gmail.com&ctz=UTC"
  return (
    <div className="calendar">
         <iframe src={publicUrl}>
        </iframe>
    </div>
  );
};

export default Home;
