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

      <div id="home" className="hero">
        <div className="hero-pattern" />
        <div className="hero-glow" />

        {/* Watermark Logo */}
        <div className="hero-watermark">
          <img src={LogoFooter} alt="Dawat-e-Haq Logo" />
        </div>

        <div className="hero-content">
          {/* Center Welcome */}
          <h1 className="hero-welcome">
            Welcome to <span>Dawat-e-Haq</span>
          </h1>

          <div className="hero-arabic">دعوتِ حق</div>

          {/* <p className="hero-desc">
      Dawat-e-Haq Trust is dedicated to the propagation of authentic Islamic knowledge,
      community welfare, and spiritual development across India and beyond.
    </p> */}

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => scrollTo("programs")}
            >
              Explore Our Work
            </button>

            <button className="btn-outline" onClick={() => scrollTo("donate")}>
              Donate Now
            </button>
          </div>
        </div>

        <div className="hero-scroll">SCROLL</div>
      </div>

      {/* STATS */}
      
      {/* Donate */}
      <section id="donate" className="about-section">
        <div
          className="about-grid"
          id="about-content"
          data-animate
          style={
            visibleSections["about-content"]
              ? { opacity: 1, transform: "none" }
              : {}
          }
        >
          {/* NRF Widow Support Visual Card */}
          <div className="about-visual">
  <div
    className="about-card-main"
    style={{
      flexDirection: "column",
      gap: "16px",
      padding: "16px",
      textAlign: "center",
    }}
  >

    

    {/* Donation Details Box */}
    <div className="donation-cards">

      <div
        style={{
          fontFamily: "'Cinzel',serif",
          fontSize: "16px",
          color: "var(--gold-light)",
          marginBottom: "16px",
        }}
      >
        🏦 Donate to DAWAT-E-HAQ
      </div>

      <div
        style={{
          fontFamily: "'Tajawal',sans-serif",
          fontSize: "12px",
          color: "rgba(255,255,255,0.4)",
          marginBottom: "16px",
          letterSpacing: "1px",
        }}
      >
        Reg. No. 2025/10/IV/2370
      </div>
      {/* QR Code Section */}
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "10px",
        padding: "5px",
      }}
    >
      <div
        style={{
          fontFamily: "'Cinzel',serif",
          fontSize: "16px",
          color: "var(--gold-light)",
          marginBottom: "10px",
        }}
      >
      Scan <span style={{color:"green", weight:"600"}}><strong>QR Code</strong></span> to Donate
      </div>

      <img
        src={qrcode}
        alt="UPI QR Code"
        style={{
          width: "300px",
          height: "300px",
          objectFit: "contain",
          borderRadius: "8px",
          background: "#fff",
          padding: "6px",
        }}
      />

      <div
        style={{
          fontFamily: "'Tajawal',sans-serif",
          fontSize: "12px",
          color: "rgba(255,255,255,0.45)",
          marginTop: "8px",
        }}
      >
        Scan using any UPI app
      </div>
    </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {[
          { label: "Bank", val: "State Bank of India (SBI)" },
          { label: "A/C Title", val: "DAWAT-E-HAQ" },
          { label: "A/C No.", val: "44731768010" },
          { label: "UPI ID", val: "dawatehaq@sbi" },
        ].map(({ label, val }, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <span
              style={{
                fontFamily: "'Tajawal',sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {label}
            </span>

            <span
              style={{
                fontFamily: "'Tajawal',sans-serif",
                fontSize: "14px",
                color: "var(--gold-light)",
                fontWeight: 600,
              }}
            >
              {val}
            </span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "18px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://wa.me/917209824997"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            minWidth: "140px",
            background: "#25D366",
            color: "white",
            padding: "10px 16px",
            borderRadius: "6px",
            textAlign: "center",
            textDecoration: "none",
            fontFamily: "'Tajawal',sans-serif",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          💬 Receipt on WhatsApp
        </a>

        <a
          href={WHATSAPP_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            minWidth: "140px",
            background: "rgba(37,211,102,0.15)",
            border: "1px solid rgba(37,211,102,0.3)",
            color: "#25D366",
            padding: "10px 16px",
            borderRadius: "6px",
            textAlign: "center",
            textDecoration: "none",
            fontFamily: "'Tajawal',sans-serif",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          📢 Join WhatsApp Channel
        </a>
      </div>

    </div>
  </div>

  {/* Secondary Card */}
  {/* <div
    className="about-card-secondary"
    style={{
      background:
        "linear-gradient(135deg,var(--gold),var(--gold-dark))",
    }}
  >
    <span className="number">15</span>
    <div className="label">Widows Supported Every Month</div>

    <div
      style={{
        marginTop: "8px",
        fontSize: "12px",
        fontFamily: "'Tajawal',sans-serif",
        opacity: 0.8,
      }}
    >
      ₹1,000 each · With your help
    </div>
  </div> */}
</div>

          {/* NRF Content */}
          <div className="about-text">
            <div className="about-gold-line" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <span style={{ fontSize: "22px" }}>🌿</span>
              <span
                style={{
                  fontFamily: "'Tajawal',sans-serif",
                  fontSize: "14px",
                  color: "var(--gold-dark)",
                  letterSpacing: "2px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Nabiur Rahma Foundation (NRF)
              </span>
            </div>
            <h2>
              Support Widows with
              <br />
              Your Sadaqah ✨
            </h2>

            {/* Hadith Quote */}
            <div
              style={{
                background:
                  "linear-gradient(135deg,rgba(201,168,76,0.08),rgba(201,168,76,0.03))",
                border: "1px solid rgba(201,168,76,0.25)",
                borderLeft: "4px solid var(--gold)",
                borderRadius: "8px",
                padding: "20px 24px",
                margin: "24px 0",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--text)",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                "The one who cares for a widow and the poor is like the one
                striving in the path of Allah." 🌸
              </p>
              <div
                style={{
                  fontFamily: "'Tajawal',sans-serif",
                  fontSize: "13px",
                  color: "var(--gold-dark)",
                  marginTop: "10px",
                  fontWeight: 600,
                }}
              >
                — Prophet Muhammad ﷺ &nbsp;|&nbsp; Bukhari & Muslim
              </div>
            </div>

            <p
              style={{
                color: "var(--text-light)",
                lineHeight: 1.9,
                fontSize: "16px",
                marginBottom: "16px",
              }}
            >
              💔 Many widows struggle daily to arrange food, medicine, and basic
              needs for their children. With your support, we have begun helping{" "}
              <strong>15 families</strong> — and we aim to continue and expand
              this mission of mercy to many more.
            </p>

            {/* How You Can Help */}
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: "15px",
                  color: "var(--text)",
                  marginBottom: "12px",
                  fontWeight: 600,
                }}
              >
                🌸 How You Can Help
              </div>
              <div className="about-values">
                {[
                  "Sponsor one widow's monthly support (₹1,000)",
                  "Contribute any amount as Sadaqah or Zakat",
                  "Share this message so others can join",
                ].map((v, i) => (
                  <div key={i} className="value-item">
                    <div className="value-dot" />
                    <div className="value-text">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: "15px",
                  color: "var(--text)",
                  marginBottom: "12px",
                  fontWeight: 600,
                }}
              >
                💰 Your Small Help Can
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}
              >
                {[
                  "🍚 Feed a hungry family",
                  "📚 Support children's education",
                  "💊 Bring relief to a struggling mother",
                  "🌱 Become Sadaqah Jariyah for you",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(201,168,76,0.07)",
                      border: "1px solid rgba(201,168,76,0.15)",
                      borderRadius: "8px",
                      padding: "12px 14px",
                      fontFamily: "'Tajawal',sans-serif",
                      fontSize: "14px",
                      color: "var(--text-light)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                fontFamily: "'Tajawal',sans-serif",
                fontSize: "15px",
                color: "var(--text-light)",
                fontStyle: "italic",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              Aap ki chhoti si donation, kisi ki zindagi badal sakti hai. 🤍
            </div>
          </div>
        </div>
      </section>
      
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

      <Blog WHATSAPP_CHANNEL={WHATSAPP_CHANNEL} />

      <div className="donate-banner">
        <h2>Support the Cause of Allah 🤲</h2>
        <p>
          Today we support 15 widows. With your help, tomorrow we can support
          many more.
          <br />
          <em>Be the reason a widow sleeps with peace tonight.</em>
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "16px",
          }}
        >
           {/* QR Code Section */}
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "10px",
        padding: "5px",
      }}
    >

      <img
        src={qrcode_dawate}
        alt="UPI QR Code"
        style={{
          width: "300px",
          height: "400px",
          objectFit: "contain",
          borderRadius: "8px",
          background: "#fff",
          padding: "6px",
        }}
      />

    </div>
          
        </div>
        <a
          href={WHATSAPP_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "white",
            padding: "10px 24px",
            borderRadius: "100px",
            textDecoration: "none",
            fontFamily: "'Tajawal',sans-serif",
            fontSize: "14px",
            letterSpacing: "1px",
            transition: "all 0.3s",
          }}
        >
          📢 Join Our WhatsApp Channel
        </a>
        <a
            className="donate-sbi"
            href="https://wa.me/917209824997"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#25D366", color: "white", padding: "10px 24px",
            borderRadius: "100px", marginLeft:"20px"}}
          >
            <span style={{ fontSize: "24px"}}>💬</span>
            <div>
              DONATION RECEIPT
              <span
                className="bank-info"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                WhatsApp: +91 7209824997
              </span>
            </div>
          </a>
      </div>

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
