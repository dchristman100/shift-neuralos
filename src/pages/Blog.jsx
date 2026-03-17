import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { ArrowRight } from "lucide-react";
import posts from "../content/blog-posts.json";

const CATEGORY_COLORS = {
  "Strategy":        "#F54A48",
  "AI & Automation": "#FA982F",
  "Case Study":      "#48BB78",
  "Lead Gen":        "#F54A48",
  "Operations":      "#FA982F",
};

const ALL = "All";
const categories = [ALL, ...Array.from(new Set(posts.map(p => p.category)))];

function FeaturedCard({ post }) {
  const color = post.color || CATEGORY_COLORS[post.category] || "#F54A48";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative rounded-2xl p-10 mb-12 cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ background: "rgba(245,74,72,0.06)", border: "1px solid rgba(245,74,72,0.2)" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(135deg,#F54A48,#FA982F)", borderRadius: "16px 16px 0 0" }} />
      <div className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color }}>
        Featured · {post.date}
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
        {post.title}
      </h2>
      <p className="font-body text-lg mb-6" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "680px" }}>
        {post.excerpt}
      </p>
      <div className="flex items-center gap-3" style={{ color }}>
        <span className="font-mono text-sm font-semibold">Read Article</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
}

function PostCard({ post, index }) {
  const color = post.color || CATEGORY_COLORS[post.category] || "#F54A48";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div style={{ height: "3px", background: color, borderRadius: "8px", marginBottom: "20px", width: "40px" }} />
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs uppercase tracking-wider px-2 py-1 rounded"
          style={{ background: `${color}18`, color, border: `1px solid ${color}33` }}>
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
        <div className="flex items-center gap-2" style={{ color }}>
          <span className="font-mono text-xs font-semibold">Read</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const featuredPost = posts.find(p => p.featured);
  const gridPosts = posts.filter(p => !p.featured && (activeCategory === ALL || p.category === activeCategory));

  return (
    <main className="pt-24">
      <SectionWrapper>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
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

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map(cat => {
            const active = activeCategory === cat;
            const color = cat === ALL ? "#F54A48" : (CATEGORY_COLORS[cat] || "#F54A48");
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  background: active ? color : "rgba(255,255,255,0.05)",
                  color: active ? "#fff" : "rgba(255,255,255,0.5)",
                  border: `1px solid ${active ? color : "rgba(255,255,255,0.1)"}`,
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Featured post — only shown when "All" is active */}
        {activeCategory === ALL && featuredPost && <FeaturedCard post={featuredPost} />}

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {gridPosts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {gridPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>No posts in this category yet.</p>
          </div>
        )}
      </SectionWrapper>
    </main>
  );
}