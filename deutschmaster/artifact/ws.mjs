import { chromium } from "/opt/node22/lib/node_modules/playwright/index.mjs";
const NEW = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport:{width:1280,height:900} });
const errors=[]; p.on("pageerror",e=>errors.push(e.message));
await p.goto("file://"+process.cwd()+"/deutschmaster.html"); await p.waitForSelector("h1");
const out=[];
for (const id of NEW) {
  const lvl=id.slice(0,2).toUpperCase();
  await p.evaluate(l=>go("level",{level:l}), lvl);
  await p.locator(`button.ex-item[data-id="${id}"]`).click();
  const title=await p.locator("h1").textContent();
  if (id.includes("schreiben")) {
    await p.fill("textarea.answer","Liebe Frau Weber, ich fahre nächste Woche nach Italien, weil ich Urlaub habe. Deshalb möchte ich Sie bitten, meine Blumen zu gießen. Außerdem ist der Schlüssel bei Herrn Kaya. Vielen Dank und viele Grüße, Alex");
    await p.getByRole("button",{name:"Grade my text"}).click(); await p.waitForSelector(".rubric");
    out.push(`${id} | ${title} | ${(await p.locator(".result b").textContent())}`);
  } else {
    await p.getByRole("button",{name:/Start preparation/}).click(); await p.waitForTimeout(1100);
    const t=await p.locator("#timer").textContent();
    const boxes=p.locator("input[data-act=cover]"); const n=await boxes.count(); for(let j=0;j<n;j++) await boxes.nth(j).check();
    await p.getByRole("button",{name:"Save result"}).click();
    out.push(`${id} | ${title} | timer ${t} | ${n} points | ${await p.locator("#toast").textContent()}`);
  }
}
console.log(out.join("\n")); console.log("errors:",errors); await b.close();
