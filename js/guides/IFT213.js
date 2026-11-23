window.GUIDES = window.GUIDES || {};
GUIDES.IFT213 = `
## How to use this guide
IFT213 (Multimedia Technology / Multimedia Systems) covers the elements of multimedia — text, images, audio, video and animation — how each is captured, represented and compressed, and how multimedia projects are produced. Exams mix definitions, file-format identification and small calculations (file size, bit rate, sampling). Learn the formulas in sections 4–6 and practise them.

> **Exam tip:** Know which formats are **lossy** and which are **lossless**, and which are **bitmap** and which are **vector**. These come up every session.

## 1. Introduction to multimedia
### Definitions
- **Multimedia**: the integration of two or more media types — **text, graphics/images, audio, video and animation** — presented and controlled by a computer.
- **Interactive multimedia**: the user controls what and when elements are delivered (e.g. clicking buttons, choosing paths).
- **Hypermedia**: multimedia with links between elements (the Web is the largest hypermedia system). **Hypertext**: text containing links to other text.
- **Medium**: a means of distributing and representing information. Types of media:
- **Perception media** (how humans perceive: sight, hearing); **representation media** (how information is coded: ASCII, JPEG, MPEG); **presentation media** (input/output tools: screens, speakers, keyboards); **storage media** (hard disk, DVD, flash); **transmission media** (cables, wireless).
- **Static (discrete / time-independent) media**: text, images, graphics. **Dynamic (continuous / time-dependent) media**: audio, video, animation.

### Linear vs non-linear multimedia
| Linear | Non-linear |
|---|---|
| Plays from start to end without user control | User navigates and controls progress (interactive) |
| Examples: movie, slideshow presentation, TV broadcast | Examples: video games, websites, CBT/e-learning, kiosks |
| Also called presentational | Also called interactive / hypermedia |

### Applications of multimedia
Education and training (e-learning, CBT, simulations), entertainment (games, films, music), business (presentations, advertising, product demos, video conferencing), medicine (surgery simulation, imaging), public places (**kiosks** at airports, museums, banks), engineering (CAD, virtual prototypes), journalism and the Web, **virtual reality (VR)** and **augmented reality (AR)**.

### Multimedia hardware and software
- **Hardware**: fast CPU and GPU, large RAM and storage, sound card, video capture card, monitor, speakers, microphone, scanner, digital camera, camcorder, graphics tablet, MIDI keyboard, DVD/Blu-ray drive.
- **Software tools**: text editors and word processors; image editors (Adobe Photoshop, GIMP); vector tools (Illustrator, CorelDRAW, Inkscape); audio editors (Audacity, Adobe Audition, Sound Forge); video editors (Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve); animation (Adobe Animate/Flash, Blender, Maya, 3ds Max); authoring tools (Adobe Director, Authorware, ToolBook, Articulate).

## 2. Text
- Text is the most basic multimedia element; it carries most of the information (titles, menus, navigation, content).
- **Typeface**: a family of characters of the same design (e.g. Arial, Times New Roman). **Font**: a typeface in one particular size and style (e.g. Arial 12 pt Bold).
- **Point (pt)**: unit of type size; 72 points = 1 inch.
- **Serif** fonts have small strokes ("feet") at the ends of characters (Times New Roman, Georgia) — good for printed body text. **Sans-serif** fonts have none (Arial, Helvetica, Verdana) — good for screens and headings.
- **Monospaced** fonts give every character the same width (Courier); **proportional** fonts vary width.
- Terms: **leading** (space between lines), **kerning** (space between specific letter pairs), **tracking** (overall letter spacing), **x-height**, ascender, descender, baseline, alignment (left, right, centre, justified).
- Font technologies: **bitmap fonts** (fixed size, become jagged when scaled) vs **outline/scalable fonts** — **PostScript** (Adobe), **TrueType** (Apple/Microsoft), **OpenType** (Adobe/Microsoft, cross-platform).
- **Anti-aliasing** smooths jagged edges of text and graphics by blending edge pixels with the background.
- **Character sets**: ASCII (7-bit, 128 characters), extended ASCII (8-bit, 256), **Unicode** (covers all world scripts; UTF-8).
- Text guidelines: few fonts per screen, enough contrast, readable size, avoid long blocks of text on screen, use consistent styles.
- File formats: TXT (plain), RTF, DOC/DOCX, PDF, HTML.

## 3. Images and graphics
### Bitmap vs vector
| Bitmap (raster) images | Vector graphics |
|---|---|
| Made of a grid of **pixels** (picture elements) | Made of mathematical descriptions of shapes (lines, curves, polygons) |
| Good for **photographs** and complex colour detail | Good for logos, diagrams, fonts, illustrations, CAD |
| **Resolution-dependent**: enlarging causes **pixelation** (jaggies) | **Resolution-independent**: scale without loss of quality |
| Large file size | Small file size |
| Edited pixel by pixel (paint programs) | Objects edited individually (draw programs) |
| Formats: **BMP, JPEG, GIF, PNG, TIFF, PSD** | Formats: **SVG, EPS, AI, WMF, CDR, DXF**, PDF |
Converting vector to bitmap is called **rasterising**; bitmap to vector is **vectorising/tracing**.

### Resolution and colour depth
- **Resolution**: number of pixels in an image (e.g. 1920 × 1080) or density (**ppi** on screen, **dpi** in print). Screen images are commonly 72–96 ppi; print usually 300 dpi.
- **Colour (bit) depth**: number of bits per pixel; number of colours = 2 raised to the bit depth.
| Bit depth | Colours | Name |
|---|---|---|
| 1-bit | 2 | Monochrome (black and white) |
| 4-bit | 16 | |
| 8-bit | 256 | Greyscale or indexed colour (GIF) |
| 16-bit | 65,536 | High colour |
| 24-bit | ~16.7 million | **True colour** (8 bits each for R, G, B) |
| 32-bit | 16.7 million + 8-bit alpha (transparency) | True colour with alpha |

### Image file size formula
**Size (bits) = width × height × colour depth**. Divide by 8 for bytes.
~~~
640 x 480 image, 24-bit colour:
640 x 480 x 24 = 7,372,800 bits
/ 8            =   921,600 bytes
/ 1024         =       900 KB  (about 0.88 MB)

1024 x 768, 8-bit: 1024 x 768 x 8 / 8 = 786,432 bytes = 768 KB
~~~

### Colour models
| Model | Components | Used for |
|---|---|---|
| **RGB** | Red, Green, Blue — **additive** (all full = white) | Monitors, TVs, cameras, scanners |
| **CMYK** | Cyan, Magenta, Yellow, Key (black) — **subtractive** (all full ≈ black) | **Printing** |
| **HSB / HSV / HSL** | Hue, Saturation, Brightness/Value/Lightness | Colour pickers; intuitive editing |
| **YUV / YCbCr** | Luminance (Y) + two chrominance signals | Video and JPEG compression (PAL uses YUV; NTSC uses YIQ) |
- Primary colours of light: R, G, B. Secondary: cyan (G+B), magenta (R+B), yellow (R+G).
- The human eye is more sensitive to **brightness (luminance)** than colour — compression exploits this (**chroma subsampling**, e.g. 4:2:0).

### Image file formats
| Format | Compression | Colours | Notes |
|---|---|---|---|
| **BMP** | None (or RLE) | Up to 24-bit | Windows bitmap; very large files |
| **JPEG / JPG** | **Lossy** (DCT) | 24-bit | Best for photographs; adjustable quality; no transparency |
| **GIF** | **Lossless** (LZW) | **256 (8-bit)** | Supports simple **transparency** and **animation**; good for logos/cartoons |
| **PNG** | **Lossless** (Deflate) | Up to 48-bit + alpha | Replaced GIF on the Web; full alpha transparency; no animation (APNG aside) |
| **TIFF** | Lossless or none | High | Print and publishing; scanning; large |
| **PSD** | Lossless | High | Photoshop native; keeps layers |
| **RAW** | None | High | Unprocessed camera sensor data |
| **WebP** | Lossy or lossless | 24-bit + alpha | Google format for the Web |
| **SVG** | Text (XML) | — | Vector graphics for the Web |

Image capture: **scanners** (flatbed, sheet-fed, drum, handheld) and **digital cameras** (CCD or CMOS sensor). Image editing operations: crop, resize, rotate, adjust brightness/contrast, filters, layers, masks, selection tools, cloning.

## 4. Audio (sound)
### Sound basics
- Sound is a **mechanical wave** of pressure variations travelling through a medium (air). It cannot travel through a vacuum.
- **Frequency** (pitch): vibrations per second, in **hertz (Hz)**. Human hearing range ≈ **20 Hz to 20 kHz**. Below 20 Hz = infrasound; above 20 kHz = ultrasound.
- **Amplitude** (loudness): height of the wave; measured in **decibels (dB)**. Threshold of pain ≈ 120–130 dB.
- **Wavelength**, period (T = 1/f), and **timbre** (tone quality that distinguishes instruments).
- Speech mostly lies between about 300 Hz and 3.4 kHz (telephone band).

### Digitising audio
Analog sound is converted to digital by an **ADC** (analog-to-digital converter) in two steps:
1. **Sampling**: measuring the amplitude at regular time intervals. **Sampling rate** = samples per second (Hz).
2. **Quantisation**: rounding each sample to the nearest of a fixed set of levels. **Bit depth (sample size)** sets the number of levels = 2 raised to the bit depth (8-bit = 256 levels; 16-bit = 65,536 levels). The rounding error is **quantisation noise/error**.
Playback uses a **DAC** (digital-to-analog converter).

- **Nyquist theorem (Nyquist–Shannon sampling theorem)**: the sampling rate must be **at least twice the highest frequency** in the signal to reproduce it accurately. Sampling too slowly causes **aliasing** (false lower frequencies).
- CD audio samples at **44.1 kHz** because human hearing reaches ~20 kHz (2 × 20 = 40 kHz, plus margin).
- Each extra bit of depth adds about **6 dB** of dynamic range (16-bit ≈ 96 dB).

| Quality | Sampling rate | Bit depth | Channels |
|---|---|---|---|
| Telephone | 8 kHz | 8-bit | Mono |
| AM radio quality | 11.025 kHz | 8-bit | Mono |
| FM radio quality | 22.05 kHz | 16-bit | Stereo |
| **CD quality** | **44.1 kHz** | **16-bit** | **Stereo** |
| DVD / professional | 48 kHz or 96 kHz | 24-bit | Stereo / 5.1 |

### Audio file size formula
**Size (bytes) = sampling rate × (bit depth ÷ 8) × channels × duration (seconds)**
~~~
1 minute of CD-quality stereo:
44,100 x (16 / 8) x 2 x 60
= 44,100 x 2 x 2 x 60
= 10,584,000 bytes  (about 10 MB per minute)

Bit rate of CD audio = 44,100 x 16 x 2 = 1,411,200 bits/s (1,411 kbps)
~~~

### Audio file formats
| Format | Type | Notes |
|---|---|---|
| **WAV** | Uncompressed (PCM) | Microsoft/IBM; high quality; large |
| **AIFF** | Uncompressed | Apple |
| **MP3** (MPEG-1 Audio Layer III) | **Lossy** | Uses psychoacoustic model; typical 128–320 kbps; ~10:1 compression |
| **AAC** | Lossy | Successor to MP3; used by iTunes, YouTube |
| **WMA** | Lossy (or lossless) | Microsoft |
| **OGG Vorbis** | Lossy | Open source |
| **FLAC** | **Lossless** | Open source; about half the size of WAV |
| **ALAC** | Lossless | Apple Lossless |
| **MIDI** | Not sampled audio | Stores **instructions** (notes, timing, instrument) not sound; very small files; played by a synthesiser |
| **AU** | | Sun/UNIX |
- **MIDI (Musical Instrument Digital Interface)**: a protocol/standard that lets electronic instruments and computers communicate. A MIDI file is like **sheet music**; a WAV file is like a **recording**.
- **Psychoacoustics**: lossy audio removes sounds humans cannot hear — **frequency masking** (a loud sound hides a quieter one at a nearby frequency) and **temporal masking**.
- Audio editing: trimming, splicing, fade in/out, normalising, equalisation (EQ), noise reduction, reverb, mixing multitrack audio.
- Channels: mono (1), stereo (2), surround (5.1, 7.1).

## 5. Video
### Video basics
- **Video** is a sequence of still images (**frames**) displayed rapidly to create the illusion of motion, due to **persistence of vision**.
- **Frame rate**: frames per second (**fps**).
| Standard | Frame rate | Lines | Region |
|---|---|---|---|
| **Film (cinema)** | **24 fps** | — | Worldwide |
| **PAL** (Phase Alternating Line) | **25 fps** (50 fields/s) | **625** lines | UK, Europe, **Nigeria**, Africa, Asia |
| **NTSC** (National Television System Committee) | **29.97 (≈30) fps** (60 fields/s) | **525** lines | USA, Canada, Japan |
| **SECAM** | 25 fps | 625 lines | France, Russia (historically) |
- **Interlaced scanning** (i): each frame is drawn as two **fields** (odd lines, then even lines). **Progressive scanning** (p): all lines drawn in order each frame (sharper; used by computer monitors). "1080i" vs "1080p".
- **Aspect ratio**: width : height. **4:3** (standard-definition TV, old monitors), **16:9** (HDTV, widescreen), **21:9** (ultra-wide), **1.85:1 and 2.39:1** (cinema).
| Name | Resolution |
|---|---|
| SD (PAL) | 720 × 576 |
| SD (NTSC) | 720 × 480 |
| HD / 720p | 1280 × 720 |
| Full HD / 1080p | 1920 × 1080 |
| 2K (cinema) | 2048 × 1080 |
| 4K UHD | 3840 × 2160 |
| 8K UHD | 7680 × 4320 |

### Analog vs digital video
- Analog signal types: **composite** (all in one signal; lowest quality), **S-Video** (separates luminance and chrominance), **component** (three separate signals, Y Pb Pr; best analog quality).
- Digital interfaces: **HDMI**, DisplayPort, DVI, SDI, FireWire (IEEE 1394), USB.
- Video capture: camcorder, webcam, smartphone; **video capture card** digitises analog video.
- **Chroma keying** (green/blue screen): replacing a solid-colour background with another image.

### Uncompressed video size
**Size = width × height × colour depth × fps × duration (seconds)** (in bits; ÷ 8 for bytes)
~~~
1 second of 640 x 480, 24-bit, 25 fps:
640 x 480 x 24 x 25 = 184,320,000 bits
/ 8 = 23,040,000 bytes  (about 22 MB per second!)
~~~
This huge size is why video **must** be compressed.

### Video editing
- **Linear editing**: tape-to-tape, sequential (old method). **Non-linear editing (NLE)**: digital, random access to any clip (Premiere Pro, Final Cut, DaVinci Resolve).
- Terms: **clip**, **timeline**, **cut**, **transition** (fade, dissolve, wipe), **storyboard**, **rendering** (processing the final output), **timecode** (HH:MM:SS:FF), **frame**, **keyframe**, **titling**, **voice-over**.
- Containers vs codecs: a **codec** (coder–decoder) compresses/decompresses (H.264, H.265/HEVC, VP9, AV1, MPEG-2); a **container** holds video, audio and subtitles together (MP4, AVI, MOV, MKV, WMV, FLV, WebM).
| Format | Notes |
|---|---|
| **AVI** | Microsoft container; often large |
| **MOV** | Apple QuickTime |
| **MP4** (MPEG-4 Part 14) | Most common; Web and phones; usually H.264 + AAC |
| **WMV** | Windows Media Video |
| **FLV** | Flash video (obsolete) |
| **MKV** | Open Matroska container |
| **MPEG-2** | DVDs and digital TV broadcast |
| **3GP** | Older mobile phones |

## 6. Animation
- **Animation**: creating the illusion of motion by displaying a series of slightly different images. Based on **persistence of vision** (the eye retains an image for about 1/16 to 1/25 of a second).
- Animation frame rates: 12–15 fps (simple/limited), 24 fps (film), 25/30 fps (video).
- **Cel animation**: traditional hand-drawn method on transparent celluloid sheets (cels) over a background. Disney's classic films.
- **Keyframes**: the important frames marking start and end points of a movement. **Tweening (in-betweening)**: generating the intermediate frames between keyframes; computers do this automatically (**motion tween**, **shape tween / morphing**).
- **Frame-by-frame animation**: every frame drawn individually.
- **Path animation**: object moves along a defined path.
- **Morphing**: smoothly transforming one image or shape into another. **Warping**: distorting an image.
- **Stop-motion / claymation**: photographing physical objects moved in small steps.
- **Rotoscoping**: tracing over live-action film frames.
- **2D animation** (flat; Animate, Toon Boom) vs **3D animation** (modelling → texturing → rigging → animation → lighting → **rendering**; Blender, Maya, 3ds Max).
- **Kinematics**: study of motion of jointed structures. **Forward kinematics** (move parent → child follows) vs **inverse kinematics** (move the end, e.g. hand, and the joints adjust).
- **Motion capture (mocap)**: recording real actors' movements with sensors to animate characters.
- File formats: animated **GIF**, SWF (Flash, obsolete), APNG, **WebP**, video formats; 3D: OBJ, FBX, 3DS.
- Principles of animation (Disney): squash and stretch, anticipation, timing, ease in/ease out (slow in, slow out), follow-through, arcs, exaggeration, staging.

## 7. Data compression
### Why compress?
Multimedia files are huge (see the calculations above). Compression reduces **storage space**, **transmission time** and **bandwidth** requirements.
- **Compression ratio** = original size ÷ compressed size. E.g. 10 MB compressed to 1 MB → **10:1**.
- **Codec**: software/hardware that encodes (compresses) and decodes (decompresses).
- **Symmetric** compression: encoding and decoding take similar time (video conferencing). **Asymmetric**: encoding is much slower than decoding (DVD movies, streaming).

### Lossless vs lossy
| Lossless | Lossy |
|---|---|
| Original data **exactly recovered** after decompression | Some data **permanently discarded**; only an approximation is recovered |
| Lower compression ratio (about 2:1 to 3:1) | High compression ratio (10:1 to 100:1 or more) |
| Used for text, program files, medical images, archives | Used for photographs, audio, video |
| Techniques: **RLE, Huffman, LZW, arithmetic coding, Deflate** | Techniques: **DCT, quantisation, psychoacoustic/perceptual coding, motion compensation** |
| Formats: **ZIP, RAR, PNG, GIF, TIFF (LZW), FLAC, ALAC** | Formats: **JPEG, MP3, AAC, MPEG (1, 2, 4), H.264, WMA, OGG** |

### Lossless techniques
- **Run-Length Encoding (RLE)**: replaces runs of repeated symbols with a count and the symbol. AAAAABBBCCCCCC → **5A3B6C**. Works well for images with large areas of the same colour (BMP, TIFF, fax).
- **Huffman coding**: a variable-length **entropy coding** method that gives **shorter codes to more frequent symbols** and longer codes to rare ones. Codes are **prefix-free** (no code is the start of another). Built with a binary tree: repeatedly combine the two least frequent symbols.
- **LZW (Lempel–Ziv–Welch)**: dictionary-based; builds a table of repeated strings and replaces them with codes. Used in **GIF**, TIFF, and Unix compress.
- **Deflate** = LZ77 + Huffman; used in ZIP, gzip and **PNG**.
- **Arithmetic coding**: encodes a whole message as a single fractional number; more efficient than Huffman.

Huffman example:
~~~
Symbol frequencies: A=5, B=2, C=1, D=1   (total 9)
Combine C+D = 2;  combine (CD)+B = 4;  combine A + 4 = 9
Codes: A = 0, B = 10, C = 110, D = 111
Bits used = 5x1 + 2x2 + 1x3 + 1x3 = 15 bits
Fixed 2-bit codes would need 9 x 2 = 18 bits
~~~

### Lossy techniques and standards
- **JPEG** (Joint Photographic Experts Group): image is converted to YCbCr, chroma subsampled, split into **8 × 8 blocks**, transformed with the **Discrete Cosine Transform (DCT)**, **quantised** (the lossy step — high-frequency detail discarded), then zig-zag scanned and entropy coded (RLE + Huffman). Too much compression causes **blocking artefacts**. JPEG 2000 uses wavelets.
- **MP3 / AAC**: perceptual coding using psychoacoustic masking.
- **MPEG** (Moving Picture Experts Group) video standards:
- **MPEG-1**: VCD quality, ~1.5 Mbps; gave us MP3.
- **MPEG-2**: DVD and digital broadcast TV.
- **MPEG-4**: Web, mobile, streaming; Part 10 = **H.264/AVC**.
- **MPEG-7**: multimedia content description (metadata). **MPEG-21**: multimedia framework.
- **H.265/HEVC**: about twice as efficient as H.264; used for 4K.
- **Spatial (intraframe) compression**: reduces redundancy **within** a single frame (like JPEG).
- **Temporal (interframe) compression**: reduces redundancy **between** frames by storing only changes, using **motion estimation and compensation**.
- MPEG frame types: **I-frames** (intra-coded; complete picture; reference points), **P-frames** (predicted from previous I/P frame), **B-frames** (bi-directionally predicted from previous and next frames; smallest). A sequence of frames from one I-frame to the next is a **GOP (Group of Pictures)**.

## 8. Multimedia authoring and production
### Authoring tools
**Authoring software** combines media elements into an interactive application. Types (by metaphor):
| Type | Description | Examples |
|---|---|---|
| **Card/page-based** | Elements organised as pages of a book or stack of cards | HyperCard, ToolBook, PowerPoint |
| **Icon-based / event-driven (flowline)** | Drag icons onto a flowline to build the program flow | Authorware, IconAuthor |
| **Time-based** | Elements organised along a timeline with frames (like a movie) | Adobe Director, Flash/Animate |
| **Script/language-based** | Programmed with a scripting language | Lingo (Director), ActionScript, JavaScript/HTML5 |
Features of authoring tools: editing features, organising features (flowcharts, storyboards), programming features, interactivity features (branching, navigation), playback and delivery features (run-time player), cross-platform support.

### Multimedia production process (project stages)
1. **Planning and costing** (analysis): define the goal, target audience, content, budget, schedule, team; feasibility.
2. **Design**: create the **storyboard** (sketches of each screen and sequence), **flowchart**/navigation map, script, interface design. A **prototype** may be built.
3. **Production (development)**: create and gather media (text, images, audio, video), author the application, programming.
4. **Testing**: **alpha testing** (internal, by the development team) and **beta testing** (by selected real users outside the team); fix bugs; usability testing.
5. **Delivery (distribution)**: package and deliver on CD/DVD, USB, Web, app store, kiosk; documentation and maintenance.

### Multimedia team (roles)
**Project manager** (leads, schedules, budgets), **instructional designer** (designs learning content), **multimedia designer / graphic artist**, **interface designer**, **writer / scriptwriter**, **video specialist**, **audio specialist**, **animator**, **multimedia programmer / developer**, **subject matter expert (SME)**, producer for the Web.

### Interface design, navigation and delivery
- Good interface: consistent, simple, clear navigation, feedback to the user, readable text, suitable colours, help available.
- Navigation structures: **linear** (sequential), **hierarchical** (tree), **non-linear** (free movement), **composite** (mix of these).
- Delivery: CD-ROM (~700 MB), DVD (4.7/8.5 GB), Blu-ray (25/50 GB), the Web (bandwidth limits), **streaming** (playing while downloading — progressive download vs true streaming with RTSP/HLS/DASH).
- **Copyright and intellectual property**: media used must be licensed, created in-house, public domain or under Creative Commons; respect fair use.

### Multimedia networking (brief)
- Requirements: high bandwidth, low **latency** (delay), low **jitter** (variation in delay), synchronisation of audio and video (lip-sync). **QoS (Quality of Service)** manages these.
- Protocols: RTP/RTCP (real-time transport), RTSP (streaming control), HTTP-based HLS and MPEG-DASH (adaptive bitrate streaming), SIP and H.323 (VoIP/video conferencing).

## 9. Multimedia access systems (Module 5)
This section follows Module 5 of the new IFT213 course text: Internet telephony, APIs for multimedia communication, fibre optics and DSL, and digital/cable television.

> **Exam tip:** Module 5 questions are mostly definitions, lists of advantages and disadvantages, and the DSL table. Learn the DSL table row by row.

### Internet telephony
- **Internet telephony**: voice, fax, SMS and voice-messaging carried over the **Internet** instead of the **PSTN** (public switched telephone network).
- **Steps to make a VoIP call**: (1) signalling and media channel setup, (2) digitise the analogue voice, (3) encode, (4) packetise, (5) send as **IP packets** over a packet-switched network.
- **At the receiver** the steps run in reverse: receive the IP packets, decode them, then **digital-to-analogue conversion** gives back the voice.
- **How it starts**: you speak into a microphone → the **sound card** turns the analogue wave into digital data → the telephony software compresses it. Voice is normally **64 Kbps PCM** or **32 Kbps ADPCM** before compression.
- **Two transport protocols**: **TCP** carries addressing/directory information. **UDP** carries the actual voice packets.

### Super nodes
A **super node** is a Skype computer that helps other users connect when **firewalls** stop a direct connection. It works anonymously and securely, forwarding requests on behalf of ordinary nodes. The users don't know it is helping.

### VoIP vs Internet telephony (as the course text puts it)
| VoIP | Internet telephony |
|---|---|
| Phone calls over an **enterprise network** | Communication over the **Internet** |
| Users call with **IP phones** | Users call with PC software (e.g. Skype) |
| **Full-duplex**: both parties talk at the same time | The text says **only one person can speak at a time** |

A conventional telephone is also **full-duplex**.

### Advantages and disadvantages of Internet telephony
| Advantages | Disadvantages |
|---|---|
| The ITSP uses one infrastructure for Internet access and telephony | You need a PC and a broadband connection |
| Better bandwidth utilisation | For a free call, both users need similar software |
| Free calls between users of the same software | Callers can't keep track of call costs |
| Voicemail when busy or offline; easy to use | Poor call reception when other programs are running |
| Cheap international calls; Skype is freeware, ad-free, no spyware | |

### APIs for multimedia communication
- **API (Application Programming Interface)**: a set of rules and protocols that lets software applications talk to each other. Developers use APIs to add calls, video, chat or streaming **without building them from scratch**.
- **Examples**: **WebRTC** (open-source, real-time communication in browsers), **Twilio** (commercial SMS, voice and video), **Agora** (audio/video SDK for mobile and web), **Zoom SDK** (adds conferencing to other apps), **Vonage** (voice and messaging).
- **Roles of APIs**: real-time communication; media capture and encoding; network management and latency control; security and privacy; device and platform compatibility.

| Benefits | Challenges |
|---|---|
| Faster development time | Third-party dependency |
| Cross-platform compatibility | Cost and pricing models |
| Scalability and reliability | Network variability |
| High-quality audio and video | Security and compliance risks (GDPR, HIPAA) |
| Built-in security (end-to-end encryption, token authentication) | Integration complexity |
| Cost efficiency | Limited customisation |
| Regular updates and support | Versioning and updates breaking apps |
| Analytics and monitoring tools | Scalability problems in edge cases |

### Fibre optics
- **Fibre optics** sends data as **pulses of light** through glass or plastic fibres as thin as a human hair.
- **Parts**: **core** (where light travels), **cladding** (reflects light back into the core), **buffer coating** (protects from moisture and damage).
- **Working principle**: **total internal reflection**. Light hitting the cladding at the right angle bounces back into the core, even when the cable bends.
- **History**: 1840s light through glass shown; 1960s developed for communication; 1970s **Corning Inc.** made low-loss fibre; 1980s onward it replaced copper.

| Single-mode fibre (SMF) | Multi-mode fibre (MMF) |
|---|---|
| Small core, about **9 microns** | Larger core, **50 or 62.5 microns** |
| Infrared **laser** light (1310 or 1550 nm) | Light from **LEDs** |
| Long distance, **100 km or more** | Short distance, **up to 2 km** |
| Internet backbones, WANs | LANs, data centres |

**Advantages**: high speed (terabits per second), large bandwidth, long distance without repeaters, immune to electromagnetic interference, hard to tap (secure), light and thin.
**Applications**: Internet backbone, medical imaging (endoscopy), military and aerospace, broadcasting, industrial automation, education and research.

### 4G/5G and wireless broadband
- **4G and 5G** are generations of mobile broadband through **cell towers**. **5G** adds higher speed, ultra-low latency and massive connectivity for **IoT** and smart cities.
- **Wireless broadband** uses radio signals (Wi-Fi, fixed wireless) for last-mile access where cables are impractical.

### Digital Subscriber Line (DSL)
**DSL** is high-speed, digital, always-on Internet over **ordinary telephone lines**. It can carry voice and data at the same time.
- **ADSL (Asymmetric)**: download is faster than upload. Good for homes, **not for businesses** that send a lot of data both ways.
- **HDSL (High bit rate)**: an alternative to the **T-1 line (1.544 Mbps)**. T-1 uses **AMI** coding and needs repeaters beyond about 1 km. HDSL uses **2B1Q**, reaches 1.544–2 Mbps up to **12,000 ft (3.86 km)** without repeaters, and uses **two twisted pairs** (one per direction).
- **SDSL (Symmetric)**: the **one-pair version of HDSL**; **768 kbps** each way.
- **VDSL (Very high bit rate)**: short distances over coaxial, fibre or twisted pair; uses **DMT**.

| Technology | Downstream | Upstream | Distance (ft) | Pairs | Line code |
|---|---|---|---|---|---|
| ADSL | 1.5–6.1 Mbps | 16–640 kbps | 12,000 | 1 | DMT |
| ADSL Lite | 1.5 Mbps | 500 kbps | 18,000 | 1 | DMT |
| HDSL | 1.5–2.0 Mbps | 1.5–2.0 Mbps | 12,000 | 2 | 2B1Q |
| SDSL | 768 kbps | 768 kbps | 12,000 | 1 | 2B1Q |
| VDSL | 25–55 Mbps | 3.2 Mbps | 3,000–10,000 | 1 | DMT |

> **Watch out:** the paragraph on VDSL in the course text swaps the numbers. Go by the table: 25–55 Mbps is the **downstream** rate.

- **DSLAM (Digital Subscriber Line Access Multiplexer)**: equipment at the telephone exchange that collects many customers' DSL lines and joins them onto one high-speed link to the Internet. (The text asks about it but doesn't explain it.)

### Digital television
- **Digital TV (DTV)**: audio and video sent as **digital signals** instead of analogue ones. Picture formats fall into **HDTV** and **SDTV**.
- **Advantages over analogue**: digital channels use **less bandwidth**, so more channels fit in the same space; HD service; multimedia and interactivity; **multiplexing** (more than one programme on one channel); **electronic programme guides**; extra languages or subtitles.
- **Interference**: analogue TV suffers **ghosting** and **noise** but stays watchable. Digital reception must be nearly complete, otherwise neither sound nor picture works.

### Cable television
- **Cable TV**: TV delivered by radio-frequency signals over **coaxial cable**, or by light pulses over **optical fibre**, to the subscriber's home.
- **CATV** originally meant **Community Antenna Television** (from **1948**). Big community antennas were built where reception was poor, and cable was run to homes. Radio was sent by cable in some European cities as early as **1924**.
- Coaxial cable carries signals **both ways**. Spare bandwidth gives **cable Internet** and **cable telephony**. **Cable modems** turn network data into signals that can travel over coax.

## Quick revision checklist
- Define multimedia, hypermedia, interactive multimedia; linear vs non-linear; static vs dynamic media.
- Serif vs sans-serif; font vs typeface; 72 pt = 1 inch; TrueType/PostScript/OpenType; anti-aliasing.
- Bitmap vs vector and their formats; colour depth table; image size = W × H × depth ÷ 8.
- RGB (additive, screens) vs CMYK (subtractive, print); YUV in video.
- Sampling, quantisation, Nyquist (≥ 2 × highest frequency), aliasing; CD = 44.1 kHz, 16-bit, stereo; audio size formula; MIDI vs WAV.
- Film 24 fps, PAL 25 fps/625 lines (Nigeria), NTSC 29.97 fps/525 lines; interlaced vs progressive; 4:3 vs 16:9; HD/Full HD/4K resolutions.
- Keyframes and tweening; cel, stop-motion, morphing, rotoscoping, mocap; forward vs inverse kinematics.
- Lossless (RLE, Huffman, LZW; ZIP, PNG, GIF, FLAC) vs lossy (DCT; JPEG, MP3, MPEG); compression ratio; RLE and Huffman examples.
- JPEG steps; MPEG-1/2/4; I, P, B frames; spatial vs temporal compression.
- Authoring tool types (card, icon, time, script); production stages; alpha vs beta testing; storyboard; team roles.
- Module 5: Internet telephony vs PSTN; VoIP call steps; TCP (addressing) vs UDP (voice); super nodes; pros and cons of Internet telephony.
- APIs: WebRTC, Twilio, Agora, Zoom SDK, Vonage; their roles, benefits and challenges.
- Fibre: core, cladding, buffer; total internal reflection; single-mode vs multi-mode; advantages. 5G = speed, low latency, IoT.
- DSL table (ADSL, ADSL Lite, HDSL, SDSL, VDSL); T-1 = 1.544 Mbps; 2B1Q vs DMT; DSLAM.
- Digital TV advantages (bandwidth, multiplexing, EPG); cable TV, CATV = Community Antenna Television (1948).
`;
