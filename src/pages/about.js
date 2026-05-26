// src\pages\about.js
import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const AboutPage = ({ location }) => {
  const certificates = [
    { name: "Programming Fundamental Python", color: "#80bade" },
    { name: "Python", color: "#6db2dc" },
    { name: "Advanced Python", color: "#4aa6e0" },
    { name: "OOP", color: "#2f9ce0" },
    { name: "Django", color: "#0974b7" },
    { name: "Advanced Django", color: "#55987e" },
    { name: "React", color: "#306f57" },
    { name: "Advanced React", color: "#1f533f" },
    { name: "Front-End (html/css/js)", color: "#12402e" },
    { name: "JavaScipt", color: "#092e20" },
    { name: "Git", color: "#d99a8f" },
    { name: "Docker", color: "#bf7062" },
    { name: "SQL Server", color: "#ce6957" },
    { name: "FastAPI", color: "#eb6149" },
    { name: "Machine Learning", color: "#f05032" },
    { name: "Network Basic", color: "#b7cc59" },
  ];

  return (
    <Layout location={location} title="درباره من">
      <Seo title="درباره پوریا" />
      
      <div style={{ direction: 'rtl', padding: '20px 0' }}>
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          alignItems: 'center',
          marginBottom: '60px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <StaticImage 
              src="../images/profile-pic.png"
              alt="پوریا فیاضی"
              style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              width={400}
            />
          </div>
          
          <div>
            <h1 style={{ color: '#2d3748', marginBottom: '25px' }}>درباره من</h1>
            <p style={bioTextStyle}>من پوریا، فارغ‌التحصیل مهندسی کامپیوتر از دانشگاه شمال هستم که مسیر حرفه‌ای خود را با پروژه‌های خلاقانه‌ای مثل طراحی پلتفرم آنلاین خرید و فروش خودرو آغاز کردم.</p>
            <p style={bioTextStyle}>علاقه وافرم به تحلیل داده باعث شد تا پذیرش مقطع ارشد رشته دیتا ساینس دانشگاه مسینا ایتالیا را کسب کرده و در کنار آن، مهارت‌های زبانی خود را در انگلیسی (IELTS 6.0) و ایتالیایی (A2) تقویت کنم.</p>
            <p style={bioTextStyle}>در دنیای برنامه‌نویسی، تسلط عمیقی بر پایتون و مفاهیم شیءگرایی دارم و گواهینامه‌های معتبری در زمینه‌های Git، یادگیری ماشین و پایتون پیشرفته از مکتب‌خونه دریافت کرده‌ام.</p>
            <p style={bioTextStyle}>در حال حاضر به عنوان یک مشتاق دنیای وب و زیرساخت، روی لبه تکنولوژی‌های مدرن مثل Django، Docker و SQL Server حرکت می‌کنم تا راه‌کارهای مقیاس‌پذیر خلق کنم.</p>
            <p style={bioTextStyle}>پایان‌نامه دوره کارشناسی من که با نمره کامل ۲۰ پاس شد، ترکیبی از قدرت پایتون و زبان‌های وب بود که دید من را نسبت به مدیریت پایگاه‌داده و تجربه کاربری (UX) وسعت بخشید.</p>
            <p style={bioTextStyle}>اکنون با تمرکز بر اکوسیستم React و Next.js، در تلاش هستم تا تجربه مهندسی خود را با دنیای مدرن فرانت‌اِند ادغام کرده و پروژه‌هایی با استانداردهای جهانی توسعه دهم.</p>
          </div>
        </section>

        <section style={{ marginTop: '50px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#4a5568' }}>گواهینامه‌های تخصصی مکتب‌خونه</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '20px'
          }}>
            {certificates.map((cert, index) => (
              <div key={index} style={{
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                borderTop: `5px solid ${cert.color}`,
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                textAlign: 'center',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2d3748' }}>{cert.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#a0aec0', marginTop: '5px' }}>تأیید شده</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

const bioTextStyle = {
  lineHeight: '1.9',
  fontSize: '1.05rem',
  color: '#4a5568',
  marginBottom: '15px',
  textAlign: 'justify'
}

export default AboutPage
