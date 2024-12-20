import React from "react";
import logo from "@/assets/img/logo.png";
import bannerImg from "@/assets/img/banner/hero_image.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Banner = () => {
  return (
    <section
      style={{ height: `92vh`, background: "#f5fcff", marginBottom: "50px" }}
    >
      <div
        className="container"
        style={{ height: "100%", position: "relative" }}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div>
            <p
              className="text-secondary"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <Image height={25} width={25} src={logo} alt="HealthXBD" /> 24/7
              Emergency Service
            </p>
            <h2 style={{ fontSize: "62px", margin: "8px 0" }}>
              Caring for <span className="my-cmn-text">Health</span> <br />{" "}
              Caring for You
            </h2>
            <p>
              A brief statement outlining the purpose and mission of the clinic.
              This can include the commitment to patient care, community health.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "18px" }}>
              <button className="btn-primary">DISCOVER MORE</button>
              <button className="btn-primary">SEE ALL SERVICES</button>
            </div>
          </div>
          <div>
            <Image src={bannerImg} alt="HealthXBD" />
          </div>
        </div>

        {/* Banner bottom */}
        <div
          style={{
            background: "white",
            boxShadow: "0px 3px 15px 0px #0000001A",
            borderRadius: "10px",
            padding: "25px",
            position: "absolute",
            bottom: "-30px",
            left: 0,
            right: 0,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="my-inp-parent">
              <span className="inp-icon">
                <FaSearch />
              </span>
              <input type="text" name="" placeholder="Ex, Doctor, Hospital" />
            </div>
            <div className="my-inp-parent">
              <span className="inp-icon">
                <FaSearch />
              </span>
              <input
                type="text"
                name=""
                placeholder="Ex. Surgeon,Cardiologist"
              />
            </div>
            <div className="my-inp-parent">
              <span className="inp-icon">
                <FaLocationDot />
              </span>
              <input type="text" name="" placeholder="Set your location" />
            </div>

            <div className="btn-primary">
              <FaSearch /> Search
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
