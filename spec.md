# Specification

## Summary
**Goal:** Apply several targeted updates to The Jurists website: update the hero tagline, remove the chatbot, restore the legal notice banner, remove the team section, replace all "Cyberabad" references, expand court practice area listings, and add a Telangana High Court banner.

**Planned changes:**
- Change the hero tagline from "Justice Delivered with Precision & Integrity" to "Trusted Legal Counsel. Proven Results."
- Remove the ChatbotWidget component entirely from App.tsx and all other locations so no chat button or panel appears anywhere
- Restore the legal notice/disclaimer banner (top or bottom of all pages) stating that site content is for informational purposes only and does not constitute legal advice, in compliance with Bar Council rules
- Remove the "Meet Our Team" section and team member cards from the About page and any other page where they appear
- Replace every instance of "Cyberabad" across the entire frontend with "Medchal Malkajgiri and Kukatpally Courts", update the route from `/jurisdiction/cyberabad` to `/jurisdiction/medchal-malkajgiri-kukatpally`, and update all Header/Footer links and SEO metadata accordingly
- Update each court jurisdiction page (Hyderabad, Secunderabad, Rangareddy, Medchal Malkajgiri and Kukatpally Courts) to display the full comprehensive list of all practice areas mentioned anywhere on the site
- Add a visually distinct banner (gold border, serif heading, elevated card style) labelled "Practising at Telangana High Court" on the Telangana High Court jurisdiction page, including descriptive text about the firm's High Court practice; ensure Telangana High Court is accessible from the Header jurisdictions dropdown and Footer

**User-visible outcome:** Visitors will see the updated tagline, no chatbot, a restored legal disclaimer banner, no team section, the corrected court name throughout the site, full practice area lists on each court page, and a prominent Telangana High Court banner in the site navigation and on the relevant jurisdiction page.
