import React from 'react';
import './App.css';

function App (props){
    return(
    <div>
        <h2>{props.name}</h2>
        <img
        src={props.src}
        alt="avatar_img"
        />
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>
    );
}

function App2(props) {
  return (
    <div >
      <div className="card">
        <div className="top">
          <h2 className='name'>{props.name}</h2>
          <img className='circle-img' 
            src={props.src}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className='info'>{props.phone}</p>
          <p className='info'>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
 export {App2};