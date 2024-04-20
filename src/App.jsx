import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import AccountSettings from "./Pages/AccountSettings";
import BookTutor from "./Pages/BookTutor";
import Home from "./Pages/Home";
import Login from "./Pages/auth/Login";
import SignUp from "./Pages/auth/SignUp";
import Profile from "./Pages/Profile";
import NavBar from "./components/NavBar";
import "./index.css"; // Make sure this line is not removed
import AuthContextProvider from "./context/AuthContext";
import ForgotPassword from "./Pages/auth/ForgotPassword";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#2C183D] to-[#0B1820]">
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutoring" element={<BookTutor />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<AccountSettings />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
