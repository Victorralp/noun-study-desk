window.COURSES.push({
  code: "CIT215", title: "Introduction to Programming Languages", units: 3, cat: "C", source: "noun",
  modules: [
    ["Programming languages & translators", [
      "A programming language is a notation for writing instructions a computer can carry out. Machine language (binary, 0s and 1s) is the only language the computer understands directly.",
      "Low-level languages are close to the machine: machine language (first generation) and assembly language (second generation, uses mnemonics such as ADD and MOV). They are fast but machine-dependent and hard to write.",
      "High-level languages (third generation) use English-like words and are machine-independent: BASIC, FORTRAN, COBOL, Pascal, C, C++. Fourth-generation languages (4GLs) such as SQL say what is wanted rather than how.",
      "A translator converts source code into object (machine) code. An assembler translates assembly language. A compiler translates the whole high-level program at once. An interpreter translates and runs one statement at a time.",
      "Compiled programs run faster; interpreted programs are easier to debug because errors are reported line by line. FORTRAN, Pascal and C++ are normally compiled; classic BASIC is interpreted.",
      "Qualities of a good program: correctness, readability, efficiency, portability and maintainability."
    ]],
    ["Algorithms, flowcharts & structured programming", [
      "An algorithm is a finite sequence of precise steps for solving a problem. It can be written as pseudocode or drawn as a flowchart.",
      "Flowchart symbols: oval (terminal: start/stop), parallelogram (input/output), rectangle (process), diamond (decision), small circle (connector), arrows (flow lines).",
      "Structured programming builds programs from three structures only (sequence, selection, repetition) and avoids the GOTO statement. It makes programs easier to read, test and maintain.",
      "Top-down design (stepwise refinement) breaks a problem into smaller modules until each is easy to code. Each module should do one job.",
      "Steps in program development: define the problem, design the algorithm, code, compile/translate, test and debug, document, maintain."
    ]],
    ["BASIC", [
      "BASIC stands for Beginner's All-purpose Symbolic Instruction Code. It was developed in 1964 at Dartmouth College by John Kemeny and Thomas Kurtz.",
      "In classic BASIC each statement has a line number. REM marks a remark (comment). LET assigns a value. INPUT reads from the keyboard. PRINT displays output. END stops the program.",
      "String variable names end with a dollar sign, e.g. N$. READ takes values from DATA statements.",
      "Selection uses IF ... THEN ... ELSE. Loops use FOR ... TO ... STEP ... NEXT, and WHILE ... WEND. GOTO jumps to a line number; GOSUB ... RETURN calls a subroutine.",
      "DIM declares an array, e.g. DIM A(10). Arithmetic operators: + - * / and ^ for power. Versions include GW-BASIC, QBASIC and Visual Basic."
    ]],
    ["FORTRAN & Pascal", [
      "FORTRAN stands for FORmula TRANslation. It was developed at IBM by John Backus in the 1950s and is the oldest high-level language, used for scientific and engineering work.",
      "FORTRAN basics: by default, variable names starting with I to N are integers and the rest are real. READ and WRITE (or PRINT) do input and output; FORMAT describes layout. The DO loop repeats; IF handles selection. ** is the power operator. Programs end with STOP and END.",
      "Library (intrinsic) functions in FORTRAN include SQRT, ABS, SIN, COS, EXP and LOG.",
      "Pascal was designed by Niklaus Wirth around 1970 to teach structured programming and is named after Blaise Pascal.",
      "Pascal structure: PROGRAM heading; declarations (CONST, VAR); then the body between BEGIN and END followed by a full stop. Assignment uses := and statements are separated by semicolons.",
      "Pascal I/O uses READ, READLN, WRITE and WRITELN. Loops: FOR ... DO, WHILE ... DO and REPEAT ... UNTIL (which runs at least once). Selection: IF ... THEN ... ELSE and CASE."
    ]],
    ["C++, HTML, Visual Basic & maths tools", [
      "C++ was developed by Bjarne Stroustrup at Bell Labs as an extension of C with classes. It supports object-oriented programming. Every program has a main() function; statements end with a semicolon.",
      "C++ I/O: cout << sends output, cin >> reads input, both from the iostream header included with #include. Comments start with // or sit between /* and */.",
      "HTML (HyperText Markup Language) describes web pages with tags in angle brackets. It is a markup language, not a programming language. Pages are saved as .html or .htm and displayed by a browser.",
      "Key HTML tags: <html>, <head>, <title>, <body>, <h1> to <h6> headings, <p> paragraph, <br> line break, <b> bold, <i> italic, <a href> hyperlink, <img> image, <ul>/<ol>/<li> lists.",
      "Visual Basic is Microsoft's event-driven language with a graphical interface builder: you draw controls (buttons, text boxes, labels) on a form and write code for events such as Click.",
      "MATLAB (MATrix LABoratory) and Mathcad are tools for numerical computation; MATLAB's basic data element is the matrix."
    ]]
  ],
  cards: [
    ["Machine language", "Binary code; the only language the computer understands directly. First generation."],
    ["Assembly language", "Low-level language using mnemonics; translated by an assembler."],
    ["Compiler", "Translates a whole high-level program into object code at once."],
    ["Interpreter", "Translates and executes one statement at a time."],
    ["Source code vs object code", "Source: what the programmer writes. Object: machine code the translator produces."],
    ["Structured programming", "Programming with sequence, selection and repetition only, avoiding GOTO."],
    ["Top-down design", "Breaking a problem into smaller modules step by step."],
    ["BASIC stands for", "Beginner's All-purpose Symbolic Instruction Code."],
    ["BASIC inventors", "John Kemeny and Thomas Kurtz, Dartmouth College, 1964."],
    ["REM in BASIC", "A remark (comment), ignored when the program runs."],
    ["FORTRAN stands for", "FORmula TRANslation. Oldest high-level language; scientific use."],
    ["FORTRAN implicit typing", "Names starting I to N are integer; others real."],
    ["Pascal designer", "Niklaus Wirth; built to teach structured programming."],
    ["Pascal assignment operator", ":="],
    ["REPEAT ... UNTIL", "Pascal loop that tests at the end, so it runs at least once."],
    ["C++ developer", "Bjarne Stroustrup, Bell Labs."],
    ["HTML", "HyperText Markup Language: tags that describe a web page."],
    ["Visual Basic", "Microsoft's event-driven language with a drag-and-drop form designer."]
  ],
  mcq: [
    [0, "The only language a computer understands directly is", ["Assembly language", "Machine language", "BASIC", "Pascal"], 1],
    [0, "Assembly language is translated by", ["A compiler", "An interpreter", "An assembler", "A loader"], 2],
    [0, "A translator that converts the whole program at once is", ["A compiler", "An interpreter", "An editor", "A linker"], 0],
    [0, "A translator that executes one statement at a time is", ["A compiler", "An assembler", "A debugger", "An interpreter"], 3],
    [0, "Which of these is a low-level language?", ["FORTRAN", "Assembly language", "Pascal", "C++"], 1],
    [0, "The program written by the programmer is called", ["Object code", "Machine code", "Source code", "Executable"], 2],
    [0, "SQL is an example of a", ["Fourth-generation language", "First-generation language", "Machine language", "Assembly language"], 0],
    [1, "Structured programming discourages the use of", ["Loops", "Selection", "Modules", "GOTO"], 3],
    [1, "In a flowchart, the start and stop points are drawn with", ["A diamond", "An oval", "A rectangle", "A parallelogram"], 1],
    [1, "Breaking a problem into smaller modules is called", ["Bottom-up coding", "Debugging", "Top-down design", "Interpretation"], 2],
    [1, "Which comes first in program development?", ["Problem definition", "Coding", "Testing", "Documentation"], 0],
    [1, "A processing step in a flowchart is drawn with", ["A diamond", "An oval", "A circle", "A rectangle"], 3],
    [2, "BASIC was developed at", ["IBM", "Dartmouth College", "Bell Labs", "Microsoft"], 1],
    [2, "In BASIC, a comment line begins with", ["PRINT", "LET", "REM", "DIM"], 2],
    [2, "In BASIC, a string variable name ends with", ["$", "%", "#", "&"], 0],
    [2, "Which BASIC statement declares an array?", ["LET", "READ", "DATA", "DIM"], 3],
    [2, "Which BASIC statement displays output on screen?", ["INPUT", "PRINT", "REM", "GOSUB"], 1],
    [2, "A FOR loop in BASIC is closed with", ["WEND", "END", "NEXT", "RETURN"], 2],
    [3, "FORTRAN stands for", ["Formula Translation", "Format Transfer", "Formal Transaction", "Forward Translation"], 0],
    [3, "FORTRAN is mainly used for", ["Web pages", "Business payroll", "Games", "Scientific and engineering computation"], 3],
    [3, "By default in FORTRAN, a variable named KOUNT is", ["Real", "Integer", "Character", "Logical"], 1],
    [3, "The power operator in FORTRAN is", ["^", "*", "**", "//"], 2],
    [3, "Pascal was designed by", ["Niklaus Wirth", "John Backus", "Dennis Ritchie", "Bjarne Stroustrup"], 0],
    [3, "The assignment operator in Pascal is", ["=", "==", "<-", ":="], 3],
    [3, "Which Pascal loop always runs at least once?", ["FOR ... DO", "REPEAT ... UNTIL", "WHILE ... DO", "CASE"], 1],
    [3, "A Pascal program body is enclosed between", ["START and STOP", "{ and }", "BEGIN and END", "DO and LOOP"], 2],
    [4, "C++ was developed by", ["Bjarne Stroustrup", "Niklaus Wirth", "John Kemeny", "Tim Berners-Lee"], 0],
    [4, "In C++, output is sent to the screen with", ["cin", "print", "write", "cout"], 3],
    [4, "HTML stands for", ["High Text Machine Language", "HyperText Markup Language", "Hyperlink Text Mode Language", "Home Tool Markup Language"], 1],
    [4, "Which HTML tag creates a hyperlink?", ["<p>", "<br>", "<a>", "<img>"], 2],
    [4, "Which HTML tag gives the largest heading?", ["<h1>", "<h6>", "<head>", "<title>"], 0],
    [4, "Visual Basic is described as", ["A markup language", "A machine language", "An assembly language", "An event-driven language"], 3],
    [4, "MATLAB stands for", ["Mathematics Laboratory", "Matrix Laboratory", "Machine Translation Lab", "Material Laboratory"], 1],
    [4, "Every C++ program must have a function called", ["start()", "begin()", "main()", "run()"], 2],
    [0, "Machine language is written in", ["English words", "Binary digits", "Mnemonics", "Decimal only"], 1],
    [0, "Machine and assembly languages are called", ["High-level languages", "Fourth-generation languages", "Low-level languages", "Markup languages"], 2],
    [0, "The output of a compiler is called", ["Object code", "Source code", "Pseudocode", "A flowchart"], 0],
    [0, "Which of these is a high-level language?", ["Machine code", "Assembly", "Binary", "Pascal"], 3],
    [0, "A program written in a high-level language that runs on many machines is said to be", ["Fast", "Portable", "Binary", "Hardwired"], 1],
    [0, "First-generation languages are", ["Assembly languages", "High-level languages", "Machine languages", "Query languages"], 2],
    [0, "Second-generation languages are", ["Assembly languages", "Machine languages", "Natural languages", "Query languages"], 0],
    [0, "Which is an advantage of machine language?", ["Easy to read", "Portable", "Easy to debug", "Runs fast with no translation"], 3],
    [0, "Which translator reports errors one line at a time as it runs?", ["Compiler", "Interpreter", "Assembler", "Linker"], 1],
    [0, "A program that joins object modules into one executable is a", ["Loader", "Editor", "Linker", "Debugger"], 2],
    [0, "The rules that govern how statements are written in a language are its", ["Syntax", "Semantics", "Logic", "Runtime"], 0],
    [0, "COBOL was designed mainly for", ["Scientific computing", "Games", "Web pages", "Business data processing"], 3],
    [1, "An algorithm is", ["A programming language", "A step-by-step method for solving a problem", "A type of compiler", "A hardware device"], 1],
    [1, "The flowchart symbol for input or output is the", ["Rectangle", "Diamond", "Parallelogram", "Oval"], 2],
    [1, "An English-like description of an algorithm is", ["Pseudocode", "Machine code", "Object code", "Bytecode"], 0],
    [1, "Repeating a group of statements is called", ["Sequence", "Selection", "Declaration", "Iteration"], 3],
    [1, "Choosing between two paths based on a condition is", ["Sequence", "Selection", "Iteration", "Compilation"], 1],
    [1, "Running a program with sample data to find errors is", ["Coding", "Documentation", "Testing", "Analysis"], 2],
    [1, "Written descriptions that explain a program to users and programmers are", ["Documentation", "Compilation", "Translation", "Execution"], 0],
    [1, "An error in the logic of a program is commonly called a", ["Patch", "Virus", "Loop", "Bug"], 3],
    [1, "Which is the correct order of program development?", ["Coding, analysis, testing, design", "Analysis, design, coding, testing", "Testing, coding, design, analysis", "Design, testing, analysis, coding"], 1],
    [1, "A benefit of modular (structured) programming is that programs are", ["Longer", "Slower", "Easier to read and maintain", "Impossible to test"], 2],
    [2, "BASIC stands for Beginner's All-purpose Symbolic", ["Instruction Code", "Internal Compiler", "Interface Command", "Integer Calculation"], 0],
    [2, "BASIC was first released in", ["1946", "1957", "1972", "1964"], 3],
    [2, "Which BASIC statement assigns a value to a variable?", ["PRINT", "LET", "REM", "END"], 1],
    [2, "Which BASIC statement transfers control unconditionally to another line?", ["IF", "FOR", "GOTO", "DIM"], 2],
    [2, "In BASIC, data listed in DATA statements is fetched with", ["READ", "INPUT", "PRINT", "LET"], 0],
    [2, "The last statement of a BASIC program is usually", ["REM", "DIM", "LET", "END"], 3],
    [2, "Which BASIC statement jumps to a subroutine?", ["GOTO", "GOSUB", "NEXT", "STOP"], 1],
    [2, "A BASIC subroutine ends with", ["END", "NEXT", "RETURN", "STOP"], 2],
    [2, "In BASIC, 2 ^ 3 gives", ["8", "6", "5", "9"], 0],
    [2, "In classic BASIC, each program line begins with a", ["Semicolon", "Colon", "Bracket", "Line number"], 3],
    [2, "Which BASIC statement makes a decision?", ["FOR...NEXT", "IF...THEN", "DIM", "REM"], 1],
    [3, "FORTRAN was first released in", ["1964", "1972", "1957", "1983"], 2],
    [3, "By default in FORTRAN, variable names beginning with I to N are", ["Integer", "Real", "Character", "Logical"], 0],
    [3, "By default in FORTRAN, a variable named X is", ["Integer", "Character", "Logical", "Real"], 3],
    [3, "The FORTRAN loop statement is", ["FOR", "DO", "WHILE", "REPEAT"], 1],
    [3, "Which FORTRAN statement reads input?", ["WRITE", "PRINT", "READ", "FORMAT"], 2],
    [3, "The FORTRAN relational operator .GT. means", ["Greater than", "Less than", "Equal to", "Not equal to"], 0],
    [3, "The FORTRAN relational operator .EQ. means", ["Greater than", "Less than", "Not equal to", "Equal to"], 3],
    [3, "Pascal was named after", ["Niklaus Wirth", "Blaise Pascal", "John Backus", "Charles Babbage"], 1],
    [3, "In Pascal, variables are declared in the section that begins with", ["BEGIN", "CONST", "VAR", "TYPE"], 2],
    [3, "A Pascal program ends with END followed by a", ["Full stop", "Semicolon", "Colon", "Comma"], 0],
    [3, "Pascal statements are separated by a", ["Comma", "Colon", "Full stop", "Semicolon"], 3],
    [3, "Which Pascal statement reads input from the keyboard?", ["WRITELN", "READLN", "BEGIN", "VAR"], 1],
    [3, "The first line of a Pascal program starts with the word", ["BEGIN", "VAR", "PROGRAM", "START"], 2],
    [4, "C++ is an extension of the language", ["C", "Pascal", "BASIC", "FORTRAN"], 0],
    [4, "C++ supports which programming style that C lacks?", ["Machine coding", "Assembly", "Markup", "Object-oriented programming"], 3],
    [4, "In C++, a single-line comment begins with", ["#", "//", "REM", "--"], 1],
    [4, "Each C++ statement ends with a", ["Full stop", "Colon", "Semicolon", "Comma"], 2],
    [4, "HTML is a", ["Markup language", "Compiled programming language", "Database", "Operating system"], 0],
  ],
  fib: [
    [0, "A ____ translates a whole high-level program into machine code at once.", ["compiler"]],
    [0, "Assembly language uses short words called ____ in place of binary codes.", ["mnemonics", "mnemonic"]],
    [1, "The flowchart symbol for a decision is the ____.", ["diamond"]],
    [1, "Structured programming uses sequence, selection and ____.", ["repetition", "iteration", "looping"]],
    [2, "In BASIC, the ____ statement reads a value typed at the keyboard.", ["input"]],
    [2, "BASIC was developed by Kemeny and ____.", ["kurtz"]],
    [3, "FORTRAN was developed at IBM by John ____.", ["backus"]],
    [3, "Pascal output is written with WRITE or ____.", ["writeln"]],
    [4, "In C++, input is read from the keyboard with ____.", ["cin"]],
    [4, "HTML documents are displayed by a web ____.", ["browser"]],
    [0, "A program that translates assembly language into machine code is an ____.", ["assembler"]],
    [1, "An English-like way of writing an algorithm is called ____.", ["pseudocode", "pseudo code", "pseudo-code"]],
    [2, "In BASIC, a remark or comment line begins with ____.", ["rem"]],
    [3, "FORTRAN stands for Formula ____.", ["translation", "translator"]],
    [4, "C++ was developed by Bjarne ____.", ["stroustrup"]]
  ]
});
window.GUIDES = window.GUIDES || {};
GUIDES.CIT215 = `
## What this course tests

A tour of programming languages: what they are, how they are translated, and the basic keywords of BASIC, FORTRAN, Pascal, C++, HTML and Visual Basic. Expect "who developed", "what does it stand for" and "which keyword does X".

## 1. Language levels

| Generation | Language | Notes |
|---|---|---|
| 1st | Machine language | Binary, runs directly |
| 2nd | Assembly | Mnemonics, needs assembler |
| 3rd | High-level (BASIC, FORTRAN, Pascal, C++) | English-like, portable |
| 4th | 4GL (SQL) | Say what, not how |

## 2. Translators

| Translator | Input | How it works |
|---|---|---|
| Assembler | Assembly language | One-to-one to machine code |
| Compiler | High-level | Whole program at once; fast to run |
| Interpreter | High-level | Line by line; easy to debug |

> Source code goes in, object code comes out.

## 3. Structured programming

- Only three structures: sequence, selection, repetition.
- Avoid GOTO.
- Top-down design: split the problem into modules.

## 4. Who made what

| Language | Meaning / origin | Developer |
|---|---|---|
| FORTRAN | Formula Translation | John Backus, IBM |
| BASIC | Beginner's All-purpose Symbolic Instruction Code | Kemeny and Kurtz, Dartmouth |
| Pascal | Named after Blaise Pascal | Niklaus Wirth |
| C++ | C with classes | Bjarne Stroustrup, Bell Labs |
| Visual Basic | Event-driven BASIC | Microsoft |

## 5. Keywords side by side

| Task | BASIC | FORTRAN | Pascal | C++ |
|---|---|---|---|---|
| Input | INPUT | READ | READLN | cin >> |
| Output | PRINT | WRITE / PRINT | WRITELN | cout << |
| Assign | LET A = 5 | A = 5 | A := 5 | a = 5; |
| Count loop | FOR ... NEXT | DO | FOR ... DO | for |
| Comment | REM | C or ! | { } | // |
| Power | ^ | ** | none (use functions) | pow() |

### BASIC example

~~~
10 REM Area of a rectangle
20 INPUT L, W
30 LET A = L * W
40 PRINT "AREA ="; A
50 END
~~~

### Pascal example

~~~
PROGRAM Area;
VAR L, W, A : REAL;
BEGIN
  READLN(L, W);
  A := L * W;
  WRITELN('AREA = ', A)
END.
~~~

## 6. HTML

HTML is a **markup** language: tags describe the page, the browser displays it.

| Tag | Use |
|---|---|
| html, head, title, body | Page skeleton |
| h1 to h6 | Headings (h1 largest) |
| p, br | Paragraph, line break |
| b, i | Bold, italic |
| a href | Hyperlink |
| img | Image |
| ul, ol, li | Lists |

## Exam tips

- FORTRAN: names starting I to N are integers.
- Pascal: := assigns, program ends with END and a full stop.
- REPEAT ... UNTIL runs at least once.
- HTML is not a programming language.
`;
