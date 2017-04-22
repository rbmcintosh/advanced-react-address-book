import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserDetail from "./components/UserDetail";
import ListOfUsers from "./components/ListOfUsers";


function App(props) {
  return (
    <div className="App">
      <ListOfUsers users={props.users} />
      <UserDetail user={props.user[0]} />
    </div>
  );
}

export default App;
