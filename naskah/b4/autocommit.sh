#!/bin/bash
cd /home/user/howcome-produksi
while pgrep -f "run.sh .*_w" >/dev/null; do
  git add kit/timing_*_w_full.json kit/subs_*_w_short.json kit/plan_*_w_short.json kit/timing_*_w_short.json naskah/blocks_*_w.json meta/*_w.md naskah/b4 2>/dev/null
  git diff --cached --quiet || { git commit -qm "HC b4: hasil render (auto)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011yJCQ3Shtw2gXdrwF61pzf"; git pull -q --rebase --autostash origin main; git push -q origin HEAD:main; }
  sleep 120
done
