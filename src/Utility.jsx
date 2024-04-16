import React, { useState } from 'react'
import './utility.css'

function Utility() {
  const [text, setText] = useState("")
  const [fonts, setFonts] = useState([])


  function submit(e) {
    setText(e.target.value)
  }
  function change(e) {
    e.preventDefault();
    if (e.target.id === 'first') {
      if(fonts.includes("uppercase")){
        setFonts(fonts.filter((item) =>item !== "uppercase"))
      }
      else{
        setFonts([...fonts , "uppercase"])
      }
     
    }

    else if (e.target.id === 'second') {
   if(fonts.includes("lowercase")){
    setFonts(fonts.filter((item)=>item !== "lowercase"))
   }
   else setFonts([...fonts, "lowercase"])
    }

    else if (e.target.id === 'third') {
      if(fonts.includes("italic")){
        setFonts(fonts.filter((item) => item !== "italic"))
      }

     else setFonts([...fonts, "italic"])
    }
    else if (e.target.id === 'fourth') {
      if(fonts.includes("bold")){
        setFonts(fonts.filter((item) => item !== "bold"))
      }

     else setFonts([...fonts, "bold"])
    }
  }

  return (
    <>
    <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>

      <form action="">
        <textarea  className={fonts.length > 0 ? fonts.join(" ") : ""}
        name="" id="" cols="40" rows="13" placeholder='write something here' value={text} onChange={submit}>{text}</textarea>
        <br />
        <button id='first' onClick={change}>Uppercase</button>
        <button id='second' onClick={change} >Lowercase</button>
        <button id='third' onClick={change}>Italic</button>

        <button id='fourth' onClick={change}>Bold</button>



      </form>

      </div>
    </>

  )
}

export default Utility