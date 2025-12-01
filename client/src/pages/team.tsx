import { JungleLayout } from "@/components/JungleLayout";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teams = [
  {
    name: "Open Innovation",
    members: [
      { name: "Nayan Mathur", year: "2nd Year", image: "" },
      { name: "Pradyusha Chouhan", year: "1st Year", image: "" },
    ],
  },
  {
    name: "Event Coordinators",
    members: [
      { name: "Aushika Jain", year: "1st Year", image: "" },
      { name: "Manitarya Shivhare", year: "1st Year", image: "" },
      { name: "Kashvi Agrawal", year: "1st Year", image: "" },
      { name: "Mitanshu Singhal", year: "2nd Year", image: "" },
    ],
  },
  {
    name: "Sponsor Team",
    members: [
      { name: "Vidhi Ramnani", year: "3rd Year", image: "" },
      { name: "Suvanish Shringi", year: "2nd Year", image: "" },
      { name: "Prachi Garg", year: "1st Year", image: "" },
      { name: "Preksha Jain", year: "1st Year", image: "" },
      { name: "Asmi Jain", year: "1st Year", image: "" },
      { name: "Ravi", year: "1st Year", image: "" },
      { name: "Kritika Jain", year: "1st Year", image: "" },
    ],
  },
  {
    name: "Web Team",
    members: [
      { name: "Nayan Mathur", year: "2nd Year", image: "" },
      { name: "Pradyusha Chouhan", year: "1st Year", image: "" },
      { name: "Parth Shrivastava", year: "1st Year", image: "" },
      { name: "Gaurav Panwar", year: "1st Year", image: "" },
    ],
  },
  {
    name: "Graphic Team",
    members: [
      { name: "Nisha Lekhwani", year: "2nd Year", image: "" },
      { name: "Chetali Kumawat", year: "1st Year", image: "" },
      { name: "Divya Chitlangiya", year: "1st Year", image: "" },
      { name: "Sublamshi", year: "1st Year", image: "" },
      { name: "Kshitiz", year: "1st Year", image: "" },
    ],
  },
  {
    name: "Social Media",
    members: [
      { name: "Prateek", year: "2nd Year", image: "" },
      { name: "Mudit Jain", year: "1st Year", image: "" },
      { name: "Neeraj", year: "1st Year", image: "" },
    ],
  },
  {
    name: "Event Legacy",
    members: [
      { name: "Lucky Pandey", year: "2nd Year", role: "Captain", image: "" },
      { name: "Prachi Garg", year: "1st Year", role: "Vice Captain", image: "" },
      { name: "Harsh Dambwar", year: "1st Year", role: "Vice Captain", image: "" },
    ],
    subTeams: [
      {
        name: "Robo War",
        members: [
          { name: "Aashish Jangid", year: "2nd Year", image: "" },
          { name: "Manan Gupta", year: "2nd Year", image: "" },
          { name: "Harsh Dambwar", year: "1st Year", image: "" },
        ],
      },
      {
        name: "R/C Car",
        members: [
          { name: "Jatin Bansal", year: "2nd Year", image: "" },
          { name: "Devashish Santpal", year: "1st Year", image: "" },
        ],
      },
      {
        name: "Robo Soccer",
        members: [
          { name: "Manan Gupta", year: "2nd Year", image: "" },
          { name: "Vineet Sharma", year: "1st Year", image: "" },
        ],
      },
      {
        name: "Cozmo Clench",
        members: [
          { name: "Rudrakshi Kilede", year: "2nd Year", image: "" },
          { name: "Aniket Sharma", year: "1st Year", image: "" },
        ],
      },
      {
        name: "Line Follower",
        members: [
          { name: "Imsa Khan", year: "2nd Year", image: "" },
          { name: "Kashvi Agrawal", year: "1st Year", image: "" },
        ],
      },
    ],
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TeamSection({ team }: { team: (typeof teams)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-black/60 border border-emerald-900/50 p-6 rounded-lg backdrop-blur-sm"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between hover:text-primary transition-colors"
      >
        <h3 className="text-2xl font-heading text-amber-400">{team.name}</h3>
        <ChevronDown className={`w-6 h-6 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-6 space-y-4"
        >
          {/* Main Team Members */}
          {team.members && team.members.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {team.members.map((member, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-black/40 rounded border border-emerald-900/30 hover:border-primary/50 transition-all">
                  <Avatar className="w-16 h-16 border-2 border-primary/50 flex-shrink-0">
                    <AvatarImage src={member.image} />
                    <AvatarFallback className="bg-emerald-900/50 text-primary font-heading text-sm">{getInitials(member.name)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-emerald-200 font-heading">{member.name}</p>
                    {member.role && <p className="text-primary text-xs font-heading uppercase">{member.role}</p>}
                    <p className="text-emerald-400/60 text-xs">{member.year}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sub Teams */}
          {team.subTeams && team.subTeams.length > 0 && (
            <div className="mt-6 space-y-6 border-t border-emerald-900/50 pt-4">
              {team.subTeams.map((subTeam, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="text-lg font-heading text-primary mb-4">{subTeam.name}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-4">
                    {subTeam.members.map((member, j) => (
                      <div key={j} className="flex items-center gap-3 p-3 bg-emerald-900/10 rounded border border-emerald-900/30 hover:border-primary/30 transition-all">
                        <Avatar className="w-12 h-12 border border-primary/30 flex-shrink-0">
                          <AvatarImage src={member.image} />
                          <AvatarFallback className="bg-emerald-900/50 text-primary font-heading text-xs">{getInitials(member.name)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-emerald-200 text-sm font-heading truncate">{member.name}</p>
                          <p className="text-emerald-400/60 text-xs">{member.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Team() {
  return (
    <JungleLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading text-primary text-glow mb-4 text-center">THE GUARDIANS</h1>
        <p className="text-center text-emerald-400 mb-12 tracking-wider">Click to expand team details • Add member photos via image URLs</p>

        <div className="space-y-6 pb-12">
          {teams.map((team, i) => (
            <TeamSection key={i} team={team} />
          ))}
        </div>
      </div>
    </JungleLayout>
  );
}
