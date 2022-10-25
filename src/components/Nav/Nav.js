import React from "react";

const Nav = () => {
  // logout functionality

  const onHandleLogoutClick = ({ setUser }) => {
    fetch("/users/signout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser(null);
        alert("successfully looged out");
      }
    });
  };

  return (
    <div>
      Nav
      <button onClick={onHandleLogoutClick}>Logout</button>
    </div>
  );
};

export default Nav;
