window.COURSES.push({
  code: "COS102", title: "Problem Solving", units: 3, cat: "C", source: "ccmas",
  modules: [
    ["Problem-solving process & computational thinking", [
      "A problem is a gap between the current state and a desired goal state. Problem solving is the process of closing that gap.",
      "Polya's four steps: understand the problem, devise a plan, carry out the plan, look back (review the solution).",
      "Software problem-solving steps: define the problem, analyse it (inputs, outputs, constraints), design an algorithm, code it, test and debug, document and maintain.",
      "Computational thinking has four pillars: decomposition, pattern recognition, abstraction and algorithm design.",
      "Decomposition breaks a big problem into smaller sub-problems. Pattern recognition finds similarities with problems already solved.",
      "Abstraction keeps the important details and hides the rest. Critical thinking means judging information objectively before deciding.",
      "Strategies: brute force (try every option), divide and conquer, trial and error, working backwards, heuristics (rules of thumb)."
    ]],
    ["Algorithms", [
      "An algorithm is a finite, ordered set of unambiguous steps that solves a problem.",
      "Properties: input (zero or more), output (at least one), definiteness (each step clear), finiteness (it ends), effectiveness (each step can actually be done).",
      "An algorithm can be written in natural language, pseudocode or as a flowchart.",
      "Efficiency is measured by time complexity (steps) and space complexity (memory), usually in Big-O notation.",
      "Linear search checks items one by one: O(n). Binary search halves a sorted list each time: O(log n).",
      "Bubble sort repeatedly swaps adjacent items that are out of order: O(n²).",
      "A program is an algorithm written in a programming language."
    ]],
    ["Pseudocode & flowcharts", [
      "Pseudocode describes the steps of an algorithm in structured, plain English. It is language-independent and is not compiled or run.",
      "Common keywords (written in uppercase): START/END, INPUT/READ, OUTPUT/PRINT, IF-THEN-ELSE, CASE, WHILE, REPEAT-UNTIL, FOR.",
      "A flowchart is a diagram of an algorithm: steps are boxes, and arrows show the order.",
      "Symbols: oval = start/stop (terminal); parallelogram = input/output; rectangle = process; diamond = decision; arrow = flow line; small circle = connector.",
      "A decision diamond has one entry and two exits (Yes/No or True/False).",
      "Pseudocode is easier to change than a flowchart; a flowchart is easier to follow at a glance.",
      "Dry run (desk check): tracing an algorithm by hand with sample data in a trace table."
    ]],
    ["Control structures & recursion", [
      "Three basic control structures: sequence, selection and iteration (repetition). Any algorithm can be built from them.",
      "Sequence: steps run one after another. Selection: a condition chooses a path (IF, IF-ELSE, nested IF, CASE/SWITCH).",
      "Iteration: WHILE tests the condition first (pre-test, may run zero times); REPEAT-UNTIL / DO-WHILE tests last (post-test, runs at least once); FOR is count-controlled.",
      "An infinite loop is a loop whose exit condition is never met.",
      "Recursion: a function that calls itself. It needs a base case (stops the calls) and a recursive case (moves toward the base case).",
      "Factorial: n! = n × (n−1)!, with 0! = 1. Fibonacci: F(n) = F(n−1) + F(n−2), which makes two calls (binary recursion).",
      "Each recursive call is stored on the call stack. No base case leads to stack overflow."
    ]],
    ["Decomposition, modularity, testing & debugging", [
      "Modularity divides a program into separate modules (functions/procedures), each doing one job. Top-down design starts from the main problem and refines downwards (stepwise refinement).",
      "Cohesion: how closely the parts inside one module belong together. Coupling: how much modules depend on each other. Aim for high cohesion and low coupling.",
      "Benefits of modules: reuse, easier testing, easier maintenance, teamwork.",
      "Testing finds that errors exist. Debugging finds the cause of an error and fixes it.",
      "Syntax error: breaks the language rules, caught by the compiler. Runtime error: happens while running (e.g. divide by zero). Logic error: program runs but gives the wrong result.",
      "Test levels: unit test (one module), integration test (modules together), system test (whole system), acceptance test (by the user).",
      "Black-box testing checks inputs and outputs without looking at the code. White-box testing uses knowledge of the code."
    ]]
  ],
  cards: [
    ["Algorithm", "Finite, ordered set of unambiguous steps that solves a problem."],
    ["Five properties of an algorithm", "Input, output, definiteness, finiteness, effectiveness."],
    ["Polya's four steps", "Understand the problem, devise a plan, carry out the plan, look back."],
    ["Computational thinking pillars", "Decomposition, pattern recognition, abstraction, algorithm design."],
    ["Decomposition", "Breaking a big problem into smaller, manageable sub-problems."],
    ["Abstraction", "Keeping the essential details and hiding the unnecessary ones."],
    ["Pseudocode", "Structured plain-English description of an algorithm; language-independent, not executed."],
    ["Flowchart decision symbol", "Diamond: one entry, two exits (Yes/No)."],
    ["Flowchart input/output symbol", "Parallelogram."],
    ["Flowchart terminal symbol", "Oval: start or stop."],
    ["Three control structures", "Sequence, selection, iteration."],
    ["WHILE vs REPEAT-UNTIL", "WHILE tests first (may run zero times); REPEAT-UNTIL tests last (runs at least once)."],
    ["Recursion", "A function calling itself; needs a base case and a recursive case."],
    ["Base case", "Condition that stops recursion."],
    ["Cohesion vs coupling", "Cohesion: relatedness inside a module (want high). Coupling: dependence between modules (want low)."],
    ["Testing vs debugging", "Testing shows errors exist; debugging finds and fixes their cause."],
    ["Logic error", "Program runs but gives the wrong result."],
    ["Linear vs binary search", "Linear: O(n), any list. Binary: O(log n), sorted list only."]
  ],
  mcq: [
    [0, "The first step in solving any problem is to", ["Write the code", "Understand the problem", "Test the solution", "Draw a flowchart"], 1],
    [0, "Breaking a large problem into smaller sub-problems is called", ["Abstraction", "Decomposition", "Debugging", "Iteration"], 1],
    [0, "Hiding unnecessary details and keeping only what matters is", ["Abstraction", "Recursion", "Coupling", "Compilation"], 0],
    [0, "Which of these is NOT a pillar of computational thinking?", ["Pattern recognition", "Decomposition", "Compilation", "Algorithm design"], 2],
    [0, "The last of Polya's four problem-solving steps is", ["Devise a plan", "Carry out the plan", "Understand the problem", "Look back"], 3],
    [0, "Trying every possible solution until one works is the ______ approach.", ["Brute-force", "Divide-and-conquer", "Heuristic", "Top-down"], 0],
    [1, "An algorithm must end after a limited number of steps. This property is", ["Definiteness", "Finiteness", "Effectiveness", "Input"], 1],
    [1, "Every step of an algorithm must be clear and unambiguous. This property is", ["Finiteness", "Output", "Definiteness", "Generality"], 2],
    [1, "Binary search works only on a list that is", ["Sorted", "Empty", "Unsorted", "Linked"], 0],
    [1, "The worst-case time complexity of linear search is", ["O(1)", "O(log n)", "O(n)", "O(n²)"], 2],
    [1, "An algorithm written in a programming language is called a", ["Flowchart", "Program", "Pseudocode", "Trace table"], 1],
    [1, "Which sort repeatedly swaps adjacent elements that are in the wrong order?", ["Bubble sort", "Merge sort", "Quick sort", "Binary sort"], 0],
    [2, "Pseudocode is", ["A low-level language", "Code that the compiler runs", "A structured English description of an algorithm", "A type of flowchart symbol"], 2],
    [2, "In a flowchart, a decision is drawn as a", ["Rectangle", "Diamond", "Oval", "Parallelogram"], 1],
    [2, "In a flowchart, input and output are drawn as a", ["Parallelogram", "Diamond", "Circle", "Rectangle"], 0],
    [2, "The oval (terminal) symbol in a flowchart shows", ["A process", "A decision", "A connector", "Start or stop"], 3],
    [2, "A processing step such as total = a + b is drawn in a", ["Diamond", "Oval", "Rectangle", "Parallelogram"], 2],
    [2, "Tracing an algorithm by hand with sample data is called a", ["Dry run", "Compile", "System test", "Refactor"], 0],
    [3, "The three basic control structures are sequence, selection and", ["Recursion", "Iteration", "Abstraction", "Compilation"], 1],
    [3, "Which loop always executes its body at least once?", ["WHILE", "FOR", "REPEAT-UNTIL", "IF"], 2],
    [3, "IF-THEN-ELSE is an example of", ["Sequence", "Selection", "Iteration", "Recursion"], 1],
    [3, "A function that calls itself is using", ["Recursion", "Iteration", "Selection", "Coupling"], 0],
    [3, "The condition that stops a recursive function is the", ["Recursive case", "Loop counter", "Call stack", "Base case"], 3],
    [3, "Recursion with no base case eventually causes", ["A syntax error", "Stack overflow", "Faster execution", "A logic gate"], 1],
    [3, "What is 4! (4 factorial)?", ["4", "16", "24", "10"], 2],
    [4, "Good modular design aims for", ["High coupling, low cohesion", "Low coupling, high cohesion", "High coupling, high cohesion", "Low coupling, low cohesion"], 1],
    [4, "The degree of interdependence between modules is", ["Cohesion", "Abstraction", "Coupling", "Continuity"], 2],
    [4, "An error where the program runs but gives a wrong answer is a", ["Syntax error", "Logic error", "Runtime error", "Compile error"], 1],
    [4, "Testing a single module on its own is", ["Unit testing", "System testing", "Acceptance testing", "Integration testing"], 0],
    [4, "Testing that checks outputs for given inputs without looking at the code is", ["White-box testing", "Debugging", "Desk checking", "Black-box testing"], 3],
    [4, "Finding the cause of an error and correcting it is", ["Testing", "Debugging", "Compiling", "Decomposition"], 1],
    [4, "Division by zero while a program is running is a", ["Syntax error", "Logic error", "Runtime error", "Design error"], 2]
  ],
  fib: [
    [0, "Breaking a problem into smaller parts is called ____.", ["decomposition"]],
    [1, "A finite sequence of well-defined steps for solving a problem is an ____.", ["algorithm"]],
    [1, "Binary search has time complexity O(____ n).", ["log"]],
    [2, "The flowchart symbol for a decision is a ____.", ["diamond", "rhombus"]],
    [2, "A structured English description of an algorithm is called ____.", ["pseudocode", "pseudo code", "pseudo-code"]],
    [3, "A function that calls itself is said to be ____.", ["recursive"]],
    [3, "The condition that ends recursion is the ____ case.", ["base"]],
    [3, "The three control structures are sequence, selection and ____.", ["iteration", "repetition", "looping", "loop"]],
    [4, "The process of finding and fixing errors in a program is ____.", ["debugging"]],
    [4, "The measure of how much modules depend on each other is ____.", ["coupling"]]
  ]
});
window.GUIDES = window.GUIDES || {};
GUIDES.COS102 = `
## How to use this guide
COS102 (Problem Solving) tests **how to think before you code**: the problem-solving process, algorithms, pseudocode, flowcharts, control structures, recursion, modular design and testing. The e-exam asks definitions, flowchart symbols, "which structure is this", and small traces (what does this loop print?). Learn the definitions word for word, then practise tracing.

> **Exam tip:** NOUN material for this course is the old CIT108 (Problem-Solving Algorithm). Open it from the Course material box for the full text.

## 1. The problem-solving process
A **problem** is a gap between where you are and where you want to be. **Problem solving** is the process of closing it.

### Polya's four steps
1. **Understand the problem**: what is given, what is asked, what are the limits.
2. **Devise a plan**: choose a strategy.
3. **Carry out the plan**.
4. **Look back**: check the answer, improve it.

### Steps for a computer solution
1. Define the problem
2. Analyse it: inputs, outputs, processing, constraints
3. Design the algorithm (pseudocode or flowchart)
4. Code it
5. Test and debug
6. Document and maintain

### Strategies
| Strategy | Idea |
|---|---|
| Brute force | Try every possibility |
| Divide and conquer | Split, solve the parts, combine |
| Trial and error | Try, check, adjust |
| Working backwards | Start from the goal |
| Heuristic | Rule of thumb; good enough, not guaranteed best |

## 2. Computational thinking
| Pillar | Meaning |
|---|---|
| **Decomposition** | Break the problem into smaller parts |
| **Pattern recognition** | Spot similarities with solved problems |
| **Abstraction** | Keep what matters, hide the rest |
| **Algorithm design** | Write step-by-step instructions |

**Critical thinking** is judging facts objectively to reach a decision.

## 3. Algorithms
An **algorithm** is a finite, ordered set of unambiguous steps that solves a problem.

| Property | Meaning |
|---|---|
| Input | Zero or more values supplied |
| Output | At least one result |
| Definiteness | Every step is clear |
| Finiteness | It stops after a limited number of steps |
| Effectiveness | Every step is basic enough to be done |

### Efficiency
- **Time complexity**: how the number of steps grows with input size n.
- **Space complexity**: how much memory is needed.

| Algorithm | Complexity | Note |
|---|---|---|
| Linear search | O(n) | Works on any list |
| Binary search | O(log n) | List must be sorted |
| Bubble sort | O(n²) | Swaps adjacent items |

## 4. Pseudocode
Structured plain English for an algorithm. Not tied to any language, not run by a computer. Keywords are written in uppercase.

~~~
START
  INPUT score
  IF score >= 50 THEN
    PRINT "Pass"
  ELSE
    PRINT "Fail"
  ENDIF
END
~~~

## 5. Flowcharts
| Symbol | Name | Use |
|---|---|---|
| Oval | Terminal | Start / Stop |
| Parallelogram | Input/Output | Read or display data |
| Rectangle | Process | Calculation or assignment |
| Diamond | Decision | Yes/No question, two exits |
| Arrow | Flow line | Direction of flow |
| Small circle | Connector | Joins parts of a chart |

> **Exam tip:** "Which symbol has two exits?" is the diamond. "Which symbol starts and ends a flowchart?" is the oval.

## 6. Control structures
| Structure | What it does | Keywords |
|---|---|---|
| Sequence | Steps run in order | — |
| Selection | A condition picks a path | IF, IF-ELSE, CASE |
| Iteration | Steps repeat | WHILE, REPEAT-UNTIL, FOR |

- **WHILE**: test first. May run zero times.
- **REPEAT-UNTIL / DO-WHILE**: test last. Runs at least once.
- **FOR**: runs a known number of times.

~~~
sum = 0
FOR i = 1 TO 5
  sum = sum + i
ENDFOR
PRINT sum        (prints 15)
~~~

## 7. Recursion
A function that calls itself. Needs:
- a **base case** that stops it
- a **recursive case** that moves toward the base case

~~~
FUNCTION fact(n)
  IF n = 0 THEN RETURN 1
  RETURN n * fact(n - 1)
END
~~~
fact(4) = 4 × 3 × 2 × 1 = **24**. Fibonacci makes two self-calls, so it is **binary recursion**. Calls wait on the **call stack**; a missing base case gives **stack overflow**.

## 8. Modularity
Dividing a program into modules that each do one job. **Top-down design** (stepwise refinement) starts with the main task and breaks it down.

| Term | Meaning | Goal |
|---|---|---|
| Cohesion | How well the parts of one module belong together | High |
| Coupling | How much modules depend on each other | Low |

## 9. Testing and debugging
- **Testing** shows that errors exist. **Debugging** finds the cause and fixes it.

| Error | When | Example |
|---|---|---|
| Syntax | Compile time | Missing bracket |
| Runtime | While running | Divide by zero |
| Logic | Wrong result, no crash | Using + instead of × |

| Test level | Scope |
|---|---|
| Unit | One module |
| Integration | Modules working together |
| System | Whole program |
| Acceptance | Done by the user |

**Black-box**: test by inputs and outputs only. **White-box**: test using knowledge of the code. **Dry run**: trace by hand with a trace table.

## Quick revision list
- Algorithm properties: input, output, definiteness, finiteness, effectiveness
- Control structures: sequence, selection, iteration
- Diamond = decision; parallelogram = I/O; rectangle = process; oval = terminal
- WHILE pre-test; REPEAT-UNTIL post-test
- Recursion needs a base case
- High cohesion, low coupling
`;
