import React, { useState } from "react";
import OnboardingLayout from "../components/onboarding/OnboardingLayout";
import StepWelcome from "../components/onboarding/StepWelcome";
import StepCRM from "../components/onboarding/StepCRM";
import StepKPIs from "../components/onboarding/StepKPIs";
import StepAIParameters from "../components/onboarding/StepAIParameters";
import StepGoLive from "../components/onboarding/StepGoLive";

const INITIAL_DATA = {
  // CRM
  crm: "",
  crmApiKey: "",
  crmAccountId: "",
  // KPIs
  monthlyLeads: "",
  avgTicket: "",
  monthlyRevenueGoal: "",
  primaryMetric: "",
  // AI
  responseWindow: "instant",
  aiTone: "professional",
  afterHours: "full",
  inboundChannels: ["phone", "sms"],
  stormMode: "auto",
  qualificationMessage: "",
};

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(INITIAL_DATA);

  const onChange = (key, value) => setData(prev => ({ ...prev, [key]: value }));
  const next = () => setStep(s => Math.min(s + 1, 5));
  const back = () => setStep(s => Math.max(s - 1, 1));

  const stepProps = { data, onChange, onNext: next, onBack: back };

  return (
    <OnboardingLayout step={step}>
      {step === 1 && <StepWelcome {...stepProps} />}
      {step === 2 && <StepCRM {...stepProps} />}
      {step === 3 && <StepKPIs {...stepProps} />}
      {step === 4 && <StepAIParameters {...stepProps} />}
      {step === 5 && <StepGoLive data={data} onBack={back} />}
    </OnboardingLayout>
  );
}