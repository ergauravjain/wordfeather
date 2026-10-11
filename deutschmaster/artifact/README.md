# DeutschMaster — single-page app

The hosted version of DeutschMaster: one HTML file that runs without a server.

- `build_data.py` reads the sibling repos and writes `data.json`:
  - `wordfeather/words_final.json`: A1–C1 vocabulary (4,909 words)
  - `wordfeather/grammar_*.json`: 814 grammar questions
  - `german-nouns/german_nouns/nouns.csv`: plurals for 2,413 nouns
  - `GermanWordEmbeddings/src/*.txt`: opposites, odd one out, analogies, plurals
- `content.js` + `content_more.js`: reading, listening, writing and speaking tasks for A1–C1 (original texts in Goethe format)
- `template.html`: the app; `__DATA__` and `__CONTENT__` are filled in by the build

Build:

```bash
python3 build_data.py            # writes data.json (paths assume repos in /home/user)
python3 - <<'PY'
t=open('template.html').read()
open('deutschmaster.html','w').write(t.replace('__DATA__',open('data.json').read().replace('</','<\\/')).replace('__CONTENT__',open('content.js').read()+'\n'+open('content_more.js').read()))
PY
node e2e.mjs                     # clicks through every feature (needs Playwright)
node answers.mjs                 # answers every Lesen/Hören task with its key; all must score 100 %
```
