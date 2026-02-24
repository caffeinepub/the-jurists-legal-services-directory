# Specification

## Summary
**Goal:** Fix the contact email address across the site and revert the visual theme to match the 42nd draft.

**Planned changes:**
- Replace all occurrences of the email address in the frontend (ContactPage.tsx, Footer.tsx, and any other component) with `thejuristshyd@gmail.com`, including `mailto:` links
- Revert the color palette, typography, spacing, component styling, and decorative elements to match the 42nd draft across all pages and shared components (Header, Footer, HomePage, ContactPage, AboutPage, ServicesPage, etc.)
- Update `index.css` and `tailwind.config.js` to reflect the 42nd draft design tokens

**User-visible outcome:** Every email address shown on the site is `thejuristshyd@gmail.com`, and the entire site visually matches the 42nd draft theme consistently across all pages.
