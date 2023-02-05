import React from "react";
// import { Link } from "react-router-dom";
// import { blog } from "../../../dummydata";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>Flame Tech</h1>
            <span>Liquefied petroleum gas (LPG) Company</span>
            <p>
              Manufacturer of Gas Bank and Service Business of Gas Supplies
              known as The Flame Tech in Pakistan
            </p>

            <a
              className="fab fa-facebook-f icon"
              href="https://www.facebook.com/theflametech?mibextid=ZbWKwL"
              target="_blank"
            ></a>
            <a
              className="fa-brands fa-whatsapp icon"
              href="https://wa.me/03363573763"
              target="_blank"
            ></a>
            <a
              className="fa-brands fa-linkedin icon"
              href="https://www.linkedin.com/in/the-flame-tech-"
              target="_blank"
            ></a>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          {/* <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <a
                  className="fa fa-map"
                  href="https://goo.gl/maps/ZZ9dcY1sEdiqRfKh9"
                  target="_blank"
                ></a>
                B-677, PAF Road, Crossing, Korangi, Karachi.
              </li>
              <li>
                <a className="fa fa-phone-alt" href="tel:+923363573763"></a>
                +923363573763
              </li>
              <li>
                <a
                  className="fa fa-paper-plane"
                  href="mailto: tflametech@gmail.com"
                  target="_blank"
                ></a>
                theflametech@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart"></i> by Wali Haider
        </p>
      </div>
    </>
  );
};

export default Footer;
