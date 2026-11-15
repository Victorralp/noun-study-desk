window.COURSES.push({
  code: "MTH281", title: "Mathematical Methods I", units: 3, cat: "C", source: "noun",
  modules: [
    ["Functions, limits & continuity", [
      "A function assigns to each element of its domain exactly one element of its codomain. The domain is the set of allowed inputs; the range is the set of actual outputs.",
      "An even function satisfies f(-x) = f(x), for example x^2 and cos x. An odd function satisfies f(-x) = -f(x), for example x^3 and sin x.",
      "Composite function: (f o g)(x) = f(g(x)). The inverse function undoes f: if f(x) = 2x then the inverse is x/2.",
      "The limit of f(x) as x approaches a is the value f(x) gets close to as x gets close to a. For polynomials, substitute directly. For 0/0 forms, factorise and cancel first: (x^2 - 9)/(x - 3) tends to 6 as x tends to 3.",
      "Standard limits: sin x / x tends to 1 as x tends to 0; 1/x tends to 0 as x tends to infinity. For a ratio of polynomials of equal degree, the limit at infinity is the ratio of the leading coefficients.",
      "f is continuous at a if f(a) exists, the limit as x tends to a exists, and the two are equal. 1/x is discontinuous at x = 0."
    ]],
    ["Differentiation & its applications", [
      "The derivative measures the rate of change (gradient of the tangent). Power rule: d/dx of x^n is n x^(n-1). The derivative of a constant is 0.",
      "Standard derivatives: sin x gives cos x; cos x gives -sin x; tan x gives sec^2 x; e^x gives e^x; ln x gives 1/x.",
      "Product rule: (uv)' = u v' + v u'. Quotient rule: (u/v)' = (v u' - u v') / v^2. Chain rule: dy/dx = dy/du times du/dx, so sin 2x gives 2 cos 2x.",
      "Stationary points occur where dy/dx = 0. If the second derivative is positive the point is a minimum; if negative, a maximum.",
      "Rolle's theorem: if f is continuous on [a, b], differentiable on (a, b) and f(a) = f(b), there is a c in (a, b) with f'(c) = 0. Mean value theorem: there is a c with f'(c) = (f(b) - f(a)) / (b - a).",
      "Taylor series expands f about x = a in powers of (x - a). About a = 0 it is the Maclaurin series. e^x = 1 + x + x^2/2! + x^3/3! + ...; sin x = x - x^3/3! + ...; cos x = 1 - x^2/2! + ..."
    ]],
    ["Integration & its applications", [
      "Integration is the reverse of differentiation. An indefinite integral carries a constant of integration C.",
      "Standard integrals: x^n gives x^(n+1)/(n+1) + C (n not -1); 1/x gives ln|x| + C; e^x gives e^x + C; cos x gives sin x + C; sin x gives -cos x + C; sec^2 x gives tan x + C.",
      "Fundamental theorem of calculus: the definite integral of f from a to b equals F(b) - F(a), where F is an antiderivative of f.",
      "Techniques: substitution (reverse chain rule), integration by parts (integral of u dv = uv - integral of v du) and partial fractions.",
      "The definite integral of y from a to b gives the area under the curve. The volume of a solid of revolution about the x-axis is pi times the integral of y^2 dx."
    ]],
    ["Functions of several variables", [
      "For z = f(x, y), the partial derivative with respect to x is found by differentiating with respect to x while treating y as a constant, and vice versa.",
      "Second partial derivatives: f_xx, f_yy and the mixed f_xy. When the second partials are continuous, f_xy = f_yx.",
      "Total differential: dz = f_x dx + f_y dy. It gives the linear approximation to a small change in z.",
      "Chain rule: if x and y depend on t, dz/dt = f_x dx/dt + f_y dy/dt.",
      "Critical points satisfy f_x = 0 and f_y = 0. Second derivative test with D = f_xx f_yy - (f_xy)^2: D > 0 and f_xx > 0 is a local minimum; D > 0 and f_xx < 0 is a local maximum; D < 0 is a saddle point; D = 0 is inconclusive.",
      "Lagrange multipliers find extrema of f subject to a constraint g = c by solving grad f = lambda grad g together with the constraint."
    ]],
    ["Line & multiple integrals", [
      "A double integral is evaluated as an iterated integral: integrate the inner variable first, treating the other as constant, then the outer one.",
      "The double integral of 1 over a region R gives the area of R. The double integral of f(x, y) >= 0 over R gives the volume under the surface z = f(x, y).",
      "For a continuous function on a rectangle the order of integration may be interchanged (Fubini's theorem).",
      "Polar coordinates: x = r cos theta, y = r sin theta, and the area element is dA = r dr dtheta (the Jacobian is r). In cylindrical coordinates dV = r dr dtheta dz.",
      "A triple integral of 1 over a solid gives its volume.",
      "A line integral is evaluated along a curve C. The line integral of F . dr gives the work done by the force F along C. For a conservative field the integral is independent of path and is zero round any closed curve. Green's theorem relates a line integral round a closed curve to a double integral over the region inside."
    ]]
  ],
  cards: [
    ["Domain vs range", "Domain: allowed inputs. Range: actual outputs."],
    ["Even vs odd function", "Even: f(-x) = f(x). Odd: f(-x) = -f(x)."],
    ["Continuity at a", "Limit of f(x) as x tends to a equals f(a)."],
    ["lim sin x / x as x tends to 0", "1"],
    ["Power rule", "d/dx of x^n = n x^(n-1)."],
    ["Product rule", "(uv)' = u v' + v u'."],
    ["Chain rule", "dy/dx = dy/du times du/dx."],
    ["Mean value theorem", "There is c with f'(c) = (f(b) - f(a)) / (b - a)."],
    ["Rolle's theorem", "If f(a) = f(b), there is c with f'(c) = 0."],
    ["Maclaurin series", "Taylor series about x = 0."],
    ["Integration by parts", "Integral of u dv = uv - integral of v du."],
    ["Fundamental theorem of calculus", "Integral of f from a to b = F(b) - F(a)."],
    ["Partial derivative", "Differentiate with respect to one variable, hold the others constant."],
    ["Total differential", "dz = f_x dx + f_y dy."],
    ["Second derivative test (two variables)", "D = f_xx f_yy - (f_xy)^2. D > 0: min if f_xx > 0, max if f_xx < 0. D < 0: saddle."],
    ["Lagrange multipliers", "Solve grad f = lambda grad g with the constraint."],
    ["Polar area element", "dA = r dr dtheta."],
    ["Conservative field", "Line integral independent of path; zero round a closed curve."]
  ],
  mcq: [
    [0, "A function assigns to each element of its domain", ["At least two outputs", "Exactly one output", "No output", "Any number of outputs"], 1],
    [0, "The set of all allowed inputs of a function is its", ["Range", "Codomain", "Domain", "Image"], 2],
    [0, "f(x) = x^2 is an example of", ["An even function", "An odd function", "A constant function", "A linear function"], 0],
    [0, "f(x) = x^3 is an example of", ["An even function", "A constant function", "A periodic function", "An odd function"], 3],
    [0, "The limit of x^2 + 1 as x tends to 2 is", ["4", "5", "3", "2"], 1],
    [0, "The limit of sin x / x as x tends to 0 is", ["0", "Infinity", "1", "Undefined"], 2],
    [0, "The limit of (x^2 - 9)/(x - 3) as x tends to 3 is", ["6", "0", "3", "9"], 0],
    [0, "The limit of 1/x as x tends to infinity is", ["1", "Infinity", "-1", "0"], 3],
    [0, "f is continuous at x = a if", ["f(a) = 0", "The limit of f(x) as x tends to a equals f(a)", "f is defined only at a", "f'(a) = 0"], 1],
    [0, "f(x) = 1/x is discontinuous at x =", ["1", "-1", "0", "2"], 2],
    [0, "If f(x) = 2x + 3, then f(4) =", ["11", "8", "9", "14"], 0],
    [0, "If f(x) = x^2 and g(x) = x + 1, then f(g(2)) =", ["5", "4", "6", "9"], 3],
    [0, "The range of f(x) = x^2 over the real numbers is", ["All real numbers", "All y >= 0", "All y < 0", "All y >= 1"], 1],
    [0, "The inverse of f(x) = 2x is", ["2x", "x - 2", "x/2", "1/(2x)"], 2],
    [0, "The limit of (3x^2 + 1)/(x^2 + 2) as x tends to infinity is", ["3", "1", "0", "Infinity"], 0],
    [0, "A function with f(-x) = f(x) for all x is called", ["Odd", "Periodic", "Inverse", "Even"], 3],
    [0, "The domain of f(x) = sqrt(x) over the reals is", ["All real numbers", "x >= 0", "x > 1", "x <= 0"], 1],
    [1, "The derivative of x^n is", ["x^(n-1)", "n x^n", "n x^(n-1)", "x^(n+1)/(n+1)"], 2],
    [1, "The derivative of x^3 is", ["3x^2", "x^2", "3x", "x^4/4"], 0],
    [1, "The derivative of sin x is", ["-cos x", "-sin x", "tan x", "cos x"], 3],
    [1, "The derivative of cos x is", ["sin x", "-sin x", "-cos x", "sec x"], 1],
    [1, "The derivative of e^x is", ["x e^(x-1)", "1/x", "e^x", "ln x"], 2],
    [1, "The derivative of ln x is", ["1/x", "e^x", "x", "ln x / x"], 0],
    [1, "The derivative of a constant is", ["1", "The constant itself", "x", "0"], 3],
    [1, "The product rule states that (uv)' =", ["u'v'", "u v' + v u'", "u v' - v u'", "u'/v'"], 1],
    [1, "The derivative of x^2 + 3x is", ["2x", "x + 3", "2x + 3", "x^2 + 3"], 2],
    [1, "At a stationary point of y = f(x)", ["dy/dx = 0", "y = 0", "x = 0", "dy/dx = 1"], 0],
    [1, "A stationary point where the second derivative is positive is a", ["Maximum", "Point of inflexion", "Discontinuity", "Minimum"], 3],
    [1, "The derivative of sin 2x is", ["cos 2x", "2 cos 2x", "-2 cos 2x", "2 sin x"], 1],
    [1, "Rolle's theorem guarantees a point c where", ["f(c) = 0", "f'(c) = 1", "f'(c) = 0", "f(c) = f'(c)"], 2],
    [1, "The mean value theorem states that for some c in (a, b), f'(c) =", ["(f(b) - f(a)) / (b - a)", "f(b) - f(a)", "(b - a) / (f(b) - f(a))", "f(a) f(b)"], 0],
    [1, "A Taylor series about x = 0 is called a", ["Fourier series", "Geometric series", "Binomial series", "Maclaurin series"], 3],
    [1, "The Maclaurin series of e^x begins", ["x - x^3/3! + ...", "1 + x + x^2/2! + ...", "1 - x^2/2! + ...", "1 - x + x^2 - ..."], 1],
    [1, "The derivative of tan x is", ["cot x", "sec x", "sec^2 x", "-sec^2 x"], 2],
    [2, "The integral of x^n (n not equal to -1) is", ["x^(n+1)/(n+1) + C", "n x^(n-1) + C", "x^n/n + C", "x^(n-1)/(n-1) + C"], 0],
    [2, "The integral of 1/x is", ["-1/x^2 + C", "x + C", "e^x + C", "ln|x| + C"], 3],
    [2, "The integral of cos x is", ["-sin x + C", "sin x + C", "cos x + C", "tan x + C"], 1],
    [2, "The integral of sin x is", ["cos x + C", "sin x + C", "-cos x + C", "-sin x + C"], 2],
    [2, "The integral of e^x is", ["e^x + C", "x e^x + C", "ln x + C", "e^(x+1)/(x+1) + C"], 0],
    [2, "The integral of 2x from 0 to 1 is", ["2", "0", "1/2", "1"], 3],
    [2, "The integral of 3x^2 from 0 to 2 is", ["12", "8", "6", "4"], 1],
    [2, "Integration is the reverse process of", ["Multiplication", "Substitution", "Differentiation", "Factorisation"], 2],
    [2, "The C in an indefinite integral is the", ["Constant of integration", "Coefficient of x", "Critical value", "Limit of integration"], 0],
    [2, "The formula for integration by parts is: integral of u dv =", ["uv + integral of v du", "u dv - v du", "integral of v du - uv", "uv - integral of v du"], 3],
    [2, "The area under the curve y = f(x) between x = a and x = b is given by", ["The derivative of f at a", "The definite integral of f from a to b", "f(b) - f(a)", "f(a) f(b)"], 1],
    [2, "The integral of x from 0 to 4 is", ["4", "16", "8", "2"], 2],
    [2, "The integral of 5 with respect to x is", ["5x + C", "5 + C", "0", "5x^2 + C"], 0],
    [2, "The volume generated when y = f(x) is rotated about the x-axis is", ["The integral of y dx", "2 pi times the integral of y dx", "pi times the integral of y dx", "pi times the integral of y^2 dx"], 3],
    [2, "The integral of sec^2 x is", ["sec x + C", "tan x + C", "cot x + C", "2 sec x + C"], 1],
    [2, "The best method for the integral of 2x(x^2 + 1)^3 is", ["Partial fractions", "Integration by parts", "Substitution", "Long division"], 2],
    [2, "By the fundamental theorem of calculus, the integral of f from a to b equals", ["F(b) - F(a)", "F(a) - F(b)", "F(a) + F(b)", "f(b) - f(a)"], 0],
    [3, "To find the partial derivative of f(x, y) with respect to x, we", ["Treat x as a constant", "Set y = 0", "Differentiate with respect to both", "Treat y as a constant"], 3],
    [3, "If f = x^2 y, the partial derivative with respect to x is", ["x^2", "2xy", "2x", "2y"], 1],
    [3, "If f = x^2 y, the partial derivative with respect to y is", ["2xy", "2x", "x^2", "y"], 2],
    [3, "If f = x^2 + y^2, the partial derivative with respect to x is", ["2x", "2y", "2x + 2y", "x^2"], 0],
    [3, "If f = 3xy, the mixed partial derivative f_xy is", ["0", "3x", "3y", "3"], 3],
    [3, "When the second partial derivatives are continuous", ["f_xx = f_yy", "f_xy = f_yx", "f_xy = 0", "f_x = f_y"], 1],
    [3, "A critical point of f(x, y) is where", ["f = 0", "f_xx = 0 only", "f_x = 0 and f_y = 0", "f_xy = 1"], 2],
    [3, "With D = f_xx f_yy - (f_xy)^2, D > 0 and f_xx > 0 gives a", ["Local minimum", "Local maximum", "Saddle point", "Discontinuity"], 0],
    [3, "In the second derivative test, D < 0 indicates a", ["Local minimum", "Local maximum", "Global maximum", "Saddle point"], 3],
    [3, "With D > 0 and f_xx < 0, the critical point is a", ["Local minimum", "Local maximum", "Saddle point", "Point of inflexion"], 1],
    [3, "Lagrange multipliers are used to find", ["Limits at infinity", "Areas under curves", "Extrema subject to a constraint", "Roots of polynomials"], 2],
    [3, "The Lagrange condition for extrema of f subject to g = c is", ["grad f = lambda grad g", "f = lambda g", "grad f = 0 only", "f + g = lambda"], 0],
    [3, "The total differential of z = f(x, y) is", ["dz = f_x + f_y", "dz = f_x dy + f_y dx", "dz = dx dy", "dz = f_x dx + f_y dy"], 3],
    [3, "If z = f(x, y) with x and y functions of t, then dz/dt =", ["f_x + f_y", "f_x dx/dt + f_y dy/dt", "f_x dy/dt + f_y dx/dt", "dx/dt + dy/dt"], 1],
    [3, "f(x, y) = x^2 + y^2 has its minimum at", ["(1, 1)", "(1, 0)", "(0, 0)", "(0, 1)"], 2],
    [3, "If f = e^(xy), the partial derivative with respect to x is", ["y e^(xy)", "x e^(xy)", "e^(xy)", "xy e^(xy)"], 0],
    [3, "In the second derivative test, D = 0 means", ["A local minimum", "A local maximum", "A saddle point", "The test is inconclusive"], 3],
    [4, "The double integral of 1 over a region R gives", ["The volume of R", "The area of R", "The perimeter of R", "Zero"], 1],
    [4, "The double integral of 1 over 0 <= x <= 1, 0 <= y <= 1 is", ["0", "2", "1", "1/2"], 2],
    [4, "The double integral of 1 over 0 <= x <= 3, 0 <= y <= 2 is", ["6", "5", "3", "2"], 0],
    [4, "The double integral of xy over 0 <= x <= 1, 0 <= y <= 1 is", ["1", "1/2", "1/3", "1/4"], 3],
    [4, "The double integral of f(x, y) >= 0 over R gives", ["The area of R", "The volume under the surface z = f(x, y)", "The gradient of f", "The length of the boundary"], 1],
    [4, "In polar coordinates the area element dA is", ["dr dtheta", "r^2 dr dtheta", "r dr dtheta", "dx dtheta"], 2],
    [4, "In polar coordinates, x =", ["r cos theta", "r sin theta", "r tan theta", "r theta"], 0],
    [4, "The triple integral of 1 over a solid region gives its", ["Surface area", "Mass always", "Density", "Volume"], 3],
    [4, "A line integral is evaluated along a", ["Surface", "Curve", "Solid", "Point"], 1],
    [4, "The line integral of F . dr along a path gives the", ["Area under the path", "Flux of F", "Work done by F", "Curl of F"], 2],
    [4, "A field whose line integral is independent of path is", ["Conservative", "Rotational", "Discontinuous", "Periodic"], 0],
    [4, "The line integral of a conservative field round a closed curve is", ["1", "Infinite", "Equal to the area enclosed", "0"], 3],
    [4, "The theorem relating a line integral round a closed curve to a double integral over the enclosed region is", ["Rolle's theorem", "Green's theorem", "Taylor's theorem", "The mean value theorem"], 1],
    [4, "For a continuous function on a rectangle, changing the order of integration gives", ["A larger value", "The negative value", "The same value", "Zero"], 2],
    [4, "The double integral of (x + y) over 0 <= x <= 2, 0 <= y <= 1 is", ["3", "2", "4", "6"], 0],
    [4, "In cylindrical coordinates the volume element is", ["dr dtheta dz", "r^2 dr dtheta dz", "r dr dz", "r dr dtheta dz"], 3],
    [4, "The Jacobian for changing from Cartesian to polar coordinates is", ["1", "r", "r^2", "theta"], 1]
  ],
  fib: [
    [0, "The set of allowed inputs of a function is called its ____.", ["domain"]],
    [0, "The limit of sin x / x as x tends to 0 is ____.", ["1", "one"]],
    [0, "A function with f(-x) = -f(x) is called an ____ function.", ["odd"]],
    [1, "The derivative of sin x is ____ x.", ["cos"]],
    [1, "A Taylor series about x = 0 is called a ____ series.", ["maclaurin"]],
    [1, "At a stationary point, dy/dx equals ____.", ["0", "zero"]],
    [2, "The integral of 1/x is the natural ____ of |x| plus C.", ["logarithm", "log"]],
    [2, "The C in an indefinite integral is the constant of ____.", ["integration"]],
    [2, "The integral of 2x from 0 to 3 equals ____.", ["9", "nine"]],
    [3, "If f = x^2 y, the partial derivative with respect to y is x^____.", ["2", "two"]],
    [3, "A critical point where D < 0 is called a ____ point.", ["saddle"]],
    [3, "Extrema subject to a constraint are found with ____ multipliers.", ["lagrange"]],
    [4, "In polar coordinates dA = ____ dr dtheta.", ["r"]],
    [4, "A field whose line integral is independent of path is called ____.", ["conservative"]],
    [4, "A line integral round a closed curve is linked to a double integral by ____'s theorem.", ["green", "greens"]]
  ]
});
window.GUIDES = window.GUIDES || {};
GUIDES.MTH281 = `
## What this course tests

Calculus of one variable (limits, differentiation, integration), then calculus of several variables (partial derivatives, extrema, multiple and line integrals). Most marks come from applying standard rules correctly.

## 1. Limits and continuity

- Polynomial: substitute.
- 0/0 form: factorise, cancel, then substitute.
- At infinity, equal degrees: ratio of leading coefficients.
- sin x / x tends to 1 as x tends to 0.

> Continuous at a means: the limit as x tends to a equals f(a).

## 2. Differentiation

| Function | Derivative |
|---|---|
| x^n | n x^(n-1) |
| sin x | cos x |
| cos x | -sin x |
| tan x | sec^2 x |
| e^x | e^x |
| ln x | 1/x |

- **Product**: (uv)' = u v' + v u'
- **Quotient**: (u/v)' = (v u' - u v') / v^2
- **Chain**: dy/dx = dy/du times du/dx

Stationary point: dy/dx = 0. Second derivative positive means minimum; negative means maximum.

### Theorems

- **Rolle**: f(a) = f(b) gives some c with f'(c) = 0.
- **Mean value**: f'(c) = (f(b) - f(a)) / (b - a).
- **Maclaurin**: e^x = 1 + x + x^2/2! + ...

## 3. Integration

| Function | Integral |
|---|---|
| x^n | x^(n+1)/(n+1) + C |
| 1/x | ln x + C |
| e^x | e^x + C |
| cos x | sin x + C |
| sin x | -cos x + C |
| sec^2 x | tan x + C |

- By parts: integral of u dv = uv - integral of v du.
- Definite integral = F(b) - F(a) = area under curve.
- Volume of revolution about x-axis = pi times integral of y^2 dx.

## 4. Several variables

Partial derivative: differentiate with respect to one variable, hold the rest constant.

Example: f = x^2 y gives f_x = 2xy and f_y = x^2.

### Second derivative test

D = f_xx f_yy - (f_xy)^2

| D | f_xx | Result |
|---|---|---|
| > 0 | > 0 | Local minimum |
| > 0 | < 0 | Local maximum |
| < 0 | any | Saddle point |
| = 0 | any | Inconclusive |

Lagrange multipliers: solve grad f = lambda grad g with the constraint.

## 5. Multiple and line integrals

- Double integral: do the inner integral first.
- Integral of 1 over R = area of R.
- Polar: dA = r dr dtheta.
- Line integral of F . dr = work done.
- Conservative field: path independent, zero round a closed curve.
- Green's theorem: closed line integral = double integral over the region inside.

## Exam tips

- Do not forget + C on indefinite integrals.
- Cos differentiates to MINUS sin; sin integrates to MINUS cos.
- In partial derivatives, the other variable is just a number.
`;
