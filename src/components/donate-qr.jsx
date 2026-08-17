import React from 'react'

function DonateQR({qrcode_dawate, WHATSAPP_CHANNEL}) {
  return (
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
            borderRadius: "100px", marginLeft:"20px", marginTop:"20px"}}
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
  )
}

export default DonateQR