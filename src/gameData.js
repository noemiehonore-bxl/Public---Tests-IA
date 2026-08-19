export const CYFUN_FUNCTIONS = ["Identify", "Protect", "Detect", "Respond", "Recover"];

export const MATURITY_LEVELS = [
  {
    level: 1,
    name: "Initial",
    signal: "Cybersecurity work is reactive, undocumented, and mostly dependent on individual effort."
  },
  {
    level: 2,
    name: "Repeatable",
    signal: "Key practices exist for critical assets, but evidence and ownership are inconsistent."
  },
  {
    level: 3,
    name: "Defined",
    signal: "Policies, procedures, roles, and control evidence are documented and reviewed."
  },
  {
    level: 4,
    name: "Managed",
    signal: "Metrics, risk decisions, assurance results, and exceptions are actively governed."
  },
  {
    level: 5,
    name: "Optimised",
    signal: "The programme continuously improves using threat intelligence, exercises, incidents, and audits."
  }
];

export const ASSESSMENT_AREAS = [
  {
    id: "identify",
    function: "Identify",
    title: "Know what matters",
    boardQuestion: "Can management explain the essential services, crown-jewel processes, third parties, and cyber risks that CyFun controls protect?",
    evidence: ["business service catalogue", "asset inventory", "risk register", "supplier criticality map"],
    indicators: [
      "Scope CyFun against legal entities, locations, services, and dependencies.",
      "Assign accountable owners for assets, risks, policies, and exceptions.",
      "Link cyber risks to business impact, tolerances, and board reporting."
    ]
  },
  {
    id: "protect",
    function: "Protect",
    title: "Reduce preventable exposure",
    boardQuestion: "Are proportional safeguards consistently applied to users, endpoints, networks, data, cloud services, and suppliers?",
    evidence: ["access reviews", "MFA coverage", "secure configuration baselines", "awareness records"],
    indicators: [
      "Apply least privilege and strong authentication to privileged and remote access.",
      "Harden systems, patch vulnerabilities, encrypt sensitive data, and protect backups.",
      "Embed supplier and secure-development requirements where they affect services."
    ]
  },
  {
    id: "detect",
    function: "Detect",
    title: "See abnormal activity early",
    boardQuestion: "Would the organisation notice a material cyber event quickly enough to limit business impact and meet reporting duties?",
    evidence: ["logging standard", "alert catalogue", "vulnerability reports", "SOC review minutes"],
    indicators: [
      "Collect relevant logs from critical identities, endpoints, network paths, and cloud platforms.",
      "Tune alerts for high-risk scenarios and review detection quality after exercises.",
      "Track vulnerabilities and threat intelligence against exposed services."
    ]
  },
  {
    id: "respond",
    function: "Respond",
    title: "Control the crisis",
    boardQuestion: "Can teams contain, escalate, communicate, and evidence decisions during an incident without improvising the basics?",
    evidence: ["incident response plan", "contact tree", "exercise reports", "regulatory notification playbook"],
    indicators: [
      "Define severity criteria, decision rights, communications, and legal/regulatory checkpoints.",
      "Practise scenarios with executives, IT, communications, legal, suppliers, and operations.",
      "Preserve evidence and maintain an incident record from detection through closure."
    ]
  },
  {
    id: "recover",
    function: "Recover",
    title: "Restore trust and services",
    boardQuestion: "Are recovery priorities, dependencies, backups, and improvement actions proven rather than assumed?",
    evidence: ["BIA", "recovery runbooks", "restore test results", "lessons-learned tracker"],
    indicators: [
      "Set recovery time and recovery point objectives for priority services.",
      "Test backup restoration, crisis handover, and continuity plans under realistic constraints.",
      "Feed lessons learned into risk treatment, architecture, suppliers, and board oversight."
    ]
  }
];

export const ROADMAP_STEPS = [
  "Confirm CyFun scope, target assurance level, business priorities, and assessment method.",
  "Collect evidence and score each function with business owners, not only IT control owners.",
  "Validate gaps through walkthroughs, sampling, technical checks, and incident/recovery exercises.",
  "Prioritise remediation by risk reduction, NIS2 relevance, feasibility, and dependency sequencing.",
  "Report maturity, residual risk, funding needs, and quarterly improvement metrics to leadership."
];
