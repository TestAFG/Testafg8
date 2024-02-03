import React from "react";
import "../app/style.css";
import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import { BsEnvelopeOpen, BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="">
      <div className="row">
        <div className="col1">
          <div className="waviy1">
            <span style={{ "--i": 1 }}>L</span>
            <span style={{ "--i": 2 }}>u</span>
            <span style={{ "--i": 3 }}>c</span>
            <span style={{ "--i": 4 }}>k</span>
            <span style={{ "--i": 5 }}>y</span>
            <span style={{ "--i": 6 }}>I</span>
            <span style={{ "--i": 7 }}>n</span>
            <span style={{ "--i": 8 }}>t</span>
            <span style={{ "--i": 9 }}>e</span>
            <span style={{ "--i": 10 }}>r</span>
            <span style={{ "--i": 11 }}>i</span>
            <span style={{ "--i": 12 }}>o</span>
          </div>
          <br />
          <p>Design Better Shape Better</p>
        </div>
        <div className="col">
          <h3>
            xyz{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>Arif khan</p>
          <p>vikhroli</p>
          <p>India</p>
          <p>Maha PIN 400083, India</p>
          <p className="email-id">arifkhan@gmail.com</p>
          <h4>+91 - 8850636975</h4>
        </div>
        <div className="col">
          <h3>
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="aboutus.html">About Us</a>
            </li>
            <li>
              <a href="contact.html"></a>contact Us
            </li>
            <li>
              <a href="consultency.html">Home Interio</a>
            </li>
            <li>
              <a href="">service</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Newsletter{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form action="https://formsubmit.co/ecd0336b15b94a98bc0c9f5f91b74208" method="POST">
           <BsEnvelopeOpen className="w-5 h-5 mr-2"/>
            <input type="email" name="email" className="mx-1" placeholder="Enter your email id" required />
            <button type="submit">
             <ArrowRight className=" text-white w-5 h-5"/>
            </button>
          </form>
          <div className="social-icons flex items-center justify-evenly">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Lucky Interio &copy; 2023 - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
