window.COURSES.push({
  code: "CIT237", title: "Programming and Algorithms", units: 2, cat: "C", source: "noun",
  modules: [
    ["Programming concepts & design tools", [
      "A program is a set of instructions a computer follows to do a task. Programming is the process of analysing a problem, designing a solution, coding it, testing it and documenting it.",
      "An algorithm is a finite, ordered set of unambiguous steps that solves a problem and always stops. Its properties: input, output, definiteness, finiteness and effectiveness.",
      "Program design tools: pseudocode (structured English), flowcharts (symbols joined by arrows) and structure charts. Flowchart symbols: oval = start/stop, parallelogram = input/output, rectangle = process, diamond = decision.",
      "The three control structures are sequence, selection (if / case) and iteration (loops). Any algorithm can be built from these three.",
      "Syntax errors break the rules of the language and are caught by the translator. Runtime errors happen while the program runs (e.g. divide by zero). Logic errors give wrong results without any error message.",
      "Testing shows that errors are present; debugging finds and removes them. Documentation (comments, user manual, technical manual) makes a program easy to use and maintain."
    ]],
    ["Data types & data structures", [
      "A data type defines a set of values and the operations allowed on them. Basic (primitive) types: integer, real/float, character and Boolean.",
      "A data structure is a way of organising data so it can be used efficiently. Linear structures: array, linked list, stack, queue. Non-linear structures: tree, graph.",
      "An array stores elements of the same type in adjacent memory and gives direct access by index. A linked list stores nodes that each hold data and a pointer to the next node, so insertion is easy but access is sequential.",
      "A stack is Last-In First-Out (LIFO): push adds to the top, pop removes from the top. A queue is First-In First-Out (FIFO): enqueue at the rear, dequeue from the front.",
      "A tree is a hierarchy with one root; a binary tree node has at most two children. A graph is a set of vertices joined by edges.",
      "An abstract data type (ADT) describes data and operations without saying how they are implemented."
    ]],
    ["Performance analysis", [
      "Algorithm analysis estimates the resources an algorithm needs. Time complexity counts basic operations; space complexity counts memory used. Both are written as functions of the input size n.",
      "Order of growth describes how running time grows as n grows. From slowest-growing to fastest-growing: 1, log n, n, n log n, n^2, n^3, 2^n, n!.",
      "Big-O gives an upper bound, Big-Omega a lower bound and Big-Theta a tight bound on growth.",
      "Worst case is the input that makes the algorithm run longest; best case the shortest; average case the expected time over all inputs. Worst case is quoted most often because it is a guarantee.",
      "Class P holds problems solvable in polynomial time. Class NP holds problems whose solutions can be verified in polynomial time. NP-complete problems are the hardest in NP: if one is solved in polynomial time, all of NP is.",
      "The travelling salesman decision problem is a classic NP-complete problem. Whether P = NP is still an open question."
    ]],
    ["Sorting algorithms", [
      "Sorting arranges items in order (ascending or descending). Bubble sort repeatedly compares adjacent items and swaps them if out of order; worst and average time O(n^2).",
      "Selection sort repeatedly finds the smallest remaining item and puts it at the front of the unsorted part; O(n^2) in every case, with at most n - 1 swaps.",
      "Insertion sort takes each item and inserts it into its right place in the already-sorted part; O(n^2) worst case, O(n) when the list is already sorted.",
      "Merge sort is divide-and-conquer: split the list in half, sort each half recursively, then merge. Time O(n log n) in every case, but it needs extra memory.",
      "Quick sort picks a pivot, partitions items into those smaller and those larger than the pivot, then sorts each part recursively. Average O(n log n), worst case O(n^2) when the pivot is always the smallest or largest item.",
      "A stable sort keeps equal items in their original order. Merge sort is stable; quick sort and selection sort are usually not."
    ]],
    ["Searching & divide-and-conquer", [
      "Divide-and-conquer has three steps: divide the problem into smaller subproblems, conquer them recursively, combine their answers.",
      "Linear (sequential) search checks each item in turn. It works on unsorted data; worst case O(n), best case O(1).",
      "Binary search works only on sorted data. It compares the target with the middle item and discards half the list each time; worst case O(log n).",
      "Recursion is when a function calls itself. Every recursive function needs a base case that stops it and a recursive case that moves towards the base case.",
      "Classic problems solved with recursion: factorial, Fibonacci numbers, Towers of Hanoi (2^n - 1 moves for n discs) and greatest common divisor (Euclid's algorithm).",
      "A greedy algorithm takes the best-looking choice at each step. Dynamic programming stores answers to overlapping subproblems so they are not recomputed."
    ]]
  ],
  cards: [
    ["Algorithm", "A finite, ordered set of unambiguous steps that solves a problem and stops."],
    ["Five properties of an algorithm", "Input, output, definiteness, finiteness, effectiveness."],
    ["Three control structures", "Sequence, selection, iteration."],
    ["Syntax vs logic error", "Syntax: breaks language rules, caught by translator. Logic: program runs but gives wrong result."],
    ["Stack", "LIFO structure. Push adds to top, pop removes from top."],
    ["Queue", "FIFO structure. Enqueue at rear, dequeue from front."],
    ["Array vs linked list", "Array: adjacent memory, direct access by index. Linked list: nodes with pointers, sequential access, easy insertion."],
    ["Big-O", "Upper bound on how an algorithm's running time grows with input size n."],
    ["Order of growth, slow to fast", "1, log n, n, n log n, n^2, n^3, 2^n, n!"],
    ["P vs NP", "P: solvable in polynomial time. NP: solution verifiable in polynomial time."],
    ["Bubble sort", "Swap adjacent out-of-order items repeatedly. O(n^2)."],
    ["Selection sort", "Pick smallest remaining item, put it at front of unsorted part. O(n^2)."],
    ["Merge sort", "Divide in half, sort halves, merge. O(n log n) always; needs extra memory."],
    ["Quick sort", "Partition around a pivot, sort parts. Average O(n log n), worst O(n^2)."],
    ["Binary search", "Halve a sorted list each step. O(log n)."],
    ["Linear search", "Check items one by one. O(n). Works on unsorted data."],
    ["Divide-and-conquer steps", "Divide, conquer, combine."],
    ["Base case", "The condition that stops a recursive function."]
  ],
  mcq: [
    [0, "Which of these is NOT a property of an algorithm?", ["Finiteness", "Definiteness", "Ambiguity", "Effectiveness"], 2],
    [0, "In a flowchart, a decision is drawn with a", ["Rectangle", "Diamond", "Oval", "Parallelogram"], 1],
    [0, "In a flowchart, input and output are drawn with a", ["Parallelogram", "Diamond", "Circle", "Rectangle"], 0],
    [0, "An error that lets the program run but gives a wrong answer is a", ["Syntax error", "Runtime error", "Compile error", "Logic error"], 3],
    [0, "Dividing by zero while a program runs is a", ["Syntax error", "Runtime error", "Logic error", "Design error"], 1],
    [0, "Structured English used to describe an algorithm is called", ["Machine code", "Flowchart", "Pseudocode", "Object code"], 2],
    [0, "A loop is an example of which control structure?", ["Iteration", "Sequence", "Selection", "Recursion"], 0],
    [1, "Which of these is a non-linear data structure?", ["Array", "Stack", "Queue", "Tree"], 3],
    [1, "A stack works on the principle of", ["FIFO", "LIFO", "Random access", "Priority"], 1],
    [1, "Removing an item from a queue is called", ["Pop", "Push", "Dequeue", "Peek"], 2],
    [1, "Which structure gives direct access to an element by its index?", ["Array", "Linked list", "Queue", "Graph"], 0],
    [1, "In a binary tree, each node has at most how many children?", ["One", "Three", "Any number", "Two"], 3],
    [1, "Which of these is a primitive data type?", ["Stack", "Boolean", "Tree", "Linked list"], 1],
    [2, "Big-O notation gives", ["A lower bound", "An exact time in seconds", "An upper bound", "The memory address"], 2],
    [2, "Which grows fastest as n becomes large?", ["2^n", "n^2", "n log n", "n"], 0],
    [2, "Which grows slowest as n becomes large?", ["n", "n log n", "n^2", "log n"], 3],
    [2, "Problems whose solutions can be verified in polynomial time form the class", ["P only", "NP", "Exponential", "Constant"], 1],
    [2, "The case most often quoted because it gives a guarantee is the", ["Best case", "Average case", "Worst case", "Random case"], 2],
    [2, "Space complexity measures", ["Memory used", "Lines of code", "Number of loops", "Compile time"], 0],
    [3, "Which sort repeatedly swaps adjacent elements that are out of order?", ["Merge sort", "Quick sort", "Selection sort", "Bubble sort"], 3],
    [3, "The worst-case time of merge sort is", ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], 1],
    [3, "The worst-case time of quick sort is", ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"], 2],
    [3, "Quick sort divides the list around an element called the", ["Pivot", "Root", "Key node", "Head"], 0],
    [3, "Which sort finds the smallest remaining item and moves it to the front?", ["Bubble sort", "Merge sort", "Quick sort", "Selection sort"], 3],
    [3, "Which of these sorts needs extra memory for merging?", ["Bubble sort", "Merge sort", "Selection sort", "Insertion sort"], 1],
    [4, "Binary search requires the list to be", ["Linked", "Empty", "Sorted", "Of even length"], 2],
    [4, "The worst-case time of binary search is", ["O(log n)", "O(n)", "O(n^2)", "O(1)"], 0],
    [4, "The worst-case time of linear search is", ["O(1)", "O(log n)", "O(n^2)", "O(n)"], 3],
    [4, "A function that calls itself is", ["Iterative", "Recursive", "Sequential", "Compiled"], 1],
    [4, "How many moves solve Towers of Hanoi with 3 discs?", ["3", "6", "7", "9"], 2],
    [4, "The three steps of divide-and-conquer are divide, conquer and", ["Combine", "Compile", "Compare", "Copy"], 0],
    [4, "The maximum number of comparisons binary search needs on 16 sorted items is about", ["16", "8", "2", "5"], 3, "log2(16) = 4, plus one final comparison."],
    [0, "The first step in solving a problem with a computer is to", ["Write the code", "Define the problem", "Test the program", "Draw the output"], 1],
    [0, "Finding and removing errors from a program is called", ["Compiling", "Linking", "Debugging", "Coding"], 2],
    [0, "The flowchart symbol for start or stop is the", ["Oval (terminal)", "Rectangle", "Diamond", "Parallelogram"], 0],
    [0, "A processing step in a flowchart is drawn with a", ["Diamond", "Circle", "Arrow", "Rectangle"], 3],
    [0, "Flow lines in a flowchart show the", ["Data types used", "Direction of control", "Size of memory", "Number of loops"], 1],
    [0, "An IF...THEN...ELSE statement is an example of", ["Sequence", "Iteration", "Selection", "Recursion"], 2],
    [0, "Statements executed one after another in order form a", ["Sequence", "Selection", "Loop", "Branch"], 0],
    [0, "A loop that tests its condition before each pass is a", ["Repeat-until loop", "Do-while loop", "Infinite loop", "While loop"], 3],
    [0, "A named memory location whose value can change is a", ["Constant", "Variable", "Literal", "Keyword"], 1],
    [0, "A value that does not change while the program runs is a", ["Variable", "Array", "Constant", "Pointer"], 2],
    [0, "Checking an algorithm by hand with sample data is called", ["Desk checking (dry run)", "Compiling", "Linking", "Loading"], 0],
    [0, "Designing a solution by breaking it into smaller sub-problems is", ["Bottom-up coding", "Patching", "Debugging", "Top-down design"], 3],
    [0, "An algorithm must end after a limited number of steps. This property is", ["Generality", "Finiteness", "Input", "Effectiveness"], 1],
    [0, "A small circle in a flowchart is used as a", ["Decision", "Process", "Connector", "Terminal"], 2],
    [1, "A queue works on the principle of", ["First-In First-Out", "Last-In First-Out", "Random access", "Largest first"], 0],
    [1, "Removing the top item of a stack is called", ["Push", "Enqueue", "Peek", "Pop"], 3],
    [1, "Adding an item to the rear of a queue is called", ["Dequeue", "Enqueue", "Pop", "Push"], 1],
    [1, "Each node of a singly linked list holds data and a", ["Key", "Index", "Pointer to the next node", "Stack"], 2],
    [1, "The topmost node of a tree is the", ["Root", "Leaf", "Branch", "Sibling"], 0],
    [1, "A tree node with no children is a", ["Root", "Parent", "Internal node", "Leaf"], 3],
    [1, "A data structure made of vertices and edges is a", ["Stack", "Graph", "Queue", "Array"], 1],
    [1, "All elements of an array must be of", ["Different types", "Pointer type", "The same type", "String type"], 2],
    [1, "Which data type holds only true or false?", ["Boolean", "Integer", "Character", "Real"], 0],
    [1, "Which data type stores numbers with a fractional part?", ["Integer", "Character", "Boolean", "Real (float)"], 3],
    [1, "A collection of related fields of different types is a", ["Array", "Record", "Stack", "Queue"], 1],
    [1, "Trying to pop from an empty stack causes", ["Overflow", "Deadlock", "Underflow", "Recursion"], 2],
    [1, "Which structure is used to manage function calls and recursion?", ["Stack", "Queue", "Graph", "File"], 0],
    [1, "Visiting a binary tree in the order left, root, right is", ["Preorder", "Postorder", "Level order", "Inorder"], 3],
    [1, "In a linked list, the last node's pointer is", ["The head", "Null", "The root", "An index"], 1],
    [1, "Arrays, stacks and queues are examples of", ["Non-linear structures", "Primitive types", "Linear structures", "Graphs"], 2],
    [2, "An algorithm whose running time does not depend on input size is", ["O(1)", "O(n)", "O(log n)", "O(n²)"], 0],
    [2, "Two nested loops each running n times give a time of", ["O(n)", "O(log n)", "O(1)", "O(n²)"], 3],
    [2, "A single loop running n times gives a time of", ["O(1)", "O(n)", "O(n²)", "O(2ⁿ)"], 1],
    [2, "Big-Omega (Ω) notation gives", ["An upper bound", "An exact count", "A lower bound", "The space used"], 2],
    [2, "Big-Theta (Θ) notation gives", ["A tight bound", "Only an upper bound", "Only a lower bound", "No bound"], 0],
    [2, "Time complexity measures", ["The memory used", "The lines of code", "The compiler speed", "How running time grows with input size"], 3],
    [2, "Which is the correct order from slowest growth to fastest?", ["O(n), O(1), O(n²)", "O(1), O(log n), O(n), O(n²)", "O(n²), O(n), O(1)", "O(log n), O(1), O(n)"], 1],
    [2, "O(2ⁿ) is called", ["Linear time", "Logarithmic time", "Exponential time", "Constant time"], 2],
    [2, "The best case of an algorithm is the input that needs", ["The least work", "The most work", "Average work", "No memory"], 0],
    [2, "Problems for which no efficient (polynomial) algorithm is known are called", ["Trivial", "Linear", "Constant", "Intractable"], 3],
    [2, "In Big-O, the expression 3n² + 5n + 2 simplifies to", ["O(n)", "O(n²)", "O(3n)", "O(1)"], 1, "Keep the fastest-growing term and drop constants."],
    [3, "The worst-case time of bubble sort is", ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], 2],
    [3, "Which sort builds the sorted list one item at a time, like sorting cards in the hand?", ["Insertion sort", "Merge sort", "Quick sort", "Heap sort"], 0],
    [3, "The average-case time of quick sort is", ["O(n²)", "O(n)", "O(log n)", "O(n log n)"], 3],
    [3, "The best-case time of bubble sort (with a swap check) on a sorted list is", ["O(n²)", "O(n)", "O(n log n)", "O(1)"], 1],
    [3, "A sort that keeps equal items in their original order is", ["Unstable", "Recursive", "Stable", "External"], 2],
    [3, "Arranging data in ascending or descending order is", ["Sorting", "Searching", "Merging", "Hashing"], 0],
    [3, "Which of these is NOT an O(n²) sort in the worst case?", ["Bubble sort", "Selection sort", "Insertion sort", "Merge sort"], 3],
    [3, "Sorting data too large for main memory using disk is", ["Internal sorting", "External sorting", "Bubble sorting", "Stable sorting"], 1],
    [4, "Linear search checks", ["The middle item first", "Only the last item", "Each item in turn", "Every second item"], 2],
    [4, "Binary search first compares the key with the", ["Middle element", "First element", "Last element", "Smallest element"], 0],
    [4, "The best-case time of linear search is", ["O(n)", "O(log n)", "O(n²)", "O(1)"], 3],
    [4, "Which of these algorithms is NOT divide-and-conquer?", ["Merge sort", "Bubble sort", "Quick sort", "Binary search"], 1],
  ],
  fib: [
    [0, "A finite sequence of unambiguous steps for solving a problem is called an ____.", ["algorithm"]],
    [0, "An error that breaks the grammar rules of a programming language is a ____ error.", ["syntax"]],
    [1, "A stack is a ____-In First-Out structure.", ["last"]],
    [1, "Adding an item to the top of a stack is called ____.", ["push", "pushing"]],
    [2, "The class of problems solvable in polynomial time is called ____.", ["p"]],
    [2, "Big-____ notation gives an upper bound on growth.", ["o", "oh"]],
    [3, "Merge sort uses the divide-and-____ approach.", ["conquer"]],
    [3, "In quick sort the element used to partition the list is the ____.", ["pivot"]],
    [4, "Binary search only works on a ____ list.", ["sorted", "ordered"]],
    [4, "The condition that stops a recursive function is the ____ case.", ["base"]],
    [0, "A diagram that uses symbols to show the steps of an algorithm is a ____.", ["flowchart", "flow chart"]],
    [1, "A queue is a First-In First-____ structure.", ["out"]],
    [2, "An algorithm that takes the same time for any input size is O(____).", ["1", "one"]],
    [3, "____ sort repeatedly swaps adjacent elements that are in the wrong order.", ["bubble"]],
    [4, "Searching each item one after another is called ____ search.", ["linear", "sequential"]]
  ]
});
window.GUIDES = window.GUIDES || {};
GUIDES.CIT237 = `
## What this course tests

Two things: how programs are designed, and how to judge and choose algorithms. Most objective questions ask for a definition, a complexity, or which algorithm does what.

## 1. Programming basics

- **Algorithm**: finite, ordered, unambiguous steps that solve a problem and stop.
- **Design tools**: pseudocode, flowchart, structure chart.
- **Control structures**: sequence, selection, iteration.

| Flowchart symbol | Meaning |
|---|---|
| Oval | Start / stop |
| Parallelogram | Input / output |
| Rectangle | Process |
| Diamond | Decision |

| Error | When found | Example |
|---|---|---|
| Syntax | At translation | Missing bracket |
| Runtime | While running | Divide by zero |
| Logic | Only by checking results | Using + instead of * |

## 2. Data structures

| Structure | Rule | Operations |
|---|---|---|
| Stack | LIFO | push, pop |
| Queue | FIFO | enqueue, dequeue |
| Array | Direct access by index | read, write |
| Linked list | Nodes + pointers | insert, delete, traverse |
| Tree | Hierarchy, one root | insert, search, traverse |

> Linear: array, linked list, stack, queue. Non-linear: tree, graph.

## 3. Performance analysis

Order of growth, slowest-growing first:

1 < log n < n < n log n < n^2 < n^3 < 2^n < n!

- **Big-O**: upper bound. **Big-Omega**: lower bound. **Big-Theta**: tight bound.
- **Worst case** is the usual figure quoted.
- **P**: solvable in polynomial time. **NP**: verifiable in polynomial time. **NP-complete**: hardest problems in NP.

## 4. Sorting

| Sort | Idea | Best | Average | Worst |
|---|---|---|---|---|
| Bubble | Swap adjacent pairs | n | n^2 | n^2 |
| Selection | Pick smallest, place it | n^2 | n^2 | n^2 |
| Insertion | Insert into sorted part | n | n^2 | n^2 |
| Merge | Split, sort, merge | n log n | n log n | n log n |
| Quick | Partition round pivot | n log n | n log n | n^2 |

> Merge sort and quick sort are divide-and-conquer. Merge sort needs extra memory; quick sort's worst case comes from bad pivots.

## 5. Searching and recursion

| Search | Needs sorted data? | Worst case |
|---|---|---|
| Linear | No | n |
| Binary | Yes | log n |

Worked example, binary search for 23 in 2, 5, 8, 12, 16, 23, 38:

1. Middle is 12. 23 is bigger, keep right half: 16, 23, 38.
2. Middle is 23. Found in two steps.

Recursion needs a **base case** and a **recursive case**. Towers of Hanoi with n discs takes 2^n - 1 moves.

## Exam tips

- Learn the complexity table by heart.
- "Sorted list" in a question points to binary search.
- LIFO = stack, FIFO = queue.
`;
