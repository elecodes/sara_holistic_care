# Sara | Homeopathy & Naturopathy Student Clinic

A clean, warm, and trustworthy single-page landing page for Sara, a Montreal-based Naturopathy & Classical Homeopathy student practitioner offering complimentary acute/first-aid consultations to complete her final clinical certification hours.

🌐 **Live Website**: [https://saranaturopathy.netlify.app/](https://saranaturopathy.netlify.app/)

---

## 🌿 Design System & Aesthetics

Crafted according to the **Earthy Botanical & Warm Clay** palette and refined via the **`design-taste-frontend`** anti-slop guidelines:

- **Primary Base (`#FBF9F5` / Alabaster)**: Warm, organic off-white page background.
- **Secondary Surface (`#F2ECE4` / Oatmeal Linen)**: Card surfaces, interactive containers, and input grounds.
- **Primary Accent (`#2D4A3E` / Deep Laurel Green)**: Editorial headlines, primary action buttons, banner, and footer close.
- **Secondary Accent (`#8EA89D` / Soft Sage)**: Practicum tags and subtle categorical indicators.
- **Warm Accent (`#C47355` / Terracotta Clay)**: Emergency notice accents, highlight tags, and interactive links.
- **Body Text (`#2B2D2F` / Slate Charcoal)**: High-contrast, fatigue-free readable body typography.
- **Muted Text (`#666562` / Driftwood Grey)**: Contextual notes, metadata, and subtitles.

### Typography
- **Headings**: [`Cormorant Garamond`](https://fonts.google.com/specimen/Cormorant+Garamond) (Serif, weights 400–700) — classical, elegant editorial proportions with refined curves.
- **Body & UI**: [`Inter`](https://fonts.google.com/specimen/Inter) (Weights 400–700) — neutral, highly legible sans-serif paired with Cormorant Garamond for clinical intake fields and symptom details.

---

## 📋 Core Sections

1. **Top Notice Bar**: Clarifies the 2026 Montreal clinical practicum with zero financial friction.
2. **Navigation**: Wordmark, core anchor links, trilingual indicator (`English • Français • Español`), and "Book Free Session" action.
3. **Hero Section**: Editorial headline, subheadline, 3 core trust points (*100% Free*, *Microsoft Teams*, *Single-Remedy Focus*), and an authentic portrait card of Sara (`assets/images/sarita_homeopathy.jpg`).
4. **About Sara**: Her background as a Mexican native in Montreal, mother of two, completing dual Naturopathy & Homeopathy diplomas, with honest rationale for free student practicum sessions.
5. **What is First-Aid Homeopathy?**: Clear 3-card categorization:
   - Physical Injuries & Surgical Recovery (tooth extractions, cuts, burns, sprains, bruises).
   - Sudden Acute Onsets (insect/animal stings, mild food intolerance, sudden draft/chill reactions).
   - Acute Side Effects & Supportive Care (post-treatment malaise, seasonal fatigue, eye strain).
   - **Emergency Medical Notice**: High-visibility disclaimer emphasizing that homeopathy is complementary and never a substitute for 911 / Emergency Room care.
6. **How It Works**: 3-step visual sequence (60-min intake call, personalized OTC remedy guidance, 15-min follow-up check-in).
7. **Interactive Booking & Intake Form**: Captures name, email, phone, language preference, time slots, acute challenge description, and mandatory educational consent, with an instant confirmation view.
8. **Interactive FAQ**: Accordion answering why sessions are free, remedy purchasing at local Montreal pharmacies (Jean Coutu/Pharmaprix), remote clients, and preparation.
9. **Footer**: Quebec complementary practice notice, direct contact email (`sara.homeopathy.mtl@gmail.com`), and Montreal community recognition.

---

## 🚀 Running the Project

### Option 1: Standalone Static Page (Zero Dependencies)
The primary entry point is [`index.html`](./index.html). It runs directly in any modern browser without needing `npm install` or a build step:

```bash
# Serve locally via Python
python3 -m http.server 3000

# Open in browser
open http://localhost:3000
```

### Option 2: React + TypeScript (Vite)
If you prefer developing with modern React and Tailwind CSS tooling:

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build production bundle
npm run build
```

---

## 🎨 Craftsmanship & Anti-Slop Audit

The project passes the **`design-taste-frontend`** quality gate:
- **0 FAIL** on `lint.mjs`.
- No generic AI tells: no artificial gradient blobs, no floating shadows at rest, no emoji as UI icons, no fake 01/02 numbering, and no hairline borders.
- Proper tone separation using Oatmeal Linen against Alabaster canvas.

---

## ⚖️ Legal & Clinical Disclaimer

Sara is a student intern fulfilling supervised clinical practicum hours. Homeopathic consultations are complementary educational sessions and do not represent medical diagnosis, prescription, or emergency intervention under the Quebec Medical Act. In an acute emergency, please contact 911 or visit the nearest hospital emergency department immediately.
