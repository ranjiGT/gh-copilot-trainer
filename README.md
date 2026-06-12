# 🤖 GitHub Copilot Trainer

A web application to help developers test and improve their knowledge of GitHub Copilot through interactive quizzes.

## Features

- **25 curated questions** covering all key areas of GitHub Copilot
- **Categories**: Basics, Features, Supported IDEs, Supported Languages, Plans & Pricing, Privacy & Security, Best Practices, GitHub Copilot CLI, and GitHub Actions
- **Instant feedback** – see if you got it right and read a detailed explanation
- **Score tracking** – get a grade and percentage at the end
- **Answer review** – see all your answers after the quiz
- **Randomised order** – questions are shuffled on every run

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for production

```bash
npm run build
npm run preview
```

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- Plain CSS (no external UI library)
