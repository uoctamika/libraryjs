# libraryjs
[![npm Version](https://img.shields.io/npm/v/%40uoctamika%2Flibraryjs?style=for-the-badge&logo=npm&color=CB3837)](https://www.npmjs.com/package/@uoctamika/libraryjs)
[![npm Downloads](https://img.shields.io/npm/dw/%40uoctamika%2Flibraryjs?style=for-the-badge&logo=npm&color=CB3837)](https://www.npmjs.com/package/@uoctamika/libraryjs)
[![License](https://img.shields.io/github/license/uoctamika/libraryjs?style=for-the-badge&logo=opensourceinitiative&color=CB3837)](https://github.com/uoctamika/libraryjs/blob/main/LICENSE)

[![Node.js](https://img.shields.io/node/v/%40uoctamika%2Flibraryjs?style=for-the-badge&logo=node.js&color=CB3837)](https://www.npmjs.com/package/@uoctamika/libraryjs)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x.x-CB3837?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![Publish Package](https://img.shields.io/github/actions/workflow/status/uoctamika/libraryjs/publish.yml?style=for-the-badge&logo=github&label=Publish&color=CB3837)](https://github.com/uoctamika/libraryjs/actions/workflows/publish.yml)
[![Release](https://img.shields.io/github/actions/workflow/status/uoctamika/libraryjs/release.yml?style=for-the-badge&logo=github&label=Release&color=CB3837)](https://github.com/uoctamika/libraryjs/actions/workflows/release.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/uoctamika/libraryjs/codeql.yml?style=for-the-badge&logo=github&label=CodeQL&color=CB3837)](https://github.com/uoctamika/libraryjs/actions/workflows/codeql.yml)

[![Socket](https://img.shields.io/badge/Socket-100%2F100-CB3837?style=for-the-badge&logo=shield&logoColor=white)](https://socket.dev/npm/package/@uoctamika/libraryjs)

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
const { stdio } = require('@uoctamika/libraryjs');

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
| `%i` | Integer (parsed from input) | `"42px"` | `"42"` |
| `%f` | Floating-point number (6 decimal places) | `3.14159` | `"3.141590"` |
| `%c` | Character (first character of string) | `"ABC"` | `"A"` |
| `%o` | Object (default string representation) | `{a:1}` | `"[object Object]"` |
| `%O` | Object (full inspection, unlimited depth) | `{a:{b:2}}` | `"{ a: { b: 2 } }"` |
| `%x` | Hexadecimal (lowercase) | `255` | `"ff"` |
| `%X` | Hexadecimal (uppercase) | `255` | `"FF"` |
| `%b` | Binary | `5` | `"101"` |
| `%j` | JSON stringify | `{name:"Uoc"}` | `"{\"name\":\"Uoc\"}"` |
| `%%` | Literal percent sign | - | `"%"` |

Behavior for invalid arguments:

| Specifier | Invalid Input Behavior |
|-----------|------------------------|
| `%d` | Returns `"NaN"` when the value is not a valid integer |
| `%i` | Returns `"NaN"` when no integer can be parsed from the input |
| `%f` | Returns `"NaN"` when the value is not a valid number |
| `%c` | Returns an empty string (`""`) when the input string is empty |
| `%o` | Returns `"[object Object]"` for non-null values using default object conversion |
| `%O` | Returns a string representation of the value, including nested structures |
| `%x` | Returns `"NaN"` when the value cannot be converted to an integer |
| `%X` | Returns `"NaN"` when the value cannot be converted to an integer |
| `%b` | Returns `"NaN"` when the value cannot be converted to an integer |
| `%j` | Returns `"undefined"` when JSON serialization fails or the value cannot be serialized |

<br>
RETURN VALUE
<br>

This function returns number (int).

determine how much outputs is writing into stdout.

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
