import React, { useEffect, useState } from "react";
import "@/styles/sections/skills.css";
import js from "@/assets/js.png";
import react from "@/assets/react.png";
import node from "@/assets/node.png";
import express from "@/assets/express.png";

function Skills() {
  const skillSet = [
    {
      id: "s1",
      name: "JavaScript",
      img: js,
    },
    {
      id: "s2",
      name: "React",
      img: react,
    },
    {
      id: "s3",
      name: "Node.js",
      img: node,
    },
    {
      id: "s4",
      name: "Express",
      img: express,
    },
  ];

  let [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills((prevSkills) => [...prevSkills, ...skillSet]);
  }, []);

  return (
    <section id="skills-section">
      {skills.map((item) => {
        const { id, name, img } = item;
        return (
          <div className="skillCard" key={id}>
            <div className="skillImage">
              <img src={img} alt="" />
            </div>
            <p>{name}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Skills;
