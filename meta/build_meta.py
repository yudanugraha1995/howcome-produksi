# Builds the "## SHORT METADATA (current)" + "## Tags" sections in meta/<id>.md
# from the TOPICS dicts in meta/longmeta_*.py (owner rule 14 Nov 2026).
# usage: python3 meta/build_meta.py [id ...]   (no ids = all)
import glob, os, re, sys, importlib.util
HERE = os.path.dirname(os.path.abspath(__file__))
TOPICS = {}
for f in sorted(glob.glob(f'{HERE}/longmeta_*.py')):
    spec = importlib.util.spec_from_file_location(os.path.basename(f)[:-3], f); m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    TOPICS.update(m.TOPICS)
    for k, v in getattr(m, 'EXTRA', {}).items(): TOPICS[k].update(v)

ABOUT = ('🎬 ABOUT HOWCOME?\nHOWCOME? turns everyday "What if...?" questions into short animated science stories with KOMO. '
         'We check real studies, bust common myths, and always end with a plot twist you did not see coming. New Shorts every day!')
SUB = '🔔 Subscribe to HOWCOME? and turn on notifications so you never miss the next "What if...?" Know someone who needs to hear this? Send it to them!'

def describe(t):
    d = [t['hook'], '', '🔍 HOW IT WORKS', t['how'], '', '📌 KEY FACTS'] + ['• ' + x for x in t['facts']]
    d += ['', '✅ ' + t.get('tips_head', 'WHAT YOU CAN DO')] + ['• ' + x for x in t['tips']]
    if t.get('faq'):
        d += ['', '❓ QUICK FAQ']
        for q, a in t['faq']: d += ['Q: ' + q, 'A: ' + a]
    d += ['', '🤯 PLOT TWIST', t['twist'], '', '💬 TELL ME IN THE COMMENTS'] + ['• ' + x for x in t['questions']]
    d += ['', '📚 SOURCES'] + ['- ' + x for x in t['sources']]
    d += ['', '⚠️ ' + t.get('disclaimer', 'This video is for education only and is not medical advice. If you have symptoms or worries about your health, talk to a doctor.')]
    d += ['', ABOUT, '', SUB, '', ' '.join(t['hashtags'])]
    return '\n'.join(d)

def build(i):
    t = TOPICS[i]; desc = describe(t); tags = ', '.join(t['tags'] + t.get('more_tags', []))
    hs = t['hashtags']
    assert 3 <= len(hs) <= 5 and '#shorts' in hs, (i, 'hashtags')
    assert len(desc) <= 5000, (i, 'desc', len(desc))
    assert len(tags) <= 500, (i, 'tags', len(tags))
    assert len(tags) >= 400, (i, 'tags too short', len(tags))
    assert '<' not in desc and '>' not in desc, (i, 'YouTube rejects < and > in descriptions')
    p = f'{HERE}/{i}.md'; s = open(p).read()
    s = re.sub(r'## SHORT METADATA \(current\).*?(?=\n## (?!Tags)|\Z)', '', s, flags=re.S).rstrip('\n') + '\n'
    lines = s.split('\n'); head = lines[0]; rest = '\n'.join(lines[1:]).lstrip('\n')
    sec = (f"## SHORT METADATA (current)\nUse this for posting (owner rule 14 Nov 2026). Older description sections below are superseded.\n"
           f"Video: videos/{t['file']}\n\nTitle: {t['title']}\n\nDescription:\n{desc}\n\n## Tags\n{tags}\n")
    open(p, 'w').write(f'{head}\n\n{sec}\n{rest}')
    return len(desc), len(tags)

if __name__ == '__main__':
    for i in (sys.argv[1:] or sorted(TOPICS)):
        print(i, *build(i))
