# Specification

## Summary
**Goal:** Replace the custom contact form implementation with an embedded Google Forms iframe across all pages that use contact forms.

**Planned changes:**
- Replace ContactForm component implementation with a Google Forms iframe embed
- Update ContactPage to display the embedded Google Form
- Update all jurisdiction-specific pages (Hyderabad, Secunderabad, Rangareddy, Cyberabad) to use the Google Forms embed
- Update ServiceDetailPage to use the Google Forms embed
- Ensure the embedded form maintains responsive design and matches the luxury legal theme with deep navy and gold color scheme

**User-visible outcome:** Users can submit contact inquiries through an embedded Google Form on the contact page, jurisdiction pages, and service detail pages. The form includes fields for name, phone, email, jurisdiction (dropdown), practice area (dropdown), and message. Submissions go directly to Google Forms instead of the backend.
