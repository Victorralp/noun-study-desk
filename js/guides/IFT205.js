window.GUIDES = window.GUIDES || {};
GUIDES.IFT205 = `
## How to use this guide
IFT205 (Introduction to Information Technology) is a broad survey course: what IT is, how computers developed, hardware, software, data representation, networks, the Internet, and the impact of IT on society. Questions are mostly definitions, "odd one out", matching people to inventions and devices to categories. Work through each section, then test yourself with the checklist at the end.

> **Exam tip:** Many questions ask for the *odd one out* (e.g. "which is not an input device?"). Learn the categories, not just the lists.

## 1. Information technology, data and information
### Definitions
- **Information Technology (IT)**: the use of computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data.
- **ICT (Information and Communication Technology)**: IT plus telecommunications (telephone, radio, TV, satellite); emphasises communication.
- **Computer**: an electronic device that accepts **data** (input), **processes** it according to a set of instructions (**program**), **stores** it, and produces **information** (output). Its operation follows the **IPO cycle**: Input → Process → Output, with Storage.
- **Data**: raw, unprocessed facts and figures (e.g. 65, 72, 48). **Information**: processed data that is meaningful and useful for decision-making (e.g. "the class average is 61.7").
- **Knowledge**: understanding gained from information and experience. The hierarchy is data → information → knowledge → wisdom (**DIKW** pyramid).

### Characteristics of good information
Accurate, **relevant**, **timely** (available when needed), **complete**, concise, understandable, cost-effective, verifiable and accessible.

**GIGO (Garbage In, Garbage Out)**: if input data is wrong, output information will also be wrong.

### Characteristics of computers
| Feature | Meaning |
|---|---|
| Speed | Performs millions/billions of operations per second (measured in MIPS, GHz, FLOPS) |
| Accuracy | Results are correct if data and program are correct |
| Diligence | Does not tire or lose concentration |
| Storage | Holds huge amounts of data |
| Versatility | Can do many different tasks |
| Automation | Works automatically once given a program |
| Limitations | No IQ/common sense; no feelings; depends on instructions |

### Data processing cycle
Collection → preparation → **input** → **processing** → **output** → **storage**. Processing operations include classifying, sorting, calculating, summarising, merging and retrieving. Processing methods: **batch** (data collected and processed together later, e.g. payroll), **real-time** (processed instantly, e.g. ATM, air traffic control), **online**, **time-sharing** and **distributed** processing.

## 2. History and generations of computers
### Early calculating devices and pioneers
| Device / person | Year | Contribution |
|---|---|---|
| **Abacus** | ~3000 BC (Babylon/China) | First known calculating aid; beads on rods |
| **John Napier** | 1617 | **Napier's bones**; invented logarithms |
| **William Oughtred** | ~1622 | **Slide rule** (based on logarithms) |
| **Blaise Pascal** | 1642 | **Pascaline**: mechanical adding machine |
| **Gottfried Leibniz** | 1673 | **Stepped reckoner**: could multiply and divide; promoted binary numbers |
| **Joseph-Marie Jacquard** | 1801 | **Jacquard loom** controlled by **punched cards** |
| **Charles Babbage** | 1822 / 1834 | **Difference Engine** and **Analytical Engine** (had mill = CPU, store = memory, punched-card input); **father of the computer** |
| **Ada Lovelace** | 1843 | Wrote an algorithm for the Analytical Engine; **first computer programmer** |
| **George Boole** | 1854 | **Boolean algebra**, the logic of digital circuits |
| **Herman Hollerith** | 1890 | **Tabulating machine** with punched cards for the US census; his company became **IBM** |
| **Alan Turing** | 1936 | **Turing machine** concept; father of theoretical computer science and AI |
| **Howard Aiken** | 1944 | **Harvard Mark I**, electromechanical computer |
| **John von Neumann** | 1945 | **Stored-program concept** (von Neumann architecture) |

### Generations of computers
| Generation | Period | Technology | Examples / features |
|---|---|---|---|
| First | 1940–1956 | **Vacuum tubes** (valves) | **ENIAC** (1946), EDVAC, UNIVAC I (first commercial, 1951); huge, hot, unreliable; machine language; punched cards and magnetic drums |
| Second | 1956–1963 | **Transistors** (invented 1947 at Bell Labs) | IBM 1401, IBM 7090; smaller, faster, cheaper; assembly language and early high-level languages (FORTRAN, COBOL); magnetic core memory |
| Third | 1964–1971 | **Integrated circuits (ICs)** (Jack Kilby, Robert Noyce) | IBM System/360; keyboards, monitors, operating systems; multiprogramming |
| Fourth | 1971–present | **Microprocessors** (VLSI) — Intel **4004** (1971) first microprocessor | Personal computers (IBM PC 1981, Apple), GUIs, networks, Internet |
| Fifth | Present and future | **Artificial intelligence**, ULSI, parallel processing, quantum computing | Natural language processing, expert systems, robotics, voice recognition |

> **Exam tip:** Valves → transistors → ICs → microprocessors → AI. ENIAC = first general-purpose electronic digital computer. UNIVAC = first commercial computer.

### Classification of computers
**By type of data (mode of operation)**:
- **Analog**: works on continuously varying physical quantities (temperature, speed, voltage); e.g. speedometer, thermometer, older seismograph.
- **Digital**: works on discrete values (binary digits 0 and 1); most modern computers.
- **Hybrid**: combines analog and digital features; e.g. hospital ICU monitoring, petrol pump.

**By size and power**:
- **Supercomputer**: fastest and most powerful; weather forecasting, nuclear simulation, scientific research (e.g. Cray, Fugaku, Frontier).
- **Mainframe**: large, serves thousands of users simultaneously; banks, airlines, government (e.g. IBM Z series).
- **Minicomputer** (midrange): smaller than a mainframe; serves departments.
- **Microcomputer**: personal computers — desktop, laptop/notebook, tablet, smartphone, PDA. Uses a microprocessor.
- Also **embedded computers** inside other devices (microwave, washing machine, car).

**By purpose**: **general-purpose** (many tasks) vs **special-purpose** (one task, e.g. ATM, traffic light controller).

## 3. Computer hardware
**Hardware** is the physical, tangible part of a computer. A computer system has four main hardware units: **input**, **processing (CPU)**, **storage (memory)**, and **output**.

### The central processing unit (CPU)
The **CPU (processor)** is the "brain" of the computer. It has:
- **Control Unit (CU)**: directs and coordinates all operations; fetches instructions, decodes them and controls their execution.
- **Arithmetic and Logic Unit (ALU)**: performs arithmetic (+, −, ×, ÷) and logical operations (AND, OR, NOT, comparisons).
- **Registers**: very small, very fast storage locations inside the CPU. Examples: **Program Counter (PC)** holds the address of the next instruction; **Instruction Register (IR)** holds the current instruction; **Accumulator (ACC)** holds results of the ALU; **MAR** (Memory Address Register) and **MDR/MBR** (Memory Data/Buffer Register).
- **Machine (fetch–decode–execute) cycle**: fetch the instruction from memory → decode it → execute it → store the result.
- **Clock speed** is measured in **hertz** (MHz, GHz): the number of cycles per second. **Multi-core** processors contain several processing cores on one chip.
- Major CPU makers: **Intel** (Core i3/i5/i7/i9), **AMD** (Ryzen), ARM-based chips (phones, Apple M-series).

The **motherboard** (system board) is the main circuit board that connects the CPU, memory, storage and expansion cards. **Buses** carry signals: data bus, address bus, control bus. **Ports** connect peripherals: USB, HDMI, VGA, Ethernet (RJ-45), audio jack.

### Memory and storage
**Primary (main) memory** — directly accessed by the CPU:
| RAM | ROM |
|---|---|
| Random Access Memory | Read Only Memory |
| **Volatile**: contents lost when power is off | **Non-volatile**: contents retained |
| Read and write | Read only (normally) |
| Holds programs and data currently in use | Holds firmware such as the **BIOS/boot program** |
| Types: **SRAM** (static, faster, used for cache) and **DRAM** (dynamic, needs refreshing, main memory) | Types: PROM, EPROM (erased by UV light), EEPROM (erased electrically), flash |

- **Cache memory**: very fast memory between the CPU and RAM storing frequently used data (L1, L2, L3).
- **Virtual memory**: part of the hard disk used as an extension of RAM.

**Secondary (auxiliary) storage** — non-volatile, larger, slower, for permanent storage:
- **Magnetic**: hard disk drive (HDD), magnetic tape (sequential access; backups), floppy disk (obsolete; 1.44 MB).
- **Optical** (read by laser): CD (~700 MB), DVD (4.7 GB single layer), Blu-ray (25 GB single layer). CD-ROM (read only), CD-R (write once), CD-RW (rewritable).
- **Solid-state / flash**: SSD, USB flash drive, memory cards (SD, microSD). No moving parts; fast; shock-resistant.
- **Cloud storage**: Google Drive, OneDrive, Dropbox — data stored on remote servers over the Internet.
- **Access methods**: **sequential** (in order, e.g. tape) and **direct/random** (any location directly, e.g. disk).

**Memory hierarchy** (fastest/most expensive to slowest/cheapest): registers → cache → RAM → SSD/HDD → optical/tape.

### Units of storage
| Unit | Size |
|---|---|
| Bit (binary digit) | 0 or 1 — smallest unit |
| Nibble | 4 bits |
| Byte | **8 bits** — stores one character |
| Kilobyte (KB) | 1,024 bytes (2¹⁰) |
| Megabyte (MB) | 1,024 KB |
| Gigabyte (GB) | 1,024 MB |
| Terabyte (TB) | 1,024 GB |
| Petabyte (PB) | 1,024 TB |
A **word** is the number of bits a CPU processes at once (e.g. 32-bit or 64-bit).

### Input devices
Keyboard (QWERTY layout), mouse, trackball, touchpad, joystick (games), light pen, **scanner**, digital camera, webcam, microphone, touchscreen (input and output), **barcode reader** (supermarkets), **MICR** (Magnetic Ink Character Recognition — bank cheques), **OMR** (Optical Mark Recognition — exam answer sheets), **OCR** (Optical Character Recognition — converts printed text to editable text), biometric/fingerprint scanner, graphics tablet, sensors.

### Output devices
- **Softcopy**: monitor/visual display unit (CRT, LCD, LED, OLED), projector, speakers/headphones.
- **Hardcopy**: **printers** and **plotters**.
- **Impact printers** strike the paper: dot-matrix, daisy-wheel, line printers (noisy; can print carbon copies).
- **Non-impact printers**: **laser** (uses toner and a drum; fast, high quality), **inkjet** (sprays ink droplets), thermal (receipts), 3D printers.
- **Plotters** draw large, precise drawings (engineering, architecture).
- Screen resolution is measured in **pixels** (picture elements); printer resolution in **dpi** (dots per inch); printer speed in **ppm** (pages per minute).

## 4. Computer software
**Software** is the set of programs (instructions) that tells the hardware what to do. It is intangible.

### System software
Manages and controls hardware and provides a platform for application software.
- **Operating system (OS)**: the most important system software. Examples: **Windows**, **macOS**, **Linux** (Ubuntu, Fedora), **UNIX**, **Android**, **iOS**, MS-DOS (old, command-line).
- **Functions of an OS**: process management (CPU scheduling), **memory management**, **file management**, device (I/O) management through drivers, security and access control, user interface, error handling, booting.
- **User interfaces**: **CLI** (command-line interface — typed commands, e.g. MS-DOS, Linux terminal) and **GUI** (graphical user interface — windows, icons, menus, pointer; **WIMP**).
- **Types of OS**: single-user/single-tasking (MS-DOS), single-user/multitasking (Windows), multi-user (UNIX, Linux servers), real-time OS (RTOS — industrial control, medical devices), network OS (Windows Server), mobile OS, distributed OS, embedded OS.
- **Booting**: starting a computer and loading the OS. **Cold booting** = starting from power off; **warm booting** = restarting (Ctrl+Alt+Del or restart). **POST** (Power-On Self-Test) checks hardware; the **BIOS/UEFI** (in ROM) starts the process.
- **Utility programs**: perform maintenance — antivirus, disk defragmenter, disk cleanup, backup, file compression (WinZip, WinRAR), file managers.
- **Language translators**: compiler, interpreter, assembler.
- **Device drivers**: software that lets the OS communicate with a hardware device (e.g. printer driver).

### Application software
Programs that help users perform specific tasks.
| Category | Examples |
|---|---|
| Word processing | Microsoft Word, Google Docs, LibreOffice Writer, WordPerfect |
| Spreadsheet | Microsoft Excel, Google Sheets, Lotus 1-2-3, VisiCalc (first spreadsheet) |
| Database management (DBMS) | Microsoft Access, MySQL, Oracle, dBase |
| Presentation | Microsoft PowerPoint, Google Slides, Keynote |
| Desktop publishing | Adobe InDesign, Microsoft Publisher, CorelDRAW, PageMaker |
| Graphics/design | Photoshop, Illustrator, AutoCAD (engineering) |
| Web browsers | Chrome, Firefox, Edge, Safari |
| Communication | Outlook, Zoom, WhatsApp |
| Accounting | Peachtree (Sage), QuickBooks |

- **General-purpose (off-the-shelf / packaged)** software is sold to many users. **Custom-made (tailor-made / bespoke)** software is written for a particular organisation.
- **Integrated software / suites**: a bundle of programs such as **Microsoft Office**.
- **Software licences**: **proprietary/commercial** (paid; source code closed), **freeware** (free to use but closed), **shareware** (try before you buy), **open-source** (source code freely available and modifiable — Linux, LibreOffice, Firefox), public domain.
- **Firmware**: software permanently stored in ROM (e.g. BIOS).

### Humanware (liveware) and computer professionals
People are part of a computer system: **systems analyst** (studies and designs systems), **programmer** (writes code), **database administrator (DBA)**, **network administrator**, **computer operator**, **data entry clerk**, **IT manager/CIO**, **webmaster**, **computer engineer**, **end users**.

## 5. Data representation (in brief)
Computers store everything in binary (0s and 1s) because electronic circuits have two states (on/off).
- Number systems: binary (base 2), octal (base 8), decimal (base 10), hexadecimal (base 16).
- Converting decimal 13 to binary: 13 ÷ 2 = 6 r 1; 6 ÷ 2 = 3 r 0; 3 ÷ 2 = 1 r 1; 1 ÷ 2 = 0 r 1. Read remainders upwards: **1101**.
- Converting binary 1011 to decimal: 1×8 + 0×4 + 1×2 + 1×1 = **11**.
- **Character codes**: **ASCII** (American Standard Code for Information Interchange) uses 7 bits (128 characters; extended ASCII uses 8 bits = 256); 'A' = 65, 'a' = 97, '0' = 48. **EBCDIC** (used by IBM mainframes). **Unicode** covers all world languages (UTF-8, UTF-16).

## 6. Networks, the Internet and communication
### Computer networks
A **computer network** is two or more computers connected to share resources (files, printers, Internet) and communicate.

**By size (geographical coverage)**:
| Type | Coverage | Example |
|---|---|---|
| PAN (Personal Area Network) | Few metres around a person | Bluetooth between phone and earbuds |
| LAN (Local Area Network) | One building or campus | Office or school lab network |
| MAN (Metropolitan Area Network) | A city | City-wide cable network |
| WAN (Wide Area Network) | Country/continent/world | The **Internet** (largest WAN) |
| WLAN | Wireless LAN | Wi-Fi |

**Network topologies** (physical layout):
- **Bus**: all devices on one backbone cable; cheap but a cable break stops the network.
- **Star**: all devices connect to a central **hub/switch**; most common; failure of the central device stops the network, but one cable failure affects only one node.
- **Ring**: each device connects to two others in a circle; data travels in one direction (token ring).
- **Mesh**: every device connects to many/all others; very reliable but expensive (used in the Internet backbone).
- **Tree (hierarchical)**: combination of star and bus.
- **Hybrid**: combination of two or more topologies.

**Network architecture**: **client-server** (central server provides services to clients) vs **peer-to-peer (P2P)** (all computers are equal and share directly).

### Network devices
| Device | Function |
|---|---|
| **NIC** (Network Interface Card) | Connects a computer to a network; has a unique **MAC address** |
| **Hub** | Connects devices in a LAN; broadcasts data to all ports (not intelligent) |
| **Switch** | Connects devices in a LAN; sends data only to the intended device (uses MAC addresses) |
| **Router** | Connects different networks and routes packets between them (uses IP addresses); e.g. home Internet router |
| **Modem** (modulator–demodulator) | Converts digital signals to analog for telephone lines and back |
| **Repeater** | Regenerates/boosts signals over long distances |
| **Bridge** | Connects two LAN segments |
| **Gateway** | Connects networks using different protocols |
| **Access point** | Provides wireless (Wi-Fi) connection to a wired network |
| **Firewall** | Filters traffic to protect a network |

### Transmission media
- **Guided (wired)**: **twisted pair** cable (UTP/STP; common in LANs; RJ-45 connector), **coaxial** cable (cable TV), **fibre optic** cable (uses light; fastest, longest distance, immune to electromagnetic interference).
- **Unguided (wireless)**: radio waves (Wi-Fi, Bluetooth), microwaves, infrared (TV remote; short range, line of sight), satellite.
- **Bandwidth**: the data capacity of a channel, measured in **bps** (bits per second): Kbps, Mbps, Gbps.
- **Transmission modes**: **simplex** (one direction only — radio/TV broadcast), **half-duplex** (both directions but one at a time — walkie-talkie), **full-duplex** (both directions at once — telephone).

### The Internet
- The **Internet** is a global network of networks using **TCP/IP**. It grew from **ARPANET (1969)**.
- **ISP (Internet Service Provider)**: company that provides Internet access (MTN, Airtel, Glo, 9mobile, Spectranet).
- **Internet services**: World Wide Web, **email**, file transfer (FTP), instant messaging, VoIP (voice calls over the Internet — Skype, WhatsApp calls), video conferencing, e-learning, social media, online banking, e-commerce, cloud computing.
- **Intranet**: a private network inside an organisation using Internet technologies. **Extranet**: an intranet partly opened to authorised outsiders (suppliers, partners).
- **Email address** format: username@domain (e.g. student@noun.edu.ng). Email terms: inbox, outbox, CC (carbon copy), **BCC** (blind carbon copy — hidden recipients), attachment, spam.
- **Cloud computing** models: **SaaS** (Software as a Service — Gmail, Office 365), **PaaS** (Platform), **IaaS** (Infrastructure — AWS, Azure).
- Mobile generations: 1G (analog voice), 2G (digital voice, SMS), 3G (mobile data), 4G (LTE, broadband), 5G (very high speed, low latency).

## 7. IT in society
### Applications of IT
- **Education**: e-learning, CBT exams, virtual classrooms (NOUN itself is an example), digital libraries.
- **Banking and finance**: ATMs, online/mobile banking, POS terminals, electronic funds transfer (EFT), BVN.
- **Health**: electronic health records, telemedicine, diagnostic equipment, expert systems.
- **Business**: e-commerce (Jumia, Konga), accounting, inventory, marketing, teleworking.
- **Government**: e-government, voter registration (INEC), national identity (NIN), tax.
- **Communication and media**: email, social media, broadcasting.
- **Manufacturing**: CAD (computer-aided design), CAM (computer-aided manufacturing), robotics.
- **Transport**: online booking, GPS navigation, traffic control.
- **Agriculture, security, entertainment, research and weather forecasting.**

### Positive and negative effects
| Positive | Negative |
|---|---|
| Faster communication; global village | Unemployment through automation |
| Easier access to information and education | **Cybercrime**: fraud, hacking, identity theft, "yahoo-yahoo" |
| Improved productivity and accuracy | Privacy invasion |
| New jobs and businesses | Health problems: eye strain, **RSI** (repetitive strain injury), back pain, carpal tunnel syndrome |
| Better healthcare and banking | Addiction, social isolation, moral issues (pornography) |
| E-learning and remote work | **Digital divide**: gap between those with and without IT access |

### Computer ethics, security and law
- **Computer ethics**: moral principles guiding computer use — respect privacy, do not steal software (**piracy**), do not use others' work without credit (**plagiarism**), do not hack.
- **Intellectual property**: copyright, patents, trademarks protect creators' rights.
- **Threats**: **virus** (attaches to files; needs a host), **worm** (self-replicates across networks without a host), **Trojan horse** (disguised as useful software), **spyware**, **ransomware**, **phishing** (fake messages to steal details), hacking, denial-of-service attacks.
- **Protection**: antivirus software, firewalls, strong passwords, encryption, regular backups, software updates, access control, user awareness.
- **Nigerian law**: the **Cybercrimes (Prohibition, Prevention, etc.) Act 2015**; **NITDA** (National Information Technology Development Agency, established 2001) regulates IT; **Nigeria Data Protection Act 2023** (NDPC).
- **Ergonomics**: designing the workplace to reduce strain — adjustable chair, screen at eye level, proper lighting, regular breaks.

## Quick revision checklist
- Data vs information; IPO; characteristics of computers and of good information; GIGO.
- Pioneers: Napier, Pascal, Leibniz, Jacquard, Babbage, Lovelace, Boole, Hollerith, Turing, von Neumann.
- Five generations and their technology; ENIAC, UNIVAC, Intel 4004.
- Analog/digital/hybrid; super/mainframe/mini/micro.
- CPU = CU + ALU + registers; fetch–decode–execute; RAM vs ROM; cache; secondary storage types; byte = 8 bits; KB = 1,024 bytes.
- Input vs output devices; MICR/OMR/OCR; impact vs non-impact printers.
- System vs application software; OS functions; CLI vs GUI; utilities; licences.
- PAN/LAN/MAN/WAN; topologies; hub vs switch vs router; modem; media; simplex/half/full duplex.
- Internet services; intranet vs extranet; ISP; cloud models.
- Impact of IT; cybercrime; ethics; Cybercrimes Act 2015; NITDA.
`;
