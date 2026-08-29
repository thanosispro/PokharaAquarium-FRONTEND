import Link from "next/link";
import { MapPin, Phone, Mail, Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 pt-16 pb-8 overflow-hidden bg-[#01040a] border-t border-white/5">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-primary/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-primary to-accent">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-wide text-foreground">
                8848<span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent"> Aquarium</span>
              </span>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Bringing the beauty of the ocean into your home. We specialize in exotic fishes, custom-designed premium aquariums, and full-service pet amenities.
            </p>
            <div className="flex items-center gap-4">
              {/* Replace social icons with text links or supported icons if needed */}
              <span className="text-foreground/70 text-sm">Follow us on Social Media</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {["Home", "Fishes", "Aquarium", "Plants & Pets", "About Us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-foreground/70 text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground/70 text-sm">Lakeside, Kirtipur, Nepal<br/>Showroom Building 4</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground/70 text-sm">+977 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground/70 text-sm">hello@8848gallery.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-foreground/70 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50" />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <button className="w-full py-2.5 bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/50 text-xs">
            © {new Date().getFullYear()} 8848 Gallery Aquarium. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-foreground/50">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
