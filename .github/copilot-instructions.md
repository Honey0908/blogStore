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

1. **Check for Security Issues**
   - Ensure no secrets are committed.
   - Review authentication and authorization logic.

2. **Accessibility Review**
   - Confirm UI meets accessibility standards.

3. **Code Quality**
   - Enforce linting and formatting.
   - Check for dead code and unused variables.

4. **Documentation**
   - Ensure new features/components are documented.

5. **Testing Coverage**
   - Verify tests exist for new/changed code.

6. **Performance Considerations**
   - Review for potential performance bottlenecks.

---

## Copilot Agent Instructions
- Always reference this file before starting a review or coding task.
- If a guideline is not enforced by automated tools, mention it in your review comments.
- Encourage contributors to update this file as standards evolve.
