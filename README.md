# Aman Sharma - Professional Portfolio Website

![Portfolio Preview](./frontend/public/profile%20pic.jpeg)

A modern, highly interactive, and fully responsive personal portfolio website built to showcase my projects, experience, skills, and publications. The UI features a premium design aesthetic utilizing glassmorphism, fluid animations, and a seamless light/dark mode toggle.

## ✨ Key Features

- **Premium UI/UX**: Designed with a focus on modern web aesthetics, including glassmorphism effects, custom gradients, and soft shadows.
- **Interactive Animations**: Powered by `framer-motion` for buttery smooth scroll reveals, hover effects, and full-screen image lightboxes.
- **Responsive Layout**: Flawlessly adapts to all screen sizes (mobile, tablet, desktop) ensuring an equal, symmetrical grid layout across the board.
- **Dark/Light Mode**: First-class support for both themes with dedicated color palettes for optimal contrast and readability.
- **Dynamic Projects & Experience Sections**: Highlights full-stack projects (MERN & AI), hackathons, leadership roles, and research publications.
- **Client-Side Contact Form**: A frictionless contact section that directly bridges recruiters to your default email client.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18, Vite
- **Styling**: Tailwind CSS (with custom tokens for a premium "Apple-like" feel)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages (Frontend) / Vercel (Projects)

## 🚀 Running Locally

If you'd like to run this project locally on your machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amansharmacs1/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **View in browser**
   Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## 📂 Project Structure

```text
Portfolio-Website/
├── frontend/
│   ├── public/              # Static assets (images, project screenshots, etc.)
│   ├── src/
│   │   ├── components/      # Reusable UI components (Navbar, Theme Toggle, etc.)
│   │   ├── pages/           # Main page layouts (Home.jsx)
│   │   ├── sections/        # Individual portfolio sections (Hero, About, Projects, etc.)
│   │   ├── App.jsx          # Main application routing and theme context
│   │   ├── index.css        # Tailwind directives and custom utility classes
│   │   └── main.jsx         # React DOM rendering entry point
│   ├── package.json
│   ├── tailwind.config.js   # Tailwind theme configurations (colors, fonts)
│   └── vite.config.js       # Vite configuration
└── backend/                 # (Optional) Source code for backend services
```

## 🌐 Live Deployment

The frontend of this portfolio is deployed automatically using GitHub Pages. 
View it live here: [https://Amansharmacs1.github.io/Portfolio-Website/](https://Amansharmacs1.github.io/Portfolio-Website/)

---

*Designed and developed by Aman Sharma.*