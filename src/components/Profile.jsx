// import React from 'react'
import Photo from "../assets/Photo.png";

const Landing = () => {
  const style = {
    border: "none",
    borderRadius: "40px",
  };

  return (
    <div className="col p-0" style={{maxWidth: "268px"}}>
      <div className="card bg-light mx-3" style={style}>
        <img src={Photo} alt="" style={style} />
      </div>
    </div>
  );
};

export default Landing;
