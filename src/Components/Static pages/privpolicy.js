import React from "react";
import "../../assets/css/styles.css";
import Cta10 from "../../assets/images/cta/cta10.png";
import Cta11 from "../../assets/images/cta/cta11.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Navbar from "../Navbar1/Navbar1";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function privpolicy() {
  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>Privacy Policy | Data Protection | Bizdateup</title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how Bizdateup protects and handles your personal information. Your privacy and data security are our top priorities."
        />
        <meta
          name="keyword"
          content=" privacy policy, data protection, Bizdateup, personal information"
        />
      </Helmet>
      <div className="static p-5 md:p-12">
        <div className="flex flex-col w-full md:max-w-[1220px] 2xl:w-[75%] ">
          <h1>Privacy Policy</h1>
          <div className="flex gap-x-8 ">
            <div className="static-container w-[100%]  md:w-[80%]">
              <h2>1. Privacy Policy</h2>
              <p>
                The privacy policy ("Privacy Policy") governs the use of the
                BizDateUp platform's website [
                <a href="https://www.bizdateup.com/" className="underline">
                  https://www.bizdateup.com/
                </a>
                ]("Website", "we", "us") and the services ("Services") made
                available through the Website. It has been officially formulated
                in accordance with the Information Technology Act of 2000
                ("Act"), and the Rules enacted are designed to guarantee that
                the information submitted by its users ("you") is protected to
                the greatest extent possible. By using the Website, you agree to
                the terms and circumstances set out in this Privacy Policy
                regarding the collection, retention, and use of information. You
                may quit and stop using the Website if you do not agree to the
                Privacy Policy. The terms and conditions of the Bizdateup
                platform are incorporated in the Privacy Policy. If the terms of
                such agreements and the Privacy Policy conflict, the provisions
                of such agreements shall prevail and govern so long as they
                pertain to topics expressly specified herein, and this Privacy
                Policy will apply to all other subjects. Our members share their
                professional identities, communicate with their network,
                exchange information and professional insights, post and watch
                relevant content, learn, and find business and career
                possibilities. Non-members ("Visitors") can view the content and
                data on some of our Services.
              </p>
              <h2>2. Services</h2>
              <p>
                This Privacy Statement governs your use of our Services,
                including our cookie policy. It applies to the sites, apps,
                communications, and services provided by Business BizDateUp
                Technologies Pvt Ltd ("Services"). Our privacy policy, including
                our cookie policy and other documents referred to in the privacy
                policy, governs the collection, use, and sharing of visitor
                information. This Privacy Policy can be modified by Bizdateup,
                On occasion of any changes, the notice for the same will be
                provided to you for review before putting them into effect.If
                you object to any changes, you may close your account.
              </p>
              <h2>3. Information we Data Collect and Receive</h2>
              <p>
                Registered Users—Registered Users are persons who sign up and
                create a user account with us via the Bizdateup Platform. We may
                collect the following Personal Information from Registered
                Users:
              </p>
              <li>Your name;</li>
              <li>Your email address;</li>
              <li>Your username;</li>
              <li>Your password;</li>
              <li>
                Your Facebook information if you are signing up via Facebook
                connect (this will authenticate your identity and link your
                Facebook Profile information, such as your name, profile image,
                and email address, to your account);
              </li>
              <li>Your address or geographic location; and</li>
              <li>Your profile image;</li>
              <li>
                Optional Demographic Information including, but not limited to;
                sexual preference, gender, ethnicity, age, veteran status,
                disability status, immigrant or refugee status.
              </li>

              <p>
                Investors—Investors are Registered Users (whether natural
                persons or entities) who have applied to participate in
                investment opportunities using the Bizdateup Platform. We may
                collect the following additional Personal Information from
                Investors:
              </p>
              <li>Legal physical address;</li>
              <li>Telephone number;</li>
              <li>Date of birth;</li>
              <li>
                Business name, address, email, phone number, and names of owners
                and management, if applicable;
              </li>
              <li>
                Balance sheets, profit and loss statements, bank account
                information, average bank balance, bank statement and other
                financial data, including tax returns, as applicable, in order
                to help verify your accreditation status or "Qualified
                Purchaser" status;
              </li>
              <li>
                Tax ID number or social security number, as applicable,
                citizenship status, and state or country of formation for
                investment entities, if applicable;
              </li>
              <li>
                Responses to further questions answered during the profile
                creation; and
              </li>
              <li>
                Further information in order to help validate your identity such
                as your driver’s license information or government issued
                identification number.
              </li>

              <p>
                Issuers—Issuers are Registered Users who have applied to raise
                capital via a registration exemption using the Bizdateup
                Platform. We may collect additional information (e.g., financial
                and reputational due diligence) as well as that which we would
                collect from an Investor.
              </p>

              <p>
                Bizdateup Platform Visitors—Platform visitors are individuals
                who access or interact with the Bizdateup Platform. We may
                collect or receive the following information about Bizdateup
                Platform Visitors:
              </p>
              <li>
                Log Data: information collected by our servers when you access
                our websites, including IP addresses, referral URLs, browser
                type and settings, date and time of usage, language preferences,
                and cookie data.
              </li>
              <li>
                Device Data: information about your device, including the type
                of device, the operating system, application IDs, unique device
                identifiers, and crash data.
              </li>
              <li>
                Analytics Data: approximate geolocation based on your IP address
                and other information from your browser and device.
              </li>
              <li>
                Contact information: Your name, phone number, email and mailing
                address, if you engage with us through our contact methods.
              </li>
              <li>
                Other Webform Data: information collected when you engage with
                us through our webforms, surveys and questionnaires, blogs,
                discussion forums, or live chat.
              </li>

              <h2>4. Our Uses of Personal Information</h2>
              <p>We use Registered User Information to:</p>
              <li>Operate and provide you with the Services;</li>
              <li>
                Communicate with you and send you marketing communications;
              </li>
              <li>
                Keep your account secure and protect our Platform, Service, and
                other Users;
              </li>
              <li>
                Analyze your preferences, interests and behavior in order to
                provide you with tailored content and the most relevant content
                and communications; and
              </li>
              <li>
                Enforce our Terms of Use, enforce our legal rights, comply with
                applicable law, and respond to government and legal requests.
              </li>
              <li>To determine demographics of platform usage</li>

              <p>We use Investor and Issuer Information to:</p>
              <li>
                Verify your identity and status with respect to securities and
                other laws;
              </li>
              <li>Facilitate your payment and any escrow of funds;</li>
              <li>
                Record your investment with our third-party SEC-registered
                transfer agent;
              </li>
              <li>Provide you with necessary tax reporting information; and</li>
              <li>
                For other purposes for which we provide specific notice at the
                time of collection of the information.
              </li>

              <p>We use Bizdateup Platform Visitor Information to:</p>
              <li>Communicate with you and respond to your inquiries;</li>
              <li>Operate and secure our website and Services; and</li>
              <li>Analyze and improve our website and Services.</li>

              <p>
                Lawful Basis for Processing- Depending on your circumstances and
                your relationship with us, we may process your Personal
                Information on the following lawful bases:
              </p>
              <li>
                Consent: where you have given consent to the processing of his
                or her Personal Information for one or more specific purposes;
              </li>
              <li>
                Contract: where the processing is necessary for the performance
                of a contract with you (e.g., to deliver the service you have
                requested);
              </li>
              <li>
                Legal Obligation: where processing is necessary for compliance
                with a legal obligation to which the controller is subject
                (e.g., for compliance with securities laws); and
              </li>
              <li>
                Legitimate Interests: where the processing is necessary for the
                purposes of the legitimate interests pursued by the controller
                or by a third party, not overridden by the interests or
                fundamental rights and freedoms of the data subject, (e.g., for
                product development and analytics purposes).
              </li>

              <h2>5. How We Share Information</h2>
              <p>
                Bizdateup shares and discloses Personal Information to other
                parties as needed to provide our Services and operate our
                business. The categories of other parties with Whom we may share
                information include:
              </p>
              <p>
                The Bizdateup Family of Companies - Affiliates and Subsidiaries.
                Bizdateup may share Personal Information about you with
                affiliates and subsidiaries.
              </p>
              <p>
                Service Providers: We may share the information that you have
                provided us with certain third party services, including payment
                processors, web services providers, developers, security and
                storage service providers, analytics service providers, and
                providers used to analyze our websites’ and applications’
                functionalities.
              </p>
              <p>
                Business Services: We may share any category of Personal
                Information with our business services providers in the
                operation of our business and facilitation of the Services,
                including agents, auditors, financial institutions, and
                professional advisors.
              </p>
              <p>
                Corporate Activities: We may share any category of Personal
                Information with other companies or entities as part of any
                reorganization, merger, sale, joint venture, assignment,
                transfer, or other disposition of all or any portion of our
                business, assets, or stock. In such case your Personal
                Information may be transferred to the potential or actual
                acquirer, successor or assignee.
              </p>
              <p>
                Government and Legal: We may share any category of Personal
                Information with other parties, including public authorities, as
                may be required by applicable law, regulation, or legal process.
              </p>
              <p>
                Change in Control or Sale: We may share your information if our
                company is sold, but it must be used in compliance with this
                Privacy Policy. We may also share your personal information in
                the course of a sale, merger, or change in ownership, or in
                anticipation of any of these occurrences. Unless you agree
                otherwise, any organisation that purchases us or a portion of
                our business will have the right to continue to use your data in
                the manner described in this Privacy Policy.
              </p>

              <h2>6. Data Retention and Disposal</h2>
              <p>
                Bizdateup retains Personal Information in accordance with its
                data retention polices consistent with applicable law. We will
                retain your personal data only for as long as necessary for the
                purposes it was retained, such as to enable you to use the
                Website and your products or to provide services to you. In some
                instances, we may retain data for longer periods in order to
                comply with applicable laws (including those regarding document
                retention), resolve disputes with any parties, and otherwise as
                necessary to allow us to conduct our business.
              </p>

              <h2>7. Cookies and Other Identifiers</h2>
              <p>
                We use cookies throughout our websites and web applications to
                track user interactions, personalize your user experience, and
                promote our Services. Cookies are small files stored on a
                computer that are designed to hold small amounts of data
                specific to a user and the websites or applications to help
                tailor that user’s experience.
              </p>

              <h2>8. How We Protect Personal Data</h2>
              <p>
                We maintain appropriate administrative, technical, and physical
                safeguards designed to protect the personal data you provide
                against accidental, unlawful, or unauthorized destruction, loss,
                alteration, access, disclosure, or use. That said, it is not
                possible to guarantee the security of information transmitted
                online, and you assume some risk with regard to the security of
                information you provide through any website, including this
                Site. If you have a data security inquiry, you may contact us by
                emailing security@investopedia.com. To request an invite to our
                bug bounty program to submit reports on vulnerabilities found on
                investopedia.com, you may contact us by emailing
                bugbounty@investopedia.com
              </p>

              <h2>9. Grievance Redressal Mechanism</h2>
              <p>
                The Website shall appoint a grievance redressal officer
                ("Grievance Officer") to address any of your grievances or
                inaccuracies in the information published on the Website.As
                specified by the Act, the Grievance Officer must resolve all
                grievances within one month of receipt. If you have any queries
                or complaints about our Policy, please contact Bizdateup first.
                You can also write to us at Bizdateup G2, EMPIRE BUSINESS
                CENTRE, EMPIRE COMPLEX, 414 Senapati Bapat Marg, Lower Parel,
                near Shreeniwas Mill Delisle Road, Mumbai -400013.
              </p>
            </div>
            <div className="hidden md:flex md:flex-col md:w-[301px] md:gap-y-8">
              <Link to="/invest">
                <div className="cta">
                  <div className="ctaimg bg-[#ACD8F2]">
                    <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Explore Innovative Startups Disrupting Industries
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                      Discover ground-breaking startups revolutionizing their
                      respective industries
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
                      Invest in the Future with Our Startups
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                      Diversify your investment portfolio and support the next
                      big thing
                    </p>
                    <div className="flex justify-end mt-3 mb-2">
                      <img src={Cta11} />
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
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default privpolicy;
