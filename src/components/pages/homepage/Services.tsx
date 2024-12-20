import CommonTitle from "@/components/shared/CommonTitle";
import React from "react";
import internalMedicine from "@/assets/img/services/internal_medicine.png";
import dentalCare from "@/assets/img/services/dental_care.png";
import urologyCare from "@/assets/img/services/urology_care.png";
import neurologyCare from "@/assets/img/services/neurology_care.png";
import gynecologists from "@/assets/img/services/gynecologists.png";
import ophthalmologoy from "@/assets/img/services/ophthalmogoy.png";
import orthopedics from "@/assets/img/services/orthopedics.png";
import cardiology from "@/assets/img/services/cardiology.png";
import ServiceCard from "@/components/ui/cards/ServiceCard";
import { TService } from "@/types/service.type";
import Link from "next/link";

const Services = () => {
  const servicesData = [
    {
      name: "Internal Medicine",
      img: internalMedicine,
      doctors: 30,
    },
    {
      name: "Dental Care",
      img: dentalCare,
      doctors: 30,
    },
    {
      name: "Urology Care",
      img: urologyCare,
      doctors: 30,
    },
    {
      name: "Neurology Care",
      img: neurologyCare,
      doctors: 30,
    },
    {
      name: "Gynecologists",
      img: gynecologists,
      doctors: 30,
    },
    {
      name: "Ophthalmologoy",
      img: ophthalmologoy,
      doctors: 30,
    },
    {
      name: "Orthopedics",
      img: orthopedics,
      doctors: 30,
    },
    {
      name: "Cardiology",
      img: cardiology,
      doctors: 30,
    },
  ];

  return (
    <div>
      <div className="container">
        <CommonTitle
          title="Our Mediax specialties
        service"
          subTitle="Our Services"
        />
        <div className="service-card-container">
          {servicesData.map((service: TService, ind: number) => {
            return <ServiceCard key={ind} service={service} />;
          })}
        </div>
      </div>

      {/* Get more services */}
      <div className="get-more-services">
        <div>
          <p className="my-paragraph">You Get Our 20+ More services...</p>{" "}
          <Link href="/">Explore All Services</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
