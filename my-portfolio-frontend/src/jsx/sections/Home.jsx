import React from "react";
import profile from "@/assets/profile.jpg";
import "@/styles/sections/home.css"

function Home() {
  return (
    <main className="home-section">
      <div className="left">
        <h1>Hi, This is Sparsh Vardhan,</h1>
        <h1>a Full-Stack Web Developer</h1>
      </div>
      <div className="right">
        <img src={profile} alt="" />
      </div>
    </main>
  );
}

export default Home;
