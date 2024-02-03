"use client"
import React, { useState } from "react";
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from "swiper/react";
import "../style.css";
import Slider from "@/components/slider";
import Footer from "@/components/footer";
import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

// SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  const hideMenu = () => {
    setShow(false)
   };

   const showMenu = () => {
       setShow(true)
   };
   const [show,setShow] = useState(false)
  return (
    <div>
      {/* Header section */}
      <section>
        <div className="container">
          <nav>
            <div className="wrapper nine">
              <div>
                <h3 className="rotate">
                  <span>L</span>
                  <span>u</span>
                  <span>k</span>
                  <span>y</span>
                  <span>I</span>
                  <span>n</span>
                  <span>t</span>
                  <span>e</span>
                  <span>r</span>
                  <span>i</span>
                  <span>o</span>
                </h3>
              </div>
            </div>
            <div className="navbar" id="navLinks">
              <ul  className={`navbar ${show?'-z-10 -translate-x-[400px]':''}`}>
                <li>
                  <a href="consultancy">Home interior</a>
                </li>
                <li>
                  <a href="#ping">About Us</a>
                </li>
                <li>
                  <a href="">Design ideas</a>
                </li>
                <li>
                  <a href="">Contact US</a>
                </li>
                
                <div className="absolute right-3 hidden md:block">
             <UserButton  afterSignOutUrl="/"/> 
             </div>
             <X className={`${show?'z-10 text-white relative bottom-48 left-32':'hidden '} `} onClick={hideMenu}/>
              </ul>
            </div>
            <Menu className={`md:hidden `} onClick={showMenu}/>
          </nav>
          <div className="">
            <Slider />
          </div>
        </div>
      </section>

      {/* Another section */}
      <section>
        {" "}
        <div className="gallery">
          <div className="content">
            <img src="/image/ji.jpg" alt="" />
            <h1>Modular interiors</h1>
            <br />
            <p>Functionl modular solutions for kitchen</p>
            <br />
            <a href="Living.html">
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>

          <div className="content">
            <img src="/image/ji.jpg" alt="" />
            <h1>Full Home Interiors</h1>
            <br />
            <p>Interiors for every corner your home</p>
            <br />
            <a href="Living.html">
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>

          <div className="content">
            <img src="/image/ji.jpg" alt="" />
            <h1>Commercial Interiors</h1>
            <br />
            <p>interior solutions for your workplace</p>
            <br />
            <a href="Living.html">
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>

          <div className="content">
            <img src="/image/ji.jpg" alt="" />
            <h1>Renovations office or home</h1>
            <br />
            <p>
              build your dream house
              <br /> with us
            </p>
            <br />
            <a href="Living.html">
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div class="cul">
          <h3>Get the estimate for your home.</h3>
          <p>
            <b>
              Calculate the approximate cost of doing up your home interiors
            </b>
          </p>
          <br />
          <br />
          <div class="card">
            <img src="image/hol.webp" alt="Denim Jeans" className="w-screen" />
            <h1>Full Home Interior</h1>
            <p>Know the estimate price for your full home interiors.</p>
            <p>
              <button>
                <a href="/est">CALCULATE</a>
              </button>
            </p>
          </div>
          <br />

          <div class="card">
            <img src="image/ji.jpg" alt="Denim Jeans" className="w-screen"/>
            <h1>KITCHEN</h1>
            <p>Know the estimate price for your kitchen interiors.</p>
            <p>
              <button>
                <a href="/est1">CALCULATE</a>
              </button>
            </p>
          </div>
          <br />
          <div class="card">
            <img src="image/wooden.webp" alt="Denim Jeans" className="w-screen"/>
            <h1>WARDROBE</h1>
            <p>Know the estimate price for your wardrobe.</p>
            <p>
              <button>
                <a href="/est2">CALCULATE</a>
              </button>
            </p>
          </div>
        </div>
      </section>
      {/* About us */}
      <section className="mt-10">
        <div class="heading">
          <h2>About Us</h2>
          <p>
            Lucky Interio is India’s premium furniture brand in both home and
            institutional segments with a strong commitment to sustainability
            and centers of excellence in design, manufacturing and retail.
          </p>
        </div>
        <div class="cont" id="ping">
          <section class="about">
            <div class="about-image">
              <img src="/image/product10.jpeg" alt="" />
            </div>
            <div class="about-content">
              <h3>Design Better,Shape Better</h3>
              <p>
                Lucky Interio aims to transform spaces with its thoughtfully
                designed furniture to create brighter homes and offices with
                products that have the highest design quotient in aesthetics,
                functionality and technology. With consistent pursuit of
                excellence and a special focus on health and ergonomics,Lucky
                Interio’s product portfolio comprises a massive range in the
                home, office and other specialized applications.
              </p>
              <p>
                Lucky Interio’s commitment to the environment has resulted in
                manufacturing products with lesser carbon footprint. Godrej
                Interio has the widest range of green choices for our customers
                which not only includes products but also services such as green
                interiors and recycling.
              </p>
              <h4>Explore our furniture by rooms</h4>
              <p>
                <a href="/living" className="font-bold">Living room</a>
                <a href="/dining" className="font-bold">Dining room</a>
                <a href="/bedroom" className="font-bold">Bedroom</a>
                <a href="/study" className="font-bold">Study and Home Office</a>
                <a href="/kitchen" className="font-bold">Kitchen</a>
              </p>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
