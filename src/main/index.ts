export const greet = (name = 'world'): string => `Hello, ${name}!`;

export function getNameFromArgs(): string {
  const args = process.argv;
  return args.length > 2 ? args[2] : 'world';
}
