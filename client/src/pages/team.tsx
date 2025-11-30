import { JungleLayout } from "@/components/JungleLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  { name: "Dr. Alan Grant", role: "Event Coordinator", initial: "AG" },
  { name: "Ellie Sattler", role: "Tech Lead", initial: "ES" },
  { name: "Ian Malcolm", role: "Design Head", initial: "IM" },
  { name: "Sarah Harding", role: "Marketing", initial: "SH" },
];

export default function Team() {
  return (
    <JungleLayout>
      <h1 className="text-5xl font-heading text-primary text-glow mb-12 text-center">THE GUARDIANS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="w-48 h-48 rounded-full border-4 border-primary/30 group-hover:border-primary group-hover:box-glow transition-all duration-500 overflow-hidden mb-6 relative bg-black">
              <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors"></div>
              <Avatar className="w-full h-full rounded-none">
                 <AvatarFallback className="bg-transparent text-4xl font-heading text-primary">{member.initial}</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-heading text-emerald-100 group-hover:text-primary transition-colors">{member.name}</h3>
            <p className="text-emerald-400/60 uppercase tracking-widest text-sm mt-2">{member.role}</p>
          </div>
        ))}
      </div>
    </JungleLayout>
  );
}
