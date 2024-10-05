import React, { useState } from "react";
import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";

const Cardflip = () => {
  const [isFlipped, setisflipped] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setisflipped(!isFlipped);
      setisAnimating(true);
    }
  }

  return (
    <div className=" w-fit   grid grid-cols-1 md:grid-cols-3 relative ">
      <div class="flip-card">
        <div class="flip-card-front">
          <div class="inner">
            <h1>ACTIVE & ASPIRING ANGEL INVESTORS</h1>
          </div>
        </div>
        <div class="flip-card-back">
          <div class="inner">
            <p className="flex gap-2 items-start">
              {" "}
              <FaArrowRight />
              Network with angel investors, VCs, and private equity funds.{" "}
            </p>
            <p className="flex gap-2 items-start">
              {" "}
              <FaArrowRight />
              Learn from the best unicorn <br /> and decacorn founders at our
              engaging speaker sessions.
            </p>
            <p className="flex gap-2 items-start">
              {" "}
              <FaArrowRight />
              Explore unique startups <br />
              at the Startup Investor Conclave and join the exclusive Angel's
              club.
            </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-front">
          <div class="inner">
            <h1>VC & FAMILY OFFICES</h1>
          </div>
        </div>
        <div class="flip-card-back">
          <div class="inner">
            <p className="flex gap-2 items-start">
              {" "}
              <FaArrowRight />
              Join us as a thought leader <br /> at the Mumbai’s largest
              investor summit.
            </p>
            <p className="flex gap-2 items-start">
              {" "}
              <FaArrowRight />
              Network with 200+ top <br />
              start-ups and Mumbai’s #1 Startup Ecosystem Event.
            </p>
            <p className="flex gap-2 items-start">
              {" "}
              <FaArrowRight />
              Enjoy specially curated <br />
              meals with startups and angel investors
            </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-front">
          <div class="inner">
            <h1>STARTUPS</h1>
          </div>
        </div>
        <div class="flip-card-back">
          <div class="inner">
            <p className="flex gap-2 items-start">
              <FaArrowRight />
              Pitch to top angel investors, VCs and family offices
            </p>
            <p className="flex gap-2 items-start">
              {" "}
              <FaArrowRight size={15} />
              Meet renowned angel investors.
            </p>{" "}
            <p className="flex gap-2 items-start">
              {" "}
              <FaArrowRight />
              Get recognition <br />
              for being part of the angel investing event in the Mumbai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardflip;
