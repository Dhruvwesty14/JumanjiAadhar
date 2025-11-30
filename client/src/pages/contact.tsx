import { JungleLayout } from "@/components/JungleLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <JungleLayout>
      <div className="grid md:grid-cols-2 gap-12 items-start py-12">
        <div>
          <h1 className="text-5xl font-heading text-primary text-glow mb-8">SEND A SIGNAL</h1>
          <p className="text-emerald-100/80 mb-12 text-lg">
            Lost in the jungle? Need directions? Or just want to say hello? 
            Our base camp is always listening.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-emerald-200">
              <div className="p-3 bg-emerald-900/30 border border-emerald-500/30 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-lg">BASE CAMP</h4>
                <p className="text-sm opacity-70">Poornima College of Engineering, Jaipur</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-emerald-200">
              <div className="p-3 bg-emerald-900/30 border border-emerald-500/30 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-lg">RADIO FREQUENCY</h4>
                <p className="text-sm opacity-70">contact@aadhar-event.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-emerald-200">
              <div className="p-3 bg-emerald-900/30 border border-emerald-500/30 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-lg">EMERGENCY LINE</h4>
                <p className="text-sm opacity-70">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/60 p-8 border border-emerald-800/50 backdrop-blur-md">
          <form className="space-y-6">
             <div className="space-y-2">
               <label className="text-primary font-heading text-sm tracking-wider">YOUR NAME</label>
               <Input className="bg-black/50 border-emerald-800 focus:border-primary" placeholder="Explorer Name" />
             </div>
             <div className="space-y-2">
               <label className="text-primary font-heading text-sm tracking-wider">YOUR SIGNAL (EMAIL)</label>
               <Input className="bg-black/50 border-emerald-800 focus:border-primary" placeholder="explorer@jungle.com" />
             </div>
             <div className="space-y-2">
               <label className="text-primary font-heading text-sm tracking-wider">MESSAGE</label>
               <Textarea className="bg-black/50 border-emerald-800 focus:border-primary min-h-[150px]" placeholder="What have you found?" />
             </div>
             <Button className="w-full bg-primary text-black font-heading hover:bg-amber-400">TRANSMIT MESSAGE</Button>
          </form>
        </div>
      </div>
    </JungleLayout>
  );
}
