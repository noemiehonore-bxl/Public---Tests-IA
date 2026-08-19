export const CYFUN_PILLARS = ["Identify", "Protect", "Detect", "Respond", "Recover"];

export const RANKS = [
  { min: 0, name: "Waffle Intern", award: "Sticky Notes of Destiny" },
  { min: 120, name: "Patch Tuesday Page", award: "Golden USB (glued shut)" },
  { min: 260, name: "Moules-Frites Risk Ranger", award: "Risk Register Apron" },
  { min: 420, name: "CyFun Knight of Brussels", award: "Tin-foil Manneken Pis Cape" },
  { min: 620, name: "NIS2 Dragon Tamer", award: "Chocolate Firewall Crown" }
];

export const MISSIONS = [
  {
    id: "scope",
    pillar: "Identify",
    title: "The Belgian Scope Sorting Hat",
    briefing: "A client sells cloud services, runs a small data center, and also claims 'we are just a family waffle shop with servers'. Decide what matters first.",
    joke: "If the server room smells like waffles, it is still a server room.",
    question: "What is the best first consulting move under NIS2 scoping?",
    answers: [
      { text: "Map services, sectors, size, Belgian establishment/activity, and determine whether the entity is essential or important.", correct: true, feedback: "Correct. NIS2 work starts by knowing whether the organization is in scope and at what category." },
      { text: "Buy a firewall shaped like a waffle and call it proportionality.", correct: false, feedback: "Crunchy, but no. Technology comes after scoping and risk." },
      { text: "Assume every Belgian organization is an essential entity.", correct: false, feedback: "Nope. Scope and category matter; over-scoping wastes effort." }
    ]
  },
  {
    id: "management",
    pillar: "Identify",
    title: "Boardroom Boss Fight",
    briefing: "Management wants to delegate NIS2 to 'that person who knows Excel macros'.",
    joke: "Excel is powerful, but it is not a legal shield. Even with pivot tables.",
    question: "What should consultants teach the leadership team?",
    answers: [
      { text: "Management must understand, approve, and oversee cybersecurity risk-management measures.", correct: true, feedback: "Yes. NIS2 puts governance and accountability on leadership, not only IT." },
      { text: "Leadership only needs a yearly phishing meme slideshow.", correct: false, feedback: "Awareness helps, but governance requires decisions, oversight, and resources." },
      { text: "Only the CISO can ever be accountable.", correct: false, feedback: "The CISO runs the program; management remains accountable for oversight." }
    ]
  },
  {
    id: "protect",
    pillar: "Protect",
    title: "The MFA Goblin",
    briefing: "A privileged admin account is protected by the password 'Belgium123!' because it has a special character.",
    joke: "The exclamation mark is not a security strategy; it is a cry for help.",
    question: "Which CyFun-style protection is most appropriate?",
    answers: [
      { text: "Apply strong access control, MFA for privileged access, least privilege, and secure configuration.", correct: true, feedback: "Correct. Protect controls reduce the chance that one weak credential becomes a breach." },
      { text: "Rename the admin account to 'not-admin'.",
        correct: false, feedback: "Obscurity alone is not a control." },
      { text: "Print the password in Comic Sans so attackers take it less seriously.", correct: false, feedback: "Attackers are famously font-agnostic." }
    ]
  },
  {
    id: "detect",
    pillar: "Detect",
    title: "The Log Monster Under the Desk",
    briefing: "The client says they will notice attacks because 'the network feels slow when something is weird'.",
    joke: "Vibes are not telemetry, even if the SOC analyst has excellent vibes.",
    question: "Which detection advice best supports CyFun readiness?",
    answers: [
      { text: "Collect relevant logs, define alerts for critical events, monitor vulnerabilities, and review detections regularly.", correct: true, feedback: "Correct. Detection requires observable signals, tuned alerts, and repeatable review." },
      { text: "Wait for users to report that the mouse pointer looks nervous.", correct: false, feedback: "User reports can help, but they are not a detection strategy." },
      { text: "Disable logging to save disk space and reduce confusing evidence.", correct: false, feedback: "That removes the evidence trail you need for security and incident handling." }
    ]
  },
  {
    id: "incident",
    pillar: "Respond",
    title: "The 3 A.M. Incident Waffle Iron",
    briefing: "Monitoring flags ransomware. The client asks whether to wait until Monday because everyone is at the coast.",
    joke: "Ransomware does not respect Belgian public holidays, sadly.",
    question: "What is the best response lesson?",
    answers: [
      { text: "Activate the incident response plan, preserve evidence, communicate internally, and assess regulatory reporting duties quickly.", correct: true, feedback: "Correct. NIS2 emphasizes incident handling and timely reporting." },
      { text: "Reboot everything until the alert gets bored.", correct: false, feedback: "That may destroy evidence and delay containment." },
      { text: "Post a vague LinkedIn poll asking if ransom is deductible.", correct: false, feedback: "Please do not crowdsourcing your crisis response." }
    ]
  },
  {
    id: "recover",
    pillar: "Recover",
    title: "Backup or Back Nope?",
    briefing: "The client has backups, but nobody has restored them since the office coffee machine was last descaled.",
    joke: "An untested backup is just a motivational poster with storage costs.",
    question: "Which recovery action earns points?",
    answers: [
      { text: "Define recovery objectives, test restores, document lessons learned, and improve resilience after incidents.", correct: true, feedback: "Exactly. Recovery is planned, tested, and improved." },
      { text: "Hope the attacker kept a clean copy.", correct: false, feedback: "Hope is not a recovery control." },
      { text: "Keep all backups online with the same admin password for convenience.", correct: false, feedback: "That makes backups easier for attackers too." }
    ]
  }
];
