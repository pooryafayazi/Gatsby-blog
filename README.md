# 🚀 Poorya Fayyazi's Personal Portfolio (Built with Gatsby)

This is my personal website, developed using the **Gatsby** framework and based on **React**. The purpose of this project is to showcase my technical articles, resume, and skills in the field of Computer Engineering and Programming.

---

## 🛠 Tech Stack

This project utilizes the most up-to-date tools in the frontend world:

*   **Gatsby v5**: For generating a high-speed Static Site (SSG).
*   **React**: For building the User Interface components.
*   **GraphQL**: For managing and fetching data from Markdown files.
*   **CSS Modules**: For modular styling and avoiding class conflicts (with full RTL support).
*   **TypeScript**: To enhance code stability and provide precise typing for GraphQL data.
*   **Gatsby Plugin Image**: For advanced image optimization (including Lazy Loading and WebP format).

---

## ✨ Key Features

1.  **Full RTL Support**: Complete Right-to-Left implementation for Persian language using the "Vazir" font.
2.  **Responsive Design**: Fully responsive layout for mobile and desktop (featuring intelligent gap adjustment in the navigation bar).
3.  **Blog Engine**: A Markdown-based blogging system located in the `content/blog` directory.
4.  **SEO Optimized**: Utilizing a dedicated SEO component to manage Meta tags and Open Graph data.
5.  **Google Maps Integration**: Integrated location map on the "Contact Us" page.
6.  **Dynamic Page Generation**: Automated article page creation using `gatsby-node.js`.

---

## 📂 Project Structure
```text
├── content/blog        # All articles (Markdown + Images)
├── src/
│   ├── components/     # Shared components (Layout, Seo, Bio, etc.)
│   ├── fonts/          # Local project fonts (Vazir)
│   ├── pages/          # Main pages (Home, About, Contact, Blog)
│   ├── templates/      # Custom templates for blog posts
│   └── styles/         # Global and modular styles
├── gatsby-config.js    # Core Gatsby configuration and plugins
└── gatsby-node.js      # Logic for dynamic page generation
