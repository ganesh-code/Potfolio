// import React from 'react'
import html from "../assets/Html.png";
import CSs from "../assets/Css.png";
import JS from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import nodejs from "../assets/node.png";
import express from "../assets/Express.png";
import mongodb from "../assets/Mongo.png";
import "./Skills.css"

const Education = () => {
  const style = {
    border: "none",
    borderRadius: "40px",
    maxWidth: "90vw",
    overflow : "hidden"
  };
  const style2 = {
    width : "170px",
    padding : "1rem",
  }
  return (
    <div className="col p-0 m-3" style={style}>
      <div className="card p-5" style={style}>
        <h2>Skills</h2>
        <div className="d-flex" id="slider">
          <div className="text-center">
            <img src={html} alt="" style={style2}/>
            <h5>HTML</h5>
          </div>
          <div className="text-center">
            <img src={CSs} alt="" style={style2}/>
            <h5>CSS</h5>
          </div>
          <div className="text-center">
            <img src={JS} alt="" style={style2}/>
            <h5>JavaScript</h5>
          </div>
          <div className="text-center">
            <img src={bootstrap} alt="" style={style2}/>
            <h5>BootStrap</h5>
          </div>
          <div className="text-center"> 
            <img src={tailwind} alt="" style={style2}/>
            <h5>TailWindCss</h5>
          </div>
          <div className="text-center">
            <img src={react} alt="" style={style2}/>
            <h5>ReactJS</h5>
          </div>
          <div className="text-center">
            <img src={nodejs} alt="" style={style2}/>
            <h5>NodeJS</h5>
          </div>
          <div className="text-center">
            <img src={express} alt="" style={style2}/>
            <h5>ExpressJS</h5>
          </div>
          <div className="text-center">
            <img src={mongodb} alt="" style={style2}/>
            <h5>MongoDB</h5>
          </div>
          <div className="text-center">
            <img src={html} alt="" style={style2}/>
            <h5>HTML</h5>
          </div>
          <div className="text-center">
            <img src={CSs} alt="" style={style2}/>
            <h5>CSS</h5>
          </div>
          <div className="text-center">
            <img src={JS} alt="" style={style2}/>
            <h5>JavaScript</h5>
          </div>
          <div className="text-center">
            <img src={bootstrap} alt="" style={style2}/>
            <h5>BootStrap</h5>
          </div>
          <div className="text-center"> 
            <img src={tailwind} alt="" style={style2}/>
            <h5>TailWindCss</h5>
          </div>
          <div className="text-center">
            <img src={react} alt="" style={style2}/>
            <h5>ReactJS</h5>
          </div>
          <div className="text-center">
            <img src={nodejs} alt="" style={style2}/>
            <h5>NodeJS</h5>
          </div>
          <div className="text-center">
            <img src={express} alt="" style={style2}/>
            <h5>ExpressJS</h5>
          </div>
          <div className="text-center">
            <img src={mongodb} alt="" style={style2}/>
            <h5>MongoDB</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
