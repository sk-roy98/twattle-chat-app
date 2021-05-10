import "./darkmode.css";

function Darkmode({darkmode, setDarkmode}){
    return(
      <div className=  {darkmode ? "container darkmode" : "container lightmode"}>
        <div >
        <span className = "sun" style = {{color: darkmode ? "grey" : "yellow"}}>☀︎</span>
        <label className = "switch">
            <input type ="checkbox" onChange = {() => 
            setDarkmode(prev=>!prev)
            } />
            <span className = "slider round"> </span>
        </label>
        <span className = "moon" style = {{color: darkmode ? "violet" : "grey"}}>☽</span>
        </div>
      </div>
  
    )
  
  }
  export default Darkmode