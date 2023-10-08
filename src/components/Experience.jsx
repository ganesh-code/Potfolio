// import React from 'react'

import Language from "./Language";

const Education = () => {
  const style = {
    border: "none",
    borderRadius: "40px",
    maxWidth: "500px",
    height : "200px"

  };
return (
<div className="col  p-0 m-3" style={style}>
  <div className="card bg-light text-dark px-5 py-4" style={style}>
    <h2>Experience</h2>
    <div className="d-flex align-items-center py-3">
      <h3 className="px-4"><i className="fa-regular fa-building fa-2xl text-dark"></i></h3>
      <div>
        <h5 className="m-0">Web Developer Intern</h5>
        <p className="m-0 text-secondary">CodeClause - Intership</p>
        <p className="m-0 text-secondary">Sep 2023 - Present</p>
        <p className="m-0 text-secondary">Remote </p>
      </div>
    </div>
  </div>
  <Language/>
</div>
);
};

export default Education;
