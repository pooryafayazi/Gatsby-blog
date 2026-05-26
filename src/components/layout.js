// src\components\layout.js
import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Layout = ({ location, title, children }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ 
      direction: 'rtl', 
      backgroundColor: '#f4f7f6',
      minHeight: '100vh' 
    }}>
      <header style={{
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        padding: '1rem 5%',
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <nav>
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: isMobile ? '10px' : '25px', 
            margin: 0, 
            padding: 0,
            fontSize: isMobile ? '0.8rem' : '0.9rem'
          }}>
            <li><StyledLink to="/">صفحه نخست</StyledLink></li>
            <li><StyledLink to="/blog">مقالات</StyledLink></li>
            <li><StyledLink to="/about">درباره ما</StyledLink></li>
            <li><StyledLink to="/contact">تماس با ما</StyledLink></li>
          </ul>
        </nav>

        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0056b3' }}>
          Poorya <span style={{fontSize: '0.8rem', color: '#333'}}>فیاضی</span>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 20px' }}>
        {children}
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid #ddd', marginTop: '4rem', color: '#777' }}>
        © {new Date().getFullYear()} Poorya Blog - طراحی شده توسط فریم ورک Gatsby
      </footer>
    </div>
  )
}

// const navLinkStyle = {
//   textDecoration: 'none',
//   color: '#333',
//   fontWeight: '600',
//   transition: 'color 0.3s'
// }

const StyledLink = styled(Link)`
  text-decoration: none;
  /* استفاده از رنگ ثابت یا متغیر */
  color: #333;
  font-weight: 600;
  /* انیمیشن برای تغییر رنگ */
  transition: color 0.3s;

  /* حالا اینجا به راحتی هوور رو تعریف می‌کنیم */
  /* علامت & به خودِ المان اشاره دارد (مثل Sass) */
  &:hover {
    color: #3b81cb;
    /* حتی می‌توانی افکت‌های پیچیده‌تر مثل زیرخط هم اضافه کنی */
  }
`;

export default Layout
