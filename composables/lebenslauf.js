export default function () {
    // TODO: Correct Dates
    const lebenslauf = [
        {
            id: 0,
            title: "gymnasium",
            institution: "Dr. Georg-August-Zinn Schule Gudensberg",
            von_date: "2008-09-01",
            bis_date: "2013-06-01",
            abschluss: "Mittlere Reife",
            beschreibung: "",
            wissen: []
        },
        {
            id: 1,
            title: "Fachoberschule",
            institution: "Max-Eyth-Schule Kassel",
            von_date: "2013-09-01",
            bis_date: "2015-06-01",
            abschluss: "Fachhochschulreife",
            beschreibung: "", 
            wissen: [
                {name: "Datenbanken", level: 1},
                {name: "c++", level: 1},
                {name: "java", level: 1},
                {name: "html", level: 1},
                {name: "css", level: 1}
            ]
        },
        {
            id: 2,
            title: "FOS - Praktikum",
            institution: "Volkswagen AG",
            von_date: "2013-09-01",
            bis_date: "2014-06-01",
            abschluss: "",
            beschreibung: "PC Werkstatt",
            wissen: [
                {name: "Backups", level: 1},
                {name: "Installationen", level: 1},
                {name: "Reparaturen", level: 1}
            ] 
        },
        {
            id: 3,
            title: "Ausbildung",
            institution: "Volkswagen AG & Oscar-von-Miller-Schule Kassel",
            von_date: "2015-09-01",
            bis_date: "2018-06-01",
            abschluss: "Elektroniker für Automatisierungstechnik",
            beschreibung: "",
            wissen: [
                {name: "SPS", level: 2},
                {name: "KUK Roboter", level: 1},
                {name: "Java", level: 1},
                {name: "Python", level: 1}
            ]
        },
        {
            id: 4,
            title: "Eingesetzt in der Qualitätssicherung",
            institution: "Volkswagen AG",
            von_date: "2018-09-01",
            bis_date: "Today",
            abschluss: "Güteprüfer im Betrieb",
            beschreibung: "Tätigkeit: Programmierer für Röntgen-/CT-Systeme",
            wissen: [
                {name: "powershell", level: 1},
                {name: "python", level: 2},
                {name: "c#", level: 1},
                {name: "Neuronale Netze", level: 1},
                {name: "machine learning", level: 1},
                {name: "tensorflow", level: 1}
            ]
        },
        {
            id: 5,
            title: "Techniker",
            institution: "OVM",
            von_date: "2022-09-01",
            bis_date: "2026-06-01",
            abschluss: "Bachelor Professional in Computer Science",
            wissen: [
                {name: "python", level: 3},
                {name: "html", level: 2},
                {name: "css", level: 2},
                {name: "Datenbanken", level: 2},
                {name: "Javescript", level: 2},
                {name: "GIT", level: 2},
                {name: "VUE + NUXT", level: 1},
                {name: "Networks", level: 1},
                {name: "Security", level: 1},
                {name: "Windows", level: 2},
            ]
        }
    ];
    return lebenslauf;
}