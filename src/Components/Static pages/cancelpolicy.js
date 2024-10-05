import React from "react";
import Cta10 from "../../assets/images/cta/cta10.png";
import Cta11 from "../../assets/images/cta/cta11.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Navbar from "../Navbar1/Navbar1";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function cancelpolicy() {
  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>
          Cancellation Policy | Investment Cancellation Process | Bizdateup
        </title>
        <meta
          name="description"
          content="Familiarize yourself with our Cancellation Policy for investment cancellations on Bizdateup. Learn about cancellation procedures and applicable terms."
        />
        <meta
          name="keywords"
          content="cancellation policy, investment cancellation process, Bizdateup, cancellation procedures"
        />
      </Helmet>
      <div className="static p-5 md:p-12">
        <div className="flex flex-col w-full md:max-w-[1220px] 2xl:w-[75%]">
          <h1>Cancellation Policy</h1>
          <div className="flex gap-x-8">
            <div className="static-container w-full md:w-[80%]">
              <h2>Cancellation Policy</h2>
              <p>
                A cancellation is a notice sent by a company to a client,
                informing them that an erroneous trade has been made and is
                being rectified. When processing cancellations, industry best
                practices require that company maintain detailed records on all
                the actions taken to correct the mistaken trades.
              </p>

              <h2>All sales are not final</h2>
              <p>
                All sales are not final implies that a customer can cancel and
                exchange or claim a refund on the purchase. Most successful
                websites employ this clause in their policy to enable customers
                the added choice of return and refund. All sales are final would
                imply the opposite, that a customer would not be able to cancel
                or return a good once a purchase has been made.
              </p>

              <h2>Refund cost</h2>
              <p>
                The cost for refund is borne by either the customer or the
                company. This should be stated clearly in the return and
                cancellation policy on the website. There shouldn’t be any
                hidden cost for cancellation and refund. The payment procedure
                for the same should be mentioned in the policy as well.
              </p>

              <h2>Time Frame to return</h2>
              <p>
                The policy should explicitly state the time period allocated for
                cancellation. This means the time frame a customer has to cancel
                an order. The policy should also state the time period allotted
                for refund. This means the number of days it will take for a
                customer to get his money back after making a return. The time
                frame for malfunctioning and damaged products generally differ
                from the normal cancellation/exchange of a good. Sometimes a
                customer may get credit or an exchange offer instead of a
                refund. The duration allotted for such an exchange or credit and
                date of expiry of exchange should be stated as a main sub point
                in the policy.
              </p>

              <h2>Digital products</h2>
              <p>
                Digital products may or may not have refunds on purchases of
                such products. Sometimes a download link may not work and the
                company may give a refund in such rare cases
              </p>

              <h2>Form of refund</h2>
              <p>
                The website should also state the forms of refund available to a
                customer. A product can be exchanged for cash in terms of a
                refund, store credit or exchanged for another product
                altogether.The criteria for eligibility of refund should also be
                included in this point. (example: return a good in its original
                condition, within a time period, etc.) Most successful online
                companies offer their customers the option to select the form of
                refund, return or exchange as per the convenience of the
                customer.
              </p>
            </div>
            <div className="hidden md:flex md:flex-col md:w-[301px] md:gap-y-8">
              <Link to="/invest">
                <div className="cta">
                  <div className="ctaimg bg-[#B5C3DC]">
                    <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Invest in the Next Unicorn
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                      Be part of the journey of the next billion-dollar startup
                    </p>
                    <div className="flex justify-end mt-3 mb-2">
                      <img src={Cta10} />
                    </div>
                  </div>
                  <div
                    className="flex justify-between items-center my-1 mx-5"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn More
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>

              <Link to="/learn">
                <div className="cta">
                  <div className="ctaimg bg-[#ACD8F2]">
                    <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Support Minority-Led Businesses
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                      Help bridge the funding gap for underrepresented
                      entreprener
                    </p>
                    <div className="flex justify-between mt-1 mb-2">
                      <img src={Cta11} />
                    </div>
                  </div>
                  <div
                    className="flex justify-between items-center my-1 mx-5"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default cancelpolicy;
