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
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  branch: z.string().min(1, "Please select your branch"),
  year: z.string().min(1, "Please select your year"),
});

export default function Register() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      branch: "",
      year: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
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
        <div 
          className="w-full max-w-md relative p-1 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          {/* Stone border effect */}
          <div className="absolute inset-0 bg-cover opacity-50" style={{ backgroundImage: `url(${stoneTexture})` }}></div>
          
          <div className="relative bg-black/80 backdrop-blur-xl p-8 border border-primary/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading text-primary text-glow mb-2">PLAYER ENTRY</h2>
              <p className="text-emerald-400/60 text-sm uppercase tracking-widest">Join the Adventure</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-emerald-500 font-heading tracking-wider">PLAYER NAME</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name..." {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-emerald-500 font-heading tracking-wider">COMMUNICATION LINK</FormLabel>
                      <FormControl>
                        <Input placeholder="email@college.edu" {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-emerald-500 font-heading tracking-wider">SIGNAL FREQUENCY (PHONE)</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 XXXXXXXXXX" {...field} className="bg-black/50 border-emerald-900/50 text-emerald-100 focus:border-primary/50 focus:ring-primary/20 font-body" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="branch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-emerald-500 font-heading tracking-wider">FACTION (BRANCH)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-emerald-900/50 text-emerald-100">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-emerald-900 text-emerald-100">
                            <SelectItem value="cse">CSE</SelectItem>
                            <SelectItem value="ece">ECE</SelectItem>
                            <SelectItem value="me">ME</SelectItem>
                            <SelectItem value="ce">CE</SelectItem>
                            <SelectItem value="ai">AI & DS</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-emerald-500 font-heading tracking-wider">LEVEL (YEAR)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-emerald-900/50 text-emerald-100">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-emerald-900 text-emerald-100">
                            <SelectItem value="1">Level 1</SelectItem>
                            <SelectItem value="2">Level 2</SelectItem>
                            <SelectItem value="3">Level 3</SelectItem>
                            <SelectItem value="4">Level 4</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-primary/80 to-amber-600/80 hover:from-primary hover:to-amber-600 text-black font-heading font-bold text-lg py-6 border border-amber-400/50 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] transition-all duration-300">
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
