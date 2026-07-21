"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats, achievements, certifications } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Trophy, Award } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-gradient font-display text-4xl font-bold sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="By the Numbers" title="Impact & achievements" />

        <div className="mb-20 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-xs text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2 text-secondary">
                <Trophy size={18} />
                <h3 className="font-display text-lg font-semibold text-white">
                  National Competitions
                </h3>
              </div>
              <div className="space-y-4">
                {achievements.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <span className="font-medium text-white">{a.title}</span>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs text-secondary">
                      {a.detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2 text-secondary">
                <Award size={18} />
                <h3 className="font-display text-lg font-semibold text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {certifications.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <p className="font-medium text-white">{c.title}</p>
                    <p className="text-xs text-muted">{c.issuer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
