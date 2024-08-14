import "./styles/box.css";
const Box = () => {
  return (
    <div className="box1">
      <div className="card">
        <img className="card-img-top image" alt="hello" src="engine3.jpeg" />
        <div className="card-body">
          <p className="card-text">
            NASA to Change How It Points Hubble Space Telescope
          </p>
          <div className="buttons">
            <button className="inbuttons">
              <span>Read More</span>
            </button>
          </div>
          <div class="card-footer">July 05, 2025</div>
        </div>
      </div>
    </div>
  );
};
export default Box;
