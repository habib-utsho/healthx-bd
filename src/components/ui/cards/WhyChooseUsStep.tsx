import React from "react";

const WhyChooseUsStep = ({
  wcu,
  ind,
  lastElem,
}: {
  wcu: any;
  ind: number;
  lastElem: boolean;
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",

        marginBottom: lastElem ? "0" : "20px",
      }}
    >
      <div>
        <span
          style={{
            height: "50px",
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "transparent",
            border: "2px solid #004990",
            fontWeight: "bold",
            color: "#004990",
          }}
        >
          {String(ind + 1).padStart(2, "0")}
        </span>
      </div>
      <div
        style={{
          paddingBottom: "10px",
          borderBottom: lastElem ? "none" : "1px solid #d8dde1",
        }}
      >
        <h2 style={{ fontSize: "21.68px" }}>{wcu.title}</h2>
        <p
          className="my-paragraph"
          style={{
            margin: "15px 0",
          }}
        >
          {wcu.description}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUsStep;
