// import React from "react";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import app from "../firebase";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import Nav from "../components/Nav";
import "./Profile.css";

const auth = getAuth(app);

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button
                className="profileScreen__signOut"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
