# libraryjs

## About

A lightweight JavaScript and TypeScript utility library - just import and use. No configuration required.

LibraryJS provides many built-in utility functions for common development tasks. If you need additional functionality, feel free to open an issue or submit a feature request.

## Installation & Requirements

Requirements

- Node.js 18 or higher
- TypeScript 5 or higher (only required if you use TypeScript)

Install
```bash
$ npm install @uoctamika/libraryjs
```
Or install a specific version:
```bash
$ npm install @uoctamika/libraryjs@latest
```
or
```bash
$ npm install @uoctamika/libraryjs@1.0.0
```

# Documentation

For the best experience, please read the documentation before using this library.

If you come from a high-level development background, some parts of the API may feel unusual at first. However, if you have experience with C or C++, many design choices should feel familiar.

### namespace

**[stdio](#input-output-stdio)**  - standard input output, provide a function for I/O things

#### Input Output (stdio)
<details>
  <summary>printf</summary>

NAME
<br>

stdio.printf — formatted output function.

<br>
SYNOPSIS
<br>

import { stdio } from '@uoctamika/libraryjs';

<br>

stdio.printf(format: string, ...args: any[]): void;

<br>

DESCRIPTION
<br>

The "printf()" function writes formatted output to "stdout" (standard output).

The format string consists of ordinary characters and conversion specifiers. Ordinary characters are copied directly to the output stream, while conversion specifiers begin with "%" and are replaced with formatted argument values.

Supported conversion specifiers:

| Specifier | Description | Example Input | Output |
|-----------|-------------|---------------|--------|
| `%s` | String value | `"world"` | `"world"` |
| `%d` | Decimal integer | `42` | `"42"` |
| `%f` | Floating-point number (6 decimal places) | `3.14159` | `"3.141590"` |
| `%c` | Character (first character of string) | `"ABC"` | `"A"` |
| `%%` | Literal percent sign | - | `"%"` |

Behavior for invalid arguments:
| Specifier | Invalid Input Behavior |
|-----------|------------------------|
| `%d` | Returns `"NaN"` when the value is not an integer |
| `%f` | Returns `"NaN"` when the value is not a number |
| `%c` | Returns an empty string when the input string is empty |

<br>
RETURN VALUE
<br>

This function returns no value ("void").

Output is written directly to "stdout" using "process.stdout.write()".

Unlike "console.log()", "printf()" does not automatically append a newline character. To print a new line, explicitly include "\n" in the format string.

<br>
EXAMPLE
<br>

stdio.printf("Hello %s!\n", "World");
<br>
stdio.printf("Age: %d\n", 18);
<br>
stdio.printf("PI: %f\n", 3.14159);
<br>
stdio.printf("Grade: %c\n", "A");
<br>
<br>

</details>

# Contributing

Contributions are welcome.

Before contributing, please read the following documents:

- "README.md"
- "SECURITY.md"
- "CODE_OF_CONDUCT.md"

We appreciate all bug reports, feature requests, documentation improvements, and pull requests.
