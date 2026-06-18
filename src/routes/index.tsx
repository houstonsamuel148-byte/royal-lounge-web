import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BedDouble, UtensilsCrossed, Wine, PartyPopper, ChefHat, Clock,
  Zap, Gamepad2, Wifi, ShieldCheck, Car, Sparkles, Phone, Mail,
  MapPin, MessageCircle, Facebook, Crown, Check, ChevronDown, Star,
} from "lucide-react";
import photo1 from "@/assets/trendy-royal-1.jpeg";
import photo2 from "@/assets/trendy-royal-2.jpeg";
import photo3 from "@/assets/trendy-royal-3.png";
import photo4 from "@/assets/trendy-royal-4.png";
import photo5 from "@/assets/trendy-royal-5.png";
import photo6 from "@/assets/trendy-royal-6.jpeg";
import photo7 from "@/assets/trendy-royal-7.jpeg";
import photo8 from "@/assets/trendy-royal-8.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trendy Royal Hotel & Lounge — Luxury Rooms, Fine Dining & VIP Lounge" },
      { name: "description", content: "Book luxury rooms, fine dining, premium lounge and event hosting at Trendy Royal Hotel & Lounge, Adiyan. Where every guest is treated like royalty." },
      { property: "og:title", content: "Trendy Royal Hotel & Lounge" },
      { property: "og:description", content: "Luxury rooms, fine dining, VIP lounge, event hosting, snooker & 24/7 service. Live the royal experience." },
    ],
  }),
  component: Index,
});

const PHONE_1 = "+2347077132057";
const PHONE_2 = "+2349162844419";
const EMAIL = "Trendyroyalhotel@gmail.com";
const WHATSAPP = "https://wa.me/9162844419";
const FACEBOOK = "https://www.facebook.com/share/p/1VwsFMrh77/";
const MAPS = "https://maps.app.goo.gl/xZniCqkiSpGbDrKL7";
const ADDRESS = "No 6 Idowu Ogunsanta, Adiyan Gasline, Ibara Entrance";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Rooms />
      <WhyUs />
      <Gallery />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Crown className="size-5 text-primary" />
          <span className="font-display text-lg font-semibold tracking-tight">Trendy Royal</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#why" className="hover:text-foreground transition">Why Us</a>
          <a href="#gallery" className="hover:text-foreground transition">Gallery</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep to-gold px-4 py-2 text-sm font-medium text-primary-foreground shadow-royal hover:opacity-95 transition"
        >
          <MessageCircle className="size-4" /> Book Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 overflow-hidden bg-royal">
      <div
        aria-hidden
        className="absolute -top-32 -right-32 size-[500px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, var(--color-lilac), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 size-[500px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, var(--color-gold), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest text-gold-deep">
            <Sparkles className="size-3" /> Reservations Now Open
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.05]">
            Where every guest <br />
            is treated like <span className="text-gradient-gold italic">royalty.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Luxury rooms, fine dining, a premium VIP lounge and unforgettable
            events — all under one roof at Trendy Royal Hotel & Lounge.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition">
              Book your stay <Crown className="size-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-medium hover:bg-secondary transition">
              <MessageCircle className="size-4" /> WhatsApp us
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "24/7", l: "Service & Power" },
              { v: "5★", l: "Hospitality" },
              { v: "100%", l: "Secure & Serene" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-display font-semibold text-gold-deep">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="book" className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/30 via-lilac/40 to-transparent blur-2xl" aria-hidden />
          <div className="relative rounded-3xl border border-border bg-card p-6 md:p-8 shadow-royal">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-10 rounded-full bg-gradient-to-br from-gold-deep to-gold flex items-center justify-center text-primary-foreground">
                <Crown className="size-5" />
              </div>
              <div>
                <div className="font-display text-xl font-semibold">Reserve your royal stay</div>
                <div className="text-xs text-muted-foreground">We'll confirm within minutes.</div>
              </div>
            </div>
            <ContactForm />
          </div>
          <div className="relative mt-4 h-32 rounded-2xl overflow-hidden border border-border">
            <img src={photo1} alt="Trendy Royal Hotel & Lounge" className="size-full object-cover" width={1600} height={1024} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", room: "Executive Room", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello Trendy Royal! I'd like to book.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ACheck-in: ${form.date}%0ARoom: ${form.room}%0ANotes: ${form.message}`;
    window.open(`${WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
  }

  const field = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition";

  return (
    <form onSubmit={submit} className="space-y-3">
      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className={field} />
      <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" className={field} />
      <div className="grid grid-cols-2 gap-3">
        <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={field} />
        <select value={form.room} onChange={(e) => setForm({ ...form, room: e.target.value })} className={field}>
          <option>Standard Room — ₦10,000</option>
          <option>Executive Room — ₦20,000</option>
          <option>Platinum Room — ₦30,000</option>
          <option>Event / Lounge Booking</option>
        </select>
      </div>
      <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any special requests?" rows={3} className={field} />
      <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-gold-deep to-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-royal hover:opacity-95 transition">
        {sent ? "Sent — we'll be in touch ✓" : "Send booking request"}
      </button>
      <p className="text-[11px] text-muted-foreground text-center">Opens WhatsApp with your details prefilled.</p>
    </form>
  );
}

const services = [
  { icon: BedDouble, title: "Luxury Rooms", desc: "Tastefully furnished, fully air-conditioned rooms designed for absolute comfort." },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "Exquisite local and continental cuisine prepared by our expert chefs." },
  { icon: Wine, title: "VIP Lounge & Bar", desc: "Premium drinks, signature cocktails and a relaxing nightlife atmosphere." },
  { icon: PartyPopper, title: "Event Hosting", desc: "Birthdays, meetings and celebrations in our elegant event space." },
  { icon: Gamepad2, title: "Snooker & Games", desc: "Unwind with friends at our games lounge after a long day." },
  { icon: ChefHat, title: "Exquisite Cuisines", desc: "Barbecue nights, refreshments and chef's specials — every single day." },
];

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-deep">Our Services</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-display font-semibold max-w-2xl">
              A complete <span className="text-gradient-gold italic">royal</span> experience.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Stay, dine, celebrate and unwind — every service crafted with elegance and care.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-border bg-card p-7 hover:border-gold/60 transition">
              <div className="size-12 rounded-xl bg-gradient-to-br from-lilac/70 to-gold/40 flex items-center justify-center text-foreground">
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-display font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const rooms = [
  { name: "Standard Room", price: "₦10,000", per: "per night", img: photo2, perks: ["Air-conditioned", "Free Wi-Fi", "24h power"] },
  { name: "Executive Room", price: "₦20,000", per: "per night", img: photo3, perks: ["Premium bedding", "Workspace", "Lounge access"], featured: true },
  { name: "Platinum Room", price: "₦30,000", per: "per night", img: photo4, perks: ["Spacious suite", "VIP amenities", "Priority service"] },
];

function Rooms() {
  return (
    <section className="py-24 bg-royal">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-gold-deep">Stay With Us</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-display font-semibold">
            Rooms fit for <span className="text-gradient-gold italic">royalty</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((r) => (
            <div key={r.name} className={`relative rounded-3xl overflow-hidden border bg-card transition ${r.featured ? "border-gold shadow-royal md:-translate-y-3" : "border-border"}`}>
              {r.featured && (
                <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-gold-deep to-gold px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                  Most loved
                </div>
              )}
              <div className="aspect-[4/3] overflow-hidden">
                <img src={r.img} alt={r.name} loading="lazy" width={1024} height={768} className="size-full object-cover hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold">{r.name}</h3>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-display text-gold-deep">{r.price}</span>
                  <span className="text-xs text-muted-foreground">{r.per}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {r.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 text-gold-deep" /> {p}
                    </li>
                  ))}
                </ul>
                <a href="#book" className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-foreground bg-foreground px-4 py-3 text-sm font-medium text-background hover:opacity-90 transition">
                  Book this room
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const why = [
  { icon: Clock, title: "24-Hour Service", desc: "Round-the-clock concierge and customer care, always at your call." },
  { icon: Zap, title: "24-Hour Power", desc: "Uninterrupted power supply — never worry about a single blackout." },
  { icon: Wifi, title: "Free High-Speed Wi-Fi", desc: "Stay connected for work or play across every room and lounge." },
  { icon: ShieldCheck, title: "Safe & Secure", desc: "Trained security and a serene environment for total peace of mind." },
  { icon: Car, title: "Spacious Parking", desc: "Generous, secure parking for guests and event attendees alike." },
  { icon: Crown, title: "Royal Treatment", desc: "Every guest is welcomed, pampered and treated like royalty." },
];

function WhyUs() {
  return (
    <section id="why" className="py-24">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/30 via-lilac/30 to-transparent blur-2xl" aria-hidden />
          <img src={photo5} alt="Premium lounge" loading="lazy" width={1024} height={1024} className="relative rounded-3xl object-cover w-full aspect-square shadow-royal" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-gold-deep">Why Choose Us</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-display font-semibold">
            Luxury meets <span className="text-gradient-gold italic">relaxation</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            From silken linens to signature cocktails, every detail at Trendy Royal
            is designed to make your visit extraordinary.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {why.map((w) => (
              <div key={w.title} className="flex gap-3">
                <div className="shrink-0 size-10 rounded-lg bg-secondary flex items-center justify-center text-gold-deep">
                  <w.icon className="size-5" />
                </div>
                <div>
                  <div className="font-semibold">{w.title}</div>
                  <p className="text-sm text-muted-foreground mt-1">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const galleryItems = [
  { src: photo1, alt: "Trendy Royal Hotel & Lounge", cls: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: photo2, alt: "Trendy Royal room", cls: "aspect-square" },
  { src: photo3, alt: "Trendy Royal interior", cls: "aspect-square" },
  { src: photo4, alt: "Trendy Royal hospitality", cls: "aspect-square" },
  { src: photo5, alt: "Trendy Royal lounge", cls: "aspect-square" },
  { src: photo6, alt: "Trendy Royal ambience", cls: "aspect-square" },
  { src: photo7, alt: "Trendy Royal guest area", cls: "aspect-square" },
  { src: photo8, alt: "Trendy Royal facilities", cls: "aspect-square" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-royal">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-deep">Gallery</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-display font-semibold">
            A glimpse inside the <span className="text-gradient-gold italic">experience</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((g, i) => (
            <div key={i} className={`overflow-hidden rounded-2xl border border-border bg-card ${g.cls}`}>
              <img src={g.src} alt={g.alt} loading="lazy" width={1024} height={1024} className="size-full object-cover hover:scale-105 transition duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Where exactly is Trendy Royal Hotel & Lounge located?", a: "We are at No 6 Idowu Ogunsanta, Adiyan Gasline, Ibara Entrance. Tap the location pin in the contact section for live directions." },
  { q: "What are your room rates?", a: "Standard Rooms from ₦10,000, Executive Rooms ₦20,000 and our Platinum Rooms at ₦30,000 per night — all with AC, Wi-Fi and 24-hour power." },
  { q: "Do you host events and parties?", a: "Yes! We host birthdays, meetings, weddings and private celebrations in our elegant event space. Reach out for a custom package." },
  { q: "Is there 24-hour power and security?", a: "Absolutely. We provide uninterrupted 24-hour power supply, professional security and 24/7 customer service." },
  { q: "How do I make a reservation?", a: "Use the booking form above, send us a WhatsApp message, or call any of our lines. We confirm bookings within minutes." },
  { q: "Do you offer dining for non-guests?", a: "Yes — our restaurant, bar and lounge are open to walk-in guests. Come dine, drink and unwind anytime." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-deep">FAQ</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-display font-semibold">Questions, answered.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-secondary/50 transition"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`size-5 shrink-0 text-gold-deep transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 px-5">
      <div className="relative mx-auto max-w-6xl rounded-[2rem] overflow-hidden">
        <img src={photo8} alt="" aria-hidden className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-plum/70 to-ink/85" />
        <div className="relative px-6 md:px-16 py-20 md:py-28 text-center">
          <Crown className="mx-auto size-10 text-gold" />
          <h2 className="mt-6 text-4xl md:text-6xl font-display font-semibold text-background">
            Live the <span className="text-gradient-gold italic">royal</span> experience.
          </h2>
          <p className="mt-5 text-background/80 max-w-xl mx-auto">
            Reservations are now open. Treat yourself — or someone you love — to comfort, class and unforgettable moments.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE_1}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep to-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-royal hover:opacity-95 transition">
              <Phone className="size-4" /> Call {PHONE_1}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 backdrop-blur px-6 py-3 text-sm font-medium text-background hover:bg-background/20 transition">
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            <span className="ml-2 text-xs text-background/70">Loved by guests across Ogun State</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Crown className="size-5 text-gold-deep" />
            <span className="font-display text-xl font-semibold">Trendy Royal Hotel & Lounge</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Your home of comfort. Luxury • Comfort • Relaxation • Entertainment.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={FACEBOOK} target="_blank" rel="noreferrer" className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition" aria-label="Facebook">
              <Facebook className="size-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition" aria-label="WhatsApp">
              <MessageCircle className="size-4" />
            </a>
            <a href={MAPS} target="_blank" rel="noreferrer" className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition" aria-label="Google Maps">
              <MapPin className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={`tel:${PHONE_1}`} className="hover:text-foreground flex items-center gap-2"><Phone className="size-3.5" /> {PHONE_1}</a></li>
            <li><a href={`tel:${PHONE_2}`} className="hover:text-foreground flex items-center gap-2"><Phone className="size-3.5" /> {PHONE_2}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-foreground flex items-center gap-2"><Mail className="size-3.5" /> {EMAIL}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Visit Us</div>
          <a href={MAPS} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground flex items-start gap-2">
            <MapPin className="size-4 mt-0.5 shrink-0" /> {ADDRESS}
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Trendy Royal Hotel & Lounge. Where every guest is treated like royalty.
      </div>
    </footer>
  );
}
