import React from "react"

// CSS
import '../../CSS/Components/Login.css';

const FormLogin = (props) => {
    const { email, password, setEmail, setPassword, handleSubmit } = props
  
    return (
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="signin-email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder='Contoh: johndee@gmail.com'
            autoComplete="off"
            required
          />
        </div>
        <div className="signin-password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder='6+ karakter'
            required
          />
        </div>
        <button className="btn-login">Sign In</button>
      </form>
    )
  }
  
  export default FormLogin
  