import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App";
import { App2 } from "./components/App";
import contacts from './components/contacts';

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components. 

createRoot(document.getElementById("root")).render(
  <div>
  <h1 className="heading">My Contacts</h1>
    <App2
      name={contacts[0].name}
      src={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email}

      />
    <App name="Jack Bauer"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="+987 654 321"
      email="jack@nowhere.com"/>
    <App name="Chuck Norris"
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="+918 372 574"
      email="gmail@chucknorris.com"/>
  </div>
);