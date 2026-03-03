# The Jurists Legal Services Directory

## Current State
The site is currently at Version 56 which has residual "legal tech platform" content from Version 55 (lawyer directory, platform-centric language). The user wants to revert to the Version 53 state — a clean, professional law firm website for "The Jurists" with black-and-white theme.

## Requested Changes (Diff)

### Add
- "Send a Legal Notice / Reply to a Legal Notice under 24 hours" banner on the homepage (prominent, with Connect Now button linking to #contact section)
- Contracts and Agreements Drafting service (all types, 3-day turnaround, basic to startup)
- "Contracts & Agreements" in navigation services dropdown and footer
- All practice areas listed under each court jurisdiction page (including Contracts & Agreements Drafting)
- Special Telangana High Court banner on that page
- Google verification meta tag and GTM tag in index.html
- Google verification static file

### Modify
- Remove all "legal tech platform" / "lawyer directory" language — revert to straightforward law firm site
- Remove ServicesPage "Lawyer Directory" CTA button and reference to /lawyers route
- Homepage: law firm tone (not platform), tagline changed from "Justice Delivered with Precision & Integrity" to something professional and neutral
- All practice area pages: informational tone (BCI compliant, not promotional)
- Contact page: no phone number anywhere, email = thejuristshyd@gmail.com, office = Hyderabad only, hours = 24/7 for enquiries
- Footer: Bar Council disclaimer, email = thejuristshyd@gmail.com, office = Hyderabad only
- Courts: Hyderabad, Secunderabad, Rangareddy, Medchal Malkajgiri & Kukatpally — NO Cyberabad references in visible content
- Legal disclaimer shortened and in footer only
- No login button / admin button visible anywhere on site
- No phone number anywhere on site

### Remove
- "Meet Our Team" section
- Chatbot component (if still present)
- Any login/admin visible buttons in Header or navigation
- "Lawyer Directory" page link and /lawyers route references
- Platform-centric language ("platform provides", "use our platform")

## Implementation Plan
1. Update Header — remove any login/admin button, ensure no Cyberabad in jurisdictions, add Contracts & Agreements to services
2. Update Footer — correct email, Hyderabad office only, remove phone, add Contracts & Agreements to practice areas list
3. Update HomePage — add legal notice banner (Send a Legal Notice / Reply under 24 hours) with Connect Now -> #contact, remove Meet Our Team, fix tagline, informational tone
4. Update ServicesPage — remove Lawyer Directory CTA, add Contracts & Agreements Drafting service card
5. Update ServiceDetailPage — ensure Contracts & Agreements Drafting page exists with proper content
6. Update JurisdictionPage — add Contracts & Agreements Drafting to ALL_PRACTICE_AREAS list for all courts
7. Update TelanganaHighCourtPage — ensure special banner is present, add Contracts & Agreements to practice areas
8. Update ContactPage — Hyderabad only, email only, 24/7, no phone
9. Update App.tsx — remove /lawyers route if added, keep all correct routes
10. Ensure index.html has Google verification meta tag and GTM tag
