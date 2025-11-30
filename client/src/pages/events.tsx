import { JungleLayout } from "@/components/JungleLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import stoneTexture from "@assets/generated_images/weathered_green_ancient_stone_texture.png";

const events = [
  { id: 1, title: "CODE SAFARI", type: "Hackathon", desc: "24-hour survival coding challenge." },
  { id: 2, title: "BUG HUNT", type: "Debugging", desc: "Find the venomous bugs in the code." },
  { id: 3, title: "TEMPLE RUN", type: "Robotics", desc: "Navigate your bot through the maze." },
  { id: 4, title: "JUNGLE BEATS", type: "Cultural", desc: "Rhythm and dance competition." },
  { id: 5, title: "SURVIVOR", type: "Gaming", desc: "Battle Royale tournament." },
  { id: 6, title: "MYSTIC MINDS", type: "Quiz", desc: "Test your knowledge of the ancient tech." },
];

export default function Events() {
  return (
    <JungleLayout>
      <h1 className="text-5xl font-heading text-primary text-glow mb-12 text-center">CHOOSE YOUR LEVEL</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {events.map((event) => (
          <Card key={event.id} className="bg-transparent border-none relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
             <div className="absolute inset-0 bg-cover opacity-30 group-hover:opacity-50 transition-opacity" style={{ backgroundImage: `url(${stoneTexture})` }}></div>
             <div className="absolute inset-0 bg-black/80 z-0"></div>
             
             <CardHeader className="relative z-10">
               <div className="text-emerald-500 text-xs font-bold tracking-widest mb-2 uppercase">{event.type}</div>
               <CardTitle className="text-2xl font-heading text-primary group-hover:text-glow transition-all">{event.title}</CardTitle>
             </CardHeader>
             <CardContent className="relative z-10">
               <p className="text-emerald-100/80">{event.desc}</p>
             </CardContent>
             <CardFooter className="relative z-10">
               <Button variant="ghost" className="text-primary hover:text-white hover:bg-primary/20 w-full font-heading tracking-wider border border-primary/20">
                 Join {event.title}
               </Button>
             </CardFooter>
          </Card>
        ))}
      </div>
    </JungleLayout>
  );
}
