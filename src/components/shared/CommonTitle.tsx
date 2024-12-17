import React from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";

const CommonTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "350px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <p
        className="text-primary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Image height={25} width={25} src={logo} alt="HealthXBD" /> {subTitle}
      </p>
      <h2 style={{ fontWeight: "36px" }}>{title}</h2>
    </div>
  );
};

export default CommonTitle;
