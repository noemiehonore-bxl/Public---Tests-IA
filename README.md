# CyFun Maturity Assessment for CISOs

A static website that helps CISOs structure a CyberFundamentals (CyFun) maturity assessment discussion with executives, risk owners, and technical control owners.

## What the site provides

- A board-ready overview of the five CyFun functions: Identify, Protect, Detect, Respond, and Recover.
- A five-level maturity scale from Initial to Optimised.
- Evidence prompts for each function, including risk registers, access reviews, logging standards, incident records, and restore tests.
- Interactive maturity selectors that calculate an overall maturity score and highlight the first two priority areas.
- A practical roadmap for turning assessment findings into quarterly leadership reporting and remediation priorities.

## Run locally

Open `index.html` in a modern browser, or serve the folder with any static file server.

```bash
python3 -m http.server 8080
```

Then browse to <http://localhost:8080>.

## Test

```bash
npm test
```

## Source notes

The learning content is intentionally concise and should be treated as assessment support, not legal advice. Before using it for client deliverables, validate with official Belgian sources:

- CCB / Safeonweb NIS2 overview: <https://atwork.safeonweb.be/nis2>
- CCB / Safeonweb CyberFundamentals Framework: <https://atwork.safeonweb.be/tools-resources/cyberfundamentals-framework>
- CCB NIS2 regulation page: <https://ccb.belgium.be/regulation/nis2>
