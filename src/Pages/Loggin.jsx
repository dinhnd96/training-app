import './Home.css';
import InputField from '../Component/InPut'
import Button from '../Component/Button'



function Loggin() {
  return (
    <div className="container">
      <div className="welcome-screen">
        <div className="welcome-sceen-content">
          <h1>WELCOME TO</h1>
          <p>NEW PRODUCT TEAM</p>
          <span className="welcome-screen-underline"></span>
        </div>
      </div>

      <div className="login-screen">
        <div className="login-screen-top">
          <h1 className="login-screen-top-h1">LOG IN</h1>
          <h1>HERE !</h1>
          <span className="login-screen-top-logo"></span>
        </div>

        <div className="login-screen-middle">
          <div className="login-screen-middle-input" >
            <InputField />
            <InputField />
          </div>
          <div className="login-screen-middle-btn">
            <Button />
            <Button />
          </div>
        </div>

        <div className="login-screen-bottom">
          <p>Một sản phẩm của New Product Team</p>
        </div>
      </div>
    </div>

  );
}

export default Loggin
