import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffect = () => {
    //     var [text,setText]=useState("Kongu");
    //     useEffect(()=>{
    //         console.log(text);
    //     },[text])
    //   return (
    //     <div>
    //         <h1>Use Effect Example</h1>
    //         <input type="text" placeholder='Enter text' value={text} onChange={(event)=>{setText(event.target.value)}}/>
    //         <br /><br />
    //         <h2>The text typed is {text}</h2>
    //     </div>
    //   )

    // var [Post, setPost] = useState([]);
    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
    //         console.log(res.data);
    //         setPost(res.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }, []);
    // return (
    //     <section>
    //         <h1>Fetching Data from JSON PlaceHolder API</h1>
    //         {Post.length}
    //         <ol>
    //             {Post.map((post,element) => (<li key={element}>{post.title}</li>))}
    //         </ol>
    //     </section>
    // )

    var [Photos, setPhotos] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos/").then((res) => {
            console.log(res.data);
            setPhotos(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <section>
            <h1>Fetching Data from JSON PlaceHolder API</h1>
            {Photos.map((photos,element) => (<li key={element}>{photos.url}</li>))}
        </section>
    )
}

export default UseEffect
// value={text} in input tag doesn't allow us to see the text