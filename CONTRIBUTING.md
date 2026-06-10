# Contributing to Himanshu Kumar's Portfolio

Thank you for your interest in contributing to this project! We welcome feedback, bug reports, and pull requests to make this portfolio even better.

Please take a moment to review this document before submitting your contributions.

## How to Contribute

### 1. Reporting Bugs & Suggesting Features
- Search the [Issues tab](https://github.com/Himanshukumar1306/PORTFOLIO/issues) to ensure the issue or feature request has not already been submitted.
- Open a new issue with a clear description, steps to reproduce (if it is a bug), and details of your environment.

### 2. Making Code Changes
To contribute code or content:

1. **Fork the repository** to your own GitHub account.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/PORTFOLIO.git
   cd PORTFOLIO
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/Himanshukumar1306/PORTFOLIO.git
   ```
4. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Install dependencies**:
   ```bash
   npm install
   ```
6. **Start the development server**:
   ```bash
   npm run dev
   ```
7. **Make your changes** and test them in the browser.
8. **Verify the production build** compiles successfully before committing:
   ```bash
   npm run build
   ```

### 3. Submitting a Pull Request
1. Commit your changes with clear, descriptive commit messages.
2. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
3. Open a Pull Request from your fork's branch to the upstream `main` branch.
4. Describe the changes and reference any relevant issues.

## Style & Coding Guidelines
- **Clean Code**: Ensure your code is clean, readable, and properly commented where necessary.
- **Consistency**: Match the formatting and conventions used throughout the codebase (React, JSX, Tailwind CSS).
- **Responsive Design**: Verify that any UI changes are fully responsive and work seamlessly on mobile, tablet, and desktop screens.
