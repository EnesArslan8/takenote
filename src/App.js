import {  useState} from 'react';
import './App.css';
import  {AiOutlinePlus}  from "react-icons/ai";
import Notes from './components/Notes';
import { useLocalStorage } from './useLocalStorage';


function App() {
  const [inputText,setInputText]=useState("");
  const [note,setNote]=useLocalStorage('notesData', []);
 
  
  
  const addNote=()=>{
    if(inputText.trim()!==""){
      setNote([...note,inputText]);
      setInputText("");
    }
  }
  
  return (
    <div className="App">
      <h1 className='title'> Not Alıcı</h1>
      <div className='inputArea'>
        <input value={inputText} onChange={(e)=>setInputText(e.target.value)}></input>
        <AiOutlinePlus className='addBtn' onClick={addNote}></AiOutlinePlus>
      </div>
      <Notes setNote={setNote} note={note}></Notes>
      
      
    </div>
  );
}

export default App;
