import React from "react";
import { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
        {signIn ? (
          <></>
        ) : (
          <button
            className="loginScreen__button"
            onClick={() => {
              setSignIn(true);
            }}
          >
            Sign In
          </button>
        )}
        <div className="loginScreen__gradient" />
      </div>
      <div
        className={`loginScreen__body ${signIn ? "SignInScreen__body" : ""}`}
      >
        {signIn ? (
          <SignInScreen prop_email={email} />
        ) : (
          <>
            <h1>Unlimited films , TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="email"
                  minLength="5"
                  maxLength="50"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => {
                    setSignIn(true);
                  }}
                >
                  Get Started <MdKeyboardArrowRight />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
