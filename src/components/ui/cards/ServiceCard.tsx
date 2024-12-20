import { TService } from "@/types/service.type";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }: { service: TService }) => {
  return (
    <div className="service-card">
      <figure>
        <Image src={service.img} alt={service.name} />
      </figure>
      <h2>{service.name}</h2>
      <p className="my-paragraph">{service.doctors}+ Doctors</p>
      <button className="btn-primary">READ MORE</button>
    </div>
  );
};

export default ServiceCard;
