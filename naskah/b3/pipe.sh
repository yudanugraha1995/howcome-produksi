#!/bin/bash
# pipe.sh id...  compose + sfx + render
cd /home/user/howcome-produksi/kit
for id in "$@"; do
  T=$(python3 -c "import json;w=json.load(open('timing_${id}_full.json'))['words'];print(round(w[-1]['e']+4.2,2))")
  python3 compose_instant.py $id $T short > log_c_$id.txt 2>&1 || { echo "FAIL compose $id"; continue; }
  python3 sfx.py ${id}_short v > log_s_$id.txt 2>&1 || { echo "FAIL sfx $id"; continue; }
  if [[ $id == *_dyk ]]; then bash runone_dyk.sh ${id}_short v > log_r_$id.txt 2>&1; else bash runone.sh ${id}_short v > log_r_$id.txt 2>&1; fi
  [ -f out_${id}_short.mp4 ] && echo "OK $id $(ffprobe -v error -show_entries format=duration -of csv=p=0 out_${id}_short.mp4)" || echo "FAIL render $id"
done
echo ALLDONE
