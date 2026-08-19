export const CYFUN_PILLARS = ["Identify", "Protect", "Detect", "Respond", "Recover"];

export const RANKS = [
  { min: 0, name: "Waffle Intern", award: "Sticky Notes of Destiny" },
  { min: 220, name: "Patch Tuesday Page", award: "Golden USB (glued shut)" },
  { min: 450, name: "Moules-Frites Risk Ranger", award: "Risk Register Apron" },
  { min: 720, name: "CyFun Knight of Brussels", award: "Tin-foil Manneken Pis Cape" },
  { min: 1000, name: "NIS2 Dragon Tamer", award: "Chocolate Firewall Crown" }
];

export const MISSIONS = [
  {
    id: "scope",
    pillar: "Identify",
    title: "The Belgian Scope Sorting Hat",
    briefing: "A client sells managed cloud services, operates in Belgium, and insists they are 'basically a waffle shop with servers'.",
    joke: "If the server room smells like waffles, it is still a server room.",
    question: "What is the best first consulting move under Belgian NIS2 scoping?",
    answers: [
      { text: "Map activities, sector, size, Belgian establishment/services, and determine whether the entity is essential or important.", type: "right", correct: true, feedback: "Correct. Start with scope and category before prescribing controls." },
      { text: "Assume every Belgian company is automatically an essential entity because Belgium is essential to fries.", type: "false", correct: false, feedback: "Obviously false. NIS2 categories and sector/size criteria matter." },
      { text: "Skip sector analysis if the company already has ISO 27001 certificates.", type: "close", correct: false, feedback: "Close-ish, but false. Certifications can help evidence maturity; they do not replace NIS2 scoping." }
    ]
  },
  {
    id: "governance",
    pillar: "Identify",
    title: "Boardroom Boss Fight",
    briefing: "Management wants to delegate NIS2 to 'that person who knows Excel macros'.",
    joke: "Excel is powerful, but it is not a legal shield. Even with pivot tables.",
    question: "What should consultants teach leadership?",
    answers: [
      { text: "Management should approve and oversee cybersecurity risk-management measures and understand the risks.", type: "right", correct: true, feedback: "Correct. NIS2 is a governance topic, not just an IT chore." },
      { text: "The board only needs a yearly phishing meme slideshow and a heroic thumbs-up emoji.", type: "false", correct: false, feedback: "No. Awareness helps, but oversight requires decisions, resources, and follow-up." },
      { text: "If there is a CISO, management can ignore cyber risk unless an incident becomes public.", type: "close", correct: false, feedback: "False. The CISO supports the program; management remains responsible for oversight." }
    ]
  },
  {
    id: "risk",
    pillar: "Identify",
    title: "The Risk Register Treasure Map",
    briefing: "A client has 79 controls but cannot explain which risks they reduce.",
    joke: "A control without a risk is just expensive office furniture with a dashboard.",
    question: "Which advice best matches a CyFun-style approach?",
    answers: [
      { text: "Maintain an asset and risk view, prioritize critical services, and choose proportionate measures with accountable owners.", type: "right", correct: true, feedback: "Correct. CyFun thinking connects assets, risks, controls, and evidence." },
      { text: "Write 'cyber risk = spicy' in the register and move directly to lunch.", type: "false", correct: false, feedback: "Deliciously wrong. Risk decisions need traceability." },
      { text: "Only document risks after an auditor asks, because then the risks become real.", type: "close", correct: false, feedback: "False. Risk management should be ongoing, not audit-triggered theatre." }
    ]
  },
  {
    id: "access",
    pillar: "Protect",
    title: "The MFA Goblin",
    briefing: "A privileged admin account uses 'Belgium123!' because it has a special character.",
    joke: "The exclamation mark is not a security strategy; it is a cry for help.",
    question: "Which protection is most appropriate?",
    answers: [
      { text: "Apply least privilege, MFA for privileged access, strong authentication, and periodic access reviews.", type: "right", correct: true, feedback: "Correct. Identity controls are key protective measures." },
      { text: "Rename the admin account to 'not-admin' so attackers feel confused and go home.", type: "false", correct: false, feedback: "Obscurity alone is not a control." },
      { text: "Use MFA only for interns because they click everything.", type: "close", correct: false, feedback: "False. Risk-based MFA must cover privileged and sensitive access, not just junior staff." }
    ]
  },
  {
    id: "supply-chain",
    pillar: "Protect",
    title: "Vendor Karaoke Night",
    briefing: "A critical SaaS supplier says its security posture is 'trust me bro, enterprise edition'.",
    joke: "A vendor questionnaire is not romance; you are allowed to ask difficult questions.",
    question: "What should the team recommend?",
    answers: [
      { text: "Assess supplier risk, include security requirements in contracts, review assurance evidence, and monitor critical dependencies.", type: "right", correct: true, feedback: "Correct. NIS2-style risk management includes supply-chain security." },
      { text: "Accept any supplier with a logo in blue because blue means secure cloud magic.", type: "false", correct: false, feedback: "A very pretty control failure." },
      { text: "Only assess suppliers after they cause an outage, because then the questionnaire is shorter.", type: "close", correct: false, feedback: "False. Critical supplier risk should be assessed before and during the relationship." }
    ]
  },
  {
    id: "training",
    pillar: "Protect",
    title: "The Phishing Mussel Trap",
    briefing: "A fake invoice arrives with 'URGENT PAYMENT OR NO FRIES' in the subject line.",
    joke: "The finance team resisted the email. The fries remain emotionally safe.",
    question: "What is the strongest learning point?",
    answers: [
      { text: "Run role-based awareness, phishing reporting paths, secure process checks, and lessons learned from exercises.", type: "right", correct: true, feedback: "Correct. People, process, and reporting habits strengthen protection." },
      { text: "Ban email and communicate only by carrier pigeon wearing a tiny firewall helmet.", type: "false", correct: false, feedback: "Adorable, not scalable." },
      { text: "Train only IT administrators because business users do not affect cybersecurity.", type: "close", correct: false, feedback: "False. Cyber hygiene is organization-wide, with depth depending on role." }
    ]
  },
  {
    id: "detect",
    pillar: "Detect",
    title: "The Log Monster Under the Desk",
    briefing: "The client says they notice attacks because 'the network feels slow when something is weird'.",
    joke: "Vibes are not telemetry, even if the SOC analyst has excellent vibes.",
    question: "Which detection advice best supports CyFun readiness?",
    answers: [
      { text: "Collect relevant logs, define alerts for critical events, monitor vulnerabilities, and review detections regularly.", type: "right", correct: true, feedback: "Correct. Detection requires observable signals and repeatable review." },
      { text: "Wait for users to report that the mouse pointer looks nervous.", type: "false", correct: false, feedback: "User reports can help, but they are not a detection strategy." },
      { text: "Keep logs for everything forever without alert rules, owners, or privacy/legal consideration.", type: "close", correct: false, feedback: "False. Logging needs purpose, tuning, review, retention rules, and responsible handling." }
    ]
  },
  {
    id: "incident-reporting",
    pillar: "Respond",
    title: "The 3 A.M. Incident Waffle Iron",
    briefing: "Monitoring flags ransomware. The client asks whether to wait until Monday because everyone is at the coast.",
    joke: "Ransomware does not respect Belgian public holidays, sadly.",
    question: "What is the best response lesson?",
    answers: [
      { text: "Activate the incident plan, preserve evidence, contain the threat, communicate internally, and assess CCB notification deadlines quickly.", type: "right", correct: true, feedback: "Correct. Significant incidents can trigger early warning and follow-up reporting duties." },
      { text: "Reboot everything until the alert gets bored.", type: "false", correct: false, feedback: "That may destroy evidence and delay containment." },
      { text: "Notify only after the full root-cause analysis is perfect and laminated.", type: "close", correct: false, feedback: "False. Reporting timelines can start before final root cause is known." }
    ]
  },
  {
    id: "crisis-comms",
    pillar: "Respond",
    title: "Crisis Comms, Belgian Weather Edition",
    briefing: "Legal, IT, comms, and management all drafted different incident statements. One includes a weather report.",
    joke: "Cloudy with a chance of regulatory follow-up is not a crisis strategy.",
    question: "What should be prepared before a crisis?",
    answers: [
      { text: "Define roles, escalation paths, decision rights, stakeholder messaging, and evidence capture in an exercised incident response plan.", type: "right", correct: true, feedback: "Correct. Practiced coordination prevents chaos when minutes matter." },
      { text: "Let whoever has the fanciest Teams background become incident commander.", type: "false", correct: false, feedback: "Stylish, but not governance." },
      { text: "Prepare communications only for customers, because regulators and suppliers never ask questions.", type: "close", correct: false, feedback: "False. Incident communication may involve several stakeholder groups." }
    ]
  },
  {
    id: "recover",
    pillar: "Recover",
    title: "Backup or Back Nope?",
    briefing: "The client has backups, but nobody has restored them since the coffee machine was last descaled.",
    joke: "An untested backup is just a motivational poster with storage costs.",
    question: "Which recovery action earns points?",
    answers: [
      { text: "Define recovery objectives, test restores, protect backup access, document lessons learned, and improve resilience.", type: "right", correct: true, feedback: "Exactly. Recovery is planned, tested, protected, and improved." },
      { text: "Hope the attacker kept a clean copy.", type: "false", correct: false, feedback: "Hope is not a recovery control." },
      { text: "Keep all backups online with the same admin password for faster recovery.", type: "close", correct: false, feedback: "False. Convenience that lets attackers encrypt backups is not resilience." }
    ]
  }
];
