"use client";

import { useEffect, useRef, useState } from "react";
import { PencilUnderline, SectionLabel, Tape } from "./Decor";

type Tool = {
  key: string;
  num: string;
  label: string;
  title: string;
  icon: string;
  what: string;
  ld: string;
  app: string;
  tools: string[];
  highlight?: boolean;
};

const TOOLS: Tool[] = [
  {
    key: "needs",
    num: "01",
    label: "Needs analysis",
    title: "Needs analysis",
    icon: "/images/icons/needs.png",
    what: "Finding the real problem before anyone picks a solution.",
    ld: "I look at what people need to do differently, what is stopping them and whether training is the answer. Often a job aid, mentoring, a process fix or a manager conversation works better.",
    app: "Before any build, I map who will use the tool, what they do now and where time is lost, so the app fixes the actual pain point.",
    tools: ["Stakeholder interviews", "Surveys", "Observation", "Task analysis", "Performance data review", "Transfer of learning goal setting"],
  },
  {
    key: "instructional",
    num: "02",
    label: "Instructional design",
    title: "Instructional design",
    icon: "/images/icons/compass.png",
    what: "Shaping content so people can use it at work.",
    ld: "Clear outcomes, practice that looks like the job, and scenarios built on real decisions. Content is cut back to what people need to act.",
    app: "The same thinking shapes onboarding screens, help text and in-app guidance, so people learn the tool by using it.",
    tools: ["Outcomes mapping", "Scenario-based learning", "Storyboards", "Blended programme design", "Low-bandwidth design"],
  },
  {
    key: "authoring",
    num: "03",
    label: "Authoring tools",
    title: "Authoring tools",
    icon: "/images/icons/authoring.png",
    what: "Building interactive modules people can work through on their own.",
    ld: "Self-paced modules, simulations and branching scenarios that run in an LMS or on the web, built so your team can update them later.",
    app: "When an authoring tool reaches its limits, I build the interaction as custom web code instead.",
    tools: ["Articulate", "PowerPoint", "Canva", "Custom web interactions"],
  },
  {
    key: "lms",
    num: "04",
    label: "LMS platforms",
    title: "LMS platforms",
    icon: "/images/icons/lms.png",
    what: "The system that delivers, tracks and reports on learning.",
    ld: "Course set-up, enrolments, completion tracking and reporting, plus fixing courses that break when platforms change.",
    app: "Where an LMS is too heavy, a lightweight learning hub can do the job, like the micro-learning platform built for Lafaek.",
    tools: ["Moodle", "LMS administration", "Course migration", "Completion reporting", "Custom learning hubs"],
  },
  {
    key: "assessment",
    num: "05",
    label: "Assessment design",
    title: "Assessment design",
    icon: "/images/icons/assessment.png",
    what: "Checking that people can do the job, not just recall facts.",
    ld: "Assessments matched to the outcomes: scenario questions, practical tasks and workplace observation, with clear marking guides.",
    app: "Knowledge checks and feedback built into apps and learning tools, so progress is visible without extra admin.",
    tools: ["Scenario questions", "Practical tasks", "Observation checklists", "Marking rubrics", "Online quizzes"],
  },
  {
    key: "webapp",
    num: "06",
    label: "Web and app builds",
    title: "Web and app builds",
    icon: "/images/icons/code.png",
    what: "Custom tools built around how your team works.",
    ld: "Learning hubs, interactive resources, games and booking or tracking tools that sit alongside your training.",
    app: "Fast, modern web apps with simple admin screens, so your staff can run and update them after handover.",
    tools: ["Next.js", "React", "Tailwind CSS", "AWS and DynamoDB", "Vercel", "Claude API"],
  },
  {
    key: "video",
    num: "07",
    label: "Video and media",
    title: "Video and media",
    icon: "/images/icons/video.png",
    what: "Showing what good looks like, and what happens when it goes wrong.",
    ld: "Scenario filming, explainer videos and branching video, where each choice plays out, like the Consequence ethics lab.",
    app: "Short walkthrough videos and visual guides that show staff how to use a new tool.",
    tools: ["Script development", "Scenario filming", "Branching video", "Explainer videos", "Optimised media for low bandwidth"],
  },
  {
    key: "facilitation",
    num: "08",
    label: "Facilitation",
    title: "Facilitation",
    icon: "/images/icons/facilitation.png",
    what: "Running sessions where people practise, discuss and leave ready to act.",
    ld: "Workshops, train-the-trainer sessions and live online sessions, with facilitator guides so your own people can run them next time.",
    app: "Handover training at the end of every build, so your team owns the tool.",
    tools: ["Workshops", "Train-the-trainer", "Live online sessions", "Facilitator guides", "Handover training"],
  },
  {
    key: "transfer",
    num: "09",
    label: "Transfer of learning",
    title: "Transfer of learning",
    icon: "/images/icons/transfer.png",
    what: "Making sure training changes what people do back at work.",
    ld: "Before training, the manager and staff member agree what should change and check that training is the right fix. Afterwards, follow-ups show what is being used and what is getting in the way.",
    app: "A tool in development runs this cycle for you: goals set before training, check-ins after, and AI that turns training notes into a transfer pack for the team.",
    tools: ["Manager goal setting", "Is training the right fix?", "Follow-up check-ins", "Barrier tracking", "Transfer packs", "Kirkpatrick levels 3 and 4"],
  },
  {
    key: "ai",
    num: "10",
    label: "AI",
    title: "AI, one tool among many",
    icon: "/images/icons/ai.png",
    highlight: true,
    what: "Never used on its own. Every AI output is checked by a person for human intent and purpose.",
    ld: "AI-assisted drafting, feedback and adaptive pathways, each reviewed before it reaches a learner. I also help your staff use the AI tools your organisation has approved, as in the SAGE and PACE courses.",
    app: "AI features inside apps only where they earn their place, like turning rough training notes into a summary for the team, with a person checking the result before it is shared.",
    tools: ["Human review of every output", "Claude", "AI-assisted drafting", "Adaptive feedback", "Workflow automation", "Tool-neutral AI training"],
  },
];

export default function ToolShed() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const tool = TOOLS.find((t) => t.key === openKey) ?? null;

  useEffect(() => {
    if (!tool) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [tool]);

  function open(key: string, el: HTMLButtonElement) {
    lastTrigger.current = el;
    setOpenKey(key);
  }

  function close() {
    setOpenKey(null);
    lastTrigger.current?.focus();
  }

  return (
    <section id="shed" className="relative mx-auto max-w-[1200px] px-3.5 pb-20 md:px-8">
      <img
        src="/images/props/ruler.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-[250px] top-10 z-[2] hidden w-[380px] -rotate-[69deg] min-[821px]:block"
      />
      <img
        src="/images/props/leaves.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-[70px] -top-[58px] z-[2] hidden w-[160px] rotate-[18deg] min-[821px]:block"
      />

      <div className="pegboard flex flex-wrap items-center gap-7 rounded-[10px] px-[18px] py-9 text-[#E9EEF1] shadow-[0_14px_32px_rgba(25,59,85,0.18)] md:gap-11 md:px-12 md:py-14">
        <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-3.5">
          <SectionLabel light>03 / Inside the toolshed</SectionLabel>
          <h2 className="m-0 text-[29px] leading-[1.15] font-extrabold text-cream md:text-[40px] md:leading-[1.1]">
            Every tool has its hook.
          </h2>
          <PencilUnderline width={200} color="#4FC1BC" />
          <p className="m-0 text-[17px] text-[#C9D6DD]">
            Every project gets the tools that suit the job. AI is useful and I use it well. It&apos;s one tool on the
            wall.
          </p>
          <p className="m-0 font-hand text-[22px] text-teal-pale">Pick a tool off the wall to see what&apos;s behind it →</p>
          <span className="mt-2 hidden -rotate-[7deg] self-start rounded-[50%] border-[1.6px] border-teal-light px-[26px] py-3.5 text-center font-hand text-2xl leading-[1.1] text-teal-pale min-[821px]:inline-block">
            The right tools
            <br />
            for the job.
          </span>
        </div>

        <ul className="m-0 grid min-w-0 flex-[2.2_1_560px] list-none grid-cols-[repeat(auto-fit,minmax(126px,1fr))] gap-x-4 gap-y-[30px] p-0">
          {TOOLS.map((t) => (
            <li key={t.key} className="relative flex">
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={(e) => open(t.key, e.currentTarget)}
                className={`tool-card relative flex w-full cursor-pointer flex-col items-center rounded-md border-0 px-3 pt-6 pb-4 text-center text-navy shadow-[0_3px_0_rgba(0,0,0,0.18)] ${
                  t.highlight
                    ? "gap-1.5 bg-teal-wash outline-2 outline-offset-[3px] outline-teal-light outline-dashed"
                    : "gap-2 bg-cream"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[7px] h-3 w-3 rounded-full border-2 border-brass bg-brass-light"
                />
                <img src={t.icon} alt="" aria-hidden="true" className="block h-[46px] w-[46px] object-contain" />
                <span className="font-display text-[15px] leading-tight font-bold">{t.label}</span>
                {t.highlight && <span className="text-[13px] leading-[1.2] text-teal-deeper">One tool among many</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {tool && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 py-8 md:py-16">
          <div aria-hidden="true" className="fixed inset-0 bg-[rgba(15,44,66,0.55)]" onClick={close} />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="tool-dialog-title"
            className="grid-paper relative flex w-full max-w-[700px] -rotate-[0.4deg] flex-col gap-4 border border-rule bg-paper px-5 pt-10 pb-8 text-ink shadow-[0_24px_48px_rgba(15,44,66,0.35)] md:px-10"
          >
            <Tape className="left-1/2 -top-3 w-[110px] -translate-x-1/2 -rotate-3" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="m-0 mb-1 font-mono text-sm text-teal-dark">Tool {tool.num} / Inside the toolshed</p>
                <h3 id="tool-dialog-title" className="m-0 text-[30px] leading-[1.15] text-navy">
                  {tool.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close"
                className="h-11 w-11 flex-none cursor-pointer rounded-full border-[1.5px] border-navy bg-white text-[22px] leading-none text-navy"
              >
                ×
              </button>
            </div>
            <p className="m-0 text-lg font-semibold text-navy">{tool.what}</p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
              <div className="flex flex-col gap-1.5 rounded-md border border-rule bg-white p-[18px]">
                <p className="m-0 font-hand text-[23px] text-teal-dark">In learning and development</p>
                <p className="m-0 text-base leading-normal">{tool.ld}</p>
              </div>
              <div className="flex flex-col gap-1.5 rounded-md border border-rule bg-white p-[18px]">
                <p className="m-0 font-hand text-[23px] text-teal-dark">In app and web builds</p>
                <p className="m-0 text-base leading-normal">{tool.app}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="m-0 font-display text-[15px] font-bold text-navy">Tools and methods behind it</p>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {tool.tools.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border-[1.5px] border-teal bg-teal-wash px-3 py-1.5 text-[15px] text-teal-deeper"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-dash pt-1.5">
              <span className="font-hand text-[22px] text-muted">
                Not sure which tool you need? That&apos;s the first conversation.
              </span>
              <a
                href="#contact"
                onClick={() => setOpenKey(null)}
                className="rounded-md bg-navy px-[18px] py-3 font-display text-[15px] font-bold text-cream no-underline hover:text-cream"
              >
                Start a conversation →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
