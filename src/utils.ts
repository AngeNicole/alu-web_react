/**
 * Greeter class - A simple example TypeScript class
 */
export class Greeter {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  /**
   * Returns a greeting message
   */
  public greet(): string {
    return `Hello, ${this.greeting}!`;
  }
}

/**
 * Utility function to add two numbers
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Utility function to format a user object
 */
export interface User {
  name: string;
  age: number;
  email?: string;
}

export function formatUser(user: User): string {
  const emailPart = user.email ? ` (${user.email})` : '';
  return `${user.name}, ${user.age} years old${emailPart}`;
}
