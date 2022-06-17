import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './CariKelompok.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Form } from './CariKelompok.styled'

const CariKelompok = () => {
  const [valNpm, setValNpm] = useState("");
  const [valLine, setValLine] = useState("");
  const [valInput1, setValInput1] = useState("flex")
  const [valInput2, setValInput2] = useState("none")
  const [check, setCheck] = useState(true)
  const notifyNPM = () => toast("⚠ Masukkan NPMmu terlebih dahulu!");
  const notifyLine = () => toast("⚠ Masukkan ID LINEmu terlebih dahulu!");

  const handleRadioChange = () => {
    if(valInput1 == "none"){
      setValInput1("flex")
      setValInput2("none")
      setCheck(true)
    }else{
      setValInput1("none")
      setValInput2("flex")
      setCheck(false)
    }
  }

  const handleSubmitNpm = (e) =>{
      e.preventDefault()
      if(valNpm == ""){
        notifyNPM()      
      }
  }

  const handleSubmitLine = (e) =>{
    e.preventDefault()
    if(valLine == ""){
      notifyLine()
    }
  }

  const handleInputNPM = () =>{
    if(valNpm == ""){
      notifyNPM()
    }
  }

  const handleInputLine = () =>{
    if(valLine == ""){
      notifyLine()
    }
  }

  return (
    <div className = "main-sect">
      <h2 className = "text-5xl font-bold title-2"> Cari Berdasarkan: </h2>
      <div className = "input">
        <div className = "my-8">
          <div className = "flex items-center gap-4 mb-4">
            <input checked = {check} onChange = {handleRadioChange} type = "radio" value = "NPM" className='cursor-pointer text-3xl radiobutton' name = "input" id = "npm"/>
            <div>
              <label for = "npm" className='cursor-pointer label'> NPM </label>
            </div>
          </div>
            <Form prop = {valInput1} onSubmit = {handleSubmitNpm} className = "gap-4 flex items-center desc">
                <input type="text"
                    pattern="[0-9]*"
                    value={valNpm}
                    onChange={(e) => setValNpm((v) => (e.target.validity.valid ? e.target.value : v))} 
                    placeholder='Masukkan NPM di sini...' className = "border-4 border-[#E1AA43] rounded-3xl px-10 py-3 text-xs mr-4"
                />
                
                <FontAwesomeIcon icon={faMagnifyingGlass} className = "hover:bg-[#E7BB68] duration-500 rounded-full p-4 bg-[#E1AA43] rounded-50" onClick = {handleInputNPM}/>
            </Form> 
        </div>

        <div className = "mb-8">
          <div className = "flex items-center gap-4 mb-4">
              <input checked = {!check} onChange = {handleRadioChange} type = "radio" value = "NPM" className='cursor-pointer radiobutton2' name = "input" id = "line"/>
              <div className = "flex flex-col">
                <label for = "line" className='cursor-pointer label2'> ID LINE </label>
              </div>
          </div>
          <Form prop = {valInput2} onSubmit = {handleSubmitLine} className = "gap-4 flex items-center desc2">
                  <input 
                    type = "text" 
                    placeholder='Masukkan ID Line di sini...' 
                    className = "border-4 border-[#E1AA43] rounded-3xl px-10 py-3 text-xs mr-4" 
                    val = {valLine}
                    onChange={(e) => setValLine((v) => (e.target.validity.valid ? e.target.value : v))} 
                    />
                  <FontAwesomeIcon icon={faMagnifyingGlass} onClick = {handleInputLine} className = "hover:bg-[#E7BB68] duration-500 rounded-full p-4 bg-[#E1AA43] rounded-50"/>
          </Form> 
        </div>
      </div>
      <ToastContainer position="top-right" pauseOnHover = {false} pauseOnFocusLoss = {false} hideProgressBar toastStyle={{ backgroundColor: "crimson", color: "white", fontSize: "12"}} autoClose={3000}/>
    </div>
  )
}

export default CariKelompok