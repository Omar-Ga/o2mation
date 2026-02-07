Developer Brief: Website Architecture & UX Requirements
1. Design System & Aesthetics
Color Palette:

Primary Backgrounds: White & Charcoal Black (High Contrast).

Primary Accent: Neon Green (#00ff80). Use this for CTAs, hover states, and active elements to create a "tech/code" feel against the charcoal.

Vibe: Modern, clean, and high-tech. Avoid clutter.

2. Global Elements
Chatbot Widget: Implement a fixed floating action button (FAB) on the bottom right of the viewport on all pages. This will serve as a placeholder for our internal AI agent.

3. Page Specifications
A. Home Page: The Narrative Journey
Concept: "Scrollytelling." The page should not just be static blocks; it should control the user's scroll to tell a story.

Flow:

Hook: Who we are (The AI/Tech Identity).

Conflict/Problem: The chaos of manual workflows and outdated systems.

Resolution: How we fix it (Automation, APIs, Custom Dev).

Dev Note: Focus on smooth transitions and scroll-triggered animations. Use the #00ff80 green to highlight key keywords (e.g., "Automate", "Integrate") as the user scrolls.

B. Solutions Page: Interactive Service Matrix
Challenge: Displaying a massive variety of services (AI, Web, Systems, Offline Automation) without overwhelming the user.

UI Recommendation (The "Clever Way"): Implement a Tabbed Filtering System or a Masonry Grid with Filters.

Categories: AI & Automation | Custom Web Dev | Enterprise Systems | Offline-to-Online.

Interaction: When a user clicks "AI & Automation," the grid shuffles to show only relevant cards (e.g., "Chatbots," "Email Auto-repliers").

Card Detail: Each card should flip or expand on click to reveal specific technical details (e.g., "We use OCR for receipt text extraction").

Demo Section (The "Sandbox"):

Create a dedicated section labeled "Live Automations & Demos."

Structure: A container specifically designed to embed interactive elements (iFrames, video loops of workflows, or live API response tests).

Initial State: Use placeholder skeletons for now, but ensure the code structure allows for easy injection of React components or script tags later.

C. Contact Page: Qualified Lead Generation
Objective: Filter for serious inquiries and technical alignment.

Form Logic: This is not a standard contact form; it is a project intake form.

Required Fields:

Name (Text)

Email (Email validation)

Company Size (Dropdown: e.g., 1-10, 11-50, 50-200, Enterprise)

Service Interest (Multi-select checkboxes: AI, Web, System, etc.)

Current Workflow/System Description: (Text Area: "Tell us about the process you want to automate or the system you need built.")

Message: (General inquiries).

Summary for the Developer
"Build a 3-page high-performance site. The Home page is for storytelling, the Solutions page is a filterable portfolio with a tech-demo playground, and the Contact page is a detailed intake system. Use #00ff80 to make the tech pop."