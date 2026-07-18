import BuyButton from "./components/BuyButton";

const STATS = [
  { value: "5,940", label: "Authentic PYQs" },
  { value: "576", label: "Total Pages" },
  { value: "67", label: "Solved Papers" },
  { value: "13", label: "Syllabus Chapters" },
];

const EXAMS_COVERED = [
  "DSSSB TGT C.S. (2018 - 2024)",
  "DSSSB PGT C.S.",
  "KVS PGT C.S.",
  "NVS PGT C.S.",
  "Bihar STET C.S.",
  "Bihar TRE 1.0 / 2.0 / 3.0",
  "HTET PGT C.S.",
  "RPSC C.S.",
  "EMRS PGT C.S.",
  "UGC NET C.S.",
  "LT Grade C.S.",
  "UKPSC PGT C.S.",
  "CGPSC C.S."
];

const CHAPTERS = [
  {
    icon: "🔌",
    chapter: "Chapter 01",
    title: "Digital Logic Circuits and Discrete Mathematical Structures",
    topics: "Boolean logic, NOT, AND, OR, NAND, NOR, XOR, truth tables, De Morgan's laws, logic circuits.",
    questionCount: 520
  },
  {
    icon: "🖥️",
    chapter: "Chapter 02",
    title: "Computer Systems and Organization",
    topics: "Basic Computer Organization: hardware, software, CPU, memory (primary, cache, secondary), memory units (Bit, Byte, KB, MB, GB, TB, PB), system software (OS, utilities, device drivers), language translators (assembler, compiler, interpreter), application software, OS interface.",
    questionCount: 480
  },
  {
    icon: "🏗️",
    chapter: "Chapter 03",
    title: "Computer Systems Architecture",
    topics: "System buses, Internal memory: RAM, ROM, I/O modules, Programmed I/O, Interrupt-Driven I/O, Direct Memory Access (DMA), I/O Channels, External Interfaces.",
    questionCount: 460
  },
  {
    icon: "⚙️",
    chapter: "Chapter 04",
    title: "Operating Systems",
    topics: "OS organization, Device Management, Process Management, Scheduling, Synchronization Principles, Deadlocks, Memory Management, File Management.",
    questionCount: 510
  },
  {
    icon: "🐍",
    chapter: "Chapter 05",
    title: "Computational Thinking and Programming (Part 1)",
    topics: "Problem-solving steps, algorithms, Flowcharts, pseudocode, Python basics, tokens, variables, mutable/immutable types, lists, tuples, dictionaries.",
    questionCount: 450
  },
  {
    icon: "📁",
    chapter: "Chapter 06",
    title: "Computational Thinking and Programming (Part 2)",
    topics: "Functions: positional parameters, return values, scope (global/local), File handling: text/binary/CSV files, open modes (r, w, a), seek(), tell().",
    questionCount: 420
  },
  {
    icon: "🐍",
    chapter: "Chapter 07",
    title: "Introduction to Python",
    topics: "Python interpreter (interactive & script mode), indentation, identifiers, operator precedence, Dictionary key-value methods: len(), dict(), keys(), values(), update(), clear().",
    questionCount: 390
  },
  {
    icon: "🌐",
    chapter: "Chapter 08",
    title: "Computer Networks",
    topics: "ARPANET, NSFNET, IP address, Circuit/Packet switching, Twisted pair, coaxial, fibre optic, wireless (radio, micro, infrared), Modem, RJ45, Repeater, Hub, Switch, Router, Gateway, LAN, MAN, WAN, topologies (Star, Bus, Tree, Mesh), URL, WWW, email, VoIP.",
    questionCount: 540
  },
  {
    icon: "🗄️",
    chapter: "Chapter 09",
    title: "Database Management",
    topics: "Relational model, primary key, alternate key, foreign key, SQL: DDL, DML, DQL, Constraints (NOT NULL, UNIQUE, PRIMARY KEY), SQL functions: Math (POWER, ROUND, MOD), Text (UCASE, LCASE, MID, LENGTH), MySQL, database creation.",
    questionCount: 490
  },
  {
    icon: "🌍",
    chapter: "Chapter 10",
    title: "HTML and Web Technologies",
    topics: "HTML/DHTML: tags, links, tables, form tags, DOM concepts, CSS margins, XML structure, Element content models, DTD, ASP constants & data types.",
    questionCount: 380
  },
  {
    icon: "📊",
    chapter: "Chapter 11",
    title: "Data Handling using Pandas",
    topics: "Pandas & Matplotlib, Series creation, head/tail, slicing, DataFrames creation, iterations, add/delete/rename columns, Boolean indexing.",
    questionCount: 350
  },
  {
    icon: "🤖",
    chapter: "Chapter 12",
    title: "Emerging Trends",
    topics: "Artificial Intelligence (AI), Machine Learning (ML), NLP, AR/VR, Robotics, Big Data characteristics, IoT, Sensors, Smart cities.",
    questionCount: 280
  },
  {
    icon: "⚖️",
    chapter: "Chapter 13",
    title: "Society, Law, and Ethics / Societal Impacts",
    topics: "Digital footprints, netiquette, IPR (copyright, patent, trademark), open-source licensing, Cybercrime (hacking, phishing, ransomware), Cyber safety, Indian IT Act, e-waste, health concerns.",
    questionCount: 310
  },
  {
    icon: "📚",
    chapter: "Chapter 14",
    title: "Teaching Methodology and Pedagogy",
    topics: "Learning and Teaching, Language across the curriculum, Understanding discipline, Gender, school & society, Pedagogy of CS, Inclusive school, Assessment for learning, childhood.",
    questionCount: 360
  }
];

const EXAM_PATTERN = [
  { section: "Section A (General Test)", topics: "General Awareness, Mental Ability, Numerical Ability, English, Hindi", marks: "100 Marks" },
  { section: "Section B (Subject Specific)", topics: "Computer Science Subject Syllabus & Pedagogy (5,940 Solved Qs)", marks: "100 Marks" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">

      {/* ── Gov Flag Stripe ──────────────────────────────────── */}
      <div className="flag-stripe" />

      {/* ── Main Portal Header ────────────────────────────────── */}
      <header className="bg-white border-b border-slate-200 py-4 px-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            {/* National Colors Seal Emblem */}
            <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold border-2 border-amber-500 shadow-md">
              ER
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-blue-900 uppercase tracking-tight leading-tight">
                Exam Resource
              </h2>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Online Recruitment Preparation Portal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden lg:block">
              <p className="text-[10px] text-slate-400 uppercase font-semibold">Helpline Mail</p>
              <a href="mailto:support@examresource.in" className="text-xs text-blue-900 font-bold hover:underline">
                support@examresource.in
              </a>
            </div>
            <a 
              href="#buy" 
              className="px-6 py-2.5 rounded bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm tracking-wide shadow transition-all uppercase"
            >
              Order Solved PDF
            </a>
          </div>
        </div>
      </header>

      {/* ── Marquee Announcement ──────────────────────────────── */}
      <div className="marquee-container py-2 border-b border-orange-200">
        <div className="marquee-text">
          ★ IMPORTANT NOTICE: The official solved PDF containing 5,940 chapter-wise previous year questions (2018-2024) is now available for download. Candidates prepare with authentic data for DSSSB TGT Computer Science Exam. ★
        </div>
      </div>

      {/* ── Main Content Layout ───────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left/Middle Column (Primary Sales & Details) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Main Info Card */}
          <div className="gov-card p-6 md:p-8 rounded-lg">
            <span className="inline-block px-3 py-1 bg-amber-100 border border-amber-300 text-amber-800 text-[11px] font-bold rounded uppercase tracking-wider mb-4">
              Official Study Material
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight mb-4">
              DSSSB TGT Computer Science Exam Solved Question Bank (5,940 PYQs)
            </h1>
            <p className="text-slate-600 leading-relaxed mb-6">
              A comprehensive compilation of <strong>5,940 authentic computer science teacher recruitment questions</strong> from 67 exam sets. Every question includes answer keys verified against official keys and detailed explanations.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 mb-6">
              {STATS.map((s) => (
                <div key={s.label} className="text-center p-2">
                  <div className="text-2xl font-extrabold text-blue-900">{s.value}</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Action Area */}
            <div className="p-5 bg-orange-50 border border-orange-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-orange-800 font-semibold uppercase">Limited Time Candidate Subsidy</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black text-slate-900">₹{process.env.NEXT_PUBLIC_PRICE_DISPLAY || "199"}</span>
                  <span className="text-slate-400 line-through text-sm">₹999</span>
                  <span className="text-green-700 text-xs font-bold">(80% Off)</span>
                </div>
              </div>
              <BuyButton />
            </div>
          </div>

          {/* Authentic Screenshots Showcase */}
          <div className="gov-card p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-900 mb-1 flex items-center gap-2">
              <span>📖</span> Visual Verification of the PDF Book
            </h3>
            <p className="text-xs text-slate-500 mb-6">Verify page structure, watermark alignment, and topic-wise indexing directly from the screenshots:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <span className="block text-center text-xs font-bold text-slate-600 bg-slate-100 py-1.5 rounded border border-slate-200">Analysis Index (Page 6)</span>
                <div className="border border-slate-200 p-1 bg-white rounded shadow-sm hover:shadow transition duration-300">
                  <img src="/image.png" alt="Page 6 Index" className="w-full h-auto rounded" />
                </div>
              </div>
              <div className="space-y-2">
                <span className="block text-center text-xs font-bold text-slate-600 bg-slate-100 py-1.5 rounded border border-slate-200">Total Solved Sets (Page 7)</span>
                <div className="border border-slate-200 p-1 bg-white rounded shadow-sm hover:shadow transition duration-300">
                  <img src="/image copy.png" alt="Page 7 Analysis" className="w-full h-auto rounded" />
                </div>
              </div>
              <div className="space-y-2">
                <span className="block text-center text-xs font-bold text-slate-600 bg-slate-100 py-1.5 rounded border border-slate-200">Real Chapter (Page 9)</span>
                <div className="border border-slate-200 p-1 bg-white rounded shadow-sm hover:shadow transition duration-300">
                  <img src="/image copy 2.png" alt="Page 9 Content" className="w-full h-auto rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Syllabus & Chapters */}
          <div className="gov-card p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-900 mb-1">Official Syllabus & Chapters</h3>
            <p className="text-xs text-slate-500 mb-6">Topic-wise distribution as per Delhi administration standards</p>
            <div className="space-y-4">
              {CHAPTERS.map((ch, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded border border-slate-200 hover:bg-slate-100/50 transition flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{ch.icon}</span>
                  <div className="space-y-1.5 w-full">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 py-0.5 bg-blue-900 text-white text-[10px] font-bold rounded">
                          {ch.chapter}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900">{ch.title}</h4>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-700 text-white text-[10px] font-extrabold rounded whitespace-nowrap">
                        {ch.questionCount} Solved PYQs
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {ch.topics}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar / Scheme & Patterns) */}
        <div className="space-y-8">
          
          {/* Important Info Panel */}
          <div className="gov-card p-5 rounded-lg bg-white">
            <h3 className="text-sm font-bold text-blue-900 uppercase border-b border-slate-200 pb-2 mb-3 tracking-wide">
              📋 Official Exam Pattern
            </h3>
            
            <div className="space-y-4">
              {/* Detailed component breakdown table */}
              <div className="overflow-x-auto border border-slate-200 rounded">
                <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
                  <thead className="bg-slate-100 font-bold text-slate-700">
                    <tr>
                      <th className="px-3 py-2">Component</th>
                      <th className="px-3 py-2 text-right">Qs/Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="bg-slate-50/50"><td colSpan={2} className="px-3 py-1 font-bold text-blue-900 bg-blue-50/30">Section A (General)</td></tr>
                    <tr><td className="px-3 py-1.5">General Awareness</td><td className="px-3 py-1.5 text-right font-semibold">20 Qs</td></tr>
                    <tr><td className="px-3 py-1.5">Reasoning Ability</td><td className="px-3 py-1.5 text-right font-semibold">20 Qs</td></tr>
                    <tr><td className="px-3 py-1.5">Numerical Ability</td><td className="px-3 py-1.5 text-right font-semibold">20 Qs</td></tr>
                    <tr><td className="px-3 py-1.5">Hindi Language</td><td className="px-3 py-1.5 text-right font-semibold">20 Qs</td></tr>
                    <tr><td className="px-3 py-1.5">English Language</td><td className="px-3 py-1.5 text-right font-semibold">20 Qs</td></tr>
                    
                    <tr className="bg-slate-50/50"><td colSpan={2} className="px-3 py-1 font-bold text-blue-900 bg-blue-50/30">Section B (Subject)</td></tr>
                    <tr><td className="px-3 py-1.5">Computer Science + Pedagogy</td><td className="px-3 py-1.5 text-right font-semibold">100 Qs</td></tr>
                    
                    <tr className="bg-slate-100 font-bold text-slate-800">
                      <td className="px-3 py-2">Total Exam</td>
                      <td className="px-3 py-2 text-right">200 Qs/Marks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600 space-y-1">
                <p>⏰ <strong>Duration:</strong> 120 Minutes (Composite time)</p>
                <p>⚠️ <strong>Negative Marking:</strong> -0.25 for every incorrect answer</p>
                <p>📌 <strong>Rule:</strong> No separate minimum cut-off for Section A</p>
              </div>
            </div>
          </div>

          {/* Minimum Qualifying Marks Panel */}
          <div className="gov-card p-5 rounded-lg bg-white">
            <h3 className="text-sm font-bold text-blue-900 uppercase border-b border-slate-200 pb-2 mb-3 tracking-wide">
              📈 Minimum Qualifying Marks
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded">
              <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
                <thead className="bg-slate-100 font-bold text-slate-700">
                  <tr>
                    <th className="px-3 py-2">Category</th>
                    <th className="px-3 py-2 text-right">Minimum Cut-off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                  <tr>
                    <td className="px-3 py-2 font-medium">General / EWS</td>
                    <td className="px-3 py-2 text-right font-bold text-slate-800">40%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">OBC (Delhi)</td>
                    <td className="px-3 py-2 text-right font-bold text-slate-800">35%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">SC / ST / PwBD</td>
                    <td className="px-3 py-2 text-right font-bold text-slate-800">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Exam Coverage Sidebar */}
          <div className="gov-card p-5 rounded-lg bg-white">
            <h3 className="text-sm font-bold text-blue-900 uppercase border-b border-slate-200 pb-2 mb-3 tracking-wide">
              🔗 Covered Exams List
            </h3>
            <div className="space-y-2">
              {EXAMS_COVERED.map((exam, idx) => (
                <div key={idx} className="text-xs text-slate-700 flex items-center gap-2 py-1 border-b border-slate-100 last:border-0">
                  <span className="text-blue-900 font-black">▸</span>
                  <span>{exam}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Panel */}
          <div className="gov-card p-5 rounded-lg bg-white border-l-4 border-l-emerald-600">
            <h3 className="text-sm font-bold text-emerald-800 uppercase mb-2">
              🛡️ Candidate Security & Delivery
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Upon successful online payment verification, a secure one-time download token is instantly generated for the PDF. 
              <br /><br />
              All transaction signatures are cryptographically verified by our servers. No manual verification required.
            </p>
          </div>

        </div>

      </div>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="mt-20 border-t border-slate-200 bg-slate-900 text-slate-400 py-10 text-xs">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-black text-white">E</div>
            <span className="font-bold text-white tracking-tight uppercase">Exam Resource preparation portal</span>
          </div>
          <p className="max-w-xl mx-auto text-slate-500 leading-relaxed text-[11px]">
            This portal is private learning material and test preparation aid. All official recruitment exams are administered by respective state selection boards.
          </p>
          <div className="text-[11px] text-slate-500 pt-4 border-t border-white/5">
            © 2026 Exam Resource. Developed by Tech Support Team.
          </div>
        </div>
      </footer>
    </main>
  );
}
