import { useState} from 'react';
import './App.css';
import  {AiOutlinePlus}  from "react-icons/ai";
import Notes from './components/Notes';



function App() {
  const [inputText,setInputText]=useState("");
  const [note,setNote]=useState([])

  
  const addNote=()=>{
    setNote([...note,inputText]);
    setInputText("");
  }

  console.log(note)
  return (
    <div className="App">
      <h1 className='title'> Not Alıcı</h1>
      <div className='inputArea'>
        <input value={inputText} onChange={(e)=>setInputText(e.target.value)}></input>
        <AiOutlinePlus className='addBtn' onClick={addNote}></AiOutlinePlus>
      </div>
      <Notes note={note}></Notes>
      
      
    </div>
  );
}

export default App;
