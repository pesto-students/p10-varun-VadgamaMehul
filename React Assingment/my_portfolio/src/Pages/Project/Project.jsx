import React from "react";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <br />
      <ul>
        <h1>I have worked on below Project</h1>
        <li>
          Title: Project 1
          <p>
            Project Description : This is a project which I made using HTML, CSS
            and JavaScript. It's an online shopping website where you can buy
            products.
          </p>
          <Link to="/Project/Project1">
            <img
              src={require("./ProjectImage.jpg")}
              alt="Project1"
              width="20%"
              height="auto"
            />
          </Link>
        </li>
        <li>
          Title: Project 2
          <p>
            Project Description : This is a project which I made using HTML, CSS
            and JavaScript. It's an online shopping website where you can buy
            products.
          </p>
          <Link to="/Project/Project2">
            <img
              src={require("./ProjectImage.jpg")}
              alt="Project2"
              width="20%"
              height="auto"
            />
          </Link>
        </li>
        <li>
          Title: Project 3
          <p>
            Project Description : This is a project which I made using HTML, CSS
            and JavaScript. It's an online shopping website where you can buy
            products.
          </p>
          <Link to="/Project/Project3">
            <img
              src={require("./ProjectImage.jpg")}
              alt="Project3"
              width="20%"
              height="auto"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Project;
