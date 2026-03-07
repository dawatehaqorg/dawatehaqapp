import React, {useState, useRef, useEffect} from 'react'

import BlogImage1 from "../assets/blog/blog_img01.jpeg"
import BlogImage2 from "../assets/blog/blog_img02.jpeg"
import BlogImage3 from "../assets/blog/blog_img03.jpeg"
import BlogImage4 from "../assets/blog/blog_img04.jpeg"
import BlogImage5 from "../assets/blog/blog_img05.jpeg"
import BlogImage6 from "../assets/blog/blog_img06.jpeg"
import BlogImage7 from "../assets/blog/blog_img07.jpeg"
import BlogImage8 from "../assets/blog/blog_img08.jpeg"
import BlogImage9 from "../assets/blog/blog_img09.jpeg"
import BlogImage10 from "../assets/blog/blog_img10.jpeg"
import BlogImage11 from "../assets/blog/blog_img11.jpeg"
import BlogImage12 from "../assets/blog/blog_img12.jpeg"

function Blog({WHATSAPP_CHANNEL}) {
    const [blogSlide, setBlogSlide] = useState(0);
    const [blogTouch, setBlogTouch] = useState({x:0,dragging:false});
    const blogRef = useRef(null);
    const blogPosts = [
        {
          emoji: "🌿✨",
          tag: "NRF · Widow Support",
          tagColor: "#25D366",
          date: "Feb 2025",
          title: "Support Widows with Your Sadaqah",
          excerpt: "Under Nabiur Rahma Foundation, we are currently supporting 15 widows every month, providing each of them ₹1000 financial assistance so they can live with dignity, stability, and hope.",
          hadith: "\"The one who cares for a widow and the poor is like the one striving in the path of Allah.\" — Bukhari & Muslim",
          highlight: "15 Widows · ₹11,000/month each",
          img: "🕌",
          bg: <img src={BlogImage1} />,
          blogImg: BlogImage1,
        },
        {
          emoji: "🏫📚",
          tag: "Education",
          tagColor: "#C9A84C",
          date: "Jan 2025",
          title: "New Quran Hifz Program Launched",
          excerpt: "Alhamdulillah! Our Hifz school has enrolled its first batch of 30 students. Classes run six days a week under the guidance of qualified Huffaz. Admissions open for boys and girls aged 7–14.",
          hadith: "\"The best among you are those who learn the Quran and teach it.\" — Bukhari",
          highlight: "30 Students Enrolled · Batch 1",
          img: "📖",
          bg: "linear-gradient(135deg,#1A1A0D,#3D3A10)",
          
          blogImg: BlogImage2,
        },
        {
          emoji: "🍚❤️",
          tag: "NRF · Food Drive",
          tagColor: "#E8643A",
          date: "Ramadan 2024",
          title: "Ramadan Ration Kit Distribution",
          excerpt: "This Ramadan, with your generous support, we distributed 200+ ration kits to deserving families across Muzaffarpur and surrounding areas. Each kit contained rice, dal, oil, sugar, and dates.",
          hadith: "\"Whoever feeds a fasting person will have a reward equal to the person who fasted.\" — Tirmidhi",
          highlight: "200+ Kits · Muzaffarpur & Villages",
          img: "🎁",
          bg: "linear-gradient(135deg,#2A1209,#5C2810)",
          blogImg: BlogImage3,
        },
        {
          emoji: "💊🏥",
          tag: "Health Camp",
          tagColor: "#4A9EE8",
          date: "Dec 2024",
          title: "Free Medical Camp — 150 Patients Treated",
          excerpt: "A free health camp was organized in collaboration with local doctors. Over 150 patients received consultation, medicines, and blood tests at no cost. Special focus on women and elderly.",
          hadith: "\"Allah has not created a disease except that He has created a cure for it.\" — Bukhari",
          highlight: "150+ Patients · Free Medicines",
          img: "🩺",
          bg: "linear-gradient(135deg,#0A1E38,#0D3060)",
          blogImg: BlogImage4,
        },
        {
          emoji: "👧💍",
          tag: "NRF · Marriage Aid",
          tagColor: "#B066D4",
          date: "Nov 2024",
          title: "Nikaah Support for 3 Orphan Girls",
          excerpt: "Through your sadaqah, we were able to provide financial assistance and help arrange the Nikaah of 3 orphan girls from poor families. May Allah bless their marriages with barakah.",
          hadith: "\"Among the best acts of charity is helping a young person get married.\" — Ibn Majah",
          highlight: "3 Nikaahs · Dignified Ceremonies",
          img: "💐",
          bg: "linear-gradient(135deg,#25083A,#4A1066)",
          
          blogImg: BlogImage5,
        },
        {
          emoji: "📢🌐",
          tag: "Dawah",
          tagColor: "#E8C830",
          date: "Oct 2024",
          title: "Weekly Islamic Lecture Series Continues",
          excerpt: "Our weekly online lecture series 'Deen aur Zindagi' continues every Friday evening. Topics include Tafseer, Seerah, Fiqh and contemporary issues. Join our WhatsApp channel to receive updates.",
          hadith: "\"Convey from me, even one verse.\" — Bukhari",
          highlight: "Every Friday · 8 PM IST",
          img: "🎙️",
          bg: "linear-gradient(135deg,#1A1209,#3A2A06)",
          
          blogImg: BlogImage6,
        },
        {
          emoji: "🌱🌳",
          tag: "Environment",
          tagColor: "#4CAF50",
          date: "Sep 2024",
          title: "100 Trees Planted — Green Muzaffarpur",
          excerpt: "As part of our environmental initiative, volunteers planted 100 saplings across schools and public spaces in Muzaffarpur. Islam teaches us to be stewards of the earth — even planting a tree is Sadaqah.",
          hadith: "\"If the Hour is imminent and one of you has a palm shoot, let him plant it.\" — Ahmad",
          highlight: "100 Trees · 5 Locations",
          img: "🌳",
          bg: "linear-gradient(135deg,#0A2010,#154020)",
          
          blogImg: BlogImage7,
        },
        {
          emoji: "📦🚚",
          tag: "NRF · Relief",
          tagColor: "#FF8C42",
          date: "Aug 2024",
          title: "Flood Relief — Aid Reached 80 Families",
          excerpt: "During the Bihar floods, our NRF team distributed emergency relief packages including food, clean water, and essentials to 80 affected families in low-lying areas of Muzaffarpur district.",
          hadith: "\"The believers in their mutual love are like one body — when one part suffers, the rest responds.\" — Bukhari",
          highlight: "80 Families · Emergency Relief",
          img: "🆘",
          bg: "linear-gradient(135deg,#0A1E2A,#0C3050)",
          
          blogImg: BlogImage8,
        },
      ];
    
      const VISIBLE = typeof window !== "undefined" && window.innerWidth < 640 ? 1 : typeof window !== "undefined" && window.innerWidth < 1024 ? 2 : 3;
      const getVisible = () => {
      if (window.innerWidth < 768) return 1;      // mobile
      if (window.innerWidth < 1024) return 2;     // tablet
      return 3;                                   // desktop
    };
      const maxSlide = Math.max(0, blogPosts.length - VISIBLE);
      const prevBlog = () => setBlogSlide(s => Math.max(0, s - 1));
      const nextBlog = () => setBlogSlide(s => Math.min(maxSlide, s + 1));
    useEffect(() => {
      const handleResize = () => {
        setBlogSlide(0);
      };
    
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <>
    <style>{`
    
        /* ===== BLOG / UPDATES SLIDER ===== */
        .blog-section {
          background: var(--deep);
          padding: 80px 0;
          overflow: hidden;
          position: relative;
        }
        .blog-section::before {
          content: ''; position: absolute; inset: 0;
          background-size: 60px 60px; opacity: 0.15;
          pointer-events: none;
        }
        .blog-inner {
          max-width: 1300px; margin: 0 auto; padding: 0 5%;
        }
        .blog-header-row {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: 40px; gap: 16px; flex-wrap: wrap;
        }
        .blog-header-left .badge {
          font-family: 'Tajawal', sans-serif; font-size: 12px;
          color: var(--gold-light); letter-spacing: 3px; text-transform: uppercase;
          display: block; margin-bottom: 10px;
        }
        .blog-header-left h2 {
          font-family: 'Cinzel', serif; font-size: clamp(24px,4vw,38px);
          color: white; line-height: 1.2;
        }
        .blog-header-left h2 span { color: var(--gold); }
        .blog-divider {
          width: 60px; height: 2px; margin-top: 14px;
          background: linear-gradient(to right, var(--gold), transparent);
        }
        .blog-channel-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg,#25D366,#128C7E);
          color: white; padding: 11px 22px; border-radius: 100px;
          font-family: 'Tajawal', sans-serif; font-size: 13px; font-weight: 600;
          text-decoration: none; transition: all 0.3s; white-space: nowrap;
          box-shadow: 0 6px 20px rgba(37,211,102,0.3); flex-shrink: 0;
        }
        .blog-channel-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(37,211,102,0.45); }

        /* Slider wrapper */
        .blog-slider-wrap { position: relative; }
        .blog-track-outer {
          overflow: hidden;
          border-radius: 4px;
        }
        .blog-track {
          display: flex;
          gap: 20px;
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
          touch-action: pan-y;
        }

        /* Card */
        .blog-card {
          flex: 0 0 calc(33.333% - 14px);
          min-width: 0;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          display: flex; flex-direction: column;
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .blog-card-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
        }
        .blog-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.92) 100%);
        }
        .blog-card-content {
          position: relative; z-index: 2;
          padding: 22px 20px 20px;
          display: flex; flex-direction: column;
          height: 100%; min-height: 340px;
        }
        .blog-card-top {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 12px;
        }
        .blog-tag {
          font-family: 'Tajawal', sans-serif; font-size: 11px; font-weight: 600;
          padding: 4px 12px; border-radius: 100px;
          letter-spacing: 1px; text-transform: uppercase;
          display: inline-block;
        }
        .blog-date {
          font-family: 'Tajawal', sans-serif; font-size: 11px;
          color: rgba(255,255,255,0.45); letter-spacing: 1px;
        }
        .blog-emoji {
          font-size: 32px; margin-bottom: 12px; display: block; line-height: 1;
        }
        .blog-card-title {
          font-family: 'Cinzel', serif; font-size: 17px;
          color: white; margin-bottom: 10px; line-height: 1.35;
        }
        .blog-card-excerpt {
          font-family: 'Tajawal', sans-serif; font-size: 13px;
          color: rgba(255,255,255,0.65); line-height: 1.7;
          flex: 1; margin-bottom: 14px;
          display: -webkit-box; -webkit-line-clamp: 3;
          -webkit-box-orient: vertical; overflow: hidden;
        }
        .blog-hadith {
          background: rgba(255,255,255,0.06);
          border-left: 3px solid var(--gold);
          border-radius: 0 6px 6px 0;
          padding: 9px 12px; margin-bottom: 14px;
          font-family: 'Lora', serif; font-style: italic;
          font-size: 12px; color: rgba(255,255,255,0.55); line-height: 1.6;
          display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; overflow: hidden;
        }
        .blog-highlight {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(201,168,76,0.15);
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 100px; padding: 5px 12px;
          font-family: 'Tajawal', sans-serif; font-size: 12px;
          color: var(--gold-light); font-weight: 600;
        }
        .blog-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 16px; padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .blog-read-more {
          font-family: 'Tajawal', sans-serif; font-size: 13px;
          color: var(--gold-light); font-weight: 600;
          display: flex; align-items: center; gap: 4px;
          text-decoration: none; cursor: pointer;
          transition: gap 0.2s;
        }
        .blog-read-more:hover { gap: 8px; }
        .blog-wa-badge {
          display: flex; align-items: center; gap: 5px;
          font-family: 'Tajawal', sans-serif; font-size: 11px;
          color: #25D366; font-weight: 500;
        }
          
@media (max-width: 1024px) {
  .blog-card {
    flex: 0 0 calc(100% / 2 - 20px);
  }
}

@media (max-width: 768px) {
  .blog-card {
    flex: 0 0 100%;
  }
}
    `}</style>
    {/* ===== BLOG / UPDATES SLIDER ===== */}
      <section id="blog" className="blog-section">
        <div className="blog-inner">
          {/* Header row */}
            <div className="blog-header-row">
                <div className="blog-header-left">
                <span className="badge">📰 LATEST UPDATES</span>
                <h2><span>Community Updates</span></h2>
                <div className="blog-divider"/>
                </div>
                <a className="blog-channel-btn" href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Join Our Channel
                </a>
            </div>

          {/* Slider */}
          <div className="blog-slider-wrap" ref={blogRef}>
            <div className="blog-track-outer">
              <div
                className="blog-track"
                style={{transform:`translateX(calc(-${blogSlide * (100/getVisible())}% - ${blogSlide * 20 / getVisible()}px))`}}>
                {blogPosts.map((post, i) => (
                  <div key={i} className="blog-card">
                    {/* Background gradient */}
                    <div className="blog-card-bg" style={{background: post.bg}}/>
                    {/* Pattern overlay */}
                    <div className="blog-card-overlay"/>

                    <div className="blog-card-content">
                      {/* Top row */}
                      {/* <div className="blog-card-top">
                        <span className="blog-tag" style={{background:`${post.tagColor}22`,color:post.tagColor,border:`1px solid ${post.tagColor}44`}}>
                          {post.tag}
                        </span>
                        <span className="blog-date">{post.date}</span>
                      </div> */}
                      <img src={post.blogImg} />
                        
                      {/* Emoji */}
                      {/* <span className="blog-emoji">{post.emoji}</span> */}

                      {/* Title */}
                      {/* <h3 className="blog-card-title">{post.title}</h3> */}

                      {/* Excerpt */}
                      {/* <p className="blog-card-excerpt">{post.excerpt}</p> */}

                      {/* Hadith */}
                      {/* <div className="blog-hadith">{post.hadith}</div> */}

                      {/* Highlight badge */}
                      {/* <div className="blog-highlight">✦ {post.highlight}</div> */}

                      {/* Footer */}
                      <div className="blog-card-footer">
                        <a className="blog-read-more" href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
                          Read More →
                        </a>
                        <span className="blog-wa-badge">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          WhatsApp Channel
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nav controls */}
            <div className="slider-nav">
              <button className="slider-arrow" onClick={prevBlog} disabled={blogSlide === 0}>‹</button>
              {/* <div className="slider-dots">
                {blogPosts.map((_, i) => (
                  <button key={i} className={`slider-dot${blogSlide===i?" active":""}`} onClick={()=>setBlogSlide(Math.min(i, maxSlide))}/>
                ))}
              </div> */}
              <button className="slider-arrow" onClick={nextBlog} disabled={blogSlide >= maxSlide}>›</button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{textAlign:"center",marginTop:"40px"}}>
            <p style={{fontFamily:"'Tajawal',sans-serif",fontSize:"14px",color:"rgba(255,255,255,0.4)",marginBottom:"16px",letterSpacing:"1px"}}>
              Follow our WhatsApp Channel to receive all updates, duas, and announcements directly
            </p>
            <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer"
              style={{display:"inline-flex",alignItems:"center",gap:"10px",background:"rgba(37,211,102,0.1)",border:"1px solid rgba(37,211,102,0.3)",color:"#25D366",padding:"12px 28px",borderRadius:"100px",textDecoration:"none",fontFamily:"'Tajawal',sans-serif",fontSize:"14px",fontWeight:600,transition:"all 0.3s"}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              📢 Join Dawat-e-Haq WhatsApp Channel
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog