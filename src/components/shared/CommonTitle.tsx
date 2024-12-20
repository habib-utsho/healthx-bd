import React from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";

const CommonTitle = ({
  title,
  subTitle,
  alignment = "center",
}: {
  title: string;
  subTitle: string;
  alignment?: "left" | "right" | "center";
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
        margin: alignment === "center" ? "auto" : 0,
        textAlign: alignment,
      }}
    >
      <p
        className="text-primary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: alignment,
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
