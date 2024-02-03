"use client";
import React, { useRef, useState } from "react";
import "./consultancy.css";
import Footer from "@/components/footer";
import RouteNavbar from "@/components/routeNavbar";
import ConSlider from "./Conslider";
import axios from "axios";
import { useRouter } from "next/navigation";
const ConsultancyPage = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const nameRef = useRef(null); // Initialize with null
  const emailRef = useRef(null); // Initialize with null
  const phoneRef = useRef(null); // Initialize with null

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current?.value; // Use optional chaining to access value property
    const email = emailRef.current?.value; // Use optional chaining to access value property
    const phone = phoneRef.current?.value; // Use optional chaining to access value property
    console.log(name, email, phone);
    console.log("hioisad")
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/consult`,
      {
        location,
        budget,
        name:name,
        email:email,
        phone:phone,
      }
    );
    if (!res) return alert("Something went wrong");
    alert("Your consultancy has been confirmed");
    router.push("/");
  };
  return (
    <>
      <RouteNavbar />
      <ConSlider />
      <section className="">
        <div>
          <div className="look">
            <br />
            <br />
            <h2>Turnkey interio design solutions for your homes</h2>
            <p>
              At Godrej home interios we help you envsion, design & realise your
              home. Lets co-create and build your
              <br />
              house into a home
            </p>
            <br />
            <br />
          </div>
        </div>

        <div className="noop1">
          <br />
          <br />
          <div className="noop">
            <img src="Customised.png" alt="" />
            <i className="fa fa-plus" aria-hidden="true"></i>
            <img src="Management.png" alt="" />
            <i className="fa fa-plus" aria-hidden="true"></i>
            <img src="After Sales.png" alt="" />
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <img src="One Stop Solution.png" alt="" />
          </div>
        </div>

        <div className="noob">
          <div className="noob1">
            <br />
            <h3>Why Choose Us</h3>
          </div>
          <br />
          <div className="row">
            <div className="column">
              <div className="card">
                <img src="SuperiorDesigns (1).svg" alt="" />
                <h3>Superior designs</h3>
                <p>
                  3D Visualization of complete <br />
                  interior desgin concept before <br />
                  sign-off
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src="HighQualityProducts.svg" alt="" />
                <h3>High Quality Products</h3>
                <p>
                  Customize furniture, manufactured <br />
                  with precision at state-of-the-art <br />
                  workshops
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src="Transparency.svg" alt="" />
                <h3>Transparency</h3>
                <p>
                  Professional and transparent <br />
                  project handling with software- <br />
                  based monitoring
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src="HomeDelivery.svg" alt="" />
                <h3>On-time delivery</h3>
                <p>
                  Complete project delivered in <br />
                  8 weeks or greater <br />
                  than 8 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="voul" id="section2">
          <div className="containy">
            <div className="title">BOOK A CONSULATATION</div>
            <form onSubmit={HandleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Location:</span>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="form-select form-select-lg mb-3"
                    aria-label="Large select example"
                  >
                    <option selected>select nearest studio</option>
                    <option value="Mum">Mumbai</option>
                    <option value="NvMUM">Navi Mumbai</option>
                    <option value="Bangalore">bengaluru</option>
                  </select>
                </div>
                <div className="input-box">
                  <span className="details">Name</span>
                  <input ref={nameRef} type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                  <span className="details">Phone No.</span>
                  <input
                    type="text"
                    placeholder="Enter Phone number"
                    required
                    ref={phoneRef}
                  />
                </div>

                <div className="input-box">
                  <span className="details">Email Id</span>
                  <input ref={emailRef} type="text" placeholder="Enter your email" required />
                </div>

                <div className="input-box">
                  <span className="details">Tentative budget</span>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="form-select form-select-lg mb-3"
                    aria-label="Large select example"
                  >
                    <option selected>Select Budget</option>
                    <option value="2.5-5L">Rs. 2.5 - 5 Lakhs</option>
                    <option value="5-8L">Rs. 5 Lakhs - Rs. 8 Lakhs</option>
                    <option value="8-15L">Rs. 8 Lakhs - Rs. 15 Lakhs</option>
                    <option value="20+L">Above Rs. 20 Lakhs</option>
                  </select>
                </div>
                <div className="button">
                  <input type="submit" value="SUBMIT" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ConsultancyPage;
