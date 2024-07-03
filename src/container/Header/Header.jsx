import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Experience the difference." />
      <h1 className="app__header-h1">For The Perfect Glow Up</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" className="custom__button">Explore Services</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.section1} alt="header img" />
    </div>
  </div>
);

export default Header;
