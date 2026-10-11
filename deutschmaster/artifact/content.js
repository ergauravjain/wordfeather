// Exam-skill tasks per level, modelled on the Goethe-Zertifikat formats.
// Texts are original practice material (not official Modellsätze).
// q types: tf {s, a:bool}, mc {s, o:[], a:index}, match {left:[], right:[], a:[idx|-1]}
const EXAMS = {
A1: [
 { id:"a1-lesen-1", skill:"R", part:"Lesen Teil 1", title:"E-Mail von Tom", min:6,
   ins:"Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?",
   text:`Liebe Anna,

wie geht es dir? Ich bin jetzt in Hamburg. Ich wohne bei meiner Tante. Ihre Wohnung ist klein, aber schön. Am Montag beginnt mein Deutschkurs. Der Kurs ist am Vormittag, von 9 bis 12 Uhr. Am Nachmittag arbeite ich in einem Café.

Am Samstag habe ich frei. Kommst du mich besuchen? Wir können zusammen zum Hafen gehen.

Viele Grüße
Tom`,
   q:[
    {t:"tf", s:"Tom wohnt in Hamburg bei seiner Tante.", a:true, x:"„Ich wohne bei meiner Tante.“"},
    {t:"tf", s:"Die Wohnung ist groß.", a:false, x:"Die Wohnung ist „klein, aber schön“."},
    {t:"tf", s:"Der Deutschkurs ist am Nachmittag.", a:false, x:"Der Kurs ist am Vormittag, von 9 bis 12 Uhr."},
    {t:"tf", s:"Tom arbeitet in einem Café.", a:true, x:"„Am Nachmittag arbeite ich in einem Café.“"},
    {t:"tf", s:"Tom hat am Sonntag frei.", a:false, x:"Er hat am Samstag frei."}
   ]},
 { id:"a1-lesen-2", skill:"R", part:"Lesen Teil 3", title:"Schilder und Aushänge", min:5,
   ins:"Lesen Sie die Texte. Wählen Sie die richtige Antwort.",
   text:`A) Praxis Dr. Müller – Sprechzeiten: Mo–Fr 8–12 Uhr, Di und Do auch 15–18 Uhr.
B) Bäckerei Kranz: Wegen Urlaub vom 3. bis 17. August geschlossen.
C) Schwimmbad: Kinder unter 6 Jahren nur mit Erwachsenen. Eintritt Kinder 2 €, Erwachsene 4,50 €.`,
   q:[
    {t:"mc", s:"Sie möchten am Dienstagnachmittag zum Arzt. Geht das?", o:["Ja, von 15 bis 18 Uhr.","Nein, nur vormittags.","Nein, am Dienstag ist geschlossen."], a:0, x:"Di und Do ist die Praxis auch 15–18 Uhr offen."},
    {t:"mc", s:"Wann ist die Bäckerei wieder offen?", o:["Am 3. August","Am 17. August","Am 18. August"], a:2, x:"Geschlossen bis zum 17. August – also wieder offen am 18."},
    {t:"mc", s:"Was kostet das Schwimmbad für einen Erwachsenen?", o:["2 €","4,50 €","6,50 €"], a:1, x:"Erwachsene 4,50 €."}
   ]},
 { id:"a1-hoeren-1", skill:"L", part:"Hören Teil 1", title:"Im Supermarkt", min:4, plays:2,
   ins:"Sie hören ein Gespräch zweimal. Wählen Sie die richtige Antwort.",
   text:`Verkäuferin: Guten Tag, kann ich Ihnen helfen?
Kunde: Ja, bitte. Wo finde ich Milch?
Verkäuferin: Die Milch ist hinten links, neben dem Käse.
Kunde: Danke. Und haben Sie auch frisches Brot?
Verkäuferin: Ja, das Brot ist vorne, bei der Kasse. Ein Brot kostet heute nur 1 Euro 80.
Kunde: Super, dann nehme ich zwei.`,
   q:[
    {t:"mc", s:"Wo ist die Milch?", o:["Vorne bei der Kasse","Hinten links neben dem Käse","Rechts neben dem Obst"], a:1, x:"„Die Milch ist hinten links, neben dem Käse.“"},
    {t:"mc", s:"Wie viel kostet ein Brot?", o:["1,08 €","1,80 €","2,80 €"], a:1, x:"„Ein Brot kostet heute nur 1 Euro 80.“"},
    {t:"mc", s:"Wie viele Brote kauft der Mann?", o:["Eins","Zwei","Drei"], a:1, x:"„Dann nehme ich zwei.“"}
   ]},
 { id:"a1-hoeren-2", skill:"L", part:"Hören Teil 3", title:"Nachricht auf der Mailbox", min:3, plays:2,
   ins:"Sie hören eine Nachricht zweimal. Wählen Sie die richtige Antwort.",
   text:`Hallo Lisa, hier ist Mehmet. Wir treffen uns morgen nicht um sechs, sondern um halb sieben. Ich muss länger arbeiten. Wir treffen uns vor dem Kino am Bahnhof. Bis morgen, tschüss!`,
   q:[
    {t:"mc", s:"Wann treffen sich Lisa und Mehmet?", o:["Um 6 Uhr","Um 6:30 Uhr","Um 7:30 Uhr"], a:1, x:"„Nicht um sechs, sondern um halb sieben“ = 18:30 Uhr."},
    {t:"mc", s:"Wo treffen sie sich?", o:["Am Bahnhof vor dem Kino","Bei Mehmet zu Hause","Im Büro"], a:0, x:"„Vor dem Kino am Bahnhof.“"}
   ]},
 { id:"a1-schreiben-1", skill:"W", part:"Schreiben Teil 2", title:"Einladung zum Geburtstag", min:15, words:[30,40],
   prompt:"Sie haben am Samstag Geburtstag und machen eine Party. Schreiben Sie Ihrer Freundin Maria eine Nachricht.",
   points:["Wann und wo ist die Party?","Was sollen die Gäste mitbringen?","Bitten Sie um eine Antwort."]},
 { id:"a1-schreiben-2", skill:"W", part:"Schreiben Teil 2", title:"E-Mail an die Sprachschule", min:15, words:[30,40],
   prompt:"Sie möchten einen Deutschkurs machen. Schreiben Sie eine E-Mail an die Sprachschule „Deutsch Plus“.",
   points:["Welchen Kurs möchten Sie machen?","Wann haben Sie Zeit?","Fragen Sie nach dem Preis."]},
 { id:"a1-sprechen-1", skill:"S", part:"Sprechen Teil 1", title:"Sich vorstellen", prep:30, speak:60,
   prompt:"Stellen Sie sich vor.",
   points:["Name","Alter","Land","Wohnort","Sprachen","Beruf","Hobby"]},
 { id:"a1-sprechen-2", skill:"S", part:"Sprechen Teil 3", title:"Um etwas bitten", prep:30, speak:60,
   prompt:"Formulieren Sie zu jedem Bild eine Bitte und reagieren Sie auf die Bitte Ihres Partners.",
   points:["ein Glas Wasser","das Fenster öffnen","einen Stift","langsamer sprechen"]}
],
A2: [
 { id:"a2-lesen-1", skill:"R", part:"Lesen Teil 1", title:"Zeitung: Neues Café für Senioren und Studenten", min:8,
   ins:"Lesen Sie den Text. Wählen Sie die richtige Lösung.",
   text:`In der Lindenstraße hat letzte Woche ein besonderes Café eröffnet: das „Generationencafé“. Hier treffen sich ältere Menschen und Studenten aus der Nachbarschaft. Die Idee hatte Rentnerin Helga Brandt (72). „Viele alte Menschen sind allein, und viele Studenten brauchen Hilfe – zum Beispiel beim Kochen oder bei der Wohnungssuche“, sagt sie.

Das Café ist dienstags und freitags von 14 bis 18 Uhr geöffnet. Kaffee und Kuchen kosten nur einen Euro. Jeden Freitag gibt es außerdem einen Spieleabend. Wer helfen möchte, kann sich bei der Stadtbibliothek melden.`,
   q:[
    {t:"mc", s:"Wer hatte die Idee für das Café?", o:["Ein Student","Eine Rentnerin","Die Stadtbibliothek"], a:1, x:"Die Idee hatte Rentnerin Helga Brandt."},
    {t:"mc", s:"Wann ist das Café geöffnet?", o:["Jeden Tag","Dienstags und freitags","Nur am Wochenende"], a:1, x:"„Dienstags und freitags von 14 bis 18 Uhr.“"},
    {t:"mc", s:"Wo kann man sich als Helfer melden?", o:["Im Café","Bei Frau Brandt","In der Stadtbibliothek"], a:2, x:"„Wer helfen möchte, kann sich bei der Stadtbibliothek melden.“"}
   ]},
 { id:"a2-lesen-2", skill:"R", part:"Lesen Teil 4", title:"Anzeigen: Wohnungen und Zimmer", min:8,
   ins:"Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt? Für eine Person gibt es keine Anzeige (0).",
   text:`a) 1-Zimmer-Wohnung, 28 m², Zentrum, ab sofort, 450 € warm. Keine Haustiere.
b) WG-Zimmer für Studentin, Nähe Uni, 320 €, Küche und Bad teilen.
c) 4-Zimmer-Wohnung mit Garten am Stadtrand, ideal für Familien, 1.250 €.
d) Ferienwohnung an der Ostsee, nur im Sommer, pro Woche 600 €.`,
   q:[
    {t:"match", s:"Ordnen Sie zu.", left:[
      "Familie Weber (zwei Kinder) sucht eine große Wohnung mit Garten.",
      "Sara studiert und sucht ein günstiges Zimmer in der Nähe der Uni.",
      "Herr Kaya sucht eine kleine Wohnung in der Stadtmitte, sofort.",
      "Frau Lang sucht eine Wohnung für sich und ihren Hund."],
     right:["a","b","c","d"], a:[2,1,0,-1],
     x:"Familie Weber → c; Sara → b; Herr Kaya → a; Frau Lang → 0 (in a sind keine Haustiere erlaubt)."}
   ]},
 { id:"a2-hoeren-1", skill:"L", part:"Hören Teil 1", title:"Durchsage im Kaufhaus", min:4, plays:2,
   ins:"Sie hören eine Durchsage zweimal. Wählen Sie die richtige Lösung.",
   text:`Liebe Kundinnen und Kunden, heute ist Familientag im Kaufhaus Merkur! Alle Spielsachen im dritten Stock sind 20 Prozent günstiger. Und in unserem Restaurant im fünften Stock bekommen Kinder unter zehn Jahren ein kostenloses Mittagessen. Wir wünschen Ihnen einen schönen Einkauf!`,
   q:[
    {t:"mc", s:"Wo gibt es Spielsachen?", o:["Im ersten Stock","Im dritten Stock","Im fünften Stock"], a:1, x:"„Alle Spielsachen im dritten Stock …“"},
    {t:"mc", s:"Was bekommen Kinder im Restaurant?", o:["Ein Eis","20 Prozent Rabatt","Ein kostenloses Mittagessen"], a:2, x:"Kinder unter zehn bekommen ein kostenloses Mittagessen."}
   ]},
 { id:"a2-hoeren-2", skill:"L", part:"Hören Teil 4", title:"Gespräch über das Wochenende", min:5, plays:2,
   ins:"Sie hören ein Gespräch zweimal. Sind die Aussagen richtig oder falsch?",
   text:`Jonas: Na, Petra, wie war dein Wochenende?
Petra: Toll! Ich war mit meiner Schwester in den Bergen. Wir sind am Samstag sechs Stunden gewandert.
Jonas: Sechs Stunden? Da warst du bestimmt müde.
Petra: Ja, sehr! Am Sonntag hat es dann geregnet, deshalb sind wir im Hotel geblieben und haben gelesen.
Jonas: Ich war nur zu Hause. Ich musste für meine Prüfung lernen.`,
   q:[
    {t:"tf", s:"Petra war mit ihrer Schwester in den Bergen.", a:true, x:"„Ich war mit meiner Schwester in den Bergen.“"},
    {t:"tf", s:"Am Sonntag sind sie auch gewandert.", a:false, x:"Am Sonntag hat es geregnet; sie sind im Hotel geblieben."},
    {t:"tf", s:"Jonas hat am Wochenende gelernt.", a:true, x:"„Ich musste für meine Prüfung lernen.“"}
   ]},
 { id:"a2-schreiben-1", skill:"W", part:"Schreiben Teil 1", title:"SMS: Sie kommen später", min:10, words:[20,30],
   prompt:"Sie sind mit Ihrem Freund Paul im Restaurant verabredet. Sie kommen zu spät. Schreiben Sie Paul eine SMS.",
   points:["Entschuldigen Sie sich.","Warum kommen Sie später?","Wann sind Sie da?"]},
 { id:"a2-schreiben-2", skill:"W", part:"Schreiben Teil 2", title:"E-Mail an Ihre Vermieterin", min:20, words:[30,40],
   prompt:"Die Heizung in Ihrer Wohnung funktioniert nicht. Schreiben Sie Ihrer Vermieterin, Frau Schulz, eine E-Mail.",
   points:["Was ist das Problem?","Seit wann?","Wann kann ein Handwerker kommen?"]},
 { id:"a2-sprechen-1", skill:"S", part:"Sprechen Teil 2", title:"Über sich erzählen: Wohnen", prep:60, speak:90,
   prompt:"Erzählen Sie über Ihre Wohnung.",
   points:["Wo wohnen Sie?","Wie groß ist die Wohnung?","Mit wem wohnen Sie?","Was gefällt Ihnen, was nicht?"]},
 { id:"a2-sprechen-2", skill:"S", part:"Sprechen Teil 3", title:"Gemeinsam etwas planen: Kinobesuch", prep:60, speak:120,
   prompt:"Sie möchten mit Ihrem Partner am Wochenende ins Kino gehen. Finden Sie einen Termin.",
   points:["Welcher Film?","Welcher Tag und welche Uhrzeit?","Wo treffen?","Vorher essen gehen?"]}
],
B1: [
 { id:"b1-lesen-1", skill:"R", part:"Lesen Teil 1", title:"Blog: Mein erstes Jahr in Leipzig", min:10,
   ins:"Lesen Sie den Text und die Aufgaben. Sind die Aussagen richtig oder falsch?",
   text:`Hallo zusammen,

vor genau einem Jahr bin ich für meine Ausbildung zur Mediengestalterin von Freiburg nach Leipzig gezogen. Am Anfang war das gar nicht so einfach: Ich kannte niemanden, und die Wohnungssuche hat fast drei Monate gedauert. In dieser Zeit habe ich bei einer Freundin meiner Tante auf dem Sofa geschlafen – sehr nett von ihr, aber auf Dauer ziemlich unbequem!

Inzwischen wohne ich in einer WG mit zwei Studenten im Stadtteil Plagwitz. Die Miete ist deutlich günstiger als in Freiburg, und ich kann mit dem Fahrrad zur Arbeit fahren. Meine Mitbewohner haben mir am Anfang viel gezeigt, zum Beispiel die schönsten Seen in der Umgebung.

Was mir am meisten geholfen hat, war ein Volleyballverein. Dort habe ich schnell Leute kennengelernt, und jeden Donnerstag gehen wir nach dem Training noch zusammen etwas essen. Nur das Wetter vermisse ich manchmal – im Süden scheint einfach öfter die Sonne.

Nächsten Monat besuchen mich meine Eltern zum ersten Mal. Ich freue mich schon darauf, ihnen „meine“ Stadt zu zeigen.

Eure Lena`,
   q:[
    {t:"tf", s:"Lena ist wegen ihres Studiums nach Leipzig gezogen.", a:false, x:"Sie ist „für meine Ausbildung zur Mediengestalterin“ umgezogen – nicht für ein Studium."},
    {t:"tf", s:"Lena hat am Anfang bei einer Bekannten gewohnt.", a:true, x:"Sie hat „bei einer Freundin meiner Tante auf dem Sofa geschlafen“."},
    {t:"tf", s:"In Leipzig bezahlt Lena weniger Miete als vorher.", a:true, x:"„Die Miete ist deutlich günstiger als in Freiburg.“"},
    {t:"tf", s:"Lena fährt mit der Straßenbahn zur Arbeit.", a:false, x:"Sie fährt „mit dem Fahrrad zur Arbeit“."},
    {t:"tf", s:"Im Sportverein hat Lena neue Freunde gefunden.", a:true, x:"„Dort habe ich schnell Leute kennengelernt.“"},
    {t:"tf", s:"Lenas Eltern waren schon oft in Leipzig.", a:false, x:"Die Eltern besuchen sie „zum ersten Mal“."}
   ]},
 { id:"b1-lesen-2", skill:"R", part:"Lesen Teil 2", title:"Zeitungsartikel: Repair-Cafés boomen", min:12,
   ins:"Lesen Sie den Text aus der Presse. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
   text:`Reparieren statt wegwerfen: Repair-Cafés werden immer beliebter

Ein kaputter Toaster, eine Hose mit Loch, ein Fahrrad mit platten Reifen – früher landeten solche Dinge oft im Müll. Heute bringen immer mehr Menschen sie ins Repair-Café. In Deutschland gibt es inzwischen über 1.000 dieser Treffpunkte, wo Ehrenamtliche zusammen mit den Besitzern defekte Gegenstände reparieren.

„Die Leute kommen nicht nur, um Geld zu sparen“, erklärt Martin Köhler, der seit vier Jahren ein Repair-Café in Kassel organisiert. „Viele wollen verstehen, wie ihre Geräte funktionieren, und es selbst lernen.“ Die Reparatur ist kostenlos, Ersatzteile müssen die Besucher aber selbst bezahlen. Über eine kleine Spende für Kaffee und Kuchen freut sich das Team trotzdem.

Nicht alles lässt sich retten: Bei etwa einem Drittel der Geräte fehlen passende Ersatzteile oder die Reparatur ist zu kompliziert. Köhler kritisiert deshalb die Hersteller: „Viele Produkte sind so gebaut, dass man sie gar nicht öffnen kann.“ Er hofft, dass neue EU-Regeln zum „Recht auf Reparatur“ das ändern.`,
   q:[
    {t:"mc", s:"In diesem Text geht es darum, …", o:["dass Reparaturen in Deutschland immer teurer werden.","dass immer mehr Menschen Dinge gemeinsam reparieren.","wie man ein eigenes Repair-Café eröffnet."], a:1, x:"Repair-Cafés werden „immer beliebter“; Ehrenamtliche reparieren „zusammen mit den Besitzern“."},
    {t:"mc", s:"Im Repair-Café …", o:["muss man für die Reparatur bezahlen.","bekommt man Ersatzteile gratis.","zahlt man nur für Ersatzteile."], a:2, x:"„Die Reparatur ist kostenlos, Ersatzteile müssen die Besucher aber selbst bezahlen.“"},
    {t:"mc", s:"Martin Köhler meint, dass …", o:["viele Hersteller Reparaturen schwer machen.","fast alle Geräte repariert werden können.","die EU-Regeln nichts ändern werden."], a:0, x:"Viele Produkte „kann man gar nicht öffnen“."}
   ]},
 { id:"b1-lesen-3", skill:"R", part:"Lesen Teil 3", title:"Anzeigen: Freizeitangebote", min:10,
   ins:"Welche Anzeige passt zu welcher Person? Jede Anzeige nur einmal. Für eine Person gibt es keine passende Anzeige (0).",
   text:`a) Kochkurs „Vegetarisch für Berufstätige“ – schnelle Gerichte in 30 Minuten. Mittwochs 19–21 Uhr, Volkshochschule.
b) Wandergruppe 60+ sucht neue Mitglieder. Jeden Sonntag gemütliche Touren rund um die Stadt, ca. 10 km.
c) Fotokurs für Anfänger: Lernen Sie Ihre Kamera kennen! Samstags, vier Termine, Leihkameras vorhanden.
d) Kinderchor „Spatzen“ (6–10 Jahre) – Proben dienstags 16 Uhr im Gemeindehaus. Keine Vorkenntnisse nötig.
e) Online-Sprachcafé Spanisch – jeden Abend ab 20 Uhr per Video. Alle Niveaus willkommen.`,
   q:[
    {t:"match", s:"Ordnen Sie jeder Person eine Anzeige zu.", left:[
      "Tobias arbeitet lange und möchte lernen, abends schnell etwas Gesundes ohne Fleisch zu kochen.",
      "Frau Berger ist gerade in Rente gegangen und möchte am Wochenende mit anderen in der Natur sein.",
      "Aylin möchte für ihren Sohn (8) ein Hobby mit Musik finden.",
      "Jonas hat keine Kamera, möchte aber fotografieren lernen.",
      "Petra sucht einen Tanzkurs für sich und ihren Mann."],
     right:["a","b","c","d","e"], a:[0,1,3,2,-1],
     x:"Tobias → a; Frau Berger → b; Aylins Sohn → d; Jonas → c (Leihkameras); Petra → 0, es gibt keinen Tanzkurs."}
   ]},
 { id:"b1-hoeren-1", skill:"L", part:"Hören Teil 2", title:"Durchsage am Bahnhof", min:4, plays:1,
   ins:"Sie hören einen Text einmal. Lösen Sie die Aufgaben.",
   text:`Achtung an Gleis 7: Der Regionalexpress 4521 nach Erfurt, planmäßige Abfahrt 14 Uhr 32, hat heute circa 20 Minuten Verspätung. Grund dafür ist eine Reparatur an der Strecke. Reisende nach Weimar nutzen bitte die Regionalbahn um 14 Uhr 40 von Gleis 3. Wir bitten um Entschuldigung.`,
   q:[
    {t:"tf", s:"Der Zug nach Erfurt fällt heute aus.", a:false, x:"Er hat „circa 20 Minuten Verspätung“, er fällt nicht aus."},
    {t:"mc", s:"Wer nach Weimar möchte, …", o:["wartet an Gleis 7.","fährt um 14:40 Uhr von Gleis 3.","nimmt einen Bus."], a:1, x:"„Regionalbahn um 14 Uhr 40 von Gleis 3.“"}
   ]},
 { id:"b1-hoeren-2", skill:"L", part:"Hören Teil 2", title:"Führung im Stadtmuseum", min:6, plays:1,
   ins:"Sie hören einen Text einmal. Wählen Sie die richtige Lösung a, b oder c.",
   text:`Herzlich willkommen im Stadtmuseum! Mein Name ist Frau Albrecht, und ich begleite Sie heute durch unsere Ausstellung. Die Führung dauert etwa eine Stunde. Wir beginnen im Erdgeschoss mit der Geschichte der Stadt im Mittelalter. Danach gehen wir in den ersten Stock – dort zeigen wir seit März eine neue Ausstellung über die Industrie im 19. Jahrhundert. Bitte beachten Sie: Fotografieren ist erlaubt, aber ohne Blitz. Ihre Taschen und Jacken können Sie kostenlos in den Schließfächern neben der Kasse lassen. Nach der Führung haben Sie noch Zeit für unser Café im Innenhof – mit Ihrer Eintrittskarte bekommen Sie dort zehn Prozent Rabatt.`,
   q:[
    {t:"mc", s:"Die neue Ausstellung …", o:["ist im Erdgeschoss.","zeigt das Mittelalter.","ist im ersten Stock."], a:2, x:"„Danach gehen wir in den ersten Stock – dort zeigen wir … eine neue Ausstellung.“"},
    {t:"mc", s:"Im Museum darf man …", o:["nicht fotografieren.","ohne Blitz fotografieren.","nur mit Erlaubnis fotografieren."], a:1, x:"„Fotografieren ist erlaubt, aber ohne Blitz.“"},
    {t:"mc", s:"Mit der Eintrittskarte …", o:["ist der Kaffee kostenlos.","bekommt man im Café Rabatt.","kann man das Museum zweimal besuchen."], a:1, x:"„Zehn Prozent Rabatt“ im Café."}
   ]},
 { id:"b1-schreiben-1", skill:"W", part:"Schreiben Teil 1", title:"E-Mail an einen Freund: Umzug", min:20, words:[80,100],
   prompt:"Sie sind vor zwei Wochen in eine neue Wohnung umgezogen. Ihr Freund / Ihre Freundin konnte beim Umzug nicht helfen. Schreiben Sie eine E-Mail.",
   points:["Beschreiben Sie: Wie ist die neue Wohnung?","Begründen Sie: Warum sind Sie umgezogen?","Machen Sie einen Vorschlag für einen Besuch."]},
 { id:"b1-schreiben-2", skill:"W", part:"Schreiben Teil 2", title:"Forumsbeitrag: Handys in der Schule", min:25, words:[80,100],
   prompt:"Im Online-Gästebuch einer Fernsehsendung zum Thema „Handyverbot an Schulen“ lesen Sie: „Handys haben in der Schule nichts zu suchen. Die Kinder sollen lernen und in der Pause miteinander reden.“ (Markus, 42). Schreiben Sie Ihre Meinung.",
   points:["Ihre Meinung zum Thema","Gründe und Beispiele aus Ihrer Erfahrung"]},
 { id:"b1-schreiben-3", skill:"W", part:"Schreiben Teil 3", title:"Formelle E-Mail: Termin absagen", min:15, words:[40,60],
   prompt:"Ihre Kursleiterin, Frau Dr. Wagner, hat Sie am Freitag zu einem Gespräch über Ihr Projekt eingeladen. Sie können nicht kommen. Schreiben Sie Frau Dr. Wagner.",
   points:["Höflich absagen","Grund nennen","Neuen Termin vorschlagen"]},
 { id:"b1-sprechen-1", skill:"S", part:"Sprechen Teil 1", title:"Gemeinsam etwas planen: Abschiedsfeier", prep:60, speak:180,
   prompt:"Eine Kollegin aus Ihrem Deutschkurs zieht in eine andere Stadt. Planen Sie zusammen eine kleine Abschiedsfeier.",
   points:["Wann feiern?","Wo feiern?","Essen und Getränke?","Geschenk?","Wer kümmert sich um was?"]},
 { id:"b1-sprechen-2", skill:"S", part:"Sprechen Teil 2", title:"Präsentation: Homeoffice – ja oder nein?", prep:900, speak:180,
   prompt:"Präsentieren Sie das Thema „Arbeiten im Homeoffice – ja oder nein?“ mit fünf Folien.",
   points:["Thema vorstellen","Eigene Situation / Beispiel","Vor- und Nachteile","Situation im Heimatland","Abschluss und Dank"]}
],
B2: [
 { id:"b2-lesen-1", skill:"R", part:"Lesen Teil 2", title:"Viertagewoche: Modell der Zukunft?", min:15,
   ins:"Lesen Sie den Zeitungstext. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
   text:`Seit einem halben Jahr testen rund 45 deutsche Unternehmen die Viertagewoche – bei vollem Lohn. Die Zwischenbilanz fällt überwiegend positiv aus: Die Beschäftigten berichten von weniger Stress und mehr Zeit für Familie und Ehrenamt, während die Produktivität in den meisten Betrieben stabil geblieben ist. Einige Firmen verzeichnen sogar weniger Krankheitstage.

Allerdings lässt sich das Modell nicht auf alle Branchen übertragen. „In der Pflege oder im Einzelhandel, wo Präsenz gefragt ist, braucht man zusätzliches Personal – und genau das fehlt“, gibt die Arbeitsmarktforscherin Dr. Ines Vogt zu bedenken. Zudem setze die Viertagewoche voraus, dass Abläufe konsequent verschlankt würden: Überflüssige Meetings müssten wegfallen, sonst verdichte sich die Arbeit lediglich auf weniger Tage.

Vogt plädiert daher für flexible Lösungen statt starrer Vorgaben. Entscheidend sei, dass Unternehmen und Beschäftigte gemeinsam herausfinden, welches Arbeitszeitmodell zu ihren Aufgaben passe.`,
   q:[
    {t:"mc", s:"Was zeigt die Zwischenbilanz?", o:["Die Produktivität ist stark gesunken.","Die Beschäftigten fühlen sich weniger gestresst.","Die meisten Firmen wollen den Test abbrechen."], a:1, x:"Beschäftigte berichten „von weniger Stress“; die Produktivität blieb stabil."},
    {t:"mc", s:"Warum ist das Modell in der Pflege schwierig?", o:["Weil dort zusätzliches Personal fehlt.","Weil die Löhne zu niedrig sind.","Weil es dort zu viele Meetings gibt."], a:0, x:"Man „braucht zusätzliches Personal – und genau das fehlt“."},
    {t:"mc", s:"Welche Position vertritt Dr. Vogt?", o:["Die Viertagewoche sollte gesetzlich vorgeschrieben werden.","Arbeitszeitmodelle sollten gemeinsam und flexibel gestaltet werden.","Die Viertagewoche funktioniert in keiner Branche."], a:1, x:"Sie „plädiert für flexible Lösungen statt starrer Vorgaben“."}
   ]},
 { id:"b2-lesen-2", skill:"R", part:"Lesen Teil 3", title:"Leserbriefe: Tempolimit auf Autobahnen", min:12,
   ins:"Lesen Sie die Aussagen. Ist die Person für (richtig) oder gegen (falsch) ein Tempolimit?",
   text:`Klaus R.: „Ein Tempolimit von 130 km/h würde sofort CO₂ sparen und kostet praktisch nichts. Dass Deutschland hier eine Ausnahme in Europa ist, kann ich niemandem mehr erklären.“
Miriam S.: „Ich fahre beruflich viel und schätze es, auf freien Strecken zügig voranzukommen. Die Unfallzahlen auf Autobahnen sind ohnehin vergleichsweise niedrig.“
Tobias H.: „Seit ich selbst konsequent 120 fahre, komme ich entspannter an und verbrauche deutlich weniger. Eine allgemeine Regel wäre nur konsequent.“
Erika M.: „Statt neuer Verbote sollte man lieber in Bahn und Ladesäulen investieren. Ein Tempolimit lenkt nur von den eigentlichen Problemen ab.“`,
   q:[
    {t:"tf", s:"Klaus R. ist für ein Tempolimit.", a:true, x:"Er betont CO₂-Einsparung und fehlende Argumente dagegen."},
    {t:"tf", s:"Miriam S. ist für ein Tempolimit.", a:false, x:"Sie schätzt es, „zügig voranzukommen“ – sie ist dagegen."},
    {t:"tf", s:"Tobias H. ist für ein Tempolimit.", a:true, x:"„Eine allgemeine Regel wäre nur konsequent.“"},
    {t:"tf", s:"Erika M. ist für ein Tempolimit.", a:false, x:"Sie hält es für eine Ablenkung „von den eigentlichen Problemen“."}
   ]},
 { id:"b2-hoeren-1", skill:"L", part:"Hören Teil 2", title:"Radiointerview: Urban Gardening", min:8, plays:1,
   ins:"Sie hören ein Interview einmal. Wählen Sie die richtige Lösung.",
   text:`Moderator: Frau Petersen, Sie haben vor fünf Jahren den Gemeinschaftsgarten „Grüne Lücke“ gegründet. Wie kam es dazu?
Petersen: Auf der Brachfläche hinter unserem Wohnblock lag jahrelang nur Müll. Ein paar Nachbarn und ich haben uns gefragt, warum wir daraus nicht etwas Sinnvolles machen. Die Stadt hat uns die Fläche dann kostenlos zur Verfügung gestellt – unter der Bedingung, dass wir sie selbst pflegen.
Moderator: Und wer gärtnert heute bei Ihnen?
Petersen: Inzwischen sind es über sechzig Leute aus zwölf Nationen. Viele hatten vorher keinerlei Erfahrung. Das Schöne ist, dass man voneinander lernt – nicht nur übers Gärtnern.
Moderator: Gibt es auch Konflikte?
Petersen: Natürlich. Vor allem beim Gießen im Sommer, wenn manche in den Urlaub fahren. Wir haben deshalb einen Gießplan eingeführt, und seitdem klappt es deutlich besser.`,
   q:[
    {t:"mc", s:"Wie ist der Garten entstanden?", o:["Die Stadt hat ihn geplant und angelegt.","Nachbarn haben eine vermüllte Fläche umgestaltet.","Eine Firma hat das Grundstück gespendet."], a:1, x:"Auf der Brachfläche „lag jahrelang nur Müll“; Nachbarn ergriffen die Initiative."},
    {t:"mc", s:"Was sagt Frau Petersen über die Gärtner?", o:["Die meisten sind Profis.","Sie kommen aus vielen Ländern und lernen voneinander.","Es sind nur Rentner."], a:1, x:"„Über sechzig Leute aus zwölf Nationen … man lernt voneinander.“"},
    {t:"mc", s:"Wie wurde der Konflikt beim Gießen gelöst?", o:["Mit einem Gießplan.","Mit einer automatischen Bewässerung.","Die Stadt gießt im Sommer."], a:0, x:"„Wir haben deshalb einen Gießplan eingeführt.“"}
   ]},
 { id:"b2-hoeren-2", skill:"L", part:"Hören Teil 4", title:"Vortrag: Schlaf und Lernen", min:8, plays:1,
   ins:"Sie hören einen Vortrag einmal. Sind die Aussagen richtig oder falsch?",
   text:`Meine Damen und Herren, viele Studierende glauben, eine durchgearbeitete Nacht vor der Prüfung sei die beste Vorbereitung. Die Forschung zeigt das Gegenteil. Während des Schlafs, vor allem in den Tiefschlafphasen, festigt das Gehirn das, was wir tagsüber gelernt haben. Wer auf Schlaf verzichtet, kann sich am nächsten Tag zwar vielleicht noch an einzelne Fakten erinnern, aber Zusammenhänge herzustellen fällt deutlich schwerer. Ein kurzer Mittagsschlaf von etwa zwanzig Minuten kann übrigens ebenfalls helfen – länger sollte er allerdings nicht sein, sonst fühlt man sich danach eher benommen.`,
   q:[
    {t:"tf", s:"Laut Vortrag ist eine Nacht ohne Schlaf vor der Prüfung sinnvoll.", a:false, x:"„Die Forschung zeigt das Gegenteil.“"},
    {t:"tf", s:"Im Tiefschlaf wird Gelerntes gefestigt.", a:true, x:"„Vor allem in den Tiefschlafphasen festigt das Gehirn das Gelernte.“"},
    {t:"tf", s:"Ohne Schlaf fällt es schwerer, Zusammenhänge zu erkennen.", a:true, x:"„Zusammenhänge herzustellen fällt deutlich schwerer.“"},
    {t:"tf", s:"Ein Mittagsschlaf sollte mindestens eine Stunde dauern.", a:false, x:"Etwa zwanzig Minuten; länger macht benommen."}
   ]},
 { id:"b2-schreiben-1", skill:"W", part:"Schreiben Teil 1", title:"Forumsbeitrag: Verpackungsmüll", min:50, words:[150,200],
   prompt:"Sie schreiben einen Beitrag in einem Online-Forum zum Thema „Sollten Einwegverpackungen verboten werden?“",
   points:["Äußern Sie Ihre Meinung.","Nennen Sie Gründe für Ihre Meinung.","Nennen Sie Vorteile einer anderen Lösung.","Beschreiben Sie die Situation in Ihrem Heimatland."]},
 { id:"b2-schreiben-2", skill:"W", part:"Schreiben Teil 2", title:"Beschwerde an das Fitnessstudio", min:25, words:[100,150],
   prompt:"Ihr Fitnessstudio hat ohne Ankündigung die Öffnungszeiten verkürzt und den Beitrag erhöht. Schreiben Sie an die Studioleitung, Herrn Becker.",
   points:["Beschreiben Sie das Problem.","Erklären Sie, welche Folgen das für Sie hat.","Fordern Sie eine Lösung.","Achten Sie auf einen höflichen, formellen Ton."]},
 { id:"b2-sprechen-1", skill:"S", part:"Sprechen Teil 1", title:"Vortrag: Soziale Medien im Alltag", prep:900, speak:240,
   prompt:"Halten Sie einen Vortrag zum Thema „Soziale Medien – Fluch oder Segen?“.",
   points:["Situation beschreiben","Vor- und Nachteile abwägen","Eigene Erfahrungen","Situation im Heimatland","Eigene Meinung und Schluss"]},
 { id:"b2-sprechen-2", skill:"S", part:"Sprechen Teil 2", title:"Diskussion: Pflichtjahr nach der Schule", prep:60, speak:300,
   prompt:"Diskutieren Sie: Sollten junge Menschen nach der Schule ein soziales Pflichtjahr machen?",
   points:["Position beziehen","Argumente begründen","Auf Gegenargumente reagieren","Zu einem Ergebnis kommen"]}
],
C1: [
 { id:"c1-lesen-1", skill:"R", part:"Lesen Teil 1", title:"Sachtext: Die Ökonomie der Aufmerksamkeit", min:20,
   ins:"Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
   text:`In einer Welt, in der Informationen im Überfluss vorhanden sind, wird Aufmerksamkeit zum knappen Gut. Diese These, die der Ökonom Herbert Simon bereits in den 1970er-Jahren formulierte, hat durch die Digitalisierung eine neue Brisanz erhalten. Plattformen konkurrieren nicht primär um unser Geld, sondern um unsere Zeit – und ihre Geschäftsmodelle sind darauf ausgerichtet, die Verweildauer der Nutzer zu maximieren.

Kritiker bemängeln, dass dabei gezielt psychologische Mechanismen ausgenutzt würden: Unregelmäßige Belohnungen, etwa in Form von Benachrichtigungen oder „Likes“, aktivieren ähnliche neuronale Prozesse wie Glücksspiele. Befürworter halten dem entgegen, dass Nutzer keineswegs passive Opfer seien, sondern durchaus in der Lage, ihren Medienkonsum selbstbestimmt zu steuern.

Die Wahrheit dürfte, wie so oft, dazwischen liegen. Zwar ist individuelle Medienkompetenz unverzichtbar, doch sie allein genügt nicht, wenn die Rahmenbedingungen systematisch auf Ablenkung angelegt sind. Insofern greift die Forderung zu kurz, die Verantwortung ausschließlich beim Einzelnen zu verorten.`,
   q:[
    {t:"mc", s:"Worum konkurrieren digitale Plattformen laut Text vor allem?", o:["Um das Geld der Nutzer","Um die Zeit der Nutzer","Um neue Werbekunden"], a:1, x:"„Plattformen konkurrieren nicht primär um unser Geld, sondern um unsere Zeit.“"},
    {t:"mc", s:"Was vergleichen Kritiker mit Glücksspiel?", o:["Die Kosten von Abonnements","Unregelmäßige Belohnungen wie Likes","Die Werbung zwischen Videos"], a:1, x:"Unregelmäßige Belohnungen „aktivieren ähnliche neuronale Prozesse wie Glücksspiele“."},
    {t:"mc", s:"Welche Schlussfolgerung zieht der Autor?", o:["Allein die Nutzer sind verantwortlich.","Medienkompetenz ist überflüssig.","Individuelle Kompetenz reicht ohne bessere Rahmenbedingungen nicht aus."], a:2, x:"Medienkompetenz „allein genügt nicht“; die Verantwortung nur beim Einzelnen zu sehen, „greift zu kurz“."}
   ]},
 { id:"c1-lesen-2", skill:"R", part:"Lesen Teil 2", title:"Kommentar: Wohnungsnot in Großstädten", min:15,
   ins:"Lesen Sie den Kommentar. Sind die Aussagen im Sinne des Autors richtig oder falsch?",
   text:`Die Debatte um bezahlbaren Wohnraum leidet seit Jahren unter einem Denkfehler: Man glaubt, das Problem allein durch Mietpreisbremsen lösen zu können. Diese mögen kurzfristig Mieter entlasten, schaffen jedoch keine einzige neue Wohnung. Im Gegenteil – private Investoren ziehen sich vielerorts zurück, weil sich der Neubau für sie kaum noch rechnet.

Ebenso wenig überzeugt die Vorstellung, der Markt werde es schon richten. Ohne staatlich geförderten Wohnungsbau bleiben gerade Geringverdienende auf der Strecke. Notwendig wäre ein Bündel von Maßnahmen: schnellere Genehmigungsverfahren, die Umwandlung leerstehender Büroflächen und eine Bodenpolitik, die Spekulation eindämmt.`,
   q:[
    {t:"tf", s:"Der Autor hält Mietpreisbremsen für die alleinige Lösung.", a:false, x:"Das sei gerade „ein Denkfehler“."},
    {t:"tf", s:"Mietpreisbremsen führen laut Autor nicht zu neuen Wohnungen.", a:true, x:"Sie „schaffen jedoch keine einzige neue Wohnung“."},
    {t:"tf", s:"Der Autor vertraut darauf, dass der freie Markt das Problem löst.", a:false, x:"„Ebenso wenig überzeugt die Vorstellung, der Markt werde es schon richten.“"},
    {t:"tf", s:"Er fordert eine Kombination verschiedener Maßnahmen.", a:true, x:"„Notwendig wäre ein Bündel von Maßnahmen.“"}
   ]},
 { id:"c1-hoeren-1", skill:"L", part:"Hören Teil 1", title:"Podcast: Mehrsprachigkeit im Kindesalter", min:8, plays:1,
   ins:"Sie hören einen Ausschnitt aus einem Podcast einmal. Wählen Sie die richtige Lösung.",
   text:`Lange Zeit hielt sich das Vorurteil, Kinder würden durch eine zweisprachige Erziehung überfordert und sprächen am Ende keine Sprache richtig. Inzwischen weiß man: Das Gegenteil ist der Fall. Zwar kann es vorkommen, dass mehrsprachige Kinder anfangs Wörter aus beiden Sprachen mischen, doch das ist kein Zeichen von Verwirrung, sondern eine ganz normale Strategie. Entscheidend ist vielmehr, dass beide Sprachen regelmäßig und in bedeutsamen Situationen verwendet werden. Ein paar Minuten Vokabeltraining pro Woche reichen dafür nicht aus. Studien deuten außerdem darauf hin, dass mehrsprachige Kinder Vorteile beim Wechseln zwischen Aufgaben haben – wobei die Forschung hier noch nicht ganz einig ist.`,
   q:[
    {t:"mc", s:"Was sagt die Sprecherin über das Mischen von Sprachen?", o:["Es zeigt, dass das Kind überfordert ist.","Es ist eine normale Strategie.","Man sollte es sofort korrigieren."], a:1, x:"Das sei „kein Zeichen von Verwirrung, sondern eine ganz normale Strategie“."},
    {t:"mc", s:"Was ist für den Erwerb beider Sprachen entscheidend?", o:["Regelmäßiger Gebrauch in bedeutsamen Situationen","Tägliches Vokabeltraining","Ein früher Sprachkurs"], a:0, x:"Beide Sprachen müssen „regelmäßig und in bedeutsamen Situationen“ verwendet werden."},
    {t:"mc", s:"Wie beurteilt sie die Studien zum Aufgabenwechsel?", o:["Sie sind eindeutig widerlegt.","Die Ergebnisse sind noch nicht ganz einheitlich.","Sie betreffen nur Erwachsene."], a:1, x:"„Wobei die Forschung hier noch nicht ganz einig ist.“"}
   ]},
 { id:"c1-hoeren-2", skill:"L", part:"Hören Teil 2", title:"Vortrag: Künstliche Intelligenz in der Medizin", min:8, plays:1,
   ins:"Sie hören einen Vortrag einmal. Wählen Sie die richtige Lösung.",
   text:`Algorithmen erkennen auf Röntgenbildern mittlerweile bestimmte Auffälligkeiten mit einer Treffsicherheit, die der erfahrener Radiologen kaum nachsteht. Daraus abzuleiten, Ärztinnen und Ärzte würden bald überflüssig, wäre jedoch voreilig. Die Systeme sind auf eng umrissene Aufgaben trainiert; sobald ein Fall von den Trainingsdaten abweicht, sinkt ihre Zuverlässigkeit erheblich. Hinzu kommt die Frage der Haftung: Wer trägt die Verantwortung, wenn eine automatisierte Diagnose falsch ist? Am vielversprechendsten erscheint daher ein Modell, in dem die Software als zweites Paar Augen dient – die letzte Entscheidung aber beim Menschen bleibt.`,
   q:[
    {t:"mc", s:"Wann sinkt die Zuverlässigkeit der Systeme?", o:["Bei sehr klaren Röntgenbildern","Wenn ein Fall von den Trainingsdaten abweicht","Bei erfahrenen Radiologen"], a:1, x:"„Sobald ein Fall von den Trainingsdaten abweicht, sinkt ihre Zuverlässigkeit.“"},
    {t:"mc", s:"Welches Problem nennt der Sprecher außerdem?", o:["Die Haftung bei Fehldiagnosen","Die hohen Stromkosten","Den Datenschutz der Ärzte"], a:0, x:"„Hinzu kommt die Frage der Haftung.“"},
    {t:"mc", s:"Welches Modell hält er für am sinnvollsten?", o:["KI ersetzt die Radiologen.","KI unterstützt, der Mensch entscheidet.","KI wird nur in der Forschung eingesetzt."], a:1, x:"Die Software als „zweites Paar Augen“, die Entscheidung bleibt beim Menschen."}
   ]},
 { id:"c1-schreiben-1", skill:"W", part:"Schreiben Teil 1", title:"Stellungnahme: Studiengebühren", min:65, words:[230,280],
   prompt:"Schreiben Sie einen Forumsbeitrag zum Thema „Sollte das Studium in Deutschland kostenpflichtig werden?“",
   points:["Geben Sie die Diskussion wieder.","Wägen Sie Argumente dafür und dagegen ab.","Beziehen Sie begründet Stellung.","Schlagen Sie eine alternative Lösung vor."]},
 { id:"c1-schreiben-2", skill:"W", part:"Schreiben Teil 2", title:"Formeller Brief: Anfrage an das Prüfungsamt", min:25, words:[120,150],
   prompt:"Sie haben eine Prüfung wegen Krankheit verpasst. Schreiben Sie an das Prüfungsamt Ihrer Hochschule.",
   points:["Sachverhalt schildern","Um einen Nachholtermin bitten","Nachweis ankündigen","Angemessenes Register und Briefkonventionen"]},
 { id:"c1-sprechen-1", skill:"S", part:"Sprechen Teil 1", title:"Präsentation: Grundeinkommen", prep:900, speak:240,
   prompt:"Halten Sie eine Präsentation: „Bedingungsloses Grundeinkommen – Chance oder Risiko?“",
   points:["Einleitung und Gliederung","Argumente gewichten","Beispiele und Daten","Fazit mit eigener Position","Fragen beantworten"]},
 { id:"c1-sprechen-2", skill:"S", part:"Sprechen Teil 2", title:"Diskussion: Innenstädte autofrei?", prep:60, speak:300,
   prompt:"Diskutieren Sie, ob Innenstädte für private Autos gesperrt werden sollten, und einigen Sie sich auf einen Vorschlag.",
   points:["Standpunkt differenziert darstellen","Einwände aufgreifen","Kompromiss aushandeln","Ergebnis zusammenfassen"]}
]
};
