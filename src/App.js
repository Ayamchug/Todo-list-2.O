import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Todo from "./Todo/Todo";
import { auth } from "./firebase";

function App() {
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.email.substr(0, user.email.indexOf("@")));
        setUserEmail(user.email);
      } else {
        setUsername("");
      }
    }, []);
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo name={username} email={useremail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
