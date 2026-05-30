function formatArg(arg: any, specifier: string): string {
  switch (specifier) {
    case 's': return String(arg);
    case 'd': return Number.isInteger(arg) ? String(arg) : 'NaN';
    case 'f': return typeof arg === 'number' ? arg.toFixed(6) : 'NaN';
    case 'c': return typeof arg === 'string' && arg.length === 1 ? arg : String(arg)[0] || '';
    case '%': return '%';
    default: return String(arg);
  }
}

export function printf(format: string, ...args: any[]): void {
  let output = '';
  let argIndex = 0;
  let i = 0;
  const len = format.length;

  while (i < len) {
    if (format[i] === '%') {
      if (i + 1 < len) {
        const spec = format[i + 1];
        if (spec === '%') {
          output += '%';
          i += 2;
          continue;
        }
        if (['s', 'd', 'f', 'c'].includes(spec)) {
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
