# desc.py id_w... -> ../../meta/<id>.md (+ print text) for HC batch 22-28 Nov
import json,re,sys
exec(open('spec.py').read())
NAR=json.load(open('nar.json'))
def sents(t):
    return [s.strip() for s in re.findall(r'[^.!?]+[.!?]',t)]
def text(i):
    title,nar,sp,src,tag=NAR[i];ss=sents(nar)
    b=next(j for j,s in enumerate(ss) if s.startswith("But here"));qn=max(j for j,s in enumerate(ss) if s.endswith('?'))
    hook=ss[0];why=' '.join(ss[1:b]);tw=' '.join(ss[b+1:qn]);q=ss[qn]
    emo=title.split()[-1]
    return (f"{hook} {emo}\n\n📌 THE QUICK ANSWER\n{why}\n\n🤯 PLOT TWIST\n{tw}\n\n💬 {q} Tell us in the comments!\n\n"
            f"🎙️ FULL SCRIPT\n{nar}\n\n📚 SOURCE: {src}\n\n{'⚠️ For education and entertainment only. Habits and customs vary from place to place.' if i.split('_')[0].endswith('5') else '⚠️ For education and entertainment only, not medical advice. If something worries you, talk to a doctor.'}\n\n"
            f"🔔 Subscribe to HOWCOME? for a new \"What if...?\" about everyday life every day. Send this to a friend who does this!\n\n#shorts #howcome {tag} #whatif")
if __name__=='__main__':
    for i in sys.argv[1:]:
        t=text(i);title=NAR[i][0]
        open(f'../../meta/{i}.md','w').write(f"# {title}\n\n## SHORT METADATA (current)\nTitle: {title}\n\nDescription:\n{t}\n")
        print(len(t))
