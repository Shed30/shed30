import ContactForm from "@/components/ContactForm";
import StudioWaitlist from "@/components/StudioWaitlist";
import ToolShed from "@/components/ToolShed";
import { CheckBox, HandNote, Pin, PencilUnderline, SectionLabel, SketchArrow, Tape, TornEdge } from "@/components/Decor";

// Hidden on narrow screens, where margin notes and props would crowd the page.
const HIDE_SM = "max-[820px]:hidden!";

const SEC = "mx-auto max-w-[1200px] px-3.5 md:px-8";
const H2 = "m-0 text-[29px] leading-[1.15] font-extrabold text-navy md:text-[40px] md:leading-[1.12]";

// Quick links under the hero, one for each part of the business.
const quickLinks = [
  { href: "#make", n: "01", title: "Services", note: "Made to order, then handed over", tilt: "-rotate-[0.8deg]", tape: "-rotate-[3deg]" },
  { href: "#work", n: "02", title: "Selected work", note: "Products, games and past projects", tilt: "rotate-[0.6deg]", tape: "rotate-[4deg]" },
  {
    href: "#studio",
    n: "03",
    title: "Design Studio",
    note: "My learning design tool, in development",
    tilt: "-rotate-[0.4deg]",
    tape: "rotate-[2deg]",
  },
  { href: "#courses", n: "04", title: "Ready-made courses", note: "Self-paced, available now", tilt: "rotate-[0.7deg]", tape: "-rotate-[4deg]" },
];

const studioFeatures: [string, boolean][] = [
  ["Define the problem and test the request", true],
  ["Is training the answer?", true],
  ["Learners, stakeholders and outcomes", true],
  ["Delivery strategy, with the reasons shown", true],
  ["Alignment check: taught, practised, checked", true],
  ["Transfer and evaluation plans", true],
  ["Export to PDF and Word", true],
  ["Academy units", false],
  ["Design mentor", false],
];

const services = [
  {
    num: "01",
    icon: "/images/icons/needs.png",
    title: "Needs analysis",
    desc: "We start with the real problem: your people, your goals, your constraints. No tool gets picked up until that's clear.",
  },
  {
    num: "02",
    icon: "/images/icons/layers.png",
    title: "Learning objects and assessments",
    desc: "Modules, simulations and assessments designed to change what people do at work.",
  },
  { num: "03", icon: "/images/icons/website.png", title: "Apps and websites", desc: "Built to order and shaped around how your team works." },
  {
    num: "04",
    icon: "/images/icons/gears.png",
    title: "Legacy troubleshooting",
    desc: "Broken courses, outdated platforms and leftover errors, diagnosed and fixed.",
  },
  {
    num: "05",
    icon: "/images/icons/people.png",
    title: "Staff training and handover",
    desc: "Your team learns to run and update it, so the solution is truly yours.",
  },
];

type Project = {
  no: string;
  title: string;
  tag: string;
  img: string;
  alt: string;
  pos: string;
  tilt: string;
  tapeTilt: string;
  challenge?: string;
  built: string;
  result: string;
};

const projects: Project[] = [
  {
    no: "01",
    title: "Consequence",
    tag: "Learning design · Branching video",
    img: "/images/work/consequence.jpg",
    alt: "Still from Consequence: a teenager picks up a dropped wallet",
    pos: "center 30%",
    tilt: "rotate-[0.5deg]",
    tapeTilt: "rotate-[4deg]",
    challenge: "Ethics lessons for young people often feel like lectures.",
    built: "Branching video scenarios with three decision points and six endings each, made for discussion, with no grading.",
    result: "Five episodes live, a sixth in production.",
  },
  {
    no: "02",
    title: "NZSL Live",
    tag: "Accessibility prototype · AI",
    img: "/images/work/nzsl-live.jpg",
    alt: "NZSL Live: two people signing in front of a misty New Zealand landscape",
    pos: "center 30%",
    tilt: "-rotate-[0.4deg]",
    tapeTilt: "-rotate-[2deg]",
    challenge: "NZSL interpreters are rarely available for everyday, unplanned conversations.",
    built:
      "A proof-of-concept web app and browser extension with live captions, hand tracking, an NZSL avatar for common words and te reo Māori word recognition.",
    result: "Demoed at the AI Hackathon Festival. Next step: Deaf-led review and licensed NZSL content.",
  },
  {
    no: "03",
    title: "SafeImage NZ",
    tag: "AI prototype · Child safety",
    img: "/images/work/safeimage.jpg",
    alt: "SafeImage NZ poster: hands holding a phone photographing four children from behind",
    pos: "center 62%",
    tilt: "-rotate-[0.5deg]",
    tapeTilt: "rotate-[3deg]",
    challenge: "Schools and NGOs share photos of children with little real safeguarding.",
    built:
      "A tool that checks a photo before it goes out: AI risk analysis, a 0 to 100 risk score, consent tracking, face blur and metadata stripping, all processed on the device.",
    result: "Built and demoed solo in two days at the AI Hackathon Festival.",
  },
  {
    no: "04",
    title: "The Great Kiwi Road Trip",
    tag: "Learning game · Tourism",
    img: "/images/work/road-trip.jpg",
    alt: "The Great Kiwi Road Trip banner: a campervan on a coastal road",
    pos: "center",
    tilt: "rotate-[0.6deg]",
    tapeTilt: "rotate-[3deg]",
    challenge:
      "Visitors arrive with little idea how far apart places are, how narrow the roads are, or what's expected of them on the land and on a marae.",
    built:
      "A four-leg driving game from Cape Reinga to Bluff, with one-lane bridges, fatigue, tikanga, Tiaki Promise guidance and more than 250 illustrated place cards.",
    result: "Complete and ready for a tourism or rental car company to offer its customers.",
  },
  {
    no: "05",
    title: "The Kiwi Corner Dairy",
    tag: "Learning game · Idle tycoon",
    img: "/images/work/kiwi-dairy.jpg",
    alt: "The Kiwi Corner Dairy: an illustrated corner shop with customers out front",
    pos: "center 40%",
    tilt: "-rotate-[0.6deg]",
    tapeTilt: "rotate-[3deg]",
    built:
      "An idle tycoon game set in a classic Kiwi corner dairy: serve customers, stock the shelves, hire staff and grow the shop.",
    result: "Playable in the browser.",
  },
];

const courses = [
  {
    meta: "About 90 minutes · Self-paced",
    title: "SAGE: Future Proof your Career",
    desc: "A practical, tool-neutral framework for using AI in education and learning work. It works with whatever AI tools your organisation has approved.",
    note: "+ free 15-minute SAGE starter",
    href: "https://learn.cbils.dev/courses/sage",
  },
  {
    meta: "About 60 minutes · Self-paced",
    title: "PACE: Managing your workload with AI",
    desc: "A practical module on using AI to manage your priorities, workload and focus.",
    note: "+ free tasters: PACE Starter (15 min) and PACE: Everyday matters (20 min)",
    href: "https://learn.cbils.dev/courses/pace",
  },
  {
    meta: "Self-paced · Scenario-based",
    title: "Youth Ethics",
    desc: "Scenario-based learning about ethical choices, built for classrooms and youth programmes.",
    note: "pairs with Consequence ↑",
    href: "https://learn.cbils.dev/courses/youth-ethics",
  },
];

const framework = [
  {
    n: "1",
    icon: "/images/icons/target.png",
    title: "Decide",
    text: "The manager and staff member agree what should change at work, and how you will know.",
    extra: true,
  },
  {
    n: "2",
    icon: "/images/icons/layers.png",
    title: "Learn",
    text: "The staff member attends knowing they will pass it on, so they listen as a future teacher.",
  },
  {
    n: "3",
    icon: "/images/icons/chat.png",
    title: "Share",
    text: "Their notes become a short transfer pack, so the whole team gets the learning.",
  },
  {
    n: "4",
    icon: "/images/icons/award.png",
    title: "Check",
    text: "Follow-ups at set points show what is being used, what is in the way and whether the goal was met.",
    last: true,
  },
];

const steps = [
  {
    n: "01",
    title: "Consult",
    icon: "/images/icons/chat.png",
    note: "A conversation to understand what you need.",
    radius: "52% 48% 50% 50% / 48% 52% 48% 52%",
  },
  {
    n: "02",
    title: "Choose the tools",
    icon: "/images/icons/signpost.png",
    note: "The right mix from the shed for your project.",
    radius: "48% 52% 49% 51% / 52% 48% 52% 48%",
  },
  {
    n: "03",
    title: "Build",
    icon: "/images/icons/box.png",
    note: "Made to order and tested with real users.",
    radius: "50% 50% 47% 53% / 49% 51% 49% 51%",
    teal: true,
  },
  {
    n: "04",
    title: "Hand over",
    icon: "/images/icons/handshake.png",
    note: "Training so your staff own it from day one.",
    radius: "51% 49% 52% 48% / 50% 50% 50% 50%",
    last: true,
  },
];

export default function Home() {
  return (
    <div className="bg-notebook relative overflow-hidden pb-2">
      {/* Spiral binding down the left edge */}
      <svg aria-hidden="true" width="30" height="780" className={`absolute top-3.5 left-0 ${HIDE_SM}`}>
        <defs>
          <pattern id="nb-coil" width="30" height="26" patternUnits="userSpaceOnUse">
            <circle cx="22" cy="13" r="3.2" fill="#D9D3C3" />
            <path d="M22 13 C 10 13, 2 9, 3 4" fill="none" stroke="#6B7378" strokeWidth="2.2" strokeLinecap="round" />
          </pattern>
        </defs>
        <rect width="30" height="780" fill="url(#nb-coil)" />
      </svg>

      {/* HEADER */}
      <header className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 border-b border-[#D6D1C3] px-4 py-3.5 md:px-8 md:py-[22px]">
        <div className="flex items-center gap-[22px]">
          <a href="#top" aria-label="Shed30 home" className="flex">
            <img src="/images/shed30-logo.svg" alt="Shed30" className="h-9 w-auto" />
          </a>
          <div
            className={`flex items-center gap-1.5 border-l border-[#CFC9B9] pl-5 font-hand text-xl leading-[1.05] text-muted ${HIDE_SM}`}
          >
            <span>
              Learning by design
              <br />
              Built to order
            </span>
            <svg aria-hidden="true" width="34" height="20" viewBox="0 0 34 20" fill="none" stroke="#50575C" strokeWidth="1.4" strokeLinecap="round">
              <path d="M2 14 C 10 18, 22 16, 30 6" />
              <path d="M24 6 L30 6 L29 12" />
            </svg>
          </div>
        </div>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-x-4 gap-y-2.5 text-[15px] font-semibold md:gap-[26px] md:text-base">
          {[
            ["#make", "What I make"],
            ["#work", "Workbench"],
            ["#shed", "The toolshed"],
            ["#courses", "Courses"],
            ["#how", "How I work"],
            ["#about", "About"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-navy no-underline hover:text-teal-dark">
              {label}
            </a>
          ))}
          <a href="#contact" className="rounded-md bg-navy px-[18px] py-2.5 text-cream no-underline hover:text-cream">
            Start a conversation →
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="top" className={`${SEC} relative flex flex-wrap items-center gap-14 pt-16 pb-[72px]`}>
          <img
            src="/images/props/pencil.png"
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute -right-[110px] -bottom-5 z-[2] w-[260px] rotate-12 ${HIDE_SM}`}
          />
          <div className="min-w-0 flex-[1_1_440px]">
            <p className="m-0 mb-5 font-display text-[13px] font-bold tracking-[0.1em] text-teal-dark uppercase">
              Learning design · Apps and websites · Handover
            </p>
            <h1 className="m-0 mb-2 text-[40px] leading-[1.08] font-extrabold tracking-[-0.01em] text-navy md:text-[60px] md:leading-[1.06]">
              Thirty years of craft. <span className="text-teal-dark">A shed full of tools.</span>
            </h1>
            <PencilUnderline width={240} className="mb-6 ml-0.5" />
            <p className="m-0 mb-3.5 max-w-[540px] text-xl">
              I build learning solutions, apps and websites to order, once we&apos;ve talked about what you actually
              need. Then I make sure your team can own it.
            </p>
            <p className="m-0 mb-8 max-w-[540px] text-[17px] text-muted">
              From needs analysis to assessment, from legacy fixes to new builds.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-md bg-navy px-6 py-[15px] font-display text-base font-bold text-cream no-underline hover:text-cream"
              >
                Tell me what you need →
              </a>
              <a
                href="#work"
                className="rounded-md border-[1.5px] border-teal px-[22px] py-[13px] font-display text-base font-bold no-underline"
              >
                See the workbench
              </a>
            </div>
          </div>

          <figure className="sheet grid-paper relative m-0 min-w-0 flex-[1_1_500px] rotate-[0.6deg] border-b-0 px-[18px] pt-[52px] pb-6 md:px-11 md:pt-16 md:pb-9">
            <TornEdge />
            <Tape className="top-[-13px] left-[38px] w-[104px] -rotate-[4deg]" />
            <Tape className="top-[-11px] right-11 w-[84px] rotate-[5deg]" />
            <p className="absolute top-[22px] left-11 m-0 -rotate-2 font-hand text-[21px] text-muted">
              Fig. 01: shed30 identity
            </p>
            <p className={`absolute top-5 right-12 m-0 -rotate-3 font-hand text-[21px] text-muted ${HIDE_SM}`}>
              concept development ↘
            </p>
            <img
              src="/images/shed30-sketch.svg"
              alt="Shed30 logo drawn as a working sketch, with the 30 still being inked in"
              className="mt-3 block h-auto w-full"
            />
            <figcaption className="mt-6 flex flex-wrap items-end justify-between gap-5">
              <ul className="m-0 list-none p-0 font-hand text-[22px] leading-tight text-ink">
                {[
                  ["Concept", true],
                  ["Design", true],
                  ["Build", false],
                  ["Handover", false],
                ].map(([label, done]) => (
                  <li key={String(label)} className="flex items-center gap-2.5">
                    <CheckBox ticked={Boolean(done)} />
                    {label}
                  </li>
                ))}
              </ul>
              <span className="inline-block -rotate-6 rounded-[50%] border-2 border-teal px-[26px] py-1.5 font-hand text-[28px] font-semibold text-teal-dark">
                Made to order.
              </span>
            </figcaption>
          </figure>
        </section>

        {/* QUICK LINKS */}
        <nav aria-label="Jump to" className={`${SEC} -mt-6 pb-16`}>
          <ul className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-6 p-0 md:grid-cols-4 md:gap-x-6">
            {quickLinks.map((q) => (
              <li key={q.href}>
                <a
                  href={q.href}
                  className={`card-shadow group relative flex h-full flex-col gap-1 border border-rule bg-paper px-4 pt-6 pb-4 no-underline transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:rotate-0 md:px-5 ${q.tilt}`}
                >
                  <Tape className={`-top-3 left-1/2 -ml-8 h-5 w-16 ${q.tape}`} />
                  <span className="font-hand text-[19px] leading-none text-pencil">No. {q.n}</span>
                  <span className="font-display text-lg leading-tight font-extrabold text-navy md:text-xl">{q.title}</span>
                  <span className="text-[15px] leading-snug text-muted">{q.note}</span>
                  <span aria-hidden="true" className="mt-auto pt-2 font-display text-lg font-bold text-teal transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* SERVICES */}
        <section id="make" className={`${SEC} pt-6 pb-[72px]`}>
          <div className="sheet flex flex-wrap gap-7 border-b-0 px-5 pt-10 pb-[30px] md:gap-12 md:px-12 md:py-14">
            <Pin className="-top-3.5 left-[22px]" />
            <TornEdge />
            <Tape className="-top-3 right-[120px] w-24 rotate-3" />
            <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-3.5">
              <SectionLabel>01 / Services</SectionLabel>
              <h2 className={H2}>
                What I make,{" "}
                <span className="relative whitespace-nowrap">
                  mend
                  <svg
                    aria-hidden="true"
                    width="100%"
                    height="10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    fill="none"
                    stroke="#138A87"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    className="absolute left-0 -bottom-1.5"
                  >
                    <path d="M2 7 C 30 2, 70 3, 98 6" />
                  </svg>
                </span>{" "}
                and hand over.
              </h2>
              <div className={`mt-5 flex items-end gap-5 ${HIDE_SM}`}>
                <svg aria-hidden="true" width="150" height="110" viewBox="0 0 150 110" fill="none" stroke="#8C9399" strokeWidth="1.3" strokeLinecap="round" className="sketch-lg">
                  <rect x="6" y="10" width="110" height="78" rx="3" />
                  <path d="M6 24 H116" />
                  <circle cx="14" cy="17" r="2" />
                  <circle cx="22" cy="17" r="2" />
                  <rect x="16" y="34" width="40" height="30" />
                  <path d="M16 64 L30 48 L40 58 L48 50 L56 64" />
                  <path d="M66 36 H104 M66 46 H98 M66 56 H104 M16 74 H90" />
                  <rect x="96" y="58" width="48" height="44" rx="3" stroke="#193B55" />
                  <path d="M104 70 H136 M104 80 H128 M104 90 H132" stroke="#193B55" />
                </svg>
                <ul className="m-0 list-none p-0 font-hand text-[21px] leading-tight text-muted">
                  <li>
                    Analyse <span className="text-teal">✓</span>
                  </li>
                  <li>
                    Design <span className="text-teal">✓</span>
                  </li>
                  <li>
                    Build <span className="text-teal">✓</span>
                  </li>
                  <li>Handover ☐</li>
                </ul>
              </div>
            </div>
            <ol className="m-0 flex min-w-0 flex-[2_1_560px] list-none flex-col p-0">
              {services.map((s, i) => (
                <li
                  key={s.num}
                  className={`grid grid-cols-[38px_minmax(0,1fr)] items-start gap-x-3 gap-y-1 py-4 md:grid-cols-[56px_52px_minmax(0,1fr)_minmax(0,1.3fr)] md:items-center md:gap-[18px] md:py-5 ${
                    i < services.length - 1 ? "border-b border-dashed border-dash" : ""
                  }`}
                >
                  <span className="font-display text-[22px] leading-[1.3] font-medium text-teal md:text-[30px]">{s.num}</span>
                  <img src={s.icon} alt="" aria-hidden="true" className="hidden h-12 w-12 object-contain md:block" />
                  <h3 className="m-0 text-lg leading-[1.3] text-navy md:text-xl">{s.title}</h3>
                  <p className="col-start-2 m-0 text-base leading-normal md:col-start-auto">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WORKBENCH */}
        <section id="work" className={`${SEC} pt-6 pb-20`}>
          <div className="sheet -rotate-[0.25deg] px-5 pt-10 pb-[30px] md:px-11 md:pt-[52px] md:pb-11">
            <Pin className="-top-3.5 right-7" />
            <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="mb-3">
                  <SectionLabel>02 / Selected work</SectionLabel>
                </div>
                <h2 className={H2}>From the workbench.</h2>
              </div>
              <HandNote className="max-w-[420px] -rotate-2 text-[25px] leading-[1.2]">
                A few problems I&apos;ve worked on. Every one started with a conversation. <span className="text-teal">↓</span>
              </HandNote>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-6 gap-y-8">
              {projects.map((p) => (
                <article
                  key={p.no}
                  className={`card-shadow relative flex flex-col gap-2.5 border border-rule bg-white px-5 pt-[26px] pb-6 ${p.tilt}`}
                >
                  <Tape className={`-top-3 left-1/2 -ml-[43px] h-6 w-[86px] ${p.tapeTilt}`} />
                  <div aria-hidden="true" className="px-1.5">
                    <div className="rounded-t-lg bg-[#26343D] px-[7px] pt-[7px] pb-[9px]">
                      <img
                        src={p.img}
                        alt={p.alt}
                        className="block h-[132px] w-full object-cover"
                        style={{ objectPosition: p.pos }}
                      />
                    </div>
                    <div className="-mx-2.5 h-[9px] rounded-b-lg bg-[#C5CBD0]" />
                  </div>
                  <p className="m-0 mt-1.5 font-hand text-[19px] text-pencil">No. {p.no}</p>
                  <h3 className="m-0 -mt-1 text-[19px] leading-tight text-navy">{p.title}</h3>
                  <p className="m-0 font-mono text-[13px] text-teal-dark">{p.tag}</p>
                  {p.challenge && (
                    <p className="m-0 text-[15px] leading-normal">
                      <strong>Challenge:</strong> {p.challenge}
                    </p>
                  )}
                  <p className="m-0 text-[15px] leading-normal">
                    <strong>Built:</strong> {p.built}
                  </p>
                  <p className="m-0 text-[15px] leading-normal">
                    <strong>Result:</strong> {p.result}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-end justify-between gap-6">
              <a
                href="https://www.cbils.dev/portfolio"
                className="inline-block -rotate-[4deg] rounded-[50%] border-2 border-teal px-7 py-1.5 font-hand text-[27px] font-semibold no-underline"
              >
                See all 14 projects →
              </a>
              <svg
                aria-hidden="true"
                width="560"
                height="96"
                viewBox="0 0 560 96"
                fill="none"
                stroke="#8C9399"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`sketch-lg max-w-full ${HIDE_SM}`}
              >
                <path d="M0 90 H560" stroke="#B5B9BC" />
                <path d="M0 88 C 40 70, 70 62, 110 72 C 150 82, 170 56, 215 52 C 255 48, 280 74, 320 70 C 350 67, 370 58, 400 66" />
                <path d="M60 89 C 100 80, 140 78, 180 84 M240 88 C 280 76, 320 79, 360 86" stroke="#B5B9BC" />
                <path d="M150 70 l2 -6 M160 66 l2 -7 M174 60 l1 -6 M268 66 l2 -6 M282 70 l1 -6" stroke="#B5B9BC" />
                <path d="M430 89 V46 L475 18 L520 46 V89" />
                <path d="M420 52 L475 14 L530 52" />
                <path d="M454 89 V60 H486 V89 M454 60 L486 89 M486 60 L454 89" />
                <path d="M440 50 V40 M440 40 h8 v6" />
                <rect x="498" y="58" width="14" height="12" />
                <path d="M505 58 V70 M498 64 H512" />
                <path d="M434 70 h6 M434 78 h8 M514 76 h6 M512 84 h8" stroke="#B5B9BC" />
                <path d="M540 89 c 2 -10, 6 -14, 4 -22 M546 89 c 1 -8, 6 -12, 8 -18 M536 89 c -3 -6, -6 -9, -10 -12" />
              </svg>
            </div>
          </div>
        </section>

        {/* TOOLSHED */}
        <ToolShed />

        {/* DESIGN STUDIO */}
        <section id="studio" className={`${SEC} pb-20`}>
          <div className="sheet grid-paper relative flex flex-wrap gap-10 px-5 pt-10 pb-[30px] md:gap-14 md:px-12 md:py-14">
            <Tape className="-top-3 left-16 w-24 -rotate-3" />
            <Tape className="-top-3 right-20 w-20 rotate-[4deg]" />
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-3.5">
              <SectionLabel>Inside the toolshed / Being built</SectionLabel>
              <h2 className={H2}>Learning Design Studio.</h2>
              <PencilUnderline width={210} />
              <p className="m-0 max-w-[560px]">
                The tool I use to design learning, built so other learning designers can use it too. It takes a project
                from the first request to a plan you can hand over, and it asks the hard questions on the way, starting
                with whether training is the answer at all.
              </p>
              <ul className="m-0 mt-2 grid list-none grid-cols-1 gap-x-6 gap-y-1.5 p-0 font-hand text-[21px] leading-tight text-ink sm:grid-cols-2">
                {studioFeatures.map(([label, done]) => (
                  <li key={label} className={`flex items-start gap-2.5 ${done ? "" : "text-muted"}`}>
                    <span className="mt-0.5 shrink-0">
                      <CheckBox ticked={done} />
                    </span>
                    <span>
                      {label}
                      {!done && <span className="sr-only"> (coming later)</span>}
                    </span>
                  </li>
                ))}
              </ul>
              <HandNote className="mt-2 -rotate-1 text-[22px] leading-[1.2]">
                Ticked parts are built and being tested. The rest is on the bench.
              </HandNote>
            </div>
            <div className="relative flex min-w-0 flex-[1_1_340px] flex-col">
              <span className="absolute -top-5 right-2 z-[1] inline-block rotate-6 rounded-[50%] border-2 border-teal bg-paper px-5 py-1 font-hand text-[24px] font-semibold text-teal-dark">
                In development
              </span>
              <div className="card-shadow border border-rule bg-white px-6 pt-8 pb-6">
                <h3 className="m-0 text-[22px] leading-tight text-navy">Want early access?</h3>
                <p className="m-0 mt-2 text-base text-muted">
                  Leave your email and I&apos;ll let you know when the Design Studio opens.
                </p>
                <StudioWaitlist />
              </div>
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section id="courses" className={`${SEC} pb-20`}>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3">
                <SectionLabel>04 / Ready-made courses</SectionLabel>
              </div>
              <h2 className={H2}>Off the shelf, ready to use.</h2>
            </div>
            <p className="m-0 max-w-[460px]">
              Some problems are common enough to have a ready-made answer. These self-paced courses are available now
              for individuals and teams.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-7">
            {courses.map((c) => (
              <article
                key={c.title}
                className="sheet lined-paper flex flex-col gap-2.5 border-l-[3px] border-l-[#E2A99A] [border-left-style:double] px-7 pt-7 pb-[26px]"
              >
                <p className="m-0 font-mono text-[13px] text-teal-dark">{c.meta}</p>
                <h3 className="m-0 text-[22px] leading-tight text-navy">{c.title}</h3>
                <p className="m-0 flex-1 text-base">{c.desc}</p>
                <p className="m-0 font-hand text-[21px] leading-[1.2] text-teal-dark">{c.note}</p>
                <a href={c.href} className="font-display text-base font-bold">
                  View course →
                </a>
              </article>
            ))}
          </div>
          <p className="mt-7 mb-0">
            <a href="https://learn.cbils.dev" className="font-display font-bold">
              Browse all courses →
            </a>
          </p>
        </section>

        {/* FRAMEWORK */}
        <section id="framework" className={`${SEC} pb-20`}>
          <div className="sheet grid-paper flex flex-col gap-7 px-5 pt-10 pb-[30px] md:gap-8 md:px-12 md:py-[52px]">
            <Tape className="-top-3 left-16 w-24 -rotate-3" />
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-3">
                <SectionLabel>05 / The framework</SectionLabel>
                <h2 className={`${H2} md:text-[38px]`}>Decide. Learn. Share. Check.</h2>
                <p className="m-0 max-w-[620px]">
                  Every piece of learning I design starts and ends in the workplace. This cycle keeps the focus on what
                  people do differently afterwards, not on whether a course was completed.
                </p>
              </div>
              <HandNote className={`max-w-[260px] -rotate-2 text-[23px] leading-[1.15] ${HIDE_SM}`}>
                Transfer of learning, built in from the first conversation. ↓
              </HandNote>
            </div>
            <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-9 gap-y-6 p-0">
              {framework.map((f) => (
                <li
                  key={f.n}
                  className={`relative flex flex-col gap-2 rounded-[10px] bg-white px-[18px] pt-[22px] pb-5 ${
                    f.last ? "border-2 border-navy" : "border-[1.5px] border-dashed border-pencil"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img src={f.icon} alt="" aria-hidden="true" className="h-[46px] w-[46px] object-contain" />
                    <span className="font-display text-[28px] leading-none font-extrabold text-teal">{f.n}</span>
                  </div>
                  <h3 className="m-0 text-[21px] text-navy">{f.title}</h3>
                  <p className="m-0 text-base leading-normal">{f.text}</p>
                  {f.extra && (
                    <p className="m-0 mt-1 rounded-md bg-teal-wash px-3 py-2.5 text-[15px] leading-[1.45] text-teal-deeper">
                      <strong>Is training the right fix?</strong> If not, a job aid, mentoring or a process change may
                      work better.
                    </p>
                  )}
                  {!f.last && <SketchArrow className={`absolute top-[58px] -right-[27px] ${HIDE_SM}`} />}
                </li>
              ))}
            </ol>
            <p className="m-0 font-hand text-[23px] text-teal-dark">
              What the check shows feeds the next decision.{" "}
              <a href="#shed" className="ml-2 font-display text-base font-bold">
                See the transfer of learning tool →
              </a>
            </p>
          </div>
        </section>

        {/* HOW I WORK */}
        <section id="how" className={`${SEC} pb-20`}>
          <div className="sheet flex flex-wrap items-center gap-10 px-5 pt-10 pb-[30px] md:px-12 md:py-14">
            <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-3">
              <SectionLabel>06 / How I work</SectionLabel>
              <h2 className={`${H2} md:text-[38px]`}>Four steps, start to handover.</h2>
              <PencilUnderline width={190} />
              <HandNote className={`mt-1 -rotate-2 text-[23px] leading-[1.15] ${HIDE_SM}`}>
                A practical, collaborative process. →
              </HandNote>
            </div>
            <ol className="m-0 grid min-w-0 flex-[3_1_640px] list-none grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-[30px] gap-y-6 p-0">
              {steps.map((s) => {
                const ring = s.last ? "border-[2.5px] border-navy bg-white" : s.teal ? "border-2 border-teal" : "border-2 border-pencil";
                const numColour = s.last ? "text-navy" : s.teal ? "text-teal" : "text-pencil";
                return (
                  <li key={s.n} className="relative flex flex-col items-center gap-3 text-center">
                    <div
                      className={`box-border flex h-[152px] w-[152px] flex-col items-center justify-center gap-1 ${ring}`}
                      style={{ borderRadius: s.radius }}
                    >
                      <span className={`font-display text-[28px] leading-none font-extrabold ${numColour}`}>{s.n}</span>
                      <h3 className="m-0 text-[17px] leading-[1.15] text-navy">{s.title}</h3>
                      <img src={s.icon} alt="" aria-hidden="true" className="block h-[54px] w-[54px] object-contain" />
                    </div>
                    <p className="m-0 max-w-[190px] font-hand text-[21px] leading-[1.15] text-ink">{s.note}</p>
                    {!s.last && <SketchArrow className={`absolute top-[68px] -right-[30px] ${HIDE_SM}`} />}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className={`${SEC} pb-20`}>
          <div className="sheet flex rotate-[0.2deg] flex-wrap items-center gap-12 px-5 pt-10 pb-[30px] md:px-12 md:py-14">
            <Pin className="-top-3.5 left-1/2" />
            <div className="flex min-w-0 flex-[1_1_380px] flex-col items-center">
              <figure className="relative m-0 box-border w-[min(340px,86%)] -rotate-2 bg-white px-3 pt-3 pb-3.5 shadow-[0_1px_1px_rgba(70,55,30,0.14),0_8px_18px_rgba(70,55,30,0.18)]">
                <Tape className="-top-3 left-1/2 -ml-10 h-6 w-20 rotate-[4deg]" />
                <img
                  src="/images/about/cheryl.jpg"
                  alt="Cheryl Tyler smiling outdoors, mountains behind her"
                  className="block aspect-square h-auto w-full object-cover"
                />
                <figcaption className="mt-2 text-center font-hand text-xl leading-[1.15] text-ink">
                  Cheryl, maker of things
                </figcaption>
              </figure>
              <div className="mt-1 flex w-full justify-center gap-[18px]">
                <figure className="relative z-[2] m-0 box-border w-[min(200px,46%)] rotate-[4deg] bg-white px-3 pt-3 pb-3.5 shadow-[0_1px_1px_rgba(70,55,30,0.14),0_8px_18px_rgba(70,55,30,0.18)]">
                  <Tape className="-top-3 left-1/2 -ml-10 h-6 w-20 -rotate-[8deg]" />
                  <img
                    src="/images/about/timor-leste.jpg"
                    alt="Cheryl in a Lafaek cap and CARE vest in the mangroves"
                    className="block aspect-square h-auto w-full object-cover"
                  />
                  <figcaption className="mt-2 text-center font-hand text-xl leading-[1.15] text-ink">
                    Out in the field, Timor-Leste
                  </figcaption>
                </figure>
                <figure className="relative z-[2] m-0 mt-6 box-border w-[min(200px,46%)] -rotate-3 bg-white px-3 pt-3 pb-3.5 shadow-[0_1px_1px_rgba(70,55,30,0.14),0_8px_18px_rgba(70,55,30,0.18)]">
                  <Tape className="-top-3 left-1/2 -ml-10 h-6 w-20 rotate-6" />
                  <img
                    src="/images/about/lafaek-farewell.jpg"
                    alt="Cheryl with the Lafaek team, holding a hand-painted tais banner and copies of The Village of a Thousand Stories"
                    className="block aspect-square h-auto w-full object-cover"
                  />
                  <figcaption className="mt-2 text-center font-hand text-xl leading-[1.15] text-ink">
                    Farewell from the Lafaek team
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="flex min-w-0 flex-[1.2_1_420px] flex-col gap-4">
              <SectionLabel>07 / About the maker</SectionLabel>
              <h2 className={H2}>Kia ora, I&apos;m Cheryl.</h2>
              <p className="m-0">
                I&apos;ve spent almost thirty years designing learning in New Zealand and overseas: 13 years with the New
                Zealand Defence Force, 6 with UCOL and 4 with Careerforce, then contracting and volunteering.
              </p>
              <p className="m-0">
                My most meaningful chapter was volunteering with Lafaek Learning Media in Timor-Leste for two years:
                content, technology, training and helping build a production team. These days I design the learning
                and build the tools myself, then make sure the people I work with can carry on without me.
              </p>
              <p className="m-0">
                I&apos;m a creative generalist and a doer of many things. Shed30 is where all those tools finally hang
                on one wall.
              </p>
              <blockquote className="relative mx-0 mt-3 mb-0 -rotate-[0.8deg] border-l-[3px] border-teal bg-[rgba(227,241,240,0.6)] py-[18px] pr-[22px] pb-4 pl-[26px]">
                <p className="m-0 font-hand text-[27px] leading-[1.2] text-navy">
                  &ldquo;I came to Timor-Leste thinking I&apos;d be here to teach, mentor and support others. Looking
                  back, I was the one who learnt the most.&rdquo;
                </p>
                <p className="m-0 mt-2 font-mono text-[13px] text-teal-dark">From my year as a volunteer</p>
              </blockquote>
              <HandNote className={`mt-1.5 -rotate-[1.5deg] text-[22px] leading-[1.2] ${HIDE_SM}`}>
                A Kiwi shed, number 8 wire thinking: make it work with what you&apos;ve got. ↗
              </HandNote>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${SEC} pb-[72px]`}>
          <div className="sheet relative flex flex-wrap items-center gap-7 pt-10 pr-[18px] pb-8 pl-11 md:gap-12 md:py-14 md:pr-12 md:pl-[84px]">
            <div aria-hidden="true" className="absolute top-7 bottom-7 left-3 flex flex-col justify-between md:left-[26px]">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="h-4 w-4 rounded-full bg-[#E6E1D3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" />
              ))}
            </div>
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
              <h2 className={`${H2} md:text-[42px]`}>Every project starts with a conversation.</h2>
              <p className="m-0 text-[17px] md:text-lg">
                Tell me what you&apos;re trying to fix or build. No brief needed, just the problem as you see it.
              </p>
              <p className="m-0 origin-left -rotate-3 font-hand text-[32px] leading-none text-teal-dark">Talk soon, Cheryl</p>
              <p className="m-0 mt-1 text-[17px]">
                <a href="mailto:cheryl@shed30.com">cheryl@shed30.com</a>
              </p>
              <div className={`mt-2.5 flex items-center gap-[18px] ${HIDE_SM}`}>
                <svg aria-hidden="true" width="130" height="92" viewBox="0 0 130 92" fill="none" stroke="#8C9399" strokeWidth="1.3" strokeLinecap="round" className="sketch-lg">
                  <rect x="14" y="6" width="102" height="64" rx="4" />
                  <rect x="22" y="14" width="86" height="48" />
                  <path d="M4 78 H126 L118 86 H12 Z" />
                  <rect x="30" y="22" width="30" height="22" />
                  <path d="M30 44 L40 33 L48 40 L54 35 L60 44 M68 24 H100 M68 32 H94 M68 40 H100 M30 52 H90" />
                </svg>
                <ul className="m-0 list-none p-0 font-hand text-[21px] leading-tight text-muted">
                  {["Brief", "Idea", "Options", "Next steps"].map((t) => (
                    <li key={t}>
                      <span className="text-teal">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative min-w-0 flex-[1_1_420px]">
              <span
                className={`absolute -top-10 -right-2 -rotate-[8deg] rounded-[50%] border-[1.6px] border-teal bg-paper px-[22px] py-3 text-center font-hand text-2xl leading-[1.05] text-teal-dark ${HIDE_SM}`}
              >
                First sketches
                <br />
                start here.
              </span>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 border-t border-[#D6D1C3] px-4 pt-7 pb-9 text-[15px] text-muted md:px-8">
        <img src="/images/shed30-logo.svg" alt="Shed30" className="h-8 w-auto" />
        <span className="font-hand text-[23px] text-ink">Made to order. Yours to own.</span>
        <svg aria-hidden="true" width="180" height="22" viewBox="0 0 180 22" fill="none" stroke="#8C9399" strokeWidth="1" className={HIDE_SM}>
          <rect x="0.5" y="0.5" width="179" height="21" rx="2" fill="#EFE6CF" />
          <path d="M10 1v8M20 1v5M30 1v5M40 1v5M50 1v8M60 1v5M70 1v5M80 1v5M90 1v8M100 1v5M110 1v5M120 1v5M130 1v8M140 1v5M150 1v5M160 1v5M170 1v8" />
        </svg>
        <span>© 2026 Shed30 · Aotearoa New Zealand</span>
      </footer>
    </div>
  );
}
