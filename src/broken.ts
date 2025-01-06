// Example code that breaks the specified TypeScript ESLint rules

const unusedVariable = 42; // This variable is declared but not used

function greet(name) {
	console.log("Hello, " + name);
} // Missing explicit return type and parameter type

class Greeter {
	message;
	constructor(msg) {
		this.message = msg;
	} // Missing property type declaration and parameter type
}