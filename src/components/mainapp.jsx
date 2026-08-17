import { useState, useEffect, useRef } from "react";
import LogoNav from "../assets/logo-nav.png";
import LogoAimsAndObjNrf from "../assets/logo-nrf-aims-and-obg.png";
import LogoFooter from "../assets/logo-footer.jpg";
import qrcode from "../assets/qrcode_dawatehaq.jpg";
import qrcode_dawate from "../assets/DonationQR.jpeg";
import LogoNrf from "../assets/logo-nrf.jpg";
import Blog from "./blog";
import Objectives from "./objectives";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import DonateSection from "./donate-section";
import DonateQR from "./donate-qr";
import HeroSection from "./hero-section";

const WHATSAPP_NUMBER = "+91 8527487330";
const WHATSAPP_CHANNEL =
  "https://whatsapp.com/channel/0029VajCRiG7YSd1usizNY2W";
const SBI_COLLECT_URL =
  "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=dawatehaq";

const arabicPattern = `
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
    <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="rgba(212,175,55,0.15)" stroke-width="1"/>
    <path d="M30 15 L45 30 L30 45 L15 30 Z" fill="none" stroke="rgba(212,175,55,0.1)" stroke-width="1"/>
    <circle cx="30" cy="30" r="3" fill="rgba(212,175,55,0.2)"/>
  </svg>
`;

const encodedPattern = `data:image/svg+xml,${encodeURIComponent(arabicPattern)}`;

export default function TrustWebsite() {
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setVisibleSections((p) => ({ ...p, [e.target.id]: true }));
        });
      },
      { threshold: 0.15 },
    );
    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Assalamu Alaikum,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollTo = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { num: "25+", label: "Years of Service" },
    { num: "10K+", label: "Lives Impacted" },
    { num: "500+", label: "Scholars & Partners" },
    { num: "50+", label: "Programs Worldwide" },
  ];

  const programs = [
    {
      icon: "🏫",
      title: "Modern School Education",
      desc: "Establishing CBSE-affiliated schools from pre-primary to higher secondary, providing quality modern education for all communities.",
    },
    {
      icon: "📖",
      title: "Islamic & Madrasa Education",
      desc: "Running Hifz schools, Dars-e-Nizami, 'Alimiyyah courses, and integrated Islamic-modern education programs.",
    },
    {
      icon: "🎓",
      title: "Coaching & Skill Development",
      desc: "CUET/NEET/JEE preparation centers, English language coaching, and vocational skill academies for underprivileged youth.",
    },
    {
      icon: "📢",
      title: "Dawah & Outreach",
      desc: "Islamic outreach programs in English, Urdu, Arabic & regional languages — lectures, seminars, interfaith dialogues, and digital dawah.",
    },
    {
      icon: "🤲",
      title: "Orphan & Widow Support",
      desc: "Providing shelter, food, clothing, financial aid for orphan girls' marriage and comprehensive support through Nabiur Rahma Foundation.",
    },
    {
      icon: "🍚",
      title: "Humanitarian Relief",
      desc: "Food drives, ration kit distribution, disaster relief, and emergency humanitarian aid during calamities and crises.",
    },
    {
      icon: "🏥",
      title: "Health & Medical Aid",
      desc: "Free health camps, blood donation drives, hospice programs, and access to basic medical care for the poor and disabled.",
    },
    {
      icon: "👩‍💼",
      title: "Women's Empowerment",
      desc: "Targeted education, mentorship, skill development, and leadership opportunities to help women become self-reliant contributors.",
    },
    {
      icon: "💰",
      title: "Zakat & Sadaqah Management",
      desc: "Collecting and distributing Zakat, Sadaqah, Qurbani, Ramadan Iftar, and Eid gifts as per Shariah principles.",
    },
    {
      icon: "♿",
      title: "Disability & Rehabilitation",
      desc: "Community-based rehabilitation for physically and intellectually disabled persons, including visually impaired and mentally ill individuals.",
    },
    {
      icon: "📡",
      title: "Media & Digital Publications",
      desc: "Operating TV, YouTube, podcasts, and digital platforms for dawah, educational broadcasting, and religious awareness.",
    },
    {
      icon: "🌱",
      title: "Environment & Sustainability",
      desc: "Environmental awareness campaigns, tree plantation drives, water management, and green initiatives across communities.",
    },
  ];

  const scholars = [
    {
      name: "Dr. Abdullah Al-Farooqi",
      role: "Director of Research",
      img: "👳",
    },
    { name: "Sheikh Ibrahim Rasheed", role: "Senior Scholar", img: "🧕" },
    { name: "Dr. Amina Siddiqui", role: "Academic Affairs", img: "👩‍🏫" },
    { name: "Ustaz Hassan Malik", role: "Community Director", img: "👨‍💼" },
  ];

  return (
    <>
      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <div className="logo" onClick={() => scrollTo("home")}>
            <div className="logo-icon">
              <img
                src={LogoNav}
                alt="School app preview"
                width={70}
                height={70}
                className="rounded-lg shadow-md"
                priority
              />
            </div>
            <div className="logo-text">
              <div className="arabic">دعوتِ حق</div>
              <div className="english">DAWAT-E-HAQ</div>
            </div>
          </div>
          <ul className="nav-links">
            {["home", "about", "donate", "programs", "blog", "contact"].map(
              (s) => (
                <li key={s}>
                  <a
                    className={activeNav === s ? "active" : ""}
                    onClick={() => scrollTo(s)}
                  >
                    {s === "sadaqah"
                      ? "Sadaqah"
                      : s.charAt(0).toUpperCase() + s.slice(1)}
                  </a>
                </li>
              ),
            )}
            {/* <li><a className="nav-donate" href={SBI_COLLECT_URL} target="_blank" rel="noopener noreferrer">Donate</a></li> */}
          </ul>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {["home", "about", "donate", "programs", "blog", "contact"].map(
              (s) => (
                <a key={s} onClick={() => scrollTo(s)}>
                  {s === "sadaqah"
                    ? "sadaqah"
                    : s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              ),
            )}
            {/* <a href={SBI_COLLECT_URL} target="_blank" rel="noopener noreferrer" style={{color:"var(--gold)"}}>💝 Donate via SBI</a> */}
          </div>
        )}
      </nav>

      {/* HERO */}
      <HeroSection LogoFooter={LogoFooter} onClick={scrollTo}/>
      

      {/* STATS */}
      
      {/* Donate */}
      <DonateSection visibleSections={visibleSections} WHATSAPP_CHANNEL={WHATSAPP_CHANNEL} />

      <Blog WHATSAPP_CHANNEL={WHATSAPP_CHANNEL} />

      {/* PROGRAMS */}
      <section id="programs" className="programs-section">
        <div
          className="section-header"
          id="prog-header"
          data-animate
          style={
            visibleSections["prog-header"]
              ? { opacity: 1, transform: "none" }
              : {}
          }
        >
          <span className="section-badge">WHAT WE DO</span>
          <h2 className="section-title">Our Programs & Initiatives</h2>
          <div className="section-divider" />
          <p className="section-desc">
            Comprehensive Islamic services addressing the spiritual,
            educational, and material needs of the community.
          </p>
        </div>
        <div
          className="programs-grid"
          id="prog-grid"
          data-animate
          style={
            visibleSections["prog-grid"]
              ? { opacity: 1, transform: "none" }
              : {}
          }
        >
          {programs.map((p, i) => (
            <div key={i} className="program-card">
              <div className="program-icon">{p.icon}</div>
              <h3 className="program-title">{p.title}</h3>
              <p className="program-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NRF WING HIGHLIGHT */}
      <section
        id="nrf"
        style={{
          background: "white",
          padding: "80px 5%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <img
              src={LogoNrf}
              alt="Nabiur Rahma Foundation"
              className="LogoNrfoundation"
              priority
            />
            {/* <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(26px,4vw,40px)",color:"white",marginBottom:"16px"}}>🌿 Nabiur Rahma Foundation</h2> */}
            <div
              style={{
                width: "80px",
                height: "3px",
                margin: "0 auto 20px",
                background:
                  "linear-gradient(to right,transparent,var(--gold),transparent)",
              }}
            />
          </div>
          <div className="nrf-cards">
            {[
              {
                icon: "🏠",
                title: "Shelter & Housing",
                desc: "Safe shelter and living support for homeless and needy families",
              },
              {
                icon: "🍚",
                title: "Food & Ration Drives",
                desc: "Monthly ration kits and food distribution to deserving households",
              },
              {
                icon: "🏥",
                title: "Medical Aid",
                desc: "Free health camps, blood donation drives & basic medical access",
              },
              {
                icon: "📚",
                title: "Education Support",
                desc: "Scholarships and educational aid for children of orphans & widows",
              },
              {
                icon: "💒",
                title: "Marriage Aid",
                desc: "Financial assistance for the marriage of orphan girls",
              },
              {
                icon: "💼",
                title: "Skill & Employment",
                desc: "Vocational training and micro-business support for self-reliance",
              },
              {
                icon: "🌧️",
                title: "Disaster Relief",
                desc: "Emergency humanitarian aid during floods, fires and calamities",
              },
              {
                icon: "🌱",
                title: "Green Initiatives",
                desc: "Tree plantation and environmental sustainability campaigns",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "10px",
                  padding: "24px 18px",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                  {icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel',serif",
                    fontSize: "14px",
                    color: "var(--gold-light)",
                    marginBottom: "8px",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: "'Tajawal',sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Full Objectives Accordion List */}
      <Objectives visibleSections={visibleSections} />

      <DonateQR qrcode_dawate={qrcode_dawate} WHATSAPP_CHANNEL={WHATSAPP_CHANNEL} />

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <span className="section-badge">GET IN TOUCH</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider" />
        </div>
        <div className="contact-grid">
          <div
            className="contact-info"
            id="contact-info"
            data-animate
            style={
              visibleSections["contact-info"]
                ? { opacity: 1, transform: "none" }
                : {}
            }
          >
            <h3>We're Here to Help</h3>
            <p>
              Reach out for inquiries about our programs, partnerships,
              volunteering, or any other matter. We respond through WhatsApp for
              faster communication.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-icon">📍</div>
              <div className="contact-detail-text">
                <strong>Address</strong>
                <span>New Delhi, India</span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">💬</div>
              <div className="contact-detail-text">
                <strong>WhatsApp (Donation Receipt)</strong>
                <span>+91 7209824997</span>
              </div>
            </div>

            <div className="whatsapp-note">
              <span>💬</span>
              <p>
                Contact form messages are sent directly via{" "}
                <strong>WhatsApp</strong> for faster response. Jazakallah Khair!
              </p>
            </div>
          </div>
          <div
            id="contact-form"
            data-animate
            style={
              visibleSections["contact-form"]
                ? { opacity: 1, transform: "none" }
                : {}
            }
          >
            {submitted ? (
              <div className="success-msg">
                ✅ JazakAllah Khair! Your message has been sent via WhatsApp.
                We'll respond soon insha'Allah.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleWhatsApp}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      required
                      placeholder="Muhammad / Aisha..."
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Assalamu Alaikum, I'd like to inquire about..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="submit-btn">
                  <span>💬</span> Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div className="footer-grid">
            <div className="footer-col">
              <img
                src={LogoFooter}
                alt="School app preview"
                width={250}
                height={227}
                className="rounded-lg shadow-md"
                priority
              />

            
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {["home", "about", "programs", "scholars", "contact"].map(
                  (s) => (
                    <li key={s}>
                      <a onClick={() => scrollTo(s)}>
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Programs</h4>
              <ul>
                {[
                  "Islamic Education",
                  "Community Outreach",
                  "Research",
                  "Humanitarian Aid",
                  "Youth Development",
                ].map((p) => (
                  <li key={p}>
                    <a href="#">{p}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Donate</h4>
              <ul>
                
                <li>
                  <a href="#">Zakat Fund</a>
                </li>
                <li>
                  <a href="#">Sadaqah</a>
                </li>
                <li>
                  <a href="#">Waqf</a>
                </li>
              </ul>
              <div className="footer-social">
                <a
                  href="https://www.facebook.com/profile.php?id=61588396468250"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/dawatehaq.official?igsh=bTl4aXB6ejR0cDh0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VajCRiG7YSd1usizNY2W"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          
        </div>
        <div className="footer-bottom">
          <p>© 2026 DAWAT-E-HAQ, Delhi. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll animation trigger */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.addEventListener('DOMContentLoaded', () => {
          const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
          }, {threshold: 0.15});
          document.querySelectorAll('[data-animate]').forEach(el => obs.observe(el));
        });
      `,
        }}
      />
    </>
  );
}
