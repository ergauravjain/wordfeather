import { chromium } from "/opt/node22/lib/node_modules/playwright/index.mjs";
const b = await chromium.launch(); const p = await b.newPage({ viewport:{width:1280,height:900} });
const errors=[]; p.on("pageerror",e=>errors.push(e.message));
await p.goto("file://"+process.cwd()+"/deutschmaster.html"); await p.waitForSelector("h1");
const exams = await p.evaluate(()=>Object.fromEntries(Object.entries(EXAMS).map(([l,xs])=>[l,xs.filter(e=>e.skill==="R"||e.skill==="L").map(e=>({id:e.id,title:e.title,q:e.q}))])));
let n=0, fails=[];
for (const [l,xs] of Object.entries(exams)) for (const e of xs) {
  await p.evaluate((l)=>go("level",{level:l}), l);
  await p.locator(`button.ex-item[data-id="${e.id}"]`).click();
  for (let i=0;i<e.q.length;i++){ const q=e.q[i], qs=p.locator(".q").nth(i);
    if(q.t==="tf") await qs.locator("button.opt").nth(q.a?0:1).click();
    else if(q.t==="mc") await qs.locator("button.opt").nth(q.a).click();
    else { const sel=qs.locator("select"); for(let j=0;j<q.a.length;j++) await sel.nth(j).selectOption(String(q.a[j])); } }
  await p.getByRole("button",{name:"Antworten prüfen"}).click();
  const r = await p.locator(".result b").textContent(); n++;
  if(!/^(\d+) of \1 correct$/.test(r)) fails.push(`${e.id}: ${r}`);
}
console.log("exercises answered:",n,"| not 100%:",fails,"| errors:",errors);
await b.close();
