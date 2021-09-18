export const greet = (name = 'world'): string => `Hello, ${name}!`;

export function getNameFromArgs(): string {
  const args = process.argv;
  // node index.js <name>
  return args.length > 2 ? args[2] : 'world';
}
