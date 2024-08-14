import React from "react";
import "../components/styles/Careers.css";
import webdev from "../../public/webdev.jpeg";
import business from "../../public/business.jpeg";

const CareerDescription = () => {
  return (
    <div className="careerd">
      <div className="careerImg"></div>
      <div className="mask">
        <h1>CAREERS AT INBOUND AEROSPACE</h1>
        <h4>Join Inbound to accelerate the industrialisation of space!</h4>
        <button id="apply">
          <a href="#vacancies">View Vacancies</a>
        </button>
      </div>
      <div className="careerHeading">
        <h2>Our Mission</h2>
        <p>
          At Inbound, we provide a spacecraft platform that utilises the unique
          microgravity environment of space to manufacture revolutionary
          products that profoundly impact and improve the lives on Earth. We
          take pride in assisting our customers in producing these innovative
          products in space and bringing them back to Earth, delivering
          life-transforming benefits. By harnessing the power of space, we aim
          to bring the advantages of the cosmos right to our planet.
        </p>
        <p>
          INBOUND AEROSPACE is committed to nurturing the next generation of
          talent. Our internship programs offer hands-on experience, mentorship
          from industry experts, and the opportunity to work on projects that
          redefine the aerospace industry. If you're a student with a passion
          for innovation and a drive to excel, we want to hear from you
        </p>
        <p>
          We're looking for passionate, talented individuals who are ready to
          explore the uncharted, challenge the status quo, and push the
          boundaries of what's possible. Whether you're an experienced
          professional or a motivated intern, INBOUND AEROSPACE offers a
          dynamic, inclusive environment where your work is not just
          respected—it's revered.
        </p>
      </div>
      {/* <div className="currentOpenings">
        <h2>Current openings</h2>
        <ul>
          <li>Web Development Intern</li>
          <li>Differential Braking System Design Intern</li>
          <li>Reaction Control Thruster Design Intern</li>
          <li>Deorbit Burn Engine Design Intern</li>
          <li>Structural Design Intern</li>
        </ul>
      </div> */}
      <div className="careerList" id="vacancies">
        <div className="careerListheading">
          <h2>Internships offerings</h2>
        </div>
        <div className="careerBox">
          <div className="img">
            <img src={webdev} />
          </div>
          <div className="jobInfo">
            <div className="careerTitle">
              <h4>Web Developer</h4>
            </div>
            <div className="careerDetails">
              <p>Duration : 3 months.</p>
              <p>Location : Hybrid and Offline.</p>
              <a href="https://ccx34t.csb.app/form">
                <button className="applyButton">APPLY NOW</button>
              </a>
            </div>
          </div>
        </div>
        <div className="careerBox">
          <div className="img">
            <img src={business} />
          </div>
          <div className="jobInfo">
            <div className="careerTitle">
              <h4>Design and Analyst</h4>
            </div>
            <div className="careerDetails">
              <p>Duration : 3 months.</p>
              <p>Location : Hybrid and Offline.</p>
              <a href="https://ccx34t.csb.app/form">
                <button className="applyButton">APPLY NOW</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDescription;
