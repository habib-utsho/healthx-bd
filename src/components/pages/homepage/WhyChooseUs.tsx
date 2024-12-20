import React from "react";
import whyChooseUsImg from "@/assets/img/WhyChooseUs/whyChooseUs.png";
import CommonTitle from "@/components/shared/CommonTitle";
import WhyChooseUsStep from "@/components/ui/cards/WhyChooseUsStep";
import Image from "next/image";

const WhyChooseUs = () => {
  const whyChooseUsData = [
    {
      title: "Compassionate & Expert Care",
      description:
        "Our team of dedicated healthcare professionals combines years",
    },
    {
      title: "Patient-Centered Approach",
      description:
        "Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions.",
    },
    {
      title: "Personalized Treatment Plans",
      description:
        "We understand that every patient is unique, and their healthcare needs may vary. That's why we create individualized treatment.",
    },
  ];
  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="why-choose-us">
          <div className="why-choose-us-left">
            <CommonTitle
              subTitle="Why Choose Us"
              title="We Remain Continuously Available for Your Health Services"
              alignment="left"
            />
            <div className="why-choose-us-steps">
              {whyChooseUsData.map((item: any, ind: number) => {
                return (
                  <WhyChooseUsStep
                    key={ind}
                    wcu={item}
                    ind={ind}
                    lastElem={whyChooseUsData.length === ind}
                  />
                );
              })}
            </div>
          </div>
          <div className="why-choose-us-right">
            <Image src={whyChooseUsImg} alt="why choose us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
