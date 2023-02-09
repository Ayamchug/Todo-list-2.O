import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="section-center space">
      <div className="text-center space">
        <Link to="/signup">
          <button className="btn btn-info">Sign Up</button>
        </Link>
        <br />
        <br />
        <Link to="/login">
          <button className="btn btn-info">Sign In</button>
        </Link>
      </div>
    </section>
  );
}
