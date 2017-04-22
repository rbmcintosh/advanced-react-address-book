import React from "react";
import "../logo.svg";
import "../App.css";

function ListOfUsers(props) {

    let users = props.users;
    let userDivs = users.map(function (user, index) {
        return <div key={index}>{user.first_name}</div>
    });
  
  return (
    <div>
      {userDivs}
    </div>
  );
}

export default ListOfUsers;