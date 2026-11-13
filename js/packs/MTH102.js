window.COURSES.push({
  code: "MTH102", title: "Elementary Mathematics II", units: 2, cat: "C", source: "noun",
  modules: [
    ["Functions & graphs", [
      "A function f from set A to set B gives every element of A exactly one element of B. A is the domain; the set of values actually produced is the range.",
      "f(x) notation: if f(x) = 2x + 3 then f(4) = 11. Composite function: (f∘g)(x) = f(g(x)).",
      "One-to-one (injective): different inputs give different outputs. Onto (surjective): every element of B is used. A function that is both has an inverse f⁻¹.",
      "To find an inverse: write y = f(x), swap x and y, solve for y.",
      "Even function: f(−x) = f(x), graph symmetric about the y-axis (x², cos x). Odd function: f(−x) = −f(x), symmetric about the origin (x³, sin x).",
      "A linear function y = mx + c gives a straight line. A quadratic y = ax² + bx + c gives a parabola with turning point at x = −b/(2a).",
      "A function is undefined where its denominator is zero: 1/(x − 2) is undefined at x = 2."
    ]],
    ["Limits & continuity", [
      "The limit of f(x) as x approaches a is the value f(x) gets close to as x gets close to a. Written lim f(x) as x → a.",
      "For polynomials, substitute directly: lim (x² + 3) as x → 2 is 7.",
      "If substitution gives 0/0, factorise and cancel first: (x² − 4)/(x − 2) = x + 2, so the limit as x → 2 is 4.",
      "Limit laws: the limit of a sum, difference, product or quotient is the sum, difference, product or quotient of the limits (denominator limit not zero).",
      "Standard results: lim (sin x)/x as x → 0 is 1. lim 1/x as x → ∞ is 0.",
      "For a rational function as x → ∞, divide through by the highest power of x: (3x² + 1)/(x² − 5) → 3.",
      "f is continuous at x = a if f(a) is defined, the limit as x → a exists, and the limit equals f(a). Polynomials are continuous everywhere."
    ]],
    ["Differentiation", [
      "The derivative is the limit of the rate of change: f′(x) = lim [f(x + h) − f(x)]/h as h → 0 (first principles). It is the gradient of the tangent to the curve.",
      "Power rule: d/dx(xⁿ) = n xⁿ⁻¹. The derivative of a constant is 0.",
      "Product rule: (uv)′ = u v′ + v u′. Quotient rule: (u/v)′ = (v u′ − u v′)/v².",
      "Chain rule (function of a function): dy/dx = dy/du × du/dx.",
      "Standard derivatives: sin x → cos x; cos x → −sin x; tan x → sec² x; eˣ → eˣ; ln x → 1/x.",
      "Implicit differentiation: differentiate both sides with respect to x, treating y as a function of x.",
      "Higher derivatives: d²y/dx² is the derivative of dy/dx."
    ]],
    ["Applications of differentiation", [
      "At a stationary (turning) point, dy/dx = 0.",
      "Second derivative test: d²y/dx² < 0 gives a maximum; d²y/dx² > 0 gives a minimum; = 0 may be a point of inflexion.",
      "A function is increasing where dy/dx > 0 and decreasing where dy/dx < 0.",
      "Kinematics: velocity v = ds/dt; acceleration a = dv/dt = d²s/dt². A body is momentarily at rest when v = 0.",
      "Gradient of the tangent at a point is dy/dx there. Gradient of the normal is −1 ÷ (gradient of the tangent).",
      "Rolle's theorem: if f is continuous on [a, b], differentiable on (a, b) and f(a) = f(b), then f′(c) = 0 for some c between a and b.",
      "Rate of change problems use the chain rule: dV/dt = dV/dr × dr/dt."
    ]],
    ["Integration", [
      "Integration is the reverse of differentiation (anti-differentiation). An indefinite integral always carries a constant of integration C.",
      "Power rule: ∫xⁿ dx = xⁿ⁺¹/(n + 1) + C, for n ≠ −1. ∫(1/x) dx = ln|x| + C.",
      "Standard integrals: ∫cos x dx = sin x + C; ∫sin x dx = −cos x + C; ∫eˣ dx = eˣ + C; ∫sec² x dx = tan x + C.",
      "Methods: substitution (reverse of the chain rule), integration by parts ∫u dv = uv − ∫v du, and partial fractions.",
      "Definite integral: ∫ from a to b of f(x) dx = F(b) − F(a), where F is an antiderivative. No constant C is needed.",
      "The area under a curve y = f(x) between x = a and x = b is ∫ from a to b of y dx.",
      "Volume of a solid of revolution about the x-axis: V = π ∫ from a to b of y² dx."
    ]]
  ],
  cards: [
    ["Function", "Rule giving each element of the domain exactly one element of the codomain."],
    ["Domain and range", "Domain: allowed inputs. Range: outputs actually produced."],
    ["Composite function", "(f∘g)(x) = f(g(x))."],
    ["Even vs odd function", "Even: f(−x) = f(x). Odd: f(−x) = −f(x)."],
    ["Limit of (sin x)/x as x → 0", "1."],
    ["Continuity at x = a", "f(a) defined, limit exists, limit = f(a)."],
    ["First principles", "f′(x) = lim [f(x + h) − f(x)]/h as h → 0."],
    ["Power rule (differentiation)", "d/dx(xⁿ) = n xⁿ⁻¹."],
    ["Product rule", "(uv)′ = u v′ + v u′."],
    ["Quotient rule", "(u/v)′ = (v u′ − u v′)/v²."],
    ["Chain rule", "dy/dx = dy/du × du/dx."],
    ["d/dx(sin x), d/dx(cos x)", "cos x, −sin x."],
    ["Stationary point", "Point where dy/dx = 0."],
    ["Max vs min test", "d²y/dx² < 0: maximum. d²y/dx² > 0: minimum."],
    ["Velocity and acceleration", "v = ds/dt; a = dv/dt."],
    ["Rolle's theorem", "f continuous on [a,b], differentiable on (a,b), f(a) = f(b) ⇒ f′(c) = 0 for some c."],
    ["Power rule (integration)", "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ −1."],
    ["Integration by parts", "∫u dv = uv − ∫v du."],
    ["Volume of revolution (x-axis)", "V = π ∫ y² dx."]
  ],
  mcq: [
    [0, "If f(x) = 2x + 3, then f(4) is", ["8", "11", "9", "14"], 1],
    [0, "The set of all allowed inputs of a function is its", ["Domain", "Range", "Image", "Codomain"], 0],
    [0, "If f(x) = x + 1 and g(x) = x², then f(g(2)) is", ["9", "6", "5", "3"], 2, "g(2) = 4, f(4) = 5."],
    [0, "The inverse of f(x) = 2x − 4 is", ["2x + 4", "(x − 4)/2", "x/2 − 4", "(x + 4)/2"], 3],
    [0, "Which of these is an even function?", ["x³", "x²", "sin x", "x"], 1],
    [0, "The function f(x) = 1/(x − 3) is undefined at x =", ["3", "0", "−3", "1"], 0],
    [0, "The graph of y = ax² + bx + c is a", ["Straight line", "Circle", "Parabola", "Hyperbola"], 2],
    [1, "The limit of (x² + 3) as x → 2 is", ["5", "7", "4", "9"], 1],
    [1, "The limit of (x² − 4)/(x − 2) as x → 2 is", ["0", "2", "Undefined", "4"], 3, "Factorise: (x − 2)(x + 2)/(x − 2) = x + 2."],
    [1, "The limit of (sin x)/x as x → 0 is", ["1", "0", "∞", "−1"], 0],
    [1, "The limit of 1/x as x → ∞ is", ["1", "∞", "0", "−1"], 2],
    [1, "The limit of (3x² + 1)/(x² − 5) as x → ∞ is", ["1", "3", "0", "∞"], 1],
    [1, "The limit of (x² − 9)/(x − 3) as x → 3 is", ["3", "0", "9", "6"], 3],
    [1, "f is continuous at x = a when the limit of f(x) as x → a", ["Equals f(a)", "Is zero", "Is infinite", "Does not exist"], 0],
    [2, "The derivative of x⁵ is", ["x⁴", "5x⁵", "5x⁴", "x⁶/6"], 2],
    [2, "If y = 3x² + 2x, then dy/dx is", ["6x", "6x + 2", "3x + 2", "x³ + x²"], 1],
    [2, "The derivative of a constant is", ["0", "1", "The constant", "x"], 0],
    [2, "The derivative of sin x is", ["−cos x", "−sin x", "tan x", "cos x"], 3],
    [2, "The derivative of cos x is", ["sin x", "−sin x", "cos x", "−cos x"], 1],
    [2, "If y = (2x + 1)³, then dy/dx is", ["3(2x + 1)²", "(2x + 1)²", "6(2x + 1)²", "6(2x + 1)³"], 2, "Chain rule: 3(2x + 1)² × 2."],
    [2, "The derivative of ln x is", ["1/x", "x", "eˣ", "ln x"], 0],
    [2, "If y = x eˣ, then dy/dx is", ["eˣ", "x eˣ", "x² eˣ", "eˣ + x eˣ"], 3, "Product rule."],
    [3, "At a turning point of a curve, dy/dx equals", ["1", "0", "−1", "∞"], 1],
    [3, "A stationary point where d²y/dx² < 0 is a", ["Minimum", "Point of inflexion", "Maximum", "Root"], 2],
    [3, "The curve y = x² − 4x + 1 has its minimum at x =", ["2", "4", "−2", "1"], 0, "dy/dx = 2x − 4 = 0."],
    [3, "If s = t³ − 3t (s in metres, t in seconds), the velocity at t = 2 is", ["2 m/s", "6 m/s", "12 m/s", "9 m/s"], 3, "v = 3t² − 3 = 12 − 3."],
    [3, "Acceleration is the derivative of", ["Displacement with respect to distance", "Velocity with respect to time", "Time with respect to velocity", "Area with respect to time"], 1],
    [3, "The gradient of the tangent to y = x² at x = 3 is", ["3", "9", "6", "2"], 2],
    [3, "Rolle's theorem requires that", ["f(a) = f(b)", "f(a) = 0 only", "f is a polynomial of degree 2", "f′(a) = f′(b)"], 0],
    [4, "∫x² dx equals", ["2x + C", "x³ + C", "x²/2 + C", "x³/3 + C"], 3],
    [4, "∫cos x dx equals", ["−sin x + C", "sin x + C", "cos x + C", "tan x + C"], 1],
    [4, "∫(1/x) dx equals", ["ln|x| + C", "−1/x² + C", "x + C", "1 + C"], 0],
    [4, "The value of ∫ from 0 to 2 of 2x dx is", ["2", "8", "4", "6"], 2, "[x²] from 0 to 2 = 4."],
    [4, "The value of ∫ from 0 to 3 of x² dx is", ["27", "9", "3", "6"], 1, "[x³/3] from 0 to 3 = 9."],
    [4, "The volume generated when y = f(x) is rotated about the x-axis is", ["∫ y dx", "2π ∫ y dx", "π ∫ y dx", "π ∫ y² dx"], 3],
    [4, "∫eˣ dx equals", ["eˣ + C", "x eˣ + C", "eˣ/x + C", "ln x + C"], 0]
  ],
  fib: [
    [0, "The set of all possible inputs of a function is called its ____.", ["domain"]],
    [0, "A function with f(−x) = f(x) is called an ____ function.", ["even"]],
    [1, "The limit of (sin x)/x as x approaches 0 is ____.", ["1", "one"]],
    [1, "A function whose limit at a point equals its value there is ____ at that point.", ["continuous"]],
    [2, "The derivative of x³ is ____x².", ["3", "three"]],
    [2, "The derivative of sin x is ____ x.", ["cos", "cosine"]],
    [3, "At a stationary point, dy/dx = ____.", ["0", "zero"]],
    [3, "The derivative of displacement with respect to time is ____.", ["velocity"]],
    [4, "The reverse process of differentiation is ____.", ["integration", "anti-differentiation", "antidifferentiation"]],
    [4, "∫ from 0 to 1 of 2x dx = ____.", ["1", "one"]]
  ]
});
window.GUIDES = window.GUIDES || {};
GUIDES.MTH102 = `
## How to use this guide
MTH102 (Elementary Mathematics II) is **calculus**: functions, limits, continuity, differentiation, integration and their uses. The e-exam is mostly short calculations: find a limit, differentiate, find a turning point, evaluate an integral. Learn the rules, then work the examples with the answers covered.

> **Exam tip:** Most marks come from the power rule (both directions), the chain rule and "set dy/dx = 0". Practise those until they are automatic.

## 1. Functions
A **function** gives each input exactly one output.
- **Domain**: inputs allowed. **Range**: outputs produced.
- **Composite**: (f∘g)(x) = f(g(x)). Work from the inside out.
- **Inverse**: write y = f(x), swap x and y, solve for y.

**Example:** f(x) = 2x − 4. Swap: x = 2y − 4, so y = (x + 4)/2. f⁻¹(x) = (x + 4)/2.

| Type | Test | Examples |
|---|---|---|
| Even | f(−x) = f(x) | x², cos x |
| Odd | f(−x) = −f(x) | x³, sin x |
| One-to-one | Different inputs, different outputs | 2x + 1 |

A rational function is undefined where the denominator is zero.

## 2. Limits
The limit is the value f(x) approaches as x approaches a.

1. **Substitute** first. If you get a number, that is the limit.
2. If you get **0/0**, factorise and cancel, then substitute.
3. For **x → ∞**, divide top and bottom by the highest power of x.

| Limit | Value |
|---|---|
| (x² − 4)/(x − 2) as x → 2 | 4 |
| (x² − 9)/(x − 3) as x → 3 | 6 |
| (sin x)/x as x → 0 | 1 |
| 1/x as x → ∞ | 0 |
| (3x² + 1)/(x² − 5) as x → ∞ | 3 |

## 3. Continuity
f is **continuous at x = a** if all three hold:
1. f(a) is defined
2. the limit as x → a exists
3. the limit equals f(a)

Polynomials, sin x, cos x and eˣ are continuous everywhere. 1/(x − 2) is discontinuous at x = 2.

## 4. Differentiation
The derivative is the **gradient of the tangent** and the **rate of change**.

First principles: f′(x) = limit as h → 0 of [f(x + h) − f(x)] / h.

### Rules
| Rule | Formula |
|---|---|
| Power | d/dx(xⁿ) = n xⁿ⁻¹ |
| Constant | d/dx(c) = 0 |
| Sum | (u + v)′ = u′ + v′ |
| Product | (uv)′ = u v′ + v u′ |
| Quotient | (u/v)′ = (v u′ − u v′)/v² |
| Chain | dy/dx = dy/du × du/dx |

### Standard derivatives
| y | dy/dx |
|---|---|
| sin x | cos x |
| cos x | −sin x |
| tan x | sec² x |
| eˣ | eˣ |
| ln x | 1/x |

**Examples**
- y = 3x² + 2x gives dy/dx = 6x + 2
- y = (2x + 1)³ gives dy/dx = 3(2x + 1)² × 2 = 6(2x + 1)²
- y = x eˣ gives dy/dx = eˣ + x eˣ

## 5. Applications of differentiation
### Turning points
1. Find dy/dx and set it to 0
2. Solve for x
3. Test with d²y/dx²: negative = **maximum**, positive = **minimum**

**Example:** y = x² − 4x + 1. dy/dx = 2x − 4 = 0, so x = 2. d²y/dx² = 2 > 0, so a minimum at (2, −3).

### Kinematics
- velocity v = ds/dt
- acceleration a = dv/dt

**Example:** s = t³ − 3t. v = 3t² − 3. At t = 2, v = 9 m/s. a = 6t = 12 m/s².

### Tangent and normal
Gradient of tangent = dy/dx at the point. Gradient of normal = −1 ÷ gradient of tangent.

### Rolle's theorem
If f is continuous on [a, b], differentiable on (a, b) and f(a) = f(b), then there is a c in (a, b) with f′(c) = 0.

## 6. Integration
Reverse of differentiation. Always add **+ C** to an indefinite integral.

| Function | Integral |
|---|---|
| xⁿ (n ≠ −1) | xⁿ⁺¹/(n + 1) + C |
| 1/x | ln|x| + C |
| sin x | −cos x + C |
| cos x | sin x + C |
| eˣ | eˣ + C |
| sec² x | tan x + C |

### Methods
- **Substitution**: let u = inner function
- **By parts**: ∫u dv = uv − ∫v du
- **Partial fractions**: split a rational function first

## 7. Definite integrals
∫ from a to b of f(x) dx = F(b) − F(a).

**Examples**
- ∫ from 0 to 2 of 2x dx = [x²] = 4 − 0 = 4
- ∫ from 0 to 3 of x² dx = [x³/3] = 9 − 0 = 9

### Area and volume
- **Area under a curve** between x = a and x = b: ∫ y dx
- **Volume of revolution** about the x-axis: π ∫ y² dx

**Example:** y = x from 0 to 3 rotated about the x-axis. V = π ∫ x² dx = π × 9 = 9π.

## Quick revision list
- Differentiate: multiply by the power, reduce the power by 1
- Integrate: raise the power by 1, divide by the new power, add C
- 0/0 limit: factorise and cancel
- Turning point: dy/dx = 0; second derivative tells max or min
- v = ds/dt, a = dv/dt
- Volume about x-axis: π ∫ y² dx
`;
