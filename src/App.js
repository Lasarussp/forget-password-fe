import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Notfound from "./components/Notfound";
import Register from "./components/Register";
import Verification from "./components/Verification";
import ChangePassword from "./components/ChangePassword";
import Profile from "./components/Profile";
import ForgetPassword from "./components/ForgetPassword";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="*" element={<Notfound /> } />
      </Routes>
    </UserProvider>
  );
}

export default App;