import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowDownRight, ArrowLeft, ArrowRight, Menu as MenuIcon, X } from "lucide-react";
import { galleryData, dishes, menuData, restaurantConfig, storyChapters } from "@/data/restaurant";

type RevealProps = { children: ReactNode; className?: string; delay?: number };

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-visible");
        observer.unobserve(node);
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${delay ? `reveal-delay-${delay}` : ""} ${className}`}>{children}</div>;
}

function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (event: MouseEvent) => {
      if (dot.current) { dot.current.style.left = `${event.clientX}px`; dot.current.style.top = `${event.clientY}px`; }
      if (label.current) { label.current.style.left = `${event.clientX}px`; label.current.style.top = `${event.clientY}px`; }
    };
    const setLabel = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const value = target.closest<HTMLElement>("[data-cursor]")?.dataset.cursor ?? "";
      if (label.current) { label.current.textContent = value; label.current.style.opacity = value ? "1" : "0"; }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", setLabel);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", setLabel); };
  }, []);
  return <><div ref={dot} className="cursor-dot" /><div ref={label} className="cursor-label" style={{ opacity: 0 }} /></>;
}

function Nav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const previousY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 28);
      setHidden(y > previousY.current && y > 120);
      previousY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Menu", "/menu"], ["About", "/about"], ["Experience", "/experience"], ["Gallery", "/gallery"], ["Reservations", "/reservations"], ["Location", "/location"],
  ];
  return <>
    <header className={`site-nav ${scrolled ? "scrolled" : ""} ${hidden ? "hidden-nav" : ""}`}>
      <Link href="/" className="wordmark" aria-label="Waterfall home">W / F</Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={location === href ? "page" : undefined}>{label}</Link>)}
      </nav>
      <Link className="nav-cta" href="/reservations">Reserve <ArrowDownRight size={14} /></Link>
      <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu"><MenuIcon size={23} /></button>
    </header>
    {open && <div className="mobile-overlay">
      <div className="mobile-top"><span className="wordmark">W / F</span><button className="menu-toggle" onClick={() => setOpen(false)} aria-label="Close menu"><X size={26} /></button></div>
      <nav className="mobile-links">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="mobile-reserve" href="/reservations" onClick={() => setOpen(false)}>Reserve a table <ArrowDownRight size={20} /></Link>
      </nav>
      <div className="mobile-foot"><span>Waterfall</span><span>India</span></div>
    </div>}
  </>;
}

function Marquee() {
  return <div className="marquee-wrap"><div className="marquee">{Array.from({ length: 2 }).map((_, index) => <span key={index}>Season-led cooking <span>India</span> Open Tuesday — Saturday <span>Fire / Ferment / Gather</span></span>)}</div></div>;
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-media" style={{ backgroundImage: `url(${restaurantConfig.heroImage})` }} />
    <div className="hero-content">
      <div className="hero-kicker eyebrow">India · Season-led dining</div>
      <h1 className="display hero-title">Enter<br /><em>the</em> evening.</h1>
      <div className="hero-subrow">
        <p className="hero-intro">An intimate room where fire leads, the season decides, and every plate leaves a little trace.</p>
        <a className="scroll-cue" href="#arrival">Begin the descent</a>
      </div>
    </div>
    <div className="hero-index eyebrow mono">01 / 07</div>
  </section>;
}

function HomePage() {
  return <main>
    <Hero />
    <Marquee />
    <section id="arrival" className="section section-dark arrival">
      <Reveal className="arrival-visual"><img src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1600&q=88" alt="Candlelit table at Waterfall" loading="lazy" /><div className="image-caption eyebrow"><span>Chapter 01</span><span>Arrival</span></div></Reveal>
      <Reveal className="arrival-copy" delay={1}><div className="eyebrow" style={{ color: "var(--copper)" }}>The room</div><h2 className="display">Come in.<span>Discover.</span></h2><p className="section-copy">Past the street, the room gets quieter. A long table, low light, the scent of something just kissed by flame. We built Waterfall as a pause from the city — a place to linger between courses.</p><a className="link-arrow" href="#cuisine">Follow the light <ArrowRight size={15} /></a></Reveal>
    </section>
    <section id="cuisine" className="section section-cream">
      <div className="ingredient-grid">
        <Reveal className="ingredient-stack"><img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=88" alt="Fresh herbs and vegetables" loading="lazy" /><img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=88" alt="Seasonal ingredients on a table" loading="lazy" /></Reveal>
        <Reveal className="ingredient-copy" delay={1}><div className="eyebrow">Chapter 02 · The cuisine</div><h2 className="display">Crafted<span>with purpose.</span></h2><p className="section-copy">Our kitchen is guided by a simple conviction: the closer an ingredient stays to its source, the more it has to say. We coax, char, ferment and fold — then let the ingredient speak.</p><div className="ingredient-notes"><div className="ingredient-note"><strong>Fire</strong><span>Oak, ember, patience.</span></div><div className="ingredient-note"><strong>Season</strong><span>What the market gives us.</span></div><div className="ingredient-note"><strong>Balance</strong><span>Acid, smoke, texture.</span></div></div></Reveal>
      </div>
    </section>
    <DishShowcase />
    <section className="section section-dark plate-stage">
      <Reveal className="plate-copy"><div className="eyebrow" style={{ color: "var(--copper)" }}>Chapter 03 · The dish</div><h2 className="display">The plate is<span>the story.</span></h2><p className="section-copy">A little theatre, grounded in something real. Turn the light across the room and let the surface change.</p><a className="link-arrow" href="/menu">Explore the menu <ArrowRight size={15} /></a></Reveal>
      <Reveal className="plate-scene" delay={1}><div className="plate-shadow" /><div className="plate" aria-label="A ceramic plate with a composed dish" /><div className="steam" /><div className="steam two" /></Reveal>
    </section>
    <section className="section about-band">
      <Reveal><div className="eyebrow">Chapter 04 · The story</div><h2 className="display">Behind<br /><span>the plate.</span></h2></Reveal>
      <Reveal className="about-band-copy" delay={1}><p>“We’re not interested in making food louder. We’re interested in making the moment last longer.”</p><Link className="link-arrow" href="/about">Read our story <ArrowRight size={15} /></Link></Reveal>
    </section>
    <FinalCTA />
  </main>;
}

function DishShowcase() {
  return <section className="section section-dark dish-section">
    <div className="dish-header"><div><div className="eyebrow" style={{ color: "var(--copper)" }}>Chapter 03 · Signature dishes</div><h2 className="display">From the fire.</h2></div><Link className="link-arrow" href="/menu">See the full menu <ArrowRight size={15} /></Link></div>
    <div className="dish-track" aria-label="Signature dishes, scroll horizontally">
      {dishes.map((dish) => <article className="dish-panel" key={dish.id} data-cursor="VIEW DISH"><img src={dish.image} alt={dish.name} loading="lazy" /><span className="dish-number eyebrow mono">DISH {dish.id}</span><div className="dish-meta"><div><h3 className="display dish-name">{dish.name}</h3><p className="dish-desc">{dish.subtitle}</p></div><span className="dish-price">{dish.price}</span></div></article>)}
    </div>
    <div className="track-hint eyebrow"><ArrowLeft size={14} /> Drag to explore <ArrowRight size={14} /></div>
  </section>;
}

function FinalCTA() {
  return <section className="section section-copper" style={{ minHeight: "74vh", display: "grid", alignItems: "end" }}><Reveal><div className="eyebrow">The table is set</div><h2 className="display" style={{ maxWidth: 1000, margin: "22px 0 45px", fontSize: "clamp(4.4rem, 12vw, 12rem)", lineHeight: .76 }}>Come hungry.<br /><span style={{ color: "var(--paper)" }}>Leave inspired.</span></h2><Link className="link-arrow" href="/reservations">Reserve your table <ArrowDownRight size={15} /></Link></Reveal></section>;
}

function PageHero({ eyebrow, title, image }: { eyebrow: string; title: ReactNode; image: string }) {
  return <section className="page-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(14,14,13,.98), rgba(14,14,13,.18)), url(${image})` }}><Reveal><div className="eyebrow" style={{ color: "var(--copper)" }}>{eyebrow}</div><h1 className="display">{title}</h1></Reveal></section>;
}

function MenuPage() {
  const [category, setCategory] = useState("Starters");
  return <main><PageHero eyebrow="Chapter 06 · The menu" title={<>A menu in<br /><em style={{ color: "var(--copper)", fontStyle: "normal" }}>motion.</em></>} image={dishes[2].image} /><section className="section section-cream page-content"><div className="section-intro"><div><div className="eyebrow">The current edit</div><p className="section-copy" style={{ marginTop: 24 }}>A loose collection of what is at its best right now. The menu changes with the market.</p></div><div><div className="menu-tabs" role="tablist">{Object.keys(menuData).map((item) => <button key={item} className={`menu-tab ${category === item ? "active" : ""}`} onClick={() => setCategory(item)} role="tab" aria-selected={category === item}>{item}</button>)}</div><div className="menu-list">{menuData[category].map((item) => <div className="menu-row" key={item.name}><h3>{item.name}</h3><p>{item.description}</p><span>{item.price}</span></div>)}</div></div></div></section><FinalCTA /></main>;
}

function AboutPage() {
  return <main><PageHero eyebrow="Chapter 05 · The story" title={<>Good food.<br /><em style={{ color: "var(--copper)", fontStyle: "normal" }}>A good room.</em></>} image={restaurantConfig.heroImage} /><section className="section section-dark"><div className="story-grid"><Reveal className="story-image"><img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1400&q=88" alt="Warmly lit dining room" /></Reveal><div className="story-list">{storyChapters.map((chapter, index) => <Reveal key={chapter.number} delay={index % 3}><article className="story-item"><div className="eyebrow" style={{ color: "var(--copper)" }}>{chapter.number}</div><h3 className="display">{chapter.title}</h3><p>{chapter.body}</p></article></Reveal>)}</div></div></section><section className="section section-cream"><Reveal><div className="eyebrow">A note from the room</div><p className="display" style={{ maxWidth: 970, margin: "35px 0 0", fontSize: "clamp(3rem, 7vw, 7rem)", lineHeight: .86 }}>“The best evenings are the ones you don’t need to explain.”</p></Reveal></section><FinalCTA /></main>;
}

function GalleryPage() {
  const [selected, setSelected] = useState<typeof galleryData[number] | null>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <main><PageHero eyebrow="Chapter 04 · The room" title={<>Seen in<br /><em style={{ color: "var(--copper)", fontStyle: "normal" }}>fragments.</em></>} image={galleryData[0].image} /><section className="section section-dark page-content"><div className="gallery-grid">{galleryData.map((item, index) => <Reveal key={item.label} delay={index % 3}><figure className={`gallery-item ${item.size}`} data-cursor="OPEN" onClick={() => setSelected(item)}><img src={item.image} alt={item.label} loading="lazy" /><figcaption>{item.label}</figcaption></figure></Reveal>)}</div></section>{selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.label} onClick={() => setSelected(null)}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image"><X size={26} /></button><img src={selected.image} alt={selected.label} onClick={(event) => event.stopPropagation()} /></div>}<FinalCTA /></main>;
}

function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);
  return <main><PageHero eyebrow="Chapter 07 · The reservation" title={<>Your table<br /><em style={{ color: "var(--copper)", fontStyle: "normal" }}>awaits.</em></>} image={dishes[3].image} /><section className="section section-dark"><div className="form-layout"><Reveal><div className="eyebrow" style={{ color: "var(--copper)" }}>Join us</div><h2 className="display">Stay for<br /><span>the evening.</span></h2><p className="section-copy">We hold a few tables for walk-ins, but reservations are recommended. For groups of 7 or more, please email us directly.</p></Reveal><Reveal className="form" delay={1}>{submitted ? <div style={{ paddingTop: 40 }}><div className="eyebrow" style={{ color: "var(--copper)" }}>Confirmed</div><h3 className="display" style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: .84, margin: "24px 0" }}>Your table<br />is reserved.</h3><p className="section-copy">We look forward to welcoming you to Waterfall. A confirmation has been prepared for your inbox.</p><button className="form-submit" onClick={() => setSubmitted(false)}>Make another request <ArrowRight size={15} /></button></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="form-row"><div className="form-field"><label htmlFor="date">Date</label><input id="date" type="date" required /></div><div className="form-field"><label htmlFor="time">Time</label><select id="time" defaultValue="7:30 pm" required><option>6:00 pm</option><option>7:30 pm</option><option>9:00 pm</option></select></div></div><div className="form-row"><div className="form-field"><label htmlFor="guests">Guests</label><select id="guests" defaultValue="2 guests" required><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></div><div className="form-field"><label htmlFor="name">Name</label><input id="name" type="text" placeholder="Your name" required /></div></div><div className="form-row"><div className="form-field"><label htmlFor="phone">Phone</label><input id="phone" type="tel" placeholder="+1" required /></div><div className="form-field"><label htmlFor="email">Email</label><input id="email" type="email" placeholder="you@example.com" required /></div></div><button className="form-submit" type="submit">Reserve table <ArrowDownRight size={15} /></button></form>}</Reveal></div></section></main>;
}

function ExperiencePage() {
  return <main><PageHero eyebrow="Chapter 04 · The experience" title={<>The room<br /><em style={{ color: "var(--copper)", fontStyle: "normal" }}>moves slowly.</em></>} image={restaurantConfig.heroImage} /><section className="section section-cream"><div className="section-intro"><Reveal><div className="eyebrow">A dining room for the long way around</div></Reveal><Reveal delay={1}><p className="display" style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)", lineHeight: .93, margin: 0 }}>A table is a stage, but the best moments happen between the lines.</p></Reveal></div></section><section className="section section-dark" style={{ paddingTop: 0 }}><Reveal><img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=88" alt="Dining room set for dinner" style={{ width: "100%", height: "70vh", objectFit: "cover", filter: "saturate(.72)" }} /></Reveal></section><FinalCTA /></main>;
}

function LocationPage() {
  return <main><PageHero eyebrow="Come find us" title={<>Come<br /><em style={{ color: "var(--copper)", fontStyle: "normal" }}>find us.</em></>} image={restaurantConfig.heroImage} /><section className="section section-dark"><div className="location-grid"><Reveal className="location-card"><div className="eyebrow" style={{ color: "var(--copper)" }}>Waterfall</div><h2 className="display">India<br />awaits.</h2><p className="section-copy">A room rooted in India, shaped by season, fire, and the people gathered around the table.</p><div className="location-meta"><div><div className="eyebrow">Hours</div><span>{restaurantConfig.hours}</span></div><div><div className="eyebrow">Contact</div><span>{restaurantConfig.phone}</span><span>{restaurantConfig.email}</span></div></div></Reveal><Reveal className="map-faux" delay={1}><div className="map-pin" /><div className="map-label">Waterfall</div></Reveal></div></section><FinalCTA /></main>;
}

function SmallPage({ kind }: { kind: "contact" | "events" | "private" }) {
  const data = kind === "contact" ? { eyebrow: "Stay close", title: <>The line is<br /><em style={{ color: "var(--copper)", fontStyle: "normal" }}>open.</em></>, image: dishes[4].image, body: "For group dining, press, collaborations, and everything in between, start a conversation with the room." } : kind === "events" ? { eyebrow: "A little more", title: <>After<br /><em style={{ color: "var(--copper)", fontStyle: "normal" }}>hours.</em></>, image: restaurantConfig.heroImage, body: "Seasonal suppers, chef-led evenings, and the occasional reason to stay past last call. Join our list for what’s next." } : { eyebrow: "Private dining", title: <>Make a night<br /><em style={{ color: "var(--copper)", fontStyle: "normal" }}>of it.</em></>, image: dishes[0].image, body: "For celebrations, long tables, and private moments, tell us what you are imagining and our team will be in touch." };
  return <main><PageHero eyebrow={data.eyebrow} title={data.title} image={data.image} /><section className="section section-cream"><div className="section-intro"><Reveal><div className="eyebrow">A note from Waterfall</div></Reveal><Reveal delay={1}><p className="display" style={{ fontSize: "clamp(2.7rem, 6vw, 6rem)", lineHeight: .88, margin: 0 }}>{data.body}</p><Link className="link-arrow" style={{ marginTop: 48 }} href={kind === "private" ? "/reservations" : "/location"}>{kind === "private" ? "Enquire now" : "Get in touch"} <ArrowRight size={15} /></Link></Reveal></div></section><FinalCTA /></main>;
}

function Footer() {
  return <footer className="footer"><div className="footer-grid"><div><div className="eyebrow" style={{ color: "var(--copper)" }}>Waterfall</div><h2 className="display footer-title">Good food.<br />Good company.<br /><span style={{ color: "var(--copper)" }}>Good night.</span></h2></div><div className="footer-column"><div className="eyebrow">Explore</div><Link href="/menu">Menu</Link><Link href="/about">About</Link><Link href="/experience">Experience</Link><Link href="/gallery">Gallery</Link></div><div className="footer-column"><div className="eyebrow">Visit</div><Link href="/reservations">Reservations</Link><Link href="/location">Location</Link><Link href="/private-dining">Private dining</Link></div><div className="footer-column"><div className="eyebrow">Contact</div><span>{restaurantConfig.address}</span><span>{restaurantConfig.hours}</span><a href={`mailto:${restaurantConfig.email}`}>{restaurantConfig.email}</a></div></div><div className="footer-bottom"><span>© 2026 Waterfall</span><span>A study in fire, season, and the spaces between.</span></div></footer>;
}

export default function Site() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [location]);
  let page: ReactNode = <HomePage />;
  if (location === "/menu") page = <MenuPage />;
  else if (location === "/about") page = <AboutPage />;
  else if (location === "/gallery") page = <GalleryPage />;
  else if (location === "/reservations") page = <ReservationPage />;
  else if (location === "/experience") page = <ExperiencePage />;
  else if (location === "/location") page = <LocationPage />;
  else if (location === "/contact") page = <SmallPage kind="contact" />;
  else if (location === "/events") page = <SmallPage kind="events" />;
  else if (location === "/private-dining") page = <SmallPage kind="private" />;
  return <div className="site-shell grain"><Nav /><Cursor />{page}<Footer /></div>;
}
