import { chromium } from "/opt/node22/lib/node_modules/playwright/index.mjs";
const FILE = "file://" + process.cwd() + "/deutschmaster.html";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1360, height: 900 } });
const errors = []; p.on("pageerror", e => errors.push(e.message)); p.on("console", m => m.type()==="error" && !/fonts|ERR_|net::/.test(m.text()) && errors.push(m.text()));
const log = (...a) => console.log("✓", ...a);
await p.goto(FILE); await p.waitForSelector("h1");
log("home:", await p.locator("h1").first().textContent());
await p.screenshot({ path: "s-home.png", fullPage: true });

// target level
await p.getByLabel("Open C1 Advanced").getByRole("button", { name: "Set as target" }).click();
log("target chip:", await p.locator("#barRight button").textContent());
await p.getByLabel("Open B1 Intermediate").getByRole("button", { name: "Set as target" }).click();

// reading B1 Teil 1
await p.getByLabel("Open B1 Intermediate").click();
await p.waitForSelector("text=Practise B1", { state: "detached" }).catch(()=>{});
await p.getByRole("button", { name: /Mein erstes Jahr in Leipzig/ }).click();
const answers = [false, true, true, false, true, true]; // last one wrong on purpose
for (let i = 0; i < 6; i++) await p.locator(`.q >> nth=${i}`).locator(`button.opt >> nth=${answers[i] ? 0 : 1}`).click();
log("timer shows:", await p.locator("#timer").textContent());
await p.getByRole("button", { name: "Antworten prüfen" }).click();
log("reading result:", (await p.locator(".result b").textContent()));
await p.locator(".star").first().click();
await p.screenshot({ path: "s-reading.png", fullPage: true });

// matching B1 Teil 3
await p.getByRole("button", { name: "B1" }).first().click();
await p.getByRole("button", { name: /Anzeigen: Freizeitangebote/ }).click();
const sels = p.locator("select[data-act=match]"); const vals = ["0","1","3","2","-1"];
for (let j = 0; j < 5; j++) await sels.nth(j).selectOption(vals[j]);
await p.getByRole("button", { name: "Antworten prüfen" }).click();
log("matching result:", await p.locator(".result b").textContent());

// listening
await p.getByRole("button", { name: "B1" }).first().click();
await p.getByRole("button", { name: /Führung im Stadtmuseum/ }).click();
await p.getByRole("button", { name: /Abspielen/ }).click();
log("plays:", await p.locator(".audio .mono").textContent(), "| play disabled after 1:", await p.locator('[data-act=play]').isDisabled());
await p.locator(".q >> nth=0").locator("button.opt >> nth=2").click();
await p.getByRole("button", { name: "Antworten prüfen" }).click();
log("listening result:", await p.locator(".result b").textContent(), "| transcript:", await p.locator("details summary").count());

// writing
await p.getByRole("button", { name: "B1" }).first().click();
await p.getByRole("button", { name: /Termin absagen/ }).click();
await p.fill("textarea.answer", "Sehr geehrte Frau Dr. Wagner, leider kann ich am Freitag nicht zu unserem Gespräch kommen, weil ich einen Arzttermin habe. Deshalb möchte ich Sie fragen, ob wir uns am Montag treffen können. Außerdem schicke ich Ihnen vorher mein Projekt. Mit freundlichen Grüßen, Alex");
log("word count:", await p.locator("[id^=wc-]").textContent());
await p.getByRole("button", { name: "Grade my text" }).click();
await p.waitForSelector(".rubric");
log("writing graded:", await p.locator(".result b").textContent(), "|", await p.locator(".result .xs").textContent());

// speaking
await p.getByRole("button", { name: "B1" }).first().click();
await p.getByRole("button", { name: /Abschiedsfeier/ }).click();
await p.getByRole("button", { name: /Start preparation/ }).click();
await p.waitForTimeout(1200);
log("speaking prep timer:", await p.locator("#timer").textContent());
for (let j = 0; j < 4; j++) await p.locator("input[data-act=cover]").nth(j).check();
await p.getByRole("button", { name: "Save result" }).click();
log("speaking saved:", await p.locator("#toast").textContent());

// grammar round
await p.getByRole("button", { name: "B1" }).first().click();
await p.getByRole("button", { name: "Start a 10-question round" }).click();
for (let i = 0; i < 10; i++) {
  if (await p.locator("#gfill").count()) { await p.fill("#gfill", "x"); await p.locator("form[data-act=gfill] button").click(); }
  else if (await p.locator("[data-act=gmc]").count()) await p.locator("[data-act=gmc]").first().click();
  else { while (await p.locator("[data-act=gword]").count()) await p.locator("[data-act=gword]").first().click(); await p.locator("[data-act=gorder]").click(); }
  await p.locator("[data-act=gnext]").click();
}
log("grammar round:", await p.locator("h2").first().textContent());

// flashcards
await p.locator("#nav").getByRole("button", { name: "Wortschatz" }).click();
await p.locator(".fcard").click();
log("card back:", (await p.locator(".fcard").innerText()).replace(/\n+/g," | ").slice(0,140));
await p.screenshot({ path: "s-card.png" });
await p.getByRole("button", { name: /^Good/ }).click();
await p.keyboard.press("Space"); await p.keyboard.press("4");
log("cards reviewed:", await p.locator(".mono.small").first().textContent());

// gender
await p.getByRole("tab", { name: "der · die · das" }).click();
await p.locator("[data-act=gpick]").first().click();
log("gender:", await p.locator(".expl").textContent());

// games
for (const g of ["Opposites", "Odd one out", "Analogies", "Plurals"]) {
  await p.getByRole("tab", { name: "Word games" }).click().catch(()=>{});
  await p.getByRole("group", { name: "Game" }).getByRole("button", { name: g }).click();
  const q = await p.locator("section.sheet p").nth(1).textContent();
  if (await p.locator("#wplu").count()) { await p.fill("#wplu", "Test"); await p.locator("form[data-act=wplu] button").click(); }
  else await p.locator("[data-act=wpick]").first().click();
  log(`game ${g}:`, q, "→", (await p.locator(".expl").textContent()).slice(0,60));
}

// dictionary
await p.getByRole("tab", { name: "Dictionary" }).click();
await p.fill("#dq", "Wohnung"); await p.waitForTimeout(400);
log("dictionary 'Wohnung':", await p.locator(".dict-row").count(), "rows; first:", (await p.locator(".dict-row").first().innerText()).replace(/\n/g," | ").slice(0,90));

// mock exam compact
await p.locator("#nav").getByRole("button", { name: "Prüfung" }).click();
await p.getByRole("button", { name: /Compact/ }).click();
log("mock module 1:", await p.locator("h1").textContent(), await p.locator("#timer").textContent());
await p.locator(".q >> nth=0").locator("button.opt >> nth=1").click();
await p.getByRole("button", { name: "Submit module" }).click();
await p.getByRole("button", { name: "Submit module" }).click();
await p.locator("textarea.answer").first().fill("Liebe Maria, ich bin umgezogen, weil die alte Wohnung zu klein war. Die neue Wohnung ist hell und groß. Deshalb musst du mich besuchen! Viele Grüße");
await p.getByRole("button", { name: "Submit module" }).click();
await p.locator("input[data-act=cover]").first().check();
await p.getByRole("button", { name: "Finish exam" }).click();
await p.waitForSelector("text=Total");
log("mock report:", await p.locator("h1").textContent(), "|", await p.locator("h2", { hasText: "Total" }).textContent());
await p.screenshot({ path: "s-report.png", fullPage: true });

// progress + persistence across reload
await p.reload(); await p.waitForSelector("h1");
await p.locator("#nav").getByRole("button", { name: "Fortschritt" }).click();
log("progress rows after reload:", await p.locator(".dict-row").count(), "| B1 Lesen:", await p.locator("tbody tr >> nth=2").locator("td >> nth=1").textContent());
await p.screenshot({ path: "s-progress.png", fullPage: true });
await p.getByRole("button", { name: "Reset progress" }).click();
await p.getByRole("button", { name: "Delete" }).click();
log("after reset activity rows:", await p.locator(".dict-row").count());

// mobile + dark overflow check across views
const m = await b.newPage({ viewport: { width: 390, height: 844 }, colorScheme: "dark" });
m.on("pageerror", e => errors.push("mobile: " + e.message));
await m.goto(FILE); await m.waitForSelector("h1");
for (const tab of ["Start", "Levels", "Wortschatz", "Prüfung", "Fortschritt"]) {
  await m.locator("#tabbar").getByRole("button", { name: tab }).click();
  const ov = await m.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  log(`mobile ${tab} overflow:`, ov);
}
await m.locator("#tabbar").getByRole("button", { name: "Start" }).click();
await m.screenshot({ path: "s-mobile.png", fullPage: true });
await m.getByLabel("Open B1 Intermediate").click();
await m.getByRole("button", { name: /Repair-Cafés/ }).click();
log("mobile exercise overflow:", await m.evaluate(() => document.documentElement.scrollWidth - innerWidth));
await m.screenshot({ path: "s-mobile-ex.png", fullPage: true });
console.log("ERRORS:", errors);
await b.close();
