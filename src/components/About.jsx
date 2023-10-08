// import React from 'react'

const About = () => {
    const style = {
        border: "none",
        borderRadius: "40px",
        width : "none",
        maxWidth : "950px"
      };
  return (
    <div className="col bg-light" style={style}>
      <div className="card bg-light" style={style}>
        <div className="p-4 pb-0 text-dark d-flex align-items-center">
          <h2 >Ganesh Muniganti</h2>
          <span className="p-3">(He/Him)</span>
          <span><i className="fa-solid fa-location-dot p-2 text-dark"></i>Hyderabad,Telangana, India.</span>
        </div>
        <div className="p-4 pt-0">
          <h5 className="pt-2 text-secondary">
            I am a highly motivated web developer and UX designer with a passion
            for creating user-centered designs that exceed client expectations.
          </h5>
          <p className="text-secondary">
            • Through academic projects and extracurricular activities, i have
            developed strong communication and team interaction skills.
          </p>
          <p className="text-secondary">
            • knowledge of information architecture, design thinking, and user
            research for building user-centred designs
          </p>
          <p className="text-secondary">
            • completed certification programmes in web programming from Pixxel
            Arts, UI/UX design fundamentals from Internshala, and UX Kick
            Starter training from Growth School.
          </p>
          <p className="text-secondary">
          I am always seeking new challenges that will allow me to use my skills
          and expertise to make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
