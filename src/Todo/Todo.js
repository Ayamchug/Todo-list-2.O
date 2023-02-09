import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import MainSection from "./MainSection";
import SideNav from "./SideNav";
import { auth } from "../firebase";

function App(props) {
  const [active, setActive] = useState("INBOX");
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {props.name && props.email ? (
        <div>
          <Header name={props.name} email={props.email} />
          <div>
            <div className="col-md-2">
              <SideNav change={setActive} />
            </div>
            <div className="col-md-10">
              <MainSection active={active} />
            </div>
            <div className="text-center">
              <button
                style={{ marginTop: "0.5rem" }}
                className="btn btn-dark"
                onClick={handleSignOut}
              >
                SignOut
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center" style={{color: "brown", marginTop: "1rem"}}><h4>Login Please!!</h4></div>
      )}
    </div>
  );
}

export default App;
