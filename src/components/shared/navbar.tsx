import React from "react";
import logo from '@/assets/img/logo.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="p-4">
      <div className="container">
          <Image src={logo} alt="HealthXBD" />
          <ul className="navbar-menu">
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
          </ul>
          <div className="navbar-right">
            <div className="navbar-icon-parent">
              <span>O</span>
              <span>E</span>
            </div>
            <button className="btn-primary">Appointment Now</button>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
