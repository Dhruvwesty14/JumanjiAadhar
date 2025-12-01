import { JungleLayout } from "@/components/JungleLayout";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const teams = [
  {
    name: "Open Innovation",
    members: [
      { name: "Nayan Mathur", year: "2nd Year" },
      { name: "Pradyusha Chouhan", year: "1st Year" },
    ],
  },
  {
    name: "Event Coordinators",
    members: [
      { name: "Aushika Jain", year: "1st Year" },
      { name: "Manitarya Shivhare", year: "1st Year" },
      { name: "Kashvi Agrawal", year: "1st Year" },
      { name: "Mitanshu Singhal", year: "2nd Year" },
    ],
  },
  {
    name: "Sponsor Team",
    members: [
      { name: "Vidhi Ramnani", year: "3rd Year" },
      { name: "Suvanish Shringi", year: "2nd Year" },
      { name: "Prachi Garg", year: "1st Year" },
      { name: "Preksha Jain", year: "1st Year" },
      { name: "Asmi Jain", year: "1st Year" },
      { name: "Ravi", year: "1st Year" },
      { name: "Kritika Jain", year: "1st Year" },
    ],
  },
  {
    name: "Web Team",
    members: [
      { name: "Nayan Mathur", year: "2nd Year" },
      { name: "Pradyusha Chouhan", year: "1st Year" },
      { name: "Parth Shrivastava", year: "1st Year" },
      { name: "Gaurav Panwar", year: "1st Year" },
    ],
  },
  {
    name: "Graphic Team",
    members: [
      { name: "Nisha Lekhwani", year: "2nd Year" },
      { name: "Chetali Kumawat", year: "1st Year" },
      { name: "Divya Chitlangiya", year: "1st Year" },
      { name: "Sublamshi", year: "1st Year" },
      { name: "Kshitiz", year: "1st Year" },
    ],
  },
  {
    name: "Social Media",
    members: [
      { name: "Prateek", year: "2nd Year" },
      { name: "Mudit Jain", year: "1st Year" },
      { name: "Neeraj", year: "1st Year" },
    ],
  },
  {
    name: "Event Legacy",
    members: [
      { name: "Lucky Pandey", year: "2nd Year", role: "Captain" },
      { name: "Prachi Garg", year: "1st Year", role: "Vice Captain" },
      { name: "Harsh Dambwar", year: "1st Year", role: "Vice Captain" },
    ],
    subTeams: [
      {
        name: "Robo War",
        members: [
          { name: "Aashish Jangid", year: "2nd Year" },
          { name: "Manan Gupta", year: "2nd Year" },
          { name: "Harsh Dambwar", year: "1st Year" },
        ],
      },
      {
        name: "R/C Car",
        members: [
          { name: "Jatin Bansal", year: "2nd Year" },
          { name: "Devashish Santpal", year: "1st Year" },
        ],
      },
      {
        name: "Robo Soccer",
        members: [
          { name: "Manan Gupta", year: "2nd Year" },
          { name: "Vineet Sharma", year: "1st Year" },
        ],
      },
      {
        name: "Cozmo Clench",
        members: [
          { name: "Rudrakshi Kilede", year: "2nd Year" },
          { name: "Aniket Sharma", year: "1st Year" },
        ],
      },
      {
        name: "Line Follower",
        members: [
          { name: "Imsa Khan", year: "2nd Year" },
          { name: "Kashvi Agrawal", year: "1st Year" },
        ],
      },
    ],
  },
];

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
            <div className="space-y-2">
              {team.members.map((member, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-black/40 rounded border border-emerald-900/30">
                  <span className="text-emerald-200">{member.name}</span>
                  <div className="flex gap-4">
                    {member.role && <span className="text-primary text-sm font-heading">{member.role}</span>}
                    <span className="text-emerald-400/60 text-sm">{member.year}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sub Teams */}
          {team.subTeams && team.subTeams.length > 0 && (
            <div className="mt-6 space-y-4 border-t border-emerald-900/50 pt-4">
              {team.subTeams.map((subTeam, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-lg font-heading text-primary mb-3">{subTeam.name}</h4>
                  {subTeam.members.map((member, j) => (
                    <div key={j} className="flex justify-between items-center p-2 bg-emerald-900/10 rounded ml-4">
                      <span className="text-emerald-200">{member.name}</span>
                      <span className="text-emerald-400/60 text-sm">{member.year}</span>
                    </div>
                  ))}
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading text-primary text-glow mb-4 text-center">THE GUARDIANS</h1>
        <p className="text-center text-emerald-400 mb-12 tracking-wider">Click to expand team details</p>

        <div className="space-y-6">
          {teams.map((team, i) => (
            <TeamSection key={i} team={team} />
          ))}
        </div>
      </div>
    </JungleLayout>
  );
}
