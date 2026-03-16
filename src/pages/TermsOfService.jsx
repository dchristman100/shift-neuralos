import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";

function Section({ number, title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-white mb-4 flex items-start gap-3">
        <span className="font-mono text-sm mt-1 flex-shrink-0" style={{ color: "#F54A48" }}>{number}.</span>
        <span>{title}</span>
      </h2>
      <div className="pl-6">{children}</div>
    </div>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="mb-5">
      <h3 className="font-display text-base font-semibold mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>{title}</h3>
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 font-body text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
          <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#F54A48" }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function P({ children, caps = false }) {
  return (
    <p className={`font-body text-sm mb-4 ${caps ? "font-semibold uppercase" : ""}`}
      style={{ color: caps ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
      {children}
    </p>
  );
}

function AlertBox({ children, color = "#F54A48", icon = "⚠️" }) {
  return (
    <div className="rounded-xl p-5 mb-5 border" style={{ background: `${color}0D`, borderColor: `${color}33` }}>
      <p className="font-body text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>{children}</p>
    </div>
  );
}

function InfoBox({ children }) {
  return (
    <div className="rounded-xl p-5 mb-5 border" style={{ background: "rgba(72,187,120,0.06)", borderColor: "rgba(72,187,120,0.25)" }}>
      <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}>{children}</p>
    </div>
  );
}

export default function TermsOfService() {
  return (
    <main className="pt-24">
      <SectionWrapper>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 font-mono text-xs font-semibold uppercase tracking-wider"
              style={{ background: "rgba(245,74,72,0.12)", color: "#F54A48", border: "1px solid rgba(245,74,72,0.3)" }}>
              Legal
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">Terms of Service</h1>
            <p className="font-display text-lg font-semibold text-white mb-3">ShiFt NeuralOS™ | ShiFtNow.io</p>
            <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>Effective Date: March 15, 2026</span>
              <span>·</span>
              <span>Last Updated: March 15, 2026</span>
              <span>·</span>
              <span>Governing Jurisdiction: Cherokee County, Georgia</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl p-8 md:p-12" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>

            <AlertBox>
              PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING THE SHIFTNOW.IO PLATFORM, OR BY EXECUTING A SHIFTCLIENT AGREEMENT OR QUICK START AGREEMENT, YOU AGREE TO BE BOUND BY THESE TERMS IN THEIR ENTIRETY. IF YOU DO NOT AGREE, DO NOT ACCESS OR USE THE PLATFORM AND DO NOT EXECUTE ANY AGREEMENT.
            </AlertBox>

            {/* Section 0 */}
            <Section number="0" title="Incorporation Into Client Agreements">
              <P>These Terms of Service ("ToS") are incorporated by reference into and form a legally binding part of every ShiFt Client Agreement and ShiFt Quick Start Agreement executed by any Client. By signing either agreement, Client expressly acknowledges and agrees that:</P>
              <BulletList items={[
                "These Terms of Service are read, reviewed, and agreed to in their entirety as part of the signing process",
                "In the event of any conflict between the terms of the Client Agreement or Quick Start Agreement and these Terms of Service, these Terms of Service control, except where the Client Agreement or Quick Start Agreement contains more specific or more restrictive provisions, in which case the more protective provision for ShiFt governs",
                "These Terms of Service are available at ShiFtNow.io/TermsOfService and may be updated by ShiFt with 30 days' written notice to Client's registered email address",
                "Client's continued use of the Platform after the effective date of any update constitutes acceptance of the updated Terms",
              ]} />
              <InfoBox>
                <strong>Where To Find This Document</strong> — ShiFtNow.io/TermsOfService — A current copy is always maintained at this URL. The version in effect on the date of your Agreement execution governs your engagement.
              </InfoBox>
            </Section>

            {/* Section 1 */}
            <Section number="1" title="Definitions">
              <P>As used in these Terms of Service and in all incorporated Client Agreements:</P>
              <BulletList items={[
                '"Agreement" means these Terms of Service together with the executed ShiFt Client Agreement or Quick Start Agreement, and any Order Form or RevShare Addendum.',
                '"Client" or "you" means the roofing contractor business and its authorized users that access or use the Platform.',
                '"End Users" means homeowners, property owners, and other third parties whose information is processed through the Platform on behalf of Client.',
                '"Platform" or "NeuralOS" means the ShiFt NeuralOS™ AI Revenue Operating System, including all software, AI models, APIs, dashboards, and services.',
                '"Revenue Activation Fee" or "RAF" means the one-time fee of $5,000 payable by Client at signing, covering the full 90-Day Initial Term.',
                '"RevShare" or "Revenue Share" means the percentage of Platform-Attributed Revenue owed to ShiFt, commencing after the 90-Day Milestone and as agreed in a RevShare Addendum.',
                '"Platform-Attributed Revenue" means revenue from jobs booked, confirmed, or converted through the Platform, as determined by the Attribution Methodology.',
                '"90-Day Initial Term" means the first 90 calendar days of Client\'s engagement, commencing on the date the RAF payment clears.',
                '"90-Day Milestone" means the review meeting held no later than Day 90 at which both Parties review Platform performance and agree on post-Initial-Term RevShare rates and continuation terms.',
                '"RevShare Addendum" means the written agreement executed by both Parties at or after the 90-Day Milestone setting the applicable RevShare rate and post-Initial-Term terms.',
                '"Revenue Floor" means the minimum Platform-Attributed Revenue target established in the RevShare Addendum for each 90-day post-Initial-Term period.',
                '"ShiFt," "we," "us," or "our" means ShiFt NeuralOS™ (eWorkForce Technologies Inc.), operated by David Christman, Cherokee County, Georgia.',
              ]} />
            </Section>

            {/* Section 2 */}
            <Section number="2" title="Acceptance and Eligibility">
              <SubSection title="2.1 Acceptance">
                <P>By clicking "I Agree," signing a Client Agreement or Quick Start Agreement, or accessing the Platform, you agree to be bound by these Terms and all incorporated documents. If acting on behalf of a business entity, you represent you have authority to bind that entity.</P>
              </SubSection>
              <SubSection title="2.2 Eligibility">
                <P>You may use the Platform only if you are a legitimate U.S. roofing contractor, at least 18 years of age, with legal authority to enter this Agreement, and not prohibited by applicable law from doing so.</P>
              </SubSection>
              <SubSection title="2.3 Modifications">
                <P>ShiFt may update these Terms with 30 days' written notice. Continued use after the effective date constitutes acceptance. If you reject modified Terms, you may provide written termination notice per Section 15 before the effective date.</P>
              </SubSection>
            </Section>

            {/* Section 3 */}
            <Section number="3" title="Platform License and Restrictions">
              <SubSection title="3.1 License Grant">
                <P>Subject to compliance with this Agreement and payment of all applicable fees, ShiFt grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform solely for your internal roofing business operations during the term of this Agreement.</P>
              </SubSection>
              <SubSection title="3.2 Restrictions">
                <P>You may not:</P>
                <BulletList items={[
                  "Sublicense, resell, rent, lease, or transfer Platform access to any third party",
                  "Reverse engineer, decompile, or attempt to derive Platform source code",
                  "Modify, adapt, or create derivative works based on the Platform",
                  "Use the Platform to build a competing product or service",
                  "Use the Platform in violation of TCPA, CAN-SPAM, FTC regulations, or any telemarketing law",
                  "Input false, misleading, or fraudulent information into the Platform",
                  "Share account credentials with unauthorized parties or attempt to circumvent security features",
                ]} />
              </SubSection>
            </Section>

            {/* Section 4 */}
            <Section number="4" title="90-Day Initial Term — Non-Cancelable Commitment">
              <SubSection title="4.1 Revenue Activation Fee (RAF)">
                <P>A Revenue Activation Fee of $5,000 is due and payable at signing and prior to Platform activation. The RAF covers the full 90-Day Initial Term: Platform configuration, AI model calibration, integration setup, onboarding session, and Roofing Playbook Vault access. The RAF is not a deposit.</P>
              </SubSection>
              <SubSection title="4.2 Non-Cancelable Commitment">
                <AlertBox>
                  ⛔ 90-DAY NON-CANCELABLE COMMITMENT — THIS AGREEMENT CONSTITUTES A BINDING 90-DAY COMMITMENT THAT CANNOT BE CANCELLED, REVOKED, WITHDRAWN, OR TERMINATED BY CLIENT FOR ANY REASON DURING THE INITIAL TERM. ShiFt immediately allocates dedicated infrastructure, AI model training, and operational resources upon execution. These costs are incurred in reliance on Client's commitment. Accordingly, NO CANCELLATION RIGHT EXISTS DURING THE INITIAL 90-DAY TERM.
                </AlertBox>
                <P>The following actions are not available to Client during the Initial Term and will not be honored by ShiFt:</P>
                <BulletList items={[
                  "Cancellation requests of any kind — written, verbal, or electronic",
                  "Requests to pause, suspend, or freeze the Agreement or Platform access",
                  "Requests for refund, credit, or partial return of the RAF",
                  "Cancellation based on dissatisfaction, change of business circumstances, or change of mind",
                  "Cancellation based on failure to onboard, failure to use the Platform, or business closure",
                ]} />
              </SubSection>
              <SubSection title="4.3 ShiFt's Right to Terminate During Initial Term">
                <P>While Client has no cancellation right, ShiFt may terminate during the Initial Term immediately upon: (a) Client's chargeback initiation; (b) material breach of TCPA obligations; (c) fraud or criminal conduct; or (d) unauthorized Platform use. The RAF remains fully earned and non-refundable upon any such termination.</P>
              </SubSection>
              <SubSection title="4.4 The 90-Day Milestone">
                <P>No later than Day 80, ShiFt will schedule the 90-Day Milestone Review. Both Parties will review Platform performance and agree on continuation terms. Either party may elect not to continue by providing written notice by Day 85. Failure to provide such notice results in automatic continuation under ShiFt's then-current standard terms until written notice is provided.</P>
              </SubSection>
            </Section>

            {/* Section 5 */}
            <Section number="5" title="No Refunds. No Chargebacks. No Cancellations.">
              <AlertBox>
                ⛔ ALL SALES ARE FINAL — ALL FEES PAID TO SHIFT ARE FINAL, IRREVOCABLE, AND NON-REFUNDABLE. This includes the Revenue Activation Fee, all RevShare payments, and any other amounts paid under this Agreement. No refund, partial refund, credit, exchange, or adjustment will be issued under any circumstances — including dissatisfaction, failure to achieve revenue results, early termination, change of business, or any other reason. YOU WAIVE ALL RIGHTS TO SEEK RETURN OF ANY AMOUNTS PAID UNDER THIS AGREEMENT.
              </AlertBox>
              <SubSection title="5.1 Absolute Prohibition on Chargebacks">
                <AlertBox>
                  CHARGEBACK PROHIBITION — BREACH OF CONTRACT: Initiating, facilitating, or assisting in any chargeback, payment reversal, or payment dispute with your payment processor, bank, or card issuer in connection with any amount paid under this Agreement constitutes MATERIAL BREACH OF CONTRACT, regardless of outcome. Any amount paid to ShiFt represents earned compensation for services rendered and is not subject to reversal through any payment channel.
                </AlertBox>
                <P>In the event Client initiates a chargeback or payment dispute, the following occur immediately and automatically:</P>
                <BulletList items={[
                  "Immediate, permanent termination of all Platform access and services — with no reinstatement",
                  "The full disputed amount plus a chargeback processing fee of $500 per occurrence becomes immediately due as liquidated damages (the Parties agree this amount reasonably approximates ShiFt's actual harm and is not a penalty)",
                  "ShiFt's legal counsel will pursue collection of all amounts owed, including the original payment, the $500 fee, attorneys' fees, court costs, and all collection costs",
                  "Client's business information, chargeback history, and relevant documentation will be reported to applicable fraud prevention databases and payment processor risk networks",
                  "ShiFt will submit all evidence of this Agreement, Client's acknowledgements, and services rendered to the bank or card issuer to contest and reverse the chargeback",
                  "Any referral credits, ShiFt Circle incentives, or RevShare rate reductions are permanently forfeited",
                ]} />
                <AlertBox color="#FA982F">
                  ⚖️ LEGAL REMEDIES PRESERVED — CLIENT ACKNOWLEDGES THAT INITIATING A CHARGEBACK AFTER SIGNING THIS AGREEMENT AND RECEIVING SERVICES MAY CONSTITUTE FRAUD AND CRIMINAL CONDUCT UNDER APPLICABLE STATE AND FEDERAL LAW. ShiFt expressly reserves all legal remedies at law and in equity, including civil action for breach of contract, unjust enrichment, fraud, and misrepresentation. Remedies may be pursued concurrently; election of one remedy does not preclude others.
                </AlertBox>
              </SubSection>
              <SubSection title="5.2 Mandatory Pre-Dispute Process">
                <P>If Client believes ShiFt has made a billing error, Client must contact ShiFt in writing at <a href="mailto:legal@shiftnow.io" className="hover:text-white transition-colors" style={{ color: "#F54A48" }}>legal@shiftnow.io</a> within 30 days of the disputed invoice before initiating any payment dispute or chargeback. ShiFt will review and respond within 10 business days. This good-faith dispute process is the exclusive method for resolving billing disagreements. Bypassing this process and proceeding directly to a chargeback constitutes bad faith and breach of this Agreement.</P>
              </SubSection>
            </Section>

            {/* Section 6 */}
            <Section number="6" title="RevShare Fees and Billing (Post-90-Day Milestone)">
              <SubSection title="6.1 RevShare Rates">
                <P>RevShare does not apply during the Initial 90-Day Term. Rates are determined at the 90-Day Milestone and confirmed in a RevShare Addendum. Current tier structure with target ROI projections (rates TBD, ROI targets not guaranteed):</P>
                <div className="rounded-xl overflow-hidden border mb-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <table className="w-full">
                    <thead>
                      <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                        {["Tier", "RevShare Rate", "Target ROI (Not Guaranteed)"].map(h => (
                          <th key={h} className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { tier: "ACTIVATE", rate: "TBD at 90-Day Milestone", roi: "3x–4x", color: "#F54A48" },
                        { tier: "AMPLIFY", rate: "TBD at 90-Day Milestone", roi: "5x–6x", color: "#FA982F" },
                        { tier: "DOMINATE", rate: "TBD at 90-Day Milestone", roi: "7x–8x+", color: "#FFD700" },
                      ].map((row, i) => (
                        <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                          <td className="px-5 py-3 font-display font-bold text-sm" style={{ color: row.color }}>{row.tier}</td>
                          <td className="px-5 py-3 font-mono text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{row.rate}</td>
                          <td className="px-5 py-3 font-mono text-sm font-bold" style={{ color: "#48BB78" }}>{row.roi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <AlertBox color="#48BB78">
                  * ROI TARGETS ARE NOT GUARANTEES: The Target ROI figures (3x–4x for ACTIVATE, 5x–6x for AMPLIFY, 7x–8x+ for DOMINATE) are projections based on historical Platform performance data and industry benchmarks. They represent expected ranges, not guaranteed outcomes. Actual results depend on market conditions, storm season timing, Client responsiveness, geographic location, team capacity, and other variables outside ShiFt's control. ShiFt makes no warranty as to any specific revenue multiple. The Revenue Floor Guarantee billing pause in Section 7 is the sole performance commitment made by ShiFt.
                </AlertBox>
                <P>RevShare rates are TBD and will be mutually agreed at the 90-Day Milestone Review. No RevShare is charged during the Initial Term. The $5,000 RAF is the sole payment obligation during the first 90 days.</P>
              </SubSection>
              <SubSection title="6.2 Attribution Methodology">
                <P>Platform-Attributed Revenue includes: jobs booked through AI call answering, SMS follow-up, or automated booking; appointments confirmed through calendar integration; storm-surge leads captured through the storm protocol; and referrals tracked through the ShiFt Circle. It excludes jobs booked entirely through Client's existing channels with no Platform involvement, repeat jobs from pre-activation customers not re-engaged through the Platform, and cancelled jobs.</P>
              </SubSection>
              <SubSection title="6.3 Reporting and Billing Cycle">
                <P>Client must report Platform-generated job completions and associated revenue within 5 business days of completion. ShiFt issues monthly RevShare invoices due within 15 days. Disputed amounts must be raised within 30 days of receipt. Undisputed amounts are binding.</P>
              </SubSection>
              <SubSection title="6.4 Quarterly True-Up">
                <P>A quarterly true-up reconciliation verifies RevShare calculations. Either party may request an audit with 10 days' written notice.</P>
              </SubSection>
              <SubSection title="6.5 Late Payments">
                <P>Undisputed invoices not paid within 30 days of the due date accrue interest at 1.5% per month (or the maximum lawful rate). ShiFt may suspend Platform access for accounts more than 45 days past due after 10 days' written notice.</P>
              </SubSection>
              <SubSection title="6.6 Automatic Billing Authorization">
                <P>Upon execution of a RevShare Addendum, Client expressly authorizes ShiFt to automatically charge Client's payment method on file for all RevShare amounts due without further notice. Client waives any right to dispute such charges as unauthorized. Client is responsible for maintaining a valid payment method at all times. No automatic RevShare billing occurs during the Initial 90-Day Term.</P>
              </SubSection>
            </Section>

            {/* Section 7 */}
            <Section number="7" title="Revenue Floor Guarantee (Post-90-Day Milestone Only)">
              <P>Following execution of a RevShare Addendum, ShiFt guarantees that for each 90-day performance period, the Platform will generate at least the Revenue Floor amount specified in the Addendum. The Revenue Floor Guarantee does not apply during the Initial 90-Day Term.</P>
              <AlertBox>
                BILLING PAUSE — NOT A REFUND: If the Platform fails to generate the Revenue Floor in a 90-day period, ShiFt will pause RevShare billing for the subsequent 30 days while services continue. No cash is returned. The RAF is never refundable. This billing pause is the sole and exclusive remedy for performance shortfalls.
              </AlertBox>
              <SubSection title="7.1 Guarantee Conditions">
                <P>The Revenue Floor Guarantee applies only when: (a) Client completed onboarding within 14 days of RAF payment; (b) account is in good standing with no past-due balances; (c) Client has not disabled Platform features without ShiFt's consent; (d) Client has responded to Platform-generated leads within commercially reasonable time; and (e) Client has provided accurate, timely revenue reporting.</P>
              </SubSection>
              <SubSection title="7.2 Guarantee Exclusions">
                <P>The billing pause does not apply when revenue shortfall results from: Client's failure to honor appointments; Client's discontinuation of advertising active at onboarding; account suspension for non-payment or Agreement violation; force majeure events; or changes in law restricting Platform operation.</P>
              </SubSection>
            </Section>

            {/* Section 8 */}
            <Section number="8" title="TCPA and Telemarketing Compliance">
              <P>The Platform makes automated calls and sends automated SMS messages to End Users on Client's behalf. These activities are subject to the Telephone Consumer Protection Act (TCPA), 47 U.S.C. § 227.</P>
              <SubSection title="8.1 Client's Obligations">
                <P>Client represents, warrants, and covenants that it has obtained and will maintain all legally required prior express written consents; will comply with all Do-Not-Call laws; will communicate opt-out requests to ShiFt within 24 hours; will not contact individuals who have opted out; and will maintain consent records for 5 years.</P>
              </SubSection>
              <SubSection title="8.2 ShiFt's TCPA Commitments">
                <P>ShiFt will honor opt-out commands (STOP, UNSUBSCRIBE) in automated SMS messages; include legally required identification in automated communications; and provide Client with configurable time-of-day restrictions.</P>
              </SubSection>
              <SubSection title="8.3 TCPA Indemnification">
                <AlertBox>
                  ⚖️ TCPA INDEMNIFICATION — CLIENT AGREES TO INDEMNIFY, DEFEND, AND HOLD HARMLESS SHIFT, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS FROM ANY AND ALL CLAIMS, DAMAGES, FINES, PENALTIES, REGULATORY ACTIONS, ATTORNEYS' FEES, AND COSTS ARISING FROM: (A) CLIENT'S FAILURE TO OBTAIN REQUIRED TCPA CONSENTS; (B) CLIENT'S VIOLATION OF ANY TELEMARKETING LAW; OR (C) ANY UNAUTHORIZED USE OF THE PLATFORM TO CONTACT END USERS.
                </AlertBox>
              </SubSection>
            </Section>

            {/* Section 9 */}
            <Section number="9" title="Intellectual Property">
              <SubSection title="9.1 ShiFt IP">
                <P>ShiFt retains all right, title, and interest in and to the Platform, including all software, AI models, algorithms, interfaces, designs, and trademarks (including ShiFt NeuralOS™). Nothing in this Agreement transfers any IP rights to Client.</P>
              </SubSection>
              <SubSection title="9.2 Client Data">
                <P>Client retains ownership of its business data and End User data. Client grants ShiFt a limited license to process such data solely to provide Platform services.</P>
              </SubSection>
              <SubSection title="9.3 Feedback and Aggregated Data">
                <P>Client grants ShiFt a perpetual, royalty-free license to use any feedback provided without restriction. ShiFt may use aggregated, de-identified Platform data to improve the Platform and publish industry benchmarks.</P>
              </SubSection>
            </Section>

            {/* Section 10 */}
            <Section number="10" title="Confidentiality">
              <P>Each party agrees to maintain the confidentiality of the other party's non-public business information and not to disclose it to third parties without prior written consent. Exceptions apply for information that becomes publicly known without breach, was rightfully known before disclosure, is independently developed, or must be disclosed by law. The financial terms of each Client's specific agreement with ShiFt are Confidential Information of both parties.</P>
            </Section>

            {/* Section 11 */}
            <Section number="11" title="Data Protection">
              <P>ShiFt's collection and processing of personal information is governed by the ShiFt Privacy Policy, incorporated herein by reference and available at ShiFtNow.io/privacy. To the extent ShiFt processes End User data on Client's behalf, ShiFt acts as a data processor and Client acts as the data controller. Client agrees to execute a Data Processing Agreement (DPA) upon request where required by applicable privacy law.</P>
            </Section>

            {/* Section 12 */}
            <Section number="12" title="Warranties and Disclaimers">
              <SubSection title="12.1 ShiFt Warranties">
                <P>ShiFt warrants that the Platform will perform materially in accordance with its documentation under normal use conditions; ShiFt will implement industry-standard security measures; and ShiFt has the right to provide the Platform as described.</P>
              </SubSection>
              <SubSection title="12.2 Client Warranties">
                <P>Client warrants that all information provided is accurate and complete; Client has obtained all required TCPA consents; Client's use of the Platform complies with all applicable laws; and Client is a legitimate roofing contractor with authority to enter this Agreement.</P>
              </SubSection>
              <SubSection title="12.3 Disclaimer of Warranties">
                <AlertBox color="#FA982F">
                  📋 WARRANTY DISCLAIMER — EXCEPT AS SET FORTH IN SECTION 12.1, THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED SERVICE. SHIFT DOES NOT WARRANT ANY PARTICULAR REVENUE OUTCOME. THE REVENUE FLOOR GUARANTEE BILLING PAUSE IS THE SOLE REMEDY FOR PERFORMANCE SHORTFALLS.
                </AlertBox>
              </SubSection>
            </Section>

            {/* Section 13 */}
            <Section number="13" title="Limitation of Liability">
              <AlertBox>
                ⚖️ LIMITATION OF LIABILITY — TO THE MAXIMUM EXTENT PERMITTED BY LAW: (A) NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOST PROFITS OR LOST REVENUE; AND (B) SHIFT'S TOTAL LIABILITY WILL NOT EXCEED THE GREATER OF: (I) TOTAL REVSHARE FEES PAID BY CLIENT IN THE 12 MONTHS PRECEDING THE CLAIM, OR (II) $10,000. THESE LIMITATIONS DO NOT APPLY TO: CLIENT'S TCPA INDEMNIFICATION OBLIGATIONS; CLIENT'S PAYMENT OBLIGATIONS; EITHER PARTY'S GROSS NEGLIGENCE OR WILLFUL MISCONDUCT; OR IP RIGHTS VIOLATIONS.
              </AlertBox>
            </Section>

            {/* Section 14 */}
            <Section number="14" title="Indemnification">
              <SubSection title="14.1 Client's Indemnification Obligations">
                <P>Client agrees to indemnify, defend, and hold harmless ShiFt, its affiliates, officers, directors, employees, and agents from any claims, damages, liabilities, costs, and expenses (including attorneys' fees) arising from: Client's breach of this Agreement; Client's TCPA violations; Client's violation of any applicable law; Client's provision of inaccurate information; or claims by End Users arising from Client's business operations.</P>
              </SubSection>
              <SubSection title="14.2 ShiFt's Indemnification Obligations">
                <P>ShiFt agrees to indemnify Client from third-party claims alleging that the Platform itself (excluding Client data or Client's use) infringes any U.S. intellectual property right, provided Client promptly notifies ShiFt.</P>
              </SubSection>
            </Section>

            {/* Section 15 */}
            <Section number="15" title="Term and Termination">
              <SubSection title="15.1 Term">
                <P>This Agreement commences on the date Client pays the RAF. The Initial 90-Day Term is non-cancelable as set forth in Section 4. After the Initial Term and execution of a RevShare Addendum, the Agreement continues month-to-month until terminated.</P>
              </SubSection>
              <SubSection title="15.2 Termination by Client">
                <P>After the Initial Term, Client may terminate with 30 days' written notice to <a href="mailto:legal@shiftnow.io" className="hover:text-white transition-colors" style={{ color: "#F54A48" }}>legal@shiftnow.io</a>. All accrued RevShare amounts remain due. The RAF is non-refundable upon termination.</P>
              </SubSection>
              <SubSection title="15.3 Termination by ShiFt">
                <P>ShiFt may terminate immediately upon: chargeback initiation; material TCPA breach; fraud; unauthorized Platform use; or Client insolvency. ShiFt may terminate with 30 days' written notice for any reason at its discretion.</P>
              </SubSection>
              <SubSection title="15.4 Effect of Termination">
                <P>Upon termination: Platform access is revoked; all outstanding amounts become immediately due; ShiFt will provide a data export within 30 days upon written request; and Sections 5, 8, 9, 10, 12, 13, 14, and 17 survive indefinitely.</P>
              </SubSection>
            </Section>

            {/* Section 16 */}
            <Section number="16" title="The ShiFt Circle — Referral Program">
              <BulletList items={[
                "Eligibility: Day 61+ with at least one confirmed booked job",
                "Demo Referral Incentive: $500 RevShare credit",
                "Qualified Client Incentive: RAF waiver for referred Client plus 1% permanent rate reduction for referring Client",
                "Milestone Reductions: additional 1% at 3, 5, and 10 qualified referrals",
                "Minimum Rate Floor: 8%",
                "Attribution Window: 90 days",
                "ShiFt may modify or discontinue the ShiFt Circle with 60 days' notice; earned credits are grandfathered",
              ]} />
            </Section>

            {/* Section 17 */}
            <Section number="17" title="Dispute Resolution and Arbitration">
              <SubSection title="17.1 Mandatory Pre-Dispute Process">
                <P>Before any formal proceeding, the party asserting a dispute must deliver written notice to <a href="mailto:legal@shiftnow.io" className="hover:text-white transition-colors" style={{ color: "#F54A48" }}>legal@shiftnow.io</a> and negotiate in good faith for at least 30 days.</P>
              </SubSection>
              <SubSection title="17.2 Binding Arbitration">
                <AlertBox>
                  ⚖️ BINDING ARBITRATION — ANY AND ALL DISPUTES ARISING OUT OF OR RELATING TO THIS AGREEMENT WILL BE RESOLVED BY BINDING ARBITRATION administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules, seated in Cherokee County, Georgia, or remotely by agreement. The arbitrator's decision is final and enforceable. CLIENT WAIVES THE RIGHT TO A JURY TRIAL AND TO PARTICIPATE IN ANY CLASS ACTION OR COLLECTIVE PROCEEDING. ALL CLAIMS MUST BE BROUGHT ON AN INDIVIDUAL BASIS.
                </AlertBox>
              </SubSection>
              <SubSection title="17.3 Exceptions to Arbitration">
                <P>Either party may seek injunctive relief in courts located in Cherokee County, Georgia for: (a) IP rights protection; (b) breach of confidentiality; or (c) claims for which arbitration is prohibited by law.</P>
              </SubSection>
              <SubSection title="17.4 Governing Law">
                <P>This Agreement is governed by the laws of the State of Georgia, without regard to conflict-of-laws principles. Courts in Cherokee County, Georgia have exclusive jurisdiction for matters exempt from arbitration.</P>
              </SubSection>
            </Section>

            {/* Section 18 */}
            <Section number="18" title="Force Majeure">
              <P>Neither party is liable for delays caused by events beyond their reasonable control, including natural disasters, pandemics, government actions, or telecommunications failures. This provision does not excuse Client's payment obligations.</P>
            </Section>

            {/* Section 19 */}
            <Section number="19" title="General Provisions">
              <SubSection title="19.1 Entire Agreement">
                <P>This Agreement, together with the executed Client Agreement or Quick Start Agreement, any RevShare Addendum, and the ShiFt Privacy Policy and Cookie Policy, constitutes the entire agreement between the Parties and supersedes all prior agreements.</P>
              </SubSection>
              <SubSection title="19.2 Severability">
                <P>If any provision is unenforceable, the remaining provisions continue in full force.</P>
              </SubSection>
              <SubSection title="19.3 Waiver">
                <P>Failure to enforce any provision does not waive the right to enforce it in the future.</P>
              </SubSection>
              <SubSection title="19.4 Assignment">
                <P>Client may not assign this Agreement without ShiFt's prior written consent. ShiFt may assign in connection with a business transfer or acquisition.</P>
              </SubSection>
              <SubSection title="19.5 Notices">
                <P>Formal notices to ShiFt: <a href="mailto:legal@shiftnow.io" className="hover:text-white transition-colors" style={{ color: "#F54A48" }}>legal@shiftnow.io</a>, Cherokee County, Georgia. Notices to Client: the email address on record in Client's account.</P>
              </SubSection>
              <SubSection title="19.6 Electronic Signatures">
                <P>This Agreement may be executed electronically. Electronic signatures have the same legal effect as handwritten signatures under the E-SIGN Act and applicable state law.</P>
              </SubSection>
              <SubSection title="19.7 No Agency">
                <P>The Parties are independent contractors. Nothing herein creates a partnership, joint venture, agency, or employment relationship.</P>
              </SubSection>
            </Section>

            {/* Section 20 */}
            <Section number="20" title="Contact Information">
              <BulletList items={[
                "Legal: legal@shiftnow.io",
                "General: hello@shiftnow.io",
                "Jurisdiction: Cherokee County, Georgia",
                "Website: ShiFtNow.io",
              ]} />
            </Section>

            <div className="mt-10 pt-8 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="font-mono text-xs mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
                ShiFt NeuralOS™ — Terms of Service — Effective March 15, 2026 — Cherokee County, Georgia
              </p>
              <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                This document is incorporated by reference into all ShiFt Client Agreements and Quick Start Agreements. It should be reviewed by qualified legal counsel prior to publication.
              </p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}