
## CG25 Portfolio Website

### Overview
A cinematic, gallery-style portfolio site for 26 students with a dark, minimal aesthetic using Comfortaa Bold. Responsive layout with distinct mobile and desktop behaviors.

### Pages & Layout

**Single-page app with two responsive modes:**

#### Desktop (landscape)
- **50/50 split screen** — left: student detail panel, right: student grid
- Right side: 5×6 grid (26 student portraits + 4-cell logo + empty black cells)
- Left side: black by default; shows student content when selected (2×3 grid layout with showreel, bio, photos)
- No scrolling, no modals — clicking a student updates the left panel
- Active student keeps name overlay visible

#### Mobile (portrait)
- Full-screen grid of student portraits
- Tapping a student opens a **modal overlay** with ~10% margin, blurred grid background
- Modal contains the same 2×3 content layout (showreel, bio + portfolio link button, photos)

### Student Cards
- `foto.jpg` displayed in 3:4 aspect ratio on black background
- Name overlay on hover (desktop) and on active state
- Smooth transitions between students

### Student Detail Layout (shared mobile/desktop)
- **Row 1:** Showreel video (autoplay, loop, muted) spanning full width
- **Row 2 left:** Bio text from `info.txt` + orange "Portfolio Link" button (Comfortaa Bold, rounded)
- **Row 2 right:** Enlarged portrait with name overlay
- **Row 3:** `bild1.jpg` (left) and `bild2.jpg` (right)

### Data Approach
- Build with **26 placeholder students** using generated names and placeholder images/videos
- Student data defined in a config array that can easily be swapped for real assets later
- Structure mirrors the described folder layout (`studenter/{name}/foto.jpg`, etc.)

### Design
- **Font:** Comfortaa Bold for names and buttons
- **Colors:** Black backgrounds, white text, orange accent for buttons
- **Style:** Clean, minimal, gallery-like — inspired by the reference image
- Logo placeholder spanning 4 columns in the center of the grid (will be replaced with uploaded image)

### Technical Details
- Fully responsive with CSS Grid
- `viewport-fit` sizing — no scrolling on either layout
- Smooth CSS transitions for student switching
- Video autoplay with muted attribute for browser compatibility
