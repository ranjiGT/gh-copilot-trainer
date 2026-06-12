const questions = [
  {
    id: 1,
    category: "Basics",
    question: "What is GitHub Copilot?",
    options: [
      "A GitHub feature that automatically merges pull requests",
      "An AI-powered code completion and suggestion tool",
      "A tool for managing GitHub repositories",
      "A bot that automatically reviews code",
    ],
    answer: 1,
    explanation:
      "GitHub Copilot is an AI-powered developer tool that provides code completions, suggestions, and explanations directly inside your editor, built on OpenAI's Codex model.",
  },
  {
    id: 2,
    category: "Basics",
    question: "Which company developed GitHub Copilot?",
    options: [
      "Microsoft alone",
      "OpenAI alone",
      "GitHub in collaboration with OpenAI",
      "Google and GitHub",
    ],
    answer: 2,
    explanation:
      "GitHub Copilot was developed by GitHub in collaboration with OpenAI. It is powered by OpenAI Codex, a descendant of GPT-3.",
  },
  {
    id: 3,
    category: "Supported IDEs",
    question:
      "Which of the following IDEs natively supports GitHub Copilot via an official extension?",
    options: [
      "Notepad++",
      "Visual Studio Code",
      "Geany",
      "Kate",
    ],
    answer: 1,
    explanation:
      "GitHub Copilot has official extensions for Visual Studio Code, Visual Studio, JetBrains IDEs, Neovim, and Azure Data Studio.",
  },
  {
    id: 4,
    category: "Supported IDEs",
    question: "Which JetBrains IDE family is supported by GitHub Copilot?",
    options: [
      "Only IntelliJ IDEA",
      "Only PyCharm",
      "All JetBrains IDEs via a single plugin",
      "JetBrains IDEs are not supported",
    ],
    answer: 2,
    explanation:
      "GitHub Copilot supports all JetBrains IDEs (IntelliJ IDEA, PyCharm, WebStorm, GoLand, etc.) through a single GitHub Copilot plugin available in the JetBrains Marketplace.",
  },
  {
    id: 5,
    category: "Features",
    question: "What is GitHub Copilot Chat?",
    options: [
      "A messaging app integrated into GitHub",
      "An AI assistant that lets you have a conversational interaction to explain, debug, or generate code",
      "A feature to chat with other GitHub users",
      "A customer support chat for GitHub billing",
    ],
    answer: 1,
    explanation:
      "GitHub Copilot Chat is a conversational AI assistant embedded in your IDE that lets you ask questions, request code explanations, find bugs, get refactoring suggestions, and generate new code through natural language.",
  },
  {
    id: 6,
    category: "Features",
    question:
      "Which keyboard shortcut accepts a GitHub Copilot inline suggestion in VS Code by default?",
    options: ["Ctrl + Enter", "Tab", "Ctrl + Space", "Alt + \\"],
    answer: 1,
    explanation:
      "Press Tab to accept the currently shown inline suggestion from GitHub Copilot in Visual Studio Code.",
  },
  {
    id: 7,
    category: "Features",
    question:
      "What does 'ghost text' refer to in the context of GitHub Copilot?",
    options: [
      "Code that Copilot has deleted from your file",
      "The greyed-out inline suggestion shown before you accept it",
      "Comments automatically added by Copilot",
      "Hidden telemetry data collected by Copilot",
    ],
    answer: 1,
    explanation:
      "Ghost text is the term for the dimmed, greyed-out code suggestion that GitHub Copilot displays inline inside the editor before you choose to accept or dismiss it.",
  },
  {
    id: 8,
    category: "Features",
    question: "How can you view multiple GitHub Copilot suggestions at once?",
    options: [
      "Right-click and choose 'Show Copilot Suggestions'",
      "Open the Copilot panel by pressing Ctrl+Enter (VS Code)",
      "Type '###' to trigger suggestion mode",
      "Multiple suggestions cannot be shown simultaneously",
    ],
    answer: 1,
    explanation:
      "In VS Code, pressing Ctrl+Enter opens the GitHub Copilot completions panel, which lists up to 10 alternative suggestions for the current context.",
  },
  {
    id: 9,
    category: "Features",
    question:
      "Which GitHub Copilot feature helps generate unit tests automatically?",
    options: [
      "Copilot Radar",
      "Copilot Autofix",
      "Copilot inline suggestions and /tests slash command in Chat",
      "Copilot Pull Request Descriptions",
    ],
    answer: 2,
    explanation:
      "You can use GitHub Copilot inline suggestions while writing test files, or use the /tests slash command in Copilot Chat to generate unit tests for a selected piece of code.",
  },
  {
    id: 10,
    category: "Features",
    question: "What is 'Copilot Autofix' used for?",
    options: [
      "Automatically merging pull requests",
      "Automatically fixing code scanning (security) alerts",
      "Auto-completing import statements only",
      "Fixing typos in markdown files",
    ],
    answer: 1,
    explanation:
      "Copilot Autofix uses AI to suggest code fixes for security vulnerabilities detected by GitHub code scanning (CodeQL), reducing the time to remediate alerts.",
  },
  {
    id: 11,
    category: "Plans & Pricing",
    question:
      "Which GitHub Copilot plan is designed for organizations and includes policy management?",
    options: [
      "GitHub Copilot Individual",
      "GitHub Copilot Free",
      "GitHub Copilot Business",
      "GitHub Copilot Student",
    ],
    answer: 2,
    explanation:
      "GitHub Copilot Business is aimed at organizations and enterprises. It adds centralized policy management, audit logs, IP indemnity, and enforced security controls on top of Copilot Individual features.",
  },
  {
    id: 12,
    category: "Plans & Pricing",
    question:
      "Which group of users can access GitHub Copilot for free (as of 2024)?",
    options: [
      "All GitHub users unconditionally",
      "Verified students, teachers, and maintainers of popular open-source projects",
      "Only employees of GitHub sponsors",
      "Users who have at least 500 followers on GitHub",
    ],
    answer: 1,
    explanation:
      "GitHub offers free access to Copilot for verified students via GitHub Education, teachers, and maintainers of popular open-source repositories.",
  },
  {
    id: 13,
    category: "Plans & Pricing",
    question:
      "What is included in the GitHub Copilot Enterprise plan that is NOT in Copilot Business?",
    options: [
      "Access to GPT-4 model",
      "Personalization using your organization's codebase and knowledge bases",
      "Support for JetBrains IDEs",
      "Copilot Chat in the IDE",
    ],
    answer: 1,
    explanation:
      "GitHub Copilot Enterprise adds fine-tuning and personalization with your organization's own codebase, documentation, and knowledge bases, plus Copilot on GitHub.com via a chat interface.",
  },
  {
    id: 14,
    category: "Privacy & Security",
    question:
      "Which Copilot plan offers an IP indemnity clause to protect organizations from copyright claims?",
    options: [
      "GitHub Copilot Free",
      "GitHub Copilot Individual",
      "GitHub Copilot Business",
      "IP indemnity is not offered in any plan",
    ],
    answer: 2,
    explanation:
      "GitHub Copilot Business (and Enterprise) includes an IP indemnification clause, meaning GitHub will defend customers against third-party copyright claims related to Copilot's output.",
  },
  {
    id: 15,
    category: "Privacy & Security",
    question:
      "By default, does GitHub Copilot Individual retain your code snippets to train its model?",
    options: [
      "Yes, all prompts and suggestions are always retained",
      "No, code snippets are never processed",
      "Users can opt out of having their prompts used for model training",
      "Retention depends on your operating system",
    ],
    answer: 2,
    explanation:
      "GitHub Copilot Individual users can opt out of telemetry and code snippet retention in their settings, preventing their prompts from being used to train or improve the underlying model.",
  },
  {
    id: 16,
    category: "Privacy & Security",
    question:
      "What does the 'public code filter' in GitHub Copilot do?",
    options: [
      "It blocks all code that has ever been committed publicly",
      "It filters out suggestions that match publicly available code above a similarity threshold to reduce potential license issues",
      "It only shows suggestions from public repositories",
      "It encrypts all code before sending it to GitHub servers",
    ],
    answer: 1,
    explanation:
      "The public code (duplication detection) filter in GitHub Copilot detects and suppresses inline suggestions that closely match publicly available code on GitHub, helping you avoid reproducing third-party licensed code.",
  },
  {
    id: 17,
    category: "Best Practices",
    question:
      "What is the most effective way to get better GitHub Copilot suggestions?",
    options: [
      "Provide detailed comments and context before the code you want generated",
      "Remove all existing code so Copilot starts fresh",
      "Use only single-letter variable names",
      "Disable all other extensions",
    ],
    answer: 0,
    explanation:
      "Writing clear, descriptive comments, meaningful function/variable names, and providing context (like docstrings or example inputs/outputs) helps Copilot understand your intent and generate more accurate, relevant suggestions.",
  },
  {
    id: 18,
    category: "Best Practices",
    question:
      "Which practice should developers follow when using GitHub Copilot suggestions?",
    options: [
      "Accept every suggestion without review since Copilot is always correct",
      "Always review, understand, and test suggestions before accepting them",
      "Only use Copilot for frontend code",
      "Delete Copilot-generated code after each session",
    ],
    answer: 1,
    explanation:
      "Developers should always review Copilot's suggestions critically, understand the logic, check for correctness and security issues, and run tests. Copilot can produce plausible-looking but incorrect or insecure code.",
  },
  {
    id: 19,
    category: "Best Practices",
    question:
      "How does having open relevant files in your editor affect GitHub Copilot suggestions?",
    options: [
      "It has no effect; Copilot only reads the active file",
      "Open files provide additional context that Copilot uses to generate more relevant suggestions",
      "It slows down Copilot significantly",
      "Copilot only uses the clipboard content",
    ],
    answer: 1,
    explanation:
      "GitHub Copilot uses open editor tabs as context (in addition to the current file) to improve suggestion quality. Keeping related files open helps Copilot align with your project's coding style and patterns.",
  },
  {
    id: 20,
    category: "GitHub Copilot CLI",
    question: "What does GitHub Copilot CLI allow you to do?",
    options: [
      "Create GitHub repositories from the terminal",
      "Get AI-generated shell command suggestions and explanations directly in the terminal",
      "Deploy code to GitHub Pages via the CLI",
      "Manage GitHub Actions workflows",
    ],
    answer: 1,
    explanation:
      "GitHub Copilot in the CLI (gh copilot) lets you use natural language to get shell command suggestions, explanations, and help with git commands directly from your terminal.",
  },
  {
    id: 21,
    category: "GitHub Copilot CLI",
    question:
      "Which command would you use to get a shell command suggestion with GitHub Copilot CLI?",
    options: [
      "gh copilot explain",
      "gh copilot suggest",
      "gh copilot generate",
      "gh copilot run",
    ],
    answer: 1,
    explanation:
      "'gh copilot suggest' prompts GitHub Copilot to recommend a shell command based on your natural language description. 'gh copilot explain' is used to get an explanation of a given command.",
  },
  {
    id: 22,
    category: "Supported Languages",
    question:
      "Which of the following best describes GitHub Copilot's language support?",
    options: [
      "It only supports Python and JavaScript",
      "It supports a wide range of programming languages including Python, JavaScript, TypeScript, Ruby, Go, C#, C++, and more",
      "It only supports languages used in Microsoft products",
      "It supports exactly 10 languages",
    ],
    answer: 1,
    explanation:
      "GitHub Copilot supports dozens of programming languages. It works particularly well with Python, JavaScript, TypeScript, Ruby, Go, C#, and C++, but can assist with virtually any language it has been trained on.",
  },
  {
    id: 23,
    category: "Features",
    question: "What are 'slash commands' in GitHub Copilot Chat?",
    options: [
      "Shell commands that Copilot executes on your machine",
      "Shortcuts like /explain, /fix, /tests, and /doc that trigger specific Copilot Chat actions",
      "Git commands suggested by Copilot",
      "Markdown formatting shortcuts",
    ],
    answer: 1,
    explanation:
      "Slash commands in Copilot Chat are shorthand prompts: /explain (explain code), /fix (fix a bug), /tests (generate tests), /doc (add documentation), /optimize, etc. They speed up common coding tasks.",
  },
  {
    id: 24,
    category: "Features",
    question: "What is a Copilot Chat 'agent' (e.g., @workspace)?",
    options: [
      "A human GitHub employee who reviews your code",
      "A scoped participant that provides context-aware assistance for a specific domain like the entire workspace",
      "A scheduled automation that runs Copilot on a cron job",
      "A type of GitHub Actions runner",
    ],
    answer: 1,
    explanation:
      "@workspace is a Copilot Chat agent that has awareness of your entire project/workspace, allowing you to ask questions about all files, not just the active editor tab.",
  },
  {
    id: 25,
    category: "GitHub Actions & CI",
    question:
      "How can GitHub Copilot assist with GitHub Actions workflows?",
    options: [
      "It cannot help with YAML files",
      "It can suggest workflow YAML, explain existing workflows, and help debug failing CI steps",
      "It replaces GitHub Actions entirely",
      "It only supports JavaScript-based actions",
    ],
    answer: 1,
    explanation:
      "GitHub Copilot can generate, explain, and troubleshoot GitHub Actions workflow YAML files, suggest step definitions, and help debug CI/CD pipelines through inline suggestions and Copilot Chat.",
  },
];

export default questions;
