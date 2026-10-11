// Additional reading (Lesen) and listening (Hören) tasks: two of each per level.
// Original practice texts in Goethe exam format.
EXAMS.A1.push(
 { id:"a1-lesen-3", skill:"R", part:"Lesen Teil 2", title:"Webseite: Volkshochschule", min:6,
   ins:"Lesen Sie den Text von der Internetseite. Sind die Aussagen richtig oder falsch?",
   text:`Volkshochschule Bremen – Kurse im Frühling

Deutsch A1 (Anfänger): Montag und Mittwoch, 18 bis 20 Uhr. 12 Wochen. Preis: 180 €.
Kochen für Anfänger: Samstag, 10 bis 14 Uhr. Bitte bringen Sie eine Schürze mit.
Yoga: Dienstag, 9 bis 10 Uhr. Für alle Altersgruppen.

Anmeldung: online oder im Büro, Raum 4 (Montag bis Freitag, 8 bis 16 Uhr).`,
   q:[
    {t:"tf", s:"Der Deutschkurs ist zweimal pro Woche.", a:true, x:"Montag und Mittwoch – also zweimal pro Woche."},
    {t:"tf", s:"Der Kochkurs ist am Sonntag.", a:false, x:"Der Kochkurs ist am Samstag."},
    {t:"tf", s:"Für den Kochkurs braucht man eine Schürze.", a:true, x:"„Bitte bringen Sie eine Schürze mit.“"},
    {t:"tf", s:"Man kann sich am Samstag im Büro anmelden.", a:false, x:"Das Büro ist nur Montag bis Freitag geöffnet."}
   ]},
 { id:"a1-lesen-4", skill:"R", part:"Lesen Teil 1", title:"Nachricht von Julia", min:5,
   ins:"Lesen Sie die Nachricht. Wählen Sie die richtige Antwort.",
   text:`Hi Sven,

ich bin krank und kann heute nicht zur Arbeit kommen. Ich habe Fieber und Kopfschmerzen. Morgen gehe ich zum Arzt. Kannst du bitte Herrn Becker sagen, dass ich nicht komme? Die Präsentation für Freitag ist fertig. Sie ist auf meinem Computer im Ordner „Projekt“.

Danke!
Julia`,
   q:[
    {t:"mc", s:"Warum kommt Julia nicht zur Arbeit?", o:["Sie hat Urlaub.","Sie ist krank.","Sie hat einen Termin."], a:1, x:"„Ich bin krank … Ich habe Fieber und Kopfschmerzen.“"},
    {t:"mc", s:"Wann geht Julia zum Arzt?", o:["Heute","Morgen","Am Freitag"], a:1, x:"„Morgen gehe ich zum Arzt.“"},
    {t:"mc", s:"Wo ist die Präsentation?", o:["Auf Julias Computer","Bei Herrn Becker","Bei Sven"], a:0, x:"„Sie ist auf meinem Computer im Ordner ‚Projekt‘.“"}
   ]}
);
EXAMS.A1.splice(4,0,
 { id:"a1-hoeren-3", skill:"L", part:"Hören Teil 2", title:"Durchsage am Flughafen", min:3, plays:2,
   ins:"Sie hören eine Durchsage zweimal. Wählen Sie die richtige Antwort.",
   text:`Achtung, bitte! Der Flug LH 204 nach Wien startet heute nicht von Gate B12, sondern von Gate C3. Die Abflugzeit ist jetzt 15 Uhr 10. Bitte gehen Sie zu Gate C3. Vielen Dank.`,
   q:[
    {t:"mc", s:"Von welchem Gate startet der Flug?", o:["B12","C3","B3"], a:1, x:"„Nicht von Gate B12, sondern von Gate C3.“"},
    {t:"mc", s:"Wann ist der Abflug?", o:["Um 15:10 Uhr","Um 10:15 Uhr","Um 12:04 Uhr"], a:0, x:"„Die Abflugzeit ist jetzt 15 Uhr 10.“"}
   ]},
 { id:"a1-hoeren-4", skill:"L", part:"Hören Teil 1", title:"Termin beim Arzt", min:4, plays:2,
   ins:"Sie hören ein Gespräch zweimal. Sind die Aussagen richtig oder falsch?",
   text:`Praxis: Praxis Dr. Klein, guten Morgen.
Patient: Guten Morgen, hier ist Peter Lang. Ich möchte einen Termin, bitte. Ich habe Rückenschmerzen.
Praxis: Können Sie am Donnerstag um neun Uhr kommen?
Patient: Donnerstag geht leider nicht, da arbeite ich. Geht es am Freitag?
Praxis: Ja, am Freitag um elf Uhr.
Patient: Gut, das passt. Vielen Dank!
Praxis: Bitte bringen Sie Ihre Versichertenkarte mit.`,
   q:[
    {t:"tf", s:"Herr Lang hat Kopfschmerzen.", a:false, x:"Er hat Rückenschmerzen."},
    {t:"tf", s:"Herr Lang kommt am Freitag um 11 Uhr.", a:true, x:"„Ja, am Freitag um elf Uhr.“ – „Gut, das passt.“"},
    {t:"tf", s:"Er soll seine Versichertenkarte mitbringen.", a:true, x:"„Bitte bringen Sie Ihre Versichertenkarte mit.“"}
   ]}
);

EXAMS.A2.splice(2,0,
 { id:"a2-lesen-3", skill:"R", part:"Lesen Teil 2", title:"Infotafel im Einkaufszentrum", min:6,
   ins:"Lesen Sie die Infotafel. Wohin gehen die Personen? Wählen Sie die richtige Etage.",
   text:`Einkaufszentrum „Am Markt“ – Wegweiser

Untergeschoss: Supermarkt, Getränke, Parkhaus
Erdgeschoss: Apotheke, Bäckerei, Information, Blumen
1. Stock: Damen- und Herrenmode, Schuhe
2. Stock: Elektronik, Handys, Bücher, Schreibwaren
3. Stock: Kindermode, Spielwaren, Restaurant „Panorama“`,
   q:[
    {t:"mc", s:"Sie möchten ein neues Ladekabel für Ihr Handy kaufen.", o:["Erdgeschoss","2. Stock","3. Stock"], a:1, x:"Elektronik und Handys sind im 2. Stock."},
    {t:"mc", s:"Sie brauchen Medikamente gegen Husten.", o:["Untergeschoss","Erdgeschoss","1. Stock"], a:1, x:"Die Apotheke ist im Erdgeschoss."},
    {t:"mc", s:"Sie suchen ein Geschenk für ein Kind (5 Jahre).", o:["1. Stock","2. Stock","3. Stock"], a:2, x:"Spielwaren sind im 3. Stock."},
    {t:"mc", s:"Sie möchten Wasser und Saft für eine Party kaufen.", o:["Untergeschoss","Erdgeschoss","3. Stock"], a:0, x:"Getränke gibt es im Untergeschoss."}
   ]},
 { id:"a2-lesen-4", skill:"R", part:"Lesen Teil 3", title:"E-Mail: Einladung zur Hochzeit", min:8,
   ins:"Lesen Sie die E-Mail. Wählen Sie die richtige Lösung.",
   text:`Liebe Frau Özdemir,

mein Verlobter Lukas und ich heiraten am 14. Juni! Wir möchten Sie und Ihren Mann herzlich einladen. Die Trauung ist um 14 Uhr im Standesamt am Rathausplatz. Danach feiern wir im Gasthaus „Zur Linde“ in Neustadt. Dort gibt es Kaffee und Kuchen und am Abend ein Buffet.

Bitte sagen Sie uns bis zum 1. Mai, ob Sie kommen können. Geschenke sind nicht nötig – wir sparen für unsere Hochzeitsreise nach Portugal, deshalb freuen wir uns über einen kleinen Beitrag.

Herzliche Grüße
Anna Hoffmann`,
   q:[
    {t:"mc", s:"Wo ist die Trauung?", o:["Im Gasthaus „Zur Linde“","Im Standesamt","In Portugal"], a:1, x:"„Die Trauung ist um 14 Uhr im Standesamt am Rathausplatz.“"},
    {t:"mc", s:"Bis wann soll Frau Özdemir antworten?", o:["Bis zum 1. Mai","Bis zum 14. Juni","Bis zum 1. Juni"], a:0, x:"„Bitte sagen Sie uns bis zum 1. Mai …“"},
    {t:"mc", s:"Was wünschen sich Anna und Lukas?", o:["Bücher über Portugal","Nichts, nur Blumen","Geld für ihre Reise"], a:2, x:"Sie sparen für die Hochzeitsreise und freuen sich „über einen kleinen Beitrag“."}
   ]}
);
EXAMS.A2.splice(6,0,
 { id:"a2-hoeren-3", skill:"L", part:"Hören Teil 2", title:"Radio: Wetter und Verkehr", min:4, plays:1,
   ins:"Sie hören eine Radiomeldung einmal. Wählen Sie die richtige Lösung.",
   text:`Und jetzt das Wetter für das Wochenende: Am Samstag scheint im Norden die Sonne, bei Temperaturen bis 24 Grad. Im Süden gibt es am Nachmittag Gewitter. Am Sonntag wird es überall kühler und es regnet. Und noch eine Verkehrsmeldung: Auf der A7 zwischen Hamburg und Hannover gibt es wegen eines Unfalls fünf Kilometer Stau. Bitte fahren Sie langsam.`,
   q:[
    {t:"mc", s:"Wie ist das Wetter am Samstag im Süden?", o:["Sonnig","Am Nachmittag gibt es Gewitter","Es schneit"], a:1, x:"„Im Süden gibt es am Nachmittag Gewitter.“"},
    {t:"mc", s:"Was passiert am Sonntag?", o:["Es wird wärmer.","Es regnet und wird kühler.","Es ist überall sonnig."], a:1, x:"„Am Sonntag wird es überall kühler und es regnet.“"},
    {t:"mc", s:"Warum gibt es Stau auf der A7?", o:["Wegen einer Baustelle","Wegen eines Unfalls","Wegen des Wetters"], a:1, x:"„Wegen eines Unfalls fünf Kilometer Stau.“"}
   ]},
 { id:"a2-hoeren-4", skill:"L", part:"Hören Teil 3", title:"Im Reisebüro", min:5, plays:2,
   ins:"Sie hören ein Gespräch zweimal. Sind die Aussagen richtig oder falsch?",
   text:`Mitarbeiterin: Guten Tag, wie kann ich Ihnen helfen?
Kunde: Ich möchte im August mit meiner Familie Urlaub am Meer machen. Wir sind zwei Erwachsene und zwei Kinder.
Mitarbeiterin: Wie lange möchten Sie bleiben?
Kunde: Zwei Wochen. Und wir möchten nicht fliegen, die Kinder mögen lieber Zug fahren.
Mitarbeiterin: Dann empfehle ich Ihnen die Insel Rügen. Mit dem Zug sind Sie in vier Stunden da. Ich habe hier eine Ferienwohnung direkt am Strand, für 95 Euro pro Nacht.
Kunde: Das klingt gut. Kann ich das noch mit meiner Frau besprechen und morgen anrufen?
Mitarbeiterin: Natürlich.`,
   q:[
    {t:"tf", s:"Die Familie möchte im August verreisen.", a:true, x:"„Ich möchte im August … Urlaub am Meer machen.“"},
    {t:"tf", s:"Die Familie möchte mit dem Flugzeug reisen.", a:false, x:"„Wir möchten nicht fliegen, die Kinder mögen lieber Zug fahren.“"},
    {t:"tf", s:"Die Ferienwohnung kostet 95 Euro pro Woche.", a:false, x:"Sie kostet 95 Euro pro Nacht."},
    {t:"tf", s:"Der Mann bucht die Wohnung sofort.", a:false, x:"Er möchte es mit seiner Frau besprechen und morgen anrufen."}
   ]}
);

EXAMS.B1.splice(3,0,
 { id:"b1-lesen-4", skill:"R", part:"Lesen Teil 4", title:"Leserbriefe: Sollen Läden sonntags öffnen?", min:12,
   ins:"Lesen Sie die Texte. Ist die Person für eine Sonntagsöffnung? Wählen Sie richtig (= dafür) oder falsch (= dagegen).",
   text:`Stefan, 34: „Ich arbeite in der Woche bis 19 Uhr und habe kaum Zeit zum Einkaufen. Wenn die Geschäfte auch sonntags offen wären, könnte ich ganz in Ruhe einkaufen. In anderen Ländern ist das ganz normal.“

Gabriele, 58: „Ich arbeite seit 25 Jahren im Einzelhandel. Der Sonntag ist der einzige Tag, an dem meine ganze Familie zusammen ist. Den möchte ich mir nicht nehmen lassen.“

Murat, 22: „Als Student würde ich gern sonntags in einem Geschäft jobben. Die Bezahlung am Wochenende ist meistens besser, und unter der Woche habe ich Vorlesungen.“

Ingrid, 71: „Der Sonntag sollte ein Tag der Ruhe bleiben. Man muss nicht jeden Tag konsumieren. Lieber gehe ich mit meinen Enkeln spazieren.“`,
   q:[
    {t:"tf", s:"Stefan ist für eine Sonntagsöffnung.", a:true, x:"Er hätte dann Zeit, „ganz in Ruhe“ einzukaufen."},
    {t:"tf", s:"Gabriele ist für eine Sonntagsöffnung.", a:false, x:"Der Sonntag ist ihr Familientag – sie ist dagegen."},
    {t:"tf", s:"Murat ist für eine Sonntagsöffnung.", a:true, x:"Er möchte sonntags jobben, weil die Bezahlung besser ist."},
    {t:"tf", s:"Ingrid ist für eine Sonntagsöffnung.", a:false, x:"„Der Sonntag sollte ein Tag der Ruhe bleiben.“"}
   ]},
 { id:"b1-lesen-5", skill:"R", part:"Lesen Teil 5", title:"Hausordnung: Fitnessstudio", min:8,
   ins:"Lesen Sie die Hausordnung. Wählen Sie die richtige Lösung a, b oder c.",
   text:`Hausordnung FitPoint

1. Das Studio ist Montag bis Freitag von 6 bis 23 Uhr, am Wochenende von 8 bis 20 Uhr geöffnet.
2. Bitte benutzen Sie bei allen Geräten ein Handtuch. Tragen Sie saubere Sportschuhe, die Sie nicht draußen getragen haben.
3. Getränke sind im Trainingsbereich nur in verschlossenen Flaschen erlaubt. Essen ist nur im Bistro gestattet.
4. Die Schränke in der Umkleide sind nur während des Trainings zu benutzen. Schränke, die nach Schließung noch verschlossen sind, werden geöffnet.
5. Kurse müssen mindestens 24 Stunden vorher über die App gebucht werden. Wer nicht absagt, muss 5 € bezahlen.`,
   q:[
    {t:"mc", s:"Was gilt für die Schuhe?", o:["Man darf barfuß trainieren.","Man braucht saubere Schuhe nur für das Training.","Man kann mit Straßenschuhen trainieren."], a:1, x:"Saubere Sportschuhe, „die Sie nicht draußen getragen haben“."},
    {t:"mc", s:"Was darf man im Trainingsbereich?", o:["Ein Brötchen essen","Aus einer verschlossenen Flasche trinken","Kaffee aus einer Tasse trinken"], a:1, x:"Getränke „nur in verschlossenen Flaschen“; Essen nur im Bistro."},
    {t:"mc", s:"Was passiert, wenn man einen gebuchten Kurs nicht absagt?", o:["Man muss 5 € bezahlen.","Man darf keine Kurse mehr buchen.","Nichts."], a:0, x:"„Wer nicht absagt, muss 5 € bezahlen.“"}
   ]}
);
EXAMS.B1.splice(7,0,
 { id:"b1-hoeren-3", skill:"L", part:"Hören Teil 3", title:"Gespräch im Café: Neuer Job", min:6, plays:1,
   ins:"Sie hören ein Gespräch einmal. Sind die Aussagen richtig oder falsch?",
   text:`Sabine: Hallo Tim! Ich habe gehört, du hast einen neuen Job?
Tim: Ja, seit drei Wochen arbeite ich bei einer Softwarefirma in Köln. Vorher war ich ja bei der Bank.
Sabine: Und, wie gefällt es dir?
Tim: Eigentlich super. Die Kollegen sind sehr nett, und ich kann zwei Tage pro Woche im Homeoffice arbeiten. Nur der Weg ist lang – mit dem Zug brauche ich über eine Stunde.
Sabine: Willst du nicht nach Köln ziehen?
Tim: Darüber denke ich nach. Aber die Mieten dort sind sehr hoch, und meine Freundin hat ihre Arbeit hier in Bonn.
Sabine: Verstehe. Und verdienst du mehr als vorher?
Tim: Ein bisschen weniger, ehrlich gesagt. Aber die Arbeit macht mir viel mehr Spaß.`,
   q:[
    {t:"tf", s:"Tim hat früher bei einer Bank gearbeitet.", a:true, x:"„Vorher war ich ja bei der Bank.“"},
    {t:"tf", s:"Tim arbeitet jeden Tag im Büro.", a:false, x:"Er kann „zwei Tage pro Woche im Homeoffice arbeiten“."},
    {t:"tf", s:"Tim ist schon nach Köln umgezogen.", a:false, x:"Er denkt darüber nach; die Mieten sind hoch und seine Freundin arbeitet in Bonn."},
    {t:"tf", s:"Tim verdient jetzt weniger als vorher.", a:true, x:"„Ein bisschen weniger, ehrlich gesagt.“"}
   ]},
 { id:"b1-hoeren-4", skill:"L", part:"Hören Teil 4", title:"Radiodiskussion: Haustiere in der Stadt", min:8, plays:2,
   ins:"Sie hören eine Diskussion zweimal. Wer sagt was? Wählen Sie die richtige Person.",
   text:`Moderatorin: Willkommen zu unserer Sendung! Heute geht es um Hunde in der Stadt. Bei mir sind Frau Roth vom Tierschutzverein und Herr Weiß, Vorsitzender eines Mietervereins.
Frau Roth: Hunde tun Menschen gut, besonders älteren Menschen, die allein leben. Sie bringen Bewegung und Kontakte in den Alltag.
Herr Weiß: Das stimmt schon. Aber viele Nachbarn beschweren sich über Bellen und Schmutz im Treppenhaus. Vermieter sollten deshalb mitentscheiden dürfen.
Frau Roth: Wichtig ist, dass Hundebesitzer gut informiert sind. Wir bieten deshalb kostenlose Kurse an.
Moderatorin: Und was halten Sie von einer höheren Hundesteuer?
Herr Weiß: Davon halte ich viel. Mit dem Geld könnte die Stadt mehr Hundewiesen bauen.
Frau Roth: Das sehe ich anders. Dann geben die Leute ihre Tiere ins Tierheim, weil sie die Steuer nicht bezahlen können.`,
   q:[
    {t:"mc", s:"Wer sagt, dass Hunde besonders Senioren helfen?", o:["Die Moderatorin","Frau Roth","Herr Weiß"], a:1, x:"Frau Roth: „besonders älteren Menschen, die allein leben“."},
    {t:"mc", s:"Wer möchte, dass Vermieter mitentscheiden?", o:["Die Moderatorin","Frau Roth","Herr Weiß"], a:2, x:"Herr Weiß: „Vermieter sollten deshalb mitentscheiden dürfen.“"},
    {t:"mc", s:"Wer ist gegen eine höhere Hundesteuer?", o:["Die Moderatorin","Frau Roth","Herr Weiß"], a:1, x:"Frau Roth: „Das sehe ich anders …“"}
   ]}
);

EXAMS.B2.splice(2,0,
 { id:"b2-lesen-3", skill:"R", part:"Lesen Teil 1", title:"Erfahrungsberichte: Auslandsjahr", min:15,
   ins:"Lesen Sie die Texte. Zu welcher Person passt die Aussage? Ordnen Sie zu.",
   text:`a) Lea (Neuseeland): Am Anfang hatte ich großes Heimweh und wollte nach drei Wochen sogar abbrechen. Heute bin ich froh, dass ich geblieben bin – ich bin viel selbstständiger geworden.
b) Jonas (Kanada): Mein Gastvater war Biologe und hat mich oft zu seinen Forschungsreisen mitgenommen. Dadurch habe ich gemerkt, dass ich später selbst in diesem Bereich studieren möchte.
c) Mira (Japan): Die Sprache war eine echte Herausforderung. Obwohl ich vorher zwei Jahre Japanisch gelernt hatte, habe ich in den ersten Monaten kaum etwas verstanden.
d) Felix (Chile): Ich habe neben der Schule ehrenamtlich in einem Kinderheim gearbeitet. Diese Erfahrung hat meinen Blick auf soziale Ungleichheit verändert.`,
   q:[
    {t:"match", s:"Ordnen Sie zu. Eine Aussage passt zu keiner Person (0).", left:[
      "Diese Person hat durch das Auslandsjahr ihren Berufswunsch gefunden.",
      "Diese Person hatte trotz Vorbereitung große sprachliche Probleme.",
      "Diese Person hat sich sozial engagiert.",
      "Diese Person hätte das Jahr fast vorzeitig beendet.",
      "Diese Person hat ihre Gastfamilie mehrmals gewechselt."],
     right:["a","b","c","d"], a:[1,2,3,0,-1],
     x:"Berufswunsch → Jonas (b); Sprachprobleme → Mira (c); Engagement → Felix (d); fast abgebrochen → Lea (a); Gastfamilie gewechselt → niemand (0)."}
   ]},
 { id:"b2-lesen-4", skill:"R", part:"Lesen Teil 4", title:"Fachtext: Mikroplastik im Alltag", min:15,
   ins:"Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
   text:`Mikroplastik – also Kunststoffteilchen, die kleiner als fünf Millimeter sind – findet sich inzwischen fast überall: im Meer, im Boden und sogar im Trinkwasser. Lange Zeit galten vor allem Kosmetikprodukte wie Peelings als Hauptquelle. Neuere Untersuchungen zeigen jedoch, dass der größte Teil durch den Abrieb von Autoreifen entsteht, gefolgt von synthetischer Kleidung, die beim Waschen Fasern verliert.

Welche Folgen Mikroplastik für die menschliche Gesundheit hat, ist noch nicht abschließend geklärt. Fest steht allerdings, dass sich an den Teilchen Schadstoffe anlagern können, die dann über die Nahrungskette weitergegeben werden.

Verbraucher können durchaus etwas tun: Kleidung seltener und bei niedrigeren Temperaturen waschen, spezielle Waschbeutel verwenden oder häufiger das Fahrrad statt des Autos nehmen. Experten betonen jedoch, dass das Problem ohne strengere Vorgaben für die Industrie nicht zu lösen sei.`,
   q:[
    {t:"mc", s:"Was ist laut neueren Untersuchungen die größte Quelle für Mikroplastik?", o:["Kosmetikprodukte","Abrieb von Autoreifen","Plastikflaschen"], a:1, x:"„Der größte Teil entsteht durch den Abrieb von Autoreifen.“"},
    {t:"mc", s:"Was weiß man über die Folgen für die Gesundheit?", o:["Sie sind vollständig erforscht.","Sie sind noch nicht abschließend geklärt.","Es gibt keine Risiken."], a:1, x:"„… ist noch nicht abschließend geklärt.“"},
    {t:"mc", s:"Welche Meinung vertreten die Experten?", o:["Verbraucher können das Problem allein lösen.","Die Industrie braucht strengere Regeln.","Man sollte gar keine synthetische Kleidung mehr kaufen."], a:1, x:"Ohne „strengere Vorgaben für die Industrie“ sei das Problem nicht zu lösen."}
   ]}
);
EXAMS.B2.splice(6,0,
 { id:"b2-hoeren-3", skill:"L", part:"Hören Teil 1", title:"Kurze Gespräche am Arbeitsplatz", min:6, plays:1,
   ins:"Sie hören kurze Texte einmal. Wählen Sie die richtige Lösung.",
   text:`Frau Krause: Herr Demir, haben Sie kurz Zeit? Der Kunde aus München hat angerufen. Er möchte die Lieferung nicht am Montag, sondern erst am Mittwoch haben, weil sein Lager umgebaut wird.
Herr Demir: Kein Problem, ich gebe der Logistik Bescheid. Aber dann müssen wir die Rechnung auch neu ausstellen, oder?
Frau Krause: Nein, die Rechnung bleibt gleich. Nur das Lieferdatum ändert sich.
Herr Demir: Alles klar. Ach, und noch etwas: Das Teammeeting morgen fällt aus, weil Frau Schubert krank ist. Wir holen es nächste Woche nach.`,
   q:[
    {t:"mc", s:"Warum möchte der Kunde die Lieferung später?", o:["Er ist im Urlaub.","Sein Lager wird umgebaut.","Die Rechnung ist falsch."], a:1, x:"„… weil sein Lager umgebaut wird.“"},
    {t:"mc", s:"Was passiert mit der Rechnung?", o:["Sie wird neu ausgestellt.","Sie bleibt unverändert.","Sie wird storniert."], a:1, x:"„Die Rechnung bleibt gleich.“"},
    {t:"mc", s:"Was ist mit dem Teammeeting?", o:["Es findet wie geplant statt.","Es wird auf nächste Woche verschoben.","Frau Krause leitet es."], a:1, x:"Es fällt aus und wird „nächste Woche nachgeholt“."}
   ]},
 { id:"b2-hoeren-4", skill:"L", part:"Hören Teil 3", title:"Radiogespräch: Digitale Schule", min:8, plays:1,
   ins:"Sie hören ein Gespräch einmal. Welche Aussage passt zu wem?",
   text:`Moderator: Heute diskutieren wir über Tablets im Unterricht. Frau Schmid, Sie sind Lehrerin an einer Gesamtschule. Wie sind Ihre Erfahrungen?
Frau Schmid: Überwiegend positiv. Die Schüler können in ihrem eigenen Tempo arbeiten, und ich sehe sofort, wo jemand Hilfe braucht. Allerdings fehlt oft die technische Unterstützung – wenn das WLAN ausfällt, steht der Unterricht still.
Moderator: Herr Dr. Brandt, Sie sind Hirnforscher. Sehen Sie das ähnlich?
Dr. Brandt: Nur bedingt. Studien zeigen, dass Schüler Texte auf Papier oft besser verstehen als am Bildschirm. Ich bin nicht gegen Tablets, aber sie sollten gezielt eingesetzt werden und nicht das Schreiben mit der Hand ersetzen.
Frau Schmid: Da stimme ich Ihnen zu. Handschrift üben wir weiterhin jeden Tag.`,
   q:[
    {t:"mc", s:"Wer betont, dass Schüler individuell lernen können?", o:["Der Moderator","Frau Schmid","Dr. Brandt"], a:1, x:"Frau Schmid: „in ihrem eigenen Tempo arbeiten“."},
    {t:"mc", s:"Wer verweist auf Studien zum Lesen auf Papier?", o:["Der Moderator","Frau Schmid","Dr. Brandt"], a:2, x:"Dr. Brandt: „Studien zeigen, dass Schüler Texte auf Papier oft besser verstehen.“"},
    {t:"mc", s:"Worin sind sich beide Gäste einig?", o:["Tablets sollten ganz verboten werden.","Handschrift bleibt wichtig.","Das WLAN an Schulen ist gut."], a:1, x:"Frau Schmid stimmt zu: „Handschrift üben wir weiterhin jeden Tag.“"}
   ]}
);

EXAMS.C1.splice(2,0,
 { id:"c1-lesen-3", skill:"R", part:"Lesen Teil 3", title:"Essay: Die Kunst des Nichtstuns", min:15,
   ins:"Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
   text:`Wer heute gefragt wird, wie es ihm gehe, antwortet nicht selten mit einem stolz vorgetragenen „Viel zu tun!“. Beschäftigtsein ist zum Statussymbol avanciert; Muße hingegen gerät unter Rechtfertigungsdruck. Dabei war das keineswegs immer so: In der Antike galt die freie, nicht zweckgebundene Zeit als Voraussetzung für Philosophie und Kunst – Arbeit war dagegen eher etwas, das man anderen überließ.

Neurowissenschaftliche Befunde scheinen der antiken Wertschätzung recht zu geben. Wenn wir scheinbar untätig sind, wird ein Netzwerk im Gehirn aktiv, das unter anderem für das Verknüpfen von Erinnerungen und für kreative Einfälle zuständig ist. Nicht wenige Ideen entstehen demnach gerade dann, wenn wir sie nicht bewusst suchen – unter der Dusche oder beim Spazierengehen.

Freilich wäre es naiv, daraus ein Plädoyer für die Faulheit abzuleiten. Muße ist nicht mit Langeweile gleichzusetzen und schon gar nicht mit dem ziellosen Scrollen durch soziale Netzwerke, das den Kopf eher füllt als leert. Gemeint ist vielmehr eine Zeit ohne äußere Reize, die man sich bewusst nehmen muss – in einer Welt permanenter Erreichbarkeit vielleicht die eigentliche Herausforderung.`,
   q:[
    {t:"mc", s:"Wie wurde freie Zeit in der Antike bewertet?", o:["Als Zeichen von Faulheit","Als Grundlage für geistige Tätigkeit","Als Privileg der Arbeiter"], a:1, x:"Sie galt „als Voraussetzung für Philosophie und Kunst“."},
    {t:"mc", s:"Was zeigen neurowissenschaftliche Befunde laut Text?", o:["Kreative Ideen entstehen oft in Ruhephasen.","Untätigkeit schadet dem Gedächtnis.","Nur konzentrierte Arbeit führt zu Ideen."], a:0, x:"Ideen entstehen oft, „wenn wir sie nicht bewusst suchen“."},
    {t:"mc", s:"Wie grenzt der Autor Muße ab?", o:["Muße ist dasselbe wie Langeweile.","Scrollen in sozialen Netzwerken ist eine gute Form der Muße.","Muße ist bewusst gewählte Zeit ohne äußere Reize."], a:2, x:"„Eine Zeit ohne äußere Reize, die man sich bewusst nehmen muss.“"}
   ]},
 { id:"c1-lesen-4", skill:"R", part:"Lesen Teil 4", title:"Stellungnahmen: Künstliche Intelligenz im Journalismus", min:15,
   ins:"Lesen Sie die Stellungnahmen. Wer vertritt welche Position? Ordnen Sie zu.",
   text:`a) Prof. Lindner (Medienwissenschaft): KI-Systeme können Routinemeldungen – etwa Sportergebnisse oder Börsenberichte – schneller verfassen als jeder Mensch. Das verschafft Redaktionen Freiräume für aufwendige Recherchen, sofern diese Freiräume nicht einfach eingespart werden.
b) Katrin Wolf (Chefredakteurin): Wir setzen KI ausschließlich zur Unterstützung ein, etwa beim Transkribieren von Interviews. Jeder veröffentlichte Text wird von einer Journalistin oder einem Journalisten geprüft und verantwortet.
c) Dr. Yilmaz (Ethikrat): Problematisch ist vor allem die fehlende Transparenz. Leserinnen und Leser haben ein Recht darauf zu erfahren, ob ein Text maschinell erstellt wurde.
d) Tom Berger (freier Journalist): Für uns Freie ist die Entwicklung bedrohlich. Verlage zahlen schon jetzt kaum noch für kurze Texte, weil sie diese automatisiert erstellen lassen.`,
   q:[
    {t:"match", s:"Ordnen Sie zu. Eine Aussage passt zu keiner Person (0).", left:[
      "fordert eine Kennzeichnungspflicht für KI-Texte",
      "sieht wirtschaftliche Nachteile für die eigene Berufsgruppe",
      "betont die menschliche Verantwortung für jede Veröffentlichung",
      "sieht Chancen, warnt aber vor Stellenabbau",
      "hält KI für grundsätzlich unvereinbar mit Journalismus"],
     right:["a","b","c","d"], a:[2,3,1,0,-1],
     x:"Kennzeichnung → Dr. Yilmaz (c); wirtschaftliche Nachteile → Tom Berger (d); Verantwortung → Katrin Wolf (b); Chancen mit Vorbehalt → Prof. Lindner (a); grundsätzlich unvereinbar → niemand (0)."}
   ]}
);
EXAMS.C1.splice(6,0,
 { id:"c1-hoeren-3", skill:"L", part:"Hören Teil 3", title:"Interview: Wohnen im Alter", min:8, plays:1,
   ins:"Sie hören ein Interview einmal. Wählen Sie die richtige Lösung.",
   text:`Moderatorin: Frau Professor Hartmann, Sie erforschen neue Wohnformen für ältere Menschen. Was hat sich in den letzten Jahren verändert?
Hartmann: Vor allem die Erwartungen. Die heutige Generation der Sechzig- bis Siebzigjährigen möchte so lange wie möglich selbstbestimmt leben. Das klassische Pflegeheim ist für die meisten eine Notlösung, keine Wunschvorstellung.
Moderatorin: Welche Alternativen gibt es?
Hartmann: Mehrgenerationenhäuser zum Beispiel, in denen Jung und Alt sich gegenseitig unterstützen. Oder Senioren-Wohngemeinschaften. Allerdings unterschätzen viele den Abstimmungsaufwand: Wer jahrzehntelang allein oder als Paar gelebt hat, muss sich erst wieder an Kompromisse gewöhnen.
Moderatorin: Und was müsste die Politik tun?
Hartmann: Das größte Hindernis ist der Mangel an barrierefreiem Wohnraum. Hier müssten Förderprogramme deutlich ausgeweitet werden – und zwar nicht nur für Neubauten, sondern auch für den Umbau bestehender Wohnungen.`,
   q:[
    {t:"mc", s:"Was wünschen sich ältere Menschen heute laut Prof. Hartmann?", o:["Möglichst früh in ein Pflegeheim zu ziehen","Lange selbstbestimmt zu leben","Bei ihren Kindern zu wohnen"], a:1, x:"Sie möchten „so lange wie möglich selbstbestimmt leben“."},
    {t:"mc", s:"Welche Schwierigkeit nennt sie bei gemeinschaftlichen Wohnformen?", o:["Die hohen Kosten","Man muss sich an Kompromisse gewöhnen.","Es gibt zu wenige Interessenten."], a:1, x:"Viele unterschätzen den „Abstimmungsaufwand“ und müssen sich an Kompromisse gewöhnen."},
    {t:"mc", s:"Was fordert sie von der Politik?", o:["Mehr Pflegeheime","Mehr Förderung für barrierefreies Wohnen, auch beim Umbau","Höhere Renten"], a:1, x:"Förderprogramme ausweiten – „nicht nur für Neubauten, sondern auch für den Umbau“."}
   ]},
 { id:"c1-hoeren-4", skill:"L", part:"Hören Teil 4", title:"Vortrag: Die Psychologie des Aufschiebens", min:8, plays:1,
   ins:"Sie hören einen Vortrag einmal. Sind die Aussagen richtig oder falsch?",
   text:`Prokrastination, also das chronische Aufschieben von Aufgaben, wird im Alltag gern als Faulheit oder mangelnde Disziplin abgetan. Die psychologische Forschung zeichnet ein anderes Bild: Wer aufschiebt, tut dies meist nicht, weil ihm die Aufgabe gleichgültig ist, sondern weil sie unangenehme Gefühle auslöst – etwa Versagensangst oder Überforderung. Das Aufschieben verschafft kurzfristig Erleichterung, verstärkt langfristig aber den Stress. Bemerkenswert ist, dass gerade perfektionistische Menschen besonders betroffen sind. Als wirksam haben sich Strategien erwiesen, die die Einstiegshürde senken: Statt sich vorzunehmen, eine ganze Hausarbeit zu schreiben, nimmt man sich etwa nur vor, zehn Minuten an der Gliederung zu arbeiten. Erstaunlich oft arbeitet man dann deutlich länger.`,
   q:[
    {t:"tf", s:"Laut Forschung ist Prokrastination vor allem ein Zeichen von Faulheit.", a:false, x:"Die Forschung „zeichnet ein anderes Bild“: Unangenehme Gefühle sind die Ursache."},
    {t:"tf", s:"Aufschieben bringt kurzfristig Erleichterung.", a:true, x:"„Das Aufschieben verschafft kurzfristig Erleichterung.“"},
    {t:"tf", s:"Perfektionisten schieben seltener auf als andere.", a:false, x:"Gerade perfektionistische Menschen sind „besonders betroffen“."},
    {t:"tf", s:"Kleine Anfangsziele helfen, mit einer Aufgabe zu beginnen.", a:true, x:"Strategien, „die die Einstiegshürde senken“, etwa zehn Minuten an der Gliederung."}
   ]}
);
