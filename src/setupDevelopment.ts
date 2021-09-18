import { getNameFromArgs, greet } from './main';

function main(): void {
  console.log(greet(getNameFromArgs()));
}

main();
