import { JungleLayout } from "@/components/JungleLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/CountdownTimer";

const events = [
  { id: 1, title: "CODE SAFARI", type: "Hackathon", desc: "24-hour survival coding challenge." },
  { id: 2, title: "BUG HUNT", type: "Debugging", desc: "Find the venomous bugs in code." },
  { id: 3, title: "TEMPLE RUN", type: "Robotics", desc: "Navigate your bot through the maze." },
  { id: 4, title: "JUNGLE BEATS", type: "Cultural", desc: "Rhythm and dance competition." },
  { id: 5, title: "SURVIVOR", type: "Gaming", desc: "Battle Royale tournament." },
  { id: 6, title: "MYSTIC MINDS", type: "Quiz", desc: "Test your tech knowledge." },
];

export default function Home() {
  return (
    <JungleLayout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center py-12 mb-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-primary text-lg md:text-2xl tracking-[0.5em] mb-4 opacity-80">POORNIMA COLLEGE PRESENTS</h2>
          <h1 className="text-6xl md:text-9xl font-heading text-glow leading-tight bg-clip-text text-transparent bg-gradient-to-b from-amber-200 to-amber-600" 
              style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            AADHAR
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-emerald-100/80 max-w-2xl mx-auto font-body tracking-wide">
            THE JUNGLE IS CALLING. DO YOU DARE TO ENTER?
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 mt-12"
        >
          <Link href="/register">
            <Button 
              size="lg" 
              className="bg-primary text-black font-heading text-lg px-12 py-8 rounded-none border-2 border-primary hover:bg-transparent hover:text-primary hover:text-glow transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]"
            >
              ENTER THE GAME
            </Button>
          </Link>
          
          <Link href="/about">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-emerald-500 text-emerald-400 font-heading text-lg px-12 py-8 rounded-none hover:bg-emerald-900/30 hover:text-emerald-200 transition-all duration-500"
            >
              READ THE RULES
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* AADHAR '14 Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-20 py-12 border-t border-b border-emerald-900/50"
      >
        <h2 className="text-4xl md:text-6xl font-heading text-primary text-glow mb-8 text-center">AADHAR '14</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-black/60 backdrop-blur-sm p-8 border border-emerald-900/50">
            <h3 className="text-2xl font-heading text-amber-400 mb-4">THE LEGEND</h3>
            <p className="text-emerald-200 leading-relaxed">
              AADHAR stands as the beacon of innovation at Poornima College. Since its inception, it has brought together the brightest minds to compete, collaborate, and celebrate technology. This year, we venture deeper into the jungle with new challenges and greater rewards.
            </p>
          </div>
          <div className="bg-black/60 backdrop-blur-sm p-8 border border-emerald-900/50">
            <h3 className="text-2xl font-heading text-amber-400 mb-4">THE CHALLENGE</h3>
            <p className="text-emerald-200 leading-relaxed">
              Two days. Six levels. Infinite possibilities. From coding marathons to creative competitions, AADHAR '14 tests every skill. Whether you're a seasoned warrior or a rookie adventurer, there's a level waiting for you. Will you answer the call?
            </p>
          </div>
        </div>
      </motion.section>

      {/* Events Flashcards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-20 py-12"
      >
        <h2 className="text-4xl md:text-6xl font-heading text-primary text-glow mb-12 text-center">THE LEVELS AWAIT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-64 cursor-pointer overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-black/80 group-hover:from-primary/30 group-hover:to-black/60 transition-all duration-300" />
              <div className="absolute inset-0 border-2 border-primary/30 group-hover:border-primary transition-all duration-300" />
              <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-heading mb-2">{event.type}</p>
                  <h3 className="text-2xl font-heading text-amber-300 group-hover:text-glow transition-all">{event.title}</h3>
                </div>
                <p className="text-emerald-200 text-sm">{event.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </JungleLayout>
  );
}
