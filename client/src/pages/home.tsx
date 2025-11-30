import { JungleLayout } from "@/components/JungleLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <JungleLayout>
      <div className="flex flex-col items-center justify-center flex-1 text-center py-12">
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
    </JungleLayout>
  );
}
