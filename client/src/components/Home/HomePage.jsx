import "./HomePage.css";
import { Link, NavLink } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div className="homepage">
      {/* Start Banner */}
      <div className="banner">
        <div class="row">
          <div class="sub-title">/ AI Course</div>

          <h1>Step into the future</h1>

          <div className="blog-description">
            <p>
              Explore the world of AI with top experts and cutting-edge
              technology.
            </p>
          </div>

          <button className="btn-register">
            <NavLink to="/register" className="nav-link">
              Join the Course now
            </NavLink>
          </button>
        </div>
      </div>
      {/* End Banner */}

    </div>
  );
};

export default HomePage;
