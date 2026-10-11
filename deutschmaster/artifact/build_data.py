import csv, json, re, sys
R = '/home/user'
LEVELS = ['A1','A2','B1','B2','C1']
csv.field_size_limit(10**8)

# german-nouns: lemma -> (genus, plural)
nouns = {}
with open(f'{R}/german-nouns/german_nouns/nouns.csv', encoding='utf-8') as f:
    for row in csv.DictReader(f):
        lem = row['lemma']
        if lem in nouns and nouns[lem][1]: continue
        if 'Substantiv' not in row['pos']: continue
        pl = row.get('nominativ plural') or row.get('nominativ plural 1') or ''
        nouns[lem] = (row.get('genus') or row.get('genus 1') or '', pl)

ART = {'m.':'der','f.':'die','n.':'das'}
words = json.load(open(f'{R}/wordfeather/words_final.json'))
vocab, enriched = [], 0
for w in words:
    if w['level'] not in LEVELS: continue
    de = w['de'].strip()
    a = ART.get(w.get('article') or '', '')
    lemma = re.sub(r'^(der|die|das)\s+', '', de)
    note = ''
    if a:
        m = re.match(r'^([^,(]+?)\s*(?:,\s*([^()]*?))?\s*(\(.*\))?$', lemma)
        if m:
            lemma, note = m.group(1).strip(), (m.group(3) or '').strip('() ')
    pl = ''
    if a and lemma in nouns:
        pl = nouns[lemma][1]
        if pl: enriched += 1
    if a and not pl and note.startswith('Sg'): pl = '–'
    vocab.append({'d': lemma if a else de, 'a': a, 'p': pl, 'e': w['en'], 'l': w['level'],
                  'x': w.get('example',''), 'xe': w.get('example_en',''), 'c': w.get('category') or 'Allgemein'})
vocab.sort(key=lambda v: (LEVELS.index(v['l']), v['d'].lower()))
for i, v in enumerate(vocab): v['i'] = i

grammar = []
for l in LEVELS:
    for g in json.load(open(f'{R}/wordfeather/grammar_{l.lower()}.json')):
        q = {'l': l, 't': g['topic'], 'k': g['type'], 'q': g['prompt_de'], 'qe': g.get('prompt_en',''),
             'c': g['correct'], 'x': g.get('explanation_en','')}
        if g.get('options'): q['o'] = g['options']
        if g.get('accept_orders'): q['ao'] = g['accept_orders']
        grammar.append(q)

E = f'{R}/GermanWordEmbeddings/src'
opposites = [l.strip().split('-') for l in open(f'{E}/opposite.txt', encoding='utf-8') if '-' in l]
oddone = []
for l in open(f'{E}/doesntfit.txt', encoding='utf-8'):
    parts = l.strip().split(' ')
    if len(parts) >= 4:
        oddone.append({'g': parts[:3], 'n': [x for x in parts[3].split('-') if x and not x[-1].isdigit()]})
analogies, cat = [], None
for l in open(f'{E}/bestmatch.txt', encoding='utf-8'):
    l = l.strip()
    if not l: continue
    if l.startswith(':'): cat = l[1:].strip().replace('Hauptstad-', 'Hauptstadt-'); continue
    if '-' in l: analogies.append([cat] + l.split('-', 1))
plurals = [l.strip().split('-') for l in open(f'{E}/nouns.txt', encoding='utf-8') if '-' in l]

data = {'vocab': vocab, 'grammar': grammar, 'opposites': opposites, 'oddone': oddone,
        'analogies': analogies, 'plurals': plurals,
        'stats': {'words': len(vocab), 'plurals': enriched, 'grammar': len(grammar), 'nounsLexicon': len(nouns)}}
json.dump(data, open('data.json','w'), ensure_ascii=False, separators=(',',':'))
print(data['stats'], 'analogies', len(analogies), 'odd', len(oddone))
