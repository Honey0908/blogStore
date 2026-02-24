# GitHub Copilot Instructions

## Purpose
This file guides Copilot agents and reviewers on how to interact with this repository, including coding standards and review guidelines that are often overlooked by automated reviews.

---

## Coding Guidelines

1. **Code Style**
   - Follow the project's ESLint and Prettier configurations.
   - Use consistent naming conventions (camelCase for variables/functions, PascalCase for components).
   - Keep functions small and focused.

2. **Comments & Documentation**
   - Add meaningful comments for complex logic.
   - Document public functions and components with JSDoc or TypeScript annotations.

3. **Security**
   - Never commit secrets or credentials.
   - Validate all user input and sanitize data before processing.

4. **Accessibility**
   - Ensure all UI components are accessible (ARIA attributes, keyboard navigation).
   - Use semantic HTML wherever possible.

5. **Testing**
   - Write unit tests for critical logic and components.
   - Prefer integration tests for workflows.

6. **Performance**
   - Avoid unnecessary re-renders in React components.
   - Use memoization and lazy loading where appropriate.

7. **Error Handling**
   - Handle errors gracefully and provide user feedback.
   - Log errors for debugging, but avoid exposing sensitive info.

---

## Review Guidelines (Copilot & Human)

---

## Copilot Review Output Format

For every issue found, Copilot review comments must follow this format:

- **Title** (in bold font)
  - Description: Briefly explain the issue.
  - Suggestion: Provide a clear, actionable fix.

All review comments should be in bullet points, with each issue as a separate bullet. Example:

- **Missing ARIA Attribute**
  - Description: The image element is missing an `alt` attribute, which is required for accessibility.
  - Suggestion: Add a descriptive `alt` attribute to the image tag.

---

## Copilot Agent Instructions
- Always reference this file before starting a review or coding task.
- If a guideline is not enforced by automated tools, mention it in your review comments.
- Encourage contributors to update this file as standards evolve.
