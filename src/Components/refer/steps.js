import React from "react";
import Curve from "./curve";
import invite from "../../assets/images/refer/invite.svg";
import registration from "../../assets/images/refer/registration.svg";
import benefit from "../../assets/images/refer/benefit.svg";
import { TbPointFilled } from "react-icons/tb";

function Steps() {
  return (
    <div>
      <div className="profile-container">
        <h2 className="text-[#252525] text-xl not-italic font-normal leading-[normal] font-[Inter]">
          See how easy it is{" "}
        </h2>
        <p className="text-[#828F99] text-[13.33px] not-italic font-normal leading-[100%] font-[Inter] mt-1 ">
          
        </p>
        <div className="flex justify-center  mt-[50px] mb-[20px]">
          <div className="flex flex-col md:flex md:flex-row md:justify-between gap-y-8 md:w-[650px] ">
            <div className="md:w-[150px] flex flex-col gap-9 justify-center items-center">
              <div className="bg-[#f7f7f7] w-[96px] h-[96px] md:w-[124px] md:h-[124px] rounded-[50%] flex justify-center items-center ">
                <img src={invite} />
              </div>
              <div className="text-center">
                <label className="text-[#252525] text-[15.619px] not-italic font-medium leading-[100%] font-[Inter]">
                  Share Unique link{" "}
                </label>
                <p className="text-[#828F99] text-center text-[11.566px] not-italic font-normal leading-[150%] font-[Inter]">
                  Onboard investors through your unique referral link on
                  Bizdateup’s platform
                </p>
              </div>
            </div>

            <div className="relative flex">
              <Curve className="absolute  md:block hidden left-[-80px] top-[40px] " />
              <div className=" md:w-[150px] flex flex-col gap-9 justify-center items-center">
                <div className="bg-[#f7f7f7] w-[96px] h-[96px] md:w-[124px] md:h-[124px] rounded-[50%] flex justify-center items-center ">
                  <img src={registration} />
                </div>
                <div className="text-center">
                  <label className="text-[#252525] text-[15.619px] not-italic font-medium leading-[100%] font-[Inter]">
                    Investing
                  </label>
                  <p className="text-[#828F99] text-center text-[11.566px] not-italic font-normal leading-[150%] font-[Inter]">
                    Post KYC, let them invest in their favourite startups listed
                    on the platform.
                  </p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="16"
                viewBox="0 0 66 16"
                fill="none"
                className="absolute md:block hidden right-[-90px] top-[70px]"
              >
                <path
                  d="M64.7927 1.6815C39.7212 19.0533 25.6582 17.6255 0.582612 1.68151"
                  stroke="#AEAEFF"
                  stroke-width="1.73541"
                  stroke-dasharray="4.34 4.34"
                />
              </svg>
            </div>

            <div className="md:w-[150px] flex flex-col gap-9 justify-center items-center">
              <div className="bg-[#f7f7f7] w-[96px] h-[96px] md:w-[124px] md:h-[124px] rounded-[50%] flex justify-center items-center ">
                <img src={benefit} />
              </div>
              <div className="text-center">
                <label className="text-[#252525] text-[15.619px] not-italic font-medium leading-[100%] font-[Inter]">
                  Get Commission
                </label>
                <p className="text-[#828F99] text-center text-[11.566px] not-italic font-normal leading-[150%] font-[Inter]">
                  You get 1% of the amount your referred investor invest through
                  our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-container mt-5">
        <div>
          <label className="text-[#252525] text-xl not-italic font-normal leading-[normal] font-[Inter] ">
            Terms and conditions{" "}
          </label>
          <div className="flex flex-col gap-5 mt-7">
            <div className="text-[#AEAEFF] flex ">
              <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
              <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                Investor Referral Commission: Your commission is tracked once
                the payment is confirmed on the platform from your referral.
              </label>
            </div>
            <div className="text-[#AEAEFF] flex ">
              <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
              <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                Startup Referral Commission: For startup referrals, your
                commission is 0.25% of the amount of funds the startup raises on
                our platform. For more details, please contact our team at
                support@bizdateup.com.
              </label>
            </div>
            <div className="text-[#AEAEFF] flex ">
              <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
              <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                Custom Commission: The default commission percentage for
                referring investors to startups is 1%. However, you can ALWAYS
                REQUEST A HIGHER COMMISSION percentage.
              </label>
            </div>
            <div className="text-[#AEAEFF] flex ">
              <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
              <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                Total Referral Earnings: Your total referral earnings consist of
                the sum of rewards earned from referring investors and rewards
                earned from referring startups.
              </label>
            </div>
            <div className="text-[#AEAEFF] flex ">
              <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
              <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                Tracking Unfinished Campaigns: Startups in which your referred
                investors have invested, but the campaigns aren't closed yet, or
                startups you've referred that are still raising funds but
                haven't finished their campaigns, all these rewards are tracked
                in the total rewards but aren't immediately shown as redeemable.
              </label>
            </div>
            <div className="text-[#AEAEFF] flex ">
              <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
              <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                Redeemable Amount: To redeem your earnings, the minimum balance
                should be ₹10,000 INR. Please note that it may take up to 7 days
                to process your redeem request.
              </label>
            </div>
            <div className="text-[#AEAEFF] flex ">
              <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
              <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                Termination of the Referral Program:Bizdateup reserves the right
                to terminate or modify the referral program at its discretion.
                Participants will be notified of any changes through email or
                via the Bizdateup platform.{" "}
              </label>
            </div>
            <div className="text-[#AEAEFF] flex ">
              <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
              <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                Fraud Prevention: Participants found engaging in fraudulent
                activity, including creating fake referrals or using deceptive
                practices, will be disqualified from the program. Bizdateup may
                also take legal action if necessary.
              </label>
            </div>
            <div className="text-[#AEAEFF] flex ">
              <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
              <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                Changes to Terms: These terms and conditions are subject to
                change. Participants will be informed of any updates through
                email or platform notifications. It is the participant's
                responsibility to review the terms regularly.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
