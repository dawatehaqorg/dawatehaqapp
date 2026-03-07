import { useState, useEffect, useRef } from "react";
import LogoNav from "../assets/logo-nav.png"
import LogoAimsAndObjNrf from "../assets/logo-nrf-aims-and-obg.png"
import LogoFooter from "../assets/logo-footer.jpg"
import LogoNrf from "../assets/logo-nrf.jpg"
import Blog from "./blog";


const WHATSAPP_NUMBER = "+91 8527487330";
const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029VajCRiG7YSd1usizNY2W";
const SBI_COLLECT_URL = "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=dawatehaq";


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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
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
          if (e.isIntersecting) setVisibleSections((p) => ({ ...p, [e.target.id]: true }));
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Assalamu Alaikum,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
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
    { name: "Dr. Abdullah Al-Farooqi", role: "Director of Research", img: "👳" },
    { name: "Sheikh Ibrahim Rasheed", role: "Senior Scholar", img: "🧕" },
    { name: "Dr. Amina Siddiqui", role: "Academic Affairs", img: "👩‍🏫" },
    { name: "Ustaz Hassan Malik", role: "Community Director", img: "👨‍💼" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Tajawal:wght@300;400;500;700&family=Cinzel:wght@400;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --gold-dark: #8B6914;
          --deep: #0B1426;
          --navy: #112240;
          --navy-light: #1E3A5F;
          --cream: #F5F0E8;
          --cream-dark: #EDE5D0;
          --text: #2C1810;
          --text-light: #6B5744;
          --white: #FFFFFF;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Lora', Georgia, serif;
          background: var(--cream);
          color: var(--text);
          overflow-x: hidden;
        }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 0 5%;
          transition: all 0.4s ease;
          background: #bea365;
        }
        nav.scrolled {
          background: #bea365;
          backdrop-filter: blur(20px);
          box-shadow: 0 2px 40px rgba(0,0,0,0.3);
        }
        .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 75px;
          border-bottom: 1px solid rgba(201,168,76,0.2);
        }
        .logo {
          display: flex; align-items: center; gap: 12px; cursor: pointer;
          text-decoration: none;
        }
        .logo-icon {
          width: 44px; height: 44px;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        }
        .logo-text { color: var(--white); margin-left:10px}
        .logo-text .arabic { font-family: 'Tajawal', sans-serif; font-size: 18px; color: white; letter-spacing: 2px; }
        .logo-text .english { font-family: 'Cinzel', serif; font-size: 16px; font-weight: 600; letter-spacing: 1px; }

        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links a {
          font-family: 'Tajawal', sans-serif; font-size: 15px; font-weight: 500;
          color: rgba(255,255,255,0.8); text-decoration: none;
          transition: color 0.3s;
          cursor: pointer;
          position: relative;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: -4px; left: 0; right: 0;
          height: 1px; background: var(--gold);
          transform: scaleX(0); transition: transform 0.3s;
        }
        .nav-links a:hover, .nav-links a.active { color: var(--gold-light); }
        .nav-links a:hover::after, .nav-links a.active::after { transform: scaleX(1); }

        .nav-donate {
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          color: var(--deep) !important;
          padding: 8px 22px !important;
          border-radius: 4px;
          font-weight: 700 !important;
          transition: all 0.3s !important;
        }
        .nav-donate::after { display: none !important; }
        .nav-donate:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(201,168,76,0.4) !important; }

        .hamburger {
          display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 5px;
        }
        .hamburger span { width: 24px; height: 2px; background: var(--white); transition: all 0.3s; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu {
            position: fixed; top: 75px; left: 0; right: 0;
            background: rgba(11,20,38,0.98);
            padding: 20px; display: flex; flex-direction: column; gap: 16px;
            border-bottom: 1px solid rgba(201,168,76,0.3);
          }
          .mobile-menu a {
            font-family: 'Tajawal', sans-serif; font-size: 16px;
            color: rgba(255,255,255,0.85); text-decoration: none; padding: 8px 0;
            cursor: pointer;
          }
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(30,58,95,0.4) 0%, transparent 60%),
            linear-gradient(160deg, var(--deep) 0%, var(--navy) 50%, #0D2137 100%);
          position: relative; overflow: hidden;
          display: flex; align-items: center;
          padding-bottom: 30px;
        }
        .hero-pattern {
          position: absolute; inset: 0; opacity: 0.4;
          background-image: url('${encodedPattern}');
          background-size: 60px 60px;
        }
        .hero-glow {
          position: absolute; width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%);
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          pointer-events: none;
        }


        .hero-content {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto; padding: 0 5%;
          padding-top: 100px;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(201,168,76,0.15);
          border: 1px solid rgba(201,168,76,0.3);
          padding: 8px 18px; border-radius: 100px;
          margin-bottom: 32px;
          font-family: 'Tajawal', sans-serif; font-size: 13px;
          color: var(--gold-light); letter-spacing: 2px;
          animation: fadeUp 0.8s ease forwards;
        }
        .hero-badge::before { content: '✦'; color: var(--gold); }
        .hero-arabic {
          font-family: 'Tajawal', sans-serif;
          font-size: clamp(28px, 5vw, 52px);
          color: var(--gold-light);
          letter-spacing: 4px;
          margin-bottom: 16px;
          animation: fadeUp 0.8s 0.2s ease both;
          direction: rtl;
        }
        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(36px, 6vw, 72px);
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 24px;
          animation: fadeUp 0.8s 0.4s ease both;
        }
        .hero-title span { color: var(--gold); }
        .hero-desc {
          font-size: clamp(16px, 2vw, 19px);
          color: rgba(255,255,255,0.65);
          max-width: 580px;
          line-height: 1.8;
          margin-bottom: 48px;
          animation: fadeUp 0.8s 0.6s ease both;
        }
        .hero-actions {
          display: flex; gap: 16px; flex-wrap: wrap;
          animation: fadeUp 0.8s 0.8s ease both;
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--gold), #A8761A);
          color: var(--deep); padding: 16px 36px;
          border: none; border-radius: 4px;
          font-family: 'Cinzel', serif; font-size: 14px; font-weight: 700;
          cursor: pointer; letter-spacing: 1.5px;
          transition: all 0.3s; text-decoration: none; display: inline-block;
          box-shadow: 0 8px 30px rgba(201,168,76,0.3);
        }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(201,168,76,0.5); }
        .btn-outline {
          background: transparent;
          color: var(--white); padding: 16px 36px;
          border: 1px solid rgba(255,255,255,0.3); border-radius: 4px;
          font-family: 'Cinzel', serif; font-size: 14px;
          cursor: pointer; letter-spacing: 1.5px;
          transition: all 0.3s; text-decoration: none; display: inline-block;
        }
        .btn-outline:hover { border-color: var(--gold); color: var(--gold); transform: translateY(-3px); }

        .hero-scroll {
          position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          color: rgba(255,255,255,0.4); font-size: 11px;
          font-family: 'Tajawal', sans-serif; letter-spacing: 2px;
          animation: bounce 2s infinite;
        }
        .hero-scroll::after {
          content: ''; width: 1px; height: 40px;
          background: linear-gradient(to bottom, var(--gold), transparent);
        }

        /* STATS */
        .stats-bar {
          background: var(--deep);
          padding: 40px 5%;
        }
        .stats-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .stat-item {
          text-align: center; padding: 20px;
          border-right: 1px solid rgba(201,168,76,0.15);
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'Cinzel', serif; font-size: 42px; font-weight: 700;
          color: var(--gold); display: block; line-height: 1;
        }
        .stat-label {
          font-family: 'Tajawal', sans-serif; font-size: 14px;
          color: rgba(255,255,255,0.5); margin-top: 8px; letter-spacing: 1px;
        }

        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(201,168,76,0.15); }
        }

        /* SECTION COMMON */
        section { padding: 100px 5%; }
        .section-header { text-align: center; margin-bottom: 64px; }
        .section-badge {
          font-family: 'Tajawal', sans-serif; font-size: 12px;
          color: var(--gold-dark); letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 16px; display: block;
        }
        .section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(28px, 4vw, 44px);
          color: var(--text);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .section-title.light { color: var(--white); }
        .section-divider {
          width: 80px; height: 3px; margin: 0 auto;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
        }
        .section-desc {
          max-width: 600px; margin: 20px auto 0;
          font-size: 17px; line-height: 1.8;
          color: var(--text-light);
        }
        .section-desc.light { color: rgba(255,255,255,0.6); }

        /* ABOUT */
        .about-section { background: var(--cream); }
        .about-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }
        .about-visual {
          position: relative; height: 750px;
        }
        .about-card-main {
          position: absolute; top: 0; left: 0; right: 60px; bottom: 60px;
          background: linear-gradient(135deg, var(--navy), var(--deep));
          border-radius: 12px;
          display: flex; align-items: center; justify-content: normal;
          overflow: hidden;
        }
        .about-mosque { font-size: 160px; opacity: 0.5; }
        .about-card-secondary {
          position: absolute; bottom: 0; right: 0; width: 240px;
          background: var(--gold);
          border-radius: 12px; padding: 28px;
          color: var(--deep);
        }
        .about-card-secondary .number {
          font-family: 'Cinzel', serif; font-size: 48px; font-weight: 700; display: block;
        }
        .about-card-secondary .label {
          font-family: 'Tajawal', sans-serif; font-size: 14px; font-weight: 500;
        }
        .about-gold-line {
          width: 60px; height: 3px;
          background: linear-gradient(to right, var(--gold), transparent);
          margin-bottom: 24px;
        }
        .about-text h2 {
          font-family: 'Cinzel', serif; font-size: 36px;
          color: var(--text); margin-bottom: 24px; line-height: 1.3;
        }
        .about-text p {
          color: var(--text-light); line-height: 1.9; font-size: 16px; margin-bottom: 20px;
        }
        .about-values { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; }
        .value-item { display: flex; align-items: center; gap: 16px; }
        .value-dot { width: 8px; height: 8px; background: var(--gold); border-radius: 50%; flex-shrink: 0; }
        .value-text { font-family: 'Tajawal', sans-serif; font-size: 15px; color: var(--text-light); }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
        }

        /* PROGRAMS */
        .programs-section { background: var(--cream-dark); }
        .programs-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
        }
        .program-card {
          background: var(--white);
          border-radius: 12px; padding: 36px 28px;
          border: 1px solid rgba(201,168,76,0.15);
          transition: all 0.4s;
          position: relative; overflow: hidden;
        }
        .program-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: linear-gradient(to right, var(--gold), var(--gold-dark));
          transform: scaleX(0); transition: transform 0.4s;
        }
        .program-card:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(0,0,0,0.1); }
        .program-card:hover::before { transform: scaleX(1); }
        .program-icon { font-size: 40px; margin-bottom: 20px; }
        .program-title {
          font-family: 'Cinzel', serif; font-size: 18px;
          color: var(--text); margin-bottom: 12px;
        }
        .program-desc { color: var(--text-light); line-height: 1.7; font-size: 15px; }

        @media (max-width: 1100px) { .programs-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 900px) { .programs-grid { grid-template-columns: repeat(1, 1fr); } }
        @media (max-width: 600px) { .programs-grid { grid-template-columns: repeat(1, 1fr); } }
        
        /* SCHOLARS */
        .scholars-section {
          background: linear-gradient(160deg, var(--deep) 0%, var(--navy) 100%);
          position: relative; overflow: hidden;
        }
        .scholars-section::before {
          content: ''; position: absolute; inset: 0;
          background-image: url('${encodedPattern}');
          background-size: 60px 60px; opacity: 0.3;
        }
        .scholars-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
          position: relative; z-index: 1;
        }
        .scholar-card {
          text-align: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 12px; padding: 36px 20px;
          transition: all 0.3s;
        }
        .scholar-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(201,168,76,0.5);
          transform: translateY(-6px);
        }
        .scholar-avatar {
          width: 80px; height: 80px;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          border-radius: 50%; font-size: 36px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
        }
        .scholar-name {
          font-family: 'Cinzel', serif; font-size: 15px;
          color: var(--white); margin-bottom: 8px;
        }
        .scholar-role {
          font-family: 'Tajawal', sans-serif; font-size: 13px;
          color: var(--gold-light); letter-spacing: 1px;
        }
        @media (max-width: 768px) { .scholars-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .scholars-grid { grid-template-columns: 1fr; } }

        /* DONATE BANNER */
        .donate-banner {
          background: linear-gradient(135deg, var(--gold-dark) 0%, #6B4F0F 50%, var(--gold-dark) 100%);
          padding: 80px 5%; text-align: center; position: relative; overflow: hidden;
        }
        .donate-banner::before {
          content: '🌙 ✦ ☽'; font-size: 100px; opacity: 0.06;
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          white-space: nowrap; letter-spacing: 40px;
        }
        .donate-banner h2 {
          font-family: 'Cinzel', serif; font-size: clamp(28px, 4vw, 44px);
          color: var(--white); margin-bottom: 16px;
          position: relative;
        }
        .donate-banner p {
          color: rgba(255,255,255,0.75); font-size: 17px;
          max-width: 520px; margin: 0 auto 36px; line-height: 1.8;
          position: relative;
        }
        .donate-sbi {
          display: inline-flex; align-items: center; gap: 12px;
          background: var(--white);
          color: var(--gold-dark);
          padding: 18px 44px; border-radius: 4px;
          font-family: 'Cinzel', serif; font-size: 15px; font-weight: 700;
          text-decoration: none; letter-spacing: 1.5px;
          transition: all 0.3s; position: relative;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        }
        .donate-sbi:hover { transform: translateY(-4px); box-shadow: 0 16px 50px rgba(0,0,0,0.3); }
        .donate-sbi .bank-info {
          font-family: 'Tajawal', sans-serif; font-size: 11px;
          color: var(--text-light); font-weight: 400; letter-spacing: 1px;
          display: block; margin-top: 4px;
        }

        /* CONTACT */
        .contact-section { background: var(--cream); }
        .contact-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px;
        }
        .contact-info { }
        .contact-info h3 {
          font-family: 'Cinzel', serif; font-size: 28px;
          color: var(--text); margin-bottom: 20px;
        }
        .contact-info p { color: var(--text-light); line-height: 1.8; margin-bottom: 32px; }
        .contact-detail {
          display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px;
        }
        .contact-detail-icon {
          width: 44px; height: 44px;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          border-radius: 8px; font-size: 18px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .contact-detail-text strong {
          display: block; font-family: 'Cinzel', serif; font-size: 14px;
          color: var(--text); margin-bottom: 4px;
        }
        .contact-detail-text span { font-size: 14px; color: var(--text-light); }
        .whatsapp-note {
          margin-top: 32px; padding: 20px;
          background: linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.05));
          border: 1px solid rgba(37,211,102,0.2); border-radius: 8px;
          display: flex; align-items: center; gap: 12px;
        }
        .whatsapp-note span { font-size: 24px; }
        .whatsapp-note p { font-size: 14px; color: var(--text-light); margin: 0; }
        .whatsapp-note strong { color: #25D366; }

        /* FORM */
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label {
          font-family: 'Tajawal', sans-serif; font-size: 13px;
          color: var(--text-light); letter-spacing: 1px; text-transform: uppercase;
          font-weight: 500;
        }
        .form-group input, .form-group textarea {
          padding: 14px 18px;
          background: var(--white);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 6px;
          font-family: 'Lora', serif; font-size: 15px; color: var(--text);
          transition: all 0.3s; outline: none;
          resize: vertical;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.1);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .submit-btn {
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white; padding: 16px 36px;
          border: none; border-radius: 6px;
          font-family: 'Cinzel', serif; font-size: 14px; font-weight: 700;
          cursor: pointer; letter-spacing: 1.5px;
          transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 10px;
          box-shadow: 0 8px 25px rgba(37,211,102,0.3);
        }
        .submit-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(37,211,102,0.4); }
        .success-msg {
          background: rgba(37,211,102,0.1);
          border: 1px solid rgba(37,211,102,0.3);
          border-radius: 8px; padding: 16px;
          text-align: center; color: #128C7E;
          font-family: 'Tajawal', sans-serif; font-size: 15px;
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          #obj-cats > div { grid-template-columns: 1fr !important; }
          #obj-list > div { grid-template-columns: 1fr !important; }
          .LogoNrfoundation {
          width:350px;
          }
        }

        /* FOOTER */
        footer {
          background: var(--deep);
        }
        .footer-logo-desc {
        padding: 20px;
          color: rgba(255,255,255,0.45);
        }
          .footer-main {
          
          }
          .footer-grid {
          max-width: 1200px; margin: 0 auto;
            padding: 60px 5% 30px;
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
          margin-bottom: 48px;
        }
        .footer-brand p {
          color: rgba(255,255,255,0.45); font-size: 14px; line-height: 1.8; margin-top: 16px;
        }
        .footer-col h4 {
          font-family: 'Cinzel', serif; font-size: 14px; color: var(--gold-light);
          margin-bottom: 20px; letter-spacing: 1px;
        }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-col ul li a {
          color: rgba(255,255,255,0.45); font-size: 14px; font-family: 'Tajawal', sans-serif;
          text-decoration: none; transition: color 0.3s; cursor: pointer;
        }
        .footer-col ul li a:hover { color: var(--gold-light); }
        .footer-bottom {
          max-width: 1200px; margin: 0 auto;
          padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.08);
          display: flex; justify-content: space-between; align-items: center; flex-wrap: gap;
        }
        .footer-bottom p { color: rgba(255,255,255,0.3); font-size: 13px; font-family: 'Tajawal', sans-serif; }
        .footer-arabic {
          font-family: 'Tajawal', sans-serif; font-size: 20px;
          color: rgba(201,168,76,0.4); direction: rtl; letter-spacing: 4px;
        }
          

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        [data-animate] {
          opacity: 0; transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        [data-animate].visible {
          opacity: 1; transform: translateY(0);
        }


        .nrf-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}
.donation-cards {
  borderRadius:"12px",padding:"24px",marginBottom:"20px"
}

}
.hero {
  position: relative;
  overflow: hidden;
}

/* Big watermark logo */
.hero-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  z-index: 1;
}

.hero-watermark img {
  width: 500px;
  height: 500px;
  object-fit: contain;
}

/* Content above watermark */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

/* Welcome text */
.hero-welcome {
  font-size: 42px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
}

.hero-welcome span {
  color: gold;
}

}
  @media (max-width: 1100px){ .nrf-cards { grid-template-columns: repeat(4, 1fr); } }
  @media (max-width: 900px) { .nrf-cards { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .nrf-cards { grid-template-columns: repeat(2, 1fr); } }
`}</style>

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
            {[
            "home",
            "about",
            "donate",
            "programs",
            "blog",
            "contact"
            ].map(s => (
              <li key={s}><a className={activeNav===s?"active":""} onClick={()=>scrollTo(s)}>{s==="sadaqah"?"Sadaqah":s.charAt(0).toUpperCase()+s.slice(1)}</a></li>
            ))}
            {/* <li><a className="nav-donate" href={SBI_COLLECT_URL} target="_blank" rel="noopener noreferrer">Donate</a></li> */}
          </ul>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span/><span/><span/>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {["home",
            "about",
            "donate",
            "programs",
            "blog",
            "contact"].map(s => (
              <a key={s} onClick={()=>scrollTo(s)}>{s==="sadaqah"?"sadaqah":s.charAt(0).toUpperCase()+s.slice(1)}</a>
            ))}
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
      <button className="btn-primary" onClick={() => scrollTo("programs")}>
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
     

      {/* PROGRAMS */}
      <section id="programs" className="programs-section">
        <div className="section-header" id="prog-header" data-animate style={visibleSections["prog-header"]?{opacity:1,transform:"none"}:{}}>
          <span className="section-badge">WHAT WE DO</span>
          <h2 className="section-title">Our Programs & Initiatives</h2>
          <div className="section-divider"/>
          <p className="section-desc">Comprehensive Islamic services addressing the spiritual, educational, and material needs of the community.</p>
        </div>
        <div className="programs-grid" id="prog-grid" data-animate style={visibleSections["prog-grid"]?{opacity:1,transform:"none"}:{}}>
          {programs.map((p,i) => (
            <div key={i} className="program-card">
              <div className="program-icon">{p.icon}</div>
              <h3 className="program-title">{p.title}</h3>
              <p className="program-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
       {/* NRF WING HIGHLIGHT */}
      <section id="nrf" style={{background:"white",padding:"80px 5%",position:"relative",overflow:"hidden"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1}}>
          <div style={{textAlign:"center",marginBottom:"48px"}}>
            <img
              src={LogoNrf}
              alt="Nabiur Rahma Foundation"
              className="LogoNrfoundation"
              priority
            />
            {/* <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(26px,4vw,40px)",color:"white",marginBottom:"16px"}}>🌿 Nabiur Rahma Foundation</h2> */}
            <div style={{width:"80px",height:"3px",margin:"0 auto 20px",background:"linear-gradient(to right,transparent,var(--gold),transparent)"}}/>
              
          </div>
          <div className="nrf-cards">
            {[
              {icon:"🏠",title:"Shelter & Housing",desc:"Safe shelter and living support for homeless and needy families"},
              {icon:"🍚",title:"Food & Ration Drives",desc:"Monthly ration kits and food distribution to deserving households"},
              {icon:"🏥",title:"Medical Aid",desc:"Free health camps, blood donation drives & basic medical access"},
              {icon:"📚",title:"Education Support",desc:"Scholarships and educational aid for children of orphans & widows"},
              {icon:"💒",title:"Marriage Aid",desc:"Financial assistance for the marriage of orphan girls"},
              {icon:"💼",title:"Skill & Employment",desc:"Vocational training and micro-business support for self-reliance"},
              {icon:"🌧️",title:"Disaster Relief",desc:"Emergency humanitarian aid during floods, fires and calamities"},
              {icon:"🌱",title:"Green Initiatives",desc:"Tree plantation and environmental sustainability campaigns"},
            ].map(({icon,title,desc},i)=>(
              <div key={i} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"10px",padding:"24px 18px",textAlign:"center",transition:"all 0.3s"}}>
                <div style={{fontSize:"32px",marginBottom:"12px"}}>{icon}</div>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:"14px",color:"var(--gold-light)",marginBottom:"8px"}}>{title}</div>
                <div style={{fontFamily:"'Tajawal',sans-serif",fontSize:"13px",color:"rgba(255,255,255,0.5)",lineHeight:1.6}}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="about-section">
        <div className="about-grid" id="about-content" data-animate style={visibleSections["about-content"]?{opacity:1,transform:"none"}:{}}>
          {/* NRF Widow Support Visual Card */}
          <div className="about-visual">
            <div className="about-card-main" style={{flexDirection:"column",gap:"16px",padding:"12px",textAlign:"center"}}>
              <span style={{fontSize:"70px"}}>🌿</span>
              {/* Donation Details Box */}
            <div className="donation-cards">
              <div style={{fontFamily:"'Cinzel',serif",fontSize:"16px",color:"var(--gold-light)",marginBottom:"16px",textAlign:"center"}}>
                🏦 Donate to DAWAT-E-HAQ
              </div>
              <div style={{fontFamily:"'Tajawal',sans-serif",fontSize:"12px",color:"rgba(255,255,255,0.4)",textAlign:"center",marginBottom:"16px",letterSpacing:"1px"}}>
                Reg. No. 2025/10/IV/2370
              </div>
              <div style={{display:"flex", flexDirection:"column", gap:"10px", justifyContent: "space-between"}}>
                {[
                  {label:"Bank",val:"State Bank of India (SBI)"},
                  {label:"A/C Title",val:"DAWAT-E-HAQ"},
                  {label:"A/C No.",val:"44731768010"},
                  {label:"UPI ID",val:"dawatehaq@sbi"},
                ].map(({label,val},i)=>(
                  <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
                    <span style={{fontFamily:"'Tajawal',sans-serif",fontSize:"13px",color:"rgba(255,255,255,0.45)"}}>{label}</span>
                    <span style={{fontFamily:"'Tajawal',sans-serif",fontSize:"14px",color:"var(--gold-light)",fontWeight:600}}>{val}</span>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",gap:"10px",marginTop:"18px",flexWrap:"wrap"}}>
                <a href="https://wa.me/917209824997" target="_blank" rel="noopener noreferrer"
                  style={{flex:1,minWidth:"140px",background:"#25D366",color:"white",padding:"10px 16px",borderRadius:"6px",textAlign:"center",textDecoration:"none",fontFamily:"'Tajawal',sans-serif",fontSize:"13px",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"}}>
                  💬 Receipt on WhatsApp
                </a>
                <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer"
                  style={{flex:1,minWidth:"140px",background:"rgba(37,211,102,0.15)",border:"1px solid rgba(37,211,102,0.3)",color:"#25D366",padding:"10px 16px",borderRadius:"6px",textAlign:"center",textDecoration:"none",fontFamily:"'Tajawal',sans-serif",fontSize:"13px",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"}}>
                  📢 Join WhatsApp Channel
                </a>
              </div>
            </div>
            </div>
            <div className="about-card-secondary" style={{background:"linear-gradient(135deg,var(--gold),var(--gold-dark))"}}>
              <span className="number">15</span>
              <div className="label">Widows Supported Every Month</div>
              <div style={{marginTop:"8px",fontSize:"12px",fontFamily:"'Tajawal',sans-serif",opacity:0.8}}>₹1,000 each · With your help</div>
            </div>
          </div>

          {/* NRF Content */}
          <div className="about-text">
            <div className="about-gold-line"/>
            <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"}}>
              <span style={{fontSize:"22px"}}>🌿</span>
              <span style={{fontFamily:"'Tajawal',sans-serif",fontSize:"14px",color:"var(--gold-dark)",letterSpacing:"2px",fontWeight:600,textTransform:"uppercase"}}>Nabiur Rahma Foundation (NRF)</span>
            </div>
            <h2>Support Widows with<br/>Your Sadaqah ✨</h2>

            {/* Hadith Quote */}
            <div style={{background:"linear-gradient(135deg,rgba(201,168,76,0.08),rgba(201,168,76,0.03))",border:"1px solid rgba(201,168,76,0.25)",borderLeft:"4px solid var(--gold)",borderRadius:"8px",padding:"20px 24px",margin:"24px 0"}}>
              <p style={{fontStyle:"italic",color:"var(--text)",fontSize:"16px",lineHeight:1.8,margin:0}}>
                "The one who cares for a widow and the poor is like the one striving in the path of Allah." 🌸
              </p>
              <div style={{fontFamily:"'Tajawal',sans-serif",fontSize:"13px",color:"var(--gold-dark)",marginTop:"10px",fontWeight:600}}>— Prophet Muhammad ﷺ &nbsp;|&nbsp; Bukhari & Muslim</div>
            </div>

            <p style={{color:"var(--text-light)",lineHeight:1.9,fontSize:"16px",marginBottom:"16px"}}>
              💔 Many widows struggle daily to arrange food, medicine, and basic needs for their children. 
              With your support, we have begun helping <strong>15 families</strong> — and we aim to continue and 
              expand this mission of mercy to many more.
            </p>

            {/* How You Can Help */}
            <div style={{marginBottom:"24px"}}>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:"15px",color:"var(--text)",marginBottom:"12px",fontWeight:600}}>🌸 How You Can Help</div>
              <div className="about-values">
                {["Sponsor one widow's monthly support (₹1,000)","Contribute any amount as Sadaqah or Zakat","Share this message so others can join"].map((v,i)=>(
                  <div key={i} className="value-item"><div className="value-dot"/><div className="value-text">{v}</div></div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div style={{marginBottom:"24px"}}>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:"15px",color:"var(--text)",marginBottom:"12px",fontWeight:600}}>💰 Your Small Help Can</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
                {["🍚 Feed a hungry family","📚 Support children's education","💊 Bring relief to a struggling mother","🌱 Become Sadaqah Jariyah for you"].map((item,i)=>(
                  <div key={i} style={{background:"rgba(201,168,76,0.07)",border:"1px solid rgba(201,168,76,0.15)",borderRadius:"8px",padding:"12px 14px",fontFamily:"'Tajawal',sans-serif",fontSize:"14px",color:"var(--text-light)"}}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            

            <div style={{fontFamily:"'Tajawal',sans-serif",fontSize:"15px",color:"var(--text-light)",fontStyle:"italic",textAlign:"center",marginTop:"8px"}}>
              Aap ki chhoti si donation, kisi ki zindagi badal sakti hai. 🤍
            </div>
          </div>
        </div>
      </section>

       {/* AIMS & OBJECTIVES */}
      <section id="about" style={{background:"var(--cream)",padding:"100px 5%"}}>
        <div className="section-header" id="obj-header" data-animate style={visibleSections["obj-header"]?{opacity:1,transform:"none"}:{}}>
          <span className="section-badge">OUR MISSION</span>
          <h2 className="section-title">Aims & Objectives of the Trust</h2>
          <div className="section-divider"/>
          <p className="section-desc">
            <strong>Dawat-e-Haq Educational and Charitable Trust</strong> — Reg. No. 2025/10/IV/2370 — works for the welfare of the Muslim minority community and all of society, irrespective of caste, creed, colour, sex, or region.
          </p>
        </div>

        {/* Category Cards */}
        <div id="obj-cats" data-animate style={{maxWidth:"1200px",margin:"0 auto 60px",...(visibleSections["obj-cats"]?{opacity:1,transform:"none"}:{})}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"28px"}}>
            {[
              {
                icon:"🏫", color:"#1E3A5F", title:"Education Wing",
                items:[
                  "CBSE-affiliated schools (pre-primary to higher secondary)",
                  "English coaching & CUET/NEET/JEE preparation centers",
                  "Free & subsidized education with scholarships",
                  "Integrated Islamic & modern education programs",
                  "Islamic universities, research centers & higher education",
                  "Madrasas, Hifz schools & Dars-e-Nizami programs",
                  "'Alimiyyah (Islamic Scholar) degree courses",
                ]
              },
              {
                icon:"📢", color:"#2C4A1A", title:"Dawah & Outreach Wing",
                items:[
                  "Islamic outreach in English, Urdu, Arabic & regional languages",
                  "Lectures, seminars, interfaith dialogues & Islamic events",
                  "Distribution of Islamic literature & digital content",
                  "Official media channels: TV, YouTube, podcasts",
                  "Digital publications for dawah & religious awareness",
                  "Preservation of manuscripts & Islamic heritage",
                  "Collaboration with government & international NGOs",
                ]
              },
              {
                icon:"🤲", color:"#3D1A0A", title:"Nabiur Rahma Foundation (NRF)",
                items:[
                  "Orphan & widow shelter, food, clothing & basic amenities",
                  "Food drives, ration kits & disaster relief",
                  "Free health camps & blood donation drives",
                  "Financial aid for orphan girls' marriage",
                  "Self-employment, skill training & micro-business support",
                  "Environmental awareness & tree plantation drives",
                  "Collaboration with NGOs & government schemes",
                ]
              },
            ].map(({icon,color,title,items},i)=>(
              <div key={i} style={{background:"var(--white)",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 24px rgba(0,0,0,0.06)",border:"1px solid rgba(201,168,76,0.12)"}}>
                <div style={{background:`linear-gradient(135deg,${color},${color}dd)`,padding:"28px 24px 20px",display:"flex",alignItems:"center",gap:"14px"}}>
                  <span style={{fontSize:"36px"}}>{icon}</span>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:"17px",color:"white",lineHeight:1.3}}>{title}</div>
                </div>
                <div style={{padding:"20px 24px"}}>
                  {items.map((item,j)=>(
                    <div key={j} style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"7px 0",borderBottom:"1px solid rgba(0,0,0,0.05)"}}>
                      <span style={{color:"var(--gold)",marginTop:"2px",flexShrink:0,fontSize:"12px"}}>✦</span>
                      <span style={{fontFamily:"'Tajawal',sans-serif",fontSize:"14px",color:"var(--text-light)",lineHeight:1.6}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Objectives Accordion List */}
        <div id="obj-list" data-animate style={{maxWidth:"900px",margin:"0 auto",...(visibleSections["obj-list"]?{opacity:1,transform:"none"}:{})}}>
          <div style={{textAlign:"center",marginBottom:"32px"}}>
            <span style={{fontFamily:"'Cinzel',serif",fontSize:"20px",color:"var(--text)"}}>All 58 Trust Objectives at a Glance</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
            {[
              "Establish & operate CBSE schools (pre-primary to higher secondary)",
              "Set up CUET/NEET/JEE coaching & skill development academies",
              "Provide free education & scholarships to deserving students",
              "Offer integrated Islamic & moral education programs",
              "Establish Islamic universities & research centers",
              "Run madrasas, Hifz schools & Islamic learning centers",
              "Conduct Dars-e-Nizami & 'Alimiyyah programs",
              "Support dawah programs in multiple languages",
              "Organize Islamic lectures, seminars & interfaith dialogues",
              "Distribute Islamic literature & digital content",
              "Help orphans, widows with shelter, food & clothing",
              "Organize food drives & relief during calamities",
              "Facilitate free health camps & blood donation drives",
              "Financial aid for orphan girls' marriage & homeless support",
              "Support self-employment & micro-business initiatives",
              "Promote women's education & empowerment",
              "Collect & distribute Zakat, Sadaqah & Islamic donations",
              "Build & manage orphanages, old-age homes & rehab centers",
              "Manage Qurbani, Ramadan Iftar & Eid gift programs",
              "Provide humanitarian aid & disaster relief",
              "Collaborate with government bodies & international NGOs",
              "Operate official media: TV, YouTube, podcasts & digital platforms",
              "Promote environmental sustainability & tree plantation",
              "Capacity building of organizations with similar objectives",
              "Establish homes for the aged & mentally retarded children",
              "Provide shelter & housing to the homeless & needy",
              "Undertake & assist government programs & schemes",
              "Rehabilitation of socially dis-privileged groups",
              "CBR for physically & intellectually disabled persons",
              "Care for child labourers, CSW victims & HIV/AIDS victims",
              "Hospice programs for terminally ill patients",
              "Career counseling & vocational training programs",
              "Computer, IT, electronics & modern technology education",
              "Environmental education, soil & natural resource management",
              "Establish human resource development training centers",
              "Preserve manuscripts, monuments & places of national importance",
              "Work for welfare of neglected & marginalized communities",
              "Encourage family welfare activities among needy people",
              "Provide medical aid to handicapped & financially unfit persons",
              "Disaster relief in flood, famine, fire & earthquake-affected areas",
              "Coordinate with government on development & public interest",
              "Construct, maintain & improve trust buildings & infrastructure",
              "Issue appeals, raise funds & accept donations in cash or kind",
              "Acquire property (movable/immovable) for trust objectives",
              "Organize health, educational & welfare programs for women & children",
              "All lawful acts conducive to trust objectives (purely charitable)",
              "Operate Nabiur Rahma Foundation as dedicated NRF wing",
              "NRF: Orphan & widow shelter, food, clothing & basic amenities",
              "NRF: Ration drives, food drives & crisis relief",
              "NRF: Health camps, blood donation & medical care",
              "NRF: Financial aid for orphan girls & homeless support",
              "NRF: Self-employment, skill training & micro-business support",
              "NRF: Environmental sustainability & green initiatives",
              "NRF: Humanitarian aid & disaster relief",
              "NRF: Collaborate with NGOs, private bodies & government",
              "NRF: Create sub-units & project brands under the main trust",
              "Publish newsletters & use social media for awareness",
              "Acquire vehicles, equipment & infrastructure for operations",
            ].map((obj,i)=>(
              <div key={i} style={{display:"flex",gap:"12px",alignItems:"flex-start",background:"var(--white)",borderRadius:"8px",padding:"12px 14px",border:"1px solid rgba(201,168,76,0.1)"}}>
                <span style={{background:"var(--gold)",color:"var(--deep)",width:"22px",height:"22px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,flexShrink:0,fontFamily:"'Cinzel',serif"}}>{i+1}</span>
                <span style={{fontFamily:"'Tajawal',sans-serif",fontSize:"13px",color:"var(--text-light)",lineHeight:1.6}}>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Blog WHATSAPP_CHANNEL={WHATSAPP_CHANNEL}/>


      <div className="donate-banner">
        <h2>Support the Cause of Allah 🤲</h2>
        <p>
          Today we support 15 widows. With your help, tomorrow we can support many more.<br/>
          <em>Be the reason a widow sleeps with peace tonight.</em>
        </p>
        <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap",marginBottom:"16px"}}>
          {/* <a className="donate-sbi" href={SBI_COLLECT_URL} target="_blank" rel="noopener noreferrer">
            <span style={{fontSize:"24px"}}>🏦</span>
            <div>
              DONATE VIA SBI COLLECT
              <span className="bank-info">dawatehaq@sbi · A/C: 44731768010</span>
            </div>
          </a> */}
          <a className="donate-sbi" href="https://wa.me/917209824997" target="_blank" rel="noopener noreferrer" style={{background:"#25D366",color:"white"}}>
            <span style={{fontSize:"24px"}}>💬</span>
            <div>
              DONATION RECEIPT
              <span className="bank-info" style={{color:"rgba(255,255,255,0.7)"}}>WhatsApp: +91 7209824997</span>
            </div>
          </a>
        </div>
        <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer"
          style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"white",padding:"10px 24px",borderRadius:"100px",textDecoration:"none",fontFamily:"'Tajawal',sans-serif",fontSize:"14px",letterSpacing:"1px",transition:"all 0.3s"}}>
          📢 Join Our WhatsApp Channel
        </a>
      </div>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <span className="section-badge">GET IN TOUCH</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider"/>
        </div>
        <div className="contact-grid">
          <div className="contact-info" id="contact-info" data-animate style={visibleSections["contact-info"]?{opacity:1,transform:"none"}:{}}>
            <h3>We're Here to Help</h3>
            <p>Reach out for inquiries about our programs, partnerships, volunteering, or any other matter. We respond through WhatsApp for faster communication.</p>
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
            <div className="contact-detail">
              <div className="contact-detail-icon">💳</div>
              <div className="contact-detail-text">
                <strong>Donations (SBI Collect)</strong>
                <span>dawatehaq@sbi</span>
              </div>
            </div>
            <div className="whatsapp-note">
              <span>💬</span>
              <p>Contact form messages are sent directly via <strong>WhatsApp</strong> for faster response. Jazakallah Khair!</p>
            </div>
          </div>
          <div id="contact-form" data-animate style={visibleSections["contact-form"]?{opacity:1,transform:"none"}:{}}>
            {submitted ? (
              <div className="success-msg">
                ✅ JazakAllah Khair! Your message has been sent via WhatsApp. We'll respond soon insha'Allah.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleWhatsApp}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input required placeholder="Muhammad / Aisha..." value={formData.name}
                      onChange={e=>setFormData({...formData,name:e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input placeholder="+91 XXXXX XXXXX" value={formData.phone}
                      onChange={e=>setFormData({...formData,phone:e.target.value})}/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" value={formData.email}
                    onChange={e=>setFormData({...formData,email:e.target.value})}/>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea required rows={5} placeholder="Assalamu Alaikum, I'd like to inquire about..."
                    value={formData.message}
                    onChange={e=>setFormData({...formData,message:e.target.value})}/>
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
              {["home","about","programs","scholars","contact"].map(s=>(
                <li key={s}><a onClick={()=>scrollTo(s)}>{s.charAt(0).toUpperCase()+s.slice(1)}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            <ul>
              {["Islamic Education","Community Outreach","Research","Humanitarian Aid","Youth Development"].map(p=>(
                <li key={p}><a href="#">{p}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Donate</h4>
            <ul>
              <li><a href={SBI_COLLECT_URL} target="_blank" rel="noopener noreferrer">💳 SBI Collect</a></li>
              <li><a href="#">Zakat Fund</a></li>
              <li><a href="#">Sadaqah</a></li>
              <li><a href="#">Waqf</a></li>
            </ul>
          </div>
        </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 DAWAT-E-HAQ, Delhi. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll animation trigger */}
      <script dangerouslySetInnerHTML={{__html:`
        document.addEventListener('DOMContentLoaded', () => {
          const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
          }, {threshold: 0.15});
          document.querySelectorAll('[data-animate]').forEach(el => obs.observe(el));
        });
      `}}/>
    </>
  );
}
