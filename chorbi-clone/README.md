# Chorbi Clone – Digital Marketing Agency Template

## Project Overview
This project is a modern, responsive digital marketing agency website template inspired by Chorbi. It features smooth scrolling animations, visually engaging hero section titles, and a cohesive, animated user experience across all major sections. The template is designed for agencies, freelancers, and businesses looking for a visually appealing and interactive online presence.

## Tech Stack
- **HTML5**: Semantic markup for structure and accessibility.
- **CSS3**: Custom styles, advanced gradients, and keyframe animations for dynamic effects.
- **Bootstrap 5**: Responsive, mobile-first grid and UI components.
- **AOS (Animate On Scroll)**: Library for scroll-triggered animations.
- **TypeScript (main.ts)**: Handles smooth scrolling and interactive behaviors.
- **Font Awesome**: Iconography for enhanced UI.

## Key Features & Styling Approach
### 1. **Hero Section Title Animation**
- All hero section `<h1>` titles use a custom `.animated-title` class.
- The effect combines a vibrant animated gradient (using `background-clip: text` and keyframes) with a gentle floating motion (`@keyframes float-title`).
- This creates a continuous, eye-catching animation to grab visitor attention.

### 2. **Scrolling Animations**
- The AOS library (`data-aos` attributes) is used throughout for smooth, staggered reveal animations as users scroll.
- Consistent animation patterns are applied to the Contact, Case Studies, and Digital Marketing Resources sections for a unified feel.

### 3. **Smooth Anchor Scrolling**
- JavaScript (TypeScript) code in `main.ts` enables smooth behavior for all anchor link navigation.
- Ensures a seamless experience when jumping between sections.

### 4. **Responsive Design**
- Bootstrap 5 grid ensures the template is fully responsive across devices.
- Custom CSS enhances and overrides Bootstrap styles for branding and uniqueness.

## How the Style Was Brought to Life
- **Consistent Animation**: By analyzing the contact section, the same scroll-triggered animation logic and `data-aos` attributes were applied to other key sections, ensuring visual consistency.
- **Custom Title Animation**: The hero section titles were wrapped with a dedicated class and animated using CSS gradients and transforms for a modern, lively effect.
- **Progressive Enhancement**: The template gracefully degrades if animations are unsupported, ensuring accessibility.
- **Separation of Concerns**: Structure (HTML), presentation (CSS), and behavior (TypeScript) are kept modular for maintainability.

## Getting Started
1. Clone or download the repository.
2. Open `index.html` in your browser to view the template.
3. To customize, edit the HTML, CSS, or TypeScript files as needed.
4. Run a local server (e.g., with Vite or Live Server) for best results.

## Credits
- [Bootstrap](https://getbootstrap.com/)
- [AOS](https://michalsnik.github.io/aos/)
- [Font Awesome](https://fontawesome.com/)
- [Unsplash](https://unsplash.com/) for demo images

---
**Author:** Habeeb Najeeb

For questions or customization, contact: Digitalcivitas855@gmail.com
