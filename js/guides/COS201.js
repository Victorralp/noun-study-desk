window.GUIDES = window.GUIDES || {};
GUIDES.COS201 = `
## How to use this guide
COS201 (Computer Programming I) tests whether you understand how a problem becomes a working program. Exam questions are objective and fill-in-the-gap, so they reward exact definitions, correct terminology and the ability to trace short pieces of code. Read each section, then close the page and explain the bold terms out loud. Python is used for examples because it is the language most CCMAS outlines use for a first programming course, but the ideas apply to every language.

> **Exam tip:** Many questions are "what is the output of this code?" Practise tracing code on paper: write down every variable and update its value line by line.

## 1. Problem solving and algorithms
### The problem-solving process
Programming is problem solving with a computer. The standard steps are:
1. **Define the problem**: state clearly what is to be solved.
2. **Analyse the problem**: identify the inputs, the required outputs, and the processing that turns inputs into outputs. Note constraints (for example, "marks are between 0 and 100").
3. **Design a solution (algorithm)**: write the step-by-step method using pseudocode or a flowchart.
4. **Code (implement)**: translate the algorithm into a programming language.
5. **Test and debug**: run the program with test data, find errors and fix them.
6. **Document and maintain**: write comments, user guides and technical notes; update the program as needs change.

The **IPO model** (Input, Process, Output) is a quick way to analyse any problem. For "compute the area of a rectangle": Input = length and width; Process = area = length × width; Output = area.

### What is an algorithm?
An **algorithm** is a finite, ordered set of well-defined instructions for solving a problem. The word comes from the Persian mathematician **al-Khwarizmi**. A good algorithm has these properties:
- **Finiteness**: it must stop after a finite number of steps.
- **Definiteness**: each step is precise and unambiguous.
- **Input**: zero or more inputs.
- **Output**: at least one output.
- **Effectiveness**: each step is basic enough to be carried out exactly.

### Pseudocode
**Pseudocode** is an informal, English-like description of an algorithm. It has no strict syntax and cannot be executed by a computer. It uses keywords such as START, INPUT/READ, OUTPUT/PRINT, IF ... THEN ... ELSE, WHILE, FOR and STOP.
~~~
START
  READ score
  IF score >= 40 THEN
     PRINT "Pass"
  ELSE
     PRINT "Fail"
  ENDIF
STOP
~~~

### Flowcharts
A **flowchart** is a diagram of an algorithm using standard symbols joined by arrows (flow lines).
| Symbol | Shape | Use |
|---|---|---|
| Terminal | Oval / rounded rectangle | Start and Stop |
| Input/Output | Parallelogram | Read input or display output |
| Process | Rectangle | Calculation or assignment |
| Decision | Diamond | A yes/no (true/false) question; has two exits |
| Flow line | Arrow | Direction of flow |
| Connector | Small circle | Joins parts of a chart on the same page |
| Off-page connector | Pentagon (home-plate shape) | Continues the chart on another page |
| Predefined process | Rectangle with double side lines | Calls a subroutine/function |

> **Exam tip:** Diamond = decision, parallelogram = input/output, rectangle = process, oval = terminal. This is one of the most frequently tested facts.

### Other design tools
- **Decision table**: a table listing conditions and the action to take for each combination.
- **Structure chart / hierarchy chart**: shows how a program is broken into modules (top-down design).
- **Top-down design (stepwise refinement)**: break a big problem into smaller sub-problems until each is easy to code.
- **Bottom-up design**: build small components first and combine them.

## 2. Programming languages and translators
### Generations and levels
| Level | Example | Notes |
|---|---|---|
| Machine language (1GL) | 10110000 01100001 | Binary; understood directly by the CPU; machine-dependent; fastest; hardest to write |
| Assembly language (2GL) | MOV AL, 61h | Uses mnemonics; converted by an **assembler**; still machine-dependent |
| High-level languages (3GL) | Python, C, C++, Java, Pascal, FORTRAN, COBOL, BASIC | English-like; portable; need a compiler or interpreter |
| 4GL | SQL, report generators | Closer to human language; say *what* not *how* |
| 5GL | Prolog, Mercury | Constraint/logic based; used in AI |

**Low-level** languages (machine and assembly) are close to the hardware. **High-level** languages are close to human language, easier to learn, read and maintain, and portable across machines.

### Translators
A computer only executes machine code, so source code must be translated.
- **Compiler**: translates the *whole* source program into object code (machine code) at once before execution. Errors are reported together after compilation. The compiled program runs fast and can run without the compiler. Examples: C, C++, Pascal, FORTRAN.
- **Interpreter**: translates and executes the program *line by line*. It stops at the first error. Slower execution, easier debugging. Examples: Python, BASIC, JavaScript (traditionally).
- **Assembler**: translates assembly language into machine code.

Other terms:
- **Source code**: the program as written by the programmer.
- **Object code**: the machine-code output of a compiler.
- **Linker**: combines object files and libraries into one executable.
- **Loader**: places the executable into memory for running.
- **IDE (Integrated Development Environment)**: editor + translator + debugger in one tool (IDLE, VS Code, PyCharm, Code::Blocks).

### Programming paradigms
- **Procedural/imperative**: program is a sequence of instructions grouped into procedures (C, Pascal, FORTRAN).
- **Object-oriented (OOP)**: program is built from objects that combine data (attributes) and behaviour (methods). Key ideas: class, object, encapsulation, inheritance, polymorphism, abstraction (Java, C++, Python).
- **Functional**: computation as evaluation of functions without changing state (Haskell, Lisp).
- **Logic/declarative**: state facts and rules; the system finds answers (Prolog, SQL).
- **Event-driven**: code runs in response to events such as clicks (Visual Basic, JavaScript in browsers).

### Types of programming errors
| Error | Meaning | Example | When detected |
|---|---|---|---|
| Syntax error | Breaks the grammar rules of the language | Missing colon, misspelt keyword, unmatched bracket | At compile/translation time |
| Runtime error | Program crashes while running | Division by zero, opening a missing file | During execution |
| Logic (semantic) error | Program runs but gives wrong results | Using + instead of −, wrong condition | Only by testing |

**Debugging** is the process of finding and removing errors (bugs). Testing types: **unit testing** (one module), **integration testing** (modules together), **system testing**, **acceptance testing** (by users). **Dry running / desk checking** means tracing code by hand with a **trace table**.

## 3. Data types, variables, constants and operators
### Variables and identifiers
A **variable** is a named memory location whose value can change during execution. A **constant** holds a value that does not change (for example PI = 3.14159). An **identifier** is the name given to a variable, function or other item.

Identifier rules (Python and most languages):
- Must start with a letter or underscore (_), not a digit.
- May contain letters, digits and underscores only; no spaces or symbols like - or @.
- Must not be a reserved **keyword** (if, else, while, for, def, return, True, class, import ...).
- Python is **case-sensitive**: Total, total and TOTAL are three different names.

Valid: total_score, _count, mark2. Invalid: 2mark (starts with digit), total score (space), class (keyword), my-name (hyphen).

### Basic data types
| Type | Python name | Examples |
|---|---|---|
| Integer | int | 0, 25, -7 |
| Floating point / real | float | 3.14, -0.5, 2.0 |
| String (text) | str | "NOUN", 'abc' |
| Boolean | bool | True, False |
| Character | (a string of length 1 in Python; char in C/Java) | 'A' |

Python is **dynamically typed**: a variable's type is decided by the value assigned. C and Java are **statically typed**: you declare the type (int x;). Use type() to check a value's type.

**Type conversion (casting)**: int("25") gives 25; float(3) gives 3.0; str(10) gives "10"; int(7.9) gives 7 (it truncates, it does not round).

### Input and output
~~~
name = input("Enter your name: ")     # input() always returns a string
age = int(input("Enter age: "))       # convert to int for arithmetic
print("Hello", name)                  # prints: Hello Ada
print("Next year you will be", age + 1)
~~~

### Operators
**Arithmetic operators** (Python):
| Operator | Meaning | Example | Result |
|---|---|---|---|
| + | Addition | 7 + 2 | 9 |
| - | Subtraction | 7 - 2 | 5 |
| * | Multiplication | 7 * 2 | 14 |
| / | True division | 7 / 2 | 3.5 |
| // | Floor (integer) division | 7 // 2 | 3 |
| % | Modulus (remainder) | 7 % 2 | 1 |
| ** | Exponent (power) | 2 ** 3 | 8 |

**Relational (comparison) operators** return True or False: == (equal to), != (not equal), >, <, >=, <=. Do not confuse = (assignment) with == (comparison).

**Logical operators**: and (true only if both are true), or (true if at least one is true), not (reverses the value).
| A | B | A and B | A or B | not A |
|---|---|---|---|---|
| True | True | True | True | False |
| True | False | False | True | False |
| False | True | False | True | True |
| False | False | False | False | True |

**Assignment operators**: = assigns; x += 3 means x = x + 3; also -=, /= and the multiply-assign (star then =).

### Operator precedence
From highest to lowest in Python:
1. Parentheses ( )
2. Exponent (the double-star operator), which groups right to left
3. Unary minus
4. Multiplication, /, // and % (left to right)
5. Addition and subtraction (left to right)
6. Comparisons, then not, then and, then or

This is often remembered as **BODMAS/PEMDAS**. Worked examples:
~~~
2 + 3 * 4 ** 2   ->  2 + 3 * 16  ->  2 + 48  ->  50
(2 + 3) * 4      ->  5 * 4                   ->  20
10 - 4 / 2       ->  10 - 2.0                ->  8.0   (/ always gives a float in Python 3)
2 ** 3 ** 2      ->  2 ** 9                  ->  512   (exponent groups right to left)
~~~

> **Exam tip:** 17 % 5 = 2, 17 // 5 = 3, -7 // 2 = -4 (floor rounds down towards negative infinity). Expect at least one question on % and //.

## 4. Control structures
Every program can be written with three basic control structures (the **structured programming theorem**, Böhm and Jacopini):
1. **Sequence**: statements run one after another in order.
2. **Selection (decision/branching)**: choose a path based on a condition.
3. **Iteration (repetition/looping)**: repeat statements while a condition holds.

### Selection
~~~
score = 65
if score >= 70:
    grade = "A"
elif score >= 60:
    grade = "B"
elif score >= 50:
    grade = "C"
else:
    grade = "F"
print(grade)        # prints B
~~~
- **if**: one-way selection (do something or nothing).
- **if-else**: two-way selection.
- **if-elif-else / nested if**: multi-way selection. Conditions are checked from top to bottom; only the first true branch runs.
- **switch/case** (C, Java) selects among many fixed values. Python 3.10+ has match-case.

Python uses **indentation** (normally 4 spaces) to mark blocks; C and Java use curly braces { }. Wrong indentation in Python gives an IndentationError.

### Iteration (loops)
**for loop**: a counter-controlled (definite) loop, used when the number of repetitions is known.
~~~
total = 0
for i in range(1, 6):     # i = 1, 2, 3, 4, 5
    total = total + i
print(total)              # 15
~~~
range(start, stop, step) produces numbers from start up to but **not including** stop. range(5) gives 0,1,2,3,4. range(2, 10, 3) gives 2, 5, 8. range(5, 0, -1) gives 5,4,3,2,1.

**while loop**: a condition-controlled (indefinite) loop; tests the condition *before* each pass, so the body may run zero times.
~~~
n = 1
while n <= 100:
    n = n * 2
print(n)      # 128
~~~

**do-while** (C, Java): tests the condition *after* the body, so the body always runs **at least once**. Python has no do-while.

Loop control:
- **break** exits the loop immediately.
- **continue** skips the rest of the current pass and moves to the next one.
- An **infinite loop** never ends because its condition never becomes false (for example, forgetting to update the counter).
- A **sentinel value** is a special input that signals the end of data (for example, enter -1 to stop).
- A **nested loop** is a loop inside another loop. With an outer loop of 3 passes and an inner loop of 4, the inner body runs 3 × 4 = 12 times.

### Trace table example
Trace this code:
~~~
x = 0
for k in range(3):
    x = x + k * 2
print(x)
~~~
| k | k * 2 | x |
|---|---|---|
| start | – | 0 |
| 0 | 0 | 0 |
| 1 | 2 | 2 |
| 2 | 4 | 6 |
Output: **6**.

## 5. Functions, lists and strings
### Functions (subprograms)
A **function** is a named, reusable block of code that performs a task. Other names: subroutine, procedure, method (when it belongs to an object). Benefits: reuse, easier testing, readability, and dividing work among programmers (**modularity**).
~~~
def area(length, width):      # length and width are PARAMETERS
    return length * width

a = area(5, 3)                # 5 and 3 are ARGUMENTS
print(a)                      # 15
~~~
- **def** defines a function in Python.
- **Parameters** (formal parameters) are the names in the function definition. **Arguments** (actual parameters) are the values passed in the call.
- **return** sends a value back to the caller and ends the function. A function without return gives None.
- **Built-in functions**: print(), input(), len(), int(), float(), str(), type(), range(), abs(), max(), min(), round(), sum().
- **User-defined functions** are written by the programmer.
- **Scope**: a **local variable** exists only inside its function; a **global variable** is defined outside all functions and can be read anywhere.
- **Recursion**: a function that calls itself. It must have a **base case** to stop.
~~~
def factorial(n):
    if n == 0:          # base case
        return 1
    return n * factorial(n - 1)

print(factorial(5))     # 120
~~~
- **Pass by value**: the function gets a copy of the value. **Pass by reference**: the function gets access to the original variable.

### Lists and arrays
An **array** stores many values of the same type under one name, accessed by an **index**. Python's **list** is similar but can hold mixed types and can grow.
~~~
scores = [70, 55, 82, 49]
print(scores[0])      # 70   (indexing starts at 0)
print(scores[-1])     # 49   (negative index counts from the end)
print(len(scores))    # 4
scores.append(90)     # add to the end -> [70, 55, 82, 49, 90]
print(scores[1:3])    # [55, 82]  (slice: from index 1 up to, not including, 3)
scores.sort()         # [49, 55, 70, 82, 90]
~~~
- The first element has index **0**; the last has index **len - 1**. Accessing an index that does not exist gives an IndexError.
- A **two-dimensional array** (matrix) is an array of arrays: m[row][col].
- Other Python collections: **tuple** (like a list but immutable, written with ( )), **dictionary** (key: value pairs, written with { }), **set** (unordered, no duplicates).

### Strings
A **string** is a sequence of characters. Strings are indexed like lists and are **immutable** (you cannot change a character in place).
~~~
s = "NOUN Lagos"
print(len(s))         # 10 (the space counts)
print(s[0])           # N
print(s[5:])          # Lagos
print(s.upper())      # NOUN LAGOS
print(s.lower())      # noun lagos
print("ab" + "cd")    # abcd  (concatenation)
print("ha" * 3)       # hahaha (repetition)
print(s.find("L"))    # 5
print(s.split())      # ['NOUN', 'Lagos']
~~~

### Searching and sorting (basic algorithms)
- **Linear (sequential) search**: check each element in turn. Works on unsorted data.
- **Binary search**: repeatedly halve a **sorted** list. Much faster on large lists.
- **Bubble sort**: repeatedly swap adjacent elements that are out of order.
- **Selection sort**: repeatedly select the smallest remaining element and move it to the front.
- **Insertion sort**: build the sorted list one item at a time by inserting each into its place.

## 6. Good programming practice
- Use meaningful identifiers (total_marks, not tm).
- Add **comments** (in Python, # starts a comment; it is ignored by the interpreter). Multi-line documentation uses triple-quoted strings (docstrings).
- Indent consistently.
- Validate input (check that data is reasonable before using it).
- Test with normal, boundary (edge) and invalid data. For marks 0–100: normal 55, boundary 0 and 100, invalid -5 and 150.

## Quick revision checklist
- Six problem-solving steps; five properties of an algorithm.
- Flowchart symbols and their meaning.
- Compiler vs interpreter vs assembler; source vs object code.
- Syntax vs runtime vs logic errors.
- Identifier rules; data types; casting results such as int(7.9) = 7.
- Operators: / vs // vs %, double star for power, == vs =, and/or/not truth table, precedence.
- Sequence, selection, iteration; for vs while vs do-while; break vs continue; range() boundaries.
- Parameters vs arguments; return; local vs global; recursion and base case.
- List indexing from 0, negative indices, slicing, len(), append(); string methods.
`;
