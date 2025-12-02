<<<<<<< HEAD
## Shaik Siddiq Ahamad — Full-Stack Developer Portfolio

A production-ready React + Vite + Tailwind portfolio for **Shaik Siddiq Ahamad**, featuring responsive layout, rain background, theme toggle, React Router navigation, and GitHub → Vercel CI/CD.

---

### Tech stack

- **Frontend**: React, Vite, React Router
- **Styling**: Tailwind CSS, custom CSS variables (`--bg`, `--card`, `--accent`, `--muted`)
- **Deployment**: Vercel (static build with SPA fallback)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Serverless**: Vercel function `api/contact.js` for the contact form

---

### Getting started

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/shaik-siddiq-portfolio.git
   cd shaik-siddiq-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run locally**

   ```bash
   npm run dev
   ```

   Then open the printed localhost URL (e.g. `http://localhost:5173`).

4. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

   `npm run preview` runs a local server to test the production build in `dist/`.

---

### Generating a production zip

After building, you can create a zip of the project (excluding `node_modules`) for distribution:

```bash
# From the project root
npm run build
zip -r shaik-siddiq-portfolio.zip . -x "node_modules/*" ".git/*"
```

On PowerShell (Windows), you can use:

```powershell
npm run build
Compress-Archive -Path * -DestinationPath shaik-siddiq-portfolio.zip -Force -Exclude node_modules, .git
```

---

### Vercel deployment

1. **Create a Vercel project**

   - Go to `https://vercel.com` and create a new project.
   - Import your GitHub repository.
   - Framework preset: **Other** or **Vite**.
   - Build command: `npm run build`
   - Output directory: `dist`

2. **Create a Vercel access token**

   - In Vercel, go to **Account Settings → Tokens**.
   - Create a new token and copy it (this is your `VERCEL_TOKEN`).

3. **Grab org and project IDs**

   - In Vercel project settings, go to the **General** tab.
   - Under "API" or "Environment", note:
     - **Organization ID** → `VERCEL_ORG_ID`
     - **Project ID** → `VERCEL_PROJECT_ID`

4. **Add GitHub secrets**

   In your GitHub repo:

   - Go to **Settings → Secrets and variables → Actions**.
   - Add these repository secrets:
     - `VERCEL_TOKEN`
     - `VERCEL_ORG_ID`
     - `VERCEL_PROJECT_ID`

5. **Push to main**

   Once secrets are configured, every push to the `main` branch will:

   - Install dependencies
   - Build the project
   - Deploy to Vercel using `amondnet/vercel-action@v20`

---

### Environment & sample config

This project has minimal environment requirements. Examples:

```env
# Example: front-end variable if you want to customize the contact endpoint
VITE_CONTACT_ENDPOINT=/api/contact

# Example: Vercel-related secrets (set as GitHub Actions secrets, not committed)
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-vercel-org-id
VERCEL_PROJECT_ID=your-vercel-project-id
```

> **Note**: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` must **not** be committed. Set them as GitHub Actions secrets.

---

### Contact form & serverless function

- **Front-end**: `src/pages/Contact.jsx` contains a minimal contact form that POSTs to `/api/contact`.
- **Serverless function**: `api/contact.js` is a Vercel function that:
  - Accepts `POST` requests with `{ name, email, message }`.
  - Logs the payload to the server console.
  - Responds with `{ ok: true }` on success.

To connect this to an email provider:

1. Sign up for a service like Resend, SendGrid, or Mailgun.
2. Add API keys as environment variables in Vercel.
3. Update `api/contact.js` to call the provider SDK or REST API and send an email.

---

### Rain background & performance controls

The **RainBackground** component (`src/components/RainBackground.jsx`) renders:

- A full-viewport gradient background.
- A canvas overlay drawing light, vertical rain streaks.

Performance features:

- Automatically disables animation on small screens (≤ 640px wide).
- Uses `devicePixelRatio` for crisp rendering.
- You can pass `animate={false}` to the component to disable animation entirely.
- A **CSS/data attribute toggle** is supported:
  - Add `data-rain-disabled="true"` to the `<html>` element to hide the canvas via CSS.
  - Example (in the browser console):

    ```js
    document.documentElement.dataset.rainDisabled = "true";
    ```

  - To re-enable:

    ```js
    delete document.documentElement.dataset.rainDisabled;
    ```

This is useful for low-power devices or accessibility preferences.

---

### Theme toggle

- Theme is controlled with `data-theme` on the `<html>` element:
  - `data-theme="dark"` (default)
  - `data-theme="muted"`
- CSS variables:
  - `--bg`, `--card`, `--accent`, `--muted`, plus text colors.
- The **ThemeToggle** component stores theme preference in `localStorage` under the key `theme`.

---

### Resume file

- The `Download Resume` button points to `/assets/ShaikSiddiqAhamad.pdf`.
- A placeholder file lives at `public/assets/ShaikSiddiqAhamad.pdf`.
- To use your actual resume:
  1. Replace the placeholder file with your real PDF.
  2. Keep the same filename and path.

---

### Accessibility & SEO

- Semantic HTML structure with `<header>`, `<main>`, `<footer>`, and ARIA labels.
- Square navigation tabs are keyboard-accessible with:
  - `role="tablist"`, `role="tab"`, `aria-selected`, `aria-posinset`, `aria-setsize`.
- WCAG-friendly color contrast using dark backgrounds and light text.
- SEO:
  - Title: **"Shaik Siddiq Ahamad — Full-Stack Developer"**
  - Meta description describing the portfolio and experience.

---

### File structure (summary)

- `index.html`
- `vite.config.js`
- `package.json`
- `tailwind.config.cjs`
- `postcss.config.cjs`
- `vercel.json`
- `.gitignore`
- `.github/workflows/deploy.yml`
- `api/contact.js`
- `public/assets/ShaikSiddiqAhamad.pdf` (placeholder)
- `src/main.jsx`
- `src/App.jsx`
- `src/styles/tailwind.css`
- `src/styles/global.css`
- `src/components/Layout.jsx`
- `src/components/NavTabs.jsx`
- `src/components/Hero.jsx`
- `src/components/ProjectCard.jsx`
- `src/components/Skills.jsx`
- `src/components/RainBackground.jsx`
- `src/components/Footer.jsx`
- `src/components/ThemeToggle.jsx`
- `src/pages/About.jsx`
- `src/pages/Projects.jsx`
- `src/pages/SkillsPage.jsx`
- `src/pages/Blog.jsx`
- `src/pages/Contact.jsx`



=======
# Portfolio
My personal portfolio website built with React, Vite, Tailwind, and modern UI components. Showcasing projects, skills, DSA progress, and full-stack development work.
>>>>>>> 2a861ef61c0ded234a42e93f7747ace8fd3536ec
