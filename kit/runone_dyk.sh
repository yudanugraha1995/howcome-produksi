#!/bin/bash
# usage: runone.sh <scene-id> [v|h]   -> renders 9:16 (v, default) or 16:9 (h) to out_<id>.mp4
cd "$(dirname "$0")"; SC=$1; A=${2:-v}; export SC
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 narasi_$SC.mp3)
N=$(python3 -c "import math;print(math.ceil($DUR*30))")
rm -rf fr_$SC; mkdir fr_$SC; q=$((N/4+1))
for i in 0 1 2 3; do s=$((i*q)); e=$(((i+1)*q)); [ $e -gt $N ] && e=$N; node render_dyk.js $A fr_$SC $s $e > log_${SC}_$i.txt 2>&1 & done
wait
ffmpeg -y -v error -framerate 30 -i fr_$SC/f%05d.jpg -i narasi_$SC.mp3 -c:v libx264 -crf 18 -preset medium -pix_fmt yuv420p -c:a aac -b:a 192k -shortest -movflags +faststart out_$SC.mp4
echo "done $SC $(ls fr_$SC | wc -l)/$N"
