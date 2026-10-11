// Additional writing (Schreiben) and speaking (Sprechen) tasks for A1–B2: two of each per level.
// Original prompts in Goethe exam format.
EXAMS.A1.push(
 { id:"a1-schreiben-3", skill:"W", part:"Schreiben Teil 2", title:"Nachricht an die Nachbarin", min:15, words:[30,40],
   prompt:"Sie fahren eine Woche in Urlaub. Schreiben Sie Ihrer Nachbarin, Frau Weber, eine Nachricht.",
   points:["Wohin fahren Sie und wie lange?","Bitten Sie Frau Weber, Ihre Blumen zu gießen.","Wo ist der Schlüssel?"]},
 { id:"a1-schreiben-4", skill:"W", part:"Schreiben Teil 2", title:"E-Mail an den Chef: krank", min:15, words:[30,40],
   prompt:"Sie sind krank und können heute nicht zur Arbeit kommen. Schreiben Sie Ihrem Chef, Herrn Schmidt, eine E-Mail.",
   points:["Warum kommen Sie nicht?","Wann gehen Sie zum Arzt?","Wann kommen Sie wieder?"]},
 { id:"a1-sprechen-3", skill:"S", part:"Sprechen Teil 2", title:"Fragen stellen: Essen und Trinken", prep:30, speak:90,
   prompt:"Thema: Essen und Trinken. Stellen Sie zu jeder Karte eine Frage und beantworten Sie die Frage Ihres Partners.",
   points:["Frühstück","Lieblingsessen","Restaurant","Kaffee","Obst","Kochen"]},
 { id:"a1-sprechen-4", skill:"S", part:"Sprechen Teil 2", title:"Fragen stellen: Freizeit und Wochenende", prep:30, speak:90,
   prompt:"Thema: Freizeit. Stellen Sie zu jeder Karte eine Frage und beantworten Sie die Frage Ihres Partners.",
   points:["Sport","Kino","Wochenende","Freunde","Musik","Reisen"]}
);
EXAMS.A2.push(
 { id:"a2-schreiben-3", skill:"W", part:"Schreiben Teil 1", title:"SMS: Party am Samstag", min:10, words:[20,30],
   prompt:"Ihre Freundin Lena macht am Samstag eine Party. Sie können nicht kommen. Schreiben Sie Lena eine SMS.",
   points:["Bedanken Sie sich für die Einladung.","Warum können Sie nicht kommen?","Schlagen Sie ein anderes Treffen vor."]},
 { id:"a2-schreiben-4", skill:"W", part:"Schreiben Teil 2", title:"E-Mail an die Kursleiterin: Kurswechsel", min:20, words:[30,40],
   prompt:"Sie besuchen einen Deutschkurs am Abend. Ab nächstem Monat arbeiten Sie abends. Schreiben Sie Ihrer Kursleiterin, Frau Neumann.",
   points:["Was ist Ihr Problem?","Fragen Sie nach einem Kurs am Vormittag.","Was kostet der neue Kurs?"]},
 { id:"a2-sprechen-3", skill:"S", part:"Sprechen Teil 1", title:"Fragen zur Person", prep:30, speak:90,
   prompt:"Stellen Sie Ihrem Partner mit den Wortkarten Fragen und beantworten Sie seine Fragen.",
   points:["Geburtstag?","Wohnort?","Beruf?","Familie?","Hobby?","Lieblingsessen?"]},
 { id:"a2-sprechen-4", skill:"S", part:"Sprechen Teil 2", title:"Über sich erzählen: Feste und Feiern", prep:60, speak:90,
   prompt:"Erzählen Sie über ein Fest in Ihrer Familie.",
   points:["Welches Fest feiern Sie gern?","Wann und mit wem feiern Sie?","Was essen Sie?","Was machen Sie an diesem Tag?"]}
);
EXAMS.B1.push(
 { id:"b1-schreiben-4", skill:"W", part:"Schreiben Teil 1", title:"E-Mail an eine Freundin: Wochenendausflug", min:20, words:[80,100],
   prompt:"Sie haben am letzten Wochenende einen Ausflug gemacht. Ihre Freundin Carla konnte nicht mitkommen. Schreiben Sie Carla eine E-Mail.",
   points:["Beschreiben Sie: Wohin sind Sie gefahren und was haben Sie gemacht?","Begründen Sie: Was hat Ihnen besonders gut gefallen?","Machen Sie einen Vorschlag für einen gemeinsamen Ausflug."]},
 { id:"b1-schreiben-5", skill:"W", part:"Schreiben Teil 2", title:"Forumsbeitrag: Fleischlose Tage in Kantinen", min:25, words:[80,100],
   prompt:"Im Online-Gästebuch einer Sendung zum Thema „Fleischlose Tage in Kantinen“ lesen Sie: „Ein Veggie-Tag pro Woche in jeder Kantine wäre gut für die Gesundheit und für das Klima.“ (Jana, 29). Schreiben Sie Ihre Meinung.",
   points:["Ihre Meinung zum Thema","Gründe und Beispiele aus Ihrer Erfahrung"]},
 { id:"b1-sprechen-3", skill:"S", part:"Sprechen Teil 3", title:"Über eine Präsentation sprechen", prep:60, speak:120,
   prompt:"Ihr Partner hat eine Präsentation zum Thema „Sollten Kinder ein eigenes Handy haben?“ gehalten. Geben Sie eine Rückmeldung und stellen Sie eine Frage. Beantworten Sie danach auch die Fragen zu Ihrer eigenen Präsentation.",
   points:["Rückmeldung geben: Was war interessant?","Eine passende Frage stellen","Fragen des Partners beantworten","Höflich und begründet reagieren"]},
 { id:"b1-sprechen-4", skill:"S", part:"Sprechen Teil 1", title:"Gemeinsam etwas planen: Kursausflug", prep:60, speak:180,
   prompt:"Ihr Deutschkurs möchte am Ende des Semesters einen Ausflug machen. Planen Sie mit Ihrem Partner, was Sie organisieren müssen.",
   points:["Wohin fahren?","Wann und wie lange?","Wie fahren Sie dorthin?","Was kostet es?","Wer informiert die anderen?"]}
);
EXAMS.B2.push(
 { id:"b2-schreiben-3", skill:"W", part:"Schreiben Teil 1", title:"Forumsbeitrag: Bargeld abschaffen?", min:50, words:[150,200],
   prompt:"Sie schreiben einen Beitrag in einem Online-Forum zum Thema „Sollte Bargeld abgeschafft werden?“",
   points:["Äußern Sie Ihre Meinung.","Nennen Sie Gründe für Ihre Meinung.","Nennen Sie Nachteile des bargeldlosen Bezahlens.","Beschreiben Sie, wie man in Ihrem Heimatland bezahlt."]},
 { id:"b2-schreiben-4", skill:"W", part:"Schreiben Teil 2", title:"Nachricht an die Hausverwaltung: Lärm durch Bauarbeiten", min:25, words:[100,150],
   prompt:"In Ihrem Haus wird seit drei Wochen renoviert. Die Bauarbeiten beginnen jeden Tag um 6:30 Uhr, auch samstags. Schreiben Sie an die Hausverwaltung, Frau Albers.",
   points:["Schildern Sie die Situation.","Erklären Sie, welche Folgen der Lärm für Sie hat.","Machen Sie einen Vorschlag für eine Lösung.","Achten Sie auf einen höflichen, formellen Ton."]},
 { id:"b2-sprechen-3", skill:"S", part:"Sprechen Teil 1", title:"Vortrag: Ehrenamt", prep:900, speak:240,
   prompt:"Halten Sie einen Vortrag zum Thema „Ehrenamtliches Engagement – sollte es Pflicht für alle werden?“.",
   points:["Thema und Gliederung vorstellen","Situation beschreiben","Vor- und Nachteile abwägen","Situation im Heimatland","Eigene Meinung und Abschluss"]},
 { id:"b2-sprechen-4", skill:"S", part:"Sprechen Teil 2", title:"Diskussion: Homeoffice als Recht?", prep:60, speak:300,
   prompt:"Diskutieren Sie: Sollten Arbeitnehmer ein gesetzliches Recht auf Homeoffice haben?",
   points:["Position beziehen","Argumente begründen und Beispiele nennen","Auf Gegenargumente reagieren","Zu einem gemeinsamen Ergebnis kommen"]}
);
