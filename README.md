# o2mation

**High-Performance AI & Digital Solutions Agency**

o2mation is a modern agency website built to showcase expertise in Advanced Web Development, Custom Software Engineering, and Artificial Intelligence. The platform embodies a "tech-first" aesthetic, utilizing a high-contrast design system to present complex technical services through an immersive, interactive user experience.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Tech Stack

This project is built with a modern, performance-oriented stack:

*   **Core:** [React 18](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Routing:** [React Router v7](https://reactrouter.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Key Features

### 1. The Narrative Journey (Home)
A "Scrollytelling" experience that guides users through the agency's value proposition.
*   **Interactive Hero:** Dynamic typing effects and scroll-triggered entrance animations.
*   **Scroll-Linked Animations:** Utilizing `useScroll` and `useTransform` to animate elements based on viewport position.
*   **Visual Storytelling:** A structured flow from "The Problem" (manual workflows) to "The Solution" (intelligent automation).

### 2. Interactive Solutions Matrix (Solutions)
A powerful portfolio interface designed to handle diverse service verticals without clutter.
*   **Smart Filtering:** A tabbed/grid system that allows users to filter services by category (AI & Automation, Web Dev, Enterprise Systems).
*   **Service Detail Cards:** Interactive cards that reveal technical specifics (e.g., OCR, API integrations) on interaction.
*   **Demo Sandbox:** A dedicated terminal-style UI simulating live automation workflows (OCR processing, Data Syncing, RAG pipelines).

### 3. Technical Intake System (Contact)
An "Operational Protocol" form designed for qualified lead generation.
*   **Detailed Parameter Collection:** Captures specific data points like Company Size, Service Interest, and Workflow descriptions.
*   **Validation:** Real-time field validation to ensure high-quality submissions.
*   **Technical Aesthetic:** Styled to resemble a system configuration interface rather than a standard contact form.

## 🎨 Design System

The UI follows a strict "API-First" aesthetic:
*   **Primary Palette:** Charcoal Black (Backgrounds) & White (Text).
*   **Accent Color:** Neon Green (`#00ff80`) - Used for CTAs, active states, and to highlight "tech" keywords.
*   **Typography:** Clean, monospaced fonts for code elements and sans-serif for narrative text.
*   **Motifs:** Terminal prompts, status bars, latency metrics, and network nodes.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
*   Node.js (v16.0.0 or higher)
*   npm (v7.0.0 or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/o2mation.git
    cd o2mation
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Development

Start the development server with hot-module replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```text
src/
├── components/
│   ├── common/       # Global components (Header, ChatWidget)
│   └── home/         # Home-specific sections (Hero, Process, Metrics)
├── layouts/          # Layout wrapper components
├── pages/            # Main page views (Home, Solutions, Contact)
├── styles/           # Global styles and Tailwind directives
├── App.tsx           # Main application component & Routing
└── main.tsx          # Entry point
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
