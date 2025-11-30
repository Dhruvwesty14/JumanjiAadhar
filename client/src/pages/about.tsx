import { JungleLayout } from "@/components/JungleLayout";

export default function About() {
  return (
    <JungleLayout>
      <div className="max-w-4xl mx-auto py-12 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-heading text-primary text-glow mb-12 text-center">THE LEGEND OF AADHAR</h1>
        
        <div className="space-y-8 bg-black/60 p-8 border-l-4 border-primary backdrop-blur-sm">
          <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
            Deep within the digital jungle of Poornima College lies an ancient artifact... The AADHAR. 
            It is said that only the bravest tech-warriors can unlock its secrets.
          </p>
          
          <p className="text-lg text-emerald-200/80 leading-relaxed">
            For two days, the campus transforms into a wilderness of code, creativity, and competition. 
            Navigate through treacherous hackathons, survive the quiz pits, and conquer the coding challenges to 
            prove your worth.
          </p>
          
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
