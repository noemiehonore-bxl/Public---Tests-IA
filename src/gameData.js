export const MODULES = ["Diagnostic", "Grammaire", "Conjugaison", "Vocabulaire quotidien", "Business"];

export const LEVELS = [
  { min: 0, name: "Reprise A2+", advice: "Réactive les bases et note les automatismes oubliés." },
  { min: 180, name: "B1 solide", advice: "Allonge les phrases et systématise les déclinaisons." },
  { min: 360, name: "B1+/B2 en reconstruction", advice: "Ajoute connecteurs, nuances et vocabulaire professionnel." },
  { min: 560, name: "B2 opérationnel", advice: "Travaille la fluidité, l'argumentation et les cas complexes." },
  { min: 760, name: "B2+ en confiance", advice: "Passe à des débats, réunions simulées et lectures longues." }
];

export const DAILY_PATH = [
  { day: 1, theme: "Diagnostic et routines", grammar: "Ordre des mots en phrase principale et subordonnée", conjugation: "Présent + verbes forts fréquents", vocabulary: "Se présenter, famille, agenda", business: "Présenter son rôle et son entreprise", task: "Écris un auto-portrait professionnel de 120 mots." },
  { day: 2, theme: "Cas et articles", grammar: "Nominatif, accusatif, datif avec articles définis/indéfinis", conjugation: "Perfekt avec haben/sein", vocabulary: "Maison, courses, déplacements", business: "Prendre rendez-vous", task: "Décris ta journée d'hier en 10 phrases au Perfekt." },
  { day: 3, theme: "Prépositions utiles", grammar: "Prépositions mixtes et direction/position", conjugation: "Prétérit de sein, haben, werden et modaux", vocabulary: "Ville, transports, services", business: "Organiser un déplacement", task: "Planifie un trajet et justifie tes choix." },
  { day: 4, theme: "Verbes à particule", grammar: "Particules séparables et inséparables", conjugation: "Futur I et intentions", vocabulary: "Téléphone, e-mail, tâches domestiques", business: "Relancer poliment par e-mail", task: "Rédige une relance courte avec prochaine étape." },
  { day: 5, theme: "Adjectifs et précision", grammar: "Déclinaison de l'adjectif après der/ein/sans article", conjugation: "Impératif et conseils", vocabulary: "Santé, restaurant, achats", business: "Décrire un produit ou service", task: "Présente 5 avantages d'une offre." },
  { day: 6, theme: "Opinion et argumentation", grammar: "Connecteurs: weil, obwohl, deshalb, trotzdem", conjugation: "Konjunktiv II de politesse", vocabulary: "Médias, loisirs, opinions", business: "Négocier une demande", task: "Formule une demande délicate avec Konjunktiv II." },
  { day: 7, theme: "Bilan hebdomadaire", grammar: "Révision ciblée des erreurs", conjugation: "Mix des temps étudiés", vocabulary: "100 mots prioritaires à revoir", business: "Pitch de 2 minutes", task: "Enregistre-toi, puis note 3 points à corriger." }
];

export const CHECKPOINTS = [
  {
    id: "word-order",
    module: "Diagnostic",
    title: "Retrouver le réflexe du verbe",
    prompt: "Choisis la phrase correcte.",
    answers: [
      { text: "Ich lerne heute Deutsch, weil ich wieder B2 erreichen möchte.", correct: true, feedback: "Exact: le verbe conjugué va en fin de subordonnée avec weil." },
      { text: "Ich lerne heute Deutsch, weil ich möchte wieder B2 erreichen.", correct: false, feedback: "Avec weil, le verbe conjugué se place à la fin: ... erreichen möchte." },
      { text: "Ich heute Deutsch lerne, weil ich möchte B2 wieder erreichen.", correct: false, feedback: "En phrase principale, le verbe conjugué occupe normalement la 2e position." }
    ]
  },
  {
    id: "cases",
    module: "Grammaire",
    title: "Accusatif ou datif",
    prompt: "Complète: Ich schreibe ___ Kunden eine E-Mail.",
    answers: [
      { text: "dem", correct: true, feedback: "Bravo: schreiben prend ici un complément au datif pour la personne." },
      { text: "den", correct: false, feedback: "Den serait accusatif masculin; le destinataire de schreiben est au datif." },
      { text: "der", correct: false, feedback: "Der ne convient pas pour un client masculin singulier au datif." }
    ]
  },
  {
    id: "perfect",
    module: "Conjugaison",
    title: "Perfekt au quotidien",
    prompt: "Quelle phrase signifie: J'ai pris le train ce matin ?",
    answers: [
      { text: "Ich bin heute Morgen mit dem Zug gefahren.", correct: true, feedback: "Correct: mouvement/changement de lieu avec sein + Partizip II." },
      { text: "Ich habe heute Morgen mit dem Zug gefahren.", correct: false, feedback: "Fahren utilise souvent sein au Perfekt quand il indique un déplacement." },
      { text: "Ich fahre heute Morgen mit dem Zug gefahren.", correct: false, feedback: "Il faut un auxiliaire conjugué + participe passé." }
    ]
  },
  {
    id: "daily-vocab",
    module: "Vocabulaire quotidien",
    title: "Vocabulaire utile",
    prompt: "Que veut dire 'die Rechnung' dans un contexte courant ?",
    answers: [
      { text: "La facture ou l'addition", correct: true, feedback: "Oui: au restaurant comme en administration, die Rechnung est très fréquent." },
      { text: "La réunion", correct: false, feedback: "La réunion se dit die Besprechung ou das Meeting." },
      { text: "Le retard", correct: false, feedback: "Le retard se dit die Verspätung." }
    ]
  },
  {
    id: "business-email",
    module: "Business",
    title: "E-mail professionnel",
    prompt: "Quelle formule est la plus adaptée pour proposer un créneau ?",
    answers: [
      { text: "Würde Ihnen Dienstag um 10 Uhr passen?", correct: true, feedback: "Très bien: Konjunktiv II poli et formulation naturelle." },
      { text: "Du kommst Dienstag 10 Uhr, ja?", correct: false, feedback: "Trop direct et familier pour un contexte business." },
      { text: "Ich will Dienstag um 10 Uhr.", correct: false, feedback: "Compréhensible mais abrupt; utilise würde/passen pour rester professionnel." }
    ]
  }
];
