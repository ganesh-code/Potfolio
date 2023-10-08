// import React from 'react'

const Education = () => {
  const style = {
    border: "none",
    borderRadius: "40px",
    maxWidth: "780px",
  };
  const handleC1 = () => {
    location.href = "https://github.com/ganesh-code/iNotes";
  };
  const handleC2 = () => {
    location.href =
      "https://dailynewszilla.netlify.app/";
  };
  const IconProj = <i className="fa-solid fa-list-check fa-2xl text-dark"></i>
  return (
    <div className="col p-0 m-3" style={style}>
      <div className="card bg-light text-dark p-5" style={style}>
        <h2>Projects</h2>
        <div className="d-flex align-items-center py-3">
          <h5 className="px-3">
          {IconProj}
          </h5>
          <div>
            <h5 className="m-0">
              INotes
              
              <i
                className="fa-solid fa-arrow-up-right-from-square px-3 text-dark"
                onClick={handleC1}
                style={{ cursor: "pointer" }}
              ></i>
            </h5>
            <p className="m-0 text-secondary">Aug 2023 - Sep 2023</p>
            <p className="m-0 text-secondary">
              iNotesiNotes Aug 2023 - Sep 2023Aug 2023 - Sep 2023 I developed a
              note taking application utilizing the MERN stack (MongoDB,
              Express.js, React, Node.js). This showcases my proficiency in both
              end and back end development.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center py-3">
          <h5 className="px-3">
          {IconProj}
          </h5>
          <div>
            <h5 className="m-0">
              Daily-News-App-ReactDaily-News-App-React
              <i
                className="fa-solid fa-arrow-up-right-from-square px-3 text-dark"
                onClick={handleC2}
                style={{ cursor: "pointer" }}
              ></i>
            </h5>
            <p className="m-0 text-secondary">July 2023 - Aug 2023</p>
            <p className="m-0 text-secondary">
              My Daily News App is a React-based single-page application
              designed to deliver daily news updates to users. Leveraging the
              power of React concepts, including useState, useHistory, and
              useNavigation hooks, the app ensures a seamless and intuitive user
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
