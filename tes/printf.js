// test-printf.js
import { stdio } from '../dist/esm/index.mjs'; // atau sesuai path file Anda

console.log('========== TEST PRINTF ==========\n');

// Test %s - String
stdio.printf("%s - String test\n", "Hello World");
stdio.printf("Multiple strings: %s %s %s\n", "Hello", "from", "printf");

// Test %d - Integer desimal
stdio.printf("%d - Integer test\n", 42);
stdio.printf("%d - Negative integer\n", -99);
stdio.printf("%d - Float to integer (floor)\n", 3.14);
stdio.printf("%d - String number\n", "123");
stdio.printf("%d - Invalid string\n", "abc");
stdio.printf("%d - Boolean true\n", true);
stdio.printf("%d - Boolean false\n", false);

// Test %i - Integer (sama seperti %d)
stdio.printf("%i - Integer test\n", 123);
stdio.printf("%i - String number\n", "456abc");
stdio.printf("%i - Float number\n", 7.89);

// Test %f - Float
stdio.printf("%f - Float test\n", 3.14159);
stdio.printf("%f - Integer to float\n", 42);
stdio.printf("%f - String number\n", "2.71828");
stdio.printf("%f - Always 6 decimals\n", 10);

// Test %c - Character
stdio.printf("%c - Single character\n", "A");
stdio.printf("%c - First char of string\n", "Hello");
stdio.printf("%c - From number (ASCII)\n", 65);
stdio.printf("%c - Empty string\n", "");

// Test %o - Object (String conversion)
stdio.printf("%o - Object\n", { name: "John", age: 30 });
stdio.printf("%o - Array\n", [1, 2, 3]);
stdio.printf("%o - Null\n", null);
stdio.printf("%o - Undefined\n", undefined);

// Test %O - Object (inspect full depth)
stdio.printf("%O - Deep object\n", { 
  user: { 
    name: "Azizah", 
    nested: { 
      deep: "value", 
      level: 3 
    } 
  } 
});
stdio.printf("%O - Array with objects\n", [{ id: 1 }, { id: 2 }]);

// Test %x - Hexadecimal (lowercase)
stdio.printf("%x - Hexadecimal\n", 255);
stdio.printf("%x - String number to hex\n", "255");
stdio.printf("%x - Large number\n", 65535);
stdio.printf("%x - Negative number\n", -100);

// Test %X - Hexadecimal (uppercase)
stdio.printf("%X - Hexadecimal uppercase\n", 255);
stdio.printf("%X - String number\n", "65535");
stdio.printf("%X - Large number\n", 123456789);

// Test %b - Binary
stdio.printf("%b - Binary\n", 42);
stdio.printf("%b - String number to binary\n", "10");
stdio.printf("%b - Power of two\n", 256);
stdio.printf("%b - Zero\n", 0);

// Test %j - JSON
stdio.printf("%j - JSON string\n", { name: "Azizah", age: 25 });
stdio.printf("%j - JSON array\n", [1, "two", { three: 3 }]);
stdio.printf("%j - JSON with null\n", null);

// Test %% - Percent sign
stdio.printf("%% - Percent symbol\n", "ignored");
stdio.printf("Completion: 75%%\n");

// Test multiple arguments
stdio.printf("\n=== Multiple Arguments ===\n");
stdio.printf("Name: %s, Age: %d, Height: %.2f\n", "Azizah", 25, 165.5);
stdio.printf("Hex: %X, Binary: %b, String: %s\n", 255, 42, "done");

// Test edge cases
stdio.printf("\n=== Edge Cases ===\n");
stdio.printf("Missing argument: %s %d\n", "only one");
stdio.printf("Extra arguments: %s\n", "one", "two", "three");
stdio.printf("Escaped percent: 50%% discount\n");
stdio.printf("Invalid specifier: %z\n", "this should show literal %z");
stdio.printf("Multiple percents: %d%% completed\n", 95);

// Test dengan data real-world
stdio.printf("\n=== Real World Examples ===\n");
const user = { username: "hana_yauise", level: 5, exp: 1250 };
stdio.printf("User: %s (Level %d) - EXP: %d\n", user.username, user.level, user.exp);

const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Mouse", price: 150000 }
];
stdio.printf("Products: %j\n", products);

// Test chaining dengan line breaks
stdio.printf("\n%s %s!\n", "Testing", "complete");
stdio.printf("All %d tests %s\n", 12, "passed ✓");

console.log('\n========== END OF TEST ==========');
