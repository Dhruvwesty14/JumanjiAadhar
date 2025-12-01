import { JungleLayout } from "@/components/JungleLayout";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import stoneTexture from "@assets/generated_images/weathered_green_ancient_stone_texture.png";
import registerBg from "@assets/Gemini_Generated_Image_6htbum6htbum6htb_1764526244725.png";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  gender: z.string().min(1, "Please select a gender"),
  contact: z.string().min(10, "Contact must be 10 digits"),
  email: z.string().email("Invalid email address"),
  college: z.string().min(1, "Please select your college"),
  residence: z.string().min(1, "Please select your residence"),
  registrationId: z.string().min(1, "Registration ID is required"),
  hostelName: z.string().optional(),
  collegeName: z.string().min(1, "College name is required"),
  collegeAddress: z.string().min(1, "College address is required"),
  noc: z.any().optional(),
  interestedEvent: z.string().min(1, "Please select an interested event"),
});

const events = [
  "CODE SAFARI",
  "BUG HUNT",
  "TEMPLE RUN",
  "ROBO RACE",
  "ROBO CAR",
  "ROBO WAR",
  "COSMO CLASH",
  "LINE FOLLOWER",
  "TREASURE HUNT",
  "HOVERCRAFT RACE",
  "12-HOUR HACKATHON",
  "VALORANT",
  "FREE FIRE",
  "PUBG",
];

export default function Register() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gender: "",
      contact: "",
      email: "",
      college: "",
      residence: "",
      registrationId: "",
      hostelName: "",
      collegeName: "",
      collegeAddress: "",
      interestedEvent: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setTimeout(() => {
      console.log(values);
      toast({
        title: "WELCOME TO THE JUNGLE",
        description: "Your registration is complete. The game begins soon.",
        className: "bg-green-900 border-green-600 text-green-100 font-heading",
      });
      form.reset();
    }, 1000);
  }

  return (
    <JungleLayout backgroundImage={registerBg}>
      <div className="flex items-center justify-center py-12">
        <div className="w-full max-w-2xl relative p-1 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-cover opacity-50" style={{ backgroundImage: `url(${stoneTexture})` }}></div>

          <div className="relative bg-black/80 backdrop-blur-xl p-8 border border-primary/30">
            <div className="mb-8">
              <h2 className="text-3xl font-heading text-primary text-glow mb-2">REGISTER</h2>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* NAME */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormLabel className="text-emerald-500 font-heading min-w-32 tracking-wider">NAME</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body flex-1" />
                        </FormControl>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* GENDER */}
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormLabel className="text-emerald-500 font-heading min-w-32 tracking-wider">GENDER</FormLabel>
                        <FormControl>
                          <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" value="male" checked={field.value === "male"} onChange={(e) => field.onChange(e.target.value)} className="cursor-pointer" />
                              <span className="text-emerald-100">MALE</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" value="female" checked={field.value === "female"} onChange={(e) => field.onChange(e.target.value)} className="cursor-pointer" />
                              <span className="text-emerald-100">FEMALE</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" value="other" checked={field.value === "other"} onChange={(e) => field.onChange(e.target.value)} className="cursor-pointer" />
                              <span className="text-emerald-100">OTHER</span>
                            </label>
                          </div>
                        </FormControl>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* CONTACT */}
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormLabel className="text-emerald-500 font-heading min-w-32 tracking-wider">CONTACT</FormLabel>
                        <FormControl>
                          <Input placeholder="10-digit contact" {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body flex-1" />
                        </FormControl>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* EMAIL ID */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormLabel className="text-emerald-500 font-heading min-w-32 tracking-wider">EMAIL ID</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body flex-1" />
                        </FormControl>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* COLLEGE */}
                <FormField
                  control={form.control}
                  name="college"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormLabel className="text-emerald-500 font-heading min-w-32 tracking-wider">COLLEGE</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-emerald-900/50 text-emerald-100 flex-1">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-emerald-900 text-emerald-100">
                            <SelectItem value="poornima">Poornima College</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* RESIDENCE */}
                <FormField
                  control={form.control}
                  name="residence"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormLabel className="text-emerald-500 font-heading min-w-32 tracking-wider">RESIDENCE</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-emerald-900/50 text-emerald-100 flex-1">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-emerald-900 text-emerald-100">
                            <SelectItem value="day">Day Scholar</SelectItem>
                            <SelectItem value="hostel">Hostel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* COLLEGE REGISTRATION ID */}
                <FormField
                  control={form.control}
                  name="registrationId"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormLabel className="text-emerald-500 font-heading min-w-32 tracking-wider">COLLEGE REGISTRATION ID</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body flex-1" />
                        </FormControl>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* HOSTEL NAME */}
                <FormField
                  control={form.control}
                  name="hostelName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormLabel className="text-emerald-500 font-heading min-w-32 tracking-wider">HOSTEL NAME</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body flex-1" />
                        </FormControl>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* ENTER YOUR COLLEGE NAME HERE & COLLEGE ADDRESS */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="collegeName"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex flex-col gap-2">
                          <FormLabel className="text-emerald-500 font-heading tracking-wider text-sm">ENTER YOUR COLLEGE NAME HERE</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body" />
                          </FormControl>
                        </div>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="collegeAddress"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex flex-col gap-2">
                          <FormLabel className="text-emerald-500 font-heading tracking-wider text-sm">COLLEGE ADDRESS</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body" />
                          </FormControl>
                        </div>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* UPLOAD NOC */}
                <FormField
                  control={form.control}
                  name="noc"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormLabel className="text-emerald-500 font-heading min-w-32 tracking-wider text-sm">UPLOAD NOC</FormLabel>
                        <div className="text-emerald-400 text-sm">(PDF, JPG, PNG - max 5MB)</div>
                        <FormControl>
                          <Input type="file" {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body" />
                        </FormControl>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* INTERESTED EVENTS */}
                <FormField
                  control={form.control}
                  name="interestedEvent"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormLabel className="text-emerald-500 font-heading min-w-32 tracking-wider">INTERESTED EVENTS</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-emerald-900/50 text-emerald-100 flex-1">
                              <SelectValue placeholder="Select an event" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-emerald-900 text-emerald-100">
                            {events.map((event) => (
                              <SelectItem key={event} value={event}>
                                {event}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-gradient-to-r from-primary/80 to-amber-600/80 hover:from-primary hover:to-amber-600 text-black font-heading font-bold text-lg py-6 border border-amber-400/50 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] transition-all duration-300 mt-8">
                  INITIATE GAME
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </JungleLayout>
  );
}
