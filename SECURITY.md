# Security Policy

## Supported Versions

We release patches for security vulnerabilities only in the latest minor/patch version of the library.  
Older versions are not actively supported.

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | supported          |
| x.5.x   | next security improvements             |

## Reporting a Vulnerability

We take security issues seriously. If you discover a security vulnerability within `@uoctamika/libraryjs`, please follow the process below:

1. **Do not** open a public GitHub issue.
2. Send an email to the maintainer at **uocdev.github.io@gmail.com** with the subject: `[SECURITY] Brief description of the issue`.
3. Include as much detail as possible:
   - Affected versions
   - Steps to reproduce the vulnerability
   - Potential impact
   - Any possible fix (if known)

You can expect an initial response within **72 hours**. We will work with you to validate and address the issue as quickly as possible.

## Disclosure Process

Once a vulnerability is confirmed:

- We will prepare a patch for the latest supported version.
- A security advisory will be drafted (but not published immediately).
- After the patch is released, we will publicly disclose the issue via:
  - GitHub Security Advisory
  - Release notes
  - (Optional) CVE request if applicable

## Scope

This policy applies to the core library code in the official repository:  
[https://github.com/uoctamika/libraryjs](https://github.com/uoctamika/libraryjs)

## Best Practices for Users

- Always use the latest version of the library.
- Review the release notes for security-related updates.
- Avoid passing unsanitized user input directly into internal functions unless documented as safe.

Thank you for helping keep `@uoctamika/libraryjs` secure.
