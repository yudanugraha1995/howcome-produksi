#!/bin/bash
# run.sh id_w...  HC batch 22-28 Nov: Speechify henry -> compose_instant -> sfx -> render
cd /home/user/howcome-produksi/kit
for id in "$@"; do
  if [ -f out_${id}_short.mp4 ] && python3 -c "import sys,subprocess;d=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0','out_${id}_short.mp4']));sys.exit(0 if d>=49 else 1)"; then echo "SKIP $id"; continue; fi
  read -r SP TXT < <(python3 -c "import json;d=json.load(open('../naskah/b4/nar.json'))['$id'];print(d[2],d[1])")
  [ -f ../audio/$id.mp3 ] || python3 speechify_i.py $id "$SP" "$TXT" > log_tts_$id.txt 2>&1 || { echo "FAIL tts $id"; continue; }
  T=$(python3 -c "import json;w=json.load(open('timing_${id}_full.json'))['words'];print(round(min(55.0,max(50.0,w[-1]['e']+4.2)),2))")
  python3 compose_instant.py $id $T short > log_c_$id.txt 2>&1 || { echo "FAIL compose $id"; continue; }
  rm -f narasi_${id}_short.dry.mp3; python3 sfx.py ${id}_short v > log_s_$id.txt 2>&1 || { echo "FAIL sfx $id"; continue; }
  bash runone.sh ${id}_short v > log_r_$id.txt 2>&1
  D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 out_${id}_short.mp4 2>/dev/null || echo 0); python3 -c "import sys;sys.exit(0 if $D>=$T-1 else 1)" || { echo "RETRY render $id $D"; bash runone.sh ${id}_short v > log_r_$id.txt 2>&1; }
  rm -rf fr_${id}_short; [ -f out_${id}_short.mp4 ] && echo "OK $id $(ffprobe -v error -show_entries format=duration -of csv=p=0 out_${id}_short.mp4)" || echo "FAIL render $id"
done
echo ALLDONE
