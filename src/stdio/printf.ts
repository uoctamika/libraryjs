import { inspect } from 'util';

function formatArg(arg: any, specifier: string): string {
  switch (specifier) {
    case 's': return String(arg);
    case 'd': return Number.isInteger(arg) ? String(arg) : 'NaN';
    case 'i': return typeof arg === 'number' ? String(parseInt(String(arg), 10)) : 'NaN';
    case 'f': return typeof arg === 'number' ? arg.toFixed(6) : 'NaN';
    case 'c': return typeof arg === 'string' && arg.length === 1 ? arg : String(arg)[0] || '';
    case 'o': return String(arg);
    case 'O': return inspect(arg, { depth: null, colors: false });
    case 'x': return typeof arg === 'number' ? arg.toString(16) : 'NaN';
    case 'X': return typeof arg === 'number' ? arg.toString(16).toUpperCase() : 'NaN';
    case 'b': return typeof arg === 'number' ? arg.toString(2) : 'NaN';
    case 'j': return JSON.stringify(arg);
    case '%': return '%';
    default: return String(arg);
  }
}

export function printf(format: string, ...args: any[]): void {
  let output = '';
  let argIndex = 0;
  let i = 0;
  const len = format.length;
  const validSpecifiers = ['s', 'd', 'i', 'f', 'c', 'o', 'O', 'x', 'X', 'b', 'j', '%'];

  while (i < len) {
    if (format[i] === '%') {
      if (i + 1 < len) {
        const spec = format[i + 1];
        if (spec === '%') {
          output += '%';
          i += 2;
          continue;
        }
        if (validSpecifiers.includes(spec)) {
          const value = args[argIndex++];
          output += formatArg(value, spec);
          i += 2;
          continue;
        }
      }
      output += format[i];
      i++;
    } else {
      output += format[i];
      i++;
    }
  }

  process.stdout.write(output);
}
