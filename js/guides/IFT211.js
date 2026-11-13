window.GUIDES = window.GUIDES || {};
GUIDES.IFT211 = `
## How to use this guide
IFT211 (Digital Logic Design) is a calculation course. Exam questions ask you to convert numbers, simplify Boolean expressions, read truth tables, minimise with K-maps and identify circuits (adders, multiplexers, flip-flops, counters). Read each section, then **work every example yourself on paper**. Speed in conversion and simplification is what earns marks.

> **Notation used here:** A' means NOT A (complement, also written as A with a bar). AB or A·B means A AND B. A + B means A OR B. ⊕ means XOR.

## 1. Number systems
### Bases
| System | Base | Digits | Example |
|---|---|---|---|
| Binary | 2 | 0, 1 | 1011₂ |
| Octal | 8 | 0–7 | 357₈ |
| Decimal | 10 | 0–9 | 239₁₀ |
| Hexadecimal | 16 | 0–9, A(10) B(11) C(12) D(13) E(14) F(15) | EF₁₆ |

Each position has a **weight** = base raised to the position number (starting from 0 on the right of the point).

### Any base to decimal: multiply by weights and add
- 1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = **13**
- 357₈ = 3×64 + 5×8 + 7×1 = 192 + 40 + 7 = **239**
- 2AF₁₆ = 2×256 + 10×16 + 15×1 = 512 + 160 + 15 = **687**
- Fractions: 0.101₂ = 1×0.5 + 0×0.25 + 1×0.125 = **0.625**

### Decimal to any base: repeated division (integers), repeated multiplication (fractions)
~~~
45 to binary:            45 to octal:      45 to hex:
45 / 2 = 22 r 1          45 / 8 = 5 r 5    45 / 16 = 2 r 13 (D)
22 / 2 = 11 r 0           5 / 8 = 0 r 5     2 / 16 = 0 r 2
11 / 2 =  5 r 1          read up: 55       read up: 2D
 5 / 2 =  2 r 1
 2 / 2 =  1 r 0
 1 / 2 =  0 r 1
read remainders upward: 101101
~~~
Fraction 0.375 to binary: 0.375 × 2 = 0.75 (0); 0.75 × 2 = 1.5 (1); 0.5 × 2 = 1.0 (1). Read the integer parts **downward**: **0.011**.

### Binary ↔ octal ↔ hex shortcuts
- **Binary to octal**: group bits in **threes** from the point. 101 101₂ = **55₈**.
- **Binary to hex**: group bits in **fours**. 1010 1111₂ = **AF₁₆**.
- **Octal/hex to binary**: replace each digit with its 3-bit / 4-bit pattern. 7₈ = 111; C₁₆ = 1100.
- **Octal to hex**: go through binary.

| Dec | Bin | Oct | Hex |
|---|---|---|---|
| 0 | 0000 | 0 | 0 |
| 5 | 0101 | 5 | 5 |
| 8 | 1000 | 10 | 8 |
| 10 | 1010 | 12 | A |
| 12 | 1100 | 14 | C |
| 15 | 1111 | 17 | F |
| 16 | 1 0000 | 20 | 10 |

### Binary arithmetic
- Addition rules: 0+0 = 0; 0+1 = 1; 1+1 = 10 (0 carry 1); 1+1+1 = 11 (1 carry 1).
- Subtraction: 0−0 = 0; 1−0 = 1; 1−1 = 0; 0−1 = 1 borrow 1.
- Multiplication is shift-and-add; 1×1 = 1, otherwise 0.
~~~
  1011  (11)          1101  (13)
+ 0110  ( 6)        - 0110  ( 6)
------              ------
 10001  (17)          0111  ( 7)
~~~

### Complements and signed numbers
- **1's complement**: flip every bit. 1's complement of 0101 is 1010.
- **2's complement**: 1's complement + 1. 2's complement of 0101 is 1010 + 1 = **1011**. Shortcut: copy bits from the right up to and including the first 1, then flip the rest.
- **9's complement** (decimal): subtract each digit from 9. 9's comp of 345 = 654. **10's complement** = 9's complement + 1 = 655.
- **Signed representations** (8-bit): sign-magnitude (MSB = sign, 0 positive, 1 negative), 1's complement, 2's complement. 2's complement is used in computers because it has **one zero** and subtraction becomes addition.
- −5 in 8-bit 2's complement: +5 = 00000101 → flip = 11111010 → +1 = **11111011**.
- Range of n-bit 2's complement: −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1. For 8 bits: **−128 to +127**. Unsigned 8-bit: 0 to 255.

**Subtraction using 2's complement**: A − B = A + (2's complement of B); discard the final carry.
~~~
 9 - 5 (4-bit):   0101 -> 2's comp 1011
   1001
 + 1011
 ------
  10100  -> discard carry -> 0100 = 4
~~~
If there is **no** carry, the result is negative and in 2's complement form.

## 2. Binary codes
| Code | Description |
|---|---|
| **BCD (8421)** | Each decimal digit coded separately in 4 bits. 59 = 0101 1001. Codes 1010–1111 are invalid. |
| **Excess-3** | BCD + 3 (0011) for each digit. 5 → 1000. Self-complementing. |
| **Gray code** | Only **one bit changes** between successive values; used in encoders and K-maps. |
| **ASCII** | 7-bit character code; A = 65 (100 0001), a = 97, 0 = 48. |
| **EBCDIC** | 8-bit IBM code. |
| **Unicode** | Up to 32-bit universal code (UTF-8, UTF-16). |
| **Parity bit** | Extra bit making the number of 1s even (even parity) or odd (odd parity); detects single-bit errors. |
| **Hamming code** | Adds several parity bits to detect and **correct** single-bit errors. |

**Binary to Gray**: keep the MSB; each next Gray bit = XOR of the current and previous binary bits. 1011 → 1, 1⊕0 = 1, 0⊕1 = 1, 1⊕1 = 0 → **1110**.
**Gray to binary**: keep the MSB; each next binary bit = previous binary bit XOR current Gray bit. 1110 → 1, 1⊕1 = 0, 0⊕1 = 1, 1⊕0 = 1 → **1011**.

**BCD addition**: add normally; if a 4-bit group is greater than 9 or produces a carry, **add 6 (0110)** to correct it.

## 3. Logic gates
| Gate | Symbol / expression | Output is 1 when | 2-input truth table (00, 01, 10, 11) |
|---|---|---|---|
| **AND** | Y = AB | all inputs are 1 | 0, 0, 0, 1 |
| **OR** | Y = A + B | any input is 1 | 0, 1, 1, 1 |
| **NOT** (inverter) | Y = A' | input is 0 | (1 input) 0 → 1, 1 → 0 |
| **NAND** | Y = (AB)' | not all inputs are 1 | 1, 1, 1, 0 |
| **NOR** | Y = (A + B)' | all inputs are 0 | 1, 0, 0, 0 |
| **XOR** | Y = A ⊕ B = A'B + AB' | inputs differ (odd number of 1s) | 0, 1, 1, 0 |
| **XNOR** | Y = (A ⊕ B)' = AB + A'B' | inputs are equal | 1, 0, 0, 1 |

- **NAND and NOR are universal gates**: any logic function can be built using only NAND gates (or only NOR gates).
- NOT from NAND: tie both inputs together, Y = (AA)' = A'.
- AND from NAND: NAND followed by a NAND-inverter.
- OR from NAND: invert each input with a NAND, then NAND them: (A'B')' = A + B.
- A truth table with n inputs has **2ⁿ rows**.
- **Buffer**: output equals input (used to boost signal). **Tri-state buffer**: has an enable; output can be 0, 1 or high-impedance (Z).
- Logic families: **TTL** (transistor-transistor logic, 74xx series, 5 V) and **CMOS** (40xx/74HCxx, low power). Key terms: fan-in (number of inputs), **fan-out** (number of gate inputs one output can drive), propagation delay, noise margin, power dissipation.

## 4. Boolean algebra
### Laws and theorems
| Law | AND form | OR form |
|---|---|---|
| Identity | A·1 = A | A + 0 = A |
| Null (dominance) | A·0 = 0 | A + 1 = 1 |
| Idempotent | A·A = A | A + A = A |
| Complement | A·A' = 0 | A + A' = 1 |
| Involution | (A')' = A | |
| Commutative | AB = BA | A + B = B + A |
| Associative | (AB)C = A(BC) | (A + B) + C = A + (B + C) |
| Distributive | A(B + C) = AB + AC | A + BC = (A + B)(A + C) |
| Absorption | A(A + B) = A | A + AB = A |
| Redundancy | A + A'B = A + B | A(A' + B) = AB |
| **De Morgan** | (AB)' = A' + B' | (A + B)' = A'B' |
| Consensus | AB + A'C + BC = AB + A'C | |

> **De Morgan in words:** "break the bar, change the sign". The complement of a product is the sum of complements, and the complement of a sum is the product of complements.

**Duality principle**: swap AND ↔ OR and 0 ↔ 1 in any true identity and the result is also true.

### Worked simplifications
~~~
1)  AB + AB'      = A(B + B')        = A·1 = A
2)  A + AB        = A(1 + B)         = A
3)  AB + A'C + BC = AB + A'C          (consensus)
4)  (A + B)(A + C)= A + BC            (distributive)
5)  A'B'C + A'BC + AB'C
      = A'C(B' + B) + AB'C = A'C + AB'C
      = C(A' + AB')       = C(A' + B')   (redundancy)
      = A'C + B'C
6)  ((A + B)')'  + (AB)'  = A + B + A' + B' = 1
~~~

### Canonical forms
- **Minterm** (m): a product term containing every variable once (true or complemented); it equals 1 for exactly one input row. For row ABC = 101 the minterm is AB'C (m5).
- **Maxterm** (M): a sum term containing every variable; it equals 0 for exactly one row. For row 101 the maxterm is (A' + B + C') (M5).
- **SOP (sum of products)**: OR of minterms where output is 1. F = Σm(1, 3, 5).
- **POS (product of sums)**: AND of maxterms where output is 0. F = ΠM(0, 2, 4, 6, 7).
- Σm and ΠM of the same function use **complementary** index lists.
- SOP circuits are naturally built with **AND–OR** (or NAND–NAND); POS with **OR–AND** (or NOR–NOR).

## 5. Karnaugh maps (K-maps)
A K-map is a grid of 2ⁿ cells, ordered in **Gray code** (00, 01, 11, 10) so that adjacent cells differ by one variable.

### Rules for grouping
1. Group only **1s** (for SOP) — or only 0s for POS.
2. Groups must be rectangles of size **1, 2, 4, 8, 16** (powers of 2).
3. Make groups **as large as possible** and use **as few groups as possible**.
4. Groups may **overlap** and may **wrap around** the edges (left–right and top–bottom; the four corners are adjacent in a 4-variable map).
5. Every 1 must be in at least one group.
6. **Don't-care** conditions (X or d) can be treated as 1 or 0, whichever gives bigger groups.
7. In a group, variables that **change** are eliminated; variables that stay the same remain. A group of 2 removes 1 variable, of 4 removes 2, of 8 removes 3.

### 3-variable example: F(A,B,C) = Σm(0, 2, 4, 5, 6)
~~~
        BC=00  01   11   10
A=0  |   1     0    0    1
A=1  |   1     1    0    1
~~~
- Group of four: the four corners/edges with C = 0 (m0, m2, m4, m6) → **C'**.
- Group of two: m4, m5 (A = 1, B = 0) → **AB'**.
- Result: **F = C' + AB'**.

### 4-variable example: F = Σm(0, 1, 2, 5, 8, 9, 10)
~~~
          CD=00  01   11   10
AB=00  |   1     1    0    1
AB=01  |   0     1    0    0
AB=11  |   0     0    0    0
AB=10  |   1     1    0    1
~~~
- m0, m1, m8, m9 (B = 0, C = 0) → **B'C'**.
- m0, m2, m8, m10 (four corners: B = 0, D = 0) → **B'D'**.
- m1, m5 (A = 0, C = 0, D = 1) → **A'C'D**.
- Result: **F = B'C' + B'D' + A'C'D**.

Key terms: **implicant**, **prime implicant** (cannot be made larger), **essential prime implicant** (the only group covering some 1). The **Quine–McCluskey (tabular) method** does the same job algorithmically and suits more than 4–5 variables.

## 6. Combinational circuits
Output depends **only on present inputs** (no memory).

### Design steps
1. State the problem and decide inputs/outputs.
2. Draw the truth table.
3. Derive the Boolean expression (SOP/POS).
4. Simplify (algebra or K-map).
5. Draw the logic circuit.

### Adders and subtractors
| Circuit | Inputs | Outputs | Equations |
|---|---|---|---|
| **Half adder** | A, B | Sum S, Carry C | S = A ⊕ B; C = AB (one XOR + one AND) |
| **Full adder** | A, B, Cin | S, Cout | S = A ⊕ B ⊕ Cin; Cout = AB + Cin(A ⊕ B) (two half adders + one OR) |
| **Half subtractor** | A, B | Difference D, Borrow Bo | D = A ⊕ B; Bo = A'B |
| **Full subtractor** | A, B, Bin | D, Bout | D = A ⊕ B ⊕ Bin; Bout = A'B + Bin(A ⊕ B)' |

Full adder truth table:
| A | B | Cin | S | Cout |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

- **Ripple-carry (parallel) adder**: n full adders chained; carry ripples from stage to stage (slow for large n).
- **Carry look-ahead adder**: computes carries in advance using generate (G = AB) and propagate (P = A ⊕ B) signals; faster.
- **Adder-subtractor**: uses XOR gates on B with a mode bit M (M = 0 add, M = 1 subtract using 2's complement).

### Other combinational circuits
| Circuit | Function |
|---|---|
| **Multiplexer (MUX)** | "Data selector": 2ⁿ data inputs, n select lines, 1 output. 4-to-1 MUX: Y = S1'S0'I0 + S1'S0 I1 + S1 S0'I2 + S1 S0 I3. Can implement any function. |
| **Demultiplexer (DEMUX)** | "Data distributor": 1 input routed to one of 2ⁿ outputs by n select lines. |
| **Decoder** | n inputs → up to 2ⁿ outputs; exactly one output active (e.g. 3-to-8 decoder, 74138). Used for memory address decoding. |
| **Encoder** | 2ⁿ inputs → n-bit code (e.g. 8-to-3 encoder; decimal-to-BCD). |
| **Priority encoder** | Encoder that outputs the code of the **highest-priority** active input. |
| **Magnitude comparator** | Compares A and B; outputs A > B, A = B, A < B. 1-bit equality = (A ⊕ B)' (XNOR). |
| **Code converters** | BCD to 7-segment decoder (7447/7448), binary ↔ Gray, BCD ↔ Excess-3. |
| **Parity generator/checker** | Built from XOR gates. |

## 7. Sequential circuits
Output depends on **present inputs AND past state** — they have **memory** (feedback). Types: **synchronous** (changes on a clock edge) and **asynchronous** (changes whenever inputs change).

- **Clock**: periodic square wave. Period T = 1/f. **Edge-triggered**: responds on the rising (positive) or falling (negative) edge. **Level-triggered**: responds while the clock is high (or low).
- **Latch**: level-sensitive memory element. **Flip-flop**: edge-triggered memory element storing **one bit**.

### SR latch (NOR-based)
| S | R | Q(next) | Comment |
|---|---|---|---|
| 0 | 0 | Q | No change (hold) |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | ? | **Invalid / forbidden** (both outputs 0) |
A NAND-based latch (S'R') has active-low inputs; its forbidden state is S' = R' = 0.

### Flip-flop types
| Flip-flop | Behaviour | Characteristic equation |
|---|---|---|
| **SR** | As above, on clock edge; S = R = 1 not allowed | Q+ = S + R'Q (with SR = 0) |
| **D** (data/delay) | Q+ = D. Output follows input on the clock edge; no invalid state | Q+ = D |
| **JK** | J = K = 0 hold; J = 0 K = 1 reset; J = 1 K = 0 set; **J = K = 1 toggle** | Q+ = JQ' + K'Q |
| **T** (toggle) | T = 0 hold; T = 1 toggle | Q+ = T ⊕ Q |

- JK fixes the SR invalid state. Making J = K gives a **T flip-flop**; feeding D and D' into J and K gives a D flip-flop.
- **Race-around condition**: in a level-triggered JK with J = K = 1, output toggles many times while the clock is high. Cured by **master–slave** JK or edge triggering.
- **Preset (PRE)** and **Clear (CLR)** are asynchronous inputs that force Q = 1 or Q = 0 regardless of the clock.
- **Excitation tables** give the inputs needed for each transition (used to design counters). JK: 0→0 needs J = 0, K = X; 0→1 needs J = 1, K = X; 1→0 needs J = X, K = 1; 1→1 needs J = X, K = 0.

### Registers
A register is a group of flip-flops storing an n-bit word (n flip-flops for n bits).
| Shift register type | Meaning |
|---|---|
| SISO | Serial in, serial out (delay line) |
| SIPO | Serial in, parallel out (serial-to-parallel conversion) |
| PISO | Parallel in, serial out |
| PIPO | Parallel in, parallel out (storage/buffer) |
- **Bidirectional / universal shift register** shifts left or right and loads in parallel (e.g. 74194).
- Shifting left by one = multiply by 2; shifting right = divide by 2.
- **Ring counter**: shift register with output fed back to input; n flip-flops give **n states**.
- **Johnson (twisted-ring) counter**: inverted output fed back; n flip-flops give **2n states**.

### Counters
- **Asynchronous (ripple) counter**: clock drives only the first flip-flop; each output clocks the next. Simple but slow (delays add up). Uses T/JK flip-flops in toggle mode.
- **Synchronous counter**: all flip-flops share one clock; faster; needs extra gating logic.
- An n-bit binary counter has **2ⁿ states** and counts 0 to 2ⁿ − 1. The **modulus (MOD)** is the number of states. A MOD-10 counter (decade/BCD counter) counts 0–9 and needs **4 flip-flops**.
- Number of flip-flops for MOD-N: smallest n with 2ⁿ ≥ N. MOD-6 needs 3; MOD-12 needs 4; MOD-20 needs 5.
- **Up counter** counts upward, **down counter** downward, **up/down counter** both.
- Each flip-flop stage **divides the frequency by 2**: a 3-bit ripple counter divides the clock by 8. Counters are used as frequency dividers, timers and digital clocks.
- **Finite State Machines**: **Moore machine** (outputs depend only on the state) vs **Mealy machine** (outputs depend on state and inputs). Shown with state diagrams and state tables.

## 8. Memory and programmable logic
### Semiconductor memory
| Type | Volatile? | Notes |
|---|---|---|
| **SRAM** (static RAM) | Yes | Flip-flop cells (~6 transistors); fast; no refresh; expensive; used for **cache** |
| **DRAM** (dynamic RAM) | Yes | Capacitor + transistor; must be **refreshed** periodically; dense and cheap; **main memory** |
| **ROM** (mask ROM) | No | Programmed at the factory; cannot be changed |
| **PROM** | No | Programmable **once** by the user (blowing fuses) |
| **EPROM** | No | Erased by **ultraviolet light** (quartz window); reprogrammable |
| **EEPROM** (E²PROM) | No | Erased **electrically**, byte by byte |
| **Flash** | No | Electrically erased in blocks; USB drives, SSDs |

- Memory size = number of locations × word size. A memory with **n address lines** has **2ⁿ locations**. E.g. 1K × 8 = 1,024 locations of 8 bits → needs 10 address lines and 8 data lines.
- 64K × 8 needs 16 address lines; 1M × 16 needs 20 address lines and 16 data lines.
- Read/write operations use the address bus, data bus and control signals (chip select CS, read/write R/W', output enable OE).
- Memory expansion: connect chips in parallel to increase **word size** or use a decoder to increase **number of words**.

### Programmable logic devices (PLDs)
| Device | AND array | OR array |
|---|---|---|
| **PROM** | Fixed (full decoder) | Programmable |
| **PLA** (Programmable Logic Array) | Programmable | Programmable |
| **PAL** (Programmable Array Logic) | Programmable | Fixed |
- **GAL** (Generic Array Logic): erasable/reprogrammable PAL.
- **CPLD** (Complex PLD): several PAL-like blocks with interconnect.
- **FPGA** (Field-Programmable Gate Array): large array of configurable logic blocks (look-up tables + flip-flops) and programmable interconnects; programmed with HDLs such as **VHDL** or **Verilog**.
- **ASIC**: application-specific IC — custom chip, not reprogrammable.

### Analog–digital conversion (often added)
- **ADC** (analog-to-digital converter): flash, successive approximation, dual-slope types. **DAC** (digital-to-analog): weighted resistor, R-2R ladder.
- Resolution of an n-bit converter = 1 part in 2ⁿ (step size = full-scale voltage / (2ⁿ − 1)).

## Quick revision checklist
- Convert between binary, octal, decimal and hex (integers and fractions) quickly.
- Binary addition/subtraction; 1's and 2's complement; 8-bit range −128 to +127.
- BCD, Excess-3, Gray (convert both ways), ASCII, parity, Hamming.
- Truth tables of all 7 gates; NAND/NOR universal.
- Boolean laws, De Morgan, absorption, consensus; SOP/POS; minterms/maxterms.
- K-map grouping rules; don't-cares; 3- and 4-variable maps.
- Half/full adder and subtractor equations; MUX, DEMUX, decoder, encoder, comparator.
- SR, D, JK, T flip-flops; race-around; master–slave; excitation tables.
- Shift registers (SISO, SIPO, PISO, PIPO); ring (n states) vs Johnson (2n states).
- Ripple vs synchronous counters; MOD-N needs n flip-flops with 2ⁿ ≥ N; divide-by-2 per stage.
- SRAM vs DRAM; ROM, PROM, EPROM (UV), EEPROM; 2ⁿ locations for n address lines.
- PROM vs PLA vs PAL arrays; FPGA, CPLD.
`;
