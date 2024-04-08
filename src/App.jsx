import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import AccountSettings from "./Pages/AccountSettings";
import BookTutor from "./Pages/BookTutor";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import NavBar from "./components/NavBar";
import "./index.css"; // Make sure this line is not removed

const App = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#2C183D] to-[#0B1820]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutoring" element={<BookTutor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<AccountSettings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
