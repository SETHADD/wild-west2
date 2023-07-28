
import { useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
const [handleClick,sethandleClick] = useState('')

const handleAPI = async()=> {
    const API = `https://wildwest2.onrender.com/survival`
    const res = await axios.get(API)
    sethandleClick(res.data)
    console.log(res)
}


  return (
    <div className="App">
    <button onClick={handleAPI}>CLICK TO CHANGE</button>
    <p>{handleClick}</p>
    </div>
  );
}

export default App;
