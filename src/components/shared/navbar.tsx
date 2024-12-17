import React from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";

import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="p-4">
      <div className="container">
        <div
          style={{
            display: "flex",
            gap: "4px",
            fontWeight: "semi-bold",
            alignItems: "center",
            fontSize: "20px",
            color: "#004990",
          }}
        >
          <Image src={logo} alt="HealthXBD" />
          <h3>Health</h3>
        </div>
        <ul className="navbar-menu">
          <li><Link href="/">Find Doctors</Link></li>
          <li><Link href="/">Hospitals</Link></li>
          <li><Link href="/">About Us</Link></li>
          <li><Link href="/">Services</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
        <div className="navbar-right">
          <div className="navbar-icon-parent">
            <span className="nav-icon">
              <IoIosSearch />
            </span>
            <span className="nav-icon cart-icon">
              <IoCartOutline />
              <span>5</span>
            </span>
          </div>
          <button className="btn-primary">Appointment Now</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
