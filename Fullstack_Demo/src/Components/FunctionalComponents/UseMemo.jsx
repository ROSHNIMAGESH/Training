import React, { useMemo, useState } from 'react'

var slowFunction = (number) => {
  for (let i = 0; i < 10; i++) { }
  return number * 2
}

const UseMemo = () => {
  var [num, setNum] = useState(0)
  var [theme, setTheme] = useState(true)
  var darkLight = {
    backgroundColor : (theme) ? "Black" : "White",
    color : (theme) ? "White" : "Black"
  }
  var doublingANumber = useMemo(()=>{
    return slowFunction(num)
  },[num])
  return (
    <div>
      <h1>This is useMemo Example</h1>
      <input type="number" value={num} onChange={(event) => setNum(event.target.value)} />
      <br /><br />
      <button onClick={()=>setTheme(theme = !theme)}>Toggle Theme</button>
      <h2 style={darkLight}>{doublingANumber}</h2>
    </div>
  )
}

export default UseMemo