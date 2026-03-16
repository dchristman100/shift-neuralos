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

function P({ children, className = "" }) {
  return (
    <p className={`font-body text-sm mb-4 ${className}`} style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
      {children}
    </p>
  );
}

function AlertBox({ children }) {
  return (
    <div className="rounded-xl p-5 mb-5 border" style={{ background: "rgba(245,74,72,0.06)", borderColor: "rgba(245,74,72,0.2)" }}>
      <p className="font-body text-sm font-semibold" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75 }}>{children}</p>
    </div>
  );
}

export default function PrivacyPolicy() {
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
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">Privacy Policy</h1>
            <p className="font-display text-lg font-semibold text-white mb-3">ShiFt NeuralOS™ | ShiFtNow.io</p>
            <div className="flex items-center justify-center gap-6 font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>Effective Date: March 15, 2026</span>
              <span>·</span>
              <span>Last Updated: March 15, 2026</span>
            </div>
          </div>

          {/* Body */}
          <div className="max-w-3xl mx-auto rounded-2xl p-8 md:p-12" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>

            <P>ShiFt NeuralOS™ ("ShiFt," "we," "us," or "our") operates ShiFtNow.io and the ShiFt NeuralOS™ AI Revenue Operating System (collectively, the "Platform"). This Privacy Policy explains how we collect, use, disclose, retain, and protect information about: (1) roofing contractor businesses and their authorized users who access or use the Platform ("Clients"), and (2) individuals whose information is processed through the Platform on behalf of Clients, including homeowners, property owners, and prospective customers of Clients ("End Users").</P>
            <P>By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with this Privacy Policy, do not access or use the Platform.</P>

            <AlertBox>IMPORTANT NOTICE TO CLIENTS: When you use the Platform to process personal information of your customers (End Users), you represent and warrant that you have obtained all legally required consents and authorizations for such processing, including any consents required under the Telephone Consumer Protection Act (TCPA), the CAN-SPAM Act, applicable state privacy laws, and any other applicable laws.</AlertBox>

            <Section number="1" title="Information We Collect">
              <SubSection title="1.1 Information You Provide Directly">
                <P>When you register for or use the Platform as a Client, we collect:</P>
                <BulletList items={[
                  "Account registration information: business name, owner/authorized user name, email address, phone number, mailing address, and business license information",
                  "Payment information: billing address, and payment method details (processed through our third-party payment processor; we do not store full payment card numbers)",
                  "Revenue Activation Fee (RAF) payment records and RevShare calculation data",
                  "Business profile information: annual revenue range, geographic service area, roofing contractor license information",
                  "Communications: messages, support tickets, emails, and other communications you send to us",
                  "Configuration and preferences: system settings, notification preferences, and integration configurations",
                ]} />
              </SubSection>
              <SubSection title="1.2 Information Collected Automatically">
                <P>When you access the Platform, we automatically collect:</P>
                <BulletList items={[
                  "Device and browser information: IP address, browser type, operating system, device identifiers",
                  "Usage data: pages visited, features used, time and duration of visits, clicks and interactions",
                  "Log data: server logs, error reports, and diagnostic information",
                  "Cookie and tracking data: as described in our Cookie Policy",
                  "Location data: general geographic location derived from IP address",
                ]} />
              </SubSection>
              <SubSection title="1.3 End User Data Processed on Behalf of Clients">
                <P>When Clients use the Platform to manage their revenue operations, the Platform processes personal information of End Users (homeowners and prospective roofing customers) including:</P>
                <BulletList items={[
                  "Contact information: name, phone number(s), email address, property address",
                  "Communication records: call recordings, SMS message content, voicemail recordings, chat transcripts",
                  "Lead and appointment data: inquiry details, service requests, storm damage descriptions, appointment scheduling information",
                  "Property information: property address, roof type, damage assessments, insurance claim information",
                  "Interaction history: follow-up sequences, response times, conversion status",
                ]} />
                <P>ShiFt processes End User data as a service provider/data processor on behalf of Clients. Clients are the data controllers with respect to End User data and are responsible for ensuring lawful bases for processing, including obtaining required consents under TCPA and applicable state laws.</P>
              </SubSection>
              <SubSection title="1.4 Information from Third Parties">
                <BulletList items={[
                  "Integration partners: if you connect the Platform to third-party services (JobNimbus, AccuLynx, Google LSA, etc.), we may receive data from those services consistent with their privacy policies and your authorization",
                  "Referral data: if you are referred through the ShiFt Circle referral program, we receive your contact information from the referring Client",
                  "Publicly available data: business information from public directories, licensing databases, and similar sources",
                ]} />
              </SubSection>
            </Section>

            <Section number="2" title="How We Use Information">
              <SubSection title="2.1 To Provide and Operate the Platform">
                <BulletList items={[
                  "Processing and routing inbound leads on behalf of Clients",
                  "Delivering AI-powered call answering, SMS follow-up, and appointment booking services",
                  "Calculating and reporting RevShare amounts owed under Client agreements",
                  "Operating the Revenue Intelligence Dashboard and performance reporting features",
                  "Executing storm-season activation protocols and time-sensitive lead capture campaigns",
                  "Managing the ShiFt Circle referral program",
                ]} />
              </SubSection>
              <SubSection title="2.2 For Account and Relationship Management">
                <BulletList items={[
                  "Creating and managing your account",
                  "Processing payments, including RevShare revenue reconciliation and quarterly true-up",
                  "Sending service notifications, billing statements, and account alerts",
                  "Providing customer support",
                  "Communicating about Platform updates, new features, and service changes",
                ]} />
              </SubSection>
              <SubSection title="2.3 For Analytics and Improvement">
                <BulletList items={[
                  "Analyzing Platform usage and performance to improve features and functionality",
                  "Conducting research to develop new products and services",
                  "Generating aggregated, de-identified industry benchmarks and reports (which do not identify individual clients or end users)",
                  "Training and improving AI models that power the Platform (using de-identified or aggregated data)",
                ]} />
              </SubSection>
              <SubSection title="2.4 For Marketing and Communications">
                <BulletList items={[
                  "Sending marketing communications about the Platform and related services (subject to your opt-out rights)",
                  "Conducting case study development with Client consent",
                  "Operating the ShiFt Roofing Revenue Collective community platform",
                ]} />
              </SubSection>
              <SubSection title="2.5 For Legal and Compliance Purposes">
                <BulletList items={[
                  "Complying with applicable laws, regulations, and legal processes",
                  "Enforcing our Terms of Service and other agreements",
                  "Protecting the rights, property, and safety of ShiFt, our Clients, End Users, and others",
                  "Detecting, preventing, and addressing fraud, security incidents, and technical issues",
                ]} />
              </SubSection>
            </Section>

            <Section number="3" title="TCPA and Automated Communication Compliance">
              <P>The ShiFt NeuralOS™ Platform uses artificial intelligence to conduct automated telephone calls, deliver pre-recorded or artificial voice messages, and send automated SMS/text messages to End Users on behalf of Clients. These activities are subject to the Telephone Consumer Protection Act (TCPA), 47 U.S.C. § 227, and implementing regulations.</P>
              <SubSection title="3.1 Client Responsibilities">
                <P className="font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>CLIENTS ARE SOLELY RESPONSIBLE for:</P>
                <BulletList items={[
                  "Obtaining prior express written consent from End Users before the Platform makes automated calls or sends automated SMS messages on the Client's behalf, to the extent required by TCPA",
                  "Maintaining records of all required consents",
                  "Honoring all opt-out requests and communicating them to ShiFt promptly",
                  "Ensuring the Platform is not used to contact individuals on the National Do Not Call Registry without proper authorization",
                  "Complying with all applicable federal and state telemarketing laws, including state-specific requirements in California, Florida, Texas, and other states where Client operates",
                ]} />
              </SubSection>
              <SubSection title="3.2 ShiFt Platform Commitments">
                <BulletList items={[
                  "The Platform includes opt-out functionality and will honor STOP commands and similar opt-out requests in automated SMS communications",
                  "The Platform provides Client-configurable call and message timing controls to assist compliance",
                  "ShiFt provides Clients with tools to maintain consent records within the Platform",
                ]} />
              </SubSection>
              <SubSection title="3.3 Indemnification">
                <P>Clients agree to indemnify and hold harmless ShiFt from any claims, damages, fines, or penalties arising from Client's failure to comply with TCPA or other telemarketing laws. See the Terms of Service for complete indemnification provisions.</P>
              </SubSection>
            </Section>

            <Section number="4" title="How We Share Information">
              <SubSection title="4.1 With Service Providers">
                <P>We share information with third-party vendors and service providers who perform services on our behalf, including:</P>
                <BulletList items={[
                  "Cloud hosting and infrastructure providers",
                  "Payment processing companies",
                  "AI and machine learning infrastructure providers",
                  "Telephony and SMS service providers",
                  "Analytics and monitoring services",
                  "Email delivery services",
                  "Customer support platforms",
                ]} />
                <P>All service providers are contractually required to process information only as directed by ShiFt and in compliance with this Privacy Policy and applicable law.</P>
              </SubSection>
              <SubSection title="4.2 With Integration Partners">
                <P>If you authorize integrations with third-party platforms (such as JobNimbus, AccuLynx, Google, or others), we will share relevant data with those platforms consistent with your authorization and their privacy policies.</P>
              </SubSection>
              <SubSection title="4.3 In the ShiFt Circle Referral Network">
                <P>Referral program participation is voluntary. When you participate in the ShiFt Circle, referring Clients may learn that a prospect they referred has signed up as a Client. We do not share financial details of other Clients' accounts.</P>
              </SubSection>
              <SubSection title="4.4 For Legal Reasons">
                <BulletList items={[
                  "In response to a subpoena, court order, or other legal process",
                  "To comply with applicable laws or regulations",
                  "To protect the rights or property of ShiFt",
                  "To prevent fraud or illegal activity",
                  "In connection with a government investigation",
                ]} />
              </SubSection>
              <SubSection title="4.5 Business Transfers">
                <P>If ShiFt is involved in a merger, acquisition, reorganization, or sale of assets, information may be transferred as part of that transaction. We will notify Clients of any such change in ownership or control and describe any choices you may have.</P>
              </SubSection>
              <SubSection title="4.6 With Your Consent">
                <P>We may share information for other purposes with your explicit consent, such as featuring your business as a case study (with your written approval).</P>
              </SubSection>
              <SubSection title="4.7 Aggregate and De-Identified Data">
                <P>We may share aggregated or de-identified information that cannot reasonably be used to identify you, including industry benchmarks, market statistics, and performance data.</P>
              </SubSection>
            </Section>

            <Section number="5" title="Data Retention">
              <P>We retain information for as long as necessary to provide the Platform, comply with our legal obligations, resolve disputes, and enforce our agreements.</P>
              <P>Upon account termination, we will delete or de-identify personal information within 90 days, except where retention is required by law or for legitimate business purposes such as resolving disputes or enforcing agreements.</P>
            </Section>

            <Section number="6" title="Data Security">
              <P>We implement industry-standard technical, administrative, and physical safeguards to protect information against unauthorized access, alteration, disclosure, or destruction, including:</P>
              <BulletList items={[
                "Encryption of data in transit using TLS 1.2 or higher",
                "Encryption of data at rest using AES-256 or equivalent",
                "Access controls and authentication requirements for Platform personnel",
                "Regular security assessments and penetration testing",
                "Incident response procedures",
                "Employee security training",
              ]} />
              <P>No method of data transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. In the event of a data breach affecting your information, we will notify you as required by applicable law.</P>
            </Section>

            <Section number="7" title="Your Privacy Rights">
              <SubSection title="7.1 Rights for All Users">
                <BulletList items={[
                  "Access the personal information we hold about you",
                  "Correct inaccurate or incomplete information",
                  "Request deletion of your personal information (subject to legal retention obligations)",
                  "Opt out of marketing communications",
                  "Receive a copy of your information in a portable format",
                ]} />
              </SubSection>
              <SubSection title="7.2 California Residents (CCPA/CPRA)">
                <P>California residents have the following additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):</P>
                <BulletList items={[
                  "Right to Know: You may request disclosure of the categories and specific pieces of personal information we have collected about you, the categories of sources, our business purpose for collecting it, and the categories of third parties with whom we share it",
                  "Right to Delete: You may request deletion of personal information we collected from you, subject to certain exceptions",
                  "Right to Correct: You may request that we correct inaccurate personal information",
                  "Right to Opt-Out of Sale/Sharing: We do not sell personal information as defined by CCPA. We do not share personal information for cross-context behavioral advertising",
                  "Right to Limit Use of Sensitive Personal Information: To the extent we process sensitive personal information, you may request that we limit its use",
                  "Right to Non-Discrimination: You will not receive discriminatory treatment for exercising your CCPA rights",
                ]} />
                <P>To exercise California rights, submit a verifiable request by emailing <a href="mailto:privacy@shiftnow.io" className="hover:text-white transition-colors" style={{ color: "#F54A48" }}>privacy@shiftnow.io</a> or calling our toll-free number. We will respond within 45 days (extendable by an additional 45 days with notice).</P>
              </SubSection>
              <SubSection title="7.3 Other State Privacy Rights">
                <P>Residents of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Texas (TDPSA), Florida (FDBR), and other states with comprehensive privacy laws have rights similar to those described in Section 7.2. We will honor such rights as required by applicable law. Contact us at <a href="mailto:privacy@shiftnow.io" className="hover:text-white transition-colors" style={{ color: "#F54A48" }}>privacy@shiftnow.io</a> to exercise your rights.</P>
              </SubSection>
              <SubSection title="7.4 How to Exercise Your Rights">
                <P>Submit privacy requests to:</P>
                <BulletList items={[
                  "Email: privacy@shiftnow.io",
                  "Mail: ShiFt NeuralOS™, Attn: Privacy Officer, 12460 Crabapple Road, Ste 202-522, Alpharetta, GA 30004",
                ]} />
                <P>We may need to verify your identity before processing your request. We will not discriminate against you for exercising your privacy rights.</P>
              </SubSection>
            </Section>

            <Section number="8" title="Cookies and Tracking Technologies">
              <P>We use cookies and similar tracking technologies as described in our Cookie Policy, which is incorporated herein by reference. The Cookie Policy is available at ShiFtNow.io/cookie-policy.</P>
            </Section>

            <Section number="9" title="Children's Privacy">
              <P>The Platform is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child under 18, we will promptly delete such information. If you believe we may have collected information from a child under 18, contact us at <a href="mailto:privacy@shiftnow.io" className="hover:text-white transition-colors" style={{ color: "#F54A48" }}>privacy@shiftnow.io</a>.</P>
            </Section>

            <Section number="10" title="Third-Party Links and Services">
              <P>The Platform may contain links to or integrate with third-party websites and services. These third parties operate under their own privacy policies. We are not responsible for the privacy practices of third-party sites. We encourage you to review the privacy policies of any third-party services you access through the Platform.</P>
            </Section>

            <Section number="11" title="International Data Transfers">
              <P>ShiFt is based in the United States, and the Platform is intended for use within the United States. If you access the Platform from outside the United States, your information may be transferred to, stored in, and processed in the United States, where privacy laws may differ from those in your jurisdiction. By using the Platform, you consent to such transfer and processing.</P>
            </Section>

            <Section number="12" title="Changes to This Privacy Policy">
              <P>We may update this Privacy Policy from time to time. We will notify Clients of material changes by posting the updated policy on the Platform and sending email notice to the Client's registered email address at least 30 days before the effective date of changes (except for changes required by law, which may be effective immediately). Continued use of the Platform after the effective date constitutes acceptance of the updated Privacy Policy.</P>
            </Section>

            <Section number="13" title="Contact Information">
              <P>For privacy-related questions, requests, or concerns, contact us:</P>
              <BulletList items={[
                "Email: privacy@shiftnow.io",
                "Mail: ShiFt NeuralOS™, Attn: Privacy Officer, 12460 Crabapple Road, Ste 202-522, Alpharetta, GA 30004",
                "Website: ShiFtNow.io",
              ]} />
            </Section>

            {/* Footer note */}
            <div className="mt-10 pt-8 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                ShiFt NeuralOS™ — Privacy Policy — Effective March 15, 2026
              </p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}