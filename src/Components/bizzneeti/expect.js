import React from "react";
import keynote from "../../assets/images/bizzneeti/Vector.png";
import fireside_chat from "../../assets/images/bizzneeti/download (1) 1.png";
import expert_panel from "../../assets/images/bizzneeti/download (2) 1.png";
import investment_panel from "../../assets/images/bizzneeti/download (3) 1.png";
import startup from "../../assets/images/bizzneeti/download (4) 1.png";
import network from "../../assets/images/bizzneeti/download (5) 1.png";

function Expect() {
  return (
    <div className="bg-[#FFFFFF] flex justify-center py-[80px] px-[40px]">
      <div className="max-w-[1280px] w-full rounded-[20px] pb-[80px] bg-[#F2F0F8]  ">
        <div className=" p-[20px] md:p-[60px] flex flex-col md:flex-row justify-between  ">
          <div className=" text-[28px] md:text-[60px] font-[Eina01] text-[#FF706B] leading-none ">
            What To Expect from this event?
          </div>
          <span className=" text-[14px] md:text-[26px] font-[arial] md:w-1/2 mt-4 md:mt-0">
            Top 6 Reasons why should Attend Starup Investors Conclave’24.
          </span>
        </div>
        <div className="md:pt-[80px] py-[20px] px-[20px] md:pl-[60px] grid grid-flow-col overflow-x-scroll gap-10 ">
          <div className="rounded-[16px] md:w-[300px] w-[280px] bg-[#fff] overflow-hidden">
            <div className="  h-[202px] md:h-[250px] bg-[#4C1145] flex justify-center items-center  ">
              {" "}
              <img
                src={keynote}
                className="h-[180px]  text-[#fff]"
              />{" "}
            </div>
            <div className="p-[28px] ">
              <div className="text-[#FF706B] text-[14px] md:text-[22.4px] mb-[12px] font-[Eina01] ">
                01
              </div>
              <h3 className="text-[22.4px] mb-[12px] font-[Eina01]">
                Keynotes
              </h3>
              <div className="text-[12px] md:text-[16px] text-[#00000080] font-[arial] ">
                Immerse yourself in thought-provoking workshops and discussions
                led by renowned industry experts. Learn proven strategies for
                angel investing, fundraising, and navigating the dynamic startup
                landscape. All Insights No “Gyaan”!
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="rounded-[16px] md:w-[300px] w-[280px]   bg-[#fff] overflow-hidden">
            <div className="  h-[202px] md:h-[250px] bg-[#4C1145] flex justify-center items-center   ">
              <img src={fireside_chat} className="h-[180px] text-[#fff]" />{" "}
            </div>
            <div className="p-[28px] ">
              <div className="text-[#FF706B] text-[14px] md:text-[22.4px] mb-[12px] font-[Eina01] ">
                02
              </div>
              <h3 className="text-[22.4px] mb-[12px] font-[Eina01]">
                Fireside Chats
              </h3>
              <div className="text-[12px] md:text-[16px] text-[#00000080] font-[arial] ">
                Live, handcrafted fireside conversations with some of the most
                influential minds and top 1% Industry experts to help you cut
                through the noise. No fluff. Only specialized knowledge!
              </div>
            </div>
          </div>
          <div className="rounded-[16px] md:w-[300px] w-[280px]   bg-[#fff] overflow-hidden">
            <div className="  h-[202px] md:h-[250px] bg-[#4C1145] flex justify-center items-center   ">
              <img src={expert_panel} className="h-[180px] text-[#fff]" />{" "}
            </div>
            <div className="p-[28px] ">
              <div className="text-[#FF706B] text-[14px] md:text-[22.4px] mb-[12px] font-[Eina01] ">
                03
              </div>
              <h3 className="text-[22.4px] mb-[12px] font-[Eina01]">
                Expert Panels
              </h3>
              <div className="text-[12px] md:text-[16px] text-[#00000080] font-[arial] ">
                Curated sessions to give you an all-round perspective on the
                hottest trends as well as actionable insights that you can apply
                right away.
              </div>
            </div>
          </div>
          <div className="rounded-[16px] md:w-[300px] w-[280px]   bg-[#fff] overflow-hidden">
            <div className="  h-[202px] md:h-[250px] bg-[#4C1145] flex justify-center items-center   ">
              <img src={investment_panel} className="h-[180px] text-[#fff]" />{" "}
            </div>
            <div className="p-[28px] ">
              <div className="text-[#FF706B] text-[14px] md:text-[22.4px] mb-[12px] font-[Eina01] ">
                04
              </div>
              <h3 className="text-[22.4px] mb-[12px] font-[Eina01]">
                Investment opportunities
              </h3>
              <div className="text-[12px] md:text-[16px] text-[#00000080] font-[arial] ">
                Network with top startup founders and uncover opportunities to
                invest in global scaling top 1% Startups.
              </div>
            </div>
          </div>
          <div className="rounded-[16px] md:w-[300px] w-[280px]   bg-[#fff] overflow-hidden">
            <div className="  h-[202px] md:h-[250px] bg-[#4C1145] flex justify-center items-center   ">
              <img src={startup} className="h-[180px] text-[#fff]" />{" "}
            </div>
            <div className="p-[28px] ">
              <div className="text-[#FF706B] text-[14px] md:text-[22.4px] mb-[12px] font-[Eina01] ">
                05
              </div>
              <h3 className="text-[22.4px] mb-[12px] font-[Eina01]">
                NETWORK WITH THE WORLD'S TOP STARTUPS
              </h3>
              <div className="text-[12px] md:text-[16px] text-[#00000080] font-[arial] ">
                Interact with a wide range of India’s finest upcoming startups
                and witness the ultimate Investment pitches from top 5
                shortlisted startups - Best for Aspiring Founders.
              </div>
            </div>
          </div>
          <div className="rounded-[16px] md:w-[300px] w-[280px]   bg-[#fff] overflow-hidden">
            <div className="  h-[202px] md:h-[250px] bg-[#4C1145] flex justify-center items-center   ">
              <img src={network} className="h-[180px] text-[#fff]" />{" "}
            </div>
            <div className="p-[28px] ">
              <div className="text-[#FF706B] text-[14px] md:text-[22.4px] mb-[12px] font-[Eina01] ">
                06
              </div>
              <h3 className="text-[22.4px] mb-[12px] font-[Eina01]">
                Dedicated networking opportunities{" "}
              </h3>
              <div className="text-[12px] md:text-[16px] text-[#00000080] font-[arial] ">
                Participate in interactive sessions and luncheons designed to
                spark meaningful conversations and build lasting relationships.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expect;
