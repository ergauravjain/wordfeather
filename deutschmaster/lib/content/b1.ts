// B1 sample content modelled on the Goethe-Zertifikat B1 format.
// Single source for the seed script and for demo mode (no DATABASE_URL).
// Texts are original, written for practice; they are not taken from official Modellsätze.

import type { Exercise, MockExam, VocabCard } from "../../types";

export const b1Exercises: Exercise[] = [
  // ─── Lesen ────────────────────────────────────────────────────────────────
  {
    id: "b1-lesen-1",
    level: "B1",
    skill: "READING",
    provider: "GOETHE",
    part: "Lesen Teil 1",
    title: "Blog: Mein erstes Jahr in Leipzig",
    instructions: "Lesen Sie den Text und die Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch?",
    timeLimitSec: 10 * 60,
    maxPoints: 6,
    passage: `Hallo zusammen,

vor genau einem Jahr bin ich für meine Ausbildung zur Mediengestalterin von Freiburg nach Leipzig gezogen. Am Anfang war das gar nicht so einfach: Ich kannte niemanden, und die Wohnungssuche hat fast drei Monate gedauert. In dieser Zeit habe ich bei einer Freundin meiner Tante auf dem Sofa geschlafen – sehr nett von ihr, aber auf Dauer ziemlich unbequem!

Inzwischen wohne ich in einer WG mit zwei Studenten im Stadtteil Plagwitz. Die Miete ist deutlich günstiger als in Freiburg, und ich kann mit dem Fahrrad zur Arbeit fahren. Meine Mitbewohner haben mir am Anfang viel gezeigt, zum Beispiel die schönsten Seen in der Umgebung.

Was mir am meisten geholfen hat, war ein Volleyballverein. Dort habe ich schnell Leute kennengelernt, und jeden Donnerstag gehen wir nach dem Training noch zusammen etwas essen. Nur das Wetter vermisse ich manchmal – im Süden scheint einfach öfter die Sonne.

Nächsten Monat besuchen mich meine Eltern zum ersten Mal. Ich freue mich schon darauf, ihnen „meine“ Stadt zu zeigen.

Eure Lena`,
    questions: [
      { id: "b1-lesen-1-q1", type: "TRUE_FALSE", prompt: "Lena ist wegen ihres Studiums nach Leipzig gezogen.", answer: false, explanation: "Sie ist „für meine Ausbildung zur Mediengestalterin“ umgezogen – nicht für ein Studium. Ihre Mitbewohner sind Studenten." },
      { id: "b1-lesen-1-q2", type: "TRUE_FALSE", prompt: "Lena hat am Anfang bei einer Bekannten gewohnt.", answer: true, explanation: "Sie hat „bei einer Freundin meiner Tante auf dem Sofa geschlafen“." },
      { id: "b1-lesen-1-q3", type: "TRUE_FALSE", prompt: "In Leipzig bezahlt Lena weniger Miete als vorher.", answer: true, explanation: "„Die Miete ist deutlich günstiger als in Freiburg.“" },
      { id: "b1-lesen-1-q4", type: "TRUE_FALSE", prompt: "Lena fährt mit der Straßenbahn zur Arbeit.", answer: false, explanation: "Sie fährt „mit dem Fahrrad zur Arbeit“." },
      { id: "b1-lesen-1-q5", type: "TRUE_FALSE", prompt: "Im Sportverein hat Lena neue Freunde gefunden.", answer: true, explanation: "„Dort habe ich schnell Leute kennengelernt.“" },
      { id: "b1-lesen-1-q6", type: "TRUE_FALSE", prompt: "Lenas Eltern waren schon oft in Leipzig.", answer: false, explanation: "Die Eltern besuchen sie „zum ersten Mal“." },
    ],
  },
  {
    id: "b1-lesen-2",
    level: "B1",
    skill: "READING",
    provider: "GOETHE",
    part: "Lesen Teil 2",
    title: "Zeitungsartikel: Repair-Cafés boomen",
    instructions: "Lesen Sie den Text aus der Presse und die Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
    timeLimitSec: 12 * 60,
    maxPoints: 3,
    passage: `Reparieren statt wegwerfen: Repair-Cafés werden immer beliebter

Ein kaputter Toaster, eine Hose mit Loch, ein Fahrrad mit platten Reifen – früher landeten solche Dinge oft im Müll. Heute bringen immer mehr Menschen sie ins Repair-Café. In Deutschland gibt es inzwischen über 1.000 dieser Treffpunkte, wo Ehrenamtliche zusammen mit den Besitzern defekte Gegenstände reparieren.

„Die Leute kommen nicht nur, um Geld zu sparen“, erklärt Martin Köhler, der seit vier Jahren ein Repair-Café in Kassel organisiert. „Viele wollen verstehen, wie ihre Geräte funktionieren, und es selbst lernen.“ Die Reparatur ist kostenlos, Ersatzteile müssen die Besucher aber selbst bezahlen. Über eine kleine Spende für Kaffee und Kuchen freut sich das Team trotzdem.

Nicht alles lässt sich retten: Bei etwa einem Drittel der Geräte fehlen passende Ersatzteile oder die Reparatur ist zu kompliziert. Köhler kritisiert deshalb die Hersteller: „Viele Produkte sind so gebaut, dass man sie gar nicht öffnen kann.“ Er hofft, dass neue EU-Regeln zum „Recht auf Reparatur“ das ändern.`,
    questions: [
      { id: "b1-lesen-2-q1", type: "MULTIPLE_CHOICE", prompt: "In diesem Text geht es darum, …", options: ["dass Reparaturen in Deutschland immer teurer werden.", "dass immer mehr Menschen Dinge gemeinsam reparieren.", "wie man ein eigenes Repair-Café eröffnet."], answer: 1, explanation: "Der Text beschreibt, dass Repair-Cafés „immer beliebter“ werden und Ehrenamtliche „zusammen mit den Besitzern“ reparieren." },
      { id: "b1-lesen-2-q2", type: "MULTIPLE_CHOICE", prompt: "Im Repair-Café …", options: ["muss man für die Reparatur bezahlen.", "bekommt man Ersatzteile gratis.", "zahlt man nur für Ersatzteile."], answer: 2, explanation: "„Die Reparatur ist kostenlos, Ersatzteile müssen die Besucher aber selbst bezahlen.“ Die Spende ist freiwillig." },
      { id: "b1-lesen-2-q3", type: "MULTIPLE_CHOICE", prompt: "Martin Köhler meint, dass …", options: ["viele Hersteller Reparaturen schwer machen.", "fast alle Geräte repariert werden können.", "die EU-Regeln nichts ändern werden."], answer: 0, explanation: "Er kritisiert die Hersteller: Viele Produkte „kann man gar nicht öffnen“." },
    ],
  },
  {
    id: "b1-lesen-3",
    level: "B1",
    skill: "READING",
    provider: "GOETHE",
    part: "Lesen Teil 3",
    title: "Anzeigen: Freizeitangebote",
    instructions: "Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Person? Sie können jede Anzeige nur einmal verwenden. Für eine Person gibt es keine passende Anzeige – wählen Sie dann „0“.",
    timeLimitSec: 10 * 60,
    maxPoints: 4,
    passage: `a) Kochkurs „Vegetarisch für Berufstätige“ – schnelle Gerichte in 30 Minuten. Mittwochs 19–21 Uhr, Volkshochschule.
b) Wandergruppe 60+ sucht neue Mitglieder. Jeden Sonntag gemütliche Touren rund um die Stadt, ca. 10 km.
c) Fotokurs für Anfänger: Lernen Sie Ihre Kamera kennen! Samstags, vier Termine, Leihkameras vorhanden.
d) Kinderchor „Spatzen“ (6–10 Jahre) – Proben dienstags 16 Uhr im Gemeindehaus. Keine Vorkenntnisse nötig.
e) Online-Sprachcafé Spanisch – jeden Abend ab 20 Uhr per Video. Alle Niveaus willkommen.`,
    questions: [
      {
        id: "b1-lesen-3-q1",
        type: "MATCHING",
        prompt: "Ordnen Sie jeder Person eine Anzeige zu.",
        options: {
          left: [
            "Tobias arbeitet lange und möchte lernen, abends schnell etwas Gesundes ohne Fleisch zu kochen.",
            "Frau Berger ist gerade in Rente gegangen und möchte am Wochenende mit anderen in der Natur sein.",
            "Aylin möchte für ihren Sohn (8) ein Hobby mit Musik finden.",
            "Jonas hat keine Kamera, möchte aber fotografieren lernen.",
            "Petra sucht einen Tanzkurs für sich und ihren Mann.",
          ],
          right: ["a", "b", "c", "d", "e"],
        },
        answer: [0, 1, 3, 2, -1],
        explanation: "Tobias → a (vegetarisch, schnell). Frau Berger → b (60+, Sonntag, Natur). Aylins Sohn → d (Kinderchor 6–10). Jonas → c (Leihkameras). Petra → 0: Es gibt keinen Tanzkurs.",
      },
    ],
  },

  // ─── Hören ────────────────────────────────────────────────────────────────
  {
    id: "b1-hoeren-1",
    level: "B1",
    skill: "LISTENING",
    provider: "GOETHE",
    part: "Hören Teil 1",
    title: "Durchsage am Bahnhof",
    instructions: "Sie hören einen kurzen Text zweimal. Lösen Sie die Aufgaben.",
    maxPlays: 2,
    timeLimitSec: 4 * 60,
    maxPoints: 2,
    passage: `Achtung an Gleis 7: Der Regionalexpress 4521 nach Erfurt, planmäßige Abfahrt 14 Uhr 32, hat heute circa 20 Minuten Verspätung. Grund dafür ist eine Reparatur an der Strecke. Reisende nach Weimar nutzen bitte die Regionalbahn um 14 Uhr 40 von Gleis 3. Wir bitten um Entschuldigung.`,
    questions: [
      { id: "b1-hoeren-1-q1", type: "TRUE_FALSE", prompt: "Der Zug nach Erfurt fällt heute aus.", answer: false, explanation: "Der Zug fällt nicht aus, er hat „circa 20 Minuten Verspätung“." },
      { id: "b1-hoeren-1-q2", type: "MULTIPLE_CHOICE", prompt: "Wer nach Weimar möchte, …", options: ["wartet an Gleis 7.", "fährt um 14:40 Uhr von Gleis 3.", "nimmt einen Bus."], answer: 1, explanation: "„Reisende nach Weimar nutzen bitte die Regionalbahn um 14 Uhr 40 von Gleis 3.“" },
    ],
  },
  {
    id: "b1-hoeren-2",
    level: "B1",
    skill: "LISTENING",
    provider: "GOETHE",
    part: "Hören Teil 2",
    title: "Führung im Stadtmuseum",
    instructions: "Sie hören einen Text einmal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
    maxPlays: 1,
    timeLimitSec: 6 * 60,
    maxPoints: 3,
    passage: `Herzlich willkommen im Stadtmuseum! Mein Name ist Frau Albrecht, und ich begleite Sie heute durch unsere Ausstellung. Die Führung dauert etwa eine Stunde. Wir beginnen im Erdgeschoss mit der Geschichte der Stadt im Mittelalter. Danach gehen wir in den ersten Stock – dort zeigen wir seit März eine neue Ausstellung über die Industrie im 19. Jahrhundert. Bitte beachten Sie: Fotografieren ist erlaubt, aber ohne Blitz. Ihre Taschen und Jacken können Sie kostenlos in den Schließfächern neben der Kasse lassen. Nach der Führung haben Sie noch Zeit für unser Café im Innenhof – mit Ihrer Eintrittskarte bekommen Sie dort zehn Prozent Rabatt.`,
    questions: [
      { id: "b1-hoeren-2-q1", type: "MULTIPLE_CHOICE", prompt: "Die neue Ausstellung …", options: ["ist im Erdgeschoss.", "zeigt das Mittelalter.", "ist im ersten Stock."], answer: 2, explanation: "„Danach gehen wir in den ersten Stock – dort zeigen wir seit März eine neue Ausstellung.“" },
      { id: "b1-hoeren-2-q2", type: "MULTIPLE_CHOICE", prompt: "Im Museum darf man …", options: ["nicht fotografieren.", "ohne Blitz fotografieren.", "nur mit Erlaubnis fotografieren."], answer: 1, explanation: "„Fotografieren ist erlaubt, aber ohne Blitz.“" },
      { id: "b1-hoeren-2-q3", type: "MULTIPLE_CHOICE", prompt: "Mit der Eintrittskarte …", options: ["ist der Kaffee kostenlos.", "bekommt man im Café Rabatt.", "kann man das Museum zweimal besuchen."], answer: 1, explanation: "„Mit Ihrer Eintrittskarte bekommen Sie dort zehn Prozent Rabatt.“" },
    ],
  },

  // ─── Schreiben ────────────────────────────────────────────────────────────
  {
    id: "b1-schreiben-1",
    level: "B1",
    skill: "WRITING",
    provider: "GOETHE",
    part: "Schreiben Teil 1",
    title: "E-Mail an einen Freund: Umzug",
    instructions: "Schreiben Sie eine E-Mail (circa 80 Wörter). Schreiben Sie etwas zu allen drei Punkten. Achten Sie auf den Textaufbau (Anrede, Einleitung, Reihenfolge der Inhaltspunkte, Schluss).",
    prompt: "Sie sind vor zwei Wochen in eine neue Wohnung umgezogen. Ihr Freund / Ihre Freundin konnte beim Umzug nicht helfen.",
    taskPoints: [
      "Beschreiben Sie: Wie ist die neue Wohnung?",
      "Begründen Sie: Warum sind Sie umgezogen?",
      "Machen Sie einen Vorschlag für einen Besuch.",
    ],
    minWords: 80,
    maxWords: 100,
    timeLimitSec: 20 * 60,
    maxPoints: 40,
    questions: [],
  },
  {
    id: "b1-schreiben-2",
    level: "B1",
    skill: "WRITING",
    provider: "GOETHE",
    part: "Schreiben Teil 2",
    title: "Forumsbeitrag: Handys in der Schule",
    instructions: "Sie haben im Fernsehen eine Diskussionssendung zum Thema „Handyverbot an Schulen“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie nun Ihre Meinung (circa 80 Wörter).",
    prompt: "„Handys haben in der Schule nichts zu suchen. Die Kinder sollen lernen und in der Pause miteinander reden, nicht auf den Bildschirm schauen.“ – Markus, 42",
    taskPoints: ["Ihre Meinung zum Thema", "Gründe / Beispiele aus Ihrer Erfahrung"],
    minWords: 80,
    maxWords: 100,
    timeLimitSec: 25 * 60,
    maxPoints: 40,
    questions: [],
  },
  {
    id: "b1-schreiben-3",
    level: "B1",
    skill: "WRITING",
    provider: "GOETHE",
    part: "Schreiben Teil 3",
    title: "Formelle E-Mail: Termin absagen",
    instructions: "Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss.",
    prompt: "Ihre Kursleiterin, Frau Dr. Wagner, hat Sie zu einem Gespräch über Ihr Projekt am Freitag eingeladen. Sie können nicht kommen. Schreiben Sie Frau Dr. Wagner. Entschuldigen Sie sich höflich und berichten Sie, warum Sie nicht kommen können.",
    taskPoints: ["Höflich absagen", "Grund nennen", "Neuen Termin vorschlagen"],
    minWords: 40,
    maxWords: 60,
    timeLimitSec: 15 * 60,
    maxPoints: 20,
    questions: [],
  },

  // ─── Sprechen ─────────────────────────────────────────────────────────────
  {
    id: "b1-sprechen-1",
    level: "B1",
    skill: "SPEAKING",
    provider: "GOETHE",
    part: "Sprechen Teil 1",
    title: "Gemeinsam etwas planen: Abschiedsfeier",
    instructions: "Eine Kollegin aus Ihrem Deutschkurs zieht in eine andere Stadt. Sie möchten zusammen mit Ihrem Partner / Ihrer Partnerin eine kleine Abschiedsfeier organisieren. Machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Partners.",
    prompt: "Abschiedsfeier für eine Kurskollegin planen",
    taskPoints: ["Wann feiern?", "Wo feiern?", "Essen und Getränke?", "Geschenk?", "Wer kümmert sich um was?"],
    prepSeconds: 60,
    speakSeconds: 3 * 60,
    maxPoints: 15,
    questions: [],
  },
  {
    id: "b1-sprechen-2",
    level: "B1",
    skill: "SPEAKING",
    provider: "GOETHE",
    part: "Sprechen Teil 2",
    title: "Präsentation: Homeoffice – ja oder nein?",
    instructions: "Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien. Folgen Sie den Anweisungen links und schreiben Sie Ihre Notizen und Ideen rechts daneben.",
    prompt: "Arbeiten im Homeoffice – ja oder nein?",
    taskPoints: [
      "Stellen Sie Ihr Thema vor.",
      "Berichten Sie von Ihrer Situation oder einem Beispiel.",
      "Nennen Sie Vor- und Nachteile.",
      "Wie ist das in Ihrem Heimatland?",
      "Beenden Sie Ihre Präsentation und bedanken Sie sich.",
    ],
    prepSeconds: 15 * 60,
    speakSeconds: 3 * 60,
    maxPoints: 25,
    questions: [],
  },
];

export const b1MockExam: MockExam = {
  id: "goethe-b1-mock-1",
  level: "B1",
  provider: "GOETHE",
  title: "Goethe-Zertifikat B1 – Prüfungssimulation 1",
  description: "Full exam simulation with strict timers per module. Each module is passed with 60 % of its points.",
  passPercent: 60,
  sections: [
    { id: "goethe-b1-mock-1-lesen", skill: "READING", order: 1, durationMinutes: 65, maxPoints: 100, exerciseIds: ["b1-lesen-1", "b1-lesen-2", "b1-lesen-3"] },
    { id: "goethe-b1-mock-1-hoeren", skill: "LISTENING", order: 2, durationMinutes: 40, maxPoints: 100, exerciseIds: ["b1-hoeren-1", "b1-hoeren-2"] },
    { id: "goethe-b1-mock-1-schreiben", skill: "WRITING", order: 3, durationMinutes: 60, maxPoints: 100, exerciseIds: ["b1-schreiben-1", "b1-schreiben-2", "b1-schreiben-3"] },
    { id: "goethe-b1-mock-1-sprechen", skill: "SPEAKING", order: 4, durationMinutes: 15, maxPoints: 100, exerciseIds: ["b1-sprechen-1", "b1-sprechen-2"] },
  ],
};

const card = (
  id: string,
  topic: string,
  german: string,
  partOfSpeech: VocabCard["partOfSpeech"],
  english: string,
  example: string,
  exampleEn: string,
  article?: VocabCard["article"],
  plural?: string,
): VocabCard => ({ id: `b1-v-${id}`, level: "B1", topic, german, article, plural, partOfSpeech, english, example, exampleEn });

export const b1Vocabulary: VocabCard[] = [
  // Arbeit & Beruf
  card("bewerbung", "Arbeit & Beruf", "Bewerbung", "noun", "application", "Ich habe meine Bewerbung per E-Mail geschickt.", "I sent my application by email.", "die", "Bewerbungen"),
  card("vorstellungsgespraech", "Arbeit & Beruf", "Vorstellungsgespräch", "noun", "job interview", "Morgen habe ich ein Vorstellungsgespräch bei einer Bank.", "Tomorrow I have a job interview at a bank.", "das", "Vorstellungsgespräche"),
  card("gehalt", "Arbeit & Beruf", "Gehalt", "noun", "salary", "Das Gehalt wird am Ende des Monats überwiesen.", "The salary is transferred at the end of the month.", "das", "Gehälter"),
  card("kuendigen", "Arbeit & Beruf", "kündigen", "verb", "to quit / give notice", "Sie hat ihre Stelle gekündigt, weil sie umzieht.", "She quit her job because she is moving.",),
  card("erfahrung", "Arbeit & Beruf", "Erfahrung", "noun", "experience", "Haben Sie Erfahrung im Kundenservice?", "Do you have experience in customer service?", "die", "Erfahrungen"),
  card("verantwortlich", "Arbeit & Beruf", "verantwortlich (für)", "adjective", "responsible (for)", "Wer ist für die Planung verantwortlich?", "Who is responsible for the planning?"),
  // Wohnen
  card("miete", "Wohnen", "Miete", "noun", "rent", "Die Miete ist im Zentrum sehr hoch.", "The rent in the centre is very high.", "die", "Mieten"),
  card("vermieter", "Wohnen", "Vermieter", "noun", "landlord", "Der Vermieter repariert die Heizung nächste Woche.", "The landlord is repairing the heating next week.", "der", "Vermieter"),
  card("nebenkosten", "Wohnen", "Nebenkosten", "noun", "additional costs (utilities)", "Sind die Nebenkosten in der Miete enthalten?", "Are the utilities included in the rent?", "die", "(Pl.)"),
  card("umziehen", "Wohnen", "umziehen", "verb", "to move (house)", "Wir ziehen im Mai nach Hamburg um.", "We are moving to Hamburg in May."),
  card("nachbar", "Wohnen", "Nachbar", "noun", "neighbour", "Unser Nachbar gießt im Urlaub unsere Blumen.", "Our neighbour waters our plants when we're on holiday.", "der", "Nachbarn"),
  // Umwelt
  card("umweltschutz", "Umwelt", "Umweltschutz", "noun", "environmental protection", "Umweltschutz beginnt im Alltag.", "Environmental protection starts in everyday life.", "der"),
  card("muell-trennen", "Umwelt", "Müll trennen", "phrase", "to separate rubbish", "In Deutschland trennt man den Müll sehr genau.", "In Germany people separate their rubbish very carefully."),
  card("verschwenden", "Umwelt", "verschwenden", "verb", "to waste", "Wir sollten kein Wasser verschwenden.", "We shouldn't waste water."),
  card("nachhaltig", "Umwelt", "nachhaltig", "adjective", "sustainable", "Sie kauft am liebsten nachhaltige Kleidung.", "She prefers to buy sustainable clothing."),
  card("verpackung", "Umwelt", "Verpackung", "noun", "packaging", "Unverpackt-Läden verkaufen Lebensmittel ohne Verpackung.", "Zero-waste shops sell food without packaging.", "die", "Verpackungen"),
  // Medien
  card("nachrichten", "Medien", "Nachrichten", "noun", "news", "Ich höre die Nachrichten morgens im Radio.", "I listen to the news on the radio in the morning.", "die", "(Pl.)"),
  card("sendung", "Medien", "Sendung", "noun", "programme / broadcast", "Die Sendung läuft jeden Freitag um 20 Uhr.", "The programme airs every Friday at 8 pm.", "die", "Sendungen"),
  card("herunterladen", "Medien", "herunterladen", "verb", "to download", "Du kannst die App kostenlos herunterladen.", "You can download the app for free."),
  card("meinung", "Medien", "Meinung", "noun", "opinion", "Meiner Meinung nach ist das keine gute Idee.", "In my opinion that is not a good idea.", "die", "Meinungen"),
  // Gesundheit
  card("termin-vereinbaren", "Gesundheit", "einen Termin vereinbaren", "phrase", "to make an appointment", "Ich möchte gern einen Termin beim Zahnarzt vereinbaren.", "I'd like to make an appointment with the dentist."),
  card("krankmeldung", "Gesundheit", "Krankmeldung", "noun", "sick note", "Ab dem dritten Tag brauchen Sie eine Krankmeldung.", "From the third day you need a sick note.", "die", "Krankmeldungen"),
  card("sich-erholen", "Gesundheit", "sich erholen", "verb", "to recover / relax", "Im Urlaub habe ich mich gut erholt.", "I recovered well on holiday."),
  // Redemittel & Verben mit Präposition
  card("sich-bewerben-um", "Verben mit Präposition", "sich bewerben um", "verb", "to apply for", "Er bewirbt sich um eine Stelle als Koch.", "He is applying for a job as a cook."),
  card("sich-beschweren-ueber", "Verben mit Präposition", "sich beschweren über", "verb", "to complain about", "Die Gäste beschweren sich über den Lärm.", "The guests are complaining about the noise."),
  card("sich-kuemmern-um", "Verben mit Präposition", "sich kümmern um", "verb", "to take care of", "Wer kümmert sich um die Getränke?", "Who's taking care of the drinks?"),
  card("teilnehmen-an", "Verben mit Präposition", "teilnehmen an", "verb", "to take part in", "Ich nehme an einem Deutschkurs teil.", "I'm taking part in a German course."),
  card("abhaengen-von", "Verben mit Präposition", "abhängen von", "verb", "to depend on", "Das hängt vom Wetter ab.", "That depends on the weather."),
  card("einerseits", "Redemittel", "einerseits … andererseits", "conjunction", "on the one hand … on the other hand", "Einerseits ist Homeoffice praktisch, andererseits fehlt der Kontakt.", "On the one hand working from home is practical, on the other hand you miss the contact."),
  card("deshalb", "Redemittel", "deshalb", "adverb", "therefore / that's why", "Es hat geregnet, deshalb sind wir zu Hause geblieben.", "It rained, that's why we stayed at home."),
  card("trotzdem", "Redemittel", "trotzdem", "adverb", "nevertheless", "Ich war müde, trotzdem bin ich zum Training gegangen.", "I was tired, nevertheless I went to training."),
];
