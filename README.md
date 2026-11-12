# 🎭 Playwright E2E Test Automation Framework

A production-style end-to-end test automation framework built with **Playwright**, **TypeScript**, and **GitHub Actions CI/CD**. Demonstrates hands-on capability in modern QA engineering, from writing resilient locators to configuring cross-browser test runs.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![CI/CD](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

---

## 📌 Overview

This repository documents my journey building a scalable UI automation framework using Playwright — chosen for its auto-waiting behavior, web-first assertions, and native multi-browser support. The goal was not just to write tests, but to structure them the way they'd be structured in a real engineering team: configurable, parallelized, reportable, and CI-ready.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/allanrittol/pw-demo.git
cd pw-demo

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests (headless)
npm test

# Run tests in headed mode (local machine only)
npm test -- --headed

# Run only Chromium tests
npm test -- --project=chromium

# Run a specific spec file
npm test -- tests/example.spec.ts

# Generate and open the HTML report
npm run report

🧪 Test Coverage
example.spec.ts
Page title validation
toHaveTitle() regex match
✅ Passing
example.spec.ts
Navigation via CTA link
toHaveURL() after click
✅ Passing

⚙️ Framework Configuration Highlights
Key design decisions captured in playwright.config.ts:

testDir: './tests' — clean separation of test artifacts from source
fullyParallel: true — maximizes throughput across workers
retries / forbidOnly gated on process.env.CI — flake tolerance locally, strict enforcement in CI
trace: 'on-first-retry' — captures full execution traces only when needed, keeping artifacts lean
video: 'retain-on-failure' + screenshot: 'only-on-failure' — debug evidence without storage bloat
Project matrix — currently scoped to Chromium; ready to expand to Firefox/WebKit
🏗️ Project Structure
pw-demo/
├── tests/
│   └── example.spec.ts      # End-to-end test specs
├── .github/
│   └── workflows/           # CI pipeline definition
├── playwright.config.ts     # Central framework configuration
├── package.json             # Scripts & dependency manifest
└── README.md

🛠️ Technical Skills Demonstrated
Web-first assertions with auto-retrying expectations (expect().toHaveTitle())
Locator strategy using role/text-based selectors over brittle CSS/XPath
Config-driven test execution across environments
Artifact management — traces, screenshots, videos for failure triage
Git workflow — feature branches, meaningful commit history
🔮 Roadmap

 Implement the Page Object Model pattern for maintainability

 Add API testing suite using Playwright's request fixture

 Integrate GitHub Actions for automated test runs on every PR

 Add mocking/stubbing with page.route() for network interception

 Explore AI-assisted test generation and self-healing locator strategies

👤 Author
Allan Kamau Muthiora 
QA Engineer / SDET · Playwright & TypeScript Test Automation · 8+ Years in Quality Engineering

