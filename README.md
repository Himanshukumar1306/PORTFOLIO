# 🌌 Immersive 3D Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live_Demo-Netlify-00AD9F?style=for-the-badge&logo=netlify&logoColor=white)](https://stellar-brigadeiros-a52807.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Portfolio--Repo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Himanshukumar1306/PORTFOLIO)
[![Tech Stack](https://img.shields.io/badge/Stack-React_19_--_Tailwind_v4-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)

Welcome to my personal portfolio codebase! This is a highly immersive, visually stunning, and performance-optimized single-page application built using the latest web technologies to showcase my skills, projects, certifications, and contributions.

🔗 **Access the Live Portfolio here:** **[stellar-brigadeiros-a52807.netlify.app](https://stellar-brigadeiros-a52807.netlify.app/)**

---

## ✨ Core Features

*   **🌌 Immersive 3D Galaxy**: A beautiful, interactive 3D particle background system powered by Three.js, `@react-three/fiber`, and `@react-three/drei` that responds to mouse movements.
*   **📊 Dynamic GitHub Contribution Chart**: A custom-built, synchronized activity tracker that retrieves and displays my actual contribution history directly from GitHub, ensuring a real-time showcase of my coding dedication.
*   **💻 LeetCode Activity Tracker**: A visual tracker representing my problem-solving activity, showcasing my technical dedication and algorithmic skills.
*   **📜 Interactive Certificate Viewer**: A custom-built PDF and image credential viewer featuring zooming, downloading, and printing capabilities.
*   **🎨 Premium Glassmorphism UI**: Beautiful, interactive card containers featuring real-time backdrop filtering, styled with Tailwind CSS v4 and animated using Framer Motion.
*   **📱 Responsive & Optimized**: Tailored layout supporting all device viewports, from small smartphones to ultra-wide desktop monitors.

---

## 🛠️ Technology Stack

*   **Core**: React 19, JavaScript (ES6+), HTML5
*   **Styling**: Tailwind CSS v4, PostCSS, Autoprefixer
*   **Animations**: Framer Motion
*   **3D Graphics**: Three.js, React Three Fiber, React Three Drei, Maath
*   **Integrations**: React Icons, React Scroll, React Simple Typewriter
*   **Bundler & Tooling**: Vite, ESLint

---

## 📂 Key Components & Architecture

*   [`src/App.jsx`](src/App.jsx): Main layout structure holding all major sections and managing scroll logic.
*   [`src/components/GalaxyBackground.jsx`](src/components/GalaxyBackground.jsx): Sets up the 3D canvas and renders custom galaxy particles using math/orbit formulations.
*   [`src/components/GitHubActivity.jsx`](src/components/GitHubActivity.jsx): Fetches and renders the GitHub contribution boxes, matching original size, tooltips, and color-graded boxes.
*   [`src/components/LeetCodeActivity.jsx`](src/components/LeetCodeActivity.jsx): Renders custom LeetCode submission status.
*   [`src/components/Projects.jsx`](src/components/Projects.jsx): Displays feature cards with filter tags, code repositories, and demo links.
*   [`src/components/Certificates.jsx`](src/components/Certificates.jsx): Interactive modal-based certificate browser with custom print, download, and zoom tools.

---

## 🚀 Featured Projects

1.  **MediChain – Online Healthcare Platform**
    *   *Description*: An online healthcare platform designed to streamline medical access through appointment booking, NGO integration, and child vaccination tracking. Offers dedicated doctor and patient dashboards.
    *   *Stack*: React, Firebase, Tailwind CSS, HTML/CSS
    *   *Code*: [MediChain Repository](https://github.com/Himanshukumar1306/MediChain)

2.  **FinCalc – Smart Loan Calculator Platform**
    *   *Description*: A financial planning web application to simplify loan repayments through real-time calculations, dynamic charts, and detailed amortization tables. Users can export customized month-wise reports to PDF.
    *   *Stack*: React, Tailwind CSS
    *   *Code*: [FinCalc Repository](https://github.com/Himanshukumar1306/FinCalc.git)
    *   *Demo*: [Live App](https://loan-calculator-taupe-psi.vercel.app/)

3.  **Fasal – Multi Crop Disease Classification & Drone System**
    *   *Description*: An AI-powered smart agriculture platform designed to automate crop monitoring using drone-captured aerial imagery (Raspberry Pi & GPS telemetry) and cloud-based Machine Learning disease classification.
    *   *Stack*: Python, Machine Learning, Raspberry Pi, React
    *   *Code*: [EPICS-AI Repository](https://github.com/Himanshukumar1306/EPICS-AI)

---

## 📜 Key Certifications & Badges

The portfolio displays 23+ credentials, including:
*   **Google IT Support Certificate** (Google Career Certificates)
*   **Software Engineering Job Simulation** (JPMorgan Chase & Co.)
*   **Technology Job Simulation** (Deloitte)
*   **Industrial IoT Markets and Security** (University of Colorado Boulder)
*   **The Bits and Bytes of Computer Networking** (Google)
*   **Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate** (Oracle University)
*   **Solutions Architecture Job Simulation** (AWS)
*   **Introduction to Machine Learning** (NPTEL)
*   **AWS Educate Badges** (Serverless, Compute, Storage, Security, Networking, Databases, Cloud Ops)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18+) and npm (version 9+) installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Himanshukumar1306/PORTFOLIO.git
    cd PORTFOLIO
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```
    This will open the project locally at `http://localhost:5173`.

### Production Build

To compile a production-optimized build of the project:
```bash
npm run build
```
The output files will be written to the `dist/` directory, ready to be deployed to Netlify, Vercel, or GitHub Pages.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
