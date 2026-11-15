window.COURSES.push({
  code: "CIT217", title: "Foundations of Sequential Programs", units: 2, cat: "C", source: "noun",
  modules: [
    ["Evolution & principles of programming languages", [
      "A programming language is a set of rules (syntax) and meanings (semantics) used to write instructions for a computer.",
      "Generations: first (machine language, binary), second (assembly language, mnemonics), third (high-level languages such as FORTRAN, COBOL, C, Pascal), fourth (query and report languages such as SQL) and fifth (languages for artificial intelligence such as Prolog).",
      "Milestones: FORTRAN (1957, John Backus, scientific work), LISP (1958, John McCarthy, artificial intelligence), COBOL (1959, business), ALGOL 60 (introduced block structure), Pascal (1970, Niklaus Wirth, teaching), C (1972, Dennis Ritchie), C++ (Bjarne Stroustrup), Java (1995, James Gosling at Sun).",
      "Paradigms: imperative or procedural (step-by-step commands, e.g. C, Pascal), functional (e.g. LISP), logic (e.g. Prolog) and object-oriented (e.g. C++, Java).",
      "Qualities of a good language: readability, writability, reliability, portability and efficiency. Orthogonality means a small set of features can be combined freely in a consistent way.",
      "A sequential program executes its instructions one after another, one at a time, in the order given."
    ]],
    ["Machine architecture & machine instructions", [
      "The von Neumann (stored-program) architecture keeps both program and data in the same memory. Its parts are the CPU, memory, input and output.",
      "The CPU has an arithmetic and logic unit (ALU), a control unit (CU) and registers. Registers are small, very fast storage locations inside the CPU.",
      "Key registers: program counter (PC) holds the address of the next instruction; instruction register (IR) holds the instruction being executed; memory address register (MAR) holds the address being accessed; memory data register (MDR) holds the data read or to be written; the accumulator holds results.",
      "The machine cycle is fetch, decode, execute. Buses carry signals: the address bus, data bus and control bus.",
      "A machine instruction has an opcode (what to do) and operands (what to do it on). Instruction types: data transfer (load, store, move), arithmetic and logic (add, AND), and control (jump, branch, call).",
      "Addressing modes: immediate (the operand is the value itself), direct (the operand is the address of the value), indirect (the operand is the address of the address) and indexed. RISC machines use few simple instructions; CISC machines use many complex ones."
    ]],
    ["Data representation & storage", [
      "Computers store everything in binary. A bit is a single 0 or 1; a nibble is 4 bits; a byte is 8 bits; a word is the number of bits the CPU handles at once.",
      "Number bases: binary (base 2), octal (base 8), decimal (base 10) and hexadecimal (base 16, digits 0-9 and A-F). One hex digit stands for 4 bits; one octal digit for 3 bits.",
      "Examples: 1011 in binary = 11 in decimal; 25 in decimal = 11001 in binary; 2A in hex = 42 in decimal; F in hex = 15.",
      "Negative integers are stored in sign-and-magnitude, one's complement or two's complement. Two's complement = invert all bits then add 1. An 8-bit two's complement number ranges from -128 to +127.",
      "Real numbers are stored in floating-point form with a sign, a mantissa and an exponent.",
      "Characters are stored as codes: ASCII (7 bits, 128 characters; 'A' = 65), EBCDIC (8 bits, IBM mainframes) and Unicode (covers all world languages). 1 kilobyte = 1024 bytes."
    ]],
    ["Operations on data", [
      "Arithmetic operations: addition, subtraction, multiplication, division. Binary addition rules: 0+0=0, 0+1=1, 1+1=10 (0 carry 1), 1+1+1=11.",
      "Subtraction is done by adding the two's complement of the number to be subtracted.",
      "Logical operations work bit by bit: AND gives 1 only if both bits are 1; OR gives 1 if at least one bit is 1; XOR gives 1 if the bits differ; NOT inverts the bit.",
      "Shift operations: a left shift by one place multiplies by 2; a right shift by one place divides by 2.",
      "Relational operations (equal, less than, greater than) compare two values and give true or false.",
      "Overflow occurs when a result is too large to fit in the number of bits available."
    ]],
    ["Language specification, translation & block structure", [
      "Syntax is the form (grammar) of a language; semantics is the meaning. Syntax is formally described with Backus-Naur Form (BNF) or syntax diagrams.",
      "Translators: an assembler translates assembly language; a compiler translates a whole high-level program into object code; an interpreter translates and executes one statement at a time.",
      "Phases of a compiler: lexical analysis (breaks source into tokens), syntax analysis or parsing (checks grammar, builds a parse tree), semantic analysis (checks meaning such as types), intermediate code generation, code optimisation and code generation. The symbol table stores information about identifiers.",
      "A linker joins object modules into one executable; a loader places the executable into memory.",
      "A block is a group of declarations and statements treated as a unit (BEGIN...END or braces). ALGOL 60 was the first block-structured language; Pascal and C followed.",
      "Scope is the part of the program where a name can be used. A local variable is declared inside a block and exists only there; a global variable is visible throughout. Each call of a block or procedure gets an activation record on the run-time stack. Parameters are passed by value (a copy) or by reference (the address)."
    ]]
  ],
  cards: [
    ["Syntax vs semantics", "Syntax: grammar or form. Semantics: meaning."],
    ["First-generation language", "Machine language: binary, runs directly."],
    ["Second-generation language", "Assembly language: mnemonics, needs an assembler."],
    ["FORTRAN", "1957, John Backus; first widely used high-level language; scientific."],
    ["LISP", "1958, John McCarthy; functional; artificial intelligence."],
    ["Von Neumann architecture", "Program and data stored in the same memory."],
    ["Program counter", "Register holding the address of the next instruction."],
    ["Instruction register", "Register holding the instruction now being executed."],
    ["Machine cycle", "Fetch, decode, execute."],
    ["Opcode / operand", "Opcode: operation to perform. Operand: data or address it acts on."],
    ["Immediate addressing", "The operand is the actual value."],
    ["Two's complement", "Invert all bits, add 1. Used for negative integers."],
    ["ASCII", "7-bit character code; 128 characters; 'A' = 65."],
    ["AND / OR / XOR", "AND: both 1. OR: at least one 1. XOR: bits differ."],
    ["Lexical analysis", "First compiler phase; turns source text into tokens."],
    ["BNF", "Backus-Naur Form: notation for describing syntax."],
    ["Block", "Group of declarations and statements treated as one unit."],
    ["Scope", "Region of a program where a name is visible."]
  ],
  mcq: [
    [0, "The grammar rules of a programming language are its", ["Semantics", "Syntax", "Paradigm", "Scope"], 1],
    [0, "The meaning of statements in a language is its", ["Syntax", "Lexicon", "Semantics", "Format"], 2],
    [0, "First-generation languages are", ["Machine languages", "Assembly languages", "High-level languages", "Query languages"], 0],
    [0, "Assembly language belongs to which generation?", ["First", "Third", "Fourth", "Second"], 3],
    [0, "SQL is an example of a", ["Second-generation language", "Fourth-generation language", "Machine language", "Assembly language"], 1],
    [0, "FORTRAN was developed by a team led by", ["Dennis Ritchie", "Niklaus Wirth", "John Backus", "John McCarthy"], 2],
    [0, "LISP was designed by", ["John McCarthy", "John Backus", "Bjarne Stroustrup", "James Gosling"], 0],
    [0, "COBOL was designed for", ["Scientific computing", "Systems programming", "Artificial intelligence", "Business data processing"], 3],
    [0, "The C language was developed by", ["Niklaus Wirth", "Dennis Ritchie", "John Backus", "Grace Hopper"], 1],
    [0, "Pascal was designed by", ["Dennis Ritchie", "James Gosling", "Niklaus Wirth", "John McCarthy"], 2],
    [0, "Which language introduced block structure?", ["ALGOL 60", "FORTRAN", "COBOL", "BASIC"], 0],
    [0, "Prolog belongs to which paradigm?", ["Imperative", "Functional", "Object-oriented", "Logic"], 3],
    [0, "C and Pascal are examples of which paradigm?", ["Logic", "Imperative (procedural)", "Functional", "Markup"], 1],
    [0, "Java was developed at", ["IBM", "Bell Labs", "Sun Microsystems", "Microsoft"], 2],
    [0, "The ease with which programs can be read and understood is", ["Readability", "Portability", "Efficiency", "Overflow"], 0],
    [0, "The ability of a program to run on different machines is", ["Readability", "Reliability", "Orthogonality", "Portability"], 3],
    [0, "A sequential program executes instructions", ["All at the same time", "One after another in order", "In random order", "Backwards"], 1],
    [0, "FORTRAN is mainly used for", ["Business reports", "Web pages", "Scientific and engineering work", "Databases"], 2],
    [1, "In the von Neumann architecture, program and data are stored in", ["The same memory", "Separate memories", "The control bus", "The ALU"], 0],
    [1, "The part of the CPU that performs calculations is the", ["Control unit", "Program counter", "Memory", "ALU"], 3],
    [1, "The register that holds the address of the next instruction is the", ["Instruction register", "Program counter", "Accumulator", "MDR"], 1],
    [1, "The register that holds the instruction being executed is the", ["Program counter", "MAR", "Instruction register", "Accumulator"], 2],
    [1, "The correct order of the machine cycle is", ["Fetch, decode, execute", "Decode, fetch, execute", "Execute, fetch, decode", "Fetch, execute, decode"], 0],
    [1, "The part of an instruction that says what operation to perform is the", ["Operand", "Address", "Label", "Opcode"], 3],
    [1, "In immediate addressing, the operand is", ["An address", "The actual value", "A register number", "The address of an address"], 1],
    [1, "In direct addressing, the operand is", ["The value itself", "A constant", "The address of the value", "An opcode"], 2],
    [1, "The bus that carries memory addresses is the", ["Address bus", "Data bus", "Control bus", "Power bus"], 0],
    [1, "Small, very fast storage locations inside the CPU are", ["Disks", "Buses", "Caches", "Registers"], 3],
    [1, "A JUMP instruction belongs to which group?", ["Data transfer", "Control", "Arithmetic", "Logic"], 1],
    [1, "LOAD and STORE instructions belong to which group?", ["Control", "Arithmetic", "Data transfer", "Logic"], 2],
    [1, "RISC stands for", ["Reduced Instruction Set Computer", "Rapid Instruction Set Computer", "Reduced Integer Set Computer", "Random Instruction Set Computer"], 0],
    [1, "The register that holds the address of the memory location being accessed is the", ["MDR", "IR", "Accumulator", "MAR"], 3],
    [1, "The part of the CPU that directs and coordinates all operations is the", ["ALU", "Control unit", "Accumulator", "Data bus"], 1],
    [1, "Results of arithmetic operations are commonly held in the", ["Program counter", "MAR", "Accumulator", "Address bus"], 2],
    [1, "The stored-program concept is credited to", ["John von Neumann", "Charles Babbage", "Blaise Pascal", "Ada Lovelace"], 0],
    [2, "A byte is made up of", ["2 bits", "4 bits", "16 bits", "8 bits"], 3],
    [2, "A group of 4 bits is a", ["Byte", "Nibble", "Word", "Bit"], 1],
    [2, "The binary number 1011 equals which decimal number?", ["9", "13", "11", "10"], 2],
    [2, "The decimal number 25 in binary is", ["11001", "10101", "11100", "10011"], 0],
    [2, "The hexadecimal digit F equals decimal", ["10", "12", "16", "15"], 3],
    [2, "The base of the hexadecimal system is", ["8", "16", "2", "10"], 1],
    [2, "One hexadecimal digit represents how many bits?", ["2", "3", "4", "8"], 2],
    [2, "The two's complement of 0101 is", ["1011", "1010", "0110", "1101"], 0, "Invert to 1010, then add 1."],
    [2, "Standard ASCII uses how many bits per character?", ["4", "8", "16", "7"], 3],
    [2, "The ASCII code for the letter A is", ["97", "65", "48", "32"], 1],
    [2, "Which character code covers all the world's languages?", ["ASCII", "EBCDIC", "Unicode", "BCD"], 2],
    [2, "The range of an 8-bit two's complement number is", ["-128 to +127", "0 to 255", "-127 to +127", "-256 to +255"], 0],
    [2, "A floating-point number has a sign, a mantissa and", ["A nibble", "A parity bit", "An opcode", "An exponent"], 3],
    [2, "The hexadecimal number 2A equals decimal", ["32", "42", "52", "210"], 1],
    [2, "One kilobyte equals", ["1000 bits", "100 bytes", "1024 bytes", "8 bytes"], 2],
    [2, "The octal number 17 equals decimal", ["15", "17", "14", "8"], 0],
    [2, "EBCDIC is associated with", ["Apple computers", "Mobile phones", "The internet", "IBM mainframes"], 3],
    [2, "The smallest unit of data in a computer is the", ["Byte", "Bit", "Nibble", "Word"], 1],
    [3, "In binary, 1 + 1 equals", ["2", "11", "10", "1"], 2],
    [3, "1010 AND 1100 gives", ["1000", "1110", "0110", "0100"], 0],
    [3, "1010 OR 1100 gives", ["1000", "0110", "1010", "1110"], 3],
    [3, "1010 XOR 1100 gives", ["1110", "0110", "1000", "0010"], 1],
    [3, "Shifting a binary number one place to the left", ["Divides it by 2", "Adds 1", "Multiplies it by 2", "Inverts it"], 2],
    [3, "Shifting a binary number one place to the right", ["Divides it by 2", "Multiplies it by 2", "Subtracts 1", "Inverts it"], 0],
    [3, "The NOT operation", ["Adds two bits", "Compares two bits", "Shifts a bit", "Inverts a bit"], 3],
    [3, "The AND operation gives 1 when", ["Either bit is 1", "Both bits are 1", "Both bits are 0", "The bits differ"], 1],
    [3, "The XOR operation gives 1 when", ["Both bits are 1", "Both bits are 0", "The bits differ", "Either bit is 0"], 2],
    [3, "A result too large for the available bits causes", ["Overflow", "Underflow", "A page fault", "A syntax error"], 0],
    [3, "Computers usually subtract by", ["Dividing", "Shifting right", "Using XOR only", "Adding the two's complement"], 3],
    [3, "The binary sum 1011 + 0110 is", ["10000", "10001", "1111", "10011"], 1, "11 + 6 = 17."],
    [3, "A relational operation gives a result that is", ["An integer", "A character", "True or false", "A real number"], 2],
    [3, "In binary, 1 + 1 + 1 equals", ["11", "10", "111", "100"], 0],
    [4, "BNF stands for", ["Binary Number Format", "Basic Notation Form", "Block Nested Format", "Backus-Naur Form"], 3],
    [4, "BNF is used to describe a language's", ["Semantics", "Syntax", "Speed", "Memory use"], 1],
    [4, "The compiler phase that breaks source code into tokens is", ["Parsing", "Code generation", "Lexical analysis", "Optimisation"], 2],
    [4, "The compiler phase that checks grammar and builds a parse tree is", ["Syntax analysis", "Lexical analysis", "Linking", "Loading"], 0],
    [4, "Information about identifiers is kept in the", ["Parse tree", "Object file", "Activation record", "Symbol table"], 3],
    [4, "A translator that executes one statement at a time is", ["A compiler", "An interpreter", "An assembler", "A linker"], 1],
    [4, "The program that places an executable into memory is the", ["Linker", "Compiler", "Loader", "Editor"], 2],
    [4, "A variable declared inside a block is", ["Local", "Global", "Static", "External"], 0],
    [4, "A variable visible throughout the program is", ["Local", "Private", "Temporary", "Global"], 3],
    [4, "The region of a program where a name can be used is its", ["Lifetime", "Scope", "Type", "Value"], 1],
    [4, "Passing a copy of the argument to a procedure is call by", ["Reference", "Name", "Value", "Address"], 2],
    [4, "Passing the address of the argument to a procedure is call by", ["Reference", "Value", "Copy", "Result"], 0],
    [4, "Each call of a procedure creates on the stack", ["A symbol table", "A token", "A parse tree", "An activation record"], 3],
    [4, "Type checking is done during", ["Lexical analysis", "Semantic analysis", "Loading", "Linking"], 1],
    [4, "In Pascal, a block is enclosed between", ["Braces", "Brackets", "BEGIN and END", "IF and THEN"], 2],
    [4, "In C, a block is enclosed between", ["Braces", "BEGIN and END", "Quotes", "Parentheses"], 0],
    [4, "Making generated code smaller or faster is", ["Parsing", "Scanning", "Linking", "Optimisation"], 3],
    [4, "The last phase of a compiler is", ["Lexical analysis", "Code generation", "Syntax analysis", "Semantic analysis"], 1]
  ],
  fib: [
    [0, "The grammar rules of a programming language are called its ____.", ["syntax"]],
    [0, "LISP was designed by John ____.", ["mccarthy"]],
    [0, "Assembly language is a ____-generation language.", ["second", "2nd"]],
    [1, "The program ____ holds the address of the next instruction.", ["counter"]],
    [1, "The machine cycle is fetch, ____, execute.", ["decode"]],
    [1, "The part of an instruction that specifies the operation is the ____.", ["opcode", "operation code"]],
    [2, "A byte contains ____ bits.", ["8", "eight"]],
    [2, "The base of the hexadecimal number system is ____.", ["16", "sixteen"]],
    [2, "To form the two's complement, invert the bits and add ____.", ["1", "one"]],
    [3, "A left shift by one place multiplies a binary number by ____.", ["2", "two"]],
    [3, "A result too large for the available bits is called ____.", ["overflow"]],
    [3, "The ____ operation gives 1 only when both bits are 1.", ["and"]],
    [4, "BNF stands for Backus-____ Form.", ["naur"]],
    [4, "Lexical analysis breaks the source program into ____.", ["tokens", "token"]],
    [4, "A variable declared inside a block is a ____ variable.", ["local"]]
  ]
});
window.GUIDES = window.GUIDES || {};
GUIDES.CIT217 = `
## What this course tests

How a program gets from a language on paper to bits in a machine: language history and design, the machine itself, how data is stored and operated on, and how languages are specified and translated.

## 1. Languages

| Generation | What | Example |
|---|---|---|
| 1st | Machine language | Binary |
| 2nd | Assembly | Mnemonics such as ADD, MOV |
| 3rd | High-level | FORTRAN, COBOL, C, Pascal |
| 4th | Query / report | SQL |
| 5th | AI | Prolog |

| Language | Year | Person | Use |
|---|---|---|---|
| FORTRAN | 1957 | John Backus | Science |
| LISP | 1958 | John McCarthy | AI |
| COBOL | 1959 | | Business |
| Pascal | 1970 | Niklaus Wirth | Teaching |
| C | 1972 | Dennis Ritchie | Systems |
| Java | 1995 | James Gosling | General |

Paradigms: **imperative**, **functional**, **logic**, **object-oriented**.

## 2. The machine

- Von Neumann: program and data in the same memory.
- CPU = ALU + control unit + registers.
- **PC**: address of next instruction. **IR**: current instruction. **MAR**: address. **MDR**: data.
- Cycle: **fetch, decode, execute**.
- Instruction = **opcode** + **operand**.

| Addressing mode | Operand is |
|---|---|
| Immediate | The value |
| Direct | Address of the value |
| Indirect | Address of the address |

## 3. Data representation

- Bit, nibble (4), byte (8).
- One hex digit = 4 bits; one octal digit = 3 bits.

### Worked examples

- 1011 binary = 8 + 0 + 2 + 1 = 11.
- 25 decimal = 16 + 8 + 1 = 11001.
- 2A hex = 2 x 16 + 10 = 42.
- Two's complement of 0101: invert to 1010, add 1, giving 1011.

> ASCII: 7 bits, 128 characters, A = 65. Unicode covers all languages.

## 4. Operations

| A | B | AND | OR | XOR |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 |

- Left shift = multiply by 2. Right shift = divide by 2.
- Subtract by adding the two's complement.

## 5. Specification and translation

Compiler phases, in order:

1. Lexical analysis (tokens)
2. Syntax analysis (parse tree)
3. Semantic analysis (types, meaning)
4. Intermediate code
5. Optimisation
6. Code generation

- **BNF** describes syntax.
- **Block**: BEGIN...END or braces. ALGOL 60 was first.
- **Local** variable lives in its block; **global** is seen everywhere.
- Call by **value** passes a copy; call by **reference** passes the address.

## Exam tips

- PC = next instruction; IR = current instruction.
- Tokens come from lexical analysis.
- 8-bit two's complement range is -128 to +127.
`;
