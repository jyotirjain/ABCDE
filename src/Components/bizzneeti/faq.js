import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import { FaPlus } from "react-icons/fa6";

function Faq() {
  return (
    <div id="faq" className="flex justify-center bg-[#F2F0F8] py-[40px] px-[20px]">
      <div className=" w-full  max-w-[1280px] ">
        <div>
          <h1 className="text-[40px] text-[#ff706b] my-7 mb-10">
            Frequently Asked Questions (FAQs) for Startup Investor's Conclave -
            Mumbai:
          </h1>
        </div>
        <div></div>
        <h2 className="text-[28px] text-[#ff706b] my-5 ">General:</h2>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            What is the date and time of the event?{" "}
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            The event will be held on March 17th, 2024. Specific timings will be
            confirmed closer to the event date.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Where will the event take place?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            The event will be held at the Lalit Mumbai.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Who should attend this event?{" "}
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            This event is designed for Angel Investors, aspiring Angel
            Investors, Startup Founders, CAs, CFAs, Investment Bankers, Fund
            Managers, service providers, and anyone connected to the Indian
            Startup Ecosystem.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            What is the dress code for the event?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Business casual attire is recommended.
          </AccordionDetails>
        </Accordion>
        {/*  */}
        <h2 className="text-[28px] text-[#ff706b] my-5 ">
          Tickets & Registration:
        </h2>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            What are the different ticket options available?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            There are two types of tickets: <br />
            Attendee Ticket (₹4999 + GST): Access to all sessions, workshops,
            networking events, and luncheons. <br />
            Startup Founder Pitching Ticket (₹19999 + GST): Access to all
            attendee benefits, plus the opportunity to pitch your startup to
            potential investors. (Limited slots available)
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            How can I register for the event?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            You can register online through the event website.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            What is the cancellation policy?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            We offer a full refund for cancellations made before [date]. After
            that date, refunds will not be issued.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Can I transfer my ticket to someone else?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Yes, you can transfer your ticket to another person by contacting
            the organizers.
          </AccordionDetails>
        </Accordion>
        {/*  */}
        <h2 className="text-[28px] text-[#ff706b] my-5 ">
          Event Schedule & Activities:
        </h2>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Will there be a detailed schedule of the event available?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Yes, a detailed schedule with timings and speakers will be shared
            closer to the event date.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            What kind of talks and workshops will be offered?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            We will offer a variety of sessions on topics such as angel
            investing, fundraising, startup pitching, industry trends, and more.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Will there be any networking opportunities?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Yes, there will be dedicated networking sessions and break times
            throughout the day.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Will there be food and drinks served?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Yes, refreshments will be provided throughout the day, and lunch is
            included in the ticket price for all attendees.
          </AccordionDetails>
        </Accordion>
        {/*  */}
        <h2 className="text-[28px] text-[#ff706b] my-5 ">Startup Founders:</h2>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            How can I apply to pitch my startup at the event?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            You can apply through the event website. We have a limited number of
            slots available, so early application is encouraged.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            What criteria are you looking for in startups to be considered for
            pitching?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            We are looking for innovative and promising startups with
            high-growth potential.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            What kind of feedback will I receive after pitching my startup?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            We will provide all pitching founders with feedback from the
            investor panel.
          </AccordionDetails>
        </Accordion>
        {/*  */}
        <h2 className="text-[28px] text-[#ff706b] my-5 ">Other:</h2>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Do I need to bring anything with me to the event?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Please bring a valid ID and your event confirmation email.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Will there be parking available at the venue?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Yes, paid parking is available at the Lalit Mumbai.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ background: "#F2F0F8" }}>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Is there a dress code for the event?
          </AccordionSummary>
          <AccordionDetails
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Business casual attire is recommended.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
