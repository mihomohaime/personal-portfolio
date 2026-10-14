# Personal CS Portfolio

A responsive, light minimalist portfolio built with React, TypeScript, Vite, and CSS.

## 1. Before publishing: personalize the content

Open `src/App.tsx` and update the `profile` object:
- `name` and `initials`
- `email`
- `github`
- `linkedin`

Then update the two project objects in the `projects` array:
- Replace `https://github.com/YOUR-GITHUB/...` with your real repository URLs.
- Add a live demo URL to `demo` only if you have one. Leave it as `''` otherwise.
- Adjust project descriptions and status labels so they accurately reflect the current state of your work.

Also update the page title in `index.html`.

## 2. Add your resume

Copy your resume PDF to `public/resume.pdf`. The resume link will then work at `/resume.pdf`.

## 3. Run locally

Install Node.js (a current LTS version), then in this folder run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

Check a production build with:

```bash
npm run build
npm run preview
```

## 4. Publish with Vercel (recommended)

1. Create a GitHub repository for this project.
2. Upload/push the project files to that repository.
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the portfolio repository.
5. Keep the detected Vite settings. The build command is `npm run build`; the output directory is `dist`.
6. Click **Deploy**. Vercel will provide a public URL.
7. After connecting the GitHub repository, future pushes to your production branch will trigger new deployments.

Official guide: https://vercel.com/docs/frameworks/frontend/vite

## 5. Final pre-publish checklist

- [ ] Replace all `YOUR-GITHUB`, `YOUR-LINKEDIN`, `Your Name`, and `you@example.com` placeholders.
- [ ] Confirm the repository links are correct and public.
- [ ] Add `public/resume.pdf`.
- [ ] Verify the project statuses and descriptions are honest and current.
- [ ] Run `npm run build` and fix any errors.
- [ ] Open the deployed site on a phone and desktop.
- [ ] Click every link, especially email, LinkedIn, GitHub, and resume.

## Notes

- The project cards intentionally distinguish an in-progress project from a prototype.
- No backend or secret API keys are needed for this portfolio.
- The Google Fonts import requires internet access; the page has generic fallback fonts.
- This project uses lucide-react for small icons.
