import { JungleLayout } from "@/components/JungleLayout";
import { CountdownTimer } from "@/components/CountdownTimer";

export default function About() {
  return (
    <JungleLayout>
      <div className="max-w-4xl mx-auto py-12 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-heading text-primary text-glow mb-12 text-center">THE LEGEND OF AADHAR</h1>
        
        <CountdownTimer />
        
        <div className="space-y-8 bg-black/60 p-8 border-l-4 border-primary backdrop-blur-sm">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading text-amber-400 mb-4">ABOUT AADHAR</h2>
            <p className="text-lg text-emerald-200 leading-relaxed">
              The Zircon Club launched AADHAR with the goal of enhancing each person's entire talents. Every talent needs a platform, and AADHAR is that opportunity. What began in 2007 as a vision to foster cooperation and teamwork among Poornima students has grown into one of the most celebrated annual initiatives on campus.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading text-amber-400 mb-4">OUR MISSION</h2>
            <p className="text-lg text-emerald-200 leading-relaxed">
              AADHAR provides a platform where every student can showcase their skills and talents. We give first-year students the opportunity to implement their academic knowledge in real-world settings. Through the dedication and commitment of the Zircon Club, AADHAR has become an essential festival for Poornima students to compete, collaborate, and celebrate their abilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 border border-emerald-800 bg-black/40">
              <h3 className="text-2xl font-heading text-primary mb-2">EXPLORE</h3>
              <p className="text-sm text-emerald-300/70">Discover new technologies in our workshops.</p>
            </div>
            <div className="p-6 border border-emerald-800 bg-black/40">
              <h3 className="text-2xl font-heading text-primary mb-2">SURVIVE</h3>
              <p className="text-sm text-emerald-300/70">Outlast opponents in competitive gaming.</p>
            </div>
            <div className="p-6 border border-emerald-800 bg-black/40">
              <h3 className="text-2xl font-heading text-primary mb-2">CONQUER</h3>
              <p className="text-sm text-emerald-300/70">Win grand prizes in the main hackathon.</p>
            </div>
          </div>
        </div>
      </div>
    </JungleLayout>
  );
}
