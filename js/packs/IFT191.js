window.COURSES.push({
  code: "IFT191", title: "Computer Laboratory I", units: 1, cat: "C", source: "noun",
  modules: [
    ["Hardware components & peripherals", [
      "The system unit is the case that holds the motherboard, CPU, memory (RAM), power supply, hard disk and expansion cards. The CPU is inside the system unit; it is not the whole system unit.",
      "The motherboard is the main circuit board that connects every component. The power supply unit converts mains AC to the low-voltage DC the parts use.",
      "The display adapter (video) card is the link between the PC's memory and the monitor.",
      "Peripheral devices are devices attached to the system unit. Input: keyboard, mouse, scanner, microphone. Output: monitor, printer, speakers. Storage: hard disk, flash drive, CD/DVD.",
      "A CD-ROM (optical) drive reads Compact Disc Read-Only Memory discs. USB (Universal Serial Bus) is the common port for connecting peripherals.",
      "RAM is volatile (loses its contents when power goes off). ROM is non-volatile and holds the start-up instructions (BIOS)."
    ]],
    ["Auxiliary equipment", [
      "Auxiliary equipment supports and protects the computer but is not part of it: UPS, stabilizer, surge protector, air conditioner.",
      "A computer is an expensive resource and needs protection from electrical damage.",
      "UPS (Uninterruptible Power Supply) gives battery power for a short time when mains fails, so work can be saved and the PC shut down properly.",
      "A voltage stabilizer (regulator) keeps the supply voltage steady. A surge protector blocks sudden voltage spikes.",
      "Air conditioning keeps the lab cool and dust-free; heat and dust shorten the life of hardware.",
      "Lab rules: no food or drink, shut down properly, don't move equipment while it is on."
    ]],
    ["Network cables, devices & LAN", [
      "A network is two or more computers connected to share data and resources. LAN = Local Area Network (one building or site). WAN = Wide Area Network.",
      "Cables: twisted pair (UTP/STP, with an RJ-45 connector), coaxial, and fibre optic (uses light; fastest and longest distance).",
      "Straight-through cable connects unlike devices (PC to switch). Crossover cable connects like devices (PC to PC, switch to switch).",
      "Hub: repeats data to every port and gives a physical star topology. Switch: sends data only to the destination port using MAC addresses.",
      "Router: connects different networks and forwards packets using IP addresses. A NIC (network interface card) connects a computer to the network.",
      "Topologies: star (all devices to a central hub/switch), bus (one shared cable), ring, mesh."
    ]],
    ["IP addressing & basic network commands", [
      "An IP address identifies a device on a network. IPv4 is 32 bits, written as four decimal octets (e.g. 192.168.1.10). IPv6 is 128 bits.",
      "Classes by first octet: A = 1–126, B = 128–191, C = 192–223. Default masks: A 255.0.0.0, B 255.255.0.0, C 255.255.255.0.",
      "The subnet mask separates the network portion from the host portion of an IP address.",
      "Subnetting divides one network into smaller networks. Supernetting combines contiguous networks into one larger network.",
      "ipconfig (Windows) shows the IP address, subnet mask and default gateway; ipconfig /all adds the MAC address.",
      "ping tests whether a host can be reached. tracert shows the path (hops) a packet takes to a destination. nslookup queries DNS. hostname shows the computer's name."
    ]],
    ["Packet Tracer & Visual Basic", [
      "Cisco Packet Tracer is a network simulation tool for building and testing networks without real hardware.",
      "Simple network in Packet Tracer: add PCs and a switch, connect them with copper straight-through cable, give each PC an IP address, then ping to test.",
      "Packet Tracer multiuser lets networks on different computers connect to each other. Simulation mode shows packets moving step by step.",
      "Visual Basic (VB) is a popular, easy-to-learn, event-driven programming language with a graphical interface builder.",
      "VB screen: the form (window being designed), the toolbox (controls such as Label, TextBox, CommandButton), the properties window, the project explorer and the code window.",
      "A control has properties (Name, Caption, Text), methods and events (Click, Load). Code runs when an event happens. The Menu Editor creates menus."
    ]]
  ],
  cards: [
    ["System unit", "Case holding the motherboard, CPU, memory, power supply and drives."],
    ["Peripheral devices", "Devices attached to the system unit (keyboard, mouse, printer, monitor)."],
    ["Display adapter card", "Link between the PC's memory and the monitor."],
    ["UPS", "Uninterruptible Power Supply: battery backup when mains power fails."],
    ["Stabilizer", "Keeps supply voltage steady."],
    ["Hub", "Repeats data to all ports; gives a physical star topology."],
    ["Switch", "Forwards data only to the destination port using MAC addresses."],
    ["Router", "Connects different networks; forwards packets by IP address."],
    ["Straight-through vs crossover", "Straight-through: unlike devices (PC–switch). Crossover: like devices (PC–PC)."],
    ["IPv4 address", "32-bit address written as four octets, e.g. 192.168.1.1."],
    ["Subnet mask", "Separates the network portion from the host portion of an IP address."],
    ["Subnetting vs supernetting", "Subnetting splits a network; supernetting combines contiguous networks."],
    ["ping", "Tests whether a host is reachable."],
    ["tracert", "Shows the path a packet takes to a destination."],
    ["ipconfig", "Shows IP address, subnet mask and default gateway."],
    ["Packet Tracer", "Cisco's network simulation tool."],
    ["Visual Basic", "Easy-to-learn, event-driven programming language."],
    ["Toolbox (VB)", "Panel holding the controls you place on a form."]
  ],
  mcq: [
    [0, "Devices attached to the system unit are called", ["Peripheral devices", "Auxiliary equipment", "Firmware", "Protocols"], 0],
    [0, "The link between the PC's memory and the monitor is the", ["Sound card", "Network card", "Display adapter card", "Power supply"], 2],
    [0, "The main circuit board that connects all components is the", ["Hard disk", "Motherboard", "RAM", "Heat sink"], 1],
    [0, "Which of these is an input device?", ["Printer", "Monitor", "Speaker", "Scanner"], 3],
    [0, "Memory that loses its contents when power goes off is", ["ROM", "RAM", "Hard disk", "CD-ROM"], 1],
    [0, "USB stands for", ["Universal Serial Bus", "United System Board", "Universal System Backup", "Unit Serial Base"], 0],
    [1, "The device that supplies battery power when mains electricity fails is the", ["Stabilizer", "Surge protector", "UPS", "Router"], 2],
    [1, "A stabilizer is used to", ["Store data", "Keep the supply voltage steady", "Cool the processor", "Connect two networks"], 1],
    [1, "Which of these is auxiliary equipment?", ["Keyboard", "Motherboard", "Hard disk", "Air conditioner"], 3],
    [1, "UPS stands for", ["Uninterruptible Power Supply", "Universal Power System", "Unit Power Source", "Unlimited Power Supply"], 0],
    [2, "Which device gives a physical star topology and repeats data to every port?", ["Router", "Hub", "Modem", "NIC"], 1],
    [2, "Which device forwards packets between different networks?", ["Hub", "Switch", "Router", "Repeater"], 2],
    [2, "The connector used on twisted-pair network cable is", ["RJ-45", "RJ-11", "BNC", "HDMI"], 0],
    [2, "To connect two PCs directly, use a ______ cable.", ["Straight-through", "Coaxial", "Console", "Crossover"], 3],
    [2, "Which cable carries data as light?", ["UTP", "Fibre optic", "Coaxial", "STP"], 1],
    [2, "A network limited to one building or site is a", ["WAN", "MAN", "LAN", "PAN"], 2],
    [3, "An IPv4 address has", ["16 bits", "32 bits", "64 bits", "128 bits"], 1],
    [3, "The address 192.168.1.5 belongs to class", ["A", "B", "C", "D"], 2],
    [3, "The default subnet mask of a class B network is", ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], 1],
    [3, "Which command tests whether another host can be reached?", ["ping", "ipconfig", "hostname", "dir"], 0],
    [3, "Which command shows the path a packet takes to a destination?", ["ping", "ipconfig", "nslookup", "tracert"], 3],
    [3, "Which Windows command displays the computer's IP address?", ["tracert", "ipconfig", "ping", "netstat"], 1],
    [3, "Combining several contiguous networks into one larger network is", ["Subnetting", "Routing", "Supernetting", "Switching"], 2],
    [3, "What separates the network part of an IP address from the host part?", ["Subnet mask", "Default gateway", "MAC address", "DNS server"], 0],
    [4, "Packet Tracer is a", ["Word processor", "Network simulation tool", "Programming language", "Antivirus"], 1],
    [4, "In Packet Tracer, a PC is normally connected to a switch with a", ["Crossover cable", "Serial cable", "Copper straight-through cable", "Console cable"], 2],
    [4, "Visual Basic is described as ______ programming.", ["Event-driven", "Machine-level", "Assembly", "Batch"], 0],
    [4, "In Visual Basic, controls such as TextBox and CommandButton are picked from the", ["Properties window", "Code window", "Project explorer", "Toolbox"], 3],
    [4, "The property that sets the text shown on a VB command button is", ["Name", "Caption", "Index", "Enabled"], 1],
    [4, "In Visual Basic, menus are created with the", ["Toolbox", "Form Layout window", "Menu Editor", "Immediate window"], 2]
  ],
  fib: [
    [0, "Devices attached to the system unit are called ____ devices.", ["peripheral", "peripherals"]],
    [0, "The ____ adapter card links the PC's memory to the monitor.", ["display", "video", "graphics"]],
    [1, "UPS stands for Uninterruptible ____ Supply.", ["power"]],
    [2, "A ____ connects different networks and forwards packets by IP address.", ["router"]],
    [2, "Hubs provide a physical ____ topology.", ["star"]],
    [3, "An IPv4 address is ____ bits long.", ["32", "thirty-two", "thirty two"]],
    [3, "The ____ command tests whether a host is reachable.", ["ping"]],
    [3, "The subnet ____ distinguishes the network portion from the host portion.", ["mask"]],
    [4, "Cisco's network simulation tool is called Packet ____.", ["tracer"]],
    [4, "Visual Basic is an ____-driven programming language.", ["event"]]
  ]
});
window.GUIDES = window.GUIDES || {};
GUIDES.IFT191 = `
## How to use this guide
IFT191 (Computer Laboratory I) is a 1-unit practical course. The e-exam asks you to **name parts, say what a device or command does, and recall steps**. Four areas: hardware and auxiliary equipment, networking (cables, devices, IP addresses, commands), Packet Tracer, and Visual Basic.

## 1. Hardware components
| Part | Job |
|---|---|
| System unit | Case that houses the main components |
| Motherboard | Main board; connects everything |
| CPU (processor) | Carries out instructions; the "brain" |
| RAM | Working memory; volatile |
| ROM | Start-up instructions (BIOS); non-volatile |
| Hard disk | Permanent storage |
| Power supply unit | Converts AC mains to DC for the parts |
| Display adapter card | Link between PC memory and the monitor |
| CD-ROM / optical drive | Reads CD-ROM discs |

> **Exam tip:** The CPU is a component **inside** the system unit. The system unit is not the CPU.

### Peripherals
Devices attached to the system unit.
- **Input**: keyboard, mouse, scanner, microphone, webcam
- **Output**: monitor, printer, speakers, projector
- **Storage**: flash drive, external hard disk, CD/DVD
- **USB** = Universal Serial Bus, the standard port for peripherals

## 2. Auxiliary equipment
Equipment that protects or supports the computer.

| Equipment | Job |
|---|---|
| UPS | Battery power for a short time when mains fails |
| Stabilizer | Keeps voltage steady |
| Surge protector | Blocks voltage spikes |
| Air conditioner | Keeps the room cool and dust-free |

A computer is an expensive resource and must be protected from electrical damage.

## 3. Network cables
| Cable | Notes |
|---|---|
| Twisted pair (UTP/STP) | Most common in LANs; RJ-45 connector |
| Coaxial | Single copper core; older networks, cable TV |
| Fibre optic | Light signals; fastest, longest distance, no electrical interference |

- **Straight-through**: unlike devices (PC to switch, switch to router)
- **Crossover**: like devices (PC to PC, switch to switch)

## 4. Network devices
| Device | Job |
|---|---|
| NIC | Connects a computer to the network; has a MAC address |
| Hub | Repeats data to every port; physical star topology |
| Switch | Sends data only to the right port (uses MAC addresses) |
| Router | Joins different networks (uses IP addresses) |
| Modem | Converts between digital and analogue signals |

**LAN** covers one site. **WAN** covers a wide area (the Internet is the largest WAN).

## 5. IP addressing
An **IP address** identifies a device and its location on a network. IPv4 = 32 bits = 4 octets.

| Class | First octet | Default mask |
|---|---|---|
| A | 1–126 | 255.0.0.0 |
| B | 128–191 | 255.255.0.0 |
| C | 192–223 | 255.255.255.0 |

- **Subnet mask**: separates network part from host part
- **Subnetting**: split one network into smaller ones
- **Supernetting**: summarise contiguous networks into one large network
- **Default gateway**: the router address used to leave the local network

## 6. Basic network commands
| Command | Use |
|---|---|
| ipconfig | Show IP address, mask, gateway |
| ipconfig /all | Also shows MAC address and DNS |
| ping | Test if a host is reachable |
| tracert | Show the path (hops) to a host |
| nslookup | Look up a name in DNS |
| hostname | Show the computer's name |

## 7. Packet Tracer
Cisco's network **simulation** tool.
1. Drag devices (PCs, switch) onto the workspace
2. Connect them: PC to switch with **copper straight-through**
3. Set each PC's IP address and subnet mask (Desktop → IP Configuration)
4. Test with **ping** from the Command Prompt
5. Use **Simulation mode** to watch packets move

**Multiuser** lets Packet Tracer networks on different computers connect together.

## 8. Visual Basic
A popular, easy-to-learn, **event-driven** language.

| Part of the screen | Use |
|---|---|
| Form | The window you design |
| Toolbox | Controls: Label, TextBox, CommandButton, ListBox |
| Properties window | Set Name, Caption, Text, colour |
| Project explorer | Lists forms and modules in the project |
| Code window | Where you type event procedures |
| Menu Editor | Builds menus |

Steps for a VB program: design the interface, set properties, write code for events (e.g. Command1_Click), run and test.

## Quick revision list
- Hub = star topology, sends to all; switch = right port only; router = between networks
- ping tests reach; tracert shows path; ipconfig shows address
- Class C default mask 255.255.255.0
- UPS = backup power; stabilizer = steady voltage
- VB = event-driven; controls come from the toolbox
`;
