import React from 'react'

const Signup = () => {
  return (
    <div>
        <form>
            <br />
            <input type="text" placeholder='firstname'/>
            <br /><br />
            <input type="text" placeholder='lastname' />
            <br /><br />
            <input type="text" placeholder='email' />
            <br /><br />
            <input type="password" placeholder='password' />
            <br /><br />
            <button type="reset">Reset</button> 
            <br /><br />
            <button type="submit">Submit</button>
            <br /><br />
        </form>
    </div>
  )
}

export default Signup