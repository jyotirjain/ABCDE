
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Staticcontact() {
  const [phone, setphone] = useState(false);
  const [email, setemail] = useState(false);
  return (
    <div className="staticcontact w-full lg:w-[50%] xl:w-[40%]">
      <h2>Connect with Bizdateup</h2>
      <p>You got questions, we have answers</p>
      <p className="mt-4 ">
        Curious about BizDateUp? Feel free to get in touch with us via our
        social media handles or drop us a message via the contact form below.
      </p>
      <div className="label mt-4 px-3">
        <CopyToClipboard text="7738583751" onCopy={() => setphone(true)}>
          <label className="flex items-center gap-1">
            <BsFillTelephoneFill />
            7738583751
          </label>
        </CopyToClipboard>
      </div>
      <div className="label mt-4 mb-7 px-3">
        <CopyToClipboard
          text="support@bizdateup.com"
          onCopy={() => setemail(true)}
        >
          <label className="flex items-center gap-1">
            <IoIosMail size={20} />
            support@bizdateup.com
          </label>
        </CopyToClipboard>
      </div>
      <p>BIZDATEUP TECHNOLOGIES PRIVATE LIMITED</p>
      <p>GST Number : 27AAKCB6285H1ZA</p>
      <div className="mt-10">
        <label>Locate Us.</label>
        <p className="w-[]">
          G2, Empire Business Centre, Empire Complex, 414 Senapati Bapat Marg,
          Delisle Rd, near shreeniwas mill, Lower Parel, Mumbai, Maharashtra,
          400013
        </p>
      </div>
      <div>
        <a
          href="https://www.google.com/maps/place/BizDateUp+Technologies+Private+Limited/@18.9995072,72.827288,18z/data=!4m6!3m5!1s0x3be7cf949b1a99a3:0xcefb581268658c0c!8m2!3d19.0013712!4d72.8277386!16s%2Fg%2F11rcvc49l1"
          target="_blank"
        >
          <label className="label mt-4 px-3 flex  items-center gap-1">
            {" "}
            <FaMapMarkerAlt /> Maps
          </label>
        </a>
      </div>
    </div>
  );
}

export default Staticcontact;
