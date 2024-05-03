import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import AccountSettings from "./Pages/AccountSettings";
import BookTutor from "./Pages/BookTutor";
import Home from "./Pages/Home";
import Login from "./Pages/auth/Login";
import SignUp from "./Pages/auth/SignUp";
import Profile from "./Pages/Profile";
import NavBar from "./components/NavBar";
import Development from "./Pages/Development";
import "./index.css"; // Make sure this line is not removed
import ForgotPassword from "./Pages/auth/ForgotPassword";
import data from "../src/data.json";
import AuthContextProvider from "./context/AuthContext";
import UsersContextProvider from "./context/UsersContext";

const App = () => {
  return (
    <AuthContextProvider>
      <UsersContextProvider>
        <div className="min-w-screen min-h-screen w-screen bg-gradient-to-r from-[#2C183D] to-[#0B1820]">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutoring" element={<BookTutor data={data} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<AccountSettings />} />
            <Route path="/development" element={<Development />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </UsersContextProvider>
    </AuthContextProvider>
  );
};

export default App;
