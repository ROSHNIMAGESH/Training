import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    // var [text, setText] = useState("")
    // var prevText = useRef("");
    // useEffect(() => {
    //     prevText.current = text
    // }, [text])
    // return (
    //     <section>
    //         <h1>This is an example of UseRef</h1>
    //         <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
    //         <h2>My current Render is {text}</h2>
    //         <h3>My previous Render is {prevText.current}</h3>
    //     </section>
    // )

    var [number, setNumber] = useState("")
    var prevNumber = useRef("");
    useEffect(() => {
        prevNumber.current = number
    }, [number])
    return (
        <section>
            <h1>This is an example of UseRef</h1>
            <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }} />
            <h2>My current Render is {number}</h2>
            <h3>My previous Render is {prevNumber.current}</h3>
        </section>
    )
}

export default UseRef