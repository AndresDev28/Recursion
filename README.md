# The Odin Project (Recursion Assignment)

# Fibonacci Sequence Generator

This Node.js program generates the Fibonacci sequence either iteratively or recursively based on user input. The program prompts the user to enter a number `n` and then returns the first `n` numbers of the Fibonacci sequence.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/fibonacci-sequence-generator.git
   cd fibonacci-sequence-generator

2. Install dependencies:

This program requires the prompt-sync package to handle user input from the console. You can install it using npm:

npm install prompt-sync

Usage

1. Run the program:

To start the program, run the following command in your terminal:
node fibonacci.js

2. Enter a number:

When prompted, enter a positive integer to generate the first n numbers of the Fibonacci sequence. For example, entering 8 will generate the sequence [0, 1, 1, 2, 3, 5, 8, 13].

Functions

fibsRec(n)
This function generates the Fibonacci sequence recursively.

Parameters:

n (number): The number of elements in the Fibonacci sequence to generate.

Returns:
An array containing the first n numbers of the Fibonacci sequence.