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

      

      {/* Start about us */}
      <div className="about-us">
        <div class="row">
          <div class="sub-title">/ About us</div>

          <h1>We inspire the next generation of AI innovators</h1>

          <div className="blog-description">
            <p>
            About us, we are dedicated to providing top-notch
             AI courses designed to empower students with the knowledge and
              skills to excel in the rapidly evolving field of artificial
               intelligence. Our expert instructors, state-of-the-art facilities,
                and comprehensive curriculum ensure that our students are well-prepared
                 to lead in the world of AI.
            </p>
          </div>
        </div>
      </div>
      {/* End about us */}
      
    </div>
  );
};

export default HomePage;
