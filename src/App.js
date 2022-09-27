import './App.css';
import React, { useEffect } from "react"


function App() {
  const[time,setTime]=React.useState(0);
  const timeRef=React.useRef();
  const[isRunning,setIsRunning]=React.useState(false)
  useEffect(()=>{
       startTime();
       return StopTime;
  },[])
  const startTime=()=>{
    if(isRunning){
      return
    }
    timeRef.current=setInterval(()=>{
      setTime((prevTime)=>prevTime+1)
    },1000)
    setIsRunning(true)
  }
  const StopTime=()=>{
     clearInterval(timeRef.current);
     setIsRunning(false);
  }
  return (
    <div className='App'>
      <h1>Timer</h1>
      <h1>{time}</h1>
      <button onClick={startTime}>start</button>
      <button onClick={StopTime}>stop</button>
    </div>
  );
}

export default App;
