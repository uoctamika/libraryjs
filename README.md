# libraryjs

## About
 A lightweight JavaScript & TypeScript utility library - just import and use. No configuration needed, functions are ready to use.
many build in functions you can found here, they are makes for common things, soo you can request own functions :D

## Installation & Requirement

Node.js version 18 or higher
TypeScript Compiler (tsc, if you use typescript) version 5 or higher

```bash
$ npm install @uoctamika/libraryjs
```

or if you want use others versions
```bash
$ npm install @uoctamika/libraryjs@latest # or @1.0.0 etc
```

# Documentations

for best experience & it work as normally should be, this library require you to __read__ the docs,
if you from high level tech this documentations kinda feel confuse, but if you from C & C++ dev, this a home for you.
<br>
the following first feature are:

#### printf
NAME
      stdio.printf - function format output
<br>
SYNOPSIS
      import { stdio } from '@uoctamika/libraryjs';
<br>
      stdio.printf(format: string, ...args: any[]);
<br>

DESCRIPTION
     The printf() function writes output to stdout (standard output) under control of a format string that specifies how subsequent arguments (or access via arguments) are converted for output.

     The format string is composed of zero or more directives: ordinary characters (not %), which are copied unchanged to the output stream; and conversion specifications, each of which results in fetching zero or more subsequent arguments.

     Each conversion specification is introduced by the character %, and ends with a conversion specifier. The following conversion specifiers are available:

     %s      String (or any type converted to string) "world" world
     %d      Decimal integer (must be integer) 42 42
     %f      Floating-point number (6 decimal places) 3.14159 3.141590
     %c      Character (first character of string) "ABC" A
     %%      Literal percent sign - %

     If an argument does not match the expected specifier, the behavior is as follows:

     %d      with non-integer outputs "NaN"
  · %f      with non-number outputs "NaN"
·   %c      with empty string outputs empty string

<br>
RETURN VALUE
     This function returns no value (void). It writes directly to stdout (standard output) using process.stdout.write().

     Unlike console.log(), printf() does not automatically append a newline character at the end of output. You must explicitly include \n in the format string if you want a newline.

# Contributor
If you want contribute into libraryjs, we're welcoming you to our community, always read docs, SECURITY.md, and CODE_OF_CONDUCT.md okay!
