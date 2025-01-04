import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <br />
        <input type="text" placeholder='email' value={email}/>
        <br /><br />
        <input type="password" placeholder='password' value={password}/>
        <br /><br />
        <button type="reset">Reset</button>
        <br /><br />
        <button type="submit">Login</button>
        <br /><br />
      </form>
    </div>
  )
}

export default Login