import React from "react";
import { NavLink } from "react-router-dom";
import Switch from "./Switch";

import "./index.scss";

class Navbar extends React.Component {
  state = {
    checked: localStorage.getItem("theme") === "dark" ? true : false
  };

  componentDidMount() {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }

  toggleThemeChange = () => {
    const { checked } = this.state;

    if (checked === false) {
      localStorage.setItem("theme", "dark");

      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));

      this.setState({
        checked: true
      });
    } else {
      localStorage.setItem("theme", "light");

      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));

      this.setState({
        checked: false
      });
    }
  }

  render() {
    const { checked } = this.state;
    return (
      <header>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/create">NEW</NavLink>
            </li>
            <li>
              <NavLink to="/all">NEWSLETTERS</NavLink>
            </li>
            <li>
              <Switch
                toggleThemeChange={this.toggleThemeChange}
                checked={checked}
              />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
