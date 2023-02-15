import { Link } from "react-router-dom"

// CSS
import '../../CSS/Components/Login.css';

// MEDIA IMAGE
import cover from "../../Assets/Media/image2.png"
import Rectangle62 from '../../Assets/Media/Rectangle62.png';

// COMPONENTS
import FormLogin from "./FormLogin"
import ErrorLogin from "./ErrorLogin"

const Login = (props) => {
  const { errMsg, logging } = props

  return (
    <div className="signin">
      <div className="left">
        <img className="cover-login" src={cover} alt="" />
      </div>
      <div className="right login">
      <Link to="/dashboard">
              <h3>masuk sementara</h3>
            </Link>
        <div className="signin-container login">
          <div className="logo-login">
            
            <img className="logo" src={Rectangle62} alt="" />
          </div>
          <h2 className="welcome">Welcome Admin BCR!</h2>
       
          {errMsg && <ErrorLogin />}
          <FormLogin {...props} />
          {logging && !errMsg && (
            <div>
              <p>Signing...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
