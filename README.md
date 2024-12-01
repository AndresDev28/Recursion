# The Odin Project (Recursion Assignment)

# Fibonacci Sequence Generator

This Node.js program generates the Fibonacci sequence either iteratively or recursively based on user input. The program prompts the user to enter a number `n` and then returns the first `n` numbers of the Fibonacci sequence.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/AndresDev28/Recursion.git

2. Install dependencies:

This program requires the prompt-sync package to handle user input from the console. You can install it using npm:

npm install prompt-sync

Fibonacci Sequence Generator

This Node.js program generates the Fibonacci sequence either iteratively or recursively based on user input. The program prompts the user to enter a number n and then returns the first n numbers of the Fibonacci sequence.

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

Merge Sort

This Node.js program sorts an array using Merge Sort Algorithm, which follows the dicide and conquer technique.

Usage

1. Run the Program:

To start the program, run the following command in your terminal:

node merge-sort.js

Example

Here is an example of the output:

$ node merge-sort.js
[ 3, 9, 10, 27, 38, 43, 82 ]
[ 1, 2, 3, 4, 5, 6 ]

Functions
mergeSort(array)
This function sorts an array using the Merge Sort algorithm.

Parameters:
array (array): The array to be sorted.
Returns:
An array sorted in ascending order.
merge(left, right)
This function merges two sorted arrays into one sorted array.

Parameters:
left (array): The left half of the array.
right (array): The right half of the array.
Returns:
A merged and sorted array.