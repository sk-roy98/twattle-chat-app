import {useState} from "react";
import "./darkmode.css";

function Darkmode(){
    const [darkmode, setDarkmode] = useState(false)
    return(
      <div className=  {darkmode ? "container darkmode" : "container lightmode"}>
        <div >
        <span className = "sun" style = {{color: darkmode ? "grey" : "yellow"}}>☀︎</span>
        <label className = "switch">
            <input type ="checkbox" onChange = {() => 
            setDarkmode(!darkmode)
            } />
            <span className = "slider round"> </span>
        </label>
        <span className = "moon" style = {{color: darkmode ? "#37235c" : "grey"}}>☽</span>
        </div>
      </div>
  
    )
  
  }
  export default Darkmode