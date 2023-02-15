import React from "react"

// CSS
import '../../CSS/Components/Login.css';

const ErrorLogin= () => {
  return (
    <div className="error-login-card d-center">
      <p className="error">
        Masukkan username dan password yang benar. Perhatikan penggunaan huruf
        kapital.
      </p>
    </div>
  )
}

export default ErrorLogin
