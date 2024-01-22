import React from "react";
import { useState } from "react";
import "./SignInScreen.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";
import toast, { Toaster } from "react-hot-toast";

const auth = getAuth(app);
const SignInScreen = ({ prop_email }) => {
  const [email, setEmail] = useState("" || prop_email);
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        toast.error("Error Occured");
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        toast.error("Invalid Email or Password");
      });
  };

  return (
    <div className="signupscreen">
      <form>
        <h1>Sign In</h1>
        <input
          placeholder="Email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signupscreen__gray">New to Netflix?</span>
          <span className="signupscreen__link" onClick={register}>
            Sign up now
          </span>
        </h4>
      </form>
      <Toaster />
    </div>
  );
};

export default SignInScreen;
