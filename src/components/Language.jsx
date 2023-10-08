// import React from 'react'

const Language = () => {
  const style = {
    border: "none",
    borderRadius: "40px",
    maxWidth: "500px",
    height: "240px",
  };
  return (
    <div className="col  p-0 m-3" style={style}>
      <div className="card bg-light text-dark px-5 py-4" style={style}>
        <h2>Languages</h2>
        <div>
          <h5 className="m-0">English</h5>
          <p className="m-0 text-secondary">Professional</p>
        </div>
        <div>
          <h5 className="m-0">Hindi</h5>
          <p className="m-0 text-secondary">Professional</p>
        </div>
        <div>
          <h5 className="m-0">Telugu</h5>
          <p className="m-0 text-secondary">Native</p>
        </div>
      </div>
    </div>
  );
};

export default Language;
