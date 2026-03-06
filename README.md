<div align="center">
<h1>Candy Glass Portfolio</h1>

A modern, fast, and highly customisable portfolio template built with Vite, React, TypeScript, and shadcn/ui. Designed for developers who want a stunning, professional online presence with minimal setup.

## Features

* **Blazing Fast:** Built with Vite for near‑instant server start and lightning‑fast HMR.
* **Centralised Data:** Customise all content from your name and bio to projects and experience by editing a single file (`src/data/resume.tsx`).
* **Modern Tech Stack:** React, TypeScript, Tailwind CSS, and shadcn/ui.
* **Fully Responsive:** Looks great on all devices, from mobile to desktop.
* **Smooth Animations:** Motion and transitions powered by Framer Motion.
* **Command Menu:** A `Cmd+K` interface for quick navigation.
* **Easy to Deploy:** Get your portfolio online in minutes with services like Vercel or Netlify.


---

## Project Structure

```
.
├── public/               # Static assets (images, fonts)
├── src/
│   ├── components/       # Reusable components (Layout, UI elements)
│   │   ├── sections/     # Page sections (About, Portfolio, etc.)
│   │   └── ui/           # shadcn/ui components
│   ├── data/             # Centralised data (resume.tsx)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and constants
│   └── ...               # Main entry point (App.tsx, main.tsx)
├── tailwind.config.ts    # Tailwind CSS configuration
└── vite.config.ts        # Vite configuration
```

---

## Available Scripts

| Command           | Description                                     |
|-------------------|-------------------------------------------------|
| `npm run dev`     | Starts the development server                   |
| `npm run build`   | Builds the app for production                   |
| `npm run lint`    | Runs ESLint to check for code issues            |
| `npm run preview` | Serves the production build locally for preview |

---

## Deployment

You can deploy this project to popular services like Vercel or Netlify.

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) using your GitHub account.
3. Click **"Add New → Project"** and import your repo.
4. Vercel will detect it's a Vite project.
5. Add your `VITE_FORMSPREE_URL` environment variable in the **Settings → Environment Variables** section.
6. Hit **Deploy** and your portfolio will be live.

### Deploying to Netlify

1. Log in to [Netlify](https://www.netlify.com/).
2. Import your GitHub repository.
3. Netlify will automatically detect the Vite configuration.
4. Add your `VITE_FORMSPREE_URL` variable in the Environment Variables section.
5. Build and deploy.

---

## License

This project is licensed under the MIT Licence.  
See the [LICENCE](LICENCE) file for more details.

---


Copyright © `2026` `Vishnudas V U`
