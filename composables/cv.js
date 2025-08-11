export default function () {
  // Level: 1 = Anfänger, 2 = Grundkenntnisse, 3 = Fortgeschritten, 4 = Experte
  // TODO: Correct Dates
  const sprachen = [
    {
      id: 0,
      title: "Englisch",
      level: "Sehr Gut"
    }
  ]
  const skills = [
    "Teamorientiert",
    "logisches Denken",
    "Problemlösefähigkeit",
    "Perfektionistisch",
    "Agiles Arbeiten",
    "Kreativ"
  ]
  const personal_intrest = [
    "Full Stack Entwicklung",
    "Smarthome",
    "Automatisieren und Perfektionieren von täglichen Abläufen",
    "Sportliche Herausforderungen (Kraftsport, Gravelbike)",
    "Musik (Gitarrist in einer Band)"
  ]
  const zertifikate = [
    {
      id: 0,
      title: "Camp2Code - Online",
      institution: "Volkswagen AG"
    },
    {
      id: 2,
      title: "IT-PEP",
      institution: "Volkswagen AG"
    },
    {
      id: 3,
      title: "Microsoft 365 - Sharepoint Online Advanced - Dokumentenbasierte Zusammenarbeit",
      institution: "Volkswagen AG"
    },
    {
      id: 4,
      title: "CAEPyPi - Softwareentwicklung bei Volkswagen",
      institution: "Volkswagen AG"
    },
    {
      id: 5,
      title: "Microsoft 365 - Sharepoint Online für Seitenersteller und Admins Teil 1",
      institution: "Volkswagen AG"
    },
    {
      id: 6,
      title: "Microsoft 365 - Sharepoint Online für Seitenersteller und Admins Teil 2",
      institution: "Volkswagen AG"
    },
    {
      id: 7,
      title: "CCNA1",
      institution: "Cisco NetAcad"
    },
    {
      id: 8,
      title: "CCNA2",
      institution: "Cisco NetAcad"
    },
    {
      id: 9,
      title: "Python Programmierung",
      institution: "Oskar-von-Miller Schule Kassel"
    },
  ]
  const lebenslauf_Beruf = [
    {
      id: 0,
      title: "Ausbildung",
      institution: "Volkswagen AG & Oskar-von-Miller-Schule Kassel",
      von_date: "2015-09-01",
      bis_date: "2018-06-01",
      abschluss: "Elektroniker für Automatisierungstechnik",
      beschreibung: "",
      wissen: [
        { name: "SPS", level: 2 },
        { name: "KUKA Roboter", level: 1 },
        { name: "Java", level: 1 },
        { name: "Python", level: 1 },
      ],
    },
    {
      id: 1,
      title: "Eingesetzt in der Qualitätssicherung - Giesserei",
      institution: "Volkswagen AG",
      von_date: "2018-09-01",
      bis_date: "2020-02-01",
      abschluss: "Güteprüfer im Messraum",
      beschreibung: "Tätigkeit: Serienmitarbeiter",
      wissen: [
      ],
    },
    {
      id: 2,
      title: "Eingesetzt in der Qualitätssicherung - Giesserei",
      institution: "Volkswagen AG",
      von_date: "2020-02-01",
      bis_date: new Date().toISOString().split('T')[0],
      abschluss: "Güteprüfer im Messraum",
      beschreibung: "Tätigkeit: Programmierer für Röntgen-/CT-Systeme",
      wissen: [
        { name: "PowerShell", level: 1 },
        { name: "Python", level: 2 },
        { name: "C#", level: 1 },
        { name: "Neuronale Netze", level: 1 },
        { name: "Machine Learning", level: 1 },
        { name: "Tensorflow/Keras", level: 1 },
        { name: "JIRA", level: 1 },
        { name: "VG Studio", level: 3 },
        { name: "Röntgentechnik", level: 3 },
      ],
    },
  ]
  const lebenslauf_Schule = [
    {
      id: 0,
      title: "Fachoberschule",
      institution: "Max-Eyth-Schule Kassel",
      von_date: "2013-09-01",
      bis_date: "2015-06-01",
      abschluss: "Fachhochschulreife",
      beschreibung: "Bereich: Informationstechnik",
      wissen: [
        { name: "Datenbanken", level: 1 },
        { name: "C++", level: 1 },
        { name: "Java", level: 1 },
        { name: "HTML", level: 1 },
        { name: "CSS", level: 1 },
      ],
    },
    {
      id: 2,
      title: "Techniker",
      institution: "Oskar-von-Miller-Schule Kassel",
      von_date: "2022-09-01",
      bis_date: "2026-06-01",
      abschluss: "Bachelor Professional in Computer Science",
      wissen: [
        { name: "Python", level: 3 },
        { name: "HTML", level: 2 },
        { name: "CSS", level: 2 },
        { name: "Datenbanken (MySQL)", level: 2 },
        { name: "JavaScript", level: 2 },
        { name: "TypeScript", level: 2 },
        { name: "GIT", level: 2 },
        { name: "VUE + NUXT", level: 1 },
        { name: "Networks", level: 1 },
        { name: "Security", level: 1 },
        { name: "Windows", level: 2 },
      ],
    },
  ];
  return {
    "schule": lebenslauf_Schule,
    "beruf": lebenslauf_Beruf,
    "zertifikate": zertifikate,
    "skills": skills,
    "sprache": sprachen,
    "pintrst": personal_intrest
  };
}
