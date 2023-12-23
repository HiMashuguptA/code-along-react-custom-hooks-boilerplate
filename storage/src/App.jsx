import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputText, SetInputText] = useState('')
  // function handleClick(){
  //   let values = localStorage.setItem(inputText)
  //   SetInputText(values)
    const data = useRef()
    useEffect(()=>{
      const store = localStorage.getItem('input Value')
      if(store){
        SetInputText(store)
      }
    },[])
    const handleClick=()=>{
      SetInputText(data.current.value)
      localStorage.setItem("input Value",data.current.value);
      sessionStorage.setItem("input Value",data.current.value);
    }


  return (
    <>
      <input ref={data} value={inputText} type="text" style={{width:"280px",height:"40px",borderRadius:"4px",position:"absolute",left:"0",top:"5px",fontSize:"20px"}} onChange={handleClick}/>
    </>
  )
  }

export default App
