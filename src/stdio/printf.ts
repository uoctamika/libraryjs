import { inspect } from 'util';

const VALID_SPECIFIERS = new Set([
  's', 'd', 'i', 'f', 'c', 'o', 'O', 'x', 'X', 'b', 'j', '%'
]);

function formatArg(arg: any, specifier: string): string {
  switch (specifier) {
    case 's': return String(arg);

    case 'd':
    case 'i': {
      const parsed = parseInt(String(arg), 10);
      return isNaN(parsed) ? 'NaN' : String(parsed);
    }

    case 'f': {
      const parsed = parseFloat(String(arg));
      return isNaN(parsed) ? 'NaN' : parsed.toFixed(6);
    }

    case 'c':
      return typeof arg === 'string' && arg.length === 1
        ? arg
        : (String(arg)[0] || '');

    case 'o': return String(arg);
    case 'O': return inspect(arg, { depth: null, colors: false });

    case 'x':
      return typeof arg === 'number' ? arg.toString(16) : 'NaN';
    case 'X':
      return typeof arg === 'number' ? arg.toString(16).toUpperCase() : 'NaN';
    case 'b':
      return typeof arg === 'number' ? arg.toString(2) : 'NaN';

    case 'j': return JSON.stringify(arg);
    case '%': return '%';
    default: return String(arg);
  }
}

export function printf(format: string, ...args: any[]): void {
  const parts: string[] = [];
  let argIndex = 0;
  let i = 0;
  const len = format.length;

  while (i < len) {
    const ch = format[i];
    if (ch === '%' && i + 1 < len) {
      const spec = format[i + 1];
      if (spec === '%') {
        parts.push('%');
        i += 2;
        continue;
      }
      if (VALID_SPECIFIERS.has(spec)) {
        const value = args[argIndex++];
        parts.push(formatArg(value, spec));
        i += 2;
        continue;
      }
    }
    parts.push(ch);
    i++;
  }

  process.stdout.write(parts.join(''));
}
