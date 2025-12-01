import { JungleLayout } from "@/components/JungleLayout";
import { motion } from "framer-motion";
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
];

const eventLegacy = {
  leads: [
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
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function MemberCard({ member, index }: { member: (typeof teams)[0]["members"][0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center group"
    >
      <Avatar className="w-32 h-32 border-4 border-primary/30 group-hover:border-primary transition-all duration-300 mb-4">
        <AvatarImage src={member.image} />
        <AvatarFallback className="bg-emerald-900/50 text-primary font-heading text-2xl">{getInitials(member.name)}</AvatarFallback>
      </Avatar>
      <h4 className="text-lg font-heading text-emerald-100 group-hover:text-primary transition-colors text-center">{member.name}</h4>
      <p className="text-emerald-400/60 text-xs uppercase tracking-widest mt-1">{member.year}</p>
    </motion.div>
  );
}

function TeamSection({ team, index }: { team: (typeof teams)[0]; index: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-heading text-amber-400 text-glow mb-8 pb-4 border-b border-emerald-900/50">{team.name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.members.map((member, i) => (
          <MemberCard key={i} member={member} index={i} />
        ))}
      </div>
    </motion.section>
  );
}

export default function Team() {
  return (
    <JungleLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading text-primary text-glow mb-4 text-center">THE GUARDIANS</h1>
        <p className="text-center text-emerald-400 mb-16 tracking-wider">The Heroes Behind AADHAR</p>

        {/* Main Teams */}
        {teams.map((team, i) => (
          <TeamSection key={i} team={team} index={i} />
        ))}

        {/* Event Legacy Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-amber-400 text-glow mb-8 pb-4 border-b border-emerald-900/50">Event Legacy</h2>

          {/* Leadership */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-primary mb-6">Leadership</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {eventLegacy.leads.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center group"
                >
                  <Avatar className="w-32 h-32 border-4 border-primary group-hover:border-amber-400 transition-all duration-300 mb-4">
                    <AvatarImage src={member.image} />
                    <AvatarFallback className="bg-emerald-900/50 text-primary font-heading text-2xl">{getInitials(member.name)}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-heading text-emerald-100 group-hover:text-primary transition-colors text-center">{member.name}</h4>
                  <p className="text-primary text-xs font-heading uppercase tracking-widest mt-1">{member.role}</p>
                  <p className="text-emerald-400/60 text-xs uppercase tracking-widest">{member.year}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Event Sub-Teams */}
          <div className="space-y-12">
            {eventLegacy.subTeams.map((subTeam, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-heading text-emerald-400 mb-6 pl-4 border-l-4 border-primary">{subTeam.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {subTeam.members.map((member, j) => (
                    <MemberCard key={j} member={member} index={j} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </JungleLayout>
  );
}
