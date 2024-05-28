import "./HomePage.css";
import { Link, NavLink } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <div className="banner"></div>

      <div className="content"></div>

      <div className="register">
        <button>
          <NavLink to="/register" className="nav-link">
            Register now!
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
