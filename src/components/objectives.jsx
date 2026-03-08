import React, { useState } from 'react'

function Objectives({visibleSections}) {
    const [showObjectives, setShowObjectives] = useState(false);
    const objective = [
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
            ]
  return (
    <>
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
        <div id="obj-list" data-animate style={{maxWidth:"1200px",margin:"0 auto",...(visibleSections["obj-list"]?{opacity:1,transform:"none"}:{})}}>
          
          <div style={{textAlign:"center",marginBottom:"50px",}}>
  <button
  className="objectives-btn"
  onClick={() => setShowObjectives(prev => !prev)}
  aria-expanded={showObjectives}
>
  <span>All 58 Trust Objectives at a Glance</span>
  <span className={`arrow ${showObjectives ? "open" : ""}`}>
    {showObjectives ? "▲" : "▼"}
  </span>
</button>
</div>
{showObjectives && (
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr", gap:"10px"}}>
            {objective.map((obj,i)=>(
              <div key={i} style={{display:"flex",gap:"12px",alignItems:"flex-start",background:"var(--white)",borderRadius:"8px",padding:"12px 14px",border:"1px solid rgba(201,168,76,0.1)"}}>
                <span style={{background:"var(--gold)",color:"var(--deep)",width:"22px",height:"22px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,flexShrink:0,fontFamily:"'Cinzel',serif"}}>{i+1}</span>
                <span style={{fontFamily:"'Tajawal',sans-serif",fontSize:"13px",color:"var(--text-light)",lineHeight:1.6}}>{obj}</span>
              </div>
            ))}
          </div>
)}
        </div>
      </section>

    </>
  )
}

export default Objectives