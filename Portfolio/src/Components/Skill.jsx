import React from 'react'
import { Fade } from "react-awesome-reveal";
import  bootstrap from"../Image/bootstrap.png"
import react from "../Image/react.png";
import node from "../Image/nodejs.png"
import html from "../Image/html-5.png"
import express from "../Image/expressjs.png"
import css from "../Image/css.png"
import js from "../Image/java-script.png";
import mongo from "../Image/mongodb.png"
import netlify from "../Image/netlify.png"
import github from "../Image/github.png"
import git from "../Image/git.png"
import vercel from "../Image/vercel.svg"
import postman from "../Image/postman.png"
import redux from "../Image/redux.png"
import UI from "../Image/ui.png"
import './css/About.css'

export default function Skill() {

    const images =  [bootstrap,react,redux,html,css,node,express,js,mongo,netlify,git,github,vercel,postman,UI]
  return (
    <div className='skill-container'>
        <Fade direction="down" cascade duration={3000} delay={1}>
        <div className="skills">
          <h1>My Skills With Latest Trends</h1>

          <div className="skill-item">
          {images.map((image, index) => (
              <img key={index} src={image} alt={`Skill ${index + 1}`} />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  )
}
