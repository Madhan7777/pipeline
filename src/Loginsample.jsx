import React from 'react'

function Loginsample() {
  return (
    <div className='App'>
        <label for="uname" role="label"><b>UserName</b></label>
        <input type="text" role="username" name="uname" required />
        <br/>

        <label for="psw" role="pwdlabel"><b>Password</b></label>
        <input type="password" placeholder="Enter Your Password" name="psw" required />
        <br/>

        {/* <button type="submit" data-testid */}
      
    </div>
  )
}

export default Loginsample
