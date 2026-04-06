export function buildCovers() {
  // Left cover — placeholder (Ganesha image rendered directly in InvitationBook.jsx)
  const leftSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" preserveAspectRatio="none">
    <rect width="10" height="10" fill="#fff8f0"/>
  </svg>`;

  const rightSvg = `<svg xmlns="http://www.w3.org/2000/svg"
    width="900" height="600" viewBox="0 0 900 600"
    preserveAspectRatio="none">

  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#fffbf0"/>
      <stop offset="50%"  stop-color="#fff6e0"/>
      <stop offset="100%" stop-color="#fdf0d5"/>
    </linearGradient>
    <linearGradient id="gld" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#c9913a"/>
      <stop offset="50%"  stop-color="#f0c060"/>
      <stop offset="100%" stop-color="#c9913a"/>
    </linearGradient>
  </defs>

  <!-- Background fills edge to edge -->
  <rect width="900" height="600" fill="url(#bg2)"/>

  <!-- Outer + inner border -->
  <rect x="6"  y="6"  width="888" height="588" rx="16" fill="none" stroke="url(#gld)" stroke-width="2.2" opacity="0.75"/>
  <rect x="14" y="14" width="872" height="572" rx="12" fill="none" stroke="url(#gld)" stroke-width="0.8" opacity="0.35"/>

  <!-- Corner flowers -->
  <text x="32"  y="44"  font-size="16" text-anchor="middle" fill="#c9913a" opacity="0.85">✿</text>
  <text x="868" y="44"  font-size="16" text-anchor="middle" fill="#c9913a" opacity="0.85">✿</text>
  <text x="32"  y="578" font-size="16" text-anchor="middle" fill="#c9913a" opacity="0.85">✿</text>
  <text x="868" y="578" font-size="16" text-anchor="middle" fill="#c9913a" opacity="0.85">✿</text>

  <!-- HEADER  (y 0 – 80) -->
  <rect x="0" y="0" width="900" height="80" fill="rgba(202,145,58,0.07)"/>
  <text x="450" y="30" font-size="22" text-anchor="middle" fill="#c9913a" font-family="serif">ॐ</text>
  <line x1="80"  y1="40" x2="360" y2="40" stroke="url(#gld)" stroke-width="1" opacity="0.5"/>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" text-anchor="middle"
        fill="#8b6530" letter-spacing="3">— विवाह मन्त्र —</text>
  <line x1="540" y1="40" x2="820" y2="40" stroke="url(#gld)" stroke-width="1" opacity="0.5"/>
  <line x1="20"  y1="62" x2="880" y2="62" stroke="url(#gld)" stroke-width="0.6" opacity="0.25"/>
  <text x="450" y="76" font-family="Georgia,serif" font-size="10" text-anchor="middle"
        fill="#a07840" opacity="0.65" letter-spacing="1">॥ श्री गणेशाय नमः ॥</text>

  <line x1="20" y1="80" x2="880" y2="80" stroke="url(#gld)" stroke-width="0.8" opacity="0.4"/>

  <!-- MANTRA 1 — सप्तपदी  (y 80 – 196) -->
  <rect x="20" y="81" width="860" height="114" rx="8" fill="rgba(202,165,106,0.10)"/>
  <text x="450" y="106" font-family="Georgia,serif" font-size="20" text-anchor="middle"
        fill="#7a4f1a" font-weight="bold">सप्तपदी</text>
  <line x1="120" y1="114" x2="780" y2="114" stroke="url(#gld)" stroke-width="0.7" opacity="0.35"/>
  <text x="450" y="137" font-family="Georgia,serif" font-size="14.5" text-anchor="middle"
        fill="#5c3b10">इहैव स्तं मा वि यौष्टं विश्वमायुर्व्यश्नुतम्</text>
  <text x="450" y="158" font-family="Georgia,serif" font-size="12" text-anchor="middle"
        fill="#6b4c18" font-style="italic">May you two remain together, enjoying a full and blessed life.</text>
  <text x="450" y="180" font-family="Georgia,serif" font-size="11" text-anchor="middle"
        fill="#5c3b10" opacity="0.65">सप्तपदी मन्त्र — The Seven Sacred Steps of Marriage</text>

  <line x1="20" y1="196" x2="880" y2="196" stroke="url(#gld)" stroke-width="0.8" opacity="0.4"/>

  <!-- MANTRA 2 — वर मन्त्र  (y 196 – 312) -->
  <rect x="20" y="197" width="860" height="114" rx="8" fill="rgba(202,165,106,0.06)"/>
  <text x="450" y="222" font-family="Georgia,serif" font-size="20" text-anchor="middle"
        fill="#7a4f1a" font-weight="bold">वर मन्त्र</text>
  <line x1="120" y1="230" x2="780" y2="230" stroke="url(#gld)" stroke-width="0.7" opacity="0.35"/>
  <text x="450" y="253" font-family="Georgia,serif" font-size="14.5" text-anchor="middle"
        fill="#5c3b10">धर्मे च अर्थे च कामे च नातिचरामि</text>
  <text x="450" y="274" font-family="Georgia,serif" font-size="12" text-anchor="middle"
        fill="#6b4c18" font-style="italic">In dharma, wealth and love — I shall never forsake you.</text>
  <text x="450" y="296" font-family="Georgia,serif" font-size="11" text-anchor="middle"
        fill="#5c3b10" opacity="0.65">वर-वधू द्वारा लिया गया पवित्र विवाह वचन</text>

  <line x1="20" y1="312" x2="880" y2="312" stroke="url(#gld)" stroke-width="0.8" opacity="0.4"/>

  <!-- MANTRA 3 — आशीर्वाद  (y 312 – 428) -->
  <rect x="20" y="313" width="860" height="114" rx="8" fill="rgba(202,165,106,0.10)"/>
  <text x="450" y="338" font-family="Georgia,serif" font-size="20" text-anchor="middle"
        fill="#7a4f1a" font-weight="bold">आशीर्वाद</text>
  <line x1="120" y1="346" x2="780" y2="346" stroke="url(#gld)" stroke-width="0.7" opacity="0.35"/>
  <text x="450" y="369" font-family="Georgia,serif" font-size="14.5" text-anchor="middle"
        fill="#5c3b10">सुमंगली भव | सौभाग्यवती भव | दीर्घसुमंगली भव</text>
  <text x="450" y="390" font-family="Georgia,serif" font-size="12" text-anchor="middle"
        fill="#6b4c18" font-style="italic">Be ever auspicious, ever blessed, ever prosperous.</text>
  <text x="450" y="412" font-family="Georgia,serif" font-size="11" text-anchor="middle"
        fill="#5c3b10" opacity="0.65">वधू को दिया जाने वाला पारम्परिक आशीर्वाद</text>

  <line x1="20" y1="428" x2="880" y2="428" stroke="url(#gld)" stroke-width="0.8" opacity="0.4"/>

  <!-- MANTRA 4 — शान्ति मन्त्र  (y 428 – 524) -->
  <rect x="20" y="429" width="860" height="94" rx="8" fill="rgba(202,165,106,0.06)"/>
  <text x="450" y="454" font-family="Georgia,serif" font-size="20" text-anchor="middle"
        fill="#7a4f1a" font-weight="bold">शान्ति मन्त्र</text>
  <line x1="120" y1="462" x2="780" y2="462" stroke="url(#gld)" stroke-width="0.7" opacity="0.35"/>
  <text x="450" y="484" font-family="Georgia,serif" font-size="14.5" text-anchor="middle"
        fill="#5c3b10">शं नो मित्रः शं वरुणः | शं नो भवत्वर्यमा</text>
  <text x="450" y="506" font-family="Georgia,serif" font-size="12" text-anchor="middle"
        fill="#6b4c18" font-style="italic">May all divine forces bless this union with peace.</text>

  <line x1="20" y1="524" x2="880" y2="524" stroke="url(#gld)" stroke-width="0.8" opacity="0.4"/>

  <!-- CLOSING — ॐ शान्तिः × 3  (y 524 – 600) fills to bottom edge -->
  <rect x="20" y="525" width="860" height="68" rx="8"
        fill="rgba(202,165,106,0.16)" stroke="rgba(202,165,106,0.45)" stroke-width="1"/>
  <text x="450" y="554" font-family="Georgia,serif" font-size="18" text-anchor="middle"
        fill="#b98f58" font-weight="bold">ॐ शान्तिः शान्तिः शान्तिः</text>
  <text x="450" y="578" font-family="Georgia,serif" font-size="11.5" text-anchor="middle"
        fill="#8b6530" font-style="italic">Peace in body, peace in mind, peace in spirit. ❧</text>

</svg>`;

  const toUri = svg =>
    'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

  return { left: toUri(leftSvg), right: toUri(rightSvg) };
}
