import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import About from "./Pages/About";
import AccountSettings from "./Pages/AccountSettings";
import BookTutor from "./Pages/BookTutor";
import Home from "./Pages/Home";
import Login from "./Pages/auth/Login";
import SignUp from "./Pages/auth/SignUp";
import Profile from "./Pages/Profile";
import NavBar from "./components/NavBar";
import "./index.css"; // Make sure this line is not removed
import ForgotPassword from "./Pages/auth/ForgotPassword";
import data from "../src/data.json";
import AuthContextProvider from "./context/AuthContext";
import UsersContextProvider from "./context/UsersContext";

import { ReactLenis, useLenis} from "lenis/react";

const App = () => {

  const lenisRef = useRef()
  useLenis(() => {

  })
  
  return (
    <AuthContextProvider>
        <UsersContextProvider>    
            <div className="min-h-screen min-w-screen w-screen bg-gradient-to-r from-[#2C183D] to-[#0B1820]">
                <NavBar />

                <ReactLenis ref={lenisRef} root>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tutoring" element={<BookTutor data={data}/>} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<AccountSettings />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                  </Routes>
                </ReactLenis>
            </div>
        </UsersContextProvider>
      </AuthContextProvider>
  );
};

export default App;