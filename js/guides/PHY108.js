window.GUIDES = window.GUIDES || {};
GUIDES.PHY108 = `
## How to use this guide
PHY108 (General Physics Practical II) tests the **theory behind laboratory experiments** in electricity, optics and magnetism, plus **measurement, errors and graph work**. E-exam questions ask for formulas, units, apparatus, procedure steps, precautions, sources of error, and quick calculations (slope, resistance, focal length, refractive index). For each experiment learn: **aim, apparatus, formula, what to plot, what the slope/intercept gives, precautions**.

> **Exam tip:** Most practical calculations reduce to "plot y against x, slope = something". Memorise which graph goes with which experiment (see the table near the end).

## 1. Measurement and units
### SI base quantities
| Quantity | SI unit | Symbol |
|---|---|---|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

### Derived units used in PHY108
| Quantity | Unit | In base units / relation |
|---|---|---|
| Charge | coulomb (C) | A s; Q = It |
| Potential difference / e.m.f. | volt (V) | J/C; V = W/Q |
| Resistance | ohm (Ω) | V/A |
| Resistivity | ohm-metre (Ω m) | ρ = RA/L |
| Power | watt (W) | J/s; P = IV |
| Energy | joule (J) | W = IVt |
| Capacitance | farad (F) | C/V |
| Magnetic flux density | tesla (T) | N/(A m) |
| Magnetic flux | weber (Wb) | T m² |
| Power of a lens | dioptre (D) | 1/f with f in metres |

### Prefixes
pico (p) = 10⁻¹², nano (n) = 10⁻⁹, micro (µ) = 10⁻⁶, milli (m) = 10⁻³, centi (c) = 10⁻², kilo (k) = 10³, mega (M) = 10⁶, giga (G) = 10⁹.

### Measuring instruments
| Instrument | Typical precision | Used for |
|---|---|---|
| Metre rule | 0.1 cm (1 mm) | Lengths (meter bridge wire, object/image distances) |
| Vernier calipers | 0.01 cm (0.1 mm) | External/internal diameters, depth |
| Micrometer screw gauge | 0.001 cm (0.01 mm) | Diameter of wire (for resistivity) |
| Ammeter | Scale-dependent | Current — connected in **series**; low resistance |
| Voltmeter | Scale-dependent | Potential difference — connected in **parallel**; high resistance |
| Galvanometer | Very sensitive | Detects small currents / null (balance) point |
| Stopwatch | 0.01 s (0.1 s reaction-limited) | Timing |

- **Vernier reading** = main scale reading + (coinciding vernier division × least count).
- **Micrometer reading** = sleeve reading + (thimble division × 0.01 mm). Check and correct **zero error**.
- **Zero error**: instrument does not read zero when it should. Corrected reading = observed reading minus zero error (positive zero error is subtracted; negative zero error is effectively added).

### Significant figures and rounding
- Non-zero digits are significant; zeros between non-zero digits are significant; leading zeros are not; trailing zeros after a decimal point are significant. Example: 0.00450 has 3 s.f.
- In multiplication/division, give the answer to the **least number of significant figures** in the data. In addition/subtraction, keep the least number of **decimal places**.
- Record readings to the precision of the instrument (metre rule: 45.0 cm, not 45 cm).

## 2. Errors and uncertainty
### Types of error
| Type | Cause | Reduced by |
|---|---|---|
| **Systematic error** | Consistent bias in one direction: zero error, faulty calibration, wrong technique, parallax done the same way each time | Correcting zero error, calibrating, improving method; **not** reduced by repeating |
| **Random error** | Unpredictable variations: reaction time, fluctuating readings, judging a scale | **Repeating readings and averaging**; plotting a graph |
| **Parallax error** | Eye not perpendicular to scale | Read with eye directly above/level with the mark; use a mirror behind the pointer |
| **Gross / personal error** | Mistakes (misreading, wrong recording) | Care, repeat readings |

- **Accuracy**: how close a measurement is to the true value. **Precision**: how close repeated measurements are to each other (and the fineness of the instrument scale).
- **Absolute error** (uncertainty), e.g. L = 50.0 ± 0.1 cm. Usually half the smallest division (or the smallest division) of the instrument.
- **Relative (fractional) error** = absolute error ÷ measured value. **Percentage error** = relative error × 100%.
- Example: L = 50.0 ± 0.1 cm → percentage error = 0.1/50.0 × 100 = 0.2%.

### Combining errors
- **Addition or subtraction** (y = a + b or a − b): **add the absolute errors**. Δy = Δa + Δb.
- **Multiplication or division** (y = ab or a/b): **add the fractional (percentage) errors**. Δy/y = Δa/a + Δb/b.
- **Powers** (y = aⁿ): fractional error is multiplied by n. Δy/y = n × Δa/a. Example: area of wire A = πd²/4 → percentage error in A = 2 × percentage error in d.
- **Mean** of readings = sum ÷ number of readings. **Mean absolute deviation** gives the spread.

## 3. Graphs in practicals
- Plot the **dependent variable on the y-axis** and the **independent variable** (the one you change) on the x-axis — unless the question says "plot V against I" (then V is on y).
- Choose a **scale** that makes the graph fill at least half the page; use simple scales (1, 2, 5 units per cm). Label axes with **quantity and unit** (e.g. V / V, I / A).
- Draw the **line of best fit**: a straight line with points evenly scattered on both sides; do not join dot to dot. Identify and ignore anomalous points.
- **Slope (gradient)** = Δy ÷ Δx using a **large triangle** (at least half the line) — not data points. Give units of slope (y unit ÷ x unit).
- **Intercept**: value of y where x = 0 (y-intercept) or of x where y = 0 (x-intercept).
- Straight-line equation: **y = mx + c** (m = slope, c = y-intercept). Linearise relations so they can be plotted as straight lines. Example: 1/v + 1/u = 1/f → plot 1/v against 1/u; slope = −1; intercepts = 1/f.
- Proportional relation (y = kx) gives a straight line **through the origin**.

## 4. Basic electricity theory
- **Current (I)**: rate of flow of charge, I = Q/t. Conventional current flows from + to −; electrons flow from − to +.
- **Potential difference (V)**: work done per unit charge moving between two points, V = W/Q.
- **Electromotive force (e.m.f., E)**: energy per unit charge supplied by a source when no current flows (open-circuit voltage). Measured with a **high-resistance voltmeter** or **potentiometer**.
- **Resistance (R)**: opposition to current; R = V/I.
- **Resistivity (ρ)**: R = ρL/A, so **ρ = RA/L**. Depends on material and temperature, not on dimensions. A = πd²/4 (d from micrometer).
- Resistance increases with **length** and **temperature** (for metals), decreases with **cross-sectional area**.
- **Conductance** G = 1/R (siemens, S). **Conductivity** σ = 1/ρ.
- **Electrical power** P = IV = I²R = V²/R. Energy W = IVt. Commercial unit: kilowatt-hour (kWh) = 3.6 × 10⁶ J.
- **Kirchhoff's current law**: total current into a junction = total current out (conservation of charge).
- **Kirchhoff's voltage law**: in a closed loop, sum of e.m.f.s = sum of potential drops (conservation of energy).

### Circuit symbols and components
Cell, battery, resistor, rheostat (variable resistor), key/switch, ammeter (A in circle), voltmeter (V in circle), galvanometer (G), resistance box, jockey (sliding contact), fuse, bulb, diode.
- **Rheostat**: varies current in the circuit. **Resistance box**: provides known resistances. **Jockey**: makes contact along a wire at chosen points — tap it, do not slide it (sliding scrapes the wire and changes its cross-section).

## 5. Experiment: Ohm's law
- **Ohm's law**: the current through a metallic conductor is **directly proportional to the potential difference** across it, provided temperature and other physical conditions remain constant. V = IR.
- **Apparatus**: battery, key, rheostat, ammeter, voltmeter, resistor (or wire), connecting wires.
- **Circuit**: ammeter in series with resistor; voltmeter in parallel across resistor; rheostat in series to vary current.
- **Procedure**: close key; adjust rheostat to get at least 5–6 pairs of readings of V and I; open key between readings to avoid heating.
- **Graph**: plot V (y) against I (x) → straight line through the origin; **slope = R**. (If I is plotted against V, slope = 1/R.)
- **Ohmic conductors** (metals at constant temperature) obey Ohm's law. **Non-ohmic**: filament lamp (curve — resistance rises with temperature), diode (conducts one way), thermistor (resistance falls as temperature rises), electrolytes.
- **Precautions**: tight connections; open key when not taking readings (prevents heating); avoid parallax when reading meters; check zero of meters; use small currents.

## 6. Resistors in series and parallel
| Arrangement | Effective resistance | Current | Voltage |
|---|---|---|---|
| **Series** | R = R₁ + R₂ + R₃ | Same through each resistor | Divides: V = V₁ + V₂ + V₃ |
| **Parallel** | 1/R = 1/R₁ + 1/R₂ + 1/R₃ | Divides: I = I₁ + I₂ + I₃ | Same across each resistor |
- Two in parallel: R = R₁R₂ ÷ (R₁ + R₂). Example: 6 Ω and 3 Ω in parallel → 18/9 = 2 Ω.
- Parallel effective resistance is **always less than the smallest** resistor. Series is greater than the largest.
- n equal resistors R: series = nR; parallel = R/n.
- **Experiment**: measure V and I for each resistor alone, then for series and parallel combinations; compare R = V/I with calculated values.
- **Cells**: in series E total = E₁ + E₂ and internal resistances add; identical cells in parallel give the same e.m.f. with internal resistance r/n.

## 7. E.m.f. and internal resistance of a cell
- **Internal resistance (r)**: resistance inside the cell itself. Some e.m.f. is "lost" driving current through it.
- **E = I(R + r) = V + Ir**, where V = terminal p.d. across the external resistor R. **Lost volts** = Ir.
- Rearranged: **V = E − Ir**.
- **Experiment**: connect cell, key, ammeter, resistance box (or rheostat) in series, voltmeter across cell terminals. Vary R and record V and I.
- **Graph**: plot V (y) against I (x) → straight line with **negative slope**. **Slope = −r**; **y-intercept = E** (terminal p.d. when I = 0).
- Alternative: E = I(R + r) → 1/I = R/E + r/E. Plot **1/I against R**: slope = 1/E, y-intercept = r/E (so r = intercept ÷ slope); x-intercept = −r.
- When no current flows (open circuit), terminal p.d. = e.m.f.
- **Short circuit** current = E/r (maximum).
- **Precautions**: open key between readings (cell polarises and e.m.f. drops if current flows continuously); use fresh cell; avoid parallax.

## 8. Experiment: Wheatstone bridge and meter bridge
### Wheatstone bridge principle
Four resistors P, Q, R, S arranged in a diamond with a galvanometer across the middle. At **balance** (null deflection, no current through galvanometer): **P/Q = R/S**.

### Meter bridge (slide-wire bridge)
- A practical Wheatstone bridge: a **uniform resistance wire 1 m (100 cm) long** stretched on a metre rule, with a known resistance R (resistance box) and an unknown X in the two gaps, a galvanometer and a jockey.
- At the balance point the jockey is at length l from the end next to X. Since resistance of wire ∝ length:
~~~
X / R = l / (100 - l)
X = R × l / (100 - l)
~~~
- Example: R = 4 Ω, balance at l = 60 cm → X = 4 × 60/40 = 6 Ω.
- **Interchange X and R** and repeat, then average — eliminates **end errors** (extra resistance at the ends of the wire due to contacts and connecting strips).
- Best accuracy when balance point is **near the middle** of the wire (between 30 and 70 cm) — choose R accordingly.
- **Resistivity** of a wire: find X for a length L of the wire, measure diameter d with micrometer at several points, then ρ = XA/L with A = πd²/4.
- **Plotting**: for different lengths L of test wire, find X each time and plot X against L: slope = ρ/A.
- **Precautions**: tap the jockey gently (do not slide it); keep balance point near the middle; clean wire ends; open key when not in use (prevents heating, which changes resistance); interchange X and R.

## 9. Experiment: Potentiometer
- A **potentiometer** is a long uniform wire carrying a steady current from a **driver cell (accumulator)**. The p.d. along the wire is proportional to the length (V ∝ l) since the wire is uniform.
- It measures e.m.f. **without drawing current** from the cell under test at balance — so it measures true e.m.f. (more accurate than a voltmeter, which draws some current).
- **Driver cell e.m.f. must be greater** than the e.m.f. being measured; positive terminals of driver and test cell must be connected to the **same end** of the wire. Otherwise no balance point is found.
- **Comparing e.m.f.s of two cells**: balance lengths l₁ and l₂ → **E₁/E₂ = l₁/l₂**.
- **Measuring internal resistance**: balance length l₀ with cell on open circuit (gives E); connect resistor R across the cell, new balance length l → V. Then:
~~~
r = R (l0 - l) / l
~~~
- Plot **1/l against 1/R**: slope = r/l₀, intercept = 1/l₀ (so r = slope ÷ intercept).
- **Measuring small currents / calibrating ammeter or voltmeter**: with a standard cell or standard resistor.
- **Potential gradient** k = V/L (volts per metre of wire); e.m.f. E = k × l.
- **Sensitivity** increases with a **longer wire** (smaller potential gradient).
- **Precautions**: driver cell steady (fully charged accumulator); same polarity connections; tap jockey; use a protective high resistance in series with the galvanometer at first, then remove it near balance.

## 10. Other electrical experiments
- **Charging/discharging a capacitor (RC circuit)**: voltage across capacitor rises exponentially when charging and falls exponentially when discharging. **Time constant τ = RC** (time for voltage to fall to about 37% of initial when discharging, or rise to about 63% of maximum when charging). Plot ln V against t when discharging: slope = −1/RC.
- Capacitors: series 1/C = 1/C₁ + 1/C₂; parallel C = C₁ + C₂ (opposite of resistors). Q = CV; energy = ½CV².
- **Diode characteristic**: forward bias conducts after about 0.6–0.7 V (silicon) or 0.2–0.3 V (germanium); reverse bias very small current until breakdown.
- **Joule's law of heating**: heat H = I²Rt. Used to find specific heat capacity: IVt = mcΔθ.
- **Thermistor**: NTC thermistor resistance decreases as temperature increases.

## 11. Optics: reflection
- **Laws of reflection**: (1) the incident ray, reflected ray and normal at the point of incidence all lie in the **same plane**; (2) **angle of incidence = angle of reflection** (i = r).
- **Plane mirror image**: virtual, upright, same size, laterally inverted, as far behind the mirror as the object is in front.
- Rotating a mirror through angle θ rotates the reflected ray through **2θ**.
- Number of images between two mirrors inclined at θ: n = 360/θ − 1.
- **Pin method / ray tracing**: use optical pins and a plane mirror on drawing board; locate reflected rays by aligning pins and their images (**no-parallax method** — the pin and image appear to move together when the eye moves).

### Curved mirrors
- **Concave (converging)** mirror and **convex (diverging)** mirror.
- **Principal focus F**, **focal length f**, **centre of curvature C**, **radius of curvature r**. **f = r/2**.
- **Mirror formula**: 1/f = 1/u + 1/v (real-is-positive convention: real distances positive, virtual negative).
- **Magnification** m = v/u = image height ÷ object height.
| Object position (concave mirror) | Image |
|---|---|
| At infinity | At F; real, inverted, diminished (point) |
| Beyond C | Between F and C; real, inverted, diminished |
| At C | At C; real, inverted, same size |
| Between C and F | Beyond C; real, inverted, magnified |
| At F | At infinity |
| Between F and mirror | Behind mirror; virtual, upright, magnified (shaving/makeup mirror) |
- **Convex mirror** always gives a virtual, upright, diminished image — wide field of view (driving mirrors, security mirrors).
- Uses of concave mirrors: shaving mirror, dentist's mirror, reflectors in torches and headlamps (source at F gives parallel beam), solar concentrators.
- **Experiment (concave mirror f)**: use object pin or illuminated object; locate real image on screen or by no-parallax; for various u, measure v. Plot **1/v against 1/u** → straight line with intercepts equal to 1/f on both axes; or plot **uv against (u + v)** → slope = f. Rough f: focus image of a distant object (window) on a screen.
- Object at C: image coincides with object (no parallax) → u = v = r = 2f.

## 12. Optics: refraction and Snell's law
- **Refraction**: change in direction of light as it passes obliquely from one medium to another, due to change in speed.
- **Laws of refraction**: (1) incident ray, refracted ray and normal lie in the same plane; (2) **Snell's law**: sin i ÷ sin r = constant = **refractive index n** (for a given pair of media and colour of light).
- **n = sin i / sin r = speed of light in vacuum (air) ÷ speed in medium = real depth ÷ apparent depth**.
- Light bends **towards the normal** when going into a denser medium (air to glass) and **away from the normal** going to a less dense medium.
- Refractive index of glass ≈ 1.5; water ≈ 1.33.
- **Real and apparent depth**: an object under water appears raised. n = real depth ÷ apparent depth. **Displacement** = real depth − apparent depth.
- **Experiment (glass block)**: trace outline of rectangular glass block on paper; draw normal; fix pins on incident ray; view through block and fix pins in line with images; join to get refracted ray; measure i and r for several angles.
- **Graph**: plot **sin i (y) against sin r (x)** → straight line through origin, **slope = n**.
- Emergent ray from a parallel-sided block is **parallel to the incident ray** but **laterally displaced**. Lateral displacement increases with angle of incidence and block thickness.
- **Precautions**: pins upright and far apart (at least 5 cm); view the bases of the pins; sharp pencil; do not move block during experiment; angles of incidence between 20° and 70°.

### Prism
- Light passing through a triangular prism is **deviated** towards the base.
- **Angle of deviation D** depends on angle of incidence; minimum deviation D_min occurs when the ray passes symmetrically.
~~~
n = sin((A + Dmin)/2) / sin(A/2)      (A = angle of prism)
~~~
- Experiment: plot D (y) against i (x) → U-shaped curve; lowest point gives D_min.
- **Dispersion**: white light splits into colours (ROYGBIV) because n differs for each colour — violet deviated most, red least.

## 13. Critical angle and total internal reflection
- **Critical angle (c)**: the angle of incidence in the denser medium for which the angle of refraction in the less dense medium is **90°**.
- **n = 1 / sin c** (light going from the medium to air). Glass (n = 1.5): c ≈ 42°. Water (n = 1.33): c ≈ 49°.
- **Total internal reflection (TIR)** occurs when: (1) light travels from a **denser to a less dense medium**; and (2) **angle of incidence exceeds the critical angle**.
- Applications: **optical fibres** (communication, endoscopes), **prism periscopes and binoculars** (45° prisms turn light through 90° or 180°), mirages, sparkle of diamond (c ≈ 24°), cat's eyes reflectors.
- **Experiment**: use semicircular glass block; direct ray at the centre of the flat face from the curved side; increase angle until the refracted ray just grazes the surface; measure c. n = 1/sin c.

## 14. Lenses
- **Converging (convex)** lens: thicker at centre, brings parallel rays to a real focus. **Diverging (concave)** lens: thinner at centre, spreads rays from a virtual focus.
- **Lens formula**: 1/f = 1/u + 1/v (real-is-positive: converging lens f positive, diverging lens f negative).
- **Magnification** m = v/u = image height ÷ object height.
- **Power** P = 1/f (f in metres), unit **dioptre (D)**. Converging lens: positive power. Example: f = 20 cm = 0.2 m → P = +5 D.
- Lenses in contact: 1/F = 1/f₁ + 1/f₂ (powers add: P = P₁ + P₂).
| Object position (convex lens) | Image | Use |
|---|---|---|
| At infinity | At F; real, inverted, diminished | Telescope objective |
| Beyond 2F | Between F and 2F; real, inverted, diminished | Camera, eye |
| At 2F | At 2F; real, inverted, same size | Photocopier |
| Between 2F and F | Beyond 2F; real, inverted, magnified | Projector |
| At F | At infinity | Spotlight |
| Between F and lens | Same side as object; virtual, upright, magnified | **Magnifying glass** |
- Diverging lens always: virtual, upright, diminished image. Used to correct **short sight (myopia)**. Converging lens corrects **long sight (hypermetropia)**.
- **Experiment (focal length of converging lens)**: rough f by focusing a distant object on a screen. Then for different u, find v (image on screen, or by no-parallax with pins). Plot **1/v against 1/u** → straight line; intercepts on both axes = 1/f. Or plot **uv against (u + v)**: slope = f. Or plot **m against v**: m = v/f − 1, slope = 1/f, intercept = −1.
- **Displacement method**: object and screen a fixed distance D apart (D > 4f); two lens positions give sharp images, separated by d. f = (D² − d²) ÷ 4D.
- **Minimum object–image distance** for a real image = **4f** (when u = v = 2f).
- **Precautions**: object, lens and screen centres in a straight line (coaxial); measure distances from the optical centre of the lens; sharp images; work in a darkened room for a bright image.

## 15. Magnetism
### Basic properties
- Magnets attract iron, nickel, cobalt (and their alloys) — **ferromagnetic** materials.
- **Like poles repel; unlike poles attract** (the law of magnetic poles). Repulsion is the **sure test** for a magnet.
- A freely suspended magnet sets in the **north–south direction**. The pole pointing north is the north-seeking (N) pole.
- **Magnetic field**: region around a magnet where a magnetic force is felt. **Field lines (lines of force)**: show direction (the way a free N pole would move) and strength (closeness).
- Properties of field lines: run **from N to S outside** the magnet (S to N inside); **never cross**; closer together where field is stronger (near poles); form closed loops.
- **Plotting field lines**: (1) **iron filings** sprinkled on paper over a magnet and tapped (shows pattern, not direction); (2) **plotting compass** — mark positions of compass needle ends step by step, join dots (shows direction).
- **Magnetisation methods**: stroking (single touch, double touch), electrical method (solenoid with d.c.), induction. **Demagnetisation**: heating, hammering, solenoid with alternating current while withdrawing the magnet.
- **Soft iron**: easily magnetised and demagnetised — electromagnets, transformer cores. **Steel**: hard to magnetise but retains magnetism — permanent magnets.
- **Magnetic screening (shielding)**: soft iron ring diverts field lines around a region (protects watches, instruments).
- **Domain theory**: in a magnetic material, tiny regions (domains) act like small magnets; in a magnetised material they are aligned.

### Earth's magnetic field
- The Earth behaves like a huge bar magnet with its **S pole near geographic North**.
- **Angle of declination (variation)**: angle between magnetic meridian and geographic meridian.
- **Angle of dip (inclination)**: angle between Earth's field direction and the horizontal; 0° at the magnetic equator, 90° at the magnetic poles. Measured with a **dip circle**.
- Earth's field has horizontal component H and vertical component V: tan(dip) = V/H.

### Neutral point
- A **neutral point** is a point where the magnetic field due to the magnet is **exactly cancelled by the Earth's horizontal field** — resultant field is zero; a compass placed there points in **no particular direction**.
- **Bar magnet with N pole pointing geographic north**: neutral points lie on the **east–west line (equatorial axis)**, on either side of the magnet.
- **Bar magnet with N pole pointing geographic south**: neutral points lie on the **north–south line (axial line)**, beyond each pole.
- Two like poles facing each other: neutral point midway (if equal strength).
- **Experiment**: place magnet on paper in the specified orientation; plot field lines with compass; locate points where the compass needle shows no definite direction; mark the two neutral points.

### Electromagnetism (basics)
- A current-carrying conductor produces a magnetic field (Oersted). **Right-hand grip rule**: thumb along current, fingers curl in field direction.
- **Solenoid** field is like a bar magnet's. Strength increases with **current, number of turns, and a soft-iron core**.
- **Force on a conductor in a field**: F = BIL sin θ; direction by **Fleming's left-hand rule** (First finger = Field, seCond finger = Current, thuMb = Motion). Basis of the **electric motor**.
- **Electromagnetic induction** (Faraday): changing magnetic flux induces e.m.f.; **Lenz's law**: the induced current opposes the change producing it. **Fleming's right-hand rule** for generators.
- Transformer: Vs/Vp = Ns/Np.

## 16. Summary: which graph, what slope
| Experiment | Plot (y against x) | Slope / intercept gives |
|---|---|---|
| Ohm's law | V against I | Slope = R |
| Internal resistance | V against I | Slope = −r; y-intercept = E |
| Internal resistance (alt.) | 1/I against R | Slope = 1/E; intercept = r/E |
| Resistivity | R against L | Slope = ρ/A |
| Potentiometer internal resistance | 1/l against 1/R | r = slope ÷ intercept |
| Refraction (glass block) | sin i against sin r | Slope = n |
| Real/apparent depth | Real depth against apparent depth | Slope = n |
| Lens or mirror | 1/v against 1/u | Intercepts = 1/f |
| Lens or mirror | uv against (u + v) | Slope = f |
| Lens magnification | m against v | Slope = 1/f; intercept = −1 |
| Prism | D against i | Minimum point = D_min |
| Capacitor discharge | ln V against t | Slope = −1/RC |

## 17. General precautions and sources of error
- Avoid **parallax** when reading scales (eye perpendicular).
- Check and correct **zero errors** of meters and gauges.
- **Open the key** when not taking readings (prevents heating and cell polarisation).
- Ensure **clean, tight connections** (sandpaper wire ends).
- **Repeat readings** and take the mean.
- **Tap, do not slide**, the jockey.
- In optics: pins vertical and widely spaced, look at pin **bases**, coaxial alignment, sharp images.
- In magnetism: keep other magnets and iron objects away from the setup.
- Report: typical sources of error include parallax, zero error, heating of wire, end errors, difficulty locating a sharp image, non-uniform wire.

## Quick revision checklist
- SI units, derived units, prefixes; instrument precision; vernier and micrometer readings; zero error.
- Systematic vs random error; accuracy vs precision; percentage error; combining errors (add absolute for ±, add fractional for × ÷, multiply by n for powers).
- Graph rules: axes, scales, best-fit line, slope from large triangle, intercepts, y = mx + c.
- Ohm's law statement, circuit, V–I graph; ohmic vs non-ohmic.
- Series vs parallel resistors; product-over-sum formula.
- E = V + Ir; V–I graph gives E (intercept) and r (−slope).
- Meter bridge X = Rl/(100 − l); end errors; balance near middle; resistivity ρ = RA/L.
- Potentiometer: E₁/E₂ = l₁/l₂; r = R(l₀ − l)/l; driver cell larger e.m.f.; same polarity.
- Laws of reflection; mirror formula; f = r/2; concave mirror image table.
- Snell's law; n = sin i/sin r = real/apparent depth; sin i vs sin r graph; glass block procedure.
- Critical angle n = 1/sin c; TIR conditions and applications.
- Lens formula; power in dioptres; convex lens image table; 1/v vs 1/u; displacement method.
- Magnetic poles law; field line properties; plotting methods; Earth's field, dip and declination; neutral points (equatorial when N points north; axial when N points south).
`;
