import React from "react";
import startup1 from "../../Images/startup1.png";
import startup2 from "../../Images/startup2.png";
import startup3 from "../../Images/startup3.png";

import compLogo from "../../Images/compLogo.png";

const Startup = () => {
  const cardInfo = [
    {
      image: startup1,
      logo: compLogo,
      title: "PDRL",
      text: "we are a Drone-tech start-up platform called AeroMegh to transform drone data into actionable insights. Nowaday, everyday1000s of drone fly  ",
      rise: "8.25%",
      subscription: "30,000",
    },
    {
      image: startup2,
      logo: compLogo,
      title: "PDRL",
      text: "we are a Drone-tech start-up platform called AeroMegh to transform drone data into actionable insights. Nowaday, everyday1000s of drone fly ",
      rise: "8.25%",
      subscription: "30,000",
    },
    {
      image: startup1,
      logo: compLogo,
      title: "PDRL",
      text: "we are a Drone-tech start-up platform called AeroMegh to transform drone data into actionable insights. Nowaday, everyday1000s of drone fly ",
      rise: "8.25%",
      subscription: "30,000",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div
        className="md:w-[335px] w-[100%] rounded-[35px] md:h-[523px] overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s] m-auto mb-[40px]"
        key={index}
      >
        <div className="w-[100%]">
          <img src={card.image} alt="" className="w-[100%] object-cover	" />
        </div>
        <div className="px-[30px] pt-[20px] ">
          <div className="flex  items-center">
            <div>
              <img src={card.logo} alt="" />
            </div>
            <div className="pl-[10px] text-[20px] font-[600] text-[#202054]">
              {card.title}
            </div>
          </div>

          <div className="py-[10px] text-[14px] font-[300] leading-[1.75] tracking-[0.65px] text-[#555770]">
            <h4>{card.text}</h4>
          </div>
          <div></div>
          <div className="flex justify-between py-[35px]">
            <div>
              <h4 className="text-[14px] font-[300] ">Raised</h4>
              <h4 className="text-[14px] font-[400] text-[#090813]">
                {card.rise}
              </h4>
            </div>
            <div>
              <h4 className="text-[14px] font-[300] ">Min.subscription</h4>
              <h4 className="text-[14px] font-[400] text-[#090813]">
                ₹ {card.subscription}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section>
        <div className="w-[100%] bg-[#ffffff] relative md:p-0 p-[20px] mb-[40px] mt-[20px]">
          <div className="text-center text-[#202054] pt-[50px] pb-8 ">
            <h4 className="md:text-[30px] text-[18px] font-[400]">
              New Startups getting onboard with us!
            </h4>
          </div>
          <div className=" rounded-[5px] md:grid md:grid-cols-3 md:px-[75px] md:pt-[50px]">
            {cardInfo.map(renderCard)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Startup;
