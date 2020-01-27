import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Icon } from "antd";
import "./css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__header-column">
          <div className="header__back-btn">
            {/* <Link to="/"> */}
            <Icon type="arrow-left" />
            {/* </Link> */}
          </div>
        </div>
        <div className="header__header-column">
          <div className="header__title">애견카페 시바</div>
        </div>
        <div className="header__header-column">
          <span className="header__icon">
            <Icon type="search" />
          </span>
          <div className="header__icon">
            <Icon type="menu" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
