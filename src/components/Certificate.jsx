// import React from 'react'

const Education = () => {
    const style = {
        border: "none",
        borderRadius: "40px",
        maxWidth: "780px",
        height : "340px",
        overflowY : "scroll"
    };
    const handleC1 = ()=>{
        location.href = "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Moreton%20Bay%20Regional%20Council/7q8DN5enMzSHqLwev_Moreton%20Bay%20Regional%20Council_LAEro98dPne3ANcoP_1684483393458_completion_certificate.pdf"
    }
    const handleC2 = ()=>{
        location.href = "https://api.growthschool.io/certificate/20ff2ba5-669a-4b36-b9c2-0b1de6d22622"
    }
    const handleC3 = ()=>{
        location.href = "https://trainings.internshala.com/view_certificate/491B6041-8B0D-3C7F-16C8-13178822F836/833DC899-D49E-888C-809D-F6F594388DBA/"
    }
    const handleC4 = ()=>{
        location.href = "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_LAEro98dPne3ANcoP_1694022784154_completion_certificate.pdf"
    }
    const IconDoc = <i className="fa-solid fa-file-lines fa-2xl text-dark"></i>
  return (
    <div className="col p-0 m-3" style={style}>
      <div className="card p-5" style={style}>
        <h2>Licenses & certifications</h2>
        <div className="d-flex align-items-center py-3">
          <h5 className="px-3">{IconDoc}</h5>
          <div>
            <h5 className="m-0">Web Development Virtual Experience Program <i className="fa-solid fa-arrow-up-right-from-square px-3 text-dark" onClick={handleC1} style={{cursor:"pointer"}}></i></h5>
            <p className="m-0 text-secondary"> Place : Forage</p>
            <p className="m-0 text-secondary">Issued May 2023</p>
          </div>
        </div>
        <div className="d-flex align-items-center py-3">
          <h5 className="px-3">{IconDoc}</h5>
          <div>
            <h5 className="m-0">UX Kickstarter Workshop <i className="fa-solid fa-arrow-up-right-from-square px-3 text-dark" onClick={handleC2} style={{cursor:"pointer"}}></i></h5>
            <p className="m-0 text-secondary">Place : GrowthSchool</p>
            <p className="m-0 text-secondary">Issued March 2023</p>
          </div>
        </div>
        <div className="d-flex align-items-center py-3">
          <h5 className="px-3">{IconDoc}</h5>
          <div>
            <h5 className="m-0">UI/UX Design <i className="fa-solid fa-arrow-up-right-from-square px-3 text-dark" onClick={handleC3} style={{cursor:"pointer"}}></i></h5>
            <p className="m-0 text-secondary">Place : Internshala</p>
            <p className="m-0 text-secondary">issued Sep 2022</p>
          </div>
        </div>
        <div className="d-flex align-items-center py-3">
          <h5 className="px-3">{IconDoc}</h5>
          <div>
            <h5 className="m-0">Front-End Software Engineering Job Simulation<i className="fa-solid fa-arrow-up-right-from-square px-3 text-dark" onClick={handleC4} style={{cursor:"pointer"}}></i></h5>
            <p className="m-0 text-secondary">Place : Skyscanner</p>
            <p className="m-0 text-secondary">Dec 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
