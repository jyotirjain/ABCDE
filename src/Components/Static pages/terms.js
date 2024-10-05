import React from "react";
import Cta10 from "../../assets/images/cta/cta10.png";
import Cta11 from "../../assets/images/cta/cta11.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Navbar from "../Navbar1/Navbar1";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function terms() {
  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>Terms of Use | User Agreement | Bizdateup</title>
        <meta
          name="description"
          content="Familiarize yourself with our Terms of Use and User Agreement. By using Bizdateup, you agree to comply with our terms and conditions."
        />
        <meta
          name="keyword"
          content=" terms of use, user agreement, Bizdateup, terms and conditions"
        />
      </Helmet>
      <div className="static p-5 md:p-12">
        <div className="flex flex-col w-full md:max-w-[1220px] 2xl:w-[75%]">
          <h1>Terms of Use</h1>
          <div className="flex gap-x-8">
            <div className="static-container w-full md:w-[80%]">
              <h2>Terms of Use</h2>
              <p>
                The Terms of Use include the Privacy Policy, and Risks (“Terms
                of Use”) governing the use of the website of Bizdateup platform
                [
                <a href="https://www.bizdateup.com/" className="underline">
                  https://www.bizdateup.com/
                </a>
                ] (“Website”) and the services (“Services”) provided on the
                Bizdateup platform. You ("Visitor/User/Member") express your
                acceptance of these Terms of Use and your agreement to abide by
                them by using the Website, including but not limited to
                accessing, visiting, or browsing the Website. The Terms of Use
                are a legally binding agreement between you, the Website's user,
                and us, the Website's owner. Please do not use this Website if
                you do not agree to our Terms of Service. The Terms of Use are
                to be read in conjunction with the terms and conditions of any
                agreement to which reference is made in that agreement. If the
                terms of such agreements conflict with the Provisions of Use,
                the terms of such agreements will prevail and govern so long as
                they pertain to topics expressly specified herein, and these
                Terms of Use will apply to all other matters.
              </p>

              <h2>Account Registration</h2>
              <p>
                You must register or establish an account in order to access
                some features of the Site or to submit anything on it
                ("Account"). You must finish the registration procedure by
                giving us accurate information. A password will also be chosen.
                Your password and account are your sole responsibility. You
                promise to promptly contact SeedInvest if your Account is used
                without your permission or if there is any other security
                breach. You will not reveal your password, allow anyone else
                access to your Account, or do anything else that might
                compromise your Account's security. You will not transfer your
                Account to anybody without our explicit consent. You acknowledge
                and agree that your Account will be self-directed, and that you
                will be entirely responsible for any purchases, orders,
                investment choices, and instructions made in it. Despite the
                fact that the Site may include data, information, or material
                from third parties pertaining to investment strategies and/or
                opportunities to acquire and/or sell securities, you should not
                consider any of this content to be tax, legal, financial, or
                investment advice.You represent that any decision to invest is
                solely based on your consideration of the risks involving a
                particular security or those of a third-party (i.e. your
                personal financial advisor) is made at your own risk unless we
                provide you with specific advice that is clearly identified as
                an individualised recommendation specifically addressed to you
                (which is not expected to occur). You understand and agree that
                you are entirely responsible for assessing the suitability of an
                investment or strategy, and that you accept the risks associated
                with such decisions, which may include the risk of losing your
                whole capital. You agree and recognise that doing legal,
                accounting, financial, and other due diligence on the firms
                featured on the Site is exclusively your responsibility. Any
                legal, tax, financial, or investment advice should be sought
                from a licensed legal practitioner and an investment advisor.
                The Site will only give you the capacity to make your own
                financial decisions without giving you any advice.
              </p>

              <h2>Information about us and the Bizdateup platform</h2>
              <p>
                Bizdateup Technologies Pvt Ltd ("we/us/our") owns and operates
                the Website. We were founded under the Companies Act, 2013 with
                the CIN U74999MH2021PTC353592 and our registered office is at
                G2, EMPIRE BUSINESS CENTRE, EMPIRE COMPLEX, 414, Senapati Bapat
                Marg, Lower Parel, near Shreeniwas Mill, Delisle Road, Mumbai
                -400013. The Bizdateup platform allows early-stage initiatives
                to showcase their company ideas and conduct a fundraising
                campaign on the Website, making it easier for potential
                investors to determine whether or not to participate in such
                companies. The Website also offers early-stage businesses and
                potential investors with any other information or services that
                are required or ancillary to the primary activity mentioned
                below.
              </p>

              <h2>Access to the Website</h2>
              <p>
                By using the Website, you agree to the Terms of Service and the
                Privacy Policy. Access to some areas of the Website is
                contingent on our approval of you as a "member," "issuing
                entity," or "issuer" on the Bizdateup Platform. We retain the
                right to withdraw or change the Services supplied to you through
                the Website at any time and without notice. We shall not be
                liable if our Website is unavailable to you for any reason at
                any time. Furthermore, we reserve the right to limit your access
                to all or part of the Website. All rights not expressly granted
                to you are reserved under these Terms of Service.
              </p>

              <h2>Registration and Membership</h2>
              <p>
                If you want to explore the possibility of investing in issuer
                firms seeking capital through the Bizdateup Platform, you must
                first register as a member' on the Bizdateup platform. The
                conditions of registration, including eligibility requirements
                and rights as a member, are published on our website, and you
                may review them once you've joined the Bizdateup platform. If
                the Terms of Use and the unique membership terms for the
                Bizdateup Platform conflict, the specific membership conditions
                will take precedence. If you want to launch a fundraising
                campaign using the Bizdateup Platform, you must first register
                as a 'issuing firm' or an 'issuer' on the Bizdateup platform in
                order to use the full capabilities of the Website. Our Website
                contains the terms of registration, including qualifying
                requirements and rights after becoming a "issuing firm" or
                "issuer." If the Terms of Use and the specific conditions
                regulating your status as a 'issuer company' or 'issuer' on the
                Bizdateup Platform conflict, the specific conditions defining
                your status as a 'issuer company' or 'issuer' on the Bizdateup
                Platform will take precedence.
              </p>

              <h2>Password to the Website</h2>
              <p>
                When you complete your registration on the Website and we are
                reasonably satisfied with our knowledge of your involvement with
                us, we will send you an OTP to the email address you specify.
                That OTP confirmation will allow you to take part in the
                fundraising campaign in which you have expressed interest. You
                promise not to disclose your username and password to anybody
                other than us. You agree to safeguard your password. You are
                solely liable for any loss or harm caused by your failure to
                safeguard your password. You undertake to promptly alert us of
                any unauthorised use of your password or any other security
                breach. You agree that we will not be liable for any loss or
                harm resulting from our failure to maintain your password safe.
              </p>

              <h2>Representations and Warranties of Users</h2>
              <p>
                By accepting these Terms of Use on your own behalf or on behalf
                of the entity for which you are acting, you signify that you
                agree to be bound by the Terms of Use and any other agreements
                you may enter into while visiting the Website. You undertake to
                cease using the Website and to notify us of any legal violations
                that may prevent you from doing so. You represent that all of
                the information you submit is true, correct, and accurate, and
                that you will notify us of any changes or amendments to such
                information. You may not display, upload, modify, publish,
                transmit, update, or share any information that: I belongs to
                another person and to which you have no right; (ii) is grossly
                harmful, harassing, libellous, invading another's privacy,
                hateful or racially, ethnically objectionable, disparaging,
                relating or encouraging money laundering or gambling, or
                otherwise unlawful in any way; (vi) deceives or misleads the
                addressee about the origin of such messages or conveys any
                material that is extremely offensive or menacing in character;
                (vii) infringes any patent, trademark, copyright, or other
                intellectual rights; (vii) breaches any legislation now in
                effect; (viii) undermines India's unity, integrity, defence,
                security, or sovereignty, friendly relations with friendly
                states, or public order, or creates incitement to the commission
                of any cognizable offence or hampers the investigation of such
                offence, or insults any other nation. You accept and understand
                that you will not sell your Website access. You agree not to
                send any unneeded information or undesirable electronic
                communication, such as spam, to other Bizdateup platform users.
                You will not abuse your access to the Website by introducing
                viruses, trojans, worms, or other material that is likely to
                cause harm to the Website, and you will indemnify and hold us
                harmless in the event that any action is brought against us due
                to any loss, injury, expense, or liability caused to any other
                user of the Website or any third-party. You must also not
                acquire unauthorised access to the Website or any other source
                of access to our Website.
              </p>

              <h2>Our rights in relation to the Website</h2>
              <p>
                We have the right to terminate or amend our Services at any time
                and will not be held accountable. We reserve the right to
                deactivate your account or terminate your access to the Website
                at any time for any reason. As and when deemed appropriate, we
                may also restrict or limit your access to the Website. For the
                aforementioned reasons, we will make all reasonable attempts to
                notify and inform you of such an action, as well as the reasons
                for it. In line with the rules of the Privacy Policy, we will
                share any confidential information supplied by you or any other
                facts about yourself as may be required to satisfy any
                governmental department or authority under applicable law or to
                any third-party. You agree and acknowledge that we will not be
                responsible for any claim based on any termination, suspension,
                or any of the aforementioned measures taken by us in regard to
                your access to the Website, as set out in Clauses 6.1, 6.2, and
                6.3. We may encourage you to join in chat rooms or other
                services that will provide you with information on the Bizdateup
                platform, firms, and their fundraising efforts. The remarks or
                other information you supply in such chat rooms will be assumed
                to be freely and permanently licenced to us.
              </p>

              <h2>Intellectual Property Rights</h2>
              <p>
                We provide you a limited permission to access and use our
                information for personal purposes when you visit our Website.
                You may download information from the Website to any instrument
                for personal use only, provided that you do not remove or alter
                any copyright symbol, trademark, or other proprietary
                information.You agree not to use our information for any other
                reason than those listed above. You accept that any use of the
                proprietary information published on the Website would breach
                our intellectual property rights, for which you will compensate
                us. Except for third-party items that are expressly marked as
                such, we own or have licensing rights to all of the contents
                shown on the Website, including images, logos, sound recordings,
                and software. Any infringement of our intellectual property
                rights would be prosecuted under Indian law. Without our prior
                written permission, the licence to access and use the Website
                does not include the right to replicate or reproduce the
                information on our Website on any other platform or medium.
                Unless otherwise noted, any term, logo, or device bearing the
                markings TM or ® is a registered trademark that we own or have a
                permission to use. The ability to access and use the Website
                does not grant you permission to utilise such trademarks in any
                form.
              </p>

              <h2>Linked Websites</h2>
              <p>
                Through this website you may be able to view third party
                websites. For your convenience the links are provided and may
                not be updated all the time.Third-party websites are not
                endorsed, reviewed, controlled, or examined by us, and we are
                not responsible for any content posted on such third-party
                websites. The Website's links are not intended to be an
                endorsement or recommendation of any linked website or its
                content. Access to any third-party website is governed by the
                terms of that website and has no bearing on the Website's Terms
                of Use. You acknowledge and agree that it is also your
                responsibility to follow the terms and conditions of that
                website.
              </p>

              <h2>Disclaimers and Limitation of Liability</h2>
              <p>
                You are using the Website at your own risk. The Website is
                provided to you "as is" and "as available," with no warranties,
                guarantees, or conditions as to the absence of faults, flaws,
                interruptions, errors, or viruses, or as to the accuracy,
                reliability, or availability of material. We will not be liable
                for any interference or damage to your computer resource as a
                result of your access to our Website. You also agree and
                understand that the information on the Website is provided for
                informational purposes only and does not constitute advice.We
                disclaim liability for any loss, damage, expenses, liabilities,
                claim, or injury caused by a failure of performance, omission,
                defect, deletion, interruption, error, delay, virus,
                communication, unauthorised access, theft, destruction,
                alteration, or use of records, whether due to breach of
                contract, negligence, tort, or other cause of action.
                Furthermore, we will not be liable for any loss of profits,
                goodwill, or revenue, as well as any consequential, exemplary,
                or punitive damages, or any financial or indirect loss. You also
                acknowledge and agree that we are not liable for any defamatory,
                offensive, or illegal behaviour of third parties on our Website,
                including users and operators of third-party websites.
                Furthermore, we will not be held liable for any inaccuracy,
                delay, omission, or defect in the transmission or delivery of
                any third-party data, or any loss or damage resulting from: (i)
                any inaccuracy, error, delay, or omission in information
                transmission; (ii) non-performance by any third-party; or (iii)
                disruption caused by a third party's negligent act or omission,
                or any other cause not beyond our reasonable control. Regardless
                of anything else in the Terms of Service, your total
                responsibility for actual damages caused by you is limited to
                Rs. 1,000,000. (Rupees One Lakh Only). The foregoing applies to
                all obligations in aggregate, including but not limited to
                liabilities resulting from the use of the Website, as well as
                any other subject matter emerging from or in relation to the use
                of the Website.
              </p>

              <h2>Indemnity</h2>
              <p>
                You agree to indemnify and hold us harmless from and against any
                loss, damage, expenses, liabilities, or claims arising out of or
                in connection with your failure to comply with the Terms of Use
                or any misstatement or breach of any representations or
                warranties made by you under the Terms of Use or any conditions
                on the Website accepted by you.
              </p>

              <h2>Governing Law and Dispute Resolution</h2>
              <p>
                Governing Law: The Terms of Use shall be governed and construed
                in all respects in accordance with the laws of India, and the
                courts of Mumbai shall have exclusive jurisdiction, subject to
                Clause 11.3 below. Informal Dispute Resolution: The Parties
                agree to try to resolve all disputes arising hereunder as soon
                as possible and in good faith, and to that end, each Party shall
                designate in writing to the other Party a representative who
                shall be authorised to negotiate and resolve any dispute arising
                under these Terms of Use. If the authorised representatives of
                each of the Parties are unable to settle a disagreement under
                the Terms of Use within 30 (thirty) days of notice of such
                dispute being delivered to the other, each Party may ask that
                such issue be determined and resolved by arbitration.
                Arbitration: Subject to Clause 11.2, any disagreement or claim
                under the Terms of Use must be submitted to and ultimately and
                solely resolved by arbitration in accordance with the
                Arbitration and Conciliation Act, 1996 or any statutory
                amendment or re-enactment thereof in force at the time. The
                arbitration shall be held in Mumbai, and all proceedings shall
                be conducted in English. There will be three (three) arbitrators
                ("Arbitrators"), all of whom are fluent in English. Within
                thirty (30) days of the disagreement being referred to
                arbitration, the Party initiating the dispute and making the
                referral shall nominate one Arbitrator, and the other Party
                shall appoint the other Arbitrator. The two (two) selected
                Arbitrators will appoint the third Arbitrator. The arbitral
                award is final and binding on both parties. The fees and
                expenditures for the conduct of the arbitration procedures must
                be shared equally by the Parties; nevertheless, each Party shall
                bear their own legal expenses.
              </p>

              <h2>Amendments to the Terms of Use</h2>
              <p>
                We retain the right to change the Terms of Service at any time.
                Any changes made will be effective as soon as they are posted on
                the Website. Any prior versions of the Terms of Use shall be
                superseded by the revised version. We will make reasonable
                attempts to advise members of any changes; nonetheless, it is
                your duty to stay current on the Terms of Service at all times.
                Your continued use of the Website constitutes your agreement of
                the Website's Terms of Use.
              </p>

              <h2>What is Power of Attorney (POA)?</h2>
              <p>
                According to the Power of Attorney Act of 1882, a power of
                attorney is any instrument that authorises a specific person to
                act for and in the name of the person executing it. Power of
                Attorney, also known as Power of Authority, is the authority to
                act for another person in certain or all legal or financial
                concerns. A principle or a donor is someone who delegates
                responsibility to a trustworthy individual. There are several
                instances in one's life where an individual with assets, bank
                accounts, and so on may be unable to discharge his tasks owing
                to factors such as being overseas, physically unwell, or
                elderly. In such cases, if the transaction needs the presence of
                an individual who is unable to be there directly, the only
                option is to delegate the individual's authority to another
                person. This is the time to draft a Power of Attorney deed.
              </p>

              <h2>Disclaimer</h2>
              <p>
                Any securities transaction that firms may offer or close with
                another platform member must be offered, issued, allocated, or
                transferred in strict conformity with all relevant regulations,
                including but not limited to private placement restrictions
                under applicable securities laws. Our platform includes an
                internal system that limits the amount of Investors who may read
                the detailed profile to 200 by default, making it legal.
                However, it is the company's obligation to follow the terms of
                applicable legislation, such as the Companies Act of 2013, and
                the private placement guidelines that go with it. This website
                is not intended to be (i) an offer to acquire or sell any
                security, other asset, or service, (ii) investment advice or an
                offer to provide such advice, or (iii) a foundation for making
                any investment decision. Unless specifically declared in writing
                by Bizdateup's company, neither this website nor any of the
                contents attempt to provide a full or impartial overview of
                Bizdateup or its investing operations.
              </p>

              <h2>Miscellaneous</h2>
              <p>
                There is no collaboration or agency. The Terms of Service are
                not intended to constitute a partnership or joint venture
                between you and us. Nothing in the Terms of Service shall be
                interpreted to make you and us agents of one another. Specific
                Capabilities Each of us agrees that monetary damages may not be
                an adequate remedy and that either of us is entitled to an
                injunction, restraining order, right of recovery, suit for
                specific performance, or such other equitable relief as a court
                of competent jurisdiction may deem necessary or appropriate to
                prevent the other from violating the Terms of Use or to enforce
                the performance of the covenants, representations, and
                obligations contained in the Terms of Use. These injunctive
                remedies are cumulative and in addition to any other rights and
                remedies the Parties may have at law or in justice, including a
                claim to damages. Severability In the event that any duty or
                obligations are or become unenforceable in whole or in part,
                each obligation under the Terms of Use shall be considered as a
                distinct obligation and shall be separately enforceable as such.
                If any term or provisions of the Terms of Use are found to be
                unenforceable, both of us agree to alter such clauses as may be
                required to make the provision lawful and effective.Regardless
                of the foregoing, any provision that cannot be amended to make
                it valid and effective shall be deemed deleted from the Terms of
                Use, and any such deletion shall not affect the enforceability
                of the remainder of the Terms of Use not so deleted, provided
                that the fundamental terms of the Terms of Use are not altered.
                Non-Exclusive Treatments The rights and remedies set out herein
                are cumulative, and none are exclusive of any other rights or
                remedies that any of us may have at law or in equity.The rights
                and remedies of any of us based on, arising from, or otherwise
                in respect of any inaccuracy or breach of any representation,
                warranty, covenant, or agreement or failure to fulfil any
                condition shall not be limited in any way by the fact that the
                act, omission, occurrence, or another state of facts upon which
                any such inaccuracy or breach is based may also be the subject
                matter of any other representation, warranty, covenant, or
                agreement as to which there is no inaccuracy or breach.
                Invalidity in Part If any provision of the Terms of Use or its
                application to any person or circumstance is held invalid or
                unenforceable to any extent for any reason, including by reason
                of any law, regulation, or government policy, the remainder of
                the Terms of Use and the application of such provision to
                persons or circumstances other than those as to which it is held
                invalid or unenforceable shall not be affected, and each
                provision of the Terms of Use shall be valid and enforceable.Any
                provision of the Terms of Use that is invalid or unenforceable
                must be replaced with a provision that is valid and enforceable
                and most closely represents the original purpose of the invalid
                and unenforceable provision. Third-Party Legal Rights Nothing in
                the Terms of Use is intended or inferred to confer or provide
                any person, other than us, any rights or remedies under or by
                reason of the Terms and Conditions or any transaction envisaged
                by the Terms of Use. Time is of the essence Time is of the
                essence in all situations arising from or related to the Terms
                of Use.Execution When you visit the Website, the Terms of Use
                are regarded properly executed and become effective and binding
                on you and us.
              </p>
            </div>
            <div className="hidden md:flex md:flex-col md:w-[301px] md:gap-y-8">
              <Link to="/invest">
                <div className="cta">
                  <div className="ctaimg bg-[#B5C3DC]">
                    <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Invest in Cutting-Edge Technology
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                      Discover the latest advancements in technology and
                      innovation
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
                      Invest in Sustainable Solutions
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                      Back startups that are creating a more sustainable future
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

export default terms;
