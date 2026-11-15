window.COURSES.push({
  code: "PHY102", title: "Electricity, Magnetism and Modern Physics", units: 3, cat: "C", source: "noun",
  modules: [
    ["Electric charge, force & field", [
      "There are two kinds of charge, positive and negative. Like charges repel; unlike charges attract. The SI unit of charge is the coulomb (C). The charge on an electron is about -1.6 x 10^-19 C.",
      "Conductors let charge flow easily; insulators do not.",
      "Coulomb's law: the force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance between them. F = k q1 q2 / r^2. Doubling the distance makes the force one quarter.",
      "Electric field strength E is the force per unit positive charge, E = F/q, measured in N/C (or V/m). Field lines point from positive to negative charge.",
      "Electric potential is the work done per unit charge, measured in volts. One volt is one joule per coulomb.",
      "Gauss's law: the total electric flux through a closed surface is proportional to the charge enclosed.",
      "Capacitance C = Q/V, measured in farads. Energy stored = 1/2 C V^2. In parallel, capacitances add: C = C1 + C2. In series, 1/C = 1/C1 + 1/C2."
    ]],
    ["Direct-current circuits & instruments", [
      "Current is the rate of flow of charge, I = Q/t, measured in amperes. Ohm's law: V = IR. Resistance is measured in ohms; resistivity in ohm metres.",
      "Resistors in series: R = R1 + R2. In parallel: 1/R = 1/R1 + 1/R2.",
      "Power P = IV = I^2 R = V^2 / R, measured in watts.",
      "A cell of emf E and internal resistance r gives a terminal p.d. V = E - Ir.",
      "Kirchhoff's first (junction) law: the total current entering a junction equals the total leaving it (conservation of charge). Second (loop) law: the sum of emfs round a loop equals the sum of p.d.s (conservation of energy).",
      "An ammeter is connected in series and has low resistance; a voltmeter is connected in parallel and has high resistance. A galvanometer becomes an ammeter with a low-resistance shunt in parallel, and a voltmeter with a high-resistance multiplier in series.",
      "A Wheatstone bridge (and metre bridge) measures resistance. A potentiometer compares emfs and measures p.d. without drawing current."
    ]],
    ["Magnetism", [
      "Like magnetic poles repel; unlike poles attract. Magnetic flux density B is measured in tesla (T); magnetic flux in weber (Wb).",
      "Force on a moving charge: F = q v B sin theta. A charge moving parallel to the field feels no force; one moving perpendicular to a uniform field moves in a circle.",
      "Force on a current-carrying conductor: F = B I L sin theta. Its direction is given by Fleming's left-hand rule.",
      "The Biot-Savart law gives the field of a current element. Ampere's law relates the line integral of B round a closed path to the current enclosed.",
      "Field near a long straight wire: B = mu0 I / (2 pi r). Inside a long solenoid: B = mu0 n I. Parallel wires carrying currents in the same direction attract.",
      "Ferromagnetic materials (iron, nickel, cobalt) are strongly attracted; paramagnetic materials are weakly attracted; diamagnetic materials are weakly repelled. Above the Curie temperature a ferromagnet loses its ferromagnetism.",
      "Earth's magnetism: declination is the angle between the geographic and magnetic meridians; dip (inclination) is the angle the field makes with the horizontal."
    ]],
    ["Electromagnetic induction & alternating current", [
      "Faraday's law: the induced emf is proportional to the rate of change of magnetic flux linkage. Lenz's law: the induced current flows so as to oppose the change causing it (conservation of energy).",
      "Inductance is measured in henry. Energy stored in an inductor = 1/2 L I^2.",
      "A generator (dynamo) converts mechanical energy to electrical energy; a motor does the reverse.",
      "A transformer works by mutual induction and only with alternating current. Vs/Vp = Ns/Np. A step-up transformer has more secondary turns than primary turns. Eddy-current losses are reduced by laminating the core.",
      "For alternating current, the rms value = peak value / sqrt(2). Mains frequency in Nigeria is 50 Hz.",
      "Inductive reactance XL = 2 pi f L; capacitive reactance XC = 1 / (2 pi f C). Impedance Z is the total opposition to current in an a.c. circuit."
    ]],
    ["Modern physics", [
      "Planck proposed that energy is emitted in packets (quanta). The energy of a photon is E = hf.",
      "Photoelectric effect: light of high enough frequency ejects electrons from a metal surface. The threshold frequency is the minimum frequency needed; the work function is the minimum energy needed. Einstein explained it: hf = work function + maximum kinetic energy.",
      "De Broglie: a particle of momentum p has a wavelength h/p.",
      "Bohr model: electrons occupy fixed energy levels and emit or absorb a photon when they jump between levels.",
      "X-rays are produced when fast electrons strike a metal target.",
      "Radioactivity: alpha particles are helium nuclei (least penetrating); beta particles are fast electrons; gamma rays are short-wavelength electromagnetic waves (most penetrating). Half-life is the time for half of the radioactive nuclei to decay.",
      "Fission is the splitting of a heavy nucleus; fusion is the joining of light nuclei. Both release energy according to E = mc^2."
    ]]
  ],
  cards: [
    ["Coulomb's law", "F = k q1 q2 / r^2: inverse square of distance."],
    ["Electric field strength", "Force per unit charge, E = F/q, in N/C."],
    ["Capacitance", "C = Q/V, in farads. Energy = 1/2 C V^2."],
    ["Capacitors: series vs parallel", "Parallel: add. Series: add reciprocals."],
    ["Ohm's law", "V = IR."],
    ["Resistors: series vs parallel", "Series: add. Parallel: add reciprocals."],
    ["Kirchhoff's laws", "Junction: conservation of charge. Loop: conservation of energy."],
    ["Ammeter vs voltmeter", "Ammeter in series (low R). Voltmeter in parallel (high R)."],
    ["Terminal p.d.", "V = E - Ir."],
    ["Force on moving charge", "F = q v B sin theta."],
    ["Force on conductor", "F = B I L sin theta; Fleming's left-hand rule."],
    ["Faraday's law", "Induced emf is proportional to rate of change of flux linkage."],
    ["Lenz's law", "Induced current opposes the change causing it."],
    ["Transformer equation", "Vs/Vp = Ns/Np; a.c. only."],
    ["rms value", "Peak / sqrt(2)."],
    ["Photon energy", "E = hf."],
    ["Work function", "Minimum energy to remove an electron from a metal surface."],
    ["Half-life", "Time for half the radioactive nuclei to decay."]
  ],
  mcq: [
    [0, "The SI unit of electric charge is the", ["Ampere", "Coulomb", "Volt", "Farad"], 1],
    [0, "Two like charges", ["Attract each other", "Have no effect on each other", "Repel each other", "Cancel each other"], 2],
    [0, "By Coulomb's law, the force between two point charges is", ["Inversely proportional to the square of their distance", "Directly proportional to their distance", "Independent of their distance", "Inversely proportional to their charges"], 0],
    [0, "The charge on an electron is about", ["-1.6 x 10^-9 C", "-9.1 x 10^-31 C", "-6.0 x 10^23 C", "-1.6 x 10^-19 C"], 3],
    [0, "The SI unit of electric field strength is", ["J/C", "N/C", "C/N", "A/m"], 1],
    [0, "Electric field strength is defined as", ["Charge per unit force", "Energy per unit charge", "Force per unit charge", "Force per unit mass"], 2],
    [0, "The unit of electric potential is the", ["Volt", "Watt", "Ohm", "Tesla"], 0],
    [0, "One volt is equal to one", ["Coulomb per second", "Newton per coulomb", "Joule per second", "Joule per coulomb"], 3],
    [0, "If the distance between two charges is doubled, the force between them becomes", ["Half", "One quarter", "Double", "Four times"], 1],
    [0, "The unit of capacitance is the", ["Henry", "Weber", "Farad", "Ohm"], 2],
    [0, "Capacitance is defined as", ["Q/V", "V/Q", "QV", "Q/I"], 0],
    [0, "The energy stored in a charged capacitor is", ["C V", "C V^2", "1/2 C V", "1/2 C V^2"], 3],
    [0, "Capacitors of 2 uF and 3 uF connected in parallel give", ["1.2 uF", "5 uF", "6 uF", "1 uF"], 1],
    [0, "Capacitors of 6 uF and 3 uF connected in series give", ["9 uF", "18 uF", "2 uF", "3 uF"], 2],
    [0, "Gauss's law relates the electric flux through a closed surface to the", ["Charge enclosed", "Current enclosed", "Area of the surface only", "Potential at the surface"], 0],
    [0, "Electric field lines point", ["Toward positive charges", "In closed circles round charges", "From negative to positive charge", "From positive to negative charge"], 3],
    [0, "A material that does not let charge flow through it easily is", ["A conductor", "An insulator", "An electrolyte", "A superconductor"], 1],
    [1, "Ohm's law is written as", ["V = I/R", "V = I^2 R", "V = IR", "V = R/I"], 2],
    [1, "The unit of resistance is the", ["Ohm", "Ampere", "Volt", "Watt"], 0],
    [1, "Electric current is the rate of flow of", ["Energy", "Voltage", "Resistance", "Charge"], 3],
    [1, "Resistors of 2 ohm and 3 ohm in series give", ["1.2 ohm", "5 ohm", "6 ohm", "1 ohm"], 1],
    [1, "Resistors of 6 ohm and 3 ohm in parallel give", ["9 ohm", "18 ohm", "2 ohm", "0.5 ohm"], 2],
    [1, "A 12 V supply across a 4 ohm resistor drives a current of", ["3 A", "48 A", "0.33 A", "8 A"], 0],
    [1, "Electrical power is given by", ["I/V", "V/I", "I + V", "IV"], 3],
    [1, "Kirchhoff's junction (first) law is based on conservation of", ["Energy", "Charge", "Momentum", "Mass"], 1],
    [1, "Kirchhoff's loop (second) law is based on conservation of", ["Charge", "Momentum", "Energy", "Current"], 2],
    [1, "An ammeter is connected in a circuit in", ["Series", "Parallel", "Either way", "Reverse only"], 0],
    [1, "A voltmeter is connected across a component in", ["Series", "Reverse", "A loop of its own", "Parallel"], 3],
    [1, "A galvanometer is converted to an ammeter by adding", ["A high resistance in series", "A low-resistance shunt in parallel", "A capacitor in series", "A second galvanometer"], 1],
    [1, "A galvanometer is converted to a voltmeter by adding", ["A low resistance in parallel", "A capacitor in parallel", "A high-resistance multiplier in series", "A shunt in parallel"], 2],
    [1, "A Wheatstone bridge is used to measure", ["Resistance", "Capacitance", "Magnetic flux", "Frequency"], 0],
    [1, "A potentiometer is commonly used to", ["Store charge", "Measure magnetic field", "Step up voltage", "Compare the emfs of cells"], 3],
    [1, "For a cell of emf E and internal resistance r, the terminal p.d. is", ["E + Ir", "E - Ir", "Ir - E", "E/Ir"], 1],
    [1, "The unit of resistivity is the", ["Ohm", "Ohm per metre", "Ohm metre", "Siemens"], 2],
    [2, "The SI unit of magnetic flux density is the", ["Tesla", "Weber", "Henry", "Farad"], 0],
    [2, "The SI unit of magnetic flux is the", ["Tesla", "Henry", "Ampere", "Weber"], 3],
    [2, "Two like magnetic poles", ["Attract", "Repel", "Cancel", "Do not interact"], 1],
    [2, "The force on a charge q moving with speed v in a field B is", ["q v / B", "q B / v", "q v B sin theta", "q + v B"], 2],
    [2, "The force on a conductor of length L carrying current I in a field B is", ["B I L sin theta", "B I / L", "B L / I", "I L / B"], 0],
    [2, "A charge moving parallel to a magnetic field experiences", ["Maximum force", "A force along the field", "A force opposite to the field", "No force"], 3],
    [2, "The direction of the force on a current-carrying conductor in a magnetic field is given by", ["Lenz's law", "Fleming's left-hand rule", "Ohm's law", "Coulomb's law"], 1],
    [2, "The magnetic field inside a long solenoid is", ["mu0 I / (2 pi r)", "mu0 I / n", "mu0 n I", "mu0 / (n I)"], 2],
    [2, "The magnetic field at distance r from a long straight wire is", ["mu0 I / (2 pi r)", "mu0 n I", "mu0 I r", "mu0 I / r^2"], 0],
    [2, "The magnetic field due to a small current element is given by", ["Faraday's law", "Gauss's law", "Lenz's law", "The Biot-Savart law"], 3],
    [2, "Ampere's law relates the line integral of B round a closed path to the", ["Charge enclosed", "Current enclosed", "Flux enclosed", "Voltage round the path"], 1],
    [2, "Materials that are strongly attracted by a magnet are", ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Non-magnetic"], 2],
    [2, "Materials that are weakly repelled by a magnetic field are", ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Superconducting only"], 0],
    [2, "The temperature above which a ferromagnet loses its ferromagnetism is the", ["Boiling point", "Critical point", "Triple point", "Curie temperature"], 3],
    [2, "Two parallel wires carrying currents in the same direction", ["Repel", "Attract", "Do not interact", "Rotate"], 1],
    [2, "The angle between the geographic and magnetic meridians is the angle of", ["Dip", "Incidence", "Declination", "Refraction"], 2],
    [2, "A charged particle moving perpendicular to a uniform magnetic field follows a", ["Circular path", "Straight path", "Parabolic path", "Zigzag path"], 0],
    [3, "The law stating that induced emf is proportional to the rate of change of flux linkage is", ["Lenz's law", "Ohm's law", "Ampere's law", "Faraday's law"], 3],
    [3, "The law stating that an induced current opposes the change causing it is", ["Faraday's law", "Lenz's law", "Coulomb's law", "Gauss's law"], 1],
    [3, "Lenz's law is a consequence of conservation of", ["Charge", "Momentum", "Energy", "Mass"], 2],
    [3, "The unit of inductance is the", ["Henry", "Tesla", "Weber", "Farad"], 0],
    [3, "A transformer works on the principle of", ["Electrolysis", "Photoelectric emission", "Electrostatic induction", "Mutual induction"], 3],
    [3, "A step-up transformer has", ["Equal turns in both coils", "More turns in the secondary than in the primary", "Fewer turns in the secondary than in the primary", "No secondary coil"], 1],
    [3, "A transformer operates only with", ["Direct current", "Static charge", "Alternating current", "Batteries"], 2],
    [3, "For an ideal transformer, Vs/Vp equals", ["Ns/Np", "Np/Ns", "Ns Np", "Ns - Np"], 0],
    [3, "A transformer has 100 primary turns and 500 secondary turns. With 20 V on the primary, the secondary voltage is", ["4 V", "25 V", "500 V", "100 V"], 3],
    [3, "A device that converts mechanical energy to electrical energy is a", ["Motor", "Generator", "Transformer", "Rectifier"], 1],
    [3, "The rms value of an alternating current of peak value I0 is", ["I0", "2 I0", "I0 / sqrt(2)", "I0 / 2"], 2],
    [3, "Inductive reactance is given by", ["2 pi f L", "1 / (2 pi f L)", "2 pi f C", "L / f"], 0],
    [3, "Capacitive reactance is given by", ["2 pi f C", "2 pi f L", "C / f", "1 / (2 pi f C)"], 3],
    [3, "The frequency of the mains supply in Nigeria is", ["60 Hz", "50 Hz", "100 Hz", "240 Hz"], 1],
    [3, "The total opposition to current in an a.c. circuit is called", ["Resistance", "Reactance", "Impedance", "Inductance"], 2],
    [3, "The energy stored in an inductor is", ["1/2 L I^2", "L I", "1/2 L I", "L I^2"], 0],
    [3, "Eddy-current losses in a transformer core are reduced by", ["Using thicker wire", "Using a solid core", "Increasing the voltage", "Laminating the core"], 3],
    [4, "The energy of a photon of frequency f is", ["h/f", "hf", "f/h", "h + f"], 1],
    [4, "The emission of electrons from a metal surface when light falls on it is", ["Thermionic emission", "Radioactivity", "The photoelectric effect", "Fission"], 2],
    [4, "The minimum frequency of light that can eject electrons from a metal is the", ["Threshold frequency", "Resonant frequency", "Natural frequency", "Beat frequency"], 0],
    [4, "The minimum energy needed to remove an electron from a metal surface is the", ["Binding energy", "Ionisation potential", "Kinetic energy", "Work function"], 3],
    [4, "The photoelectric effect was explained by", ["Newton", "Einstein", "Faraday", "Rutherford"], 1],
    [4, "The idea that energy is emitted in quanta was first proposed by", ["Bohr", "de Broglie", "Planck", "Thomson"], 2],
    [4, "The de Broglie wavelength of a particle of momentum p is", ["h/p", "hp", "p/h", "h + p"], 0],
    [4, "In the Bohr model, electrons move in", ["Random paths", "Straight lines", "The nucleus", "Fixed energy levels"], 3],
    [4, "An alpha particle is a", ["Fast electron", "Helium nucleus", "Neutron", "Photon"], 1],
    [4, "A beta particle is a", ["Helium nucleus", "Proton", "Fast electron", "Gamma photon"], 2],
    [4, "Gamma rays are", ["Electromagnetic waves of very short wavelength", "Helium nuclei", "Fast electrons", "Slow neutrons"], 0],
    [4, "The most penetrating of the three radiations is", ["Alpha", "Beta", "X-ray", "Gamma"], 3],
    [4, "Half-life is the time taken for", ["All the nuclei to decay", "Half of the radioactive nuclei to decay", "The activity to double", "One nucleus to decay"], 1],
    [4, "A sample has a half-life of 2 days. The fraction remaining after 6 days is", ["1/2", "1/4", "1/8", "1/6"], 2],
    [4, "The splitting of a heavy nucleus into lighter nuclei is", ["Fission", "Fusion", "Ionisation", "Diffraction"], 0],
    [4, "The joining of light nuclei to form a heavier nucleus is", ["Fission", "Decay", "Excitation", "Fusion"], 3],
    [4, "X-rays are produced when", ["Light strikes a metal", "Fast electrons strike a metal target", "A nucleus emits helium", "A magnet moves in a coil"], 1]
  ],
  fib: [
    [0, "The SI unit of charge is the ____.", ["coulomb"]],
    [0, "Like charges ____ each other.", ["repel"]],
    [0, "The unit of capacitance is the ____.", ["farad"]],
    [1, "Ohm's law states that V = I times ____.", ["r", "resistance"]],
    [1, "An ammeter is connected in ____.", ["series"]],
    [1, "A Wheatstone bridge is used to measure ____.", ["resistance"]],
    [2, "The SI unit of magnetic flux density is the ____.", ["tesla"]],
    [2, "The direction of force on a current-carrying conductor is given by Fleming's ____-hand rule.", ["left"]],
    [2, "Iron, nickel and cobalt are ____ materials.", ["ferromagnetic"]],
    [3, "The law that an induced current opposes the change causing it is ____'s law.", ["lenz", "lenzs"]],
    [3, "The unit of inductance is the ____.", ["henry"]],
    [3, "A transformer works only with ____ current.", ["alternating", "ac", "a.c."]],
    [4, "The energy of a photon is E = h times ____.", ["f", "frequency"]],
    [4, "An alpha particle is a ____ nucleus.", ["helium"]],
    [4, "The splitting of a heavy nucleus is called nuclear ____.", ["fission"]]
  ]
});
window.GUIDES = window.GUIDES || {};
GUIDES.PHY102 = `
## What this course tests

Four areas: **electrostatics**, **d.c. circuits and instruments**, **magnetism and induction**, **modern physics**. Know the formulas, the units and who each law is named after.

## 1. Electrostatics

- Like charges repel, unlike attract.
- **Coulomb**: F = k q1 q2 / r^2. Double r, force becomes a quarter.
- **Field**: E = F/q (N/C). Lines go from + to -.
- **Potential**: volt = joule per coulomb.
- **Capacitor**: C = Q/V, energy = 1/2 C V^2.

| Combination | Capacitors | Resistors |
|---|---|---|
| Series | 1/C = 1/C1 + 1/C2 | R = R1 + R2 |
| Parallel | C = C1 + C2 | 1/R = 1/R1 + 1/R2 |

> Capacitors combine the opposite way to resistors.

## 2. D.C. circuits

- V = IR; P = IV = I^2 R.
- Terminal p.d. V = E - Ir.
- Kirchhoff 1 (junction): charge conserved. Kirchhoff 2 (loop): energy conserved.

| Instrument | Connected | Resistance | Made from galvanometer by |
|---|---|---|---|
| Ammeter | Series | Low | Shunt in parallel |
| Voltmeter | Parallel | High | Multiplier in series |

Wheatstone bridge measures resistance. Potentiometer compares emfs.

## 3. Magnetism

- F on charge = q v B sin theta. F on wire = B I L sin theta.
- Straight wire: B = mu0 I / (2 pi r). Solenoid: B = mu0 n I.
- Fleming's left-hand rule: force on conductor (motors).
- Ferromagnetic: strongly attracted. Paramagnetic: weakly attracted. Diamagnetic: weakly repelled.

## 4. Induction and a.c.

- **Faraday**: emf proportional to rate of change of flux linkage.
- **Lenz**: induced current opposes the change.
- Transformer: Vs/Vp = Ns/Np, a.c. only, laminated core cuts eddy currents.
- rms = peak / sqrt(2). XL = 2 pi f L. XC = 1 / (2 pi f C).

## 5. Modern physics

| Idea | Key fact |
|---|---|
| Photon | E = hf (Planck) |
| Photoelectric effect | hf = work function + KE max (Einstein) |
| de Broglie | wavelength = h/p |
| Bohr | fixed energy levels |
| Alpha | helium nucleus, least penetrating |
| Beta | fast electron |
| Gamma | e.m. wave, most penetrating |
| Fission / fusion | split heavy / join light |

Half-life: after n half-lives, fraction left = (1/2)^n.

## Exam tips

- Units: tesla (B), weber (flux), henry (L), farad (C).
- Ammeter in series, voltmeter in parallel.
- Three half-lives leaves one eighth.
`;
