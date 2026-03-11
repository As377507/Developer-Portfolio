# Developer Portfolio 🚀

A modern, highly interactive, and responsive developer portfolio built with **React** and **Vite**. Showcasing my projects, skills, education, and professional journey as a Full Stack Developer & AI Enthusiast.

## ✨ Features

- **Modern & Premium UI:** Built with custom CSS featuring glassmorphism, dynamic gradients (cyan & purple), and smooth micro-animations.
- **Fully Responsive:** Fluid design that works seamlessly across desktops, tablets, and mobile devices.
- **Working Contact Form:** Integrated with **Web3Forms** so visitors can send messages directly to your email without a backend.
- **Downloadable Resume:** One-click access for recruiters and clients to download the actual PDF resume.
- **Optimized Performance:** Fast loads and a great Lighthouse score thanks to Vite and optimized React components.
- **Self-Contained Components:** Clean, modular structure making it easy to update projects, skills, or experience over time.

## 🛠️ Tech Stack

- **Frontend Framework:** React.js 18
- **Build Tool:** Vite
- **Styling:** Custom Vanilla CSS with CSS Variables & modern layouts (Flexbox/Grid)
- **Form Handling:** Web3Forms API
- **Icons:** Inline optimized SVG icons (GitHub, LinkedIn, LeetCode)
- **Fonts:** Space Grotesk (Main Text) & Fira Code (Monospace Tags)

## 📂 Architecture & Sections

The portfolio consists of several single-page sections:

- `Hero` — Striking introduction with a typewriter animation, profile stats, and quick-action buttons (View Projects, Download Resume).
- `About` — Bio and academic performance visualizer with animated score bars.
- `Skills` — Categorized technical skills (Languages, Frameworks, DBs, Cloud, tooling) mapped with colored tags.
- `Projects` — Highlighting key works (Smart Task Tracker, previous Portfolio, AI Mental Health Chatbot, Time-Series Forecasting).
- `Education` — An interactive timeline charting my academic journey.
- `Certifications` — Proof of expertise in Deep Learning (IBM, NPTEL) and Docker.
- `Contact` — Functional messaging component alongside social media quick links.

## 🚀 Getting Started Locally

To run this project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/As377507/Developer-Portfolio.git
   cd Developer-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   - Create a `.env` file in the root directory.
   - Get a free access key from [Web3Forms](https://web3forms.com/).
   - Add the following line to your `.env` file:
     ```env
     VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
     ```

4. **Add your Resume:**
   - Ensure your resume is named `resume.pdf` and is placed inside the `public/` folder.

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view it in the browser.

## 🌐 Deployment (Vercel)

This portfolio is fully ready to be deployed on **Vercel**:

1. Log in to Vercel and Import your GitHub repository.
2. Under "Environment Variables", add:
   - Name: `VITE_WEB3FORMS_KEY`
   - Value: `[Your Access Key]`
3. Click **Deploy**.

## 👨‍💻 Author

**Akash Sen**
- Email: asen05897@gmail.com
- LinkedIn: [akash-sen-28834a30b](https://linkedin.com/in/akash-sen-28834a30b)
- GitHub: [As377507](https://github.com/As377507)

---

*Built with ❤️ in Kolkata.*
#

