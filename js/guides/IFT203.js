window.GUIDES = window.GUIDES || {};
GUIDES.IFT203 = `
## How to use this guide
IFT203 (Introduction to Web Technologies) covers how the Web works and the three core front-end languages: **HTML** (structure), **CSS** (presentation) and **JavaScript** (behaviour). Exam questions ask for exact tag names, attribute names, CSS property names, protocol facts and output of short JavaScript snippets. Type the examples into a text file, save it as test.html and open it in a browser: seeing the result fixes it in memory.

> **Exam tip:** Remember the trio: HTML = content/structure, CSS = style/presentation, JavaScript = behaviour/interactivity.

## 1. The Internet and the World Wide Web
### History
| Year | Event |
|---|---|
| 1969 | **ARPANET**, funded by the US Department of Defense's ARPA, connected four university computers; the forerunner of the Internet |
| 1971 | Ray Tomlinson sent the first network email (introduced the @ sign) |
| 1974 | Vint Cerf and Bob Kahn published the TCP/IP design (they are called "fathers of the Internet") |
| 1 Jan 1983 | ARPANET switched to **TCP/IP** — often taken as the birth of the Internet |
| 1984 | Domain Name System (DNS) introduced |
| 1989 | **Tim Berners-Lee** proposed the **World Wide Web** at **CERN** (Switzerland) |
| 1990–91 | First web browser/editor (WorldWideWeb, later Nexus), first web server (CERN httpd) and first website |
| 1993 | **Mosaic**, the first popular graphical browser (NCSA; Marc Andreessen) |
| 1994 | Netscape Navigator; **W3C** (World Wide Web Consortium) founded by Berners-Lee to set web standards |
| 1995 | JavaScript created by **Brendan Eich** at Netscape (in about 10 days) |

### Internet vs Web
- The **Internet** is the global network of interconnected networks (the infrastructure) using TCP/IP.
- The **World Wide Web (WWW)** is a service that runs on the Internet: a system of interlinked **hypertext** documents accessed with a browser using **HTTP**. Email, FTP and VoIP are other Internet services that are not the Web.

### Key components and terms
- **Web page**: a document (usually HTML) displayed in a browser. **Website**: a collection of related web pages under one domain. **Home page**: the main/first page of a site.
- **Web browser** (client): software that requests and displays web pages — Chrome, Firefox, Edge, Safari, Opera.
- **Web server**: computer/software that stores websites and serves pages on request — Apache, Nginx, Microsoft IIS.
- **Hypertext**: text containing links to other text. **Hyperlink**: a clickable link. **Hypermedia**: hypertext extended to images, audio and video.
- **Client-server model**: the browser (client) sends a **request**; the server returns a **response**.
- **Search engine**: Google, Bing, Yahoo. **Web portal**: a gateway site offering many services.
- **Static web page**: content is fixed in the file (same for every visitor). **Dynamic web page**: content generated at request time (from a database, user input) using server-side languages such as **PHP, ASP.NET, Python, Node.js, JSP**.
- **Client-side scripting** runs in the browser (JavaScript). **Server-side scripting** runs on the server (PHP).

### URL
A **URL (Uniform Resource Locator)** is the address of a resource on the Web.
~~~
https://www.nou.edu.ng:443/courses/index.html?level=200#exams
 |       |               |   |                  |          |
scheme  host (domain)   port path             query     fragment
~~~
- **Scheme/protocol**: http, https, ftp, mailto.
- **Domain name**: www.nou.edu.ng. Read from the right: **.ng** is the country-code top-level domain (ccTLD) for Nigeria; **.edu** is the second-level category; **nou** is the organisation; **www** is the host.
- Generic TLDs: .com (commercial), .org (organisation), .net (network), .edu (education), .gov (government), .mil (military), .int (international).
- Default ports: HTTP **80**, HTTPS **443**, FTP 21, SMTP 25.

### Protocols
| Protocol | Full meaning | Use |
|---|---|---|
| HTTP | HyperText Transfer Protocol | Transfers web pages (port 80) |
| HTTPS | HTTP Secure | HTTP encrypted with **SSL/TLS** (port 443); padlock in browser |
| TCP/IP | Transmission Control Protocol / Internet Protocol | Core Internet protocols: TCP ensures reliable delivery; IP addresses and routes packets |
| FTP | File Transfer Protocol | Uploads/downloads files (e.g. publishing a site) |
| SMTP | Simple Mail Transfer Protocol | Sends email |
| POP3 / IMAP | Post Office Protocol 3 / Internet Message Access Protocol | Receive email |
| DNS | Domain Name System | Translates domain names into IP addresses |
| DHCP | Dynamic Host Configuration Protocol | Assigns IP addresses automatically |

- **HTTP is stateless**: each request is independent; **cookies** and sessions are used to remember users.
- HTTP methods: **GET** (request data; data visible in the URL), **POST** (send data in the request body, e.g. form submission), PUT, DELETE.
- HTTP status codes: **200 OK**, **301** moved permanently, **404 Not Found**, **403** Forbidden, **500** Internal Server Error. 1xx informational, 2xx success, 3xx redirection, 4xx client error, 5xx server error.
- **IP address**: numeric address of a device. **IPv4** is 32 bits written as four numbers 0–255 (192.168.1.1). **IPv6** is 128 bits written in hexadecimal.

### Web hosting and publishing
To publish a site you need a **domain name** (registered with a registrar) and **web hosting** (space on a server). Files are uploaded using FTP or a control panel. Types of hosting: shared, VPS, dedicated, cloud.

### Web 1.0, 2.0, 3.0
- **Web 1.0**: read-only static pages.
- **Web 2.0**: read-write, user-generated content and social interaction (blogs, wikis, Facebook, YouTube).
- **Web 3.0**: the semantic web (machines understand meaning; Berners-Lee) and, more recently, decentralised/blockchain web.

## 2. HTML fundamentals
### What HTML is
**HTML (HyperText Markup Language)** is the standard **markup language** for creating web pages. It is not a programming language: it describes structure using **elements**. The current version is **HTML5** (W3C recommendation in 2014). HTML files are saved with **.html** or **.htm**.

- An **element** usually has an **opening tag**, content, and a **closing tag**: <p>Hello</p>. The closing tag has a forward slash.
- **Empty (void) elements** have no content and no closing tag: <br>, <hr>, <img>, <input>, <meta>, <link>.
- **Attributes** give extra information and go in the opening tag as name="value": <a href="page.html">. Common attributes: id (unique), class (group), style, title, src, href, alt, width, height.
- Tags are not case-sensitive, but lowercase is recommended. Elements must be properly **nested**: <b><i>text</i></b>, not <b><i>text</b></i>.
- **Comments**: <!-- this is a comment --> (not displayed).

### Basic page structure
~~~
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
~~~
- **<!DOCTYPE html>** tells the browser the document is HTML5. It is a declaration, not a tag.
- **<html>** is the **root element**.
- **<head>** holds information *about* the page (not displayed in the page body): <title> (shown in the browser tab), <meta>, <link>, <style>, <script>.
- **<body>** holds everything visible on the page.

### Text elements
| Tag | Purpose |
|---|---|
| <h1> to <h6> | Headings; h1 largest/most important, h6 smallest |
| <p> | Paragraph |
| <br> | Line break (empty) |
| <hr> | Horizontal rule/line (empty) |
| <b> / <strong> | Bold / strong importance |
| <i> / <em> | Italic / emphasis |
| <u> | Underline |
| <sup> / <sub> | Superscript (x²) / subscript (H₂O) |
| <pre> | Preformatted text (keeps spaces and line breaks) |
| <blockquote> | Long quotation |
| <code> | Computer code |
| <span> | Inline container (no meaning on its own) |
| <div> | Block-level container/division |

**Block-level** elements start on a new line and take the full width (<div>, <p>, <h1>, <ul>, <table>, <form>). **Inline** elements stay in the line and take only needed width (<span>, <a>, <img>, <b>, <i>).

### Links
~~~
<a href="https://www.nou.edu.ng">NOUN website</a>
<a href="about.html">About us</a>                 (relative link)
<a href="https://example.com" target="_blank">Opens in new tab</a>
<a href="mailto:info@example.com">Email us</a>
<a href="#contact">Jump to contact section</a>    (link to element with id="contact")
~~~
**<a>** is the **anchor** element; **href** (hypertext reference) holds the destination. An **absolute URL** includes the full address; a **relative URL** is relative to the current page.

### Images and media
~~~
<img src="logo.png" alt="NOUN logo" width="200" height="100">
<video src="lecture.mp4" controls></video>
<audio src="song.mp3" controls></audio>
~~~
- **src** = source file; **alt** = alternative text shown if the image fails and read by screen readers (accessibility).
- Web image formats: **JPEG** (photos), **PNG** (transparency, lossless), **GIF** (simple animation, 256 colours), **SVG** (vector), WebP.
- HTML5 added <video>, <audio> and <canvas> (drawing with JavaScript), removing the need for Flash plug-ins.

### Lists
~~~
<ul>                  <ol>                  <dl>
  <li>Apple</li>        <li>First</li>        <dt>HTML</dt>
  <li>Mango</li>        <li>Second</li>       <dd>Markup language</dd>
</ul>                 </ol>                 </dl>
~~~
- **<ul>** unordered (bulleted) list; **<ol>** ordered (numbered) list; **<li>** list item.
- **<dl>** description (definition) list with **<dt>** (term) and **<dd>** (description).
- <ol type="A"> uses letters, type="i" roman numerals; start="5" starts numbering at 5.

### Tables
~~~
<table border="1">
  <caption>Exam timetable</caption>
  <tr>
    <th>Course</th><th>Date</th>
  </tr>
  <tr>
    <td>IFT203</td><td>24 Nov</td>
  </tr>
  <tr>
    <td colspan="2">All exams are CBT</td>
  </tr>
</table>
~~~
- **<table>** table; **<tr>** table row; **<th>** header cell (bold, centred by default); **<td>** table data cell; **<caption>** title.
- **colspan** merges cells across columns; **rowspan** merges cells down rows.
- Grouping: <thead>, <tbody>, <tfoot>.
- Old attributes (border, cellpadding, cellspacing) are now replaced by CSS.

### Forms
Forms collect user input and send it to a server.
~~~
<form action="register.php" method="post">
  <label for="nm">Name:</label>
  <input type="text" id="nm" name="fullname" placeholder="Your name" required>
  <input type="password" name="pwd">
  <input type="email" name="email">
  <input type="radio" name="sex" value="M"> Male
  <input type="radio" name="sex" value="F"> Female
  <input type="checkbox" name="agree"> I agree
  <select name="level">
    <option>100</option><option selected>200</option>
  </select>
  <textarea name="msg" rows="4" cols="30"></textarea>
  <input type="submit" value="Register">
  <input type="reset">
</form>
~~~
- **action** = where the data is sent; **method** = get or post.
- **name** attribute identifies the data sent to the server.
- Input types: text, password (characters hidden), email, number, date, radio (choose **one** from a group sharing the same name), checkbox (choose **many**), file, submit, reset, button, hidden, color, range.
- **<select>** creates a drop-down list with **<option>** items; **<textarea>** multi-line text.
- HTML5 validation attributes: required, placeholder, min, max, maxlength, pattern.

### Semantic HTML5 elements
Semantic elements describe their meaning: **<header>**, **<nav>** (navigation links), **<main>**, **<section>**, **<article>**, **<aside>** (side content), **<footer>**, **<figure>** and **<figcaption>**. They improve accessibility and search engine optimisation (SEO).

### Other head elements
- <meta charset="UTF-8"> sets the character encoding.
- <meta name="description" content="..."> and keywords help search engines.
- <meta name="viewport" ...> makes pages responsive on mobile.
- **Character entities** display reserved characters: &lt; for <, &gt; for >, &amp; for &, &nbsp; for a non-breaking space, &copy; for ©.

> **Exam tip:** <th> is a header cell, <td> is a data cell, <tr> is a row. <a href> is a link, <img src alt> is an image. <ol> numbered, <ul> bulleted. <br> and <img> are empty elements.

## 3. Cascading Style Sheets (CSS)
### What CSS does
**CSS (Cascading Style Sheets)** controls presentation: colours, fonts, spacing, layout and responsiveness. Proposed by **Håkon Wium Lie** (1994); CSS1 became a W3C recommendation in **1996**; the current level is CSS3 (in modules). Separating content (HTML) from presentation (CSS) makes sites easier to maintain and lets one stylesheet style many pages.

### Syntax
~~~
selector {
  property: value;
  property: value;
}

h1 { color: navy; font-size: 32px; }
~~~
A **rule** = **selector** + **declaration block** in curly braces. Each **declaration** is a **property: value** pair ending with a semicolon. CSS comments open with slash-star and close with star-slash.

### Three ways to add CSS
| Method | How | Scope |
|---|---|---|
| Inline | style attribute: <p style="color:red;"> | One element |
| Internal (embedded) | <style> ... </style> inside <head> | One page |
| External | Separate .css file linked with <link rel="stylesheet" href="style.css"> in <head> | Many pages (best practice) |

### The cascade, specificity and inheritance
When several rules apply to one element, the browser decides by:
1. **Importance**: declarations marked !important win.
2. **Specificity**: inline style > **id** selector > **class**/attribute/pseudo-class selector > element (type) selector.
3. **Source order**: if equal, the rule that comes **last** wins.

Generally **inline beats internal, which beats external** (as long as the external file is linked before the internal style). **Inheritance**: some properties (color, font-family, font-size) pass from parent to child; others (margin, padding, border) do not.

### Selectors
| Selector | Example | Selects |
|---|---|---|
| Element/type | p | All <p> elements |
| Class | .note | Elements with class="note" (can be used many times) |
| ID | #header | The element with id="header" (unique on the page) |
| Universal | * | All elements |
| Grouping | h1, h2, p | All h1, h2 and p |
| Descendant | div p | <p> inside a <div> (at any depth) |
| Child | div > p | <p> that is a direct child of <div> |
| Attribute | input[type="text"] | Text inputs |
| Pseudo-class | a:hover, li:first-child | Elements in a state/position |
| Pseudo-element | p::first-line, ::before | Part of an element |

Link pseudo-classes in the recommended **LoVe HAte** order: a:link, a:visited, a:hover, a:active.

### Common properties
- **Colour and background**: color (text colour), background-color, background-image: url("bg.jpg"), background-repeat, opacity.
- Colour values: names (red), hex (#FF0000), rgb(255, 0, 0), rgba(255, 0, 0, 0.5) (a = alpha/transparency), hsl().
- **Text and fonts**: font-family (Arial, "Times New Roman", serif), font-size, font-weight (bold), font-style (italic), text-align (left, center, right, justify), text-decoration (underline, none), text-transform (uppercase), line-height, letter-spacing.
- **Units**: px (pixels, absolute), % (relative to parent), **em** (relative to the element's font size), **rem** (relative to the root font size), vw/vh (viewport width/height), pt.
- **Lists**: list-style-type (disc, circle, square, decimal, none).
- **Display**: block, inline, inline-block, none (hides and removes from layout); visibility: hidden (hides but keeps space).

### The box model
Every element is a rectangular box made of four layers, from inside out:
~~~
+-------------------- margin --------------------+
|  +--------------- border ------------------+   |
|  |  +---------- padding ---------------+   |   |
|  |  |            CONTENT               |   |   |
|  |  +----------------------------------+   |   |
|  +-----------------------------------------+   |
+------------------------------------------------+
~~~
- **Content**: the text/image (width and height).
- **Padding**: space between content and border (inside the border; takes the background colour).
- **Border**: line around the padding (border: 2px solid black).
- **Margin**: space outside the border, separating the element from others (transparent).

Total width (default content-box) = width + left and right padding + left and right border + left and right margin. Example: width 200px, padding 10px, border 5px, margin 20px gives 200 + 20 + 10 + 40 = **270px** of horizontal space. With **box-sizing: border-box**, the width includes padding and border.

Shorthand: margin: 10px 20px 30px 40px means top, right, bottom, left (**clockwise**, think TRouBLe). margin: 10px 20px means top/bottom 10px, left/right 20px.

### Layout and positioning
- **position**: static (default), relative (offset from its normal place), absolute (relative to the nearest positioned ancestor), fixed (relative to the viewport; stays when scrolling), sticky.
- **float**: left/right (text wraps around); clear stops wrapping.
- **Flexbox** (display: flex): one-dimensional layout in rows or columns; justify-content (main axis), align-items (cross axis), flex-direction, flex-wrap.
- **Grid** (display: grid): two-dimensional layout with grid-template-columns and rows.
- **z-index**: stacking order of positioned elements (higher is in front).

### Responsive design
**Responsive web design** makes pages adapt to screen size. Tools: the viewport meta tag, fluid percentages, flexible images (max-width: 100%), and **media queries**:
~~~
@media (max-width: 600px) {
  body { font-size: 14px; }
  nav { display: none; }
}
~~~
Frameworks such as **Bootstrap** provide ready-made responsive CSS.

## 4. Introduction to JavaScript
### What JavaScript is
**JavaScript** is a lightweight, interpreted (just-in-time compiled), **client-side scripting language** that makes web pages interactive. It was created by **Brendan Eich** at **Netscape** in **1995** (first named Mocha, then LiveScript). It is standardised as **ECMAScript** (ES6 / ES2015 added let, const, arrow functions, classes). JavaScript is **not** Java; the two are unrelated. It also runs on servers through **Node.js**.

Uses: validating forms before submission, reacting to clicks, changing page content without reloading, animations, games, fetching data (AJAX).

### Adding JavaScript to a page
~~~
<script>
  alert("Hello!");
</script>

<script src="app.js"></script>              (external file)

<button onclick="greet()">Click me</button>   (inline event attribute)
~~~
The <script> tag can go in the <head> or <body>; placing it at the end of the body lets the page load first.

### Output
- **alert("text")**: pop-up message box.
- **console.log(value)**: writes to the browser console (for debugging).
- **document.write("text")**: writes into the page (not recommended after the page loads).
- **element.innerHTML = "text"**: changes an element's content.
- **prompt("question")** asks for input (returns a string); **confirm("question")** returns true/false.

### Variables and data types
~~~
var a = 5;          // function-scoped, can be redeclared (old style)
let b = 10;         // block-scoped, can be reassigned
const PI = 3.14;    // block-scoped, cannot be reassigned
~~~
- Identifiers may contain letters, digits, _ and $; cannot start with a digit; JavaScript is **case-sensitive**.
- Comments: // for a single line; slash-star ... star-slash for multi-line.
- Data types: **number** (integers and decimals together), **string**, **boolean**, **undefined** (declared but no value), **null** (intentionally empty), **object** (including arrays and functions), symbol, bigint.
- typeof returns a type: typeof 5 is "number"; typeof "hi" is "string"; typeof true is "boolean"; typeof undefined is "undefined"; typeof null is "object" (a famous quirk).
- JavaScript is **dynamically** and **weakly typed**: it converts types automatically. "5" + 3 gives "53" (string concatenation), but "5" - 3 gives 2 (numeric subtraction).

### Operators
- Arithmetic: + (add), - (subtract), × written as a star (multiply), / (divide), % (remainder), double star (power), ++ (increment), -- (decrement).
- Assignment: =, +=, -=, and the multiply-assign (star then =).
- Comparison: == (equal value, with type conversion), **=== (strict: equal value AND type)**, != and !==, >, <, >=, <=. 5 == "5" is true; 5 === "5" is false.
- Logical: && (and), || (or), ! (not).
- String concatenation uses +.

### Control structures
~~~
let score = 72;
if (score >= 70) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else {
  console.log("F");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);           // 1 2 3 4 5
}

let n = 0;
while (n < 3) { n++; }      // n ends as 3

do { n--; } while (n > 10); // runs once even though the condition is false

switch (day) {
  case 1: console.log("Mon"); break;
  default: console.log("Other");
}
~~~

### Functions
~~~
function add(x, y) {        // function declaration
  return x + y;
}
let sum = add(2, 3);        // 5

const square = (n) => n * n;   // arrow function (ES6)
~~~

### Arrays and objects
~~~
let fruits = ["mango", "orange", "pawpaw"];
fruits[0];              // "mango" (index starts at 0)
fruits.length;          // 3
fruits.push("guava");   // add to end
fruits.pop();           // remove last

let student = { name: "Ada", level: 200 };
student.name;           // "Ada"
~~~

### The DOM and events
The **DOM (Document Object Model)** is a tree representation of the HTML page that JavaScript can read and change. The **document** object is the root.
~~~
document.getElementById("title").innerHTML = "New heading";
document.querySelector(".note").style.color = "red";
let input = document.getElementById("age").value;
~~~
Common methods: getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), querySelectorAll(), createElement(), appendChild().

**Events** are actions the browser detects: **onclick**, **onload** (page finished loading), **onmouseover**, **onmouseout**, **onchange**, **onsubmit**, **onkeydown/onkeyup**, **onfocus/onblur**. Modern code uses element.addEventListener("click", handler).

### Form validation example
~~~
function validate() {
  let email = document.getElementById("email").value;
  if (email === "") {
    alert("Email is required");
    return false;           // stops the form being submitted
  }
  return true;
}
// <form onsubmit="return validate()">
~~~

### Related technologies
- **AJAX** (Asynchronous JavaScript and XML): exchanging data with the server in the background without reloading the page (XMLHttpRequest, fetch).
- **JSON** (JavaScript Object Notation): lightweight text format for data exchange.
- **XML** (eXtensible Markup Language): markup for storing/transporting data with user-defined tags.
- Libraries and frameworks: jQuery, React, Angular, Vue.
- **Web accessibility**: designing for people with disabilities (alt text, contrast, keyboard navigation); guidelines from W3C (WCAG).

## Quick revision checklist
- ARPANET 1969, TCP/IP 1983, Berners-Lee/CERN 1989, Mosaic 1993, W3C 1994, JavaScript 1995.
- Internet vs Web; client vs server; static vs dynamic; client-side vs server-side.
- URL parts; protocols and ports (HTTP 80, HTTPS 443); status codes 200/404/500; GET vs POST.
- HTML skeleton; head vs body; empty elements; links, images, lists, tables (tr/th/td, colspan/rowspan), forms and input types; semantic tags.
- CSS syntax; inline/internal/external; selectors (#id, .class); specificity; box model; units; positioning; media queries.
- JavaScript: let/const/var; data types; == vs ===; "5"+3 vs "5"-3; loops; functions; DOM methods; events.
`;
