import React,{useState} from 'react';


function Follow() {
  const [state,setState]=useState(false);
  let url="https://github.com/Ashmit-1131";
  return (
    <div className="App">
     <a href={url}>LinkedIn handle</a>
    </div>
  );
}

export default Follow;