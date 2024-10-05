import React from "react";
import Bizznavbar from "./bizznavbar";
import Bizzfooter from "./bizzfooter";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

function StartupForm() {
  const navigate = useNavigate();

  function Submit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbzWjBnxlinITjSNsu5IDO2G08kdQol8u-JQ7aONSIK1PjdH4jDhssIM6yBrwYbkdPd3/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text(); // Parse response as text
      })
      .then((data) => {
        console.log("Form submission successful:", data); // Log response text
        toast.success("Your startup has been submitted successfully!");
        navigate("/sic24/startup/thankyou");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }

  return (
    <div>
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '5740980065984220');
            fbq('track', 'PageView');
          `}
        </script>

        <noscript>
          {`
        <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=5740980065984220&ev=PageView&noscript=1"
      />
        `}
        </noscript>
        <script type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "l9c6vjr47o");
          `}
        </script>
      </Helmet>
      <Bizznavbar />
      <div className="flex justify-center py-12 ">
        <div className="w-full max-w-[1280px] ">
          <div className="flex justify-center ">
            <form
              onSubmit={(e) => Submit(e)}
              className="form w-full max-w-[800px] gap-5 py-[20px] px-4"
            >
              <h1 className="text-3xl font-[600] text-[#ff706b] text-center w-full flex justify-center ">
                Startup Form For SIC'24
              </h1>
              <div className="flex flex-col md:flex-row  gap-x-4 gap-y-2 ">
                <div className="flex flex-col md:w-1/2">
                  <label>First Name</label>
                  <input
                    required
                    placeholder="Jane"
                    name="FirstName"
                    className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none "
                  />
                </div>
                <div className="flex flex-col  md:w-1/2">
                  <label>Last Name</label>
                  <input
                    required
                    name="LastName"
                    placeholder="Doe"
                    className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-x-4 gap-y-2 ">
                <div className="flex flex-col md:w-1/2">
                  <label>Phone</label>
                  <input
                    type="tel"
                    required
                    name="Phone"
                    placeholder="+91 88XXX XXXXX"
                    className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none "
                  />
                </div>
                <div className="flex flex-col  md:w-1/2">
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    name="Email"
                    placeholder="jane@example.com"
                    className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-x-4 gap-y-2  ">
                <div className="flex flex-col md:w-1/2">
                  <label>Company Name</label>
                  <input
                    required
                    name="CompanyName"
                    placeholder="XYZ Enterprice"
                    className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none "
                  />
                </div>
                <div className="flex flex-col  md:w-1/2">
                  <label>Company Valuation</label>
                  <input
                    required
                    name="Valuation"
                    placeholder="10M₹"
                    className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-x-4 gap-y-2  ">
                <div className="flex flex-col md:w-1/2">
                  <label>Company Website</label>
                  <input
                    type="url"
                    required
                    name="Website"
                    placeholder="www.xyzenterprise.com"
                    className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none "
                  />
                </div>
                <div className="flex flex-col  md:w-1/2">
                  <label>Start Date</label>
                  <input
                    type="date"
                    required
                    name="StartDate"
                    className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none"
                  />
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col  ">
                <label>Company Description</label>
                <textarea
                  required
                  name="Description"
                  placeholder="XYZ do something in tech domain"
                  className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none"
                />
              </div>
              <div className="flex flex-col  ">
                <label>Attach Pitch Deck URL</label>
                <input
                  type="url"
                  required
                  name="Pitchdeck"
                  placeholder="www.drive.google.com/xyz-folder"
                  className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none"
                />
              </div>
              {/*  */}
              <div className="flex md:flex-row flex-col gap-x-4 gap-y-2  ">
                <div className="flex flex-col md:w-1/2">
                  <label>Linkedin URL of Founders*</label>
                  <input
                    type="url"
                    required
                    name="LinkedInurl"
                    placeholder="linkedin.in/name"
                    className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none "
                  />
                </div>
                <div className="flex flex-col  md:w-1/2">
                  <label>Sector*</label>
                  <input
                    required
                    name="Sector"
                    placeholder="example: AI, SAAS"
                    className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col  ">
                <label>Raised Funds Before?*</label>
                <input
                  required
                  name="Raisefund"
                  placeholder="Yes/No, If Yes, from which firms/angels?"
                  className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none"
                />
              </div>
              <div className="flex flex-col  ">
                <label>How much capital are you willing to raise?*</label>
                <input
                  required
                  name="CapitalToRaise"
                  placeholder="INR 2 Cr"
                  className="bg-[#ebebeb] text-[16px] text-[#000] p-[12px] rounded-lg outline-none border-none"
                />
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="w-full p-[15px] bg-[#ff706b] rounded-xl mt-4 text-[#fff] text-[18px] font-sans font-[500] "
                >
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Bizzfooter />
    </div>
  );
}

export default StartupForm;
