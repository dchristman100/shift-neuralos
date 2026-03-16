import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

const posts = [
  {
    category: "Strategy",
    date: "March 10, 2026",
    title: "Why Roofing Contractors Lose $47K in a Single Storm Season",
    excerpt: "When 200 leads flood in over two weeks, manual follow-up collapses. We break down exactly where the money goes — and how to stop the bleed.",
    readTime: "5 min read",
    color: "#F54A48",
  },
  {
    category: "AI & Automation",
    date: "February 28, 2026",
    title: "The 30-Second Rule: Why Response Speed Is Your Biggest Revenue Lever",
    excerpt: "78% of homeowners choose the first contractor to respond. Here's the data behind the window, and what it means for your operation.",
    readTime: "4 min read",
    color: "#FA982F",
  },
  {
    category: "Case Study",
    date: "February 14, 2026",
    title: "From $750K to $7M: How Titan Roofing Dominated Dallas",
    excerpt: "Jake Torres wasn't outworking his competitors. He was outsmarting them. A deep-dive into 6 years of compounding AI-driven growth.",
    readTime: "8 min read",
    color: "#48BB78",
  },
  {
    category: "Lead Gen",
    date: "January 30, 2026",
    title: "Google Local Service Ads for Roofers: A Complete 2026 Guide",
    excerpt: "LSAs are the highest-intent leads available. Most contractors waste 40% of their budget on unqualified clicks. Here's how to fix that.",
    readTime: "7 min read",
    color: "#F54A48",
  },
  {
    category: "Operations",
    date: "January 18, 2026",
    title: "The Empty Pipeline Problem — And the Only Real Fix",
    excerpt: "Referrals dry up. Agencies overpromise. Seasonal swings kill cash flow. The only way out is a system that generates leads on demand.",
    readTime: "6 min read",
    color: "#FA982F",
  },
  {
    category: "AI & Automation",
    date: "January 5, 2026",
    title: "What Roofing Contractors Get Wrong About AI",
    excerpt: "It's not a chatbot. It's not a gimmick. AI-powered revenue systems are infrastructure — and the contractors using them are pulling away.",
    readTime: "5 min read",
    color: "#F54A48",
  },
];

export default function Blog() {
  return (
    <main className="pt-24">
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 font-mono text-xs font-semibold uppercase tracking-wider"
            style={{ background: "rgba(245,74,72,0.12)", color: "#F54A48", border: "1px solid rgba(245,74,72,0.3)" }}>
            ShiFt Blog
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Revenue Intelligence<br />
            <span className="shift-gradient-text">for Roofing Contractors</span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Strategy, AI, and real-world results from the field.
          </p>
        </motion.div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-10 mb-12 cursor-pointer transition-all duration-300 hover:-translate-y-1"
          style={{ background: "rgba(245,74,72,0.06)", border: "1px solid rgba(245,74,72,0.2)" }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(135deg,#F54A48,#FA982F)", borderRadius: "16px 16px 0 0" }} />
          <div className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: "#F54A48" }}>
            Featured · {posts[0].date}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {posts[0].title}
          </h2>
          <p className="font-body text-lg mb-6" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "680px" }}>
            {posts[0].excerpt}
          </p>
          <div className="flex items-center gap-3" style={{ color: "#F54A48" }}>
            <span className="font-mono text-sm font-semibold">Read Article</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div style={{ height: "3px", background: post.color, borderRadius: "8px", marginBottom: "20px", width: "40px" }} />
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider px-2 py-1 rounded"
                  style={{ background: `${post.color}18`, color: post.color, border: `1px solid ${post.color}33` }}>
                  {post.category}
                </span>
                <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{post.readTime}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug flex-1">
                {post.title}
              </h3>
              <p className="font-body text-sm mb-5" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{post.date}</span>
                <div className="flex items-center gap-2" style={{ color: post.color }}>
                  <span className="font-mono text-xs font-semibold">Read</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}