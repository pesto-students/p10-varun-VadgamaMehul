import React from "react";
import "./Home.css"
function Home() {
  return (
    <div className="home">
      <section className="header">
        <h1 className="text-center">Welcome to My Portfolio</h1>
        <br />
      </section>
      <section className="name">
        <h2>Mehul Vadgama</h2>
      </section>
      <section className="Introduction">
        <p>
          I am a Full Stack Web Developer with experience in building web
          applications using the MERN stack.
        </p>
      </section>
      <section className="profileimage">
        <img
          src={require("./profilepic.jpg")}
          alt="<NAME>"
          width="20%"
          height="auto"
        />
      </section>
    </div>
  );
}

export default Home;
