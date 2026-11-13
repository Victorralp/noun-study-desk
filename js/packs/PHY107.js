window.COURSES.push({
  code: "PHY107", title: "General Practical Physics I", units: 1, cat: "C", source: "noun",
  modules: [
    ["Measurement & instruments", [
      "Measurement compares an unknown quantity with a standard unit. Fundamental SI quantities: length (metre), mass (kilogram), time (second), temperature (kelvin), current (ampere), amount of substance (mole), luminous intensity (candela).",
      "Derived quantities are built from fundamental ones: area (m²), volume (m³), density (kg/m³), speed (m/s), force (newton).",
      "Metre rule: reads to 0.1 cm (1 mm). Vernier calipers: read to 0.01 cm (0.1 mm). Micrometer screw gauge: reads to 0.01 mm (0.001 cm).",
      "Vernier calipers measure internal and external diameters and depth. A micrometer screw gauge measures very small thicknesses such as the diameter of a wire.",
      "A stopwatch measures time; a beam or electronic balance measures mass; a spring balance measures weight (force); a thermometer measures temperature; a measuring cylinder measures liquid volume.",
      "Parallax error comes from reading a scale with the eye in the wrong position. Avoid it by looking perpendicular to the scale.",
      "Zero error: the instrument does not read zero when it should. Subtract a positive zero error; add a negative one."
    ]],
    ["Errors & uncertainty", [
      "No measurement is exact. Error is the difference between the measured value and the true value.",
      "Systematic errors shift every reading the same way (zero error, wrong calibration). They are not reduced by repeating readings.",
      "Random errors scatter readings above and below the true value. Reduce them by repeating the measurement and taking the mean.",
      "Accuracy: how close a reading is to the true value. Precision: how close repeated readings are to each other.",
      "Absolute error = |measured − true|. Relative (fractional) error = absolute error ÷ true value. Percentage error = relative error × 100.",
      "Combining errors: for sums and differences, add the absolute errors. For products and quotients, add the relative (percentage) errors. For a power xⁿ, multiply the relative error by n.",
      "Significant figures show the precision of a reading. Quote a result to no more figures than the least precise measurement used."
    ]],
    ["Graphs", [
      "A graph shows how one quantity depends on another. The independent variable (the one you set) goes on the horizontal x-axis; the dependent variable goes on the vertical y-axis.",
      "A good graph has a title, labelled axes with units, a sensible scale that fills more than half the page, clearly plotted points and a line of best fit.",
      "The line of best fit is a smooth line with points balanced on both sides; it need not pass through every point.",
      "Straight-line equation: y = mx + c. m is the slope (gradient) and c is the intercept on the y-axis.",
      "Slope = change in y ÷ change in x = (y₂ − y₁)/(x₂ − x₁). Use a large triangle on the line, not the plotted data points.",
      "A straight line through the origin shows direct proportion (y ∝ x).",
      "A curve can be made a straight line by choosing the right quantities: for T = 2π√(l/g), plot T² against l; the slope is 4π²/g."
    ]],
    ["Mechanics experiments", [
      "Simple pendulum: period T = 2π√(l/g). T depends on length l and g, not on the mass of the bob or (for small angles) the amplitude.",
      "Time 20 oscillations and divide by 20 to reduce timing error. Keep the angle of swing small (under about 10°).",
      "Hooke's law: extension is directly proportional to the applied force if the elastic limit is not exceeded. F = ke, where k is the force (spring) constant in N/m.",
      "Principle of moments: for a body in equilibrium, sum of clockwise moments = sum of anticlockwise moments about any point. Moment = force × perpendicular distance.",
      "Density = mass ÷ volume. The volume of an irregular solid is found by the displacement of water. Relative density = density of substance ÷ density of water (no unit).",
      "Inclined plane: the component of weight down the slope is mg sin θ and the normal reaction is mg cos θ. Coefficient of static friction μ = tan θ at the angle where sliding just starts.",
      "Archimedes' principle: upthrust on a body in a fluid equals the weight of fluid displaced."
    ]],
    ["Heat & optics experiments", [
      "Specific heat capacity c is the heat needed to raise the temperature of 1 kg of a substance by 1 K. Q = mcΔθ. Unit: J kg⁻¹ K⁻¹.",
      "Method of mixtures: heat lost by the hot body = heat gained by the cold body and calorimeter (if no heat is lost to the surroundings).",
      "Lag the calorimeter and stir the liquid to reduce heat loss and get an even temperature.",
      "Specific latent heat is the heat needed to change the state of 1 kg of a substance without a change in temperature. Q = mL.",
      "Laws of reflection: angle of incidence = angle of reflection; the incident ray, reflected ray and normal lie in the same plane.",
      "Snell's law: n = sin i ÷ sin r. Refractive index is also real depth ÷ apparent depth.",
      "Lens and mirror formula: 1/f = 1/u + 1/v. Magnification m = v/u. A converging (convex) lens has a real focus."
    ]]
  ],
  cards: [
    ["Fundamental SI quantities (first three)", "Length (m), mass (kg), time (s)."],
    ["Vernier calipers reading accuracy", "0.01 cm (0.1 mm)."],
    ["Micrometer screw gauge reading accuracy", "0.01 mm."],
    ["Parallax error", "Error from reading a scale with the eye in the wrong position."],
    ["Zero error", "Instrument does not read zero when it should."],
    ["Systematic vs random error", "Systematic: same direction every time. Random: scatters; reduce by averaging."],
    ["Accuracy vs precision", "Accuracy: closeness to true value. Precision: closeness of repeated readings."],
    ["Percentage error", "(absolute error ÷ true value) × 100."],
    ["Error in a product or quotient", "Add the relative (percentage) errors."],
    ["y = mx + c", "m = slope, c = intercept on the y-axis."],
    ["Slope", "Change in y ÷ change in x."],
    ["Period of a simple pendulum", "T = 2π√(l/g)."],
    ["Hooke's law", "F = ke: extension proportional to force within the elastic limit."],
    ["Principle of moments", "Sum of clockwise moments = sum of anticlockwise moments."],
    ["Density", "Mass ÷ volume (kg/m³)."],
    ["Heat equation", "Q = mcΔθ."],
    ["Snell's law", "n = sin i ÷ sin r."],
    ["Lens formula", "1/f = 1/u + 1/v."]
  ],
  mcq: [
    [0, "The SI unit of length is the", ["Centimetre", "Metre", "Kilometre", "Foot"], 1],
    [0, "Which of these is a fundamental quantity?", ["Mass", "Speed", "Force", "Density"], 0],
    [0, "Which instrument is best for measuring the diameter of a thin wire?", ["Metre rule", "Vernier calipers", "Micrometer screw gauge", "Tape"], 2],
    [0, "A metre rule can be read to the nearest", ["0.01 mm", "0.01 cm", "1 cm", "0.1 cm"], 3],
    [0, "Vernier calipers read to an accuracy of", ["0.01 cm", "0.1 cm", "1 cm", "0.001 cm"], 0],
    [0, "Reading a scale with the eye at the wrong angle causes", ["Zero error", "Parallax error", "Random noise", "Calibration error"], 1],
    [0, "Which instrument measures weight (a force)?", ["Beam balance", "Stopwatch", "Spring balance", "Measuring cylinder"], 2],
    [1, "An error that shifts every reading in the same direction is", ["Random", "Systematic", "Parallax-free", "Statistical"], 1],
    [1, "Random errors are reduced by", ["Using a bigger unit", "Ignoring odd readings", "Repeating readings and taking the mean", "Subtracting the zero error"], 2],
    [1, "How close a measurement is to the true value is its", ["Accuracy", "Precision", "Sensitivity", "Range"], 0],
    [1, "A length of 50 cm is measured as 49 cm. The percentage error is", ["1%", "0.5%", "5%", "2%"], 3, "1 ÷ 50 × 100 = 2%."],
    [1, "When two quantities are multiplied, the errors that add are the", ["Absolute errors", "Relative errors", "Zero errors", "Parallax errors"], 1],
    [1, "When two lengths are added, the error in the sum is found by adding the", ["Absolute errors", "Percentage errors", "Squares of the readings", "Significant figures"], 0],
    [1, "A zero error is an example of a", ["Random error", "Human reaction error", "Systematic error", "Rounding error"], 2],
    [2, "In y = mx + c, the letter m stands for the", ["Intercept", "Slope", "Origin", "Scale"], 1],
    [2, "The independent variable is plotted on the", ["Horizontal axis", "Vertical axis", "Line of best fit", "Intercept"], 0],
    [2, "A straight-line graph passing through the origin shows that y is", ["Constant", "Inversely proportional to x", "Directly proportional to x", "Independent of x"], 2],
    [2, "The slope of a line through (1, 2) and (3, 8) is", ["2", "4", "6", "3"], 3, "(8 − 2) ÷ (3 − 1) = 3."],
    [2, "To get a straight line from a simple pendulum experiment, plot", ["T against l", "T² against l", "T against l²", "l against mass"], 1],
    [2, "A line of best fit should", ["Join every point dot to dot", "Always pass through the origin", "Leave points balanced on both sides of it", "Be drawn freehand through the first and last point only"], 2],
    [3, "The period of a simple pendulum depends on its", ["Length", "Mass of bob", "Colour of bob", "Material of bob"], 0],
    [3, "If the length of a pendulum is made four times longer, its period becomes", ["Four times", "Half", "Unchanged", "Twice"], 3, "T is proportional to √l; √4 = 2."],
    [3, "Hooke's law holds provided the", ["Spring is heavy", "Elastic limit is not exceeded", "Load is zero", "Temperature is high"], 1],
    [3, "A force of 10 N stretches a spring by 0.05 m. The spring constant is", ["0.5 N/m", "2 N/m", "200 N/m", "50 N/m"], 2, "k = F ÷ e = 10 ÷ 0.05."],
    [3, "The moment of a force is force multiplied by", ["Perpendicular distance from the pivot", "Mass", "Time", "Velocity"], 0],
    [3, "The volume of an irregular solid is found by", ["Using a metre rule", "Weighing it", "Displacement of water", "A vernier scale"], 2],
    [3, "A body of mass 200 g has volume 50 cm³. Its density is", ["0.25 g/cm³", "4 g/cm³", "250 g/cm³", "150 g/cm³"], 1],
    [4, "The heat needed to raise the temperature of 1 kg of a substance by 1 K is its", ["Latent heat", "Heat capacity of the calorimeter", "Thermal conductivity", "Specific heat capacity"], 3],
    [4, "A calorimeter is lagged in order to", ["Reduce heat loss to the surroundings", "Increase its mass", "Make stirring easier", "Raise the boiling point"], 0],
    [4, "The heat needed to raise 2 kg of water (c = 4200 J/kg K) by 5 K is", ["4200 J", "21000 J", "42000 J", "8400 J"], 2, "Q = mcΔθ = 2 × 4200 × 5."],
    [4, "According to the laws of reflection, the angle of incidence equals the angle of", ["Refraction", "Reflection", "Deviation", "Emergence"], 1],
    [4, "Refractive index is given by", ["sin i ÷ sin r", "sin r ÷ sin i", "i ÷ r", "u ÷ v"], 0],
    [4, "An object 30 cm from a converging lens gives a real image 60 cm away. The focal length is", ["90 cm", "30 cm", "45 cm", "20 cm"], 3, "1/f = 1/30 + 1/60 = 3/60, so f = 20 cm."]
  ],
  fib: [
    [0, "The SI unit of mass is the ____.", ["kilogram", "kilogramme", "kg"]],
    [0, "The error caused by wrong positioning of the eye when reading a scale is ____ error.", ["parallax"]],
    [1, "Errors reduced by repeating readings and taking the mean are ____ errors.", ["random"]],
    [1, "Percentage error = (absolute error ÷ true value) × ____.", ["100", "hundred"]],
    [2, "In y = mx + c, c is the ____ on the y-axis.", ["intercept"]],
    [2, "Change in y divided by change in x is the ____ of a line.", ["slope", "gradient"]],
    [3, "The time for one complete oscillation of a pendulum is its ____.", ["period"]],
    [3, "The law stating that extension is proportional to the applied force is ____ law.", ["hooke's", "hookes", "hooke"]],
    [4, "Heat energy is calculated from Q = mc____.", ["δθ", "Δθ", "dθ", "delta theta", "θ", "δt", "Δt", "dt", "t"], "Mass × specific heat capacity × temperature change."],
    [4, "The ratio sin i ÷ sin r is the refractive ____.", ["index"]]
  ]
});
window.GUIDES = window.GUIDES || {};
GUIDES.PHY107 = `
## How to use this guide
PHY107 (General Practical Physics I) is a 1-unit lab course. The e-exam does not ask you to do an experiment. It asks **which instrument, which error, how to plot the graph, and small calculations** from standard experiments. Learn the instrument accuracies, the error rules and the formulas below.

> **Exam tip:** NOUN material for this course is PHY191 (Introductory Practical Physics I). Open it from the Course material box for the full text.

## 1. Measurement
Measurement compares a quantity with a standard unit.

| Fundamental quantity | SI unit | Symbol |
|---|---|---|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Temperature | kelvin | K |
| Electric current | ampere | A |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

**Derived quantities** combine these: area, volume, density, speed, force, pressure.

### Instruments
| Instrument | Measures | Reads to |
|---|---|---|
| Metre rule | Length | 0.1 cm (1 mm) |
| Vernier calipers | Diameters, depth | 0.01 cm (0.1 mm) |
| Micrometer screw gauge | Wire diameter, thin sheets | 0.01 mm |
| Stopwatch | Time | 0.01 s (digital) |
| Beam / electronic balance | Mass | — |
| Spring balance | Weight (force) | — |
| Measuring cylinder | Volume of liquid | — |
| Thermometer | Temperature | — |

- **Parallax error**: eye not level with the mark. Look straight at the scale.
- **Zero error**: instrument does not start at zero. Correct every reading.
- Read a liquid level at the **bottom of the meniscus** (water).

## 2. Errors
| Type | Cause | Cure |
|---|---|---|
| Systematic | Zero error, bad calibration, same wrong method | Correct the instrument or method |
| Random | Unpredictable changes, reaction time | Repeat and take the mean |

- **Accuracy**: closeness to the true value.
- **Precision**: closeness of repeated readings to each other.

### Formulas
- Absolute error = measured value − true value (size only)
- Relative error = absolute error ÷ true value
- Percentage error = relative error × 100

**Example:** true length 50 cm, measured 49 cm. Absolute error 1 cm; relative error 0.02; percentage error **2%**.

### Combining errors
| Operation | Rule |
|---|---|
| A + B or A − B | Add absolute errors |
| A × B or A ÷ B | Add relative (percentage) errors |
| Aⁿ | Multiply relative error by n |

> **Exam tip:** Volume of a cube V = l³. If the length has 1% error, the volume has **3%** error.

## 3. Graphs
1. Independent variable on the **x-axis**, dependent on the **y-axis**
2. Label both axes with quantity and unit
3. Choose a scale that uses most of the page
4. Plot points clearly
5. Draw the **line of best fit**
6. Find the slope from a **large triangle** on the line

Straight line: **y = mx + c**. Slope m = (y₂ − y₁)/(x₂ − x₁). Intercept c is the value of y when x = 0.

| Law | Plot | Slope gives |
|---|---|---|
| T = 2π√(l/g) | T² against l | 4π²/g |
| F = ke | F against e | k |
| V = IR | V against I | R |
| n = sin i / sin r | sin i against sin r | n |

## 4. Mechanics experiments
### Simple pendulum
- T = 2π√(l/g); so g = 4π²l / T²
- Period depends on **length** and **g** only
- Time 20 swings, divide by 20
- Keep the angle small

### Hooke's law
Extension is proportional to load within the **elastic limit**. F = ke. Slope of load–extension graph = k (N/m).

### Moments
Moment = force × perpendicular distance from the pivot (N m). In equilibrium, clockwise moments = anticlockwise moments. Used to find an unknown mass with a metre rule balanced on a knife edge.

### Density
Density = mass ÷ volume. Regular solid: measure the sides. Irregular solid: displacement of water in a measuring cylinder. **Relative density** = density ÷ density of water.

### Inclined plane
- Force down the slope = mg sin θ
- Normal reaction = mg cos θ
- μ = tan θ when the block just starts to slide

## 5. Heat experiments
- **Specific heat capacity**: Q = mcΔθ
- **Method of mixtures**: heat lost = heat gained
- **Specific latent heat**: Q = mL (state changes, temperature constant)
- Precautions: lag the calorimeter, stir, transfer the hot solid quickly, read the thermometer at eye level

**Example:** 2 kg of water heated by 5 K. Q = 2 × 4200 × 5 = **42 000 J**.

## 6. Optics experiments
- **Reflection**: angle of incidence = angle of reflection
- **Refraction (glass block)**: n = sin i ÷ sin r = real depth ÷ apparent depth
- **Lens / mirror**: 1/f = 1/u + 1/v; magnification m = v/u

**Example:** u = 30 cm, v = 60 cm. 1/f = 1/30 + 1/60 = 3/60, so f = **20 cm**.

## 7. Writing a lab report
1. Title and date
2. Aim
3. Apparatus
4. Diagram
5. Method (procedure)
6. Observations: table of readings with units
7. Graph and calculations
8. Result and conclusion
9. Precautions and sources of error

## Quick revision list
- Vernier 0.01 cm; micrometer 0.01 mm; metre rule 0.1 cm
- Random error: average. Systematic error: correct the instrument
- Products and quotients: add percentage errors
- T² against l is a straight line; slope 4π²/g
- F = ke, Q = mcΔθ, n = sin i / sin r, 1/f = 1/u + 1/v
`;
