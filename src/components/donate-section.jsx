import React, { useState } from 'react'
import qrcode from "../assets/qrcode_dawatehaq.jpg";
import "./DonateSection.css";
import { FaWhatsapp, FaCopy, FaUniversity } from "react-icons/fa";
import { MdQrCodeScanner } from "react-icons/md";
import { CopyTooltip } from './copy-tooltip';

const BANK_DETAILS = [
  {
    label: "Bank",
    value: "State Bank of India",
  },
  {
    label: "Account Name",
    value: "DAWAT-E-HAQ",
  },
  {
    label: "Account Number",
    value: "44731768010",
    copy: true,
  },
  {
    label: "UPI ID",
    value: "dawatehaq@sbi",
    copy: true,
  },
];

const HELP_POINTS = [
  "Sponsor one widow's monthly support (₹1,000)",
  "Contribute any amount as Sadaqah or Zakat",
  "Share this mission with family and friends",
];

const IMPACT=[
{
icon:"🍚",
title:"Food Assistance",
desc:"Monthly ration for struggling families"
},
{
icon:"🎓",
title:"Education",
desc:"School supplies and fees"
},
{
icon:"💊",
title:"Healthcare",
desc:"Medicines and emergency treatment"
},
{
icon:"🤲",
title:"Sadaqah Jariyah",
desc:"Continuous reward in the Hereafter"
}
]

function DonateSection({ visibleSections, WHATSAPP_CHANNEL }) {
    console.log(visibleSections)
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied successfully.");
    } catch {
      alert("Unable to copy.");
    }
  };

  return (
    <section className="donate-section" id="donate">
      <div
        className={`donate-container `}
        id="about-content"
      >
        {/* ================= LEFT ================= */}

        <div className="donation-card">
          <div className="donation-header">
            <span className="donation-badge">
              Support Dawat-E-Haq
            </span>

            <h3>Donate Securely</h3>

            <p>
              Every contribution directly supports widows and
              underprivileged families.
            </p>
          </div>

          <div className="qr-card">
            <MdQrCodeScanner className="qr-icon" />

            <h4>Scan to Donate</h4>

            <img
              src={qrcode}
              alt="Donation QR Code"
              className="qr-image"
            />
            
            <span>Compatible with all UPI Apps</span>
          </div>
            <div className="stats">

            <div>

            <h2>15+</h2>

            <p>Families</p>

            </div>

            <div>

            <h2>₹15K</h2>

            <p>Monthly Goal</p>

            </div>

            <div>

            <h2>100%</h2>

            <p>Secure UPI</p>

            </div>

            </div>

          <div className="bank-card">
            <div className="card-title">
              <FaUniversity />
              Bank Details
            </div>

            {BANK_DETAILS.map((item) => (
              <div className="bank-row" key={item.label}>
                <span>{item.label}</span>

                <div className="bank-value">
                  <strong>{item.value}</strong>
                  <CopyTooltip value={item.value} />
                </div>
              </div>
            ))}

            
          </div>

          <div className="donation-actions">
            <a
              href="https://wa.me/917209824997"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              <FaWhatsapp />
              Send Donation Receipt
            </a>

            <a
              href={WHATSAPP_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              <FaWhatsapp />
              Join WhatsApp Channel
            </a>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="donation-content">
          <span className="section-tag">
            Nabiur Rahma Foundation
          </span>

          <h2>
            Support Widows with Your
            <br />
            Sadaqah
          </h2>

          <p className="lead-text">
            Your donation brings food, education, healthcare,
            and hope to families struggling to survive.
          </p>

          <div className="quote-card">
            <div className="quote-mark">❝</div>

            <p>
              The one who cares for a widow and the poor is like
              the one striving in the path of Allah.
            </p>

            <span>
              — Prophet Muhammad ﷺ
              <br />
              Sahih Bukhari & Muslim
            </span>
          </div>

          <div className="story-card">
            <h3>Why Your Donation Matters</h3>

            <p>
              Many widows struggle every day to provide food,
              clothing, education and medicine for their
              children.
            </p>

            <p>
              With your support, we currently assist
              <strong> 15 families </strong>
              every month and hope to reach many more.
            </p>
          </div>

          <div className="help-section">
            <h3>How You Can Help</h3>

            <div className="help-list">
              {HELP_POINTS.map((item) => (
                <div className="help-item" key={item}>
                  <span className="bullet"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="impact-section">
            <h3>Your Contribution Creates</h3>

            <div className="impact-grid">

{IMPACT.map(item=>(

<div className="impact-card">

<div className="impact-icon">
{item.icon}
</div>

<h4>{item.title}</h4>

<p>{item.desc}</p>

</div>

))}

</div>
          </div>

          <div className="donation-footer">
            A small donation today can change someone's life
            forever.
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateSection;