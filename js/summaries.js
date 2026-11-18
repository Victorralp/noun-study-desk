/* Fuller "Key points" for the Summary tab. Overrides course.modules in data.js when present. */
window.SUMMARY = window.SUMMARY || {};

SUMMARY.INS207 = [
  ["Data, information & IS concepts", [
    "Data = raw, unprocessed facts (e.g. 65, 'Ada', 12/03). Information = data that has been processed, organised and given meaning so it is useful for decisions (e.g. 'Ada scored 65% in INS207').",
    "Knowledge = information combined with experience and understanding. Wisdom = knowing how and when to apply knowledge. Order: data → information → knowledge → wisdom (DIKW pyramid).",
    "A system is a set of related parts working together toward a common goal. Every system has input → processing → output, plus feedback and control, inside an environment and a boundary.",
    "Open system interacts with its environment (a business). Closed system does not. Most information systems are open systems.",
    "An information system (IS) is a set of interrelated components that collect (input), process, store and distribute information to support decision making, coordination, control, analysis and visualisation in an organisation.",
    "Five core components of an IS: hardware, software, data, people, procedures. Many texts add networks/telecommunications as a sixth.",
    "People are the most important component. Procedures are the rules and instructions for using the system.",
    "IT (information technology) is only the hardware and software. IS = IT + people + processes. A computer is part of an IS, not the IS itself.",
    "Manual IS uses paper and filing cabinets; computer-based IS (CBIS) uses computers. A CBIS is faster, more accurate and can store more.",
    "Qualities of good information: accurate, timely, relevant, complete, concise, reliable, verifiable, accessible, secure, cost-effective (value must exceed cost of producing it).",
    "Data hierarchy, smallest to largest: bit → byte (8 bits, one character) → field (one fact, e.g. Name) → record (related fields, one row, e.g. one student) → file/table (related records) → database (related files).",
    "Roles of IS in business: support operations, support managerial decision making, and support strategies for competitive advantage.",
    "Levels of management: operational (supervisors, day-to-day, structured decisions), tactical/middle (semi-structured), strategic/top (unstructured, long-term)."
  ]],
  ["Types of information systems", [
    "Think of a pyramid by management level. Bottom to top: TPS → MIS → DSS → ESS. Each level feeds the one above it.",
    "TPS (Transaction Processing System): operational level. Records and processes routine daily transactions: sales, payroll, orders, bank deposits, POS tills, airline reservations. Clue words: 'day-to-day', 'transactions', 'records'.",
    "TPS processing modes: batch processing (collect transactions and process together later, e.g. payroll) and online/real-time processing (process immediately, e.g. ATM).",
    "MIS (Management Information System): middle managers. Turns TPS data into routine, scheduled summary and exception reports (weekly sales report, stock below reorder level). Structured decisions.",
    "DSS (Decision Support System): supports semi-structured and unstructured decisions using data, models and 'what-if' / sensitivity analysis. Interactive. Example: 'what if we raise price by 10%?' GDSS = group DSS for teams.",
    "ESS / EIS (Executive Support / Executive Information System): senior executives. Summarised internal and external data, graphics, dashboards, drill-down. Strategic, long-term, unstructured decisions.",
    "KWS (Knowledge Work System): supports knowledge workers who create new knowledge, e.g. CAD for engineers, workstations for scientists.",
    "OAS (Office Automation System): supports clerical and office work: word processing, spreadsheets, email, calendars/scheduling, desktop publishing, video conferencing.",
    "Expert system: an AI system that copies the reasoning of a human expert in a narrow field (medical diagnosis, loan approval). Parts: knowledge base (facts and if-then rules), inference engine (reasons with the rules), user interface, explanation facility.",
    "Artificial intelligence (AI) includes expert systems, neural networks (learn patterns), genetic algorithms, fuzzy logic, natural language processing and robotics.",
    "Functional systems serve one business area: marketing IS, financial/accounting IS, human resource IS, manufacturing/production IS.",
    "Exam trap: 'what-if' always means DSS. 'Routine reports' means MIS. 'Executives / strategic' means ESS. 'Mimics an expert' means expert system."
  ]],
  ["Systems development (SDLC)", [
    "SDLC (Systems Development Life Cycle) is the structured, step-by-step process used to build or replace an information system.",
    "Common phases: 1) planning / preliminary investigation, 2) systems analysis, 3) systems design, 4) development / implementation (coding, testing, installation, training, conversion), 5) operation and maintenance.",
    "Planning: identify the problem or opportunity, define scope, and carry out a feasibility study.",
    "Feasibility types: technical (do we have the technology and skills?), economic (cost-benefit analysis: do benefits exceed costs?), operational (will users accept and use it?), schedule (can it be done in time?), legal. Mnemonic TELOS: Technical, Economic, Legal, Operational, Schedule.",
    "Analysis: study the current system and gather user requirements. Fact-finding methods: interviews, questionnaires, observation, document review, sampling. Tools: data flow diagrams (DFD), flowcharts, data dictionary, ER diagrams.",
    "Design: logical design (what the system does: inputs, outputs, processes, data) then physical design (how: hardware, file/database structure, screens, reports).",
    "Implementation: write and test programs (unit, integration, system, user acceptance testing), install hardware, train users, convert data, and change over to the new system.",
    "Changeover methods: direct/plunge (switch off old, start new at once: cheapest, riskiest); parallel (run old and new together: safest, most expensive); phased (introduce module by module); pilot (one department or branch first, then the rest).",
    "Maintenance: fix errors (corrective), adapt to changes (adaptive), improve performance (perfective), prevent problems (preventive). It is the longest and usually most costly phase.",
    "Waterfall model: phases follow strictly one after another; each must finish before the next. Simple but inflexible to changing requirements.",
    "Prototyping: build a quick working model, let users try it, refine it. Good when requirements are unclear.",
    "Spiral model: repeated cycles with risk analysis in each loop. RAD (Rapid Application Development): fast development with tools and user involvement. Agile (e.g. Scrum): short iterations (sprints), incremental delivery, constant customer feedback.",
    "Other ways to get a system: buy off-the-shelf packages, outsourcing (another company builds/runs it), end-user development.",
    "Key people: systems analyst (links users and programmers, studies and designs the system), programmers, users, project manager, database administrator (DBA)."
  ]],
  ["Databases & enterprise systems", [
    "File-based (traditional) approach problems: data redundancy (same data in many files), data inconsistency, program-data dependence, poor sharing, poor security.",
    "Database = organised collection of related data stored centrally. DBMS (Database Management System) = software to create, store, update, retrieve and secure the database. Examples: MySQL, Oracle, Microsoft SQL Server, MS Access, PostgreSQL.",
    "Advantages of a database: reduced redundancy, improved consistency and integrity, data sharing, better security, data independence, easier backup and recovery.",
    "Database models: hierarchical (tree, parent-child), network (many-to-many links), relational (tables of rows and columns, most common), object-oriented.",
    "Relational terms: table = relation, row = record = tuple, column = field = attribute.",
    "Primary key: field that uniquely identifies each record (matric number). Foreign key: field in one table that refers to the primary key of another table, linking them (CourseID in an Enrolment table). Composite key = two or more fields together.",
    "Relationships: one-to-one, one-to-many (most common), many-to-many. Shown in ER (Entity-Relationship) diagrams.",
    "Normalisation organises tables to remove redundancy and update anomalies (1NF, 2NF, 3NF).",
    "SQL (Structured Query Language) groups: DDL (CREATE, ALTER, DROP: structure), DML (SELECT, INSERT, UPDATE, DELETE: data), DCL (GRANT, REVOKE: permissions).",
    "Data dictionary stores metadata (data about data): field names, types, sizes, rules. DBA manages the database.",
    "Data warehouse: large store of historical data from many sources, for analysis. Data mart: smaller warehouse for one department. Data mining: finding hidden patterns. OLAP: multidimensional analysis.",
    "ERP (Enterprise Resource Planning): one integrated system and database linking all departments: finance, HR, production, sales, inventory. Examples: SAP, Oracle.",
    "CRM (Customer Relationship Management): manages all customer interactions, sales, marketing and service to keep customers loyal.",
    "SCM (Supply Chain Management): manages flow of materials and goods from suppliers to manufacturer to distributors to customers.",
    "KMS (Knowledge Management System) captures and shares organisational knowledge. Intranet = private network inside a company; extranet = intranet opened to partners/suppliers."
  ]],
  ["IS strategy, e-commerce, security & ethics", [
    "Competitive advantage: doing better than rivals. Generic strategies (Porter): cost leadership (lowest cost), differentiation (unique products), focus/niche (narrow market). Also customer and supplier intimacy.",
    "Porter's five competitive forces: rivalry among existing competitors, threat of new entrants, threat of substitute products, bargaining power of buyers (customers), bargaining power of suppliers.",
    "Porter's value chain: primary activities (inbound logistics, operations, outbound logistics, marketing and sales, service) and support activities (firm infrastructure, HR management, technology development, procurement).",
    "Strategic information system: any IS that changes goals, products or relationships to give competitive advantage.",
    "E-commerce = buying and selling over the internet. E-business is wider: all business processes done electronically.",
    "E-commerce types: B2C business to consumer (Jumia, Konga), B2B business to business, C2C consumer to consumer (Jiji, eBay), C2B consumer to business, G2C government to citizen (online tax, JAMB portal), B2G business to government. M-commerce = on mobile devices.",
    "E-commerce benefits: 24/7 trading, global reach, lower costs. Problems: security and fraud, trust, poor internet, delivery.",
    "Electronic payment: cards, mobile money, e-wallets, online banking, EFT (electronic funds transfer). EDI (Electronic Data Interchange): computer-to-computer exchange of business documents.",
    "Security goals, the CIA triad: Confidentiality (only authorised users see data), Integrity (data is not changed without permission), Availability (system works when needed).",
    "Threats: viruses, worms, Trojans, hacking, phishing, denial of service, identity theft, human error, natural disasters, insider threats.",
    "Controls: general controls (whole system: physical security, access control, backups) and application controls (specific applications: input validation, processing and output checks). Tools: passwords, biometrics, firewalls, encryption, antivirus, audit trails, disaster recovery plan.",
    "Ethical issues (PAPA): Privacy, Accuracy, Property (intellectual property: copyright, patents, piracy), Access. Also digital divide, computer crime, job loss through automation, health issues (RSI, eye strain).",
    "Nigerian context: NDPR / Nigeria Data Protection Act protects personal data; Cybercrimes Act 2015 punishes computer crimes."
  ]]
];

SUMMARY.CYB111 = [
  ["Network & cyber security basics", [
    "Cyber security = protecting computers, networks, programs and data from attack, damage or unauthorised access. Information security covers all information, digital or paper.",
    "CIA triad: Confidentiality (only authorised people can read it: encryption, access control), Integrity (data is accurate and not altered: hashing, digital signatures), Availability (systems work when needed: backups, redundancy, DDoS protection).",
    "Extra principles: authenticity, non-repudiation (sender cannot deny sending: digital signatures), accountability, privacy.",
    "Defence in depth: many layers of security so if one fails another stops the attack.",
    "Network types by size: PAN (personal, Bluetooth), LAN (building), MAN (city), WAN (country/world, the internet). WLAN = wireless LAN.",
    "Topologies: bus (one cable, single point of failure), star (all connect to a central switch, most common), ring, mesh (every node linked to every other, most fault tolerant), tree, hybrid.",
    "Network devices: hub (sends to all ports), switch (sends to right device by MAC address), router (connects networks by IP address), modem, access point, firewall.",
    "Secure network design: firewalls at the edge, DMZ (demilitarised zone: buffer network for public servers like web and email), VPN (encrypted tunnel over a public network), segmentation and VLANs (split network to limit spread), NAT (hides internal IP addresses).",
    "OSI model, 7 layers: Physical, Data link, Network, Transport, Session, Presentation, Application ('Please Do Not Throw Sausage Pizza Away'). TCP/IP has 4 layers.",
    "Secure protocols replace insecure ones: HTTPS not HTTP, SSH not Telnet, SFTP not FTP. TLS/SSL encrypts web traffic.",
    "Wireless security: WPA2 / WPA3 (strong), WEP (weak, broken). Change default passwords, hide or rename SSID.",
    "Operational security and compliance: follow laws, standards and policies (ISO 27001, PCI DSS for cards, GDPR, NDPR), do risk assessments, change management, staff training and audits."
  ]],
  ["Threats, vulnerabilities & risk", [
    "Asset = anything of value (data, hardware, people). Threat = potential cause of harm. Vulnerability = weakness that can be exploited. Exploit = the method used. Risk = likelihood × impact.",
    "Threat actors: script kiddies (unskilled), hacktivists (political), cyber criminals (money), insiders (employees), nation states / APT (advanced persistent threat), competitors. White hat = ethical, black hat = malicious, grey hat = in between.",
    "Virus: attaches to a host file and needs the user to run it. Worm: self-replicates across networks with no user action. Trojan: looks like useful software but hides malicious code.",
    "Ransomware: encrypts victim's files and demands payment (often cryptocurrency). Attacks availability. Defence: offline backups.",
    "Spyware secretly collects information. Keylogger records keystrokes. Adware shows unwanted adverts. Rootkit hides deep in the OS to keep admin access. Backdoor bypasses normal login. Logic bomb triggers on a condition or date. Botnet = network of infected 'zombie' computers controlled by a bot herder.",
    "Social engineering tricks people. Phishing (fake emails), spear phishing (targeted at one person), whaling (targets executives), vishing (voice calls), smishing (SMS), pretexting (made-up story), baiting (infected USB), tailgating/piggybacking (following someone through a secure door), shoulder surfing.",
    "DoS (Denial of Service) floods a system so real users cannot use it. DDoS uses many machines (a botnet). Both attack availability.",
    "Man-in-the-middle (MITM): attacker secretly intercepts communication between two parties. Eavesdropping/sniffing captures traffic. Spoofing fakes an identity (IP, email, MAC).",
    "Web attacks: SQL injection (malicious SQL typed into input fields to read or change a database; prevent with input validation and parameterised queries), XSS cross-site scripting (injects scripts into web pages viewed by others), CSRF.",
    "Password attacks: brute force (try every combination), dictionary attack (try common words), credential stuffing (reuse leaked passwords), rainbow tables (precomputed hashes; defended by salting).",
    "Zero-day: vulnerability unknown to the vendor, so no patch exists yet.",
    "Risk management steps: identify assets → identify threats and vulnerabilities → assess risk (qualitative: high/medium/low; quantitative: money values) → treat risk → monitor.",
    "Risk responses: avoid (stop the risky activity), transfer/share (insurance, outsourcing), mitigate/reduce (add controls), accept (live with it when cost of control is too high). Residual risk = risk left after controls."
  ]],
  ["Security controls, host security & disaster recovery", [
    "Controls by function: preventive (stop an incident: firewall, lock, encryption), detective (find it: IDS, CCTV, audit logs), corrective (fix after: restore backup, patch), deterrent (discourage: warning signs, guards), compensating (alternative when main control is not possible), recovery.",
    "Controls by type: administrative/managerial (policies, procedures, training, background checks), technical/logical (firewalls, encryption, antivirus, passwords), physical (locks, fences, guards, CCTV, mantraps, biometrics doors).",
    "Host security: install patches and updates, antivirus/anti-malware, host firewall, disable unused services and ports (hardening), strong admin passwords, full disk encryption.",
    "Application security: input validation, secure coding, code review, least privilege for apps, regular security testing (vulnerability scanning, penetration testing).",
    "Data security: encrypt data at rest and in transit, data classification, data loss prevention (DLP), secure disposal (shredding, wiping).",
    "Business Continuity Plan (BCP): keeps critical business functions running during and after a disaster. Disaster Recovery Plan (DRP): restores IT systems and data after a disaster. DRP is part of BCP.",
    "Business Impact Analysis (BIA): identifies critical functions and the impact of losing them.",
    "RTO (Recovery Time Objective): maximum acceptable downtime, how fast you must be back. RPO (Recovery Point Objective): maximum acceptable data loss measured in time, how old the last backup may be. MTTR = mean time to repair; MTBF = mean time between failures.",
    "Backup types: full (copy everything; slowest to back up, fastest to restore), incremental (only changes since the last backup of any kind; fastest backup, slowest restore, needs full + every incremental), differential (all changes since the last full backup; restore needs full + latest differential only).",
    "3-2-1 backup rule: 3 copies of data, on 2 different media, 1 copy off-site.",
    "Recovery sites: hot site (fully equipped and up to date, ready in minutes or hours, most expensive), warm site (some equipment, ready in days), cold site (only space and power, cheapest, slowest).",
    "Redundancy: RAID disks, UPS (uninterruptible power supply), generators, clustering and load balancing.",
    "Test the plans: checklist review, walkthrough/tabletop, simulation, parallel test, full interruption test."
  ]],
  ["Access control, cryptography & intrusion management", [
    "AAA: Authentication (prove who you are), Authorization (what you are allowed to do), Accounting/Auditing (record what you did). Identification comes first (claim an identity, e.g. username).",
    "Authentication factors: something you know (password, PIN), something you have (token, phone, smart card), something you are (biometrics: fingerprint, face, iris), somewhere you are (location). MFA = two or more different factors. 2FA = exactly two.",
    "Password vs PIN both count as 'know', so password + PIN is NOT multi-factor.",
    "Single sign-on (SSO): log in once to access many systems. Biometric errors: false acceptance (FAR) and false rejection (FRR).",
    "Access control models: DAC (Discretionary: the owner decides who gets access), MAC (Mandatory: system enforces labels and clearance levels like secret, top secret; used in military), RBAC (Role-Based: rights assigned by job role), rule-based / ABAC (attribute-based).",
    "Principles: least privilege (only the minimum access needed), need to know, separation of duties (no one person controls a whole task), job rotation, mandatory vacations.",
    "Cryptography: plaintext + key + algorithm → ciphertext (encryption); decryption reverses it.",
    "Symmetric encryption: one shared secret key encrypts and decrypts. Fast. Examples: AES, DES, 3DES, Blowfish. Problem: safely sharing the key.",
    "Asymmetric (public key) encryption: a key pair. Public key encrypts, private key decrypts. Slower but solves key sharing. Examples: RSA, ECC, Diffie-Hellman (key exchange).",
    "Hashing: one-way function producing a fixed-length digest; cannot be reversed. Used for integrity and password storage. Examples: SHA-256, MD5 (weak). Salt = random value added before hashing.",
    "Digital signature: hash signed with the sender's private key; gives integrity, authentication and non-repudiation. Digital certificate (issued by a Certificate Authority, CA) binds a public key to an identity: this is PKI.",
    "IDS (Intrusion Detection System): monitors and alerts only (passive). IPS (Intrusion Prevention System): sits inline and blocks attacks (active). NIDS/NIPS watch the network; HIDS/HIPS watch one host.",
    "Detection methods: signature-based (matches known attack patterns; misses new ones), anomaly/behaviour-based (flags unusual activity; can catch zero-days but more false positives). False positive = alert with no attack; false negative = attack missed (worse).",
    "Firewalls: packet-filtering (checks IP, port, protocol), stateful inspection (tracks connections), proxy/application-level gateway, next-generation firewall (deep packet inspection). Honeypot = decoy system to attract and study attackers. SIEM collects and analyses logs centrally."
  ]],
  ["Security management, incident response & law", [
    "Security policy = management's written rules for protecting information. Examples: acceptable use policy (AUP), password policy, data classification policy, BYOD policy, remote access policy, email policy.",
    "Policy (what and why, high level) → standard (mandatory rules) → procedure (step-by-step how) → guideline (recommended advice).",
    "Data classification: public, internal, confidential, secret/top secret.",
    "Security awareness training is one of the best defences against social engineering. People are the weakest link.",
    "NIST Cybersecurity Framework core functions: Identify, Protect, Detect, Respond, Recover. Version 2.0 adds Govern.",
    "Cyber Essentials (UK) five controls: firewalls, secure configuration, user access control, malware protection, security update (patch) management.",
    "NIST incident response phases: 1) Preparation, 2) Detection and Analysis, 3) Containment, Eradication and Recovery, 4) Post-incident activity (lessons learned).",
    "SANS 6 steps: Preparation, Identification, Containment, Eradication, Recovery, Lessons learned (PICERL).",
    "Responding to a breach: contain it first (isolate affected systems), investigate, eradicate the cause, recover systems, notify affected people and regulators where required, then review and improve.",
    "CSIRT/CERT = computer security incident response team. ngCERT is Nigeria's national CERT.",
    "Digital forensics: collect evidence carefully, keep chain of custody (record of who handled evidence), work on copies, not originals. Order of volatility: collect most volatile data (RAM) first.",
    "Laws: Nigeria Cybercrimes (Prohibition, Prevention, etc.) Act 2015; Nigeria Data Protection Act 2023 (replaced NDPR); GDPR in the EU; Computer Misuse Act in the UK.",
    "Ethics: hack only with written permission (penetration testers need authorisation and scope). Personal cyber hygiene: strong unique passwords, password manager, MFA, updates, backups, think before clicking links."
  ]]
];

SUMMARY.IFT211 = [
  ["Number systems & codes", [
    "Bases: binary (base 2, digits 0–1), octal (base 8, digits 0–7), decimal (base 10), hexadecimal (base 16, digits 0–9 and A=10, B=11, C=12, D=13, E=14, F=15).",
    "Any base → decimal: multiply each digit by its place value and add. 1011₂ = 8+0+2+1 = 11. 17₈ = 8+7 = 15. 2F₁₆ = 32+15 = 47.",
    "Decimal → any base: divide repeatedly by the base and read the remainders bottom to top. 13 → 1101₂.",
    "Decimal fraction → binary: multiply by 2 repeatedly, take the integer parts top to bottom. 0.625 → 0.101₂.",
    "Binary ↔ octal: group bits in 3s from the binary point (101 110 = 56₈). Binary ↔ hex: group bits in 4s (1010 1111 = AF₁₆).",
    "Bit = one binary digit. Nibble = 4 bits. Byte = 8 bits. n bits give 2ⁿ different values (8 bits = 256 values, 0–255 unsigned).",
    "Binary addition: 0+0=0, 0+1=1, 1+1=10 (0 carry 1), 1+1+1=11 (1 carry 1).",
    "Signed numbers: sign-magnitude (MSB 0 = +, 1 = −), 1's complement (flip every bit), 2's complement (flip every bit then add 1). 2's complement is used by computers; it has only one zero.",
    "Range of n-bit 2's complement: −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1. For 8 bits: −128 to +127.",
    "Subtraction by 2's complement: A − B = A + (2's complement of B); discard the final carry.",
    "BCD (8421 code): each decimal digit coded as 4 bits. 59 = 0101 1001. Codes 1010–1111 are invalid in BCD.",
    "Excess-3: BCD + 3 (0011) for each digit. Self-complementing code.",
    "Gray code: consecutive values differ by only one bit (0, 1, 11, 10, 110…). Used in K-maps and shaft encoders. Binary → Gray: keep MSB, then XOR each pair of adjacent bits.",
    "ASCII: 7-bit character code (128 characters), 'A' = 65, 'a' = 97. Unicode covers all world scripts. EBCDIC is IBM's 8-bit code.",
    "Parity bit for error detection: even parity makes the total number of 1s even; odd parity makes it odd. Detects single-bit errors. Hamming code can detect and correct errors."
  ]],
  ["Logic gates & Boolean algebra", [
    "AND: output 1 only when all inputs are 1 (Y = A·B). OR: output 1 when any input is 1 (Y = A+B). NOT (inverter): output is the opposite (Y = A').",
    "NAND = AND followed by NOT: output 0 only when all inputs are 1. NOR = OR followed by NOT: output 1 only when all inputs are 0.",
    "XOR (exclusive OR, A⊕B): output 1 when inputs are different. XNOR: output 1 when inputs are the same (equality detector).",
    "NAND and NOR are universal gates: any circuit can be built from only NAND or only NOR gates.",
    "A truth table lists every input combination: n inputs give 2ⁿ rows.",
    "Basic laws: A+0 = A, A+1 = 1, A·0 = 0, A·1 = A, A+A = A, A·A = A (idempotent), A+A' = 1, A·A' = 0 (complement), (A')' = A (double negation).",
    "Commutative: A+B = B+A, AB = BA. Associative: A+(B+C) = (A+B)+C. Distributive: A(B+C) = AB+AC and A+BC = (A+B)(A+C).",
    "Absorption: A + AB = A and A(A+B) = A. Also A + A'B = A + B.",
    "De Morgan's theorems: (A·B)' = A' + B' and (A+B)' = A'·B'. 'Break the bar, change the sign.'",
    "Duality: swap + with · and 0 with 1 to get the dual of an identity.",
    "Minterm: product (AND) term containing every variable once, true for exactly one row (m). SOP (sum of products) = OR of minterms: F = Σm(1,3,5).",
    "Maxterm: sum (OR) term, false for exactly one row (M). POS (product of sums) = AND of maxterms: F = ΠM(0,2).",
    "Simplifying expressions reduces the number of gates, cost, power and delay."
  ]],
  ["Minimisation (K-maps) & gate properties", [
    "Karnaugh map (K-map): grid where each cell is one minterm. n variables → 2ⁿ cells: 2-variable = 4 cells, 3-variable = 8, 4-variable = 16.",
    "Rows and columns are labelled in Gray code order (00, 01, 11, 10) so neighbouring cells differ by one variable.",
    "Group adjacent 1s in rectangles of 1, 2, 4, 8 or 16 cells (powers of 2). Make groups as large as possible and as few as possible. Groups may overlap and wrap around the edges (top-bottom, left-right, the four corners).",
    "A group of 2ᵏ cells eliminates k variables. Pair (2) removes 1 variable, quad (4) removes 2, octet (8) removes 3.",
    "Read each group: keep only the variables that do not change within the group.",
    "Group 1s for SOP; group 0s to get POS.",
    "Don't-care conditions (X or d): input combinations that never occur. Treat as 1 or 0, whichever makes bigger groups.",
    "Prime implicant: largest possible group. Essential prime implicant: covers a 1 that no other group covers, so it must be used.",
    "Quine–McCluskey (tabular) method: systematic, suits more than 4–5 variables and computer use.",
    "Gate characteristics: fan-in (number of inputs a gate has), fan-out (number of gate inputs one output can drive), propagation delay (time from input change to output change), power dissipation, noise margin (tolerance to unwanted voltage).",
    "Logic families: TTL (Transistor-Transistor Logic, fast, more power), CMOS (very low power, used in most modern chips), ECL (fastest, high power)."
  ]],
  ["Combinational circuits", [
    "Combinational circuit: output depends only on the present inputs. No memory, no clock, no feedback.",
    "Design steps: state the problem → truth table → Boolean expression → simplify (K-map) → draw the logic diagram.",
    "Half adder: adds two bits. Sum = A⊕B, Carry = A·B. Uses one XOR and one AND.",
    "Full adder: adds A, B and carry-in. Sum = A⊕B⊕Cin, Cout = AB + Cin(A⊕B). Built from two half adders and one OR gate.",
    "Ripple-carry (parallel) adder: n full adders chained to add n-bit numbers; slow because the carry ripples through. Carry look-ahead adder is faster.",
    "Half subtractor: Difference = A⊕B, Borrow = A'B. Full subtractor also takes borrow-in.",
    "Comparator (magnitude comparator): outputs A>B, A=B, A<B.",
    "Multiplexer (MUX, data selector): many inputs → one output; select lines choose which input. 2ⁿ inputs need n select lines (4-to-1 MUX has 2 select lines, 8-to-1 has 3).",
    "Demultiplexer (DEMUX, data distributor): one input → one of many outputs, chosen by select lines.",
    "Decoder: n inputs → up to 2ⁿ outputs, only one active (2-to-4, 3-to-8). Used for memory address decoding and 7-segment displays (BCD-to-7-segment decoder).",
    "Encoder: reverse of decoder, 2ⁿ inputs → n-bit code (8-to-3). Priority encoder outputs the code of the highest-priority active input when several are active.",
    "Code converters change one code to another (binary to Gray, BCD to Excess-3). Parity generator/checker uses XOR gates."
  ]],
  ["Sequential circuits, memory & programmable logic", [
    "Sequential circuit: output depends on present inputs AND past state, so it has memory (feedback). Usually controlled by a clock. Synchronous = all change on the same clock; asynchronous = not.",
    "Latch: level-triggered (responds while enable is high). Flip-flop: edge-triggered (changes only on the rising or falling clock edge). Each stores 1 bit.",
    "SR latch (NOR): S=1 sets Q=1, R=1 resets Q=0, S=R=0 holds, S=R=1 is invalid/forbidden. NAND SR latch is active-low (S'=R'=0 invalid).",
    "D flip-flop: Q takes the value of D on the clock edge (Q⁺ = D). Removes the invalid state. Used in registers.",
    "JK flip-flop: like SR but J=K=1 toggles instead of being invalid. J=0,K=0 hold; J=1,K=0 set; J=0,K=1 reset.",
    "T flip-flop: T=0 hold, T=1 toggle. Used in counters. Made by joining J and K together.",
    "Characteristic table: next state from present state and inputs. Excitation table: inputs needed to move from one state to the next (used to design counters and convert flip-flops).",
    "Race-around condition in JK: output toggles many times while clock is high; fixed with master-slave or edge-triggered flip-flops.",
    "Register: group of flip-flops storing a binary word. Shift register moves bits left or right: SISO (serial in serial out), SIPO, PISO, PIPO.",
    "Counters: asynchronous/ripple (each flip-flop clocked by the previous one; simple but slower) and synchronous (all clocked together; faster). Up, down, up/down counters.",
    "n flip-flops make a MOD-2ⁿ counter with 2ⁿ states (3 flip-flops = MOD-8, counts 0–7). A decade/BCD counter is MOD-10. Ring and Johnson counters are shift-register counters.",
    "Memory: RAM is read/write and volatile (loses data when power is off). SRAM uses flip-flops (fast, used for cache). DRAM uses capacitors and needs refreshing (main memory).",
    "ROM is non-volatile. PROM: programmed once by user. EPROM: erased with ultraviolet light. EEPROM: erased electrically, byte by byte. Flash: electrically erased in blocks (USB drives, SSDs).",
    "Memory size: address lines n give 2ⁿ locations. 10 address lines = 1024 (1K) locations.",
    "PLDs (programmable logic devices): PROM (fixed AND, programmable OR), PLA (programmable AND and programmable OR), PAL (programmable AND, fixed OR). SPLD = simple PLD; CPLD = complex PLD.",
    "FPGA (Field-Programmable Gate Array): array of configurable logic blocks (CLBs) and programmable interconnects, reprogrammable after manufacture. Programmed with HDLs like VHDL and Verilog."
  ]]
];

SUMMARY.COS201 = [
  ["Problem solving & algorithms", [
    "Problem-solving steps: 1) define/understand the problem, 2) analyse it (inputs, outputs, processing, constraints), 3) design an algorithm, 4) code it, 5) test and debug, 6) document and maintain.",
    "Algorithm = a finite, ordered set of clear, unambiguous steps that solves a problem. Named after al-Khwarizmi.",
    "Properties of a good algorithm: finiteness (must end), definiteness (each step is clear), input (zero or more), output (at least one), effectiveness (each step is basic enough to be done), generality.",
    "Ways to represent an algorithm: plain English steps, pseudocode, flowcharts, decision tables.",
    "Pseudocode: English-like, language-independent description using words like BEGIN, READ, IF…THEN…ELSE, WHILE, PRINT, END. Not executed by a computer.",
    "Flowchart symbols: oval/terminal = start or stop; parallelogram = input/output; rectangle = process/assignment; diamond = decision (yes/no); arrow = flow line; small circle = on-page connector; pentagon = off-page connector; rectangle with double sides = predefined process/subroutine.",
    "Decision symbol has one entry and two exits (true/false). Flow normally goes top to bottom, left to right.",
    "Top-down design (stepwise refinement): break a big problem into smaller sub-problems (modules). Bottom-up builds small parts first.",
    "Structured programming uses only three structures: sequence, selection, iteration. It avoids GOTO statements.",
    "Trace table: dry-run an algorithm by hand, writing the value of each variable after each step, to find logic errors.",
    "Example algorithm, average of 3 numbers: READ a, b, c; sum ← a + b + c; avg ← sum / 3; PRINT avg."
  ]],
  ["Programming languages & translators", [
    "Program = set of instructions that tells a computer what to do. Programming = writing, testing and maintaining these instructions.",
    "Generations: 1GL machine language (binary 0s and 1s, executed directly, machine-dependent), 2GL assembly language (mnemonics like ADD, MOV; needs an assembler), 3GL high-level (C, Java, Python, FORTRAN, COBOL, BASIC, Pascal), 4GL (SQL, report generators, closer to English), 5GL (logic/AI: Prolog).",
    "Low-level languages are fast and close to hardware but hard to write and not portable. High-level languages are English-like, portable and easier, but need translation.",
    "Translators: assembler (assembly → machine code); compiler (translates the whole source program into object code at once, then runs; reports all errors after compiling; faster execution, e.g. C, C++); interpreter (translates and runs line by line; stops at the first error; slower, e.g. Python, BASIC).",
    "Source code = program written by the programmer. Object code = machine code produced by a compiler. Linker joins object code with libraries into an executable; loader puts it into memory to run.",
    "Error types: syntax error (breaks language grammar, e.g. missing colon or bracket; caught by translator), runtime error (happens while running: division by zero, file not found), logic error (program runs but gives wrong result, e.g. using + instead of *; hardest to find).",
    "Debugging = finding and removing errors (bugs). Testing levels: unit, integration, system, acceptance. Test data: normal, boundary (edge), erroneous (invalid).",
    "Paradigms: procedural/imperative (step-by-step procedures: C, Pascal), object-oriented (classes, objects, encapsulation, inheritance, polymorphism: Java, C++, Python), functional (Haskell, Lisp), logic (Prolog), event-driven (Visual Basic, JavaScript).",
    "IDE (Integrated Development Environment): editor + compiler/interpreter + debugger in one tool, e.g. IDLE, VS Code, PyCharm, Eclipse.",
    "Qualities of a good program: correct, reliable, efficient, readable (comments, indentation, meaningful names), maintainable, portable, user-friendly.",
    "Documentation: internal (comments in code) and external (user manual, technical manual)."
  ]],
  ["Data types, variables & operators", [
    "Variable = named memory location whose value can change. Constant = value that does not change during the program (e.g. PI = 3.142).",
    "Basic data types: integer (whole numbers: 5, −12), float/real (decimals: 3.14), string (text in quotes: \"NOUN\"), boolean (True/False), character (single symbol 'A').",
    "Python is dynamically typed (type decided when the value is assigned). C and Java are statically typed (declare the type first: int x = 5;).",
    "Identifier (name) rules: start with a letter or underscore; letters, digits and underscores only; no spaces; cannot be a keyword (if, for, while); case-sensitive (Total ≠ total).",
    "Assignment gives a variable a value: x = 10 (Python), x ← 10 (pseudocode). '=' assigns, '==' compares.",
    "Arithmetic operators: + add, − subtract, * multiply, / divide (Python 7/2 = 3.5), // floor division (7//2 = 3), % modulus/remainder (7%2 = 1), ** exponent (2**3 = 8).",
    "Relational/comparison operators: == equal, != not equal, <, >, <=, >=. They give True or False.",
    "Logical operators: AND (true only if both true), OR (true if at least one true), NOT (reverses).",
    "Operator precedence (highest first): brackets (), exponent **, unary minus, * / // %, + −, relational, NOT, AND, OR. Same level goes left to right (except ** right to left). Example: 2 + 3 * 4 = 14.",
    "Type casting/conversion: int(\"5\") → 5, float(3) → 3.0, str(10) → \"10\". input() in Python always returns a string.",
    "Input/output in Python: name = input(\"Enter name: \"); print(\"Hello\", name).",
    "Comments: # in Python, // or /* */ in C and Java. Ignored by the translator."
  ]],
  ["Control structures", [
    "Sequence: statements run one after another in order.",
    "Selection (decision): choose a path based on a condition. Forms: if, if-else, if-elif-else (chained), nested if, switch/case (C, Java).",
    "Python if syntax: if score >= 40: print(\"Pass\") else: print(\"Fail\"). Indentation marks the block in Python; braces { } in C/Java.",
    "Iteration (loop/repetition): repeat statements. Counter-controlled loops repeat a known number of times (for). Condition-controlled loops repeat until a condition changes (while).",
    "for loop: for i in range(1, 6): print(i) prints 1 to 5. range(start, stop, step) stops before 'stop'. range(5) gives 0,1,2,3,4.",
    "while loop tests the condition first (pre-test), so the body may run zero times.",
    "do-while / repeat-until tests after the body (post-test), so the body always runs at least once. Python has no do-while.",
    "break exits the loop immediately. continue skips the rest of this pass and goes to the next. pass does nothing (placeholder).",
    "Infinite loop: condition never becomes false (e.g. forgetting to update the counter).",
    "Nested loop: a loop inside another. Inner loop completes fully for every pass of the outer loop (3 outer × 4 inner = 12 runs).",
    "Counter: variable that counts (count = count + 1). Accumulator: variable that adds up a running total (total = total + x). Initialise both before the loop.",
    "Sentinel value: special value that ends input (e.g. enter −1 to stop)."
  ]],
  ["Functions, lists & strings", [
    "Function (subroutine/procedure/method) = named, reusable block of code that does one task. Benefits: reuse, modularity, easier testing and maintenance.",
    "Python: def add(a, b): return a + b. Call: add(2, 3) gives 5.",
    "Parameters are the names in the function definition (a, b). Arguments are the actual values passed in the call (2, 3).",
    "return sends a value back to the caller and ends the function. A function with no return gives None in Python. A procedure does a task without returning a value.",
    "Built-in functions: print(), input(), len(), int(), range(), abs(), max(), min(). User-defined functions are written by the programmer.",
    "Scope: local variables exist only inside their function; global variables are declared outside and visible everywhere.",
    "Passing: by value (a copy is passed; original unchanged) or by reference (address passed; function can change the original).",
    "Recursion: a function that calls itself. Needs a base case to stop and a recursive case that moves toward it. Example: factorial(n) = n × factorial(n−1), base case factorial(0) = 1. No base case → stack overflow.",
    "Array/list: stores many values under one name, accessed by index starting at 0. marks = [70, 55, 80]; marks[0] is 70; len(marks) is 3; marks[-1] is the last item.",
    "List operations: append(), insert(), remove(), pop(), sort(); slicing marks[0:2] gives the first two items. 2-D arrays (matrices) use row and column indexes.",
    "Strings are sequences of characters, 0-indexed and immutable in Python. \"NOUN\"[0] = 'N'. Operations: + concatenation, * repetition, len(), upper(), lower(), slicing.",
    "Searching: linear search checks each item in turn; binary search halves a sorted list each step (faster). Sorting: bubble sort swaps adjacent items repeatedly."
  ]]
];

SUMMARY.GST201 = [
  ["Culture & the peoples of Nigeria", [
    "Culture = the total way of life of a people. E.B. Tylor (1871): 'that complex whole which includes knowledge, belief, art, morals, law, custom and any other capabilities and habits acquired by man as a member of society'.",
    "Material culture = tangible things: tools, clothes, food, houses, crafts, artworks. Non-material culture = intangible: language, beliefs, values, norms, customs, religion, music.",
    "Features of culture: learned (not inborn), shared, transmitted from generation to generation (socialisation/enculturation), symbolic (language is the main symbol), dynamic (changes over time), integrated, adaptive.",
    "Elements: norms (rules of behaviour: folkways, mores, taboos, laws), values (what is good and desirable), beliefs, symbols, language.",
    "Ethnocentrism = judging other cultures as inferior using your own as the standard. Cultural relativism = understanding a culture on its own terms. Acculturation = adopting another culture's traits through contact. Assimilation = being absorbed fully into another culture.",
    "Nigeria has over 250 ethnic groups and over 500 languages. Three major groups: Hausa-Fulani (North), Yoruba (South-West), Igbo (South-East).",
    "Other groups: Kanuri (Borno), Tiv, Idoma, Igala (Middle Belt), Nupe, Ijaw/Izon (Niger Delta), Ibibio, Efik, Annang (Akwa Ibom/Cross River), Edo/Bini, Urhobo, Itsekiri, Isoko, Jukun, Gbagyi.",
    "Language families: Niger-Congo (Yoruba, Igbo), Afro-Asiatic/Chadic (Hausa), Nilo-Saharan (Kanuri). English is the official language.",
    "Religion: traditional African religion, Islam (came through trans-Saharan trade, about the 11th century in Kanem-Bornu), Christianity (missionaries from the 1840s, Badagry 1842)."
  ]],
  ["Pre-colonial societies & civilisations", [
    "Nok culture (about 500 BC – AD 200), southern Kaduna/Jos Plateau: famous terracotta (baked clay) heads and early iron smelting. Studied by Bernard Fagg.",
    "Igbo-Ukwu (Anambra, about 9th–10th century AD): oldest known bronze castings in West Africa; found 1938, excavated by Thurstan Shaw.",
    "Ife (Ile-Ife): spiritual home of the Yoruba; naturalistic bronze/brass and terracotta heads (12th–15th century). Ruled by the Ooni. Oduduwa is regarded as ancestor of the Yoruba.",
    "Benin Kingdom: ruled by the Oba with chiefs (Uzama kingmakers, palace chiefs, town chiefs). Famous for bronzes and ivory carvings. British punitive expedition of 1897 looted the Benin bronzes.",
    "Old Oyo Empire: Alaafin (king) checked by the Oyomesi (council of 7 led by the Bashorun). The Ogboni society checked the Oyomesi. Army led by the Are-Ona-Kakanfo. A rejected Alaafin was presented an empty calabash or parrot's eggs and had to take his own life.",
    "Hausa states: Hausa Bakwai (Daura, Kano, Katsina, Zazzau/Zaria, Gobir, Rano, Biram) and Banza Bakwai (e.g. Zamfara, Kebbi, Nupe, Gwari, Yauri, Kwararafa, Yoruba). Bayajidda legend explains their origin. Ruler = Sarki.",
    "Sokoto Caliphate: Usman dan Fodio's jihad began 1804; headed by the Sultan (Sarkin Musulmi) at Sokoto, with emirates ruled by Emirs. Gwandu was the second headquarters.",
    "Kanem-Bornu: one of the oldest states, ruled by the Mai (Sefuwa dynasty), later the Shehu (El-Kanemi dynasty) from the 19th century. Mai Idris Alooma was a famous ruler.",
    "Igbo political system: acephalous/segmentary (no central king; 'Igbo enwe eze'). Governed by council of elders, Umunna (lineage), age grades, title societies (Ozo, Nze), Ofo holders, Umuada (married daughters), oracles (Arochukwu's Ibini Ukpabi) and the village assembly. Exceptions: Onitsha and Nri had kings.",
    "Economy before colonialism: farming, fishing, crafts (weaving, blacksmithing, pottery), local and long-distance trade (trans-Saharan in the north; Atlantic trade and slave trade in the south)."
  ]],
  ["Colonialism & the making of Nigeria", [
    "European contact: Portuguese reached Benin in the 1470s–1480s. The trans-Atlantic slave trade followed; Britain abolished it in 1807.",
    "Lagos was bombarded in 1851 and annexed as a British colony in 1861. Royal Niger Company (George Goldie) controlled the Niger area by charter from 1886 until it was revoked in 1899/1900.",
    "Berlin Conference 1884–85 shared Africa among European powers.",
    "1 January 1900: Protectorates of Northern and Southern Nigeria created. 1906: Lagos Colony merged with the Southern Protectorate.",
    "Flora Shaw (journalist, later Lugard's wife) suggested the name 'Nigeria' in 1897 (from the River Niger).",
    "1 January 1914: amalgamation of Northern and Southern Protectorates by Sir Frederick Lugard, first Governor-General. Reasons: economic (use the South's surplus to fund the North) and administrative convenience.",
    "Indirect rule: Britain ruled through traditional rulers and native authorities. Worked well in the North (existing emirates), partly in the West, failed in the East (no kings, so the British appointed unpopular 'warrant chiefs'; led to the Aba Women's Riot of 1929).",
    "Colonial constitutions: Clifford 1922 (elective principle; Lagos and Calabar elected members; led to political parties), Richards 1946 (regionalism: North, East, West), Macpherson 1951 (more consultation, regional legislatures), Lyttleton 1954 (made Nigeria a federation).",
    "Nationalists and parties: Herbert Macaulay (father of Nigerian nationalism; NNDP 1923), Nnamdi Azikiwe (NCNC 1944, West African Pilot), Obafemi Awolowo (Action Group 1951, from Egbe Omo Oduduwa), Ahmadu Bello, Sardauna of Sokoto (NPC), Anthony Enahoro (moved the self-government motion, 1953). Nigerian Youth Movement 1930s.",
    "Regional self-government: West and East 1957, North 1959."
  ]],
  ["Post-independence Nigeria", [
    "Independence: 1 October 1960. Tafawa Balewa was Prime Minister; Nnamdi Azikiwe became Governor-General, then first President when Nigeria became a Republic on 1 October 1963.",
    "Mid-West Region was created in 1963 (4th region).",
    "First Republic crises: 1962–63 census crisis, Western Region crisis (1962), 1964 election crisis, Tiv riots.",
    "15 January 1966 coup (Major Chukwuma Kaduna Nzeogwu): Balewa and Ahmadu Bello killed; Aguiyi-Ironsi became Head of State (Unification Decree No. 34). 29 July 1966 counter-coup: Yakubu Gowon became Head of State.",
    "Civil War 1967–1970: Ojukwu declared the Republic of Biafra on 30 May 1967; war began 6 July 1967 and ended 15 January 1970. Aburi Accord (Ghana, January 1967) failed.",
    "Gowon's post-war policy: 'No victor, no vanquished' and the 3Rs: Reconciliation, Reconstruction, Rehabilitation.",
    "NYSC (National Youth Service Corps) established 22 May 1973 by Gowon to promote national unity among graduates.",
    "Leaders: Murtala Mohammed (1975, killed 1976), Olusegun Obasanjo (handed over to civilians 1979), Shehu Shagari (Second Republic 1979–83), Buhari (1983, War Against Indiscipline), Babangida (1985, SAP; annulled the June 12, 1993 election won by M.K.O. Abiola), Shonekan (Interim Government), Abacha (1993–98), Abdulsalami Abubakar (1998–99).",
    "Fourth Republic began 29 May 1999 with Obasanjo. Later: Yar'Adua (2007), Jonathan (2010), Buhari (2015), Tinubu (2023). June 12 is Democracy Day from 2019.",
    "States: 12 (1967, Gowon) → 19 (1976, Murtala) → 21 (1987) → 30 (1991) → 36 (1996, Abacha) plus FCT. 774 local government areas. Capital moved from Lagos to Abuja on 12 December 1991.",
    "Federal character principle (1979 constitution): appointments and resources shared to reflect Nigeria's diversity. Quota system in admissions."
  ]],
  ["Social institutions, values & national development", [
    "Family = basic unit of society. Nuclear family: parents and children. Extended family: includes grandparents, uncles, aunts, cousins; common in Nigeria and gives social security.",
    "Marriage forms: monogamy (one spouse) and polygamy: polygyny (one man, several wives) and polyandry (one woman, several husbands; rare). Bride price is common. Exogamy = marrying outside one's group; endogamy = within it.",
    "Descent: patrilineal (through the father, most Nigerian groups), matrilineal (through the mother, e.g. Ohafia/Afikpo Igbo), double/bilateral.",
    "Social institutions: family, marriage, religion, education, economy, government/political, age grades, secret societies.",
    "Socialisation = learning culture. Agents: family (primary), school, peer group, religion, mass media.",
    "Shared Nigerian values: respect for elders, hospitality, communalism (living together and sharing), extended family support, hard work, religious faith, chastity, honesty.",
    "Festivals: Argungu fishing festival (Kebbi), Osun-Osogbo (Osun), Eyo (Lagos), New Yam festival/Iri ji (Igbo), Durbar (Hausa-Fulani, Sallah), Ofala (Onitsha), Calabar Carnival.",
    "Challenges to national integration: ethnicity/tribalism, religious intolerance, corruption, insecurity (insurgency, banditry), poverty, unemployment, poor leadership, nepotism, resource control in the Niger Delta.",
    "Ways to promote unity and development: education, NYSC, federal character, unity schools (Federal Government Colleges), inter-ethnic marriage, national symbols, good governance, fair sharing of resources, sports.",
    "National symbols: flag green-white-green (designed by Taiwo Akinkunmi, 1959); coat of arms; national anthem 'Nigeria, We Hail Thee' (restored 2024); motto 'Unity and Faith, Peace and Progress'."
  ]]
];

SUMMARY.IFT203 = [
  ["Internet & the World Wide Web", [
    "Internet = global network of interconnected networks using TCP/IP. The Web (WWW) is one service on the internet: linked hypertext documents viewed in browsers. Email and FTP are other internet services.",
    "History: ARPANET (1969, US Department of Defense) was the forerunner. TCP/IP adopted 1 January 1983. Tim Berners-Lee invented the WWW at CERN in 1989 (first website 1991) and created HTML, HTTP and URLs. Mosaic (1993) was the first popular graphical browser, then Netscape.",
    "W3C (World Wide Web Consortium, founded 1994 by Berners-Lee) sets web standards. IETF sets internet protocols. ICANN manages domain names and IP addresses.",
    "Client-server model: client (browser) sends an HTTP request; web server (Apache, Nginx, IIS) returns a response (HTML page, image, status code).",
    "HTTP status codes: 200 OK, 301 moved permanently, 404 not found, 500 internal server error.",
    "Protocols and ports: HTTP 80, HTTPS 443 (encrypted with SSL/TLS), FTP 20/21, SSH 22, Telnet 23, SMTP 25 (sending email), DNS 53, POP3 110 and IMAP 143 (receiving email).",
    "IP address identifies a device: IPv4 is 32-bit (e.g. 192.168.0.1); IPv6 is 128-bit. DNS (Domain Name System) translates domain names into IP addresses.",
    "URL (Uniform Resource Locator) parts: scheme/protocol (https://), domain/host (www.nou.edu.ng), port (optional), path (/courses/index.html), query (?id=5), fragment (#top).",
    "Domains: top-level .com, .org, .edu, .gov, .net; country codes .ng, .uk. In nou.edu.ng, 'nou' is the organisation's name.",
    "Web browser = client software that requests and displays web pages: Chrome, Firefox, Edge, Safari, Opera. A search engine (Google, Bing) finds pages; it is not a browser.",
    "Static website: same fixed content for everyone (HTML/CSS). Dynamic website: content generated per request, often from a database (PHP, ASP.NET, Node.js).",
    "Client-side technologies run in the browser: HTML, CSS, JavaScript. Server-side run on the server: PHP, Python, Java, ASP.NET, databases like MySQL.",
    "Web hosting = renting server space to make a site available online. Web 1.0 (read-only), Web 2.0 (interactive, social media), Web 3.0 (semantic, decentralised)."
  ]],
  ["HTML fundamentals", [
    "HTML (HyperText Markup Language) defines the structure and content of web pages. It is a markup language, not a programming language. Files end in .html or .htm. Current version: HTML5.",
    "Element = start tag + content + end tag: <p>Hello</p>. Empty/void elements have no closing tag: <br>, <hr>, <img>, <input>, <meta>, <link>.",
    "Attributes add information inside the start tag as name=\"value\": <a href=\"page.html\">, <img src=\"pic.jpg\" alt=\"text\">. Common: id, class, style, title.",
    "Page skeleton: <!DOCTYPE html> (declares HTML5) → <html> → <head> (title, meta charset, CSS links; not shown on page) → <body> (everything visible).",
    "Text: headings <h1> (biggest, most important) to <h6> (smallest); <p> paragraph; <br> line break; <hr> horizontal rule; <b>/<strong> bold; <i>/<em> italic; <u> underline; <sup>, <sub>; <pre> preformatted; <blockquote>; <!-- comment -->.",
    "Links: <a href=\"url\">text</a>. target=\"_blank\" opens a new tab. mailto: links open email. Link to a section on the page: href=\"#id\".",
    "Images: <img src=\"file\" alt=\"description\" width=\"\" height=\"\">. alt text shows if the image fails and helps screen readers.",
    "Lists: <ul> unordered (bullets), <ol> ordered (numbers; type=\"A\", \"i\", start), <li> list item, <dl> description list with <dt> term and <dd> description.",
    "Tables: <table>, <tr> row, <th> header cell (bold, centred), <td> data cell, <caption>, <thead>, <tbody>, <tfoot>. colspan merges columns, rowspan merges rows.",
    "Forms collect input: <form action=\"url\" method=\"get|post\">. GET puts data in the URL (visible); POST sends it in the request body (better for passwords).",
    "Form controls: <input type=\"text|password|email|number|date|radio|checkbox|file|submit|reset|hidden\">; radio = choose one, checkbox = choose many; <select> with <option> (drop-down), <textarea> (multi-line), <button>, <label>. name attribute labels the data sent.",
    "HTML5 semantic elements: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>, <figure>. Media: <audio>, <video>, <canvas>. Block elements (div, p, h1) start on a new line; inline elements (span, a, b) do not.",
    "XHTML = stricter XML-based HTML: lowercase tags, all tags closed, attributes quoted. DHTML = HTML + CSS + JavaScript together. XML stores and transports data with custom tags."
  ]],
  ["CSS (Cascading Style Sheets)", [
    "CSS controls presentation: colours, fonts, spacing, borders, layout. HTML = structure, CSS = style, JavaScript = behaviour. Proposed by Håkon Wium Lie (1994).",
    "Rule syntax: selector { property: value; }. Example: p { color: blue; font-size: 16px; }. Comments: /* ... */.",
    "Three ways to add CSS: inline (style attribute on one element), internal/embedded (<style> in <head>), external (.css file linked with <link rel=\"stylesheet\" href=\"style.css\">). External is best for many pages.",
    "When rules conflict: inline beats internal/external (whichever comes later wins between those), which beat browser defaults. !important overrides all.",
    "Selectors: element/type (p), class (.menu, reusable), id (#header, unique), universal (*), group (h1, h2, p), descendant (nav a), child (ul > li), pseudo-class (a:hover, :first-child), attribute ([type=\"text\"]).",
    "Specificity: inline > id > class/attribute/pseudo-class > element. 'Cascade' = rules combine; later rule wins when specificity is equal. Inheritance: children inherit some properties (colour, font) from parents.",
    "Box model, inside out: content → padding (inside border) → border → margin (outside border). Width = content + padding + border (+ margin) unless box-sizing: border-box.",
    "Common properties: color, background-color, background-image, font-family, font-size, font-weight, text-align, text-decoration, line-height, width, height, border, padding, margin, display, position, float.",
    "Colour values: names (red), hex (#FF0000), rgb(255,0,0), rgba (with transparency), hsl.",
    "Units: absolute px, pt, cm; relative %, em (relative to parent font size), rem (relative to root), vw/vh (viewport).",
    "display: block, inline, inline-block, none (hides). position: static (default), relative, absolute, fixed, sticky.",
    "Layout: float, Flexbox (display: flex, one direction), Grid (display: grid, rows and columns). Responsive design uses media queries: @media (max-width: 600px) { ... }."
  ]],
  ["JavaScript", [
    "JavaScript (JS) is a client-side scripting language that makes pages interactive. Created by Brendan Eich at Netscape in 1995. Standardised as ECMAScript. Not related to Java.",
    "Adding JS: <script>...</script> (head or end of body), external <script src=\"app.js\"></script>, or inline event attributes like onclick=\"...\".",
    "Output: alert() (pop-up), console.log() (developer console), document.write(), innerHTML. Input: prompt(), confirm() (OK/Cancel), form fields.",
    "Variables: var (function scope, older), let (block scope, can be reassigned), const (block scope, cannot be reassigned). JS is dynamically typed and case-sensitive.",
    "Data types: number, string, boolean, undefined (declared, no value), null (intentionally empty), object, array, symbol, bigint. typeof tells the type.",
    "Operators: arithmetic + − * / % **, ++ −−; assignment = += −=; comparison == (loose, converts type: 5 == \"5\" is true), === (strict, value and type: 5 === \"5\" is false), !=, !==; logical && || !. + also joins strings: \"5\" + 2 = \"52\".",
    "Control: if, else if, else, switch; loops for, while, do...while, for...of (arrays), for...in (object keys); break, continue.",
    "Functions: function add(a, b) { return a + b; }; arrow function: const add = (a, b) => a + b;",
    "Arrays: let a = [1, 2, 3]; a[0] is 1; a.length; push(), pop(), shift(), unshift(), join(), sort(). Objects: let s = { name: \"Ada\", age: 20 }; s.name.",
    "DOM (Document Object Model): the browser's tree of the page; JS reads and changes it. Select: document.getElementById(\"x\"), querySelector(\".c\"). Change: innerHTML, textContent, style.color, setAttribute, createElement, appendChild.",
    "Events: click, dblclick, mouseover, keydown, submit, change, load, focus, blur. Attach with element.addEventListener(\"click\", fn) or onclick.",
    "Common uses: form validation before submission, sliders, pop-ups, dynamic content, animations, AJAX (load data without reloading). BOM (Browser Object Model): window, location, history, navigator."
  ]]
];

SUMMARY.IFT205 = [
  ["IT concepts, data & information", [
    "Information Technology (IT) = use of computers, storage, networks and processes to create, process, store, secure and exchange data. ICT adds communication technologies (telephone, radio, TV, internet).",
    "Computer = electronic device that accepts data (input), processes it under stored instructions (program), stores it, and produces results (output).",
    "Data = raw, unprocessed facts. Information = processed, organised, meaningful data. GIGO: Garbage In, Garbage Out.",
    "Information processing cycle: input → processing → output → storage. Data processing operations: collection, classification, sorting, calculation, summarisation, storage, retrieval, dissemination.",
    "Characteristics of computers: speed, accuracy, storage capacity, diligence (no tiredness), automation, versatility, reliability. Limitations: cannot think (no IQ), no feelings, depends on instructions and power.",
    "Parts of a computer system: hardware, software, humanware/peopleware (users), data, procedures.",
    "Qualities of good information: accurate, timely, relevant, complete, concise, understandable, cost-effective.",
    "Uses of computers: education, banking, health, business, government, entertainment, communication, research, transport, military."
  ]],
  ["History & classification of computers", [
    "Early counting aids: abacus (oldest), Napier's bones (John Napier, 1617), slide rule (William Oughtred).",
    "Mechanical calculators: Pascaline (Blaise Pascal, 1642, add and subtract), Leibniz's stepped reckoner (1670s, also multiply and divide).",
    "Jacquard's loom (1801) used punched cards to control weaving patterns.",
    "Charles Babbage: Difference Engine and Analytical Engine (1830s), with a 'mill' (CPU) and 'store' (memory); father of the computer. Ada Lovelace wrote programs for it: first programmer.",
    "Herman Hollerith's tabulating machine with punched cards processed the 1890 US census; his company became part of IBM.",
    "First generation (about 1940–1956): vacuum tubes, magnetic drums, machine language; huge, hot, unreliable. ENIAC (1946, Eckert and Mauchly), EDVAC, UNIVAC I (first commercial, 1951).",
    "Second generation (1956–1963): transistors (invented 1947 at Bell Labs), assembly and early high-level languages (FORTRAN, COBOL), magnetic core memory. Smaller, more reliable.",
    "Third generation (1964–1971): integrated circuits (ICs on silicon chips), keyboards and monitors, operating systems. IBM System/360.",
    "Fourth generation (1971–present): microprocessors (Intel 4004, 1971) using LSI and VLSI, personal computers (Apple II 1977, IBM PC 1981), GUIs, networks and the internet.",
    "Fifth generation (present and future): artificial intelligence, parallel processing, natural language, ULSI, quantum computing.",
    "By type of data: analog (continuous: thermometer, speedometer), digital (discrete 0s and 1s: most computers), hybrid (both: ICU patient monitors, petrol pumps).",
    "By size/power: supercomputer (fastest; weather, research), mainframe (large organisations, many users, banks), minicomputer (mid-range), microcomputer (personal: desktop, laptop, tablet, smartphone). By purpose: general-purpose vs special-purpose (embedded)."
  ]],
  ["Hardware", [
    "Hardware = physical parts of a computer. Main units: input, CPU (processing), memory/storage, output.",
    "CPU (Central Processing Unit), the 'brain': Control Unit (fetches, decodes and directs operations), Arithmetic and Logic Unit (calculations and comparisons), registers (tiny fast storage: accumulator, program counter, instruction register).",
    "Machine cycle: fetch → decode → execute → store. Clock speed in hertz (GHz). Multi-core processors have several cores on one chip.",
    "Primary memory: RAM (volatile, read/write, holds running programs and data) and ROM (non-volatile, holds startup instructions like BIOS). Cache = very fast memory between CPU and RAM.",
    "ROM types: PROM, EPROM (erased with UV light), EEPROM (erased electrically). RAM types: SRAM (faster, used for cache), DRAM (main memory, needs refreshing).",
    "Secondary storage (non-volatile, large): magnetic (hard disk HDD, magnetic tape, floppy), optical (CD 700 MB, DVD 4.7 GB, Blu-ray 25 GB), solid-state/flash (SSD, USB flash drive, memory card). Cloud storage online.",
    "Storage units: bit (0 or 1) → nibble (4 bits) → byte (8 bits, one character) → KB (1024 bytes) → MB (1024 KB) → GB → TB → PB.",
    "Input devices: keyboard, mouse, scanner, microphone, webcam, joystick, light pen, touchpad, barcode reader, OMR (optical mark reader, marks exam answer sheets), OCR, MICR (magnetic ink, bank cheques), biometric scanner.",
    "Output devices: monitor (CRT, LCD, LED), printers (impact: dot matrix; non-impact: laser, inkjet), plotter (large drawings), speakers, projector. Softcopy = on screen; hardcopy = printed.",
    "Both input and output: touchscreen, modem, headset with microphone.",
    "Motherboard: main circuit board connecting CPU, memory and expansion cards. Ports: USB, HDMI, VGA, Ethernet. Power supply unit (PSU); UPS for backup power."
  ]],
  ["Software", [
    "Software = programs (instructions) that tell hardware what to do. Two main types: system software and application software.",
    "System software runs and manages the computer: operating system, utility programs, language translators, device drivers, firmware.",
    "Operating system (OS) manages hardware, memory, files, processes and security and provides the user interface. Examples: Windows, macOS, Linux, UNIX, Android, iOS. Booting = starting the computer and loading the OS (cold boot from off; warm boot = restart).",
    "User interfaces: command-line interface CLI (type commands: MS-DOS) and graphical user interface GUI (WIMP: windows, icons, menus, pointer).",
    "OS types: single-user/single-tasking, multi-user, multitasking, real-time, batch, distributed, network OS, mobile OS.",
    "Utility programs maintain the computer: antivirus, disk cleanup, defragmenter, backup, file compression (WinZip), file manager.",
    "Language translators: compiler, interpreter, assembler. Device driver lets the OS control a device (printer driver).",
    "Application software does user tasks: word processing (MS Word), spreadsheets (Excel), presentations (PowerPoint), databases (Access), desktop publishing (Publisher), graphics (Photoshop, CorelDraw), browsers, games, accounting packages.",
    "Off-the-shelf/packaged/generic software is sold to many users; custom/tailor-made/bespoke software is written for one organisation.",
    "Firmware = software permanently stored on a ROM chip (BIOS).",
    "Licensing: proprietary/commercial (paid, closed source: Windows, MS Office), open source (source code free to modify: Linux, Firefox, LibreOffice), freeware (free, closed source), shareware (free trial then pay), public domain (no copyright)."
  ]],
  ["Networks, the Internet & IT in society", [
    "Computer network = two or more computers linked to share resources (files, printers, internet). Benefits: resource sharing, communication, central data, lower cost.",
    "Types by area: PAN (personal, a few metres, Bluetooth), LAN (building or campus), MAN (city), WAN (country or world; the internet is the largest WAN). WLAN uses Wi-Fi.",
    "Topologies: bus, star (most common), ring, mesh, tree, hybrid.",
    "Devices: NIC (network interface card), hub, switch, router (connects different networks and directs data), modem (modulator-demodulator: digital ↔ analog), access point, repeater, gateway, bridge.",
    "Transmission media: wired (twisted pair, coaxial, fibre optic: fastest, uses light) and wireless (radio, microwave, satellite, infrared, Bluetooth, Wi-Fi).",
    "Client-server network: central server provides services. Peer-to-peer: all computers are equal.",
    "Internet services: WWW, email, FTP, instant messaging, VoIP, video conferencing, social media, e-learning, cloud computing. ISP (Internet Service Provider) gives access (MTN, Airtel, Glo).",
    "Intranet = private network inside an organisation using internet technology. Extranet = part of an intranet opened to outside partners.",
    "IT applications: e-learning (NOUN), e-commerce, e-banking (ATMs, mobile apps), e-government, telemedicine, GIS and GPS, CAD/CAM in manufacturing.",
    "Social and ethical issues: privacy, software piracy and copyright, cybercrime (hacking, fraud), viruses and malware, health problems (eye strain, RSI, back pain), job loss from automation, e-waste, digital divide (gap between those with and without IT access).",
    "IT careers: programmer, systems analyst, network administrator, database administrator, web developer, IT support, cyber security analyst, data scientist, computer engineer. Bodies: CPN (Computer Professionals Registration Council of Nigeria), NCS (Nigeria Computer Society)."
  ]]
];

SUMMARY.IFT213 = [
  ["Multimedia basics", [
    "Multimedia = combination of two or more media types (text, images, audio, video, animation) delivered and controlled by computer.",
    "Five basic elements: text, graphics/images, audio, video, animation. User control (interactivity) makes it 'interactive multimedia'.",
    "Linear multimedia plays start to finish with no user control (film, slideshow). Non-linear/interactive multimedia lets users control navigation and pace (games, websites, e-learning, kiosks).",
    "Hypertext = text with links to other text. Hypermedia = links among text, images, audio and video. Ted Nelson coined 'hypertext' (1960s).",
    "Applications: education/e-learning and CBT, entertainment (games, films, music), business (presentations, adverts, training), medicine (simulation, imaging), engineering (CAD), virtual reality (VR), augmented reality (AR), web pages, public kiosks.",
    "A multimedia system needs: fast CPU, large RAM and storage, good graphics card, sound card, high-resolution monitor, speakers, microphone, camera, scanner and software.",
    "Delivery: offline (CD-ROM, DVD, USB) or online (web, streaming).",
    "Multimedia team: project manager, instructional designer, writer/scriptwriter, graphic artist, audio and video specialists, programmer/multimedia developer."
  ]],
  ["Text & images", [
    "Text is the most basic element and carries most information. Typeface = font family design (Arial). Font = a specific size and style of a typeface (Arial 12pt bold). Size in points (72 points = 1 inch).",
    "Serif fonts have small strokes at letter ends (Times New Roman: good for print). Sans-serif fonts have none (Arial, Verdana: good for screens). Monospaced: every character same width (Courier). Decorative/script fonts for headings.",
    "Leading = space between lines. Kerning = space between pairs of letters. Tracking = overall letter spacing. Font formats: TrueType, OpenType, PostScript.",
    "Bitmap/raster images: grid of pixels. Good for photographs. Become jagged (pixelated) when enlarged. Editors: Photoshop, GIMP, Paint.",
    "Vector images: mathematical lines, curves and shapes. Scale to any size without loss, smaller files. Good for logos, drawings, fonts. Editors: Illustrator, CorelDraw, Inkscape.",
    "Resolution = number of pixels (e.g. 1920 × 1080) or pixel density in ppi/dpi. Higher resolution = more detail, bigger files.",
    "Colour depth = bits per pixel: 1-bit = 2 colours, 4-bit = 16, 8-bit = 256, 16-bit = 65,536 (high colour), 24-bit ≈ 16.7 million (true colour), 32-bit adds an alpha (transparency) channel. Colours = 2ⁿ.",
    "Image file size (bits) = width × height × colour depth. Divide by 8 for bytes.",
    "Colour models: RGB (red, green, blue; additive, for screens; all full = white), CMYK (cyan, magenta, yellow, key/black; subtractive, for printing), HSB/HSV (hue, saturation, brightness), YUV (video).",
    "Image formats: BMP (uncompressed, large), JPEG (lossy, best for photos), GIF (256 colours, lossless LZW, animation and transparency), PNG (lossless, transparency), TIFF (high quality, printing), SVG (vector, web), RAW (camera), PSD (Photoshop).",
    "Capture: digital cameras, scanners, screen capture. Editing: crop, resize, rotate, brightness/contrast, filters, layers."
  ]],
  ["Audio", [
    "Sound = vibration travelling as waves through a medium. Frequency (pitch) in hertz (Hz). Amplitude (loudness) in decibels (dB). Human hearing ≈ 20 Hz to 20 kHz.",
    "Analog sound is continuous; computers store digital sound. Digitising uses an ADC (analog-to-digital converter); playback uses a DAC.",
    "Sampling = measuring the wave at regular intervals. Sampling rate = samples per second. Common: 8 kHz (telephone), 22.05 kHz, 44.1 kHz (CD), 48 kHz (DVD/video).",
    "Quantisation = rounding each sample to the nearest level. Bit depth: 8-bit = 256 levels, 16-bit = 65,536 levels (CD quality). More bits = better quality, less quantisation noise.",
    "Nyquist theorem: sample at least twice the highest frequency. Hearing goes to about 20 kHz, so CD uses 44.1 kHz. Sampling too slowly causes aliasing.",
    "Channels: mono (1), stereo (2), surround 5.1 (6 channels).",
    "Uncompressed file size (bytes) = sampling rate × bit depth × channels × seconds ÷ 8. One minute of CD audio: 44,100 × 16 × 2 × 60 ÷ 8 ≈ 10.6 MB.",
    "MIDI (Musical Instrument Digital Interface) stores instructions (note, length, instrument, loudness), not actual sound, so files are tiny. Needs a synthesiser to play. Cannot store speech.",
    "Formats: WAV (Windows, uncompressed), AIFF (Apple, uncompressed), MP3 (MPEG-1 Audio Layer 3, lossy, about 10:1), AAC (lossy, better than MP3), WMA, OGG, FLAC (lossless), MIDI (.mid).",
    "Editing: trim, splice, mix tracks, fade in/out, normalise, remove noise, add effects (echo, reverb). Software: Audacity, Adobe Audition. Hardware: sound card, microphone, speakers."
  ]],
  ["Video & animation", [
    "Video = sequence of still images (frames) shown quickly to give the illusion of motion (persistence of vision).",
    "Frame rate = frames per second (fps). Film: 24 fps. PAL (Europe, Africa incl. Nigeria): 25 fps, 625 lines. NTSC (USA, Japan): about 30 fps (29.97), 525 lines. SECAM (France, Russia).",
    "Interlaced scanning draws odd lines then even lines (1080i). Progressive draws all lines in order (1080p).",
    "Aspect ratio = width : height. 4:3 (old TV), 16:9 (widescreen HD).",
    "Resolutions: SD 720 × 480/576, HD 1280 × 720 (720p), Full HD 1920 × 1080 (1080p), 4K UHD 3840 × 2160, 8K.",
    "Uncompressed video size = width × height × colour depth × frame rate × seconds ÷ 8 bytes. Very large, so video is always compressed.",
    "Formats/containers: AVI (Microsoft), MOV (Apple QuickTime), MP4 (MPEG-4, H.264/H.265), WMV, FLV, MKV, WebM. Streaming plays while downloading (YouTube).",
    "Editing: capture, cut, trim, transitions (fade, dissolve, wipe), titles, effects, render. Non-linear editing (NLE) edits any part in any order: Premiere Pro, Final Cut, DaVinci Resolve.",
    "Animation types: cel/traditional (hand-drawn on transparent celluloid), stop-motion/clay (photograph models moved bit by bit), 2D computer (Animate), 3D computer (models, rigging, rendering: Blender, Maya, 3ds Max).",
    "Keyframes mark the start and end of a movement. Tweening (in-betweening) generates the frames between keyframes. Morphing = smoothly changing one image into another. Path animation moves an object along a path.",
    "Rendering = computer producing final frames from a 3D model. Motion capture records real actors' movement for animation."
  ]],
  ["Compression, authoring & project development", [
    "Compression reduces file size to save storage and transmission time. Codec = coder-decoder that compresses and decompresses media.",
    "Lossless: no data lost; original rebuilt exactly. Methods: RLE (Run-Length Encoding: AAAAA → 5A), Huffman coding (short codes for frequent symbols), LZW (GIF, TIFF, ZIP), arithmetic coding. Formats: PNG, GIF, ZIP, FLAC.",
    "Lossy: permanently removes detail people are unlikely to notice; much smaller files. JPEG (images), MP3 and AAC (audio), MPEG and H.264 (video). More compression = lower quality.",
    "Video compression: intraframe/spatial (within one frame, like JPEG) and interframe/temporal (stores only changes between frames). MPEG uses I-frames (full), P-frames (predicted), B-frames (bi-directional).",
    "Standards: JPEG = Joint Photographic Experts Group; MPEG = Moving Picture Experts Group (MPEG-1 for VCD and MP3, MPEG-2 for DVD and digital TV, MPEG-4 for web and mobile).",
    "Compression ratio = original size ÷ compressed size.",
    "Authoring tools combine media into an interactive project. Types: card/page-based (HyperCard, ToolBook), icon/flowline-based (Authorware), time-based (timeline and frames: Flash/Animate, Director). Also HTML5 and PowerPoint.",
    "Authoring features: editing, organising, scripting, interactivity (buttons, hyperlinks), playback, delivery.",
    "Project stages: 1) planning and costing (idea, goals, audience, budget, schedule), 2) designing and producing (storyboard, scripts, media, assembly), 3) testing (alpha in-house; beta with real users), 4) delivering (packaging, distribution, installation).",
    "Storyboard = sketch of each screen in order showing layout, media and navigation. Navigation structures: linear, hierarchical, non-linear, composite.",
    "Copyright: get permission or licences for media you use; Creative Commons and royalty-free content."
  ]]
];

SUMMARY.IFT299 = [
  ["About SIWES", [
    "SIWES = Students Industrial Work Experience Scheme. Established 1973 by the Industrial Training Fund (ITF).",
    "ITF was set up by Decree No. 47 of 1971 to promote skills acquisition in industry and commerce. ITF headquarters is in Jos.",
    "Federal Government funds SIWES; ITF manages it. Supervising agencies: NUC (universities), NBTE (polytechnics), NCCE (colleges of education).",
    "Other stakeholders: the institution (SIWES unit/coordinator), employers (host companies), students.",
    "Objectives: bridge the gap between theory and practice; expose students to machines, equipment and work methods not available in school; give practical skills and work experience; prepare students for employment; link institutions and industry.",
    "SIWES is compulsory for students in science, engineering, technology, IT, agriculture, environmental and some other courses. IFT299 = SIWES I.",
    "Benefits to students: practical skills, professional attitude, understanding of work, possible job offers. Benefits to employers: extra hands, chance to spot talent, input to curriculum."
  ]],
  ["During the attachment", [
    "Before: get a placement letter, find a suitable IT organisation, get an acceptance letter, register with the SIWES unit and attend orientation.",
    "Forms: SCAF (Student Commencement of Attachment Form, sent when you start), placement list, ITF Form 8 (employer's evaluation), logbook.",
    "SIWES logbook (daily diary): record each day's activities, tools and skills learned, with diagrams where useful. The industry-based supervisor checks and signs it weekly. Key assessment document.",
    "Industry-based supervisor: staff of the host company who guides, assigns work and evaluates you. Institution-based supervisor: lecturer who visits to monitor and assess. ITF officers may also visit.",
    "Typical IT tasks: computer assembly, hardware repair and maintenance, OS and software installation, troubleshooting, networking (cabling, crimping RJ45 straight-through and crossover cables, configuring routers and switches, IP addressing), help desk, web development, programming, database work, data entry, graphics design.",
    "Workplace ethics: punctuality, regular attendance, proper dress, respect for colleagues, safety rules (e.g. anti-static wrist strap when handling components), confidentiality of company data, honesty and teamwork.",
    "Common problems: hard to find placement, lack of equipment, students given menial jobs, poor supervision, transport costs, delayed allowances."
  ]],
  ["Report writing & assessment", [
    "Technical report = formal written account of the experience gained, submitted at the end of SIWES.",
    "Preliminary pages: title page, declaration/certification (signed by supervisors), dedication, acknowledgement, abstract (short summary of the whole report), table of contents, list of figures and tables.",
    "Typical chapters: 1 introduction to SIWES (history, objectives, bodies); 2 company profile (history, location, vision/mission, organisational chart, departments, services); 3 work done and experience gained (tasks, tools, procedures, skills); 4 problems encountered and solutions; 5 summary, conclusion and recommendations.",
    "End matter: references (sources cited in a standard style such as APA) and appendices (diagrams, photos, forms).",
    "Good report writing: clear, concise, formal language, past tense, correct grammar, labelled diagrams, consistent formatting.",
    "Assessment: logbook, technical report, industry-based supervisor's evaluation (ITF Form 8), institution-based supervisor's visits, and an oral presentation/defence. Combined into the final grade.",
    "Students must complete SIWES and pass its assessment to graduate in courses that require it."
  ]]
];

SUMMARY.PHY108 = [
  ["Measurement, errors & graphs", [
    "SI base quantities: length (m), mass (kg), time (s), current (A), temperature (K), amount of substance (mol), luminous intensity (cd). Derived quantities are built from them (velocity m/s, force N).",
    "Instruments: metre rule (accuracy 0.1 cm = 1 mm), vernier caliper (0.01 cm = 0.1 mm), micrometer screw gauge (0.01 mm), stopwatch, balance, thermometer.",
    "Vernier reading = main scale reading + (coinciding vernier division × 0.01 cm). Micrometer reading = sleeve reading + (thimble division × 0.01 mm). Check and correct zero error.",
    "Systematic errors push all readings the same way (zero error, bad calibration, reaction time); averaging does not remove them; fix the instrument or method. Random errors scatter both ways; reduce by repeating readings and averaging.",
    "Parallax error: reading a scale at an angle. Avoid by keeping the eye directly in line (perpendicular) with the mark. A mirror behind the pointer helps.",
    "Accuracy = closeness to the true value. Precision = closeness of repeated readings to each other.",
    "Absolute error = |measured − true|. Relative error = absolute error ÷ true value. Percentage error = relative error × 100%.",
    "Combining errors: sum or difference → add absolute errors; product or quotient → add percentage errors; power → multiply the percentage error by the power.",
    "Significant figures: non-zero digits count; zeros between digits count; leading zeros do not (0.0045 has 2); trailing zeros after a decimal point count (2.500 has 4). Answer should not have more s.f. than the least precise data.",
    "Practical write-up: aim, apparatus, diagram, procedure (past tense, passive voice), precautions, table of readings, graph, calculations, result, conclusion, sources of error.",
    "Tables: column headings show quantity and unit (e.g. l/cm). Consistent decimal places.",
    "Graphs: independent variable on x-axis, dependent on y-axis; label axes with units; scale should use more than half the paper; draw a line or smooth curve of best fit; slope = Δy/Δx from a large triangle. For y = mx + c, m = slope, c = y-intercept.",
    "General precautions: avoid parallax, check zero error, repeat and average, tight connections, switch off current between readings, avoid draughts."
  ]],
  ["Electricity experiments", [
    "Ohm's law: current is directly proportional to p.d. at constant temperature: V = IR. Resistance in ohms (Ω). Slope of V (y) against I (x) = R; slope of I against V = 1/R.",
    "Ammeter measures current: in series, very low resistance. Voltmeter measures p.d.: in parallel, very high resistance. Galvanometer detects small currents (centre-zero). Rheostat = variable resistor to control current. Key closes the circuit.",
    "Series: R = R₁ + R₂ + R₃; same current through each. Parallel: 1/R = 1/R₁ + 1/R₂ + 1/R₃; same p.d. across each; total is less than the smallest. Two in parallel: R = R₁R₂/(R₁ + R₂).",
    "EMF (E) = energy per coulomb supplied by a cell (p.d. when no current flows). Terminal p.d. V = E − Ir (r = internal resistance). E = I(R + r). Lost volts = Ir.",
    "Graph of V (y) against I (x) for a cell: straight line, slope = −r, y-intercept = E.",
    "Resistivity: R = ρL/A, so R ∝ length. Graph of R against L has slope ρ/A. Unit of ρ: Ω·m.",
    "Wheatstone bridge: at balance (galvanometer reads zero) P/Q = R/S.",
    "Metre bridge: 1 m uniform wire. At balance length l (cm): X/R = l/(100 − l), so X = R·l/(100 − l). Most accurate when balance point is near the middle.",
    "Potentiometer: long uniform wire with a driver cell; compares EMFs: E₁/E₂ = l₁/l₂. At balance no current is drawn from the test cell, so it measures true EMF (better than a voltmeter). Internal resistance: r = R(l₁ − l₂)/l₂.",
    "Power P = IV = I²R = V²/R (watts). Energy = Pt. Joule heating: H = I²Rt.",
    "Precautions: clean and tighten terminals, open the key between readings to avoid heating, avoid parallax on meters, tap the jockey gently (do not scrape the wire)."
  ]],
  ["Optics experiments", [
    "Laws of reflection: angle of incidence = angle of reflection; incident ray, reflected ray and normal lie in the same plane. Plane mirror image: virtual, upright, same size, laterally inverted, as far behind as the object is in front.",
    "Refraction = bending of light passing from one medium to another because its speed changes. Bends towards the normal entering a denser medium.",
    "Snell's law: sin i / sin r = n (refractive index, constant). n = speed in vacuum ÷ speed in medium = real depth ÷ apparent depth. Glass ≈ 1.5, water ≈ 1.33.",
    "Glass block experiment: trace the block, draw normal and incident rays, use pins to find the emergent ray, measure i and r for several angles. Plot sin i (y) against sin r (x): slope = n.",
    "Critical angle C: angle of incidence in the denser medium that gives refraction at 90°. sin C = 1/n. Glass C ≈ 42°.",
    "Total internal reflection: light goes from denser to less dense medium AND angle of incidence > C. Uses: optical fibres, prism periscopes and binoculars, mirage, diamond sparkle.",
    "Lenses: converging (convex) and diverging (concave). Focal length f = distance from optical centre to principal focus. Power P = 1/f (f in metres), unit dioptre (D).",
    "Lens/mirror formula: 1/f = 1/u + 1/v (u = object distance, v = image distance, real-is-positive). Magnification m = v/u = image height ÷ object height.",
    "Converging lens experiment: rough f by focusing a distant object; then measure u and v for several positions using a screen or no-parallax. Plot 1/v against 1/u: straight line, both intercepts = 1/f. Or plot uv against (u + v): slope = f.",
    "No-parallax method: move a search pin until it and the image do not separate when you move your eye; the pin is then at the image.",
    "Concave mirror experiments use the same formula; f = r/2 (r = radius of curvature).",
    "Prism: deviates and disperses white light into a spectrum (ROYGBIV). Minimum deviation is used to find n."
  ]],
  ["Magnetism & other experiments", [
    "Magnet properties: North and South poles; like poles repel, unlike attract (repulsion is the true test of a magnet). A freely suspended magnet points North–South.",
    "Magnetic field = region where magnetic force is felt. Field lines go N to S outside the magnet, never cross, and are closest where the field is strongest (near the poles).",
    "Mapping field lines: plotting compass (mark needle positions step by step and join them) or iron filings sprinkled on paper over the magnet and tapped.",
    "Neutral point: where the magnet's field cancels Earth's horizontal field, so the resultant is zero and a compass there does not settle. N pole pointing geographic North → neutral points on the east–west (equatorial) line; N pole pointing South → on the magnet's axis.",
    "Earth's magnetism: declination (angle between geographic and magnetic north), dip/inclination (angle between field and horizontal).",
    "Ferromagnetic materials: iron, nickel, cobalt, steel. Soft iron magnetises and demagnetises easily (electromagnets, transformer cores). Steel keeps magnetism (permanent magnets).",
    "Making magnets: stroking (single or double touch), electrical method (solenoid with DC). Demagnetising: heating, hammering, AC in a solenoid.",
    "Current in a straight wire makes circular field lines; direction by the right-hand grip rule (thumb = current, fingers = field). Discovered by Oersted (1820).",
    "A current-carrying solenoid acts like a bar magnet. Right-hand grip rule for the coil: fingers curl with current, thumb points to the North pole. Stronger with more turns, more current, soft iron core.",
    "Force on a current-carrying conductor in a field: F = BIL sin θ; direction by Fleming's left-hand rule (First finger = Field, seCond = Current, thuMb = Motion). Used in motors. Right-hand rule is for generators (induced current).",
    "Other common practicals: simple pendulum (T = 2π√(l/g); plot T² against l, slope = 4π²/g), specific heat capacity by method of mixtures, Hooke's law with a spiral spring (F = ke)."
  ]]
];
