import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const targetDate = new Date("2025-02-01").getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-12 mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-heading text-primary text-glow mb-12 text-center">AADHAR '14 - THE GAME BEGINS IN</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
        {[
          { label: "DAYS", value: time.days },
          { label: "HOURS", value: time.hours },
          { label: "MINUTES", value: time.minutes },
          { label: "SECONDS", value: time.seconds },
        ].map((unit) => (
          <motion.div
            key={unit.label}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-emerald-900/50 to-black/50 border-2 border-primary/50 p-6 md:p-8 text-center backdrop-blur-sm hover:border-primary transition-all duration-300"
          >
            <div className="text-4xl md:text-6xl font-heading text-primary mb-2 tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm text-emerald-300 uppercase tracking-wider font-heading">{unit.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
