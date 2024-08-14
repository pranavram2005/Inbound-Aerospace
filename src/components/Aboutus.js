import "./styles/aboutus.css";
import Footer from "./Footer";
const Aboutus = () => {
  return (
    <>
      <div className="back">
        <div style={{ height: "60px" }}></div>
        <div className="Head">
          <h1>About Us</h1>
        </div>
        <div className="about-grid">
          <div className="card">
            <div className="imgs">
              <img
                className="card-img-top about"
                alt="hello"
                src="engine3.jpeg"
              />
            </div>
            <div className="about-tilte text-light">
              <h5>Aravind I B</h5>
            </div>
            <div className="card-body about-body">
              <p>PhD in Dept. of Aerospace Engineering IIT Madras</p>
            </div>
          </div>
          <div className="card">
            <div className="imgs">
              <img
                className="card-img-top about"
                alt="hello"
                src="engine3.jpeg"
              />
            </div>
            <div className="about-tilte text-light">
              <h5>Aravind I B</h5>
            </div>
            <div className="card-body about-body">
              <p>PhD in Dept. of Aerospace Engineering IIT Madras</p>
            </div>
          </div>
          <div className="card">
            <div className="imgs">
              <img
                className="card-img-top about"
                alt="hello"
                src="engine3.jpeg"
              />
            </div>
            <div className="about-tilte text-light">
              <h5>Aravind I B</h5>
            </div>
            <div className="card-body about-body">
              <p>PhD in Dept. of Aerospace Engineering IIT Madras</p>
            </div>
          </div>
          <div className="card">
            <div className="imgs">
              <img
                className="card-img-top about"
                alt="hello"
                src="engine3.jpeg"
              />
            </div>
            <div className="about-tilte text-light">
              <h5>Aravind I B</h5>
            </div>
            <div className="card-body about-body">
              <p>PhD in Dept. of Aerospace Engineering IIT Madras</p>
            </div>
          </div>
          <div className="card">
            <div className="imgs">
              <img
                className="card-img-top about"
                alt="hello"
                src="engine3.jpeg"
              />
            </div>
            <div className="about-tilte text-light">
              <h5>Aravind I B</h5>
            </div>
            <div className="card-body about-body">
              PhD in Dept. of Aerospace Engineering IIT Madras
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Aboutus;
