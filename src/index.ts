import { Greeter, add, formatUser, User } from './utils';

/**
 * Main entry point for the TypeScript application
 */
function main(): void {
  console.log('=== TypeScript Project Started ===\n');

  // Example 1: Using the Greeter class
  const greeter = new Greeter('TypeScript Developer');
  console.log(greeter.greet());

  // Example 2: Using the add function
  const sum = add(5, 10);
  console.log(`5 + 10 = ${sum}`);

  // Example 3: Using the formatUser function
  const user: User = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
  };
  console.log(formatUser(user));

  const userWithoutEmail: User = {
    name: 'Bob',
    age: 30
  };
  console.log(formatUser(userWithoutEmail));

  console.log('\n=== TypeScript Project Completed ===');
}

// Execute main function
main();
