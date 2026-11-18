window.GUIDES = window.GUIDES || {};
GUIDES.INS207 = `
## How to use this guide
INS207 (Introduction to Information Systems / Management Information Systems) explains what information systems are, the kinds organisations use, how they are developed, how data is managed, how IS gives competitive advantage, and the security and ethical issues involved. Questions are mostly definitions, classifications ("which system supports senior executives?") and named frameworks (Porter, SDLC, CIA). Learn the tables — they compress most of the examinable content.

> **Exam tip:** Match each system type to its **management level** and **decision type**. TPS → operational/structured; MIS → middle/semi-structured reports; DSS → middle/semi-structured analysis; ESS → strategic/unstructured.

## Exam-day cram: clue word → answer
If a question is hard to read, look for the **clue word**. The clue points to the answer.

| If the question says… | Answer |
|---|---|
| day-to-day, records transactions, sales, payroll, till, POS | **TPS** |
| routine or summary reports, middle managers | **MIS** |
| what-if, models, semi-structured | **DSS** |
| senior or top executives, strategic, dashboard, 5-year plan | **ESS / EIS** |
| mimics a human expert, reasoning, diagnosis | **Expert system** |
| word processing, email, calendar | **Office automation (OAS)** |
| joins finance, HR, production and sales in one database | **ERP** |
| customers, customer interactions | **CRM** |
| suppliers → factory → customers | **SCM** |

> **Ladder:** TPS → MIS → DSS → ESS. Bottom (operations) to top (bosses). Each one feeds the next.

### Data basics
- **Data** = raw facts. Processed data = **information**.
- Hierarchy, smallest to largest: **bit → byte → field → record → file → database**. Field = one fact (Name). Record = one row (one student).
- **Primary key** = unique (matric number). **Foreign key** = points to another table's primary key (CourseID in Enrolment → Course).
- **DBMS** = software that manages a database. **SQL** = the language used to query it.

### SQL command groups
| Group | Commands | What it changes |
|---|---|---|
| **DDL** | CREATE, ALTER, DROP | Structure (tables) |
| **DML** | SELECT, INSERT, UPDATE, DELETE | Data (rows) |
| **DCL** | GRANT, REVOKE | Permissions (who can see what) |

### SDLC
- Order: Planning → **Analysis** (study current system, gather requirements) → Design → Implementation → **Maintenance** (last and longest).
- Feasibility: **Economic** = cost vs benefit. **Technical** = can we build it? **Operational** = will people use it?
- **Waterfall** = finish each phase before the next. **Prototype** = quick working model to show users.

| Changeover | Clue |
|---|---|
| **Parallel** | old and new run together, safest |
| **Pilot** | one department or branch first |
| **Phased** | module by module |
| **Direct** | switch overnight, riskiest |

### Business and security
- **Michael Porter** → five competitive forces, and the value chain (primary + support activities).
- **B2C** = business to you (Jumia). **C2C** = people to people (Jiji). **B2B** = business to business.
- Good information: **timely, accurate, relevant, complete**.
- IS components: hardware, software, data, people, procedures.
- **CIA triad**: Confidentiality, Integrity, Availability.

## 1. Information systems concepts
### Data, information, knowledge
- **Data**: raw facts (numbers, text, images) with no context. Example: 4500, 12, "Lagos".
- **Information**: data that has been processed (organised, summarised, analysed) to be **meaningful and useful** for decisions. Example: "Lagos branch sold 4,500 units in December".
- **Knowledge**: understanding and experience applied to information to make decisions; **tacit** (in people's heads) vs **explicit** (documented).
- **Wisdom**: applying knowledge with judgement.
- Qualities of good information: **accurate, timely, relevant, complete, concise, reliable, verifiable, accessible, secure, economical**.
- Value of information = value of decisions improved by it minus its cost.

### System concepts
- **System**: a set of interrelated components working together towards a common goal. Every system has **inputs, processes, outputs**, a **boundary**, an **environment**, and **feedback** and **control**.
- **Open system**: interacts with its environment (businesses). **Closed system**: does not interact with its environment.
- **Subsystem**: a system within a larger system. **Interface**: point where two systems meet.
- **Feedback**: output information used to adjust the system. **Negative feedback** corrects deviations; **positive feedback** reinforces change.

### Information system definition
An **information system (IS)** is a set of interrelated components that **collect (input), process, store and distribute (output)** information to support **decision-making, coordination, control, analysis and visualisation** in an organisation.
- A **computer-based information system (CBIS)** uses computers and ICT. IS existed before computers (manual ledger systems).
- **Information technology (IT)** is the hardware and software used; **IS** is broader — it includes people, procedures and the organisation.
- IS has three dimensions: **organisations, management and technology**.

### Components of an information system
| Component | Description |
|---|---|
| **Hardware** | Physical devices: computers, servers, input/output devices, storage |
| **Software** | System software (OS) and application software |
| **Data** | Facts stored in databases; the raw material of IS |
| **People** | Users, IS professionals (analysts, programmers, DBAs, CIO); the most important component |
| **Procedures** | Rules, policies and methods for operating and using the system |
| **Networks / telecommunications** | Links that connect hardware and allow sharing (LAN, WAN, Internet) |

### Roles of IS in business
- Achieve **operational excellence** (efficiency, productivity).
- Develop **new products, services and business models**.
- Achieve **customer and supplier intimacy**.
- Improve **decision-making**.
- Gain **competitive advantage**.
- **Survival** (meet regulatory requirements, keep up with competitors).

### Organisational levels and decisions
| Management level | Who | Decision type | Example decision |
|---|---|---|---|
| **Strategic** (top) | Senior executives, CEO, board | **Unstructured** — novel, long-term, no fixed procedure | Should we enter a new market? |
| **Tactical / management** (middle) | Middle managers, department heads | **Semi-structured** — part routine, part judgement | Which suppliers to use? Budget allocation |
| **Operational** (lower) | Supervisors, operational managers | **Structured** — routine, repetitive, clear rules | Reorder stock when it falls below 50 units |
| **Knowledge level** | Engineers, designers, scientists | Create and integrate new knowledge | Design a new product |

**Simon's decision-making process**: **Intelligence** (identify the problem) → **Design** (develop alternatives) → **Choice** (select an alternative) → **Implementation** (put it into action and monitor).

## 2. Types of information systems
| System | Level served | Purpose | Examples |
|---|---|---|---|
| **TPS** (Transaction Processing System) | Operational | Records and processes **day-to-day routine transactions**; the basic business system; source of data for other systems | Payroll, order entry, sales/POS, airline reservations, ATM, billing, inventory |
| **OAS** (Office Automation System) | Clerical / knowledge | Improves productivity of office workers | Word processing, email, calendars, desktop publishing, video conferencing |
| **KWS** (Knowledge Work System) | Knowledge | Helps knowledge workers create and integrate new knowledge | CAD, virtual reality, investment workstations |
| **MIS** (Management Information System) | Middle management | Provides **routine summary and exception reports** from TPS data for planning, controlling and decision-making | Monthly sales report, budget report, inventory exception report |
| **DSS** (Decision Support System) | Middle (and senior) management | Interactive system using **data and analytical models** to support **semi-structured and unstructured** decisions; "what-if" analysis | Pricing models, production scheduling, loan analysis, spreadsheet models |
| **ESS / EIS** (Executive Support / Information System) | Senior management | Addresses **strategic, unstructured** decisions with graphics, dashboards and drill-down; uses internal and **external** data | Five-year plans, competitor trends, KPI dashboards |
| **GDSS** (Group Decision Support System) | Groups | Supports group decision-making | Electronic meeting systems, brainstorming tools |
| **ES** (Expert System) | Varies | AI system using a **knowledge base and inference engine** to imitate a human expert | Medical diagnosis (MYCIN), credit approval |
| **GIS** (Geographic Information System) | Varies | Captures and analyses spatial (map) data | Site selection, route planning, census mapping |

### MIS report types
- **Scheduled (periodic) reports**: produced at regular intervals (weekly payroll summary).
- **Key-indicator reports**: summarise critical activities (daily sales total).
- **Demand (ad hoc) reports**: produced on request.
- **Exception reports**: produced automatically when a situation is unusual or needs action (items below reorder level).
- **Drill-down reports**: progressively more detailed data.

### TPS processing methods
- **Batch processing**: transactions are collected over a period and processed together (payroll, utility bills). Cheaper; data not current.
- **Online (real-time) transaction processing (OLTP)**: each transaction processed immediately (ATM, airline booking).
- TPS activities: data collection, data editing (validation), data correction, data manipulation, data storage, document production.

### Components of a DSS
- **Database** (internal and external data).
- **Model base** (financial, statistical, optimisation, simulation models).
- **User interface / dialogue management** (user-friendly, interactive).
- DSS analyses: **what-if analysis**, sensitivity analysis, **goal-seeking** analysis, optimisation.

### Components of an expert system
**Knowledge base** (facts and IF–THEN rules), **inference engine** (reasons with the rules: forward chaining or backward chaining), **user interface**, **explanation facility**, knowledge acquisition facility. Built by a **knowledge engineer** with a **domain expert**.

### Systems by function (functional business systems)
Sales and marketing systems, manufacturing and production systems, finance and accounting systems, human resources systems.

## 3. Enterprise and inter-organisational systems
| System | Purpose |
|---|---|
| **ERP** (Enterprise Resource Planning) | Integrates **all internal business processes** (finance, HR, manufacturing, sales, inventory) into a **single system with one central database**. Examples: SAP, Oracle, Microsoft Dynamics |
| **SCM** (Supply Chain Management) | Manages relationships and flows with **suppliers** — procurement, production, distribution, logistics; reduces **bullwhip effect** (demand distortion moving up the chain) |
| **CRM** (Customer Relationship Management) | Manages all interactions with **customers** — sales, marketing, service; increases customer retention and loyalty. Examples: Salesforce |
| **KMS** (Knowledge Management System) | Captures, stores and shares organisational knowledge and expertise |
| **EDI** (Electronic Data Interchange) | Computer-to-computer exchange of standard business documents (orders, invoices) between firms |
| **Intranet / extranet** | Private internal network / network extended to partners |

**Benefits of ERP**: integrated data, standardised processes, better decision-making, reduced costs. **Challenges**: very expensive, long implementation, requires organisational change, difficult to customise.

**Supply chain**: upstream (suppliers) → the firm → downstream (distributors, retailers, customers). **Push-based** (build-to-stock, based on forecasts) vs **pull-based** (build-to-order, driven by actual customer demand, e.g. Dell).

## 4. Systems development: the SDLC
### Systems Development Life Cycle (SDLC)
A structured, step-by-step approach to building information systems.
| Phase | Activities and outputs |
|---|---|
| 1. **Preliminary investigation / planning** | Identify the problem or opportunity; define scope and objectives; carry out the **feasibility study**; output: feasibility report |
| 2. **Systems analysis** | Study the current system in detail; gather **user requirements** (interviews, questionnaires, observation, document review); model with DFDs; output: **requirements specification** |
| 3. **Systems design** | Plan how the new system will work: **logical design** (what it does — inputs, outputs, processes, data) and **physical design** (how: hardware, software, database, interface, files); output: design specification |
| 4. **Development / construction** | Programming (coding), building databases, acquiring hardware/software |
| 5. **Testing** | **Unit testing** (individual programs), **system testing** (whole system), **acceptance testing** (by users) — alpha and beta |
| 6. **Implementation (conversion)** | Install, **train users**, convert data, document, change over to the new system |
| 7. **Maintenance and review** | Post-implementation review; fix errors (corrective), adapt to changes (adaptive), improve (perfective), prevent problems (preventive) |

### Feasibility study (TELOS)
- **Technical feasibility**: is the technology and expertise available?
- **Economic feasibility**: do the benefits outweigh the costs? **Cost–benefit analysis**, payback period, ROI, NPV.
- **Legal feasibility**: does it comply with laws (data protection, copyright)?
- **Operational feasibility**: will users accept and use it? Does it fit the organisation?
- **Schedule feasibility**: can it be completed in the available time?

### Conversion (changeover) methods
| Method | Description | Risk / cost |
|---|---|---|
| **Direct (plunge / cutover)** | Old system stopped and new system started on a set date | Highest risk; cheapest |
| **Parallel** | Old and new systems run **together** until the new one is trusted | Lowest risk; most expensive |
| **Pilot** | New system introduced in **one part/branch** first, then the rest | Moderate risk |
| **Phased** | New system introduced **gradually**, module by module | Moderate risk; slow |

### Other development approaches
- **Waterfall model**: the classic SDLC — each phase completed before the next; rigid; good for well-defined requirements.
- **Prototyping**: build a quick working model, get user feedback, refine iteratively; good when requirements are unclear.
- **RAD (Rapid Application Development)**: fast development using prototyping, reusable components and CASE tools; **JAD (Joint Application Design)** sessions with users.
- **Agile methods** (Scrum, XP): short iterations (sprints), continuous user involvement, working software delivered frequently.
- **Spiral model**: iterative with **risk analysis** in each cycle (Boehm).
- **End-user development**: users build their own applications (spreadsheets, simple databases).
- **Outsourcing**: an outside vendor develops or runs the system. **Application software packages / COTS** (commercial off-the-shelf) purchased instead of built.
- **Object-oriented development** uses UML diagrams (use case, class diagrams).

### Analysis and design tools
- **Data Flow Diagram (DFD)**: shows how data moves through a system. Symbols: **process** (circle/rounded rectangle), **data flow** (arrow), **data store** (open rectangle), **external entity** (square: source/sink). **Context diagram** = Level 0 DFD showing the whole system as one process.
- **Flowcharts**, **decision tables**, **decision trees**, **structured English**, **data dictionary** (describes every data element), **ERD** (entity–relationship diagram), **Gantt charts** and **PERT/CPM** (project scheduling), **CASE tools** (Computer-Aided Software Engineering).
- **Systems analyst**: the key person who studies problems and designs IS solutions; acts as a link between users and programmers.

## 5. Databases and data management
### File processing vs database approach
- **Traditional file processing**: each application has its own files. Problems: **data redundancy** (duplication), **data inconsistency**, **program–data dependence**, lack of flexibility, poor security, difficulty sharing data.
- **Database**: an organised collection of related data stored centrally and shared by many applications.
- **DBMS (Database Management System)**: software to create, maintain and access databases. Examples: **MySQL, Oracle, Microsoft SQL Server, Microsoft Access, PostgreSQL, IBM DB2**.
- Advantages of DBMS: reduced redundancy and inconsistency, data sharing, **data independence**, better security, integrity constraints, backup and recovery, concurrent access, easier queries.

### Data hierarchy
**Bit → byte (character) → field → record → file (table) → database**.
- **Field**: a single attribute (Name). **Record**: a group of related fields about one entity (one student). **File/table**: a group of records of the same type.
- **Entity**: a person, place, thing or event about which data is kept (Student, Course). **Attribute**: a characteristic of an entity (StudentName).

### Relational database concepts
- Data is stored in **tables (relations)** of **rows (tuples/records)** and **columns (attributes/fields)**. The relational model was proposed by **E. F. Codd** (1970).
| Key | Meaning |
|---|---|
| **Primary key** | Field (or fields) that **uniquely identifies each record**; cannot be null or duplicated (e.g. MatricNo) |
| **Foreign key** | Field in one table that refers to the **primary key of another table**, linking the tables |
| **Candidate key** | Any field that could serve as the primary key |
| **Composite key** | Primary key made of two or more fields |
| **Secondary key** | Non-unique field used for searching/sorting |
- **Referential integrity**: a foreign key value must match an existing primary key value (or be null).
- **Relationships**: **one-to-one (1:1)**, **one-to-many (1:M)** (one department has many staff), **many-to-many (M:N)** (students and courses; resolved with a linking table).
- **Normalisation**: organising tables to reduce redundancy and anomalies (insertion, update, deletion anomalies). **1NF** (no repeating groups; atomic values), **2NF** (1NF + no partial dependency on part of a composite key), **3NF** (2NF + no transitive dependency on non-key fields).
- Other database models: **hierarchical** (tree; parent–child), **network** (many-to-many links), **object-oriented**, **NoSQL** (document, key–value — MongoDB).

### SQL (Structured Query Language)
SQL is the standard language for relational databases.
- **DDL (Data Definition Language)**: CREATE, ALTER, DROP (define structure).
- **DML (Data Manipulation Language)**: SELECT, INSERT, UPDATE, DELETE (work with data).
- **DCL (Data Control Language)**: GRANT, REVOKE (permissions). **TCL**: COMMIT, ROLLBACK.
~~~
CREATE TABLE Student (MatricNo VARCHAR(12) PRIMARY KEY, Name VARCHAR(50), Level INT);
INSERT INTO Student VALUES ('NOU123456', 'Ada Obi', 200);
SELECT Name, Level FROM Student WHERE Level = 200 ORDER BY Name;
UPDATE Student SET Level = 300 WHERE MatricNo = 'NOU123456';
DELETE FROM Student WHERE Level > 400;
SELECT COUNT(MatricNo) FROM Student GROUP BY Level;
~~~
Aggregate functions: COUNT, SUM, AVG, MIN, MAX. JOIN combines rows from related tables.

### Data warehousing and business intelligence
- **Data warehouse**: a large database that stores current and **historical data** from many sources (internal and external), organised for analysis and reporting, not for daily transactions. Data is loaded with **ETL** (Extract, Transform, Load).
- **Data mart**: a smaller subset of a data warehouse for one department or function.
- **OLAP (Online Analytical Processing)**: multidimensional analysis of data (e.g. sales by product, region and time); operations: slice, dice, drill-down, roll-up.
- **Data mining**: discovering hidden **patterns and relationships** in large datasets — associations (market basket: people who buy bread buy butter), sequences, classification, clustering, forecasting.
- **Big data**: datasets too large for traditional tools; characterised by **volume, velocity, variety** (plus veracity and value). Tools: Hadoop, Spark.
- **Business intelligence (BI)**: tools and techniques for analysing data to support decisions (dashboards, reports).
- **Data administration** (policies and planning) vs **database administration** (technical: design, security, performance by the **DBA**).

## 6. IS for competitive advantage
### Porter's competitive forces model (five forces)
Michael Porter's model shows the forces that shape competition in an industry:
1. **Threat of new entrants** (new competitors).
2. **Threat of substitute products and services**.
3. **Bargaining power of customers (buyers)**.
4. **Bargaining power of suppliers**.
5. **Rivalry among existing competitors** (traditional competitors).

### Porter's generic competitive strategies (and IS)
| Strategy | Meaning | IS example |
|---|---|---|
| **Low-cost leadership** | Produce at the lowest cost and price | Walmart's continuous replenishment system |
| **Product differentiation** | Offer unique products/services | Google, Apple; personalised products |
| **Focus on market niche** | Serve a specific narrow market | Data mining for targeted customers |
| **Customer and supplier intimacy** | Strong ties increase switching costs | Amazon recommendations; CRM; SCM |

### Value chain model
Porter's **value chain** views a firm as a series of activities that add value to its products.
- **Primary activities** (directly create and deliver the product): **inbound logistics**, **operations**, **outbound logistics**, **marketing and sales**, **service**.
- **Support activities** (make primary activities possible): **firm infrastructure** (administration, management), **human resource management**, **technology development**, **procurement**.
- IS can be applied at each activity to cut costs or add value. **Value web**: a network of independent firms coordinating their value chains.
- **Benchmarking**: comparing processes with industry standards; **best practices**: most successful methods.
- **Network effects**: a product becomes more valuable as more people use it (WhatsApp).
- **Switching costs**: costs to customers of changing to a competitor — IS can raise them.
- **Strategic information systems**: IS that change goals, operations, products or relationships to give a competitive edge.
- **Business process reengineering (BPR)**: radical redesign of business processes to achieve dramatic improvements; **BPM** (business process management) is continuous improvement.

## 7. E-commerce and digital business
- **E-business**: use of digital technology and the Internet to run **all** business processes. **E-commerce**: the **buying and selling** of goods and services over the Internet — a part of e-business.
- **Unique features of e-commerce**: ubiquity, global reach, universal standards, richness, interactivity, information density, personalisation/customisation, social technology.
| Type | Meaning | Example |
|---|---|---|
| **B2C** (Business-to-Consumer) | Businesses sell to individuals | Jumia, Konga, Amazon |
| **B2B** (Business-to-Business) | Businesses sell to businesses | Alibaba, EDI between manufacturers and suppliers |
| **C2C** (Consumer-to-Consumer) | Consumers sell to consumers | eBay, Jiji |
| **C2B** (Consumer-to-Business) | Individuals sell to businesses | Freelancers, Upwork |
| **B2G / G2C / G2B** | Business/government interactions (e-government) | Online tax filing, NIN registration |
| **M-commerce** | E-commerce via mobile devices | Mobile banking, mobile money, USSD |
- **E-commerce business models**: e-tailer (online store), transaction broker, market creator, content provider, community provider (social network), portal, service provider.
- **Revenue models**: advertising, subscription, transaction fee, sales, affiliate, **freemium** (free basic, paid premium).
- **Electronic payment systems**: credit/debit cards, digital wallets, mobile money, bank transfers, payment gateways (Paystack, Flutterwave, Remita), cryptocurrency.
- **Disintermediation**: removing middlemen (intermediaries) between producer and consumer.
- **Long tail**: selling small quantities of many niche products online.
- Advantages: 24/7 availability, global reach, lower costs, convenience, personalisation. Disadvantages: security and fraud risks, lack of physical inspection, delivery problems, privacy concerns, digital divide.

## 8. Security, control, ethics and social issues
### Why systems are vulnerable
Large amounts of data in electronic form, networks and Internet connections, wireless access, human error, software bugs, hardware failures, malicious attacks, natural disasters.

### Threats
- **Malware**: virus, worm, Trojan horse, spyware, ransomware, keylogger, adware.
- **Hacking / cracking**, **denial-of-service (DoS/DDoS)** attacks, **spoofing** and **sniffing**, **identity theft**, **phishing** (fake emails/websites), **pharming**, **click fraud**, **social engineering**, insider threats, cyberterrorism.
- **Computer crime**: using a computer to commit an illegal act. Nigeria's **Cybercrimes (Prohibition, Prevention, etc.) Act 2015**.

### Security and control
- Security goals: **CIA triad** — **Confidentiality**, **Integrity**, **Availability**.
- **General controls** (govern the whole IS environment): software controls, hardware controls, computer operations controls, data security controls, implementation controls, administrative controls.
- **Application controls** (specific to each application): **input controls** (validation, check digits), **processing controls**, **output controls**.
- **Risk assessment** and **security policy**; **acceptable use policy (AUP)**; **disaster recovery planning** and **business continuity planning**; **MIS audit**.
- Tools: **authentication** (passwords, tokens, smart cards, **biometrics**), **firewalls**, **intrusion detection systems**, **antivirus**, **encryption** (symmetric and public key; SSL/TLS, HTTPS), **digital certificates** and PKI, backups, **fault-tolerant** systems, uninterruptible power supply (UPS).

### Ethical, social and political issues
**Five moral dimensions of the information age** (Laudon):
1. **Information rights and obligations** (privacy).
2. **Property rights and obligations** (intellectual property).
3. **Accountability and control** (who is responsible for harm).
4. **System quality** (standards of data and system quality).
5. **Quality of life** (values, health, work–life balance).

- **Privacy**: right to be left alone and to control information about oneself. Concerns: cookies, web beacons, spyware, data brokers, surveillance. Nigeria's **NDPR 2019** and **Nigeria Data Protection Act 2023**. **Fair Information Practices (FIP)**: notice, choice, access, security, enforcement.
- **Intellectual property**: **trade secrets**, **copyright** (protects expression, e.g. software code), **patents** (protect inventions/ideas for about 20 years), **trademarks**. Threat: **software piracy**.
- **Ethical principles**: Golden Rule (treat others as you want to be treated); Kant's Categorical Imperative (if an action is not right for everyone, it is not right for anyone); Descartes' rule of change (if an action cannot be repeated, it should not be taken at all); Utilitarian principle (greatest good for the greatest number); Risk aversion principle (take the action that causes least harm); "No free lunch" (assume all objects are owned by someone).
- Responsibility, **accountability**, **liability**, **due process**.
- Social issues: **digital divide**, job loss through automation and reengineering, **computer-related health problems** (RSI, carpal tunnel syndrome, computer vision syndrome, **technostress**), dependence and vulnerability, spam, balancing power (centralisation vs decentralisation), rapid change.
- **Green computing**: reducing the environmental impact of IT (energy-efficient hardware, e-waste recycling, virtualisation).

### Emerging trends
**Cloud computing** (SaaS, PaaS, IaaS), mobile computing, **Internet of Things (IoT)**, **artificial intelligence and machine learning**, big data analytics, social media in business, blockchain, virtualisation, green IT.

## Quick revision checklist
- Data vs information vs knowledge; qualities of information; system concepts (open/closed, feedback).
- IS definition and six components; IT vs IS; roles of IS.
- Management levels and structured/semi-structured/unstructured decisions; Simon's four stages.
- TPS, OAS, KWS, MIS, DSS, ESS, GDSS, ES, GIS — level, purpose, example; MIS report types; batch vs real-time.
- ERP, SCM, CRM, KMS; bullwhip effect; push vs pull.
- SDLC phases; TELOS feasibility; direct/parallel/pilot/phased conversion; waterfall, prototyping, RAD, agile, spiral; DFD symbols.
- File processing problems; DBMS advantages; data hierarchy; primary vs foreign key; relationships; normalisation (1NF–3NF); SQL DDL/DML/DCL.
- Data warehouse, data mart, ETL, OLAP, data mining, big data (3 Vs).
- Porter's five forces; four generic strategies; value chain primary and support activities; switching costs; network effects.
- E-commerce types (B2C, B2B, C2C, C2B, G2C, m-commerce); revenue models; disintermediation.
- CIA triad; threats; general vs application controls; five moral dimensions; ethical principles; privacy and IP; NDPA 2023, Cybercrimes Act 2015.
`;
