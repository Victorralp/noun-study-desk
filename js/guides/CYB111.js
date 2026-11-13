window.GUIDES = window.GUIDES || {};
GUIDES.CYB111 = `
## How to use this guide
CYB111 (Introduction to Cybersecurity) covers the core vocabulary of security: the CIA triad, threats and vulnerabilities, malware and attacks, security controls, authentication and access control, network defences, cryptography basics, policies, incident response and the legal/ethical setting. Exam questions are mostly "which term matches this description" and "which control/attack is this example". Learn the **definitions word-for-word** and practise **classifying examples**.

> **Exam tip:** Exam scenarios often describe an attack without naming it. Look for the giveaway: "fake email from bank" = phishing; "encrypts files, demands payment" = ransomware; "floods server" = DoS/DDoS; "spreads without user action" = worm; "looks useful but hides malicious code" = Trojan.

> **Timetable note:** CYB111 clashes with INS207 (both Thu 19 Nov, 11am). Report the clash to your study centre early.

## 1. Cybersecurity foundations
- **Cybersecurity**: the practice of protecting systems, networks, programs and data from digital attacks, damage or unauthorised access.
- **Information security (InfoSec)**: protecting information in **all forms** (digital and physical) from unauthorised access, use, disclosure, disruption, modification or destruction. Cybersecurity is the digital part of InfoSec.
- **Asset**: anything of value to an organisation — data, hardware, software, people, reputation.
- **Cyberspace**: the interconnected digital environment of networks, computers and data.
- Why cybersecurity matters: protects personal data and privacy, financial assets, business continuity, national security and critical infrastructure (power, banking, telecoms), and trust.

### The CIA triad
| Principle | Meaning | Threats against it | Controls that protect it |
|---|---|---|---|
| **Confidentiality** | Only **authorised** people can access information | Eavesdropping, data breaches, shoulder surfing, stolen passwords | **Encryption**, access control, authentication, data classification |
| **Integrity** | Information is **accurate and unaltered**; changes only by authorised parties | Tampering, man-in-the-middle modification, malware corruption | **Hashing**, digital signatures, checksums, version control, access control |
| **Availability** | Information and systems are **accessible when needed** by authorised users | **DoS/DDoS**, hardware failure, ransomware, natural disasters, power outages | **Backups**, redundancy, RAID, failover, UPS, DDoS protection, patching |

### Extended principles
- **Authentication**: verifying identity (who you are).
- **Authorization**: granting permissions (what you may do).
- **Accountability / Auditing**: tracing actions to individuals (logs).
- **Non-repudiation**: a party **cannot deny** having performed an action (sending a message, signing a contract) — achieved with **digital signatures** and logs.
- **Authenticity**: data/communication is genuine.
- **Privacy**: an individual's right to control their personal information.
- **Parkerian hexad**: confidentiality, integrity, availability + **possession (control)**, **authenticity**, **utility**.
- **DAD triad** (opposite of CIA): **Disclosure, Alteration, Destruction/Denial**.

## 2. Threats, vulnerabilities and risk
| Term | Definition | Example |
|---|---|---|
| **Threat** | Any potential cause of an unwanted event that may harm an asset | Hacker, malware, flood, disgruntled employee |
| **Threat actor / agent** | The person or thing that carries out the threat | Cybercriminal, nation-state, insider |
| **Vulnerability** | A **weakness** that can be exploited | Unpatched software, weak password, open port, misconfiguration |
| **Exploit** | Code or technique that **takes advantage of a vulnerability** | An exploit kit for an unpatched browser |
| **Risk** | The **likelihood** a threat will exploit a vulnerability, and the **impact** if it does | Risk that ransomware encrypts unbacked-up data |
| **Attack** | An actual attempt to cause harm | A phishing campaign launched yesterday |
| **Attack vector** | The path or means used to attack | Email attachment, USB drive, web link |
| **Attack surface** | All the points where an attacker could try to enter | Open ports, user accounts, web apps |
| **Zero-day** | A vulnerability **unknown to the vendor** with no patch yet | — |
| **Countermeasure / control** | A safeguard that reduces risk | Firewall, training, encryption |

- **Risk = Threat × Vulnerability × Impact** (conceptually; likelihood × impact).
- **Risk management** steps: identify assets → identify threats and vulnerabilities → assess risk (likelihood and impact) → treat risk → monitor and review.
- **Qualitative** risk assessment uses ratings (high/medium/low). **Quantitative** uses money values: **SLE** (single loss expectancy) = asset value × exposure factor; **ARO** (annual rate of occurrence); **ALE** (annual loss expectancy) = SLE × ARO.
- **Risk treatment options**:
- **Avoid**: stop the risky activity.
- **Mitigate / reduce**: apply controls.
- **Transfer / share**: insurance, outsourcing.
- **Accept**: tolerate the risk (when the cost of control exceeds the loss).
- **Residual risk**: risk remaining after controls are applied.

### Threat actors
| Actor | Motivation |
|---|---|
| **Script kiddies** | Thrill, fame; use ready-made tools with little skill |
| **Hacktivists** | Political or social causes (e.g. Anonymous) |
| **Cybercriminals / organised crime** | Money — fraud, ransomware, identity theft |
| **Nation-state actors / APTs** | Espionage, sabotage; highly skilled, well funded; **Advanced Persistent Threats** stay hidden for long periods |
| **Insiders** | Disgruntled or careless employees; have legitimate access — very dangerous |
| **Cyberterrorists** | Cause fear or disruption to critical infrastructure |
| **Competitors** | Corporate espionage |
- **Hacker types**: **white hat** (ethical, authorised testing), **black hat** (malicious, unauthorised), **grey hat** (in between; may break in without permission but not for harm).

## 3. Malware (malicious software)
| Type | Key characteristic |
|---|---|
| **Virus** | Attaches to a host file/program; **needs user action** (running the file) to spread; replicates by infecting other files |
| **Worm** | **Self-replicating and self-propagating** across networks **without user action or a host file**; consumes bandwidth (e.g. WannaCry spread as a worm) |
| **Trojan horse** | **Disguised as legitimate/useful software** but performs hidden malicious actions; does **not** self-replicate |
| **Ransomware** | **Encrypts the victim's files** (or locks the system) and **demands payment** (often cryptocurrency) for the key |
| **Spyware** | Secretly **monitors and collects** user information and sends it to the attacker |
| **Keylogger** | Records **keystrokes** to steal passwords and card details (type of spyware) |
| **Adware** | Displays unwanted advertisements; may track browsing |
| **Rootkit** | Hides deep in the OS (even kernel) to give the attacker **privileged, concealed access**; hides other malware |
| **Backdoor** | Secret method of bypassing normal authentication to access a system |
| **Bot / botnet** | Infected computer (**bot/zombie**) controlled remotely; a **botnet** is a network of bots controlled by a **command-and-control (C2)** server — used for DDoS, spam |
| **Logic bomb** | Malicious code that activates when a **specific condition** is met (e.g. an employee's name removed from payroll) |
| **Time bomb** | Activates at a specific date/time |
| **RAT** (Remote Access Trojan) | Gives the attacker full remote control |
| **Fileless malware** | Runs in memory using legitimate tools (PowerShell); leaves few traces on disk |
| **Cryptojacking** | Secretly uses the victim's computer to **mine cryptocurrency** |
| **Scareware / rogue antivirus** | Fake warnings trick users into paying for useless "security" software |
| **Polymorphic / metamorphic virus** | Changes its code to avoid signature detection |
| **Macro virus** | Hides in document macros (Word, Excel) |
| **Boot sector virus** | Infects the boot sector/master boot record |
- **Signs of infection**: slow performance, pop-ups, unknown programs, changed settings, disabled antivirus, high network activity, missing or encrypted files.
- **Protection**: up-to-date antivirus/anti-malware, patching, avoid unknown attachments and downloads, least privilege, backups, email filtering, user awareness.

## 4. Attacks
### Social engineering
Manipulating **people** (the weakest link) into revealing information or performing actions.
| Attack | Description |
|---|---|
| **Phishing** | Fraudulent emails/websites impersonating trusted organisations to steal credentials or install malware |
| **Spear phishing** | Phishing **targeted at a specific person or organisation**, personalised |
| **Whaling** | Spear phishing aimed at **senior executives** (CEO, CFO) |
| **Vishing** | Voice phishing — by **phone call** |
| **Smishing** | Phishing via **SMS / text message** |
| **Pharming** | Redirects users from a legitimate website to a fake one (DNS poisoning or hosts-file change) even if they type the correct URL |
| **Pretexting** | Creating a **fabricated scenario** (pretext) to obtain information (pretending to be IT support) |
| **Baiting** | Leaving infected media (USB drives) for victims to find and use; or offering free downloads |
| **Quid pro quo** | Offering a service or benefit in exchange for information |
| **Tailgating / piggybacking** | Following an authorised person into a restricted area |
| **Shoulder surfing** | Watching someone enter a PIN or password |
| **Dumpster diving** | Searching trash for sensitive information |
| **Business Email Compromise (BEC)** | Impersonating executives/suppliers to request fraudulent payments |
| **Impersonation** | Pretending to be someone with authority |
- Defences: **security awareness training**, verify requests through a separate channel, email filtering, never share passwords, shred documents, access badges, clean-desk policy.

### Network and system attacks
| Attack | Description |
|---|---|
| **Denial of Service (DoS)** | Overwhelms a system with traffic/requests so legitimate users cannot access it — attacks **availability** |
| **DDoS (Distributed DoS)** | DoS from **many sources** (usually a botnet) at once; harder to block |
| **Man-in-the-Middle (MitM)** | Attacker secretly intercepts and possibly alters communication between two parties; e.g. on fake/rogue Wi-Fi |
| **Eavesdropping / sniffing** | Capturing network traffic to read data (packet sniffers like Wireshark) |
| **Spoofing** | Falsifying identity: **IP spoofing**, **email spoofing**, **ARP spoofing**, **DNS spoofing**, caller-ID spoofing |
| **Session hijacking** | Stealing a valid session token/cookie to take over a user's session |
| **Replay attack** | Capturing valid data (e.g. authentication) and retransmitting it later |
| **Password attacks** | **Brute force** (try every combination), **dictionary** attack (common words), **credential stuffing** (reuse leaked username/password pairs), **rainbow tables** (precomputed hashes), **password spraying** (one common password against many accounts) |
| **SQL injection** | Inserting malicious SQL into input fields to read/modify a database |
| **Cross-site scripting (XSS)** | Injecting malicious scripts into web pages viewed by other users |
| **Cross-site request forgery (CSRF)** | Tricking a logged-in user's browser into sending unwanted requests |
| **Buffer overflow** | Writing more data than a buffer can hold, overwriting memory to run attacker code |
| **Privilege escalation** | Gaining higher permissions than authorised |
| **Zero-day attack** | Exploits an unknown, unpatched vulnerability |
| **Drive-by download** | Malware downloads automatically just by visiting a compromised website |
| **Evil twin** | Fake Wi-Fi access point mimicking a legitimate one |
| **Watering hole** | Compromising a website frequently visited by the target group |
| **Supply chain attack** | Compromising a trusted vendor/software update to reach its customers |
| **Typosquatting** | Registering misspelled domains (gooogle.com) |

### Cyber kill chain (Lockheed Martin)
**Reconnaissance → Weaponisation → Delivery → Exploitation → Installation → Command and Control (C2) → Actions on objectives**. Defenders try to break the chain as early as possible.

## 5. Security controls
### By category (how they work)
| Category | Description | Examples |
|---|---|---|
| **Administrative (managerial)** | Policies, procedures, people-based | Security policies, training, background checks, separation of duties, risk assessments |
| **Technical (logical)** | Implemented with technology | Firewalls, encryption, antivirus, passwords, IDS/IPS, access control lists |
| **Physical** | Protect physical access to facilities and equipment | Locks, fences, guards, CCTV, badges, mantraps, biometric door locks, fire suppression |

### By function (what they do)
| Function | Purpose | Examples |
|---|---|---|
| **Preventive** | **Stop** an incident before it happens | Firewall, locks, encryption, access control, training |
| **Detective** | **Identify / discover** an incident during or after it occurs | IDS, CCTV recording, audit logs, motion sensors, antivirus scans |
| **Corrective** | **Fix / limit damage** after an incident | Restoring from backup, patching, removing malware, rebuilding systems |
| **Deterrent** | **Discourage** attackers | Warning signs, visible cameras, legal banners, guard dogs |
| **Recovery** | Restore normal operations | Disaster recovery site, backups |
| **Compensating** | Alternative control when the primary one is not feasible | Extra monitoring when separation of duties is impossible |
| **Directive** | Tell people what to do | Policies, signs ("Authorised personnel only") |
- **Defence in depth (layered security)**: multiple layers of controls so that if one fails, others still protect (physical → network → host → application → data, plus policies and people).
- **Least privilege**: users get only the minimum access needed for their job.
- **Separation (segregation) of duties**: no single person controls all parts of a critical process (prevents fraud).
- **Need to know**: access only to information necessary for the task.
- **Job rotation** and **mandatory vacations**: detect fraud.
- **Security by design**, **fail-safe/fail-secure defaults**, **keep it simple**.

## 6. Business continuity and disaster recovery
- **Business Continuity Plan (BCP)**: keeps **essential business functions running** during and after a disruption. Broader than DR.
- **Disaster Recovery Plan (DRP)**: restores **IT systems and data** after a disaster. Part of BCP.
- **Business Impact Analysis (BIA)**: identifies critical functions and the impact of their loss.
- **RTO (Recovery Time Objective)**: **maximum acceptable downtime** — how quickly systems must be restored.
- **RPO (Recovery Point Objective)**: **maximum acceptable data loss** measured in time — how far back the last backup can be.
- **MTD** (maximum tolerable downtime), **MTBF** (mean time between failures), **MTTR** (mean time to repair).

### Backup types
| Type | Backs up | Restore needs |
|---|---|---|
| **Full** | All data every time | Only the last full backup (fastest restore; slowest backup, most storage) |
| **Incremental** | Changes **since the last backup of any type** | Last full + **all** incrementals since (fast backup, slow restore) |
| **Differential** | Changes **since the last full backup** | Last full + **last** differential only |
| **Mirror / snapshot** | Exact copy / point-in-time image | — |
- **3-2-1 rule**: keep **3** copies of data, on **2** different media types, with **1** copy offsite (or offline/cloud).
- Test backups regularly.

### Recovery sites
| Site | Description | Cost / recovery speed |
|---|---|---|
| **Hot site** | Fully equipped, up-to-date systems and data; ready almost immediately | Most expensive; fastest |
| **Warm site** | Hardware and connectivity in place, data needs restoring | Medium |
| **Cold site** | Basic facility (power, space) only; equipment must be brought in | Cheapest; slowest |
| **Cloud / mobile site** | Recovery in the cloud or a mobile trailer | Varies |
- Redundancy: **RAID** (RAID 1 mirroring, RAID 5 striping with parity), clustering, load balancing, **UPS** and generators, redundant ISPs.
- DR testing: checklist review, **tabletop exercise** (walk-through discussion), simulation, parallel test, full interruption test.

## 7. Identity and access management (AAA)
- **AAA**: **Authentication** (verify identity), **Authorization** (grant permissions), **Accounting** (log and track user activity). AAA protocols: **RADIUS**, **TACACS+**, **Kerberos** (ticket-based, uses a Key Distribution Centre).
- **Identification** (claim identity, e.g. username) comes before authentication (prove it).

### Authentication factors
| Factor | Description | Examples |
|---|---|---|
| **Something you know** | Knowledge | Password, PIN, security question |
| **Something you have** | Possession | Smart card, security token, phone (OTP app, SMS code), key fob |
| **Something you are** | Inherence (biometrics) | Fingerprint, face, iris, retina, voice |
| **Somewhere you are** | Location | GPS, IP address geolocation |
| **Something you do** | Behaviour | Typing rhythm, signature dynamics, gait |
- **Multi-factor authentication (MFA)**: uses **two or more different factor types** (password + OTP). **Two-factor (2FA)** = two factors. Password + PIN is **not** MFA (both "something you know").
- **Single sign-on (SSO)**: one login gives access to multiple systems (e.g. via SAML, OAuth/OpenID Connect).
- **Biometric errors**: **False Acceptance Rate (FAR)** — impostor accepted (Type II error, more dangerous); **False Rejection Rate (FRR)** — legitimate user rejected (Type I error); **Crossover Error Rate (CER/EER)** — where FAR = FRR; lower CER = more accurate system.
- **OTP**: one-time password — **TOTP** (time-based), **HOTP** (counter-based).

### Strong password practice
Long (at least 12 characters), mix of upper/lower case, numbers and symbols, passphrases, no dictionary words or personal info, unique per account, use a **password manager**, change after a breach, enable MFA, account lockout after failed attempts. Systems should store passwords as **salted hashes**, never plain text.

### Access control models
| Model | Who decides access | Key idea | Example |
|---|---|---|---|
| **DAC** (Discretionary Access Control) | The **owner** of the resource | Owner grants permissions at their discretion | File permissions in Windows/Linux, sharing a Google Doc |
| **MAC** (Mandatory Access Control) | The **system**, based on **security labels/clearances** | Subjects have clearance levels; objects have classification labels (Top Secret, Secret, Confidential, Unclassified) | Military, government systems |
| **RBAC** (Role-Based Access Control) | Administrator assigns permissions to **roles**; users get roles | Access based on **job function** | "Nurse", "Accountant", "Admin" roles in a hospital system |
| **ABAC** (Attribute-Based Access Control) | Policies using **attributes** (user, resource, environment) | Fine-grained rules: department, time, location | "Managers in Finance may approve during office hours" |
| **Rule-based access control** | Predefined **rules** applied to all users | Rules set by admin | Firewall rules; login allowed only 8am–5pm |
- **Access Control List (ACL)**: list of permissions attached to an object, specifying which users/groups can access it and how (read, write, execute).
- **Account management**: provisioning, deprovisioning (remove accounts of leavers promptly), periodic access reviews, disabling default accounts, privileged access management (PAM).
- **Zero Trust**: "never trust, always verify" — no implicit trust based on network location; verify every access request.

## 8. Network security
### Firewalls
- A **firewall** monitors and controls incoming and outgoing traffic based on security **rules**; a barrier between trusted and untrusted networks.
| Type | Description |
|---|---|
| **Packet-filtering** | Checks packet headers (source/destination IP, port, protocol); fast but simple; stateless |
| **Stateful inspection** | Tracks the **state of connections**; allows return traffic for established sessions |
| **Proxy / application-level gateway** | Intermediary that inspects traffic at the application layer |
| **Next-Generation Firewall (NGFW)** | Deep packet inspection, application awareness, integrated IPS |
| **Web Application Firewall (WAF)** | Protects web apps from SQL injection, XSS, etc. |
| **Host-based vs network-based** | On an individual computer vs protecting a whole network |
- **DMZ (demilitarised zone)**: a separate network segment for public-facing servers (web, email) between the internet and the internal network.
- **Implicit deny**: anything not explicitly allowed is blocked.

### IDS and IPS
| | **IDS** (Intrusion Detection System) | **IPS** (Intrusion Prevention System) |
|---|---|---|
| Action | **Detects and alerts** (passive, monitors a copy of traffic) | **Detects and blocks** (active, sits **inline**) |
| Control type | Detective | Preventive |
| Risk | Does not stop attacks itself | False positives may block legitimate traffic |
- **NIDS/NIPS**: network-based; **HIDS/HIPS**: host-based (on one computer).
- **Detection methods**: **signature-based** (matches known attack patterns; cannot detect new/zero-day attacks) and **anomaly-based / behaviour-based** (compares to a baseline of normal activity; can detect new attacks but more false positives); heuristic.
- **False positive**: legitimate activity flagged as an attack. **False negative**: real attack not detected (more dangerous).
- **SIEM** (Security Information and Event Management): collects and correlates logs from many sources for real-time analysis and alerts.
- **Honeypot**: decoy system to lure and study attackers; **honeynet**: network of honeypots.

### Other network defences
- **VPN** (Virtual Private Network): encrypted tunnel over a public network (IPsec, SSL/TLS VPN) — protects confidentiality on public Wi-Fi.
- **Network segmentation / VLANs**: separate networks to limit spread.
- **NAC** (Network Access Control): checks devices before allowing network access.
- **Wireless security**: use **WPA2 or WPA3** (WEP is insecure); strong passphrase; change default router credentials; disable WPS; hide SSID offers little protection.
- **Secure protocols**: HTTPS (port 443) instead of HTTP (80); SSH (22) instead of Telnet (23); SFTP/FTPS instead of FTP (21); SNMPv3.
- **Patch management**: apply security updates promptly to fix vulnerabilities.
- **Hardening**: remove unnecessary services, close unused ports, change defaults.
- **Endpoint security**: antivirus, EDR (endpoint detection and response), device encryption.

## 9. Cryptography basics
- **Cryptography**: protecting information by transforming it into an unreadable form. **Plaintext** → (encryption with key) → **ciphertext** → (decryption) → plaintext.
- **Cipher**: the algorithm. **Key**: secret value used by the algorithm. **Cryptanalysis**: breaking codes.
| | **Symmetric encryption** | **Asymmetric (public-key) encryption** |
|---|---|---|
| Keys | **One shared secret key** for encrypt and decrypt | **Key pair**: public key (shared) and private key (kept secret) |
| Speed | Fast; good for bulk data | Slower |
| Problem | **Key distribution** — sharing the key securely | Solves key exchange |
| Examples | **AES**, DES, 3DES, Blowfish, RC4 | **RSA**, ECC, Diffie–Hellman (key exchange), DSA |
- Encrypt with the receiver's **public key** → only the receiver's **private key** can decrypt (confidentiality).
- **Digital signature**: sender signs (hash encrypted) with their **private key**; anyone verifies with the sender's **public key** → provides **integrity, authentication, non-repudiation**.
- **Hashing**: one-way function producing a fixed-length digest; cannot be reversed; any change in input changes the hash → checks **integrity**. Examples: **SHA-256**, SHA-1 (weak), MD5 (broken). **Collision**: two inputs giving the same hash.
- **Salting**: adding random data to passwords before hashing (defeats rainbow tables).
- **Digital certificate**: binds a public key to an identity; issued by a **Certificate Authority (CA)**; X.509 standard. **PKI** (Public Key Infrastructure) manages certificates.
- **SSL/TLS**: secures web traffic (HTTPS) using both asymmetric (handshake) and symmetric (session) encryption.
- **Data states**: **at rest** (stored — full-disk encryption, BitLocker), **in transit** (moving — TLS, VPN), **in use** (being processed).
- **Steganography**: hiding data inside other files (images, audio).
- Classical ciphers: **Caesar cipher** (shift letters, e.g. shift 3: A→D), substitution, transposition.

## 10. Security policies and governance
- **Security policy**: a formal high-level document stating an organisation's security goals, rules and responsibilities, approved by management.
- Hierarchy: **Policy** (what and why; mandatory) → **Standards** (specific mandatory requirements) → **Procedures** (step-by-step how) → **Guidelines** (recommended, optional) → Baselines (minimum configurations).
| Policy | Purpose |
|---|---|
| **Acceptable Use Policy (AUP)** | Defines permitted and prohibited use of IT resources |
| **Password policy** | Rules on length, complexity, expiry, reuse |
| **Access control policy** | How access is granted, reviewed and revoked |
| **Data classification policy** | Labels data by sensitivity (public, internal, confidential, restricted) and how to handle each |
| **BYOD policy** | Rules for personal devices at work |
| **Remote access policy** | Rules for working remotely (VPN required) |
| **Email / internet policy** | Proper use of email and web |
| **Incident response policy** | How incidents are reported and handled |
| **Backup policy** | What, how often, where data is backed up |
| **Clean desk policy** | No sensitive documents left on desks |
| **Change management policy** | Controlled process for system changes |
| **Data retention / disposal policy** | How long data is kept and how it is securely destroyed (shredding, degaussing, wiping) |
- **Security awareness training**: teaches staff to recognise phishing, use strong passwords, report incidents — addresses the human factor.
- **Standards and frameworks**: **ISO/IEC 27001** (Information Security Management System — ISMS), ISO 27002 (controls), **NIST Cybersecurity Framework** (Identify, Protect, Detect, Respond, Recover), **PCI DSS** (payment card data), COBIT, GDPR (EU privacy law).
- **Security roles**: CISO (Chief Information Security Officer), security analyst, data owner (decides classification), data custodian (implements protection), users.

## 11. Incident response
- **Security event**: any observable occurrence (a login). **Security incident**: an event that **actually or potentially harms** CIA (a successful breach). **Breach**: confirmed unauthorised access to data.
- **CSIRT / CERT**: Computer Security Incident Response Team. Nigeria: **ngCERT** (Nigeria Computer Emergency Response Team).

### Incident response phases (NIST SP 800-61)
1. **Preparation**: policies, IR team, tools, training, communication plan.
2. **Detection and analysis (identification)**: detect via IDS, logs, user reports; confirm and classify the incident; determine scope and severity.
3. **Containment**: limit the damage — isolate infected machines, disconnect from network, block malicious IPs (short-term and long-term containment).
4. **Eradication**: remove the cause — delete malware, close vulnerabilities, disable compromised accounts.
5. **Recovery**: restore systems from clean backups, return to normal operation, monitor for recurrence.
6. **Post-incident activity (lessons learned)**: review what happened, what worked, what to improve; update plans; write report.
- SANS version: **Preparation, Identification, Containment, Eradication, Recovery, Lessons learned (PICERL)**.
- **Digital forensics**: collecting and analysing evidence for investigation/court. **Chain of custody**: documented record of who handled evidence and when — preserves its integrity and admissibility. **Order of volatility**: collect most volatile first (CPU cache/registers → RAM → swap → disk → logs/backups). Work on a **forensic copy (image)**, verified with hashes, not the original.

## 12. Legal, ethical and career aspects
- **Nigeria Cybercrimes (Prohibition, Prevention, etc.) Act 2015** (amended 2024): criminalises unauthorised access, interception, system interference, computer fraud and forgery, identity theft, cyberstalking, cybersquatting, child pornography, cyberterrorism; protects Critical National Information Infrastructure.
- **Nigeria Data Protection Act (NDPA) 2023** (replaces NDPR 2019): regulates processing of personal data; created the **Nigeria Data Protection Commission (NDPC)**. Principles: lawfulness, purpose limitation, data minimisation, accuracy, storage limitation, integrity and confidentiality, accountability.
- **NITDA** (National Information Technology Development Agency): IT regulation and standards in Nigeria.
- International: **GDPR** (EU), **Budapest Convention on Cybercrime** (Council of Europe).
- **Intellectual property**: copyright, patents, trademarks, trade secrets; software piracy is illegal.
- **Ethics**: ethical hacking requires **written permission (authorisation) and defined scope**; respect privacy; responsible disclosure of vulnerabilities; professional codes (e.g. (ISC)² Code of Ethics).
- **Penetration testing**: authorised simulated attack to find vulnerabilities. **Black box** (no prior knowledge), **white box** (full knowledge), **grey box** (partial). **Red team** (attackers), **blue team** (defenders), **purple team** (both collaborating). **Vulnerability scanning** identifies known weaknesses (automated); penetration testing actively exploits them.
- **Certifications**: CompTIA Security+, CEH (Certified Ethical Hacker), CISSP, CISM, OSCP.

## 13. Personal cyber hygiene
- Keep OS and apps **updated**; use antivirus; enable firewall.
- Strong unique passwords + **password manager** + **MFA**.
- Be wary of unsolicited emails, links, attachments; verify sender; hover over links.
- Avoid public Wi-Fi for sensitive tasks or use a **VPN**.
- **Back up** important data (3-2-1).
- Lock devices (PIN/biometrics); encrypt phones and laptops.
- Limit personal information on social media; review privacy settings.
- Download apps only from official stores.
- Never share OTPs, BVN or PINs — banks never ask for them.

## Quick revision checklist
- Cybersecurity vs InfoSec; asset; CIA triad (meaning, threats, controls); authentication, authorization, accounting, non-repudiation; DAD.
- Threat, vulnerability, exploit, risk, attack vector, attack surface, zero-day; risk treatment (avoid, mitigate, transfer, accept); SLE × ARO = ALE; residual risk.
- Threat actors; white/black/grey hat; APT; insider threat.
- Malware: virus vs worm vs Trojan; ransomware, spyware, keylogger, rootkit, botnet, logic bomb, cryptojacking.
- Social engineering: phishing, spear phishing, whaling, vishing, smishing, pharming, pretexting, baiting, tailgating.
- Attacks: DoS/DDoS, MitM, spoofing, SQL injection, XSS, brute force, dictionary, credential stuffing; kill chain stages.
- Controls: administrative/technical/physical; preventive/detective/corrective/deterrent/recovery/compensating; defence in depth; least privilege; separation of duties.
- BCP vs DRP; RTO vs RPO; full/incremental/differential backups; 3-2-1 rule; hot/warm/cold sites.
- AAA; authentication factors; MFA (different factor types); SSO; FAR/FRR/CER; DAC, MAC, RBAC, ABAC, rule-based; ACL; zero trust.
- Firewall types; DMZ; IDS vs IPS; signature vs anomaly detection; false positive vs false negative; SIEM; honeypot; VPN; WPA2/WPA3.
- Symmetric (AES) vs asymmetric (RSA); hashing (SHA-256); digital signature; certificates, CA, PKI; TLS.
- Policy, standard, procedure, guideline; AUP, data classification; ISO 27001, NIST CSF.
- Incident response phases (preparation, detection/analysis, containment, eradication, recovery, lessons learned); chain of custody; order of volatility.
- Cybercrimes Act 2015, NDPA 2023, NITDA, ngCERT; ethical hacking with authorisation; pen-test types; red/blue team.
`;
