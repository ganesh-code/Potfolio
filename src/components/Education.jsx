// import React from 'react'

const Education = () => {
    const style = {
        border: "none",
        borderRadius: "40px",
        maxWidth: "500px",
        height : "340px",
        overflowY : "scroll"
      };
  return (
    <div className="col bg-light p-0 m-3" style={style}>
      <div className="card text-dark p-5" style={style}>
        <h2>Education</h2>
        <div className="d-flex align-items-center py-3">
          <h5 className="px-3"><i className="fa-solid fa-building-columns fa-2xl text-dark"></i></h5>
          <div>
            <h5 className="m-0">Man Power Development College</h5>
            <p className="m-0 text-secondary ">Masters In Computer Applications -(MCA)</p>
            <p className="m-0 text-secondary ">Sep 2023 - Aug 2025</p>
          </div>
        </div>
        <div className="d-flex align-items-center py-3">
          <h5 className="px-3"><i className="fa-solid fa-graduation-cap fa-2xl text-dark"></i></h5>
          <div>
            <h5 className="m-0">HRD Degree And PG College</h5>
            <p className="m-0 text-secondary">Bachelors of Science - (MPCs)</p>
            <p className="m-0 text-secondary">June 2019 - sep 2022</p>
          </div>
        </div>
        <div className="d-flex align-items-center py-3">
          <h5 className="px-3"><i className="fa-solid fa-school fa-2xl text-dark"></i></h5>
          <div>
            <h5 className="m-0">Sri C.V Raman Jr College</h5>
            <p className="m-0 text-secondary">MPC - (Mathematics,Physics,Chemistry)</p>
            <p className="m-0 text-secondary">June 2017 - sep 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
