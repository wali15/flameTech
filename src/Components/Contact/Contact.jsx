import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [Name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [Email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5173/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, subject, text }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section className="contacts padding">
        <div className="container shadow flexSB">
          {/* <div className="left row"> */}
          {/* </div> */}
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className="social">
              <a
                className="fab fa-facebook-f icon mx-2"
                href="https://www.facebook.com/theflametech?mibextid=ZbWKwL"
                target="_blank"
              ></a>
              <a
                className="fa-brands fa-whatsapp icon mx-2"
                href="https://wa.me/03363573763"
                target="_blank"
              ></a>
              <a
                className="fa-brands fa-linkedin icon mx-2"
                href="https://www.linkedin.com/in/the-flame-tech-"
                target="_blank"
              ></a>
              <a
                className="fa-solid fa-phone icon mx-2"
                href="tel:+923363573763"
              ></a>
              <a
                className="fa fa-paper-plane icon"
                href="mailto: tflametech@gmail.com"
                target="_blank"
              ></a>
              <a
                className="fa-solid fa-map icon mx-2"
                href="https://goo.gl/maps/ZZ9dcY1sEdiqRfKh9"
                target="_blank"
              ></a>
            </div>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>B-677, PAF Road, Crossing, Korangi, Karachi.</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>theflametech@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+923363573763</p>
              </div>
            </div>

            <form handleSubmit={handleSubmit}>
              <div className="flexSB">
                <input
                  type="text"
                  placeholder="Name"
                  value={Name}
                  onChange={(e) => setTo(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button
                className="primary-btn"
                href="mailto:aghawali580@gmail.com"
              >
                SEND MESSAGE
              </button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
