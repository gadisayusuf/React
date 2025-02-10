import React from "react";
import Login from "./Login";
import Form from "./Form";

let userIsRegistered = true;

function conditionalRendering() {
  
}
function App() {
  //return <div className="container">{userIsRegistered ?  <Login /> : <Form />  }</div>;
  return <div className="container">{
    <Form condition = {userIsRegistered} />
  }</div>;
}

export default App;
