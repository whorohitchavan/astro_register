import React from "react";
import SignUp from "./SignUp";
import "./Styles/Account.css";

function Account() {
  return (
    <div className="main-container">
      <div className="left-container">
        <div className="">
          <img
            className=""
            src="https://magicainew.codeshastra.dev/assets/img/logo/magicAI-logo.svg"
            alt="MagicAI logo"
          />
        </div>
        <SignUp client:load />
      </div>
      <div className="right-container">
        <div className="link top-right">
          <a href="#"> &lt; Back to Home</a>
        </div>
        <div className="leftinner-conteiner">
          <img src="https://magicainew.codeshastra.dev/images/bg/dash-mockup.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Account;
