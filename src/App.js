import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import app from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

const auth = getAuth(app);
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  // return (
  //   <div className="app">
  //     {!user ? (
  //       <LoginScreen />
  //     ) : (
  //       <Routes>
  //         <Route path="/" element={<HomeScreen />} />
  //         <Route path="/profile" element={<Profile />} />
  //       </Routes>
  //     )}
  //   </div>
  // );

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={user ? <HomeScreen /> : <LoginScreen />} />
        <Route path="/profile" element={user ? <Profile /> : <LoginScreen />} />
      </Routes>
    </div>
  );
}
export default App;
