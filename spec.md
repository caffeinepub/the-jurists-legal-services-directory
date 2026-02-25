# Specification

## Summary
**Goal:** Move the legal disclaimer to a compact footer line and add a promotional banner on the homepage.

**Planned changes:**
- Remove the existing dismissible `LegalNoticeBanner` from the top of the page in `Layout.tsx`
- Add a short, non-dismissible legal disclaimer line at the bottom of every page (inside or just above the Footer), with small, muted styling
- Add a prominent promotional banner on `HomePage.tsx` (below the hero section) with the exact text: "Send a Legal Notice / Reply to a Legal Notice under 24 hours", styled to match the site's existing theme

**User-visible outcome:** Every page shows a subtle legal disclaimer at the bottom instead of a dismissible top banner, and the homepage features a highlighted promotional strip announcing the 24-hour legal notice service.
