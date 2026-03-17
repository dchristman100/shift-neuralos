import { TrendingUp, DollarSign, Calendar, Users } from "lucide-react";

export const cases = [
  {
    id: 1,
    company: "Titan Roofing Services",
    location: "Dallas, TX",
    package: "Convert",
    color: "#F54A48",
    headline: "From $750K to $7M in 6 Years",
    size: "enterprise",       // $5M+
    growthMilestone: "10x",   // 10x+ revenue growth
    revenueStart: 750000,
    revenueEnd: 7000000,
    roiMultiple: 427,
    problem: "Missing 42% of inbound leads. No after-hours coverage. $47K lost in a single storm month.",
    result: "ShiFt implemented in 36 hours. Lead capture rate went from 58% to 98%. Revenue compounded to $7M+ by 2026.",
    stats: [
      { icon: DollarSign, value: "$7M+", label: "Annual Revenue" },
      { icon: TrendingUp, value: "427%", label: "ROI on ShiFt" },
      { icon: Calendar, value: "89%", label: "Show Rate" },
      { icon: Users, value: "3.2×", label: "More Appointments" },
    ],
    quote: "ShiFt didn't just fix our lead problem — it became the foundation of our entire growth strategy.",
    person: "Jake Torres, Owner",
    featured: true,
  },
  {
    id: 2,
    company: "Storm Pros Roofing",
    location: "Houston, TX",
    package: "Convert",
    color: "#FA982F",
    headline: "$72K Booked in 30 Days",
    size: "growth",           // $1M–$5M
    growthMilestone: "3x",    // 3x–5x revenue growth
    revenueStart: 800000,
    revenueEnd: 2400000,
    roiMultiple: 20,
    problem: "Paying $6,500/month for leads. Only 18 out of 120 qualified. Sales team burned out on junk.",
    result: "AI qualification eliminated tire-kickers before they hit the calendar. First 30 days: 340 conversations, 47 appointments, 9 jobs won.",
    stats: [
      { icon: DollarSign, value: "$72K", label: "Revenue in 30 days" },
      { icon: Users, value: "47", label: "Appointments Booked" },
      { icon: Calendar, value: "9", label: "Jobs Won" },
      { icon: TrendingUp, value: "20×", label: "Monthly ROI" },
    ],
    quote: "We were spending $6,500/month on leads. Only 18 out of 120 were actually qualified. ShiFt's AI filters out the garbage before it hits my team.",
    person: "Michael R., Owner",
    featured: false,
  },
  {
    id: 3,
    company: "Summit Roofing Group",
    location: "Denver, CO",
    package: "Attract + Convert",
    color: "#48BB78",
    headline: "Pipeline Filled Year-Round",
    size: "startup",          // Under $1M
    growthMilestone: "2x",    // 2x–3x revenue growth
    revenueStart: 420000,
    revenueEnd: 980000,
    roiMultiple: 12,
    problem: "Referral-dependent business. Pipeline dried up in off-season. No consistent lead generation.",
    result: "ShiFt Attract built a multi-channel lead engine. Combined with Convert's AI qualification, booked jobs in January exceeded the previous August peak.",
    stats: [
      { icon: TrendingUp, value: "3×", label: "Off-Season Revenue" },
      { icon: Calendar, value: "100%", label: "Lead Capture Rate" },
      { icon: DollarSign, value: "$38K", label: "Added Monthly Revenue" },
      { icon: Users, value: "0", label: "Extra Headcount Needed" },
    ],
    quote: "We stopped dreading winter. The pipeline keeps filling whether we're working or not.",
    person: "Sarah M., Operations Director",
    featured: false,
  },
  {
    id: 4,
    company: "Eagle Eye Roofing",
    location: "Phoenix, AZ",
    package: "Attract + Convert",
    color: "#63B3ED",
    headline: "Closed $1.2M Storm Season",
    size: "growth",
    growthMilestone: "5x",
    revenueStart: 600000,
    revenueEnd: 3000000,
    roiMultiple: 35,
    problem: "Storm season flooded them with leads but no system to work them fast enough. Competitors were booking the same homeowners first.",
    result: "ShiFt's storm trigger mode activated instantly. AI responded to 600+ leads in 48 hours, booking 94 appointments without adding a single employee.",
    stats: [
      { icon: DollarSign, value: "$1.2M", label: "Storm Season Revenue" },
      { icon: Users, value: "94", label: "Appointments in 48hrs" },
      { icon: TrendingUp, value: "35×", label: "Monthly ROI" },
      { icon: Calendar, value: "600+", label: "Leads Processed" },
    ],
    quote: "Property intelligence alone paid for the platform in the first month. We're closing neighborhoods, not just houses.",
    person: "David Martinez, CEO",
    featured: false,
  },
];

export const SIZE_FILTERS = [
  { key: "all", label: "All Sizes" },
  { key: "startup", label: "Under $1M" },
  { key: "growth", label: "$1M – $5M" },
  { key: "enterprise", label: "$5M+" },
];

export const GROWTH_FILTERS = [
  { key: "all", label: "All Growth" },
  { key: "2x", label: "2× – 3× Growth" },
  { key: "3x", label: "3× – 5× Growth" },
  { key: "5x", label: "5× – 9× Growth" },
  { key: "10x", label: "10× + Growth" },
];