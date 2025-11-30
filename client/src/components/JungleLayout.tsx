import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import jungleBg from "@assets/Gemini_Generated_Image_ilvw3tilvw3tilvw_1764520493501.png";
import logoImg from "@assets/WhatsApp Image 2025-11-30 at 21.10.32_9866522e_1764520541284.jpg";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/register", label: "Enter The Game" },
    { href: "/events", label: "Levels" },
    { href: "/about", label: "The Legend" },
    { href: "/team", label: "Guardians" },
    { href: "/contact", label: "Signal" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
      <div className="text-2xl md:text-3xl font-heading text-primary tracking-widest text-glow cursor-pointer flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <img src={logoImg} alt="AADHAR Logo" className="h-12 w-12 rounded-full border-2 border-primary object-cover" />
          <span>AADHAR</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <span className={`font-heading tracking-wider text-sm transition-colors hover:text-primary hover:text-glow cursor-pointer ${location === link.href ? "text-primary text-glow border-b border-primary" : "text-foreground/80"}`}>
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden text-primary cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-b border-primary/30 p-6 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                className={`font-heading text-lg cursor-pointer ${location === link.href ? "text-primary" : "text-foreground/70"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export function JungleLayout({ children, backgroundImage }: { children: React.ReactNode; backgroundImage?: string }) {
  // Leaf generation logic
  const [leaves, setLeaves] = useState<{ id: number; left: string; delay: string }[]>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-foreground font-body selection:bg-primary selection:text-black">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 md:opacity-60"
        style={{ backgroundImage: `url(${backgroundImage || jungleBg})` }}
      />
      <div className="fixed inset-0 z-0 bg-black/50" /> {/* Overlay darkening */}

      {/* Fog Animation */}
      <div className="fog-layer" />

      {/* Vines */}
      <div className="vine-container" />

      {/* Falling Leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf"
          style={{
            left: leaf.left,
            animation: `falling-leaf 15s linear infinite`,
            animationDelay: leaf.delay,
          }}
        />
      ))}

      <Navigation />

      {/* Content */}
      <main className="relative z-10 pt-24 px-4 md:px-8 max-w-7xl mx-auto min-h-[calc(100vh-100px)] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col"
        >
          {children}
        </motion.div>
      </main>
      
      {/* Sound Toggle (Visual Only) */}
      <div className="fixed bottom-4 right-4 z-50 text-xs text-primary/50 font-mono">
        AUDIO [OFF]
      </div>
    </div>
  );
}
