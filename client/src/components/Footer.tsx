import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-emerald-900/50 bg-black/80 backdrop-blur-sm py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-heading text-primary mb-6 text-glow">CONTACT HQ</h3>
          <div className="space-y-4 text-emerald-200/80">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:aadhar@poornima.edu" className="hover:text-primary transition-colors">aadhar@poornima.edu</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 9876543210</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Poornima College, Delhi</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-heading text-primary mb-6 text-glow">QUICK LINKS</h3>
          <div className="space-y-3 text-emerald-200/80">
            <Link href="/">
              <a className="hover:text-primary hover:text-glow transition-colors block">Home</a>
            </Link>
            <Link href="/register">
              <a className="hover:text-primary hover:text-glow transition-colors block">Register</a>
            </Link>
            <Link href="/events">
              <a className="hover:text-primary hover:text-glow transition-colors block">Events</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-primary hover:text-glow transition-colors block">About</a>
            </Link>
            <Link href="/team">
              <a className="hover:text-primary hover:text-glow transition-colors block">Team</a>
            </Link>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xl font-heading text-primary mb-6 text-glow">THE ADVENTURE</h3>
          <p className="text-emerald-200/80 text-sm leading-relaxed">
            AADHAR is the annual tech event of Poornima College, where students venture into the digital jungle to showcase their skills, creativity, and innovation.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-emerald-900/30 text-center text-emerald-300/60 text-sm">
        <p>© 2025 AADHAR - Poornima College. May the best player win.</p>
      </div>
    </footer>
  );
}
