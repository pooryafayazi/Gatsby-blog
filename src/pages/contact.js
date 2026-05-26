// src\pages\contact.js
import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("پیام شما دریافت شد مهندس پوریا! (این یک دموی استاتیک است)")
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="تماس با ما" />
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        marginTop: '20px',
        direction: 'rtl'
      }}>
        
        <div style={{ flex: '2 1 500px', backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: '#1a202c', marginBottom: '10px' }}>با ما در تماس باشید</h2>
          <p style={{ color: '#718096', marginBottom: '30px' }}>با پر کردم فرم زیر در اسرع وقت با شما تماس خواهیم گرفت:</p>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>نام شما</label>
                <input type="text" placeholder="مثلاً: پوریا" style={inputStyle} required />
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>آدرس ایمیل</label>
                <input type="email" placeholder="example@tech.com" style={inputStyle} required />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>موضوع</label>
                <input type="text" placeholder="همکاری، سوال و..." style={inputStyle} />
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>شماره تماس</label>
                <input type="tel" placeholder="0912..." style={inputStyle} />
              </div>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>پیام شما</label>
              <textarea rows="5" placeholder="چطور می‌تونم کمکت کنم؟" style={{...inputStyle, resize: 'vertical'}} required></textarea>
            </div>

            <button type="submit" style={{
              backgroundColor: '#3182ce',
              color: 'white',
              padding: '12px 25px',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background 0.3s'
            }}>
              ارسال پیام
            </button>
          </form>
        </div>

        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ backgroundColor: '#edf2f7', padding: '25px', borderRadius: '15px' }}>
            <h3 style={{ marginBottom: '15px' }}>راه‌های ارتباطی</h3>
            <p>📍 تهران، ایران</p>
            <p>📧 contact@poorya.com</p>
            <p>📞 +98 21 12345678</p>
          </div>
          
          <div style={mapSectionStyle}>
            <iframe 
              title="موقعیت من در گوگل مپ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.444342337651!2d52.3276633!3d36.446864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8fbd64520f8981%3A0xc3466487e45e851!2sShomal%20University!5e0!3m2!1sen!2sir!4v1700000000000!5m2!1sen!2sir" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '15px', minHeight: '350px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            
            <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
               📍 تهران میدان آزادی 
            </div>
        </div>
        </div>

      </div>
    </Layout>
  )
}
const mapSectionStyle = {
  display: 'flex',
  flexDirection: 'column'
}
const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flex: '1 1 200px'
}

const labelStyle = {
  fontSize: '0.9rem',
  fontWeight: 'bold',
  color: '#4a5568'
}

const inputStyle = {
  padding: '12px',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '1rem',
  outline: 'none',
  backgroundColor: '#f8fafc'
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
