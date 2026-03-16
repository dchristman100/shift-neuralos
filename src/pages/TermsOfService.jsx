import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { ChevronDown } from "lucide-react";

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

function AlertBox({ children, color = "#F54A48" }) {
  return (
    <div className="rounded-xl p-5 mb-5 border" style={{ background: `${color}0D`, borderColor: `${color}33` }}>
      <p className="font-body text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>{children}</p>
    </div>
  );
}

const tierData = [
  { tier: "ACTIVATE", revShare: "15%", monthlyFee: "$1,997/mo" },
  { tier: "AMPLIFY", revShare: "12%", monthlyFee: "$3,497/mo" },
  { tier: "DOMINATE", revShare: "10%", monthlyFee: "$8,997/mo" },
];

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
            <div className="flex items-center justify-center gap-6 font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>Effective Date: March 15, 2026</span>
              <span>·</span>
              <span>Last Updated: March 15, 2026</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl p-8 md:p-12" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>

            <AlertBox>PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING THE SHIFTNOW.IO PLATFORM, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE, DO NOT ACCESS OR USE THE PLATFORM.</AlertBox>

            <Section number="1" title="Definitions">
              <P>As used in these Terms of Service:</P>
              <BulletList items={[
                '"Agreement" means these Terms of Service together with any Order Form, Statement of Work, or other agreement referencing these Terms.',
                '"Client" or "you" means the roofing contractor business and its authorized users that access or use the Platform.',
                '"End Users" means homeowners, property owners, and other third parties whose information is processed through the Platform on behalf of Client.',
                '"NeuralOS" or "Platform" means the ShiFt NeuralOS™ AI Revenue Operating System, including all software, AI models, APIs, dashboards, mobile applications, and services provided by ShiFt.',
                '"Revenue Activation Fee" or "RAF" means the one-time onboarding and activation fee of $5,000 payable by Client upon execution of an Order Form.',
                '"RevShare" or "Revenue Share" means the percentage of Platform-Attributed Revenue owed to ShiFt as set forth in the applicable tier.',
                '"Platform-Attributed Revenue" means revenue from jobs booked, confirmed, or converted through the Platform as determined by the Attribution Methodology.',
                '"Attribution Methodology" means ShiFt\'s proprietary method for determining which revenue is attributable to the Platform, as described in Section 5.',
                '"Tier" refers to the applicable service tier: ACTIVATE (15% RevShare), AMPLIFY (12% RevShare), or DOMINATE (10% RevShare).',
                '"Revenue Floor" means the minimum amount of Platform-Attributed Revenue that must be generated within a 90-day period to trigger billing under the Revenue Floor Guarantee.',
                '"ShiFt," "we," "us," or "our" means ShiFt NeuralOS™, operated by David Christman, Atlanta, Georgia.',
              ]} />
            </Section>

            <Section number="2" title="Acceptance and Eligibility">
              <SubSection title="2.1 Acceptance">
                <P>By clicking "I Agree," signing an Order Form, or accessing the Platform, you agree to be bound by this Agreement. If you are entering into this Agreement on behalf of a business entity, you represent that you have authority to bind that entity.</P>
              </SubSection>
              <SubSection title="2.2 Eligibility">
                <P>You may use the Platform only if you:</P>
                <BulletList items={[
                  "Are a roofing contractor operating a legitimate business in the United States",
                  "Are at least 18 years of age or the age of majority in your jurisdiction",
                  "Have the legal capacity and authority to enter into this Agreement",
                  "Are not prohibited from using the Platform under applicable law",
                  "Have paid the Revenue Activation Fee as required by your Order Form",
                ]} />
              </SubSection>
              <SubSection title="2.3 Modifications">
                <P>We reserve the right to modify these Terms at any time. We will provide at least 30 days' notice of material changes by email to your registered address. Continued use after the effective date constitutes acceptance. If you do not accept modified Terms, you may terminate your account before the effective date.</P>
              </SubSection>
            </Section>

            <Section number="3" title="Platform License and Restrictions">
              <SubSection title="3.1 License Grant">
                <P>Subject to your compliance with this Agreement and payment of all applicable fees, ShiFt grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform solely for your internal business operations as a roofing contractor during the term of this Agreement.</P>
              </SubSection>
              <SubSection title="3.2 Restrictions">
                <P>You may not:</P>
                <BulletList items={[
                  "Sublicense, resell, rent, lease, or otherwise transfer your rights to the Platform",
                  "Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Platform",
                  "Modify, adapt, or create derivative works based on the Platform",
                  "Use the Platform to build a competing product or service",
                  "Access the Platform through automated means (bots, scrapers) not provided or authorized by ShiFt",
                  "Use the Platform in violation of any applicable law, including TCPA, CAN-SPAM, FTC regulations, or state telemarketing laws",
                  "Input false, misleading, or fraudulent information into the Platform",
                  "Use the Platform to harass, abuse, or harm End Users",
                  "Share your account credentials with unauthorized parties",
                  "Attempt to circumvent any security features of the Platform",
                ]} />
              </SubSection>
            </Section>

            <Section number="4" title="Revenue Activation Fee (RAF)">
              <SubSection title="4.1 Payment">
                <P>A Revenue Activation Fee of $5,000 (five thousand dollars) is due and payable upon execution of your Order Form and prior to Platform activation. The RAF is non-refundable except as expressly provided in Section 7 (Revenue Floor Guarantee).</P>
              </SubSection>
              <SubSection title="4.2 What the RAF Covers">
                <P>The RAF covers: initial Platform configuration, roofing-specific AI model calibration, integration setup, 90-minute onboarding session, and access to the ShiFt Roofing Playbook Vault. The RAF does not constitute a deposit against RevShare obligations.</P>
              </SubSection>
              <SubSection title="4.3 Payment Methods">
                <P>The RAF may be paid by ACH transfer, wire transfer, or credit card. Payment must clear before Platform activation begins. ShiFt may, in its sole discretion, offer installment arrangements for the RAF through approved financing channels.</P>
              </SubSection>
            </Section>

            <Section number="5" title="RevShare Fees and Billing">
              <SubSection title="5.1 RevShare Rate by Tier">
                <div className="rounded-xl overflow-hidden border mb-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <table className="w-full">
                    <thead>
                      <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                        {["Tier", "RevShare Rate", "Monthly Platform Fee"].map(h => (
                          <th key={h} className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tierData.map((row, i) => (
                        <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                          <td className="px-5 py-3 font-display font-bold text-sm" style={{ color: i === 0 ? "#F54A48" : i === 1 ? "#FA982F" : "#FFD700" }}>{row.tier}</td>
                          <td className="px-5 py-3 font-mono text-sm text-white">{row.revShare}</td>
                          <td className="px-5 py-3 font-mono text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{row.monthlyFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SubSection>
              <SubSection title="5.2 Attribution Methodology">
                <P>Platform-Attributed Revenue includes revenue from:</P>
                <BulletList items={[
                  "Jobs booked through the Platform's AI call answering, SMS follow-up, or automated booking features",
                  "Appointments confirmed through the Platform's calendar integration",
                  "Jobs resulting from referrals generated through the ShiFt Circle where the Platform tracked the referral chain",
                  "Storm-surge leads captured and converted through the Platform's storm protocol",
                ]} />
                <P>Platform-Attributed Revenue does NOT include:</P>
                <BulletList items={[
                  "Jobs booked entirely through your existing channels with no Platform involvement",
                  "Renewal or repeat jobs from customers who initially contracted with you prior to Platform activation, unless re-engaged through the Platform",
                  "Revenue from jobs cancelled prior to payment",
                ]} />
              </SubSection>
              <SubSection title="5.3 Reporting and Billing Cycle">
                <P>ShiFt will generate monthly RevShare invoices based on Platform-Attributed Revenue data. Invoices are due within 15 days of issuance. Client is responsible for accurately reporting job completion and revenue amounts through the Platform dashboard within 5 business days of job completion.</P>
              </SubSection>
              <SubSection title="5.4 Quarterly True-Up">
                <P>A quarterly true-up reconciliation will be conducted to verify RevShare calculations. Either party may request a true-up audit with 10 days' written notice. Disputed amounts must be raised within 30 days of invoice receipt. Undisputed amounts are due as billed.</P>
              </SubSection>
              <SubSection title="5.5 Late Payments">
                <P>Undisputed invoices not paid within 30 days of the due date accrue interest at 1.5% per month (or the maximum lawful rate, whichever is lower). ShiFt may suspend Platform access for accounts more than 45 days past due after providing 10 days' written notice.</P>
              </SubSection>
              <SubSection title="5.6 Taxes">
                <P>Client is responsible for all applicable sales, use, excise, or similar taxes on Platform services, excluding taxes on ShiFt's net income. If ShiFt is required to collect taxes, they will be added to invoices.</P>
              </SubSection>
            </Section>

            <Section number="6" title="Tier Migration">
              <P>As your roofing business grows, you may qualify for a higher Tier with a lower RevShare rate. Tier upgrades are available when trailing 12-month Platform-Attributed Revenue meets the applicable threshold. Tier upgrades take effect on the first day of the following billing cycle after qualification is confirmed. Tier downgrades are not permitted without ShiFt's prior written consent.</P>
              <P>The ShiFt Circle referral program provides permanent RevShare rate reductions as specified in the ShiFt Circle program terms, subject to a minimum rate floor of 8%.</P>
            </Section>

            <Section number="7" title="Revenue Floor Guarantee">
              <SubSection title="7.1 Guarantee Description">
                <P>ShiFt guarantees that for each 90-day performance period following Platform activation, the Platform will generate at least the Revenue Floor amount in Platform-Attributed Revenue for Client's Tier. The Revenue Floor for each Tier is specified in your Order Form.</P>
              </SubSection>
              <SubSection title="7.2 Billing Pause Mechanism">
                <P>If the Platform fails to generate the applicable Revenue Floor during a 90-day performance period (as measured from the start of your billing cycle), ShiFt will:</P>
                <BulletList items={[
                  "Pause monthly RevShare billing for the subsequent 30-day period",
                  "Continue providing all Platform services during the paused period without charge",
                  "Resume billing only when the Revenue Floor is met on a trailing 90-day basis",
                ]} />
                <AlertBox>IMPORTANT: The Revenue Floor Guarantee is a BILLING PAUSE — not a refund, cancellation right, or money-back guarantee. The RAF is non-refundable. ShiFt does not guarantee specific revenue outcomes; the guarantee applies only to the billing pause described above.</AlertBox>
              </SubSection>
              <SubSection title="7.3 Guarantee Conditions">
                <P>The Revenue Floor Guarantee applies only when:</P>
                <BulletList items={[
                  "Client has completed Platform setup and onboarding within 14 days of RAF payment",
                  "Client's Platform account is active and in good standing (no past-due balances)",
                  "Client has not materially modified, disabled, or restricted Platform features",
                  "Client has responded to Platform-generated leads within commercially reasonable time",
                  "Client has provided accurate and complete business information",
                ]} />
              </SubSection>
              <SubSection title="7.4 Guarantee Exclusions">
                <P>The Revenue Floor Guarantee does not apply to revenue shortfalls caused by:</P>
                <BulletList items={[
                  "Force majeure events, natural disasters, or weather events not constituting storm-season activation",
                  "Changes in applicable law that prevent Platform operation",
                  "Client's failure to honor booked appointments",
                  "Client's account suspension due to non-payment or ToS violation",
                  "Client's discontinuation of advertising or lead generation activities that were active at signup",
                ]} />
              </SubSection>
            </Section>

            <Section number="8" title="TCPA and Telemarketing Compliance">
              <SubSection title="8.1 Client Obligations">
                <P>Client represents, warrants, and covenants that:</P>
                <BulletList items={[
                  "Client has obtained and will maintain all legally required prior express written consents from End Users before the Platform makes automated calls or sends automated text messages on Client's behalf, including consents required under TCPA, 47 U.S.C. § 227",
                  "Client will comply with all federal and state telemarketing laws, including the National Do Not Call Registry requirements, state do-not-call laws, and applicable calling-time restrictions",
                  "Client will promptly communicate all End User opt-out requests to ShiFt within 24 hours",
                  "Client will not instruct the Platform to contact any individual who has previously opted out or requested no further contact",
                  "Client will maintain accurate and complete consent records for a minimum of 5 years and make them available to ShiFt upon request",
                ]} />
              </SubSection>
              <SubSection title="8.2 ShiFt TCPA Commitments">
                <P>ShiFt will:</P>
                <BulletList items={[
                  "Honor opt-out commands (e.g., STOP, UNSUBSCRIBE) in automated SMS messages within the Platform",
                  "Include legally required identification information in automated communications",
                  "Provide Client with configurable time-of-day restrictions for automated outreach",
                ]} />
              </SubSection>
              <SubSection title="8.3 TCPA Indemnification">
                <AlertBox>CLIENT AGREES TO INDEMNIFY, DEFEND, AND HOLD HARMLESS SHIFT, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS FROM ANY CLAIMS, DAMAGES, FINES, PENALTIES, ATTORNEYS' FEES, AND COSTS ARISING FROM: (A) CLIENT'S FAILURE TO OBTAIN REQUIRED TCPA CONSENTS; (B) CLIENT'S VIOLATION OF ANY TELEMARKETING LAWS; OR (C) ANY UNAUTHORIZED USE OF THE PLATFORM BY CLIENT OR CLIENT'S END USERS.</AlertBox>
              </SubSection>
            </Section>

            <Section number="9" title="Intellectual Property">
              <SubSection title="9.1 ShiFt IP">
                <P>ShiFt retains all right, title, and interest in and to the Platform, including all software, AI models, algorithms, interfaces, designs, trademarks (including ShiFt NeuralOS™), and all related intellectual property. Nothing in this Agreement transfers any IP rights to Client.</P>
              </SubSection>
              <SubSection title="9.2 Client Data">
                <P>Client retains ownership of Client's business data and End User data provided to the Platform. Client grants ShiFt a limited license to process Client data solely to provide the Platform services. Client represents that it has all rights to provide such data to ShiFt.</P>
              </SubSection>
              <SubSection title="9.3 Feedback">
                <P>If you provide ShiFt with feedback, suggestions, or ideas about the Platform, you grant ShiFt a perpetual, irrevocable, royalty-free license to use such feedback without restriction or compensation.</P>
              </SubSection>
              <SubSection title="9.4 Aggregated Data">
                <P>ShiFt may use aggregated, de-identified data derived from Platform usage to improve the Platform, develop new features, and publish industry benchmarks. Such aggregated data does not identify individual Clients.</P>
              </SubSection>
            </Section>

            <Section number="10" title="Confidentiality">
              <P>Each party agrees to maintain the confidentiality of the other party's non-public business information disclosed in connection with this Agreement ("Confidential Information") and not to disclose it to third parties without prior written consent. Confidential Information excludes information that: (a) is or becomes publicly known through no breach of this Agreement; (b) was rightfully known before disclosure; (c) is independently developed; or (d) must be disclosed by law (with prompt notice to the disclosing party).</P>
              <P>The RevShare rates, Revenue Floor amounts, and financial terms of your specific agreement with ShiFt are Confidential Information of both parties.</P>
            </Section>

            <Section number="11" title="Data Protection">
              <P>ShiFt's collection and processing of personal information is governed by our Privacy Policy, incorporated herein by reference. To the extent ShiFt processes personal information of End Users on Client's behalf, ShiFt acts as a service provider/data processor. Client acts as the data controller and is responsible for ensuring lawful bases for processing, including obtaining all required End User consents.</P>
              <P>Client agrees to enter into a Data Processing Agreement ("DPA") upon request, to the extent required by applicable privacy laws including the California Consumer Privacy Act (CCPA) or other applicable state or federal privacy regulations.</P>
            </Section>

            <Section number="12" title="Warranties and Disclaimers">
              <SubSection title="12.1 ShiFt Warranties">
                <BulletList items={[
                  "The Platform will perform materially in accordance with its documentation under normal use conditions",
                  "ShiFt will implement industry-standard security measures as described in the Privacy Policy",
                  "ShiFt has the right to provide the Platform as described in this Agreement",
                ]} />
              </SubSection>
              <SubSection title="12.2 Client Warranties">
                <BulletList items={[
                  "All information provided to ShiFt is accurate and complete",
                  "Client has obtained all required TCPA consents and complies with all telemarketing laws",
                  "Client's use of the Platform complies with all applicable laws",
                  "Client is a legitimate roofing contractor with the authority to enter this Agreement",
                ]} />
              </SubSection>
              <SubSection title="12.3 Disclaimer of Warranties">
                <AlertBox>EXCEPT AS EXPRESSLY SET FORTH IN SECTION 12.1, THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED SERVICE. SHIFT DOES NOT WARRANT THAT THE PLATFORM WILL BE ERROR-FREE OR THAT ANY PARTICULAR REVENUE RESULTS WILL BE ACHIEVED. THE REVENUE FLOOR GUARANTEE IS THE SOLE REMEDY FOR SERVICE PERFORMANCE SHORTFALLS.</AlertBox>
              </SubSection>
            </Section>

            <Section number="13" title="Limitation of Liability">
              <AlertBox>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW: (A) IN NO EVENT WILL EITHER PARTY BE LIABLE TO THE OTHER FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, OR LOSS OF DATA, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; (B) SHIFT'S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL NOT EXCEED THE GREATER OF: (I) THE TOTAL REVSHARE FEES PAID BY CLIENT IN THE 12 MONTHS PRECEDING THE CLAIM, OR (II) $10,000.</AlertBox>
              <P>The limitations above do not apply to: (1) Client's TCPA indemnification obligations under Section 8.3; (2) Client's payment obligations; (3) either party's gross negligence or willful misconduct; or (4) either party's violation of the other's intellectual property rights.</P>
            </Section>

            <Section number="14" title="Indemnification">
              <SubSection title="14.1 Client's Indemnification Obligations">
                <P>Client agrees to indemnify, defend, and hold harmless ShiFt, its affiliates, officers, directors, employees, agents, licensors, and service providers from any claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:</P>
                <BulletList items={[
                  "Client's breach of this Agreement, including TCPA violations",
                  "Client's violation of any applicable law",
                  "Client's use of the Platform in a manner not permitted by this Agreement",
                  "Client's provision of inaccurate or misleading information",
                  "Claims by End Users arising from Client's business operations",
                ]} />
              </SubSection>
              <SubSection title="14.2 ShiFt's Indemnification Obligations">
                <P>ShiFt agrees to indemnify, defend, and hold harmless Client from third-party claims alleging that the Platform itself (excluding Client data or Client's use) infringes any United States intellectual property right, provided Client promptly notifies ShiFt of such claim.</P>
              </SubSection>
            </Section>

            <Section number="15" title="Term and Termination">
              <SubSection title="15.1 Term">
                <P>This Agreement commences on the date Client pays the RAF and continues on a month-to-month basis unless terminated as provided herein. There is no minimum contract term after the initial RAF payment.</P>
              </SubSection>
              <SubSection title="15.2 Termination by Client">
                <P>Client may terminate this Agreement at any time by providing 30 days' written notice to ShiFt. The RAF is non-refundable upon termination.</P>
              </SubSection>
              <SubSection title="15.3 Termination by ShiFt">
                <P>ShiFt may terminate this Agreement:</P>
                <BulletList items={[
                  "Immediately upon Client's material breach of Sections 3.2 (Restrictions), 8 (TCPA Compliance), or 9 (Intellectual Property)",
                  "Upon 30 days' written notice for any reason",
                  "Immediately if Client becomes insolvent or subject to bankruptcy proceedings",
                ]} />
              </SubSection>
              <SubSection title="15.4 Effect of Termination">
                <BulletList items={[
                  "Client's license to use the Platform terminates immediately",
                  "All outstanding RevShare amounts become immediately due and payable",
                  "ShiFt will provide Client with a data export of Client's business data within 30 days",
                  "Confidentiality, indemnification, limitation of liability, and dispute resolution provisions survive termination",
                ]} />
              </SubSection>
            </Section>

            <Section number="16" title="The ShiFt Circle — Referral Program">
              <BulletList items={[
                "Eligibility: Client must have been active on the Platform for at least 61 days and have at least one confirmed booked job",
                "Demo Referral Incentive: $500 credit applied to Client's RevShare balance for each referred prospect who completes a Revenue Demo",
                "Qualified Client Incentive: RAF waiver for referred Client plus 1% permanent RevShare rate reduction for referring Client, upon referred Client's activation",
                "Milestone Reductions: Additional 1% reduction at 3, 5, and 10 qualified referrals",
                "Minimum Rate Floor: 8% RevShare regardless of referral credits",
                "Attribution Window: 90 days from initial referral",
                "ShiFt reserves the right to modify or discontinue the ShiFt Circle program with 60 days' notice, with earned credits grandfathered",
              ]} />
            </Section>

            <Section number="17" title="Dispute Resolution and Arbitration">
              <SubSection title="17.1 Informal Resolution">
                <P>Before initiating formal dispute resolution, the parties agree to attempt good-faith resolution by providing written notice of the dispute to the other party and negotiating for at least 30 days.</P>
              </SubSection>
              <SubSection title="17.2 Binding Arbitration">
                <AlertBox>EXCEPT AS PROVIDED IN SECTION 17.4, ANY DISPUTE ARISING OUT OF OR RELATING TO THIS AGREEMENT WILL BE RESOLVED BY BINDING ARBITRATION ADMINISTERED BY THE AMERICAN ARBITRATION ASSOCIATION (AAA) UNDER ITS COMMERCIAL ARBITRATION RULES. ARBITRATION WILL TAKE PLACE IN ATLANTA, GEORGIA, OR REMOTELY BY AGREEMENT. THE ARBITRATOR'S AWARD IS FINAL AND BINDING AND MAY BE ENTERED AS A JUDGMENT IN ANY COURT OF COMPETENT JURISDICTION.</AlertBox>
              </SubSection>
              <SubSection title="17.3 Class Action Waiver">
                <AlertBox>CLIENT WAIVES ANY RIGHT TO BRING CLAIMS AGAINST SHIFT AS A CLASS ACTION, COLLECTIVE ACTION, OR REPRESENTATIVE ACTION. ALL DISPUTES MUST BE BROUGHT ON AN INDIVIDUAL BASIS.</AlertBox>
              </SubSection>
              <SubSection title="17.4 Exceptions to Arbitration">
                <P>Either party may seek injunctive or equitable relief in a court of competent jurisdiction for: (a) protection of intellectual property rights; (b) breach of confidentiality obligations; or (c) claims for which arbitration is prohibited by law.</P>
              </SubSection>
              <SubSection title="17.5 Governing Law">
                <P>This Agreement is governed by the laws of the State of Georgia, without regard to conflict-of-laws principles. Federal courts and state courts located in Atlanta, Georgia have exclusive jurisdiction for matters exempt from arbitration.</P>
              </SubSection>
            </Section>

            <Section number="18" title="Force Majeure">
              <P>Neither party is liable for delays or failures in performance resulting from causes beyond that party's reasonable control, including natural disasters, acts of government, pandemics, telecommunications failures, or other force majeure events. This provision does not excuse Client's obligation to pay outstanding RevShare amounts.</P>
            </Section>

            <Section number="19" title="General Provisions">
              <SubSection title="19.1 Entire Agreement">
                <P>This Agreement, together with any Order Form and ShiFt's Privacy Policy and Cookie Policy, constitutes the entire agreement between the parties regarding the Platform and supersedes all prior agreements.</P>
              </SubSection>
              <SubSection title="19.2 Severability">
                <P>If any provision of this Agreement is found unenforceable, the remaining provisions continue in full force and effect.</P>
              </SubSection>
              <SubSection title="19.3 Waiver">
                <P>Failure to enforce any provision of this Agreement does not constitute a waiver of the right to enforce it in the future.</P>
              </SubSection>
              <SubSection title="19.4 Assignment">
                <P>Client may not assign this Agreement without ShiFt's prior written consent. ShiFt may assign this Agreement in connection with a merger, acquisition, or sale of all or substantially all of its assets.</P>
              </SubSection>
              <SubSection title="19.5 Notices">
                <P>Notices must be in writing and delivered by email (with confirmation) or certified mail. Notices to ShiFt: <a href="mailto:hello@shiftnow.io" className="hover:text-white transition-colors" style={{ color: "#F54A48" }}>hello@shiftnow.io</a>, 12460 Crabapple Road, Ste 202-522, Alpharetta, GA 30004. Notices to Client: the email address on file in Client's account.</P>
              </SubSection>
              <SubSection title="19.6 No Agency">
                <P>The parties are independent contractors. Nothing in this Agreement creates a partnership, joint venture, agency, or employment relationship.</P>
              </SubSection>
            </Section>

            <Section number="20" title="Contact Information">
              <BulletList items={[
                "Email: legal@shiftnow.io",
                "General: hello@shiftnow.io",
                "Address: ShiFt NeuralOS™, 12460 Crabapple Road, Ste 202-522, Alpharetta, GA 30004",
                "Website: ShiFtNow.io",
              ]} />
            </Section>

            <div className="mt-10 pt-8 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                ShiFt NeuralOS™ — Terms of Service — Effective March 15, 2026
              </p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}